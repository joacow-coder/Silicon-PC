import { Volume2, VolumeX } from "lucide-react";
import { useVoice } from "../../context/VoiceContext";
import { useBrand } from "../../context/BrandContext";

export default function VoiceToggle() {
  const { muted, toggleMuted, supported } = useVoice();
  const { phase } = useBrand();
  if (!supported) return null;

  const onSite = phase === "site";
  const style = onSite
    ? { bottom: "calc(5.5rem + env(safe-area-inset-bottom))" }
    : { top: "calc(0.75rem + env(safe-area-inset-top))" };

  return (
    <button
      type="button"
      onClick={toggleMuted}
      aria-label={muted ? "Activar locución de bienvenida" : "Silenciar locución de bienvenida"}
      aria-pressed={!muted}
      className={`fixed right-4 z-[110] inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface/80 text-ink-muted backdrop-blur-md transition-colors hover:text-ink active:scale-95 ${
        onSite ? "sm:right-7" : "sm:right-5"
      }`}
      style={style}
    >
      {muted ? <VolumeX className="h-[18px] w-[18px]" /> : <Volume2 className="h-[18px] w-[18px]" />}
    </button>
  );
}
