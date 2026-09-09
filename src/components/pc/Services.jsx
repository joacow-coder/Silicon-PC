import { motion } from "framer-motion";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import { services } from "../../data/services";
import { Check } from "lucide-react";

export default function Services() {
  return (
    <section id="servicios" className="relative py-20 sm:py-28">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrow="Servicio técnico"
          title="Diagnóstico y reparación con criterio profesional"
          description="Trabajamos con procedimientos claros y repuestos verificados, para que sepas exactamente qué se hace en tu equipo y por qué."
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                className="group relative rounded-2xl border border-border bg-surface p-6 sm:p-7 transition-colors hover:border-cyan-glow/40"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-500/0 via-transparent to-cyan-glow/0 opacity-0 group-hover:opacity-100 group-hover:from-brand-500/5 group-hover:to-cyan-glow/5 transition-opacity" />
                <div className="relative flex flex-col gap-4">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-surface-2 border border-border text-brand-400 group-hover:text-cyan-glow group-hover:border-cyan-glow/40 transition-colors">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-ink">{service.title}</h3>
                  <p className="text-sm leading-relaxed text-ink-muted">{service.description}</p>
                  <ul className="mt-1 flex flex-col gap-2">
                    {service.points.map((point) => (
                      <li key={point} className="flex items-center gap-2 text-xs text-ink-muted">
                        <Check className="h-3.5 w-3.5 text-cyan-glow shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
