import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, ShieldCheck, Timer, Apple } from "lucide-react";
import Container from "../ui/Container";
import GlowOrb from "../ui/GlowOrb";
import Badge from "../ui/Badge";
import { siteConfig } from "../../data/siteConfig";

export default function AppleHero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
      <div className="absolute inset-0 grid-fade" />
      <GlowOrb color="blue" className="h-[26rem] w-[26rem] -top-32 -left-24" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute rounded-full blur-3xl opacity-30 animate-pulse-slow h-[22rem] w-[22rem] top-10 -right-20 bg-[radial-gradient(circle,var(--color-apple-500)_0%,transparent_70%)]"
      />

      <Container className="relative grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col items-start gap-6"
        >
          <Badge tone="apple">
            <Apple className="h-3.5 w-3.5" />
            Especialistas Apple en {siteConfig.city}
          </Badge>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05] tracking-tight text-ink">
            Tu iPhone, en manos{" "}
            <span className="text-gradient-apple">expertas</span>.
          </h1>

          <p className="max-w-xl text-base sm:text-lg leading-relaxed text-ink-muted">
            Service técnico avanzado para iPhone: módulos, baterías, liberaciones y
            repuestos originales o alternativos de gama alta, con garantía escrita.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 pt-2 w-full sm:w-auto">
            <a
              href={siteConfig.whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-apple-500 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_0_30px_-6px_var(--color-apple-500)] hover:bg-apple-400 transition-colors"
            >
              <MessageCircle className="h-[18px] w-[18px]" />
              Consultar por WhatsApp
            </a>
            <a
              href="#catalogo"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-6 py-3.5 text-sm font-semibold text-ink hover:border-apple-500/50 hover:text-apple-300 transition-colors"
            >
              Ver reparaciones
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-x-8 gap-y-3 pt-6 text-sm text-ink-muted">
            <span className="inline-flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-apple-400" />
              Garantía por escrito
            </span>
            <span className="inline-flex items-center gap-2">
              <Timer className="h-4 w-4 text-apple-300" />
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
          <AppleDeviceArt />
        </motion.div>
      </Container>
    </section>
  );
}

function AppleDeviceArt() {
  return (
    <div className="relative aspect-square w-full">
      <div className="absolute inset-6 rounded-[2.5rem] glass shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)] animate-float">
        <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden">
          <div className="absolute inset-0 opacity-[0.15] grid-fade" />
          <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-apple-400/60 to-transparent animate-scan" />
        </div>

        <div className="relative h-full w-full flex flex-col items-center justify-center gap-5 p-8">
          <Apple className="h-24 w-24 sm:h-28 sm:w-28 text-apple-300" strokeWidth={1.2} />
        </div>
      </div>

      <FloatingBadge
        className="top-2 -left-2 sm:-left-6"
        icon={<ShieldCheck className="h-4 w-4 text-apple-400" />}
        label="Garantía escrita"
        delay={0}
      />
      <FloatingBadge
        className="bottom-6 -right-2 sm:-right-6"
        icon={<Timer className="h-4 w-4 text-apple-300" />}
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
