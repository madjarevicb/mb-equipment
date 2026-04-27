import type { Locale } from "@/i18n/config";

/**
 * Maps a product slug (used in `?product=` query params from CtaTriad) to a
 * human-friendly display label per locale. Used by the contact page to show
 * an "Asking about" banner and to pre-fill the message field.
 */
export const PRODUCT_LABELS: Record<string, { en: string; sr: string }> = {
  "combi-ovens": {
    en: "Combi Ovens (Houno + Lincat)",
    sr: "Parno-konvekcijske peći (Houno + Lincat)",
  },
  "cooking-line": {
    en: "Modular Cooking Line (Silko + Lincat)",
    sr: "Modularna linija za kuvanje (Silko + Lincat)",
  },
  "josper-charcoal-grills": {
    en: "Josper Charcoal Grills",
    sr: "Josper roštilji na ugalj",
  },
  "custom-fabrication": {
    en: "Custom Stainless Steel Fabrication",
    sr: "Inox po meri",
  },
  "waste-station-imc": {
    en: "IMC WasteStation",
    sr: "IMC WasteStation",
  },
  "display-cases": {
    en: "Refrigerated Display Cases",
    sr: "Rashladne vitrine",
  },
  "upright-undercounter": {
    en: "Upright & Undercounter Refrigeration",
    sr: "Vertikalna i horizontalna rashladna oprema",
  },
  "cold-rooms": {
    en: "Modular Cold Rooms",
    sr: "Montažne rashladne komore",
  },
  equipment: {
    en: "Equipment portfolio (general)",
    sr: "Portfolio opreme (opšte)",
  },
};

export function getProductLabel(
  slug: string | undefined,
  locale: Locale,
): string | null {
  if (!slug) return null;
  const entry = PRODUCT_LABELS[slug];
  if (!entry) return null;
  return locale === "sr" ? entry.sr : entry.en;
}
