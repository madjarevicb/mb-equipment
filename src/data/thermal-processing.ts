import type { EquipmentBrand, EquipmentSubcategory } from "./types";

export const thermalSubcategories: EquipmentSubcategory[] = [
  {
    id: "charcoal",
    slug: "charcoal-grills",
    name: "Charcoal & Solid Fuel",
    description:
      "Charcoal, wood, and dual-fuel cooking for open-flame kitchens. Built for consistency at high volume with authentic flavor.",
    heroImage: "/images/whatwedo/solid-fuel.jpg",
    heroAlt: "Charcoal and solid fuel commercial cooking equipment",
    brands: ["Josper", "PGE", "UGNS"],
    seoTitle: "Charcoal & Solid Fuel Grills — Josper Authorized",
    seoDesc:
      "Commercial charcoal grills and solid-fuel cooking equipment. Josper, PGE, and UGNS — authorized supply, installation, and commissioning.",
    keywords: [
      "Josper charcoal oven",
      "commercial charcoal grill",
      "solid fuel cooking",
      "wood-fired grill commercial",
      "Josper authorized dealer",
    ],
  },
  {
    id: "ranges",
    slug: "ranges",
    name: "Ranges & Cooking Suites",
    description:
      "Heavy-duty cooking lines configured around your menu. Gas, induction, and solid-top options for every volume and kitchen layout.",
    heroImage: "/images/whatwedo/chef-cooking.jpg",
    heroAlt: "Professional cooking ranges and suites in a commercial kitchen",
    variants: ["Gas", "Induction", "Solid Top"],
    brands: ["Silko", "Lincat"],
    seoTitle: "Commercial Ranges & Cooking Suites — Gas & Induction",
    seoDesc:
      "Commercial cooking ranges and suites — gas, induction, and solid-top. Silko and Lincat authorized supply for professional kitchens.",
    keywords: [
      "commercial cooking range",
      "induction cooking suite",
      "gas range commercial",
      "professional cooking suites",
      "Silko cooking equipment",
    ],
  },
  {
    id: "fryers",
    slug: "fryers",
    name: "Commercial Fryers",
    description:
      "High-efficiency fryers with built-in oil filtration for consistent product quality and reduced oil consumption.",
    heroImage: "/images/whatwedo/frying.jpg",
    heroAlt: "Commercial deep fryers for professional kitchens",
    brands: ["Silko", "Lincat"],
    seoTitle: "Commercial Fryers — High-Efficiency Deep Fryers",
    seoDesc:
      "Commercial deep fryers with built-in oil filtration. High-efficiency fryers for restaurants, hotels, and QSR operations.",
    keywords: [
      "commercial deep fryer",
      "high-efficiency fryer",
      "oil filtration fryer",
      "restaurant fryer",
      "commercial frying equipment",
    ],
  },
  {
    id: "pasta-cookers",
    slug: "pasta-cookers",
    name: "Pasta Cookers",
    description:
      "Dedicated pasta cooking stations designed for high-volume à la carte and batch production.",
    heroImage: "/images/whatwedo/chef-cooking.jpg",
    heroAlt: "Commercial pasta cooking stations",
    brands: ["Silko"],
    seoTitle: "Commercial Pasta Cookers — Professional Pasta Stations",
    seoDesc:
      "Commercial pasta cookers for high-volume production. Dedicated pasta cooking stations for restaurants and hotel kitchens.",
    keywords: [
      "commercial pasta cooker",
      "pasta cooking station",
      "professional pasta equipment",
      "restaurant pasta cooker",
    ],
  },
  {
    id: "bain-marie",
    slug: "bain-marie",
    name: "Bain Marie & Holding",
    description:
      "Temperature-controlled holding equipment for buffet service, banqueting, and à la carte plating stations.",
    heroImage: "/images/whatwedo/steam.jpg",
    heroAlt: "Commercial bain marie and food holding equipment",
    brands: ["Silko", "Lincat"],
    seoTitle: "Bain Marie & Food Holding Equipment — Commercial",
    seoDesc:
      "Commercial bain marie and temperature-controlled holding equipment. Buffet service, banqueting, and plating stations.",
    keywords: [
      "commercial bain marie",
      "food holding equipment",
      "buffet equipment commercial",
      "temperature holding station",
    ],
  },
  {
    id: "combi-ovens",
    slug: "combi-ovens",
    name: "Combi & Convection Ovens",
    description:
      "Steaming, baking, roasting, and regeneration in a single footprint — from 6-tray countertop to 40-tray roll-in models.",
    heroImage: "/images/whatwedo/combi.jpg",
    heroAlt: "Commercial combi and convection ovens",
    variants: ["Patisserie", "Bake-off", "Speed Oven"],
    brands: ["Houno", "Lincat"],
    seoTitle: "Combi & Convection Ovens — Patisserie, Bake-off, Speed",
    seoDesc:
      "Commercial combi ovens and convection ovens — patisserie, bake-off, and speed ovens. Houno and Lincat authorized supply.",
    keywords: [
      "commercial combi oven",
      "convection oven commercial",
      "Houno combi oven",
      "patisserie oven",
      "speed oven commercial",
      "bake-off oven",
    ],
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
    name: "Firex",
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
