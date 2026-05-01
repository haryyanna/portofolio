import { createContext, useCallback, useContext, useMemo, useState } from "react";
import { translations } from "@/i18n/translations";

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("id");

  const toggle = useCallback(() => {
    setLang((current) => (current === "id" ? "en" : "id"));
  }, []);

  const value = useMemo(
    () => ({
      lang,
      setLang,
      toggle,
      t: translations[lang],
    }),
    [lang, toggle],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }

  return context;
}
