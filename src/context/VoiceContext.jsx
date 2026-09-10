import { createContext, useContext, useCallback, useMemo, useState, useEffect, useRef } from "react";

const VoiceContext = createContext(null);

const STORAGE_KEY = "silicon-voice-muted";
const supported = typeof window !== "undefined" && "speechSynthesis" in window;

// Nombres de voces de alta calidad (neuronales / online) que priorizamos por sobre
// las voces robóticas locales del sistema, cuando el navegador las expone.
const PREFERRED_NAME_HINTS = [
  "natural",
  "neural",
  "online",
  "google",
  "wavenet",
  "premium",
  "microsoft",
  "paulina",
  "helena",
  "sabina",
  "monica",
  "mónica",
];

const LANG_PRIORITY = ["es-ar", "es-es", "es-mx", "es-us", "es-419", "es"];

function scoreVoice(voice) {
  const lang = (voice.lang || "").toLowerCase();
  if (!lang.startsWith("es")) return -1;

  let score = 0;

  const langIndex = LANG_PRIORITY.indexOf(lang);
  score += langIndex >= 0 ? (LANG_PRIORITY.length - langIndex) * 10 : 5;

  const name = (voice.name || "").toLowerCase();
  if (PREFERRED_NAME_HINTS.some((hint) => name.includes(hint))) score += 50;

  // Las voces no locales suelen ser de mayor calidad (motores neuronales en la nube).
  if (!voice.localService) score += 15;

  return score;
}

function pickBestSpanishVoice(voices) {
  const candidates = voices.map((v) => ({ voice: v, score: scoreVoice(v) })).filter((c) => c.score >= 0);
  if (candidates.length === 0) return null;
  candidates.sort((a, b) => b.score - a.score);
  return candidates[0].voice;
}

function readStoredMuted() {
  if (typeof window === "undefined") return false;
  try {
    return window.localStorage.getItem(STORAGE_KEY) === "1";
  } catch {
    return false;
  }
}

export function VoiceProvider({ children }) {
  const [muted, setMuted] = useState(readStoredMuted);
  const bestVoiceRef = useRef(null);

  useEffect(() => {
    if (!supported) return;

    const refreshVoices = () => {
      const voices = window.speechSynthesis.getVoices();
      if (voices.length > 0) {
        bestVoiceRef.current = pickBestSpanishVoice(voices);
      }
    };

    refreshVoices();
    window.speechSynthesis.addEventListener("voiceschanged", refreshVoices);
    return () => window.speechSynthesis.removeEventListener("voiceschanged", refreshVoices);
  }, []);

  const speak = useCallback(
    (text) => {
      if (!supported || muted || !text) return;
      try {
        window.speechSynthesis.cancel();
        const utterance = new window.SpeechSynthesisUtterance(text);
        const voice = bestVoiceRef.current;
        if (voice) {
          utterance.voice = voice;
          utterance.lang = voice.lang;
        } else {
          utterance.lang = "es-ES";
        }
        // Ritmo levemente más pausado y tono natural: evita el efecto "robótico"
        // de la velocidad/tono por defecto del sintetizador del navegador.
        utterance.rate = 0.95;
        utterance.pitch = 1.02;
        utterance.volume = 1;
        window.speechSynthesis.speak(utterance);
      } catch {
        // síntesis de voz no disponible en este navegador
      }
    },
    [muted]
  );

  const toggleMuted = useCallback(() => {
    setMuted((prev) => {
      const next = !prev;
      if (next && supported) {
        try {
          window.speechSynthesis.cancel();
        } catch {
          // no-op
        }
      }
      try {
        window.localStorage.setItem(STORAGE_KEY, next ? "1" : "0");
      } catch {
        // almacenamiento no disponible
      }
      return next;
    });
  }, []);

  const value = useMemo(
    () => ({ speak, muted, toggleMuted, supported }),
    [speak, muted, toggleMuted]
  );

  return <VoiceContext.Provider value={value}>{children}</VoiceContext.Provider>;
}

export function useVoice() {
  const ctx = useContext(VoiceContext);
  if (!ctx) throw new Error("useVoice must be used within a VoiceProvider");
  return ctx;
}
