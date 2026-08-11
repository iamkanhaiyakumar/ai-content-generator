"use client";

import { createContext, useContext, useEffect, useState } from "react";
import {
  translations,
  type LanguageCode,
} from "@/app/(data)/translations";

interface LanguageContextType {
  language: LanguageCode;
  setLanguage: (language: LanguageCode) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
  t: (key) => key,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // Default to English on the server and the first client render (avoids a
  // hydration mismatch); switch to the stored language after mount.
  const [language, setLanguageState] = useState<LanguageCode>("en");

  useEffect(() => {
    const stored = localStorage.getItem("language") as LanguageCode | null;
    if (stored && translations[stored]) {
      setLanguageState(stored);
      document.documentElement.lang = stored;
    }
  }, []);

  const setLanguage = (next: LanguageCode) => {
    setLanguageState(next);
    localStorage.setItem("language", next);
    document.documentElement.lang = next;
  };

  // Look up the active language, falling back to English, then the raw key.
  const t = (key: string) =>
    translations[language]?.[key] ?? translations.en[key] ?? key;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
