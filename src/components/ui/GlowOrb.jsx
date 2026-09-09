export default function GlowOrb({ className = "", color = "brand" }) {
  const colors = {
    brand: "bg-[radial-gradient(circle,var(--color-brand-500)_0%,transparent_70%)]",
    cyan: "bg-[radial-gradient(circle,var(--color-cyan-glow)_0%,transparent_70%)]",
    blue: "bg-[radial-gradient(circle,var(--color-blue-glow)_0%,transparent_70%)]",
  };
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute rounded-full blur-3xl opacity-40 animate-pulse-slow ${colors[color]} ${className}`}
    />
  );
}
