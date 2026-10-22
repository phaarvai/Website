"use client";

import { createContext, useContext, useMemo, useState, type ReactNode } from "react";

interface RroContextValue {
  language: string;
  setLanguage: (value: string) => void;
  selectedInterventions: number[];
  toggleIntervention: (id: number) => void;
}

const RroContext = createContext<RroContextValue | null>(null);

export function RroProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState("en");
  const [selectedInterventions, setSelectedInterventions] = useState<number[]>([]);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      selectedInterventions,
      toggleIntervention: (id: number) =>
        setSelectedInterventions((prev) =>
          prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
        ),
    }),
    [language, selectedInterventions]
  );

  return <RroContext.Provider value={value}>{children}</RroContext.Provider>;
}

export function useRro() {
  const ctx = useContext(RroContext);
  if (!ctx) throw new Error("useRro must be used inside RroProvider");
  return ctx;
}

