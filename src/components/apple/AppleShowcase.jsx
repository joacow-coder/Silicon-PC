import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Badge from "../ui/Badge";
import { appleShowcase } from "../../data/appleProducts";
import { siteConfig } from "../../data/siteConfig";

const availabilityTone = {
  "En stock": "brand",
  "Por encargo": "cyan",
};

export default function AppleShowcase() {
  return (
    <section id="catalogo" className="relative py-20 sm:py-28 bg-surface/40">
      <Container className="flex flex-col gap-12">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Escaparate"
            title="Repuestos, accesorios y equipos Apple"
            description="Stock verificado localmente. Consultá disponibilidad y precio actualizado por WhatsApp antes de acercarte."
          />
          <a
            href={siteConfig.whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 self-start text-sm font-semibold text-apple-300 hover:text-apple-200 transition-colors shrink-0"
          >
            Consultar stock completo
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {appleShowcase.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.a
                key={item.title}
                href={siteConfig.whatsappLink}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.07 }}
                className="group relative flex flex-col justify-between gap-6 overflow-hidden rounded-2xl border border-border bg-surface p-6 min-h-[220px] hover:border-apple-500/40 transition-colors"
              >
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-apple-500/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative flex items-start justify-between">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-surface-2 border border-border text-apple-400 group-hover:scale-110 group-hover:text-apple-300 transition-all">
                    <Icon className="h-5 w-5" />
                  </div>
                  <Badge tone={availabilityTone[item.availability]}>{item.availability}</Badge>
                </div>

                <div className="relative flex flex-col gap-2">
                  <h3 className="font-display text-base font-semibold text-ink">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-ink-muted">{item.description}</p>
                </div>

                <div className="relative inline-flex items-center gap-1.5 text-xs font-semibold text-ink-muted group-hover:text-apple-300 transition-colors">
                  Consultar precio
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </motion.a>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
