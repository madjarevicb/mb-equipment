import type { EquipmentBrand, EquipmentSubcategory } from "./types";

export const refrigerationSubcategories: EquipmentSubcategory[] = [
  {
    id: "display-cases",
    slug: "display-cases",
    name: "Display Cases & Vitrines",
    description:
      "Refrigerated and heated display cases for patisserie, deli, and grab-and-go service — designed for visual merchandising and food safety.",
    heroImage: "/images/whatwedo/beverage.jpg",
    heroAlt: "Commercial refrigerated display cases and vitrines",
    brands: ["JBG-2", "Tefcold"],
    seoTitle: "Commercial Display Cases & Vitrines — Refrigerated",
    seoDesc:
      "Commercial refrigerated display cases and vitrines for patisserie, deli, and grab-and-go. JBG-2 and Tefcold authorized supply.",
    keywords: [
      "refrigerated display case",
      "commercial vitrine",
      "patisserie display case",
      "deli display counter",
      "grab-and-go refrigeration",
    ],
  },
  {
    id: "food-refrigeration",
    slug: "food-refrigeration",
    name: "Food Refrigeration",
    description:
      "Reach-in refrigerators, undercounter units, and prep tables for commercial kitchens — precise temperature control for ingredient storage.",
    heroImage: "/images/whatwedo/beverage.jpg",
    heroAlt: "Commercial food refrigeration equipment",
    brands: ["Desmon", "Infrico"],
    seoTitle: "Commercial Food Refrigeration — Reach-in & Undercounter",
    seoDesc:
      "Commercial food refrigeration — reach-in refrigerators, blast chillers, undercounter units, and prep tables. Desmon and Infrico authorized supply.",
    keywords: [
      "commercial refrigerator",
      "reach-in refrigerator",
      "undercounter fridge commercial",
      "blast chiller",
      "prep table refrigerated",
    ],
  },
  {
    id: "cold-rooms",
    slug: "cold-rooms",
    name: "Modular Cold Rooms",
    description:
      "Walk-in cold rooms and freezer rooms — modular panel construction, custom dimensions, and professional-grade compressor systems.",
    heroImage: "/images/whatwedo/beverage.jpg",
    heroAlt: "Modular walk-in cold rooms and freezer rooms",
    brands: ["Tehnodom"],
    seoTitle: "Modular Cold Rooms — Walk-in Coolers & Freezers",
    seoDesc:
      "Modular cold rooms and walk-in freezers — custom dimensions, professional compressor systems. Tehnodom authorized installation.",
    keywords: [
      "modular cold room",
      "walk-in cooler",
      "walk-in freezer",
      "cold room installation",
      "commercial cold storage",
    ],
  },
];

export const refrigerationBrands: EquipmentBrand[] = [
  {
    name: "Desmon",
    description:
      "Italian commercial refrigeration — reach-in cabinets, blast chillers, and undercounter units for professional kitchens.",
    logo: "/images/brands/desmon-logo.png",
    category: "Food Refrigeration",
  },
  {
    name: "Tefcold",
    description:
      "Commercial and display refrigeration — chest freezers, bottle coolers, and display cases for retail and foodservice.",
    logo: null,
    category: "Display Cases & Vitrines",
  },
  {
    name: "Tehnodom",
    description:
      "Modular cold room systems — custom-built walk-in coolers and freezers with professional compressor units.",
    logo: null,
    category: "Modular Cold Rooms",
  },
  {
    name: "JBG-2",
    description:
      "Refrigerated display cases and vitrines for bakeries, delis, and foodservice — European quality and design.",
    logo: null,
    category: "Display Cases & Vitrines",
  },
  {
    name: "Infrico",
    description:
      "Spanish-engineered refrigeration — back-bar coolers, prep counters, and display cases for hospitality and retail.",
    logo: "/images/brands/infrico-logo.png",
    category: "Food Refrigeration",
  },
];
