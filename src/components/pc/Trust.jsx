import { motion } from "framer-motion";
import {
  Award,
  Users,
  MapPinned,
  Clock3,
  Wallet,
  CreditCard,
  Landmark,
  Smartphone as PhonePay,
} from "lucide-react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import { siteConfig } from "../../data/siteConfig";

const stats = [
  { icon: Award, value: "+15 años", label: "de trayectoria en el rubro" },
  { icon: Users, value: "+4.000", label: "personas en nuestra comunidad" },
  { icon: MapPinned, value: "2", label: `sucursales en ${siteConfig.city}` },
  { icon: Clock3, value: "Mismo día", label: "de respuesta en diagnóstico" },
];

const paymentIcons = {
  Efectivo: Wallet,
  "Transferencia bancaria": Landmark,
  "Tarjeta de débito": CreditCard,
  "Tarjeta de crédito": CreditCard,
  "Mercado Pago": PhonePay,
};

export default function Trust() {
  return (
    <section id="nosotros" className="relative py-20 sm:py-28 bg-surface/40">
      <Container className="flex flex-col gap-16">
        <SectionHeading
          eyebrow="Por qué elegirnos"
          title="Autoridad técnica y cercanía de barrio"
          description={`${siteConfig.tagline} en ${siteConfig.city}, con dos sucursales, atención directa y trazabilidad en cada trabajo que entregamos.`}
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
                <Icon className="h-5 w-5 text-brand-400" />
                <span className="font-display text-2xl sm:text-3xl font-semibold text-ink">
                  {stat.value}
                </span>
                <span className="text-xs sm:text-sm text-ink-muted leading-snug">{stat.label}</span>
              </motion.div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-border bg-surface p-7 sm:p-8 flex flex-col gap-5"
          >
            <h3 className="font-display text-lg font-semibold text-ink">Nuestras sucursales</h3>
            <div className="flex flex-col gap-4">
              {siteConfig.branches.map((branch) => (
                <div key={branch.name} className="flex items-start gap-3">
                  <MapPinned className="h-[18px] w-[18px] mt-0.5 text-brand-400 shrink-0" />
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
              <Clock3 className="h-[18px] w-[18px] mt-0.5 text-cyan-glow shrink-0" />
              <div>
                <p className="text-sm font-medium text-ink">Horario de atención</p>
                <p className="text-sm text-ink-muted">Lunes a Sábado — 9:00 a 12:30 hs</p>
                <p className="text-sm text-ink-muted">Lunes a Sábado — 16:00 a 21:00 hs</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl border border-border bg-surface p-7 sm:p-8 flex flex-col gap-5"
          >
            <h3 className="font-display text-lg font-semibold text-ink">Medios de pago</h3>
            <p className="text-sm text-ink-muted">
              Adaptamos el pago a lo que te resulte más cómodo, en local y para presupuestos a distancia.
            </p>
            <div className="grid grid-cols-2 gap-3 pt-1">
              {siteConfig.paymentMethods.map((method) => {
                const Icon = paymentIcons[method] ?? Wallet;
                return (
                  <div
                    key={method}
                    className="flex items-center gap-2.5 rounded-xl border border-border bg-surface-2 px-3.5 py-3"
                  >
                    <Icon className="h-4 w-4 text-brand-400 shrink-0" />
                    <span className="text-xs sm:text-sm text-ink-muted">{method}</span>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
