import { AnimatePresence } from "framer-motion";
import { BrandProvider, useBrand } from "./context/BrandContext";
import { VoiceProvider } from "./context/VoiceContext";
import SplashScreen from "./components/intro/SplashScreen";
import BrandSelector from "./components/intro/BrandSelector";
import BrandTransition from "./components/intro/BrandTransition";
import PCSite from "./components/pc/PCSite";
import AppleSite from "./components/apple/AppleSite";
import BrandSwitcher from "./components/layout/BrandSwitcher";
import VoiceToggle from "./components/layout/VoiceToggle";

function AppShell() {
  const { phase, brand } = useBrand();

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-bg text-ink">
      <AnimatePresence mode="wait">
        {phase === "splash" && <SplashScreen key="splash" />}
        {phase === "select" && <BrandSelector key="select" />}
        {phase === "transition" && <BrandTransition key="transition" />}
        {phase === "site" && brand === "pc" && <PCSite key="site-pc" />}
        {phase === "site" && brand === "apple" && <AppleSite key="site-apple" />}
      </AnimatePresence>
      <VoiceToggle />
      {phase === "site" && <BrandSwitcher />}
    </div>
  );
}

export default function App() {
  return (
    <VoiceProvider>
      <BrandProvider>
        <AppShell />
      </BrandProvider>
    </VoiceProvider>
  );
}
