import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, Apple, ArrowLeftRight } from "lucide-react";
import { useBrand } from "../../context/BrandContext";
import { brands } from "../../data/brands";

export default function BrandSwitcher() {
  const { brand, switchBrand } = useBrand();
  const [open, setOpen] = useState(false);
  if (!brand) return null;

  const other = brand === "pc" ? "apple" : "pc";
  const OtherIcon = other === "apple" ? Apple : Cpu;
  const isApple = brand === "apple";

  return (
    <div className="fixed bottom-5 left-5 sm:bottom-7 sm:left-7 z-40 flex flex-col items-start gap-3">
      <AnimatePresence>
        {open && (
          <motion.button
            key="switch-option"
            type="button"
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            onClick={() => {
              switchBrand(other);
              setOpen(false);
            }}
            className="glass inline-flex items-center gap-2.5 rounded-full py-3 pl-4 pr-5 text-sm font-semibold text-ink shadow-[0_15px_40px_-15px_rgba(0,0,0,0.7)] hover:border-white/20 transition-colors"
          >
            <OtherIcon className={other === "apple" ? "h-4 w-4 text-apple-400" : "h-4 w-4 text-brand-400"} />
            {brands[other].switchLabel}
          </motion.button>
        )}
      </AnimatePresence>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label="Cambiar de división"
        aria-expanded={open}
        className={`inline-flex h-14 w-14 items-center justify-center rounded-full border transition-transform hover:scale-105 active:scale-95 ${
          isApple
            ? "border-apple-500/40 bg-surface text-apple-300"
            : "border-brand-500/40 bg-surface text-brand-400"
        }`}
      >
        <ArrowLeftRight className="h-5 w-5" />
      </button>
    </div>
  );
}
