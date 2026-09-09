import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, ShieldCheck, Timer } from "lucide-react";
import Container from "../ui/Container";
import GlowOrb from "../ui/GlowOrb";
import Badge from "../ui/Badge";
import AppleMark from "../ui/AppleMark";
import { siteConfig } from "../../data/siteConfig";

export default function AppleHero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
      <div className="absolute inset-0 grid-fade" />
      <GlowOrb color="silver" className="h-64 w-64 -top-20 -left-16 sm:h-[26rem] sm:w-[26rem] sm:-top-32 sm:-left-24" />
      <GlowOrb color="apple" className="h-56 w-56 top-6 -right-16 opacity-30 sm:h-[22rem] sm:w-[22rem] sm:top-10 sm:-right-20" />

      <Container className="relative grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col items-start gap-6"
        >
          <Badge tone="apple">
            <AppleMark className="h-3.5 w-3.5" />
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
      <div className="absolute inset-6 rounded-[2.75rem] titanium-surface glass shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)] animate-float">
        <div className="absolute inset-0 rounded-[2.75rem] overflow-hidden">
          <div className="absolute inset-0 opacity-[0.12] grid-fade" />
          <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-apple-silver/40 to-transparent" />
        </div>

        <div className="relative h-full w-full flex flex-col items-center justify-center gap-4 p-6 sm:gap-5 sm:p-8">
          <AppleMark className="h-20 w-20 text-apple-silver sm:h-24 sm:w-24" />
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-apple-300/70 sm:text-xs">
            Ecosistema Apple
          </span>
        </div>
      </div>

      <FloatingBadge
        className="top-2 -left-1 sm:-left-6"
        icon={<ShieldCheck className="h-4 w-4 text-apple-400" />}
        label="Garantía escrita"
        delay={0}
      />
      <FloatingBadge
        className="bottom-6 -right-1 sm:-right-6"
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
      className={`absolute glass rounded-full px-4 py-3 flex items-center gap-2.5 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.7)] ${className}`}
    >
      {icon}
      <span className="text-xs font-medium text-ink whitespace-nowrap">{label}</span>
    </motion.div>
  );
}
