import type { EquipmentBrand, EquipmentSubcategory } from "./types";

export const refrigerationSubcategories: EquipmentSubcategory[] = [
  {
    id: "display-cases",
    name: "Display Cases & Vitrines",
    description:
      "Refrigerated and heated display cases for patisserie, deli, and grab-and-go service — designed for visual merchandising and food safety.",
  },
  {
    id: "food-refrigeration",
    name: "Food Refrigeration",
    description:
      "Reach-in refrigerators, undercounter units, and prep tables for commercial kitchens — precise temperature control for ingredient storage.",
  },
  {
    id: "cold-rooms",
    name: "Modular Cold Rooms",
    description:
      "Walk-in cold rooms and freezer rooms — modular panel construction, custom dimensions, and professional-grade compressor systems.",
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
