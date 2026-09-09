export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}) {
  const alignment = align === "center" ? "items-center text-center mx-auto" : "items-start text-left";
  return (
    <div className={`flex flex-col gap-4 max-w-2xl ${alignment}`}>
      {eyebrow && (
        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-400">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-400 shadow-[0_0_12px_2px_var(--color-brand-400)]" />
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold leading-tight text-ink">
        {title}
      </h2>
      {description && (
        <p className="text-ink-muted text-base sm:text-lg leading-relaxed">{description}</p>
      )}
    </div>
  );
}
