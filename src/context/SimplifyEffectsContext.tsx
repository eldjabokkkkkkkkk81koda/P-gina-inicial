import React, { createContext, useContext } from "react";

interface SimplifyEffectsContextType {
  simplifyEffects: boolean;
}

const SimplifyEffectsContext = createContext<SimplifyEffectsContextType>({ simplifyEffects: false });

export function SimplifyEffectsProvider({ children }: { children: React.ReactNode }) {
  // Always return false, rely on performance optimizations rather than disabling effects
  return (
    <SimplifyEffectsContext.Provider value={{ simplifyEffects: false }}>
      {children}
    </SimplifyEffectsContext.Provider>
  );
}

export function useSimplifyEffects() {
  return useContext(SimplifyEffectsContext);
}
