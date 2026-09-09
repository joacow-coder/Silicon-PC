import { motion } from "framer-motion";
import { Award, Users, MapPinned, Clock3, ShieldCheck, Gem } from "lucide-react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import { siteConfig } from "../../data/siteConfig";

const stats = [
  { icon: Award, value: "+15 años", label: "de trayectoria en electrónica" },
  { icon: Gem, value: "Gama alta", label: "en repuestos originales y alternativos" },
  { icon: MapPinned, value: "2", label: `sucursales en ${siteConfig.city}` },
  { icon: Clock3, value: "Mismo día", label: "de respuesta en diagnóstico" },
];

export default function AppleTrust() {
  return (
    <section id="nosotros" className="relative py-20 sm:py-28 bg-surface/40">
      <Container className="flex flex-col gap-16">
        <SectionHeading
          eyebrow="Por qué elegir Silicon Apple"
          title="Especialización real en el ecosistema Apple"
          description={`Atención dedicada a iPhone en ${siteConfig.city}, con procedimientos de marca, trazabilidad y garantía en cada reparación.`}
        />

        <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-2xl border border-border bg-surface p-6 flex flex-col gap-3"
              >
                <Icon className="h-5 w-5 text-apple-400" />
                <span className="font-display text-2xl sm:text-3xl font-semibold text-ink">
                  {stat.value}
                </span>
                <span className="text-xs sm:text-sm text-ink-muted leading-snug">{stat.label}</span>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-border bg-surface p-7 sm:p-8 flex flex-col gap-5 lg:max-w-2xl"
        >
          <h3 className="font-display text-lg font-semibold text-ink inline-flex items-center gap-2.5">
            <ShieldCheck className="h-5 w-5 text-apple-400" />
            Compromiso Silicon Apple
          </h3>
          <div className="flex flex-col gap-4">
            {siteConfig.branches.map((branch) => (
              <div key={branch.name} className="flex items-start gap-3">
                <MapPinned className="h-[18px] w-[18px] mt-0.5 text-apple-400 shrink-0" />
                <div>
                  <p className="text-sm font-medium text-ink">{branch.name}</p>
                  <p className="text-sm text-ink-muted">
                    {branch.address}, {siteConfig.city}, {siteConfig.province}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-start gap-3 pt-2 border-t border-border">
            <Users className="h-[18px] w-[18px] mt-0.5 text-apple-300 shrink-0" />
            <p className="text-sm text-ink-muted">
              El mismo equipo técnico de Silicon PC, con formación específica en dispositivos Apple.
            </p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
