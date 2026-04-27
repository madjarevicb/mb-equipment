/**
 * brandTaxonomy.ts
 *
 * Maps every brand from /src/data/our-brands.ts to one of the four
 * super-categories used on the /equipment hub page, and assigns a
 * target landing route inside our equipment information architecture.
 *
 * Source of truth for the brand list itself: /src/data/our-brands.ts
 * — DO NOT duplicate brand records here. We only carry mappings.
 */

import { brands as ALL_BRANDS } from "@/data/our-brands";
import type { Brand } from "@/data/our-brands";

export type SuperCategory =
  | "cooking"
  | "refrigeration"
  | "neutral-inox"
  | "waste-management";

export interface SuperCategoryMeta {
  id: SuperCategory;
  label: string;
  shortLabel: string;
  href: (locale: string) => string;
  italicDescriptor: string;
}

export const SUPER_CATEGORIES: SuperCategoryMeta[] = [
  {
    id: "cooking",
    label: "Cooking",
    shortLabel: "Cooking",
    href: (l) => `/${l}/equipment/thermal-processing`,
    italicDescriptor:
      "Charcoal grills, combi ovens, modular cooking lines.",
  },
  {
    id: "refrigeration",
    label: "Refrigeration",
    shortLabel: "Refrigeration",
    href: (l) => `/${l}/equipment/refrigeration`,
    italicDescriptor:
      "Upright, undercounter, display cases, modular cold rooms.",
  },
  {
    id: "neutral-inox",
    label: "Neutral & Inox",
    shortLabel: "Neutral & Inox",
    href: (l) => `/${l}/equipment/neutral-inox`,
    italicDescriptor: "Custom stainless fabrication, warewashing.",
  },
  {
    id: "waste-management",
    label: "Waste Management",
    shortLabel: "Waste",
    href: (l) => `/${l}/equipment/neutral-inox/waste-management`,
    italicDescriptor: "IMC WasteStation, food-waste handling.",
  },
];

/**
 * Per-brand override: explicit super-category and target href for the brand
 * card. When a brand is not listed here, we fall back to a heuristic map
 * keyed off the brand's source category string.
 */
const BRAND_OVERRIDES: Record<
  string,
  { category: SuperCategory; hrefSlug?: string }
> = {
  // Cooking — flagship hubs
  Josper: { category: "cooking", hrefSlug: "thermal-processing/charcoal-grills" },
  Houno: { category: "cooking", hrefSlug: "thermal-processing/combi-ovens" },
  Hounö: { category: "cooking", hrefSlug: "thermal-processing/combi-ovens" },
  Lincat: { category: "cooking", hrefSlug: "thermal-processing/ranges" },
  Silko: { category: "cooking", hrefSlug: "thermal-processing/ranges" },
  Pitco: { category: "cooking", hrefSlug: "thermal-processing/fryers" },
  Anets: { category: "cooking", hrefSlug: "thermal-processing/pasta-cookers" },
  Frifri: { category: "cooking", hrefSlug: "thermal-processing/fryers" },
  Firex: { category: "cooking", hrefSlug: "thermal-processing/ranges" },
  Jade: { category: "cooking", hrefSlug: "thermal-processing/ranges" },
  "Imperial Range": { category: "cooking", hrefSlug: "thermal-processing/ranges" },
  Southbend: { category: "cooking", hrefSlug: "thermal-processing/ranges" },
  Goldstein: { category: "cooking", hrefSlug: "thermal-processing/ranges" },
  Ultrafryer: { category: "cooking", hrefSlug: "thermal-processing/fryers" },
  "Perfect Fry": { category: "cooking", hrefSlug: "thermal-processing/fryers" },
  Blodgett: { category: "cooking", hrefSlug: "thermal-processing/combi-ovens" },
  TurboChef: { category: "cooking", hrefSlug: "thermal-processing/combi-ovens" },
  "Middleby Marshall": { category: "cooking", hrefSlug: "thermal-processing/combi-ovens" },
  "Bakers Pride": { category: "cooking", hrefSlug: "thermal-processing/combi-ovens" },
  "Beech Ovens": { category: "cooking", hrefSlug: "thermal-processing/charcoal-grills" },
  "MagiKitch'n": { category: "cooking", hrefSlug: "thermal-processing/charcoal-grills" },
  Nieco: { category: "cooking", hrefSlug: "thermal-processing/charcoal-grills" },
  "Bake Off": { category: "cooking", hrefSlug: "thermal-processing/combi-ovens" },
  "Sveba Dahlen": { category: "cooking", hrefSlug: "thermal-processing/combi-ovens" },
  Doyon: { category: "cooking", hrefSlug: "thermal-processing/combi-ovens" },
  "Nu-Vu": { category: "cooking", hrefSlug: "thermal-processing/combi-ovens" },
  Marsal: { category: "cooking", hrefSlug: "thermal-processing/combi-ovens" },
  CookTek: { category: "cooking", hrefSlug: "thermal-processing/ranges" },
  Induc: { category: "cooking", hrefSlug: "thermal-processing/ranges" },
  Lang: { category: "cooking", hrefSlug: "thermal-processing/ranges" },
  Crown: { category: "cooking", hrefSlug: "thermal-processing/bain-marie" },
  "Market Forge": { category: "cooking", hrefSlug: "thermal-processing/bain-marie" },
  Star: { category: "cooking", hrefSlug: "thermal-processing/ranges" },
  Holman: { category: "cooking", hrefSlug: "thermal-processing/ranges" },
  Toastmaster: { category: "cooking", hrefSlug: "thermal-processing/ranges" },
  BKI: { category: "cooking", hrefSlug: "thermal-processing/ranges" },
  CTX: { category: "cooking", hrefSlug: "thermal-processing/combi-ovens" },
  "EVO America": { category: "cooking", hrefSlug: "thermal-processing/ranges" },
  "APW Wyott": { category: "cooking", hrefSlug: "thermal-processing/ranges" },
  Wells: { category: "cooking", hrefSlug: "thermal-processing/ranges" },
  Globe: { category: "cooking", hrefSlug: "thermal-processing/ranges" },
  Varimixer: { category: "cooking", hrefSlug: "thermal-processing/ranges" },
  "Carter-Hoffmann": { category: "cooking", hrefSlug: "thermal-processing/bain-marie" },
  "Bloomfield": { category: "cooking", hrefSlug: "thermal-processing/ranges" },
  Concordia: { category: "cooking", hrefSlug: "thermal-processing/ranges" },
  Synesso: { category: "cooking", hrefSlug: "thermal-processing/ranges" },
  Marco: { category: "cooking", hrefSlug: "thermal-processing/ranges" },
  JoeTap: { category: "cooking", hrefSlug: "thermal-processing/ranges" },
  Dalmec: { category: "cooking", hrefSlug: "thermal-processing/ranges" },
  Britannia: { category: "cooking", hrefSlug: "thermal-processing/ranges" },
  "Flavor Burst": { category: "cooking", hrefSlug: "thermal-processing/ranges" },
  "Emery Thompson": { category: "cooking", hrefSlug: "thermal-processing/ranges" },
  Taylor: { category: "cooking", hrefSlug: "thermal-processing/ranges" },
  RAM: { category: "cooking", hrefSlug: "thermal-processing/ranges" },

  // Refrigeration
  Infrico: { category: "refrigeration", hrefSlug: "refrigeration/food-refrigeration" },
  Desmon: { category: "refrigeration", hrefSlug: "refrigeration/food-refrigeration" },
  "U-Line Commercial": {
    category: "refrigeration",
    hrefSlug: "refrigeration/food-refrigeration",
  },
  "Viking Commercial": {
    category: "refrigeration",
    hrefSlug: "refrigeration/display-cases",
  },
  Follett: { category: "refrigeration", hrefSlug: "refrigeration/food-refrigeration" },
  Celfrost: { category: "refrigeration", hrefSlug: "refrigeration/cold-rooms" },
  "Marvel Scientific": {
    category: "refrigeration",
    hrefSlug: "refrigeration/food-refrigeration",
  },
  Kloppenberg: { category: "refrigeration", hrefSlug: "refrigeration/food-refrigeration" },
  Icetro: { category: "refrigeration", hrefSlug: "refrigeration/food-refrigeration" },

  // Neutral & Inox (warewashing + custom fab)
  Hobart: { category: "neutral-inox", hrefSlug: "neutral-inox/warewashing" },
  Eswood: { category: "neutral-inox", hrefSlug: "neutral-inox/warewashing" },

  // Waste Management
  IMC: { category: "waste-management", hrefSlug: "neutral-inox/waste-management" },
};

/**
 * Heuristic fallback — when a brand is not in BRAND_OVERRIDES, classify
 * by the source category string from /src/data/our-brands.ts.
 */
function classifyByCategory(category: string): {
  category: SuperCategory;
  hrefSlug: string;
} {
  const c = category.toLowerCase();
  if (
    c.includes("refrig") ||
    c.includes("chill") ||
    c.includes("ice") ||
    c.includes("cold")
  ) {
    return { category: "refrigeration", hrefSlug: "refrigeration/food-refrigeration" };
  }
  if (c.includes("warewash") || c.includes("dishwash")) {
    return { category: "neutral-inox", hrefSlug: "neutral-inox/warewashing" };
  }
  if (c.includes("waste")) {
    return {
      category: "waste-management",
      hrefSlug: "neutral-inox/waste-management",
    };
  }
  // default: cooking — broad bucket
  return { category: "cooking", hrefSlug: "thermal-processing" };
}

export interface IndexedBrand extends Brand {
  superCategory: SuperCategory;
  hrefSlug: string;
  /** short italic descriptor — sourced from category string */
  descriptor: string;
}

export function getIndexedBrands(): IndexedBrand[] {
  return ALL_BRANDS.map((b) => {
    const o = BRAND_OVERRIDES[b.name];
    const m = o
      ? { category: o.category, hrefSlug: o.hrefSlug ?? "thermal-processing" }
      : classifyByCategory(b.category);
    return {
      ...b,
      superCategory: m.category,
      hrefSlug: m.hrefSlug,
      descriptor: b.category,
    };
  });
}

export function countByCategory(): Record<SuperCategory, number> {
  const counts: Record<SuperCategory, number> = {
    cooking: 0,
    refrigeration: 0,
    "neutral-inox": 0,
    "waste-management": 0,
  };
  for (const b of getIndexedBrands()) {
    counts[b.superCategory]++;
  }
  return counts;
}
