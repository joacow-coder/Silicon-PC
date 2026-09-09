import { createContext, useContext, useMemo, useState, useCallback } from "react";

const BrandContext = createContext(null);

const SPLASH_DURATION = 2600;
const TRANSITION_DURATION = 1400;

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

  const switchBrand = useCallback(
    (nextBrand) => {
      if (nextBrand === brand) return;
      setPendingBrand(nextBrand);
      setPhase("transition");
      window.setTimeout(() => {
        setBrand(nextBrand);
        setPhase("site");
      }, TRANSITION_DURATION);
    },
    [brand]
  );

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
      switchBrand,
      backToSelector,
      splashDuration: SPLASH_DURATION,
      transitionDuration: TRANSITION_DURATION,
    }),
    [phase, brand, pendingBrand, finishSplash, chooseBrand, switchBrand, backToSelector]
  );

  return <BrandContext.Provider value={value}>{children}</BrandContext.Provider>;
}

export function useBrand() {
  const ctx = useContext(BrandContext);
  if (!ctx) throw new Error("useBrand must be used within a BrandProvider");
  return ctx;
}
