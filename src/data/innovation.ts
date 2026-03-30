/* ---------- interfaces ---------- */

export interface FeaturedInnovation {
  title: string;
  text: string;
  image: string;
  alt: string;
}

export interface TechnologyTheme {
  label: string;
  title: string;
  subtitle: string;
  text: string;
  stat: string;
  statLabel: string;
  statSource: string;
}

/* ---------- featured innovation products ---------- */

export const featured: FeaturedInnovation[] = [
  {
    title: "Ventless Kitchen Design",
    text: "Open new revenue locations where traditional hoods and ductwork are not an option. Middleby ventless platforms let you cook with zero exhaust infrastructure — in malls, airports, historic buildings, and urban retail spaces.",
    image: "/images/innovation/ventless.jpg",
    alt: "Ventless commercial kitchen cooking equipment by Middleby",
  },
  {
    title: "Ghost & Delivery Kitchens",
    text: "Purpose-built kitchen setups for delivery-only and multi-brand operations. We design and equip turnkey ghost kitchen facilities optimized for Wolt, Glovo, and regional delivery platforms.",
    image: "/images/innovation/ghost-kitchen.jpg",
    alt: "Ghost kitchen delivery-only commercial kitchen setup",
  },
  {
    title: "IoT-Connected Kitchens",
    text: "Monitor every piece of equipment remotely, track energy use in real time, and receive automated maintenance alerts. Powered by Middleby's Open Kitchen platform, used in over 20,000 commercial kitchens globally.",
    image: "/images/innovation/iot-kitchen.jpg",
    alt: "IoT connected commercial kitchen management dashboard",
  },
];

/* ---------- technology themes ---------- */

export const themes: TechnologyTheme[] = [
  {
    label: "01",
    title: "Connected Kitchens",
    subtitle: "Data from Every Rack",
    text: "Operators using Middleby's connected platform can monitor equipment health, automate HACCP logging, and receive predictive maintenance alerts — reducing unplanned downtime by up to 40%. Brands like Middleby Connect and TurboChef are building cloud-connected platforms that let operators manage equipment across multiple sites from a single dashboard. We deploy and configure these systems.",
    stat: "40%",
    statLabel: "reduction in equipment downtime with predictive maintenance",
    statSource: "Based on Middleby Connected Kitchen operator data",
  },
  {
    label: "02",
    title: "Speed & Energy",
    subtitle: "Faster Cook. Lower Bill.",
    text: "Technologies like TurboChef's rapid-cook ovens and Middleby's conveyor systems deliver up to 60% faster cook times while using less energy per plate — critical for high-volume operations during peak service. For quick-service and fast-casual operators running tight margins, the payback period on this equipment is months, not years.",
    stat: "60%",
    statLabel: "faster cooking with high-speed impingement technology",
    statSource: "vs. conventional cooking methods, per Middleby performance testing",
  },
  {
    label: "03",
    title: "Ventless & Compact",
    subtitle: "Equipment That Fits Where You Need It",
    text: "Over 350,000 ventless systems installed globally across Middleby brands. Self-contained filtration and catalytic converters eliminate the need for traditional hood systems, cutting installation costs by up to 70% compared to conventional exhaust setups. We have equipped hotel room-service pantries, airport lounges, and pop-up kitchens with gear that was impossible five years ago.",
    stat: "350K+",
    statLabel: "ventless systems operating around the world",
    statSource: "Installed globally across Middleby brands",
  },
  {
    label: "04",
    title: "Sustainability",
    subtitle: "Less Waste, Same Output",
    text: "Energy-efficient burners. Heat recovery systems. Oil management technology that extends fry oil life by 40%. Water-saving dishwashers. Sustainability in commercial kitchens is not a marketing exercise — it is an operating cost reduction. We spec equipment that delivers both.",
    stat: "30%",
    statLabel: "average energy savings with latest-generation equipment",
    statSource: "Average across Middleby ENERGY STAR certified equipment",
  },
];
