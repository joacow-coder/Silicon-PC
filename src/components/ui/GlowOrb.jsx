export default function GlowOrb({ className = "", color = "brand" }) {
  const colors = {
    brand: "bg-[radial-gradient(circle,var(--color-brand-500)_0%,transparent_70%)]",
    cyan: "bg-[radial-gradient(circle,var(--color-cyan-glow)_0%,transparent_70%)]",
    blue: "bg-[radial-gradient(circle,var(--color-blue-glow)_0%,transparent_70%)]",
    apple: "bg-[radial-gradient(circle,var(--color-apple-500)_0%,transparent_70%)]",
    silver: "bg-[radial-gradient(circle,var(--color-apple-silver)_0%,transparent_70%)]",
  };
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute rounded-full opacity-40 blur-2xl animate-pulse-slow sm:blur-3xl ${colors[color]} ${className}`}
    />
  );
}
