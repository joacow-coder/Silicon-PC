import { motion } from "framer-motion";
import { Cpu, ArrowRight } from "lucide-react";
import Logo from "../ui/Logo";
import AppleMark from "../ui/AppleMark";
import { useBrand } from "../../context/BrandContext";

const options = [
  {
    key: "pc",
    title: "Silicon PC",
    description:
      "Componentes de electrónica, armado de PCs, accesorios y service técnico general.",
    gradient: "text-gradient-pc",
    ring: "hover:border-brand-500/50 focus-visible:border-brand-500/60",
    glow: "group-hover:bg-brand-500/10",
    accentText: "text-brand-400",
  },
  {
    key: "apple",
    title: "Silicon Apple",
    description:
      "Venta y service técnico avanzado de iPhone y dispositivos del ecosistema Apple.",
    gradient: "text-gradient-apple",
    ring: "hover:border-apple-500/50 focus-visible:border-apple-500/60",
    glow: "group-hover:bg-apple-500/10",
    accentText: "text-apple-400",
  },
];

export default function BrandSelector() {
  const { chooseBrand } = useBrand();

  return (
    <motion.div
      key="select"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-y-auto overflow-x-hidden bg-bg px-5 py-16"
    >
      <div className="absolute inset-0 grid-fade opacity-50" />

      <motion.div
        initial={{ opacity: 0, y: -14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative mb-8 flex flex-col items-center gap-4 text-center sm:mb-14"
      >
        <Logo className="h-11 w-11 sm:h-14 sm:w-14" />
        <div>
          <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-ink-faint sm:text-xs">
            Elegí tu experiencia
          </span>
          <h2 className="mt-3 font-display text-xl font-semibold tracking-tight text-ink sm:text-3xl">
            ¿Qué estás buscando hoy?
          </h2>
        </div>
      </motion.div>

      <div className="relative grid w-full max-w-3xl grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
        {options.map((option, i) => {
          const isApple = option.key === "apple";
          return (
            <motion.button
              key={option.key}
              type="button"
              onClick={() => chooseBrand(option.key)}
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.15 + i * 0.12, ease: "easeOut" }}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.98 }}
              className={`group relative flex flex-col items-start gap-4 overflow-hidden rounded-3xl border border-border bg-surface p-6 text-left transition-colors sm:gap-5 sm:p-8 ${option.ring}`}
            >
              <div
                className={`pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full blur-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${option.glow}`}
              />
              <div className="relative inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-border bg-surface-2 sm:h-12 sm:w-12">
                {isApple ? (
                  <AppleMark className={`h-5 w-5 sm:h-6 sm:w-6 ${option.accentText}`} />
                ) : (
                  <Cpu className={`h-5 w-5 sm:h-6 sm:w-6 ${option.accentText}`} />
                )}
              </div>
              <div className="relative flex flex-col gap-2">
                <h3 className="font-display text-lg font-semibold text-ink sm:text-xl">
                  Silicon<span className={option.gradient}>{option.title.replace("Silicon", "")}</span>
                </h3>
                <p className="text-sm leading-relaxed text-ink-muted">{option.description}</p>
              </div>
              <span className="relative mt-1 inline-flex items-center gap-1.5 text-sm font-semibold text-ink-muted transition-colors group-hover:text-ink sm:mt-2">
                Ingresar
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </motion.button>
          );
        })}
      </div>
    </motion.div>
  );
}
