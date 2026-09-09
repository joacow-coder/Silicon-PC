const tones = {
  brand: "bg-brand-500/10 text-brand-300 border-brand-500/30",
  cyan: "bg-cyan-glow/10 text-cyan-glow border-cyan-glow/30",
  neutral: "bg-white/5 text-ink-muted border-white/10",
};

export default function Badge({ children, tone = "neutral", className = "" }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium ${tones[tone]} ${className}`}
    >
      {children}
    </span>
  );
}
