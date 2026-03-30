/* ------------------------------------------------------------------ */
/*  References page data                                               */
/* ------------------------------------------------------------------ */

export interface GlobalChain {
  name: string;
  image: string;
  alt: string;
}

export interface LocalProject {
  name: string;
  location: string;
  image: string;
}

export interface ShowcaseImage {
  src: string;
  alt: string;
}

export interface ServiceCard {
  src: string;
  label: string;
  alt: string;
}

/* ─── Global chain partners ─── */
export const globalChains: GlobalChain[] = [
  { name: "Marriott", image: "/images/references/ref-11.jpg", alt: "Marriott Hotels commercial kitchen installation" },
  { name: "Starbucks", image: "/images/references/ref-13.jpg", alt: "Starbucks store equipment setup" },
  { name: "Domino's", image: "/images/references/ref-14.jpg", alt: "Domino's Pizza kitchen equipment" },
  { name: "McDonald's", image: "/images/references/ref-15.jpg", alt: "McDonald's restaurant kitchen line" },
  { name: "Burger King", image: "/images/references/ref-17.jpg", alt: "Burger King commercial cooking equipment" },
  { name: "KFC", image: "/images/references/ref-18.jpg", alt: "KFC kitchen equipment installation" },
  { name: "Taco Bell", image: "/images/references/ref-19.jpg", alt: "Taco Bell restaurant kitchen setup" },
  { name: "Hard Rock Cafe", image: "/images/references/ref-20.jpg", alt: "Hard Rock Cafe commercial kitchen" },
];

/* ─── Local project references ─── */
export const localProjects: LocalProject[] = [
  { name: "Buena Vida", location: "Belgrade", image: "/images/references/ref-22.jpg" },
  { name: "Burrito Madre", location: "Belgrade, 4 locations", image: "/images/references/ref-25.jpg" },
  { name: "Frans Restaurant", location: "Belgrade", image: "/images/references/frans.jpg" },
  { name: "Go Sushi", location: "Belgrade", image: "/images/references/go-sushi.jpg" },
  { name: "Ambar", location: "Belgrade", image: "/images/references/ref-30.jpg" },
  { name: "Comunale", location: "Belgrade", image: "/images/references/ref-31.jpg" },
  { name: "Burger House Bros", location: "Belgrade", image: "/images/references/ref-35.jpg" },
  { name: "Mona Plaza Hotel", location: "Belgrade", image: "/images/references/mona-plaza.jpg" },
  { name: "Zira Golden Tulip Hotel", location: "Belgrade", image: "/images/references/zira-golden-tulip.jpg" },
  { name: "Grey Hotel ★★★★", location: "Kopaonik", image: "/images/references/ref-40.jpg" },
  { name: "Novak Hotel & Caffe", location: "Belgrade", image: "/images/references/ref-46.jpg" },
  { name: "Maxi", location: "Serbia", image: "/images/references/ref-50.jpg" },
  { name: "Toro Restaurant", location: "Belgrade", image: "/images/references/ref-51.jpg" },
  { name: "Balkan Restaurant", location: "Belgrade", image: "/images/references/ref-55.jpg" },
];

/* ─── Market leadership categories ─── */
export const no1Categories: string[] = [
  "Pizza Chains",
  "Convenience Stores",
  "Fast Casual",
  "Deli Sandwich Shops",
  "Steakhouses & Seafood",
  "Chicken Outlets",
  "Pan-Asian Cuisine",
  "Casual Dining",
  "QSR",
];

/* ─── Visual showcase images ─── */
export const showcaseImages: ShowcaseImage[] = [
  { src: "/images/references/ref-04.jpg", alt: "Commercial charbroiler grill station in professional kitchen" },
  { src: "/images/references/ref-06.jpg", alt: "Open fire cooking station with professional ventilation" },
  { src: "/images/references/ref-08.jpg", alt: "Chef plating dishes on Middleby commercial cooking line" },
  { src: "/images/references/ref-09.jpg", alt: "Modern restaurant kitchen with commercial equipment" },
];

/* ─── Design & engineering service cards ─── */
export const serviceCards: ServiceCard[] = [
  { src: "/images/references/ref-07.jpg", label: "Kitchen Design", alt: "Professional kitchen layout and design" },
  { src: "/images/references/ref-57.jpg", label: "Engineering", alt: "Kitchen engineering and equipment planning" },
  { src: "/images/references/ref-58.jpg", label: "Project Planning", alt: "Commercial kitchen project documentation" },
];

/* ─── Equipment showcase images ─── */
export const equipmentShowcase: ShowcaseImage[] = [
  { src: "/images/references/ref-59.jpg", alt: "Vivo Plus commercial food service equipment" },
  { src: "/images/references/ref-60.jpg", alt: "Professional bakery display and serving counter" },
];
