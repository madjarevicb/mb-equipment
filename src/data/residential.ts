/* ---------- interfaces ---------- */

export interface ResidentialBrand {
  name: string;
  logo: string;
  category: "Indoor" | "Outdoor" | "Beverage";
}

export interface Brochure {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  alt: string;
  href: string;
}

/* ---------- residential brands ---------- */

export const residentialBrands: ResidentialBrand[] = [
  { name: "La Cornue", logo: "/images/brands/lacornue-logo.svg", category: "Indoor" },
  { name: "Viking", logo: "/images/brands/viking-res-logo.svg", category: "Indoor" },
  { name: "AGA", logo: "/images/brands/aga-logo.svg", category: "Indoor" },
  { name: "Novy", logo: "/images/brands/novy-logo.svg", category: "Indoor" },
  { name: "CookTek", logo: "/images/brands/cooktek-res-logo.svg", category: "Indoor" },
  { name: "Leisure Sinks", logo: "/images/brands/leisure-logo.svg", category: "Indoor" },
  { name: "Rangemaster", logo: "/images/brands/rangemaster-logo.svg", category: "Indoor" },
  { name: "Brava", logo: "/images/brands/brava-logo.svg", category: "Indoor" },
  { name: "Stanley", logo: "/images/brands/stanley-logo.svg", category: "Indoor" },
  { name: "Marvel", logo: "/images/brands/marvel-logo.svg", category: "Indoor" },
  { name: "U-Line", logo: "/images/brands/uline-res-logo.svg", category: "Indoor" },
  { name: "Scotsman", logo: "/images/brands/scotsman-logo.svg", category: "Indoor" },
  { name: "Marco", logo: "/images/brands/marco-logo.svg", category: "Beverage" },
  { name: "Synesso", logo: "/images/brands/synesso-res-logo.svg", category: "Beverage" },
  { name: "Ss Brewtech", logo: "/images/brands/ssbrewtech-logo.svg", category: "Beverage" },
  { name: "Lynx", logo: "/images/brands/lynx-logo.svg", category: "Outdoor" },
  { name: "Josper Casa", logo: "/images/brands/josper-casa-logo.svg", category: "Outdoor" },
  { name: "EVO", logo: "/images/brands/evo-res-logo.svg", category: "Outdoor" },
  { name: "Fontana Forni", logo: "/images/brands/fontana-logo.svg", category: "Outdoor" },
  { name: "Kamado Joe", logo: "/images/brands/kamadojoe-logo.svg", category: "Outdoor" },
  { name: "Masterbuilt", logo: "/images/brands/masterbuilt-logo.svg", category: "Outdoor" },
  { name: "Char-Griller", logo: "/images/brands/chargriller-logo.svg", category: "Outdoor" },
  { name: "TradeWind", logo: "/images/brands/tradewind-logo.svg", category: "Indoor" },
];

/* ---------- brochures ---------- */

export const brochures: Brochure[] = [
  {
    title: "Brand Overview",
    subtitle: "Indoor Collection",
    description: "Full specifications and lifestyle photography for Viking, La Cornue, AGA, and 10 more indoor brands.",
    image: "/images/residential/brochure-indoor.png",
    alt: "Middleby Residential Brand Overview Brochure",
    href: "https://middlebyresidential.com/wp-content/uploads/2024/08/Middleby-Residential-Brand-Brochure-Update-7.24.pdf",
  },
  {
    title: "Outdoor Overview",
    subtitle: "Outdoor Collection",
    description: "Lynx grills, Kamado Joe, Josper Casa, and the full outdoor lineup with specifications.",
    image: "/images/residential/brochure-outdoor.png",
    alt: "Middleby Residential Outdoor Overview Brochure",
    href: "https://middlebyresidential.com/wp-content/uploads/2024/08/Middleby-Residential-Outdoor-Brochure-Update-7.24.pdf",
  },
];
