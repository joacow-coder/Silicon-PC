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
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-bg overflow-hidden"
    >
      <div className="absolute inset-0 grid-fade opacity-60" />
      <div
        className="absolute left-1/2 top-1/2 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, var(--color-brand-500) 0%, transparent 70%)",
        }}
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative flex flex-col items-center gap-6"
      >
        <div className="relative">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.8, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -inset-6 rounded-[2rem] bg-brand-500/20 blur-2xl"
          />
          <Logo className="relative h-20 w-20 sm:h-24 sm:w-24" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col items-center gap-2 text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-ink-faint">
            Bienvenido a
          </span>
          <h1 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-ink">
            Silicon<span className="text-gradient-pc">PC</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.7, ease: "easeOut" }}
          className="h-px w-40 origin-center bg-gradient-to-r from-transparent via-brand-400/70 to-transparent"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.1 }}
        className="absolute bottom-12 flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-ink-faint"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-brand-400 animate-pulse-slow" />
        Preparando tu experiencia
      </motion.div>
    </motion.div>
  );
}
