import { createContext, useContext, useCallback, useMemo, useState } from "react";

const VoiceContext = createContext(null);

const STORAGE_KEY = "silicon-voice-muted";
const supported = typeof window !== "undefined" && "speechSynthesis" in window;

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

  const speak = useCallback(
    (text) => {
      if (!supported || muted || !text) return;
      try {
        window.speechSynthesis.cancel();
        const utterance = new window.SpeechSynthesisUtterance(text);
        utterance.lang = "es-AR";
        utterance.rate = 1;
        utterance.pitch = 1;
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
