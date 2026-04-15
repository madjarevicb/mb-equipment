import type { EquipmentBrand, EquipmentSubcategory } from "./types";

export const thermalSubcategories: EquipmentSubcategory[] = [
  {
    id: "ranges",
    name: "Ranges & Cooking Suites",
    description:
      "Heavy-duty cooking lines configured around your menu. Gas, induction, and solid-top options for every volume and kitchen layout.",
    variants: ["Gas", "Induction", "Solid Top"],
  },
  {
    id: "fryers",
    name: "Commercial Fryers",
    description:
      "High-efficiency fryers with built-in oil filtration for consistent product quality and reduced oil consumption.",
  },
  {
    id: "pasta-cookers",
    name: "Pasta Cookers",
    description:
      "Dedicated pasta cooking stations designed for high-volume à la carte and batch production.",
  },
  {
    id: "bain-marie",
    name: "Bain Marie & Holding",
    description:
      "Temperature-controlled holding equipment for buffet service, banqueting, and à la carte plating stations.",
  },
  {
    id: "combi-ovens",
    name: "Combi & Convection Ovens",
    description:
      "Steaming, baking, roasting, and regeneration in a single footprint — from 6-tray countertop to 40-tray roll-in models.",
    variants: ["Patisserie", "Bake-off", "Speed Oven"],
  },
  {
    id: "charcoal",
    name: "Charcoal & Solid Fuel",
    description:
      "Charcoal, wood, and dual-fuel cooking for open-flame kitchens. Built for consistency at high volume with authentic flavor.",
  },
];

export const thermalBrands: EquipmentBrand[] = [
  {
    name: "Josper",
    description:
      "Charcoal ovens and grills — the reference standard for open-flame cooking in professional kitchens worldwide.",
    logo: "/images/brands/josper-logo.svg",
    category: "Charcoal & Solid Fuel",
  },
  {
    name: "Silko",
    description:
      "Italian-engineered cooking suites, fryers, and pasta cookers for high-volume commercial kitchens.",
    logo: "/images/brands/silko-logo.png",
    category: "Ranges & Cooking Suites",
  },
  {
    name: "Lincat",
    description:
      "Countertop and modular cooking equipment — combi ovens, speed ovens, fryers, and bain maries.",
    logo: "/images/brands/lincat-logo.png",
    category: "Combi & Convection Ovens",
  },
  {
    name: "FirEx",
    description:
      "Automated tilting braising pans, kettles, and pressurized cooking systems for large-scale production.",
    logo: "/images/brands/firex-logo.png",
    category: "Cooking Systems",
  },
  {
    name: "Houno",
    description:
      "Danish-engineered combi ovens and patisserie ovens — precision baking and roasting for demanding kitchens.",
    logo: "/images/brands/houno-logo.png",
    category: "Combi & Convection Ovens",
  },
  {
    name: "PGE",
    description:
      "Professional gas cooking equipment — ranges, ovens, and griddles built for continuous commercial operation.",
    logo: null,
    category: "Ranges & Cooking Suites",
  },
  {
    name: "UGNS",
    description:
      "Commercial cooking and baking equipment — engineered for reliability in high-demand foodservice environments.",
    logo: null,
    category: "Cooking Equipment",
  },
];
