import { createContext, useContext, useMemo, useState, useCallback } from "react";

const BrandContext = createContext(null);

const SPLASH_DURATION = 2200;
const TRANSITION_DURATION = 1200;

export function BrandProvider({ children }) {
  const [phase, setPhase] = useState("splash");
  const [brand, setBrand] = useState(null);
  const [pendingBrand, setPendingBrand] = useState(null);

  const finishSplash = useCallback(() => setPhase("select"), []);

  const chooseBrand = useCallback((nextBrand) => {
    setPendingBrand(nextBrand);
    setPhase("transition");
    window.setTimeout(() => {
      setBrand(nextBrand);
      setPhase("site");
    }, TRANSITION_DURATION);
  }, []);

  const backToSelector = useCallback(() => {
    setBrand(null);
    setPendingBrand(null);
    setPhase("select");
  }, []);

  const value = useMemo(
    () => ({
      phase,
      brand,
      pendingBrand,
      finishSplash,
      chooseBrand,
      backToSelector,
      splashDuration: SPLASH_DURATION,
      transitionDuration: TRANSITION_DURATION,
    }),
    [phase, brand, pendingBrand, finishSplash, chooseBrand, backToSelector]
  );

  return <BrandContext.Provider value={value}>{children}</BrandContext.Provider>;
}

export function useBrand() {
  const ctx = useContext(BrandContext);
  if (!ctx) throw new Error("useBrand must be used within a BrandProvider");
  return ctx;
}
