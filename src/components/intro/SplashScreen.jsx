import { useEffect } from "react";
import { motion } from "framer-motion";
import Logo from "../ui/Logo";
import { useBrand } from "../../context/BrandContext";

export default function SplashScreen() {
  const { finishSplash, splashDuration } = useBrand();

  useEffect(() => {
    const timer = window.setTimeout(finishSplash, splashDuration);
    return () => window.clearTimeout(timer);
  }, [finishSplash, splashDuration]);

  return (
    <motion.div
      key="splash"
      exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-y-auto overflow-x-hidden bg-bg px-5 py-16"
    >
      <div className="absolute inset-0 grid-fade opacity-60" />
      <div
        className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30 blur-2xl sm:h-[36rem] sm:w-[36rem] sm:blur-3xl"
        style={{
          background: "radial-gradient(circle, var(--color-brand-500) 0%, transparent 70%)",
        }}
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative flex flex-col items-center gap-5 sm:gap-6"
      >
        <div className="relative">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.8, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -inset-6 rounded-[2rem] bg-brand-500/20 blur-2xl"
          />
          <Logo className="relative h-16 w-16 sm:h-24 sm:w-24" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col items-center gap-2 text-center"
        >
          <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-ink-faint sm:text-xs sm:tracking-[0.35em]">
            Bienvenido a
          </span>
          <h1 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-4xl">
            Silicon<span className="text-gradient">Group</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.7, ease: "easeOut" }}
          className="h-px w-32 origin-center bg-gradient-to-r from-transparent via-brand-400/70 to-transparent sm:w-40"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.1 }}
        className="absolute flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-ink-faint sm:text-[11px] sm:tracking-[0.3em]"
        style={{ bottom: "calc(1.5rem + env(safe-area-inset-bottom))" }}
      >
        <span className="h-1.5 w-1.5 rounded-full bg-brand-400 animate-pulse-slow" />
        Preparando tu experiencia
      </motion.div>
    </motion.div>
  );
}
