import { useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { BrandProvider, useBrand } from "./context/BrandContext";
import SplashScreen from "./components/intro/SplashScreen";
import BrandSelector from "./components/intro/BrandSelector";
import BrandTransition from "./components/intro/BrandTransition";
import PCSite from "./components/pc/PCSite";
import AppleSite from "./components/apple/AppleSite";

const META_DESCRIPTION = {
  pc: "Silicon PC, Lobos — Servicio técnico especializado en electrónica, PCs y componentes, más de 15 años en el rubro. Venta de componentes, accesorios y repuestos con garantía.",
  apple:
    "Silicon Apple, Lobos — Service técnico avanzado de iPhone y ecosistema Apple: módulos, baterías, liberaciones y repuestos con garantía escrita.",
};

function AppShell() {
  const { phase, brand } = useBrand();

  useEffect(() => {
    if (!brand) return;
    document.title =
      brand === "apple"
        ? "Silicon Apple — Service técnico iPhone"
        : "Silicon PC — Servicio Técnico y Electrónica";

    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", META_DESCRIPTION[brand] ?? META_DESCRIPTION.pc);
  }, [brand]);

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-bg text-ink">
      <AnimatePresence mode="wait">
        {phase === "splash" && <SplashScreen key="splash" />}
        {phase === "select" && <BrandSelector key="select" />}
        {phase === "transition" && <BrandTransition key="transition" />}
        {phase === "site" && brand === "pc" && <PCSite key="site-pc" />}
        {phase === "site" && brand === "apple" && <AppleSite key="site-apple" />}
      </AnimatePresence>
    </div>
  );
}

export default function App() {
  return (
    <BrandProvider>
      <AppShell />
    </BrandProvider>
  );
}
