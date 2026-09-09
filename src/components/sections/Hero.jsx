import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, ShieldCheck, Timer, Sparkles } from "lucide-react";
import Container from "../ui/Container";
import GlowOrb from "../ui/GlowOrb";
import Badge from "../ui/Badge";
import { siteConfig } from "../../data/siteConfig";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
      <div className="absolute inset-0 grid-fade" />
      <GlowOrb color="brand" className="h-[26rem] w-[26rem] -top-32 -left-24" />
      <GlowOrb color="cyan" className="h-[22rem] w-[22rem] top-10 -right-20" />

      <Container className="relative grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col items-start gap-6"
        >
          <Badge tone="brand">
            <Sparkles className="h-3.5 w-3.5" />
            {siteConfig.tagline} en {siteConfig.city}
          </Badge>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05] tracking-tight text-ink">
            Tecnología que{" "}
            <span className="text-gradient">funciona</span>, service que
            {" "}<span className="text-gradient">responde</span>.
          </h1>

          <p className="max-w-xl text-base sm:text-lg leading-relaxed text-ink-muted">
            Diagnóstico profesional, reparación de celulares y electrónica, y venta de
            componentes con garantía escrita. Un mismo equipo técnico, dos sucursales en
            {" "}{siteConfig.city}.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 pt-2 w-full sm:w-auto">
            <a
              href={siteConfig.whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-500 px-6 py-3.5 text-sm font-semibold text-[#04170c] shadow-[0_0_30px_-6px_var(--color-brand-500)] hover:bg-brand-400 transition-colors"
            >
              <MessageCircle className="h-[18px] w-[18px]" />
              Consultar por WhatsApp
            </a>
            <a
              href="#catalogo"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-6 py-3.5 text-sm font-semibold text-ink hover:border-cyan-glow/50 hover:text-cyan-glow transition-colors"
            >
              Ver catálogo
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-x-8 gap-y-3 pt-6 text-sm text-ink-muted">
            <span className="inline-flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-brand-400" />
              Garantía por escrito
            </span>
            <span className="inline-flex items-center gap-2">
              <Timer className="h-4 w-4 text-cyan-glow" />
              Diagnóstico en el día
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          className="relative mx-auto w-full max-w-md"
        >
          <HeroDeviceArt />
        </motion.div>
      </Container>
    </section>
  );
}

function HeroDeviceArt() {
  return (
    <div className="relative aspect-square w-full">
      <div className="absolute inset-6 rounded-[2.5rem] glass shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)] animate-float">
        <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden">
          <div className="absolute inset-0 opacity-[0.15] grid-fade" />
          <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-brand-400/60 to-transparent animate-scan" />
        </div>

        <div className="relative h-full w-full flex flex-col items-center justify-center gap-5 p-8">
          <svg viewBox="0 0 120 120" className="h-28 w-28 sm:h-32 sm:w-32">
            <rect x="10" y="10" width="100" height="100" rx="24" fill="none" stroke="var(--color-border)" strokeWidth="2" />
            <path
              d="M78 32H46c-6 0-11 5-11 11s5 11 11 11h20c3.3 0 6 2.7 6 6s-2.7 6-6 6H36"
              stroke="var(--color-brand-400)"
              strokeWidth="7"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M42 88h32c6 0 11-5 11-11s-5-11-11-11H54c-3.3 0-6-2.7-6-6s2.7-6 6-6h30"
              stroke="var(--color-cyan-glow)"
              strokeWidth="7"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
        </div>
      </div>

      <FloatingBadge
        className="top-2 -left-2 sm:-left-6"
        icon={<ShieldCheck className="h-4 w-4 text-brand-400" />}
        label="Garantía escrita"
        delay={0}
      />
      <FloatingBadge
        className="bottom-6 -right-2 sm:-right-6"
        icon={<Timer className="h-4 w-4 text-cyan-glow" />}
        label="Respuesta en el día"
        delay={0.3}
      />
    </div>
  );
}

function FloatingBadge({ className, icon, label, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6 + delay }}
      className={`absolute glass rounded-2xl px-4 py-3 flex items-center gap-2.5 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.7)] ${className}`}
    >
      {icon}
      <span className="text-xs font-medium text-ink whitespace-nowrap">{label}</span>
    </motion.div>
  );
}
