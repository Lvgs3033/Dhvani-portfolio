import { useTranslation } from "react-i18next";
import type { Bilingual } from "../data/portfolioData";

/**
 * Resolves a { en, de, fr } content object to a plain string in the
 * currently active UI language. Falls back to English.
 */
export function useBilingual() {
  const { i18n } = useTranslation();
  const lang = i18n.language === "de" ? "de" : i18n.language === "fr" ? "fr" : "en";
  return (field: Bilingual | string) => (typeof field === "string" ? field : field[lang] ?? field.en);
}
