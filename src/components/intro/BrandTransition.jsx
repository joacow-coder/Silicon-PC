import { motion } from "framer-motion";
import { Cpu, Apple } from "lucide-react";
import { useBrand } from "../../context/BrandContext";
import { brands } from "../../data/brands";

export default function BrandTransition() {
  const { pendingBrand } = useBrand();
  const brand = brands[pendingBrand] ?? brands.pc;
  const Icon = pendingBrand === "apple" ? Apple : Cpu;

  return (
    <motion.div
      key="transition"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.45, ease: "easeInOut" } }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-bg overflow-hidden"
    >
      <div className="absolute inset-0 grid-fade opacity-50" />
      <motion.div
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative flex flex-col items-center gap-5"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "linear" }}
          className={`flex h-16 w-16 items-center justify-center rounded-2xl border ${
            pendingBrand === "apple"
              ? "border-apple-500/40 bg-apple-500/10"
              : "border-brand-500/40 bg-brand-500/10"
          }`}
        >
          <Icon className={pendingBrand === "apple" ? "h-7 w-7 text-apple-400" : "h-7 w-7 text-brand-400"} />
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="font-display text-lg font-medium text-ink-muted"
        >
          Entrando a{" "}
          <span className={brand.gradientClass}>{brand.name}</span>
        </motion.p>
      </motion.div>
    </motion.div>
  );
}
