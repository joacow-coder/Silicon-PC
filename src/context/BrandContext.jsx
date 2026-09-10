import { createContext, useContext, useMemo, useState, useCallback } from "react";

const BrandContext = createContext(null);

const SPLASH_DURATION = 2200;

export function BrandProvider({ brand, children }) {
  const [phase, setPhase] = useState("splash");

  const finishSplash = useCallback(() => setPhase("site"), []);

  const value = useMemo(
    () => ({ phase, brand, finishSplash, splashDuration: SPLASH_DURATION }),
    [phase, brand, finishSplash]
  );

  return <BrandContext.Provider value={value}>{children}</BrandContext.Provider>;
}

export function useBrand() {
  const ctx = useContext(BrandContext);
  if (!ctx) throw new Error("useBrand must be used within a BrandProvider");
  return ctx;
}
