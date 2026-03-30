/* ------------------------------------------------------------------ */
/*  Demo Centers page data                                             */
/* ------------------------------------------------------------------ */

export interface DemoCenter {
  id: string;
  name: string;
  location: string;
  image: string;
  description: string;
  highlights: string[];
}

export const centers: DemoCenter[] = [
  {
    id: "dallas",
    name: "Middleby Innovation Kitchens",
    location: "Dallas, Texas",
    image: "/images/demo/dallas-lg.jpg",
    description:
      "The Middleby Innovation Kitchens (MIK) spans 40,000 square feet with 15 cooking vignettes and 150 live equipment stations. Bring your menu — factory application chefs run your recipes on the actual equipment.",
    highlights: ["40,000 sq ft", "15 cooking vignettes", "150 live stations"],
  },
  {
    id: "madrid",
    name: "Middleby Innovation Kitchens",
    location: "Madrid, Spain",
    image: "/images/demo/madrid-lg.jpg",
    description:
      "The European MIK is a hands-on destination for beverage, cooking, frying, and ventless equipment. Located 15 minutes from Madrid Airport — ideal for a working visit between flights.",
    highlights: ["European showcase", "Beverage & cooking", "15 min from airport"],
  },
  {
    id: "food-processing",
    name: "Food Processing Innovation Centers",
    location: "Multiple Locations",
    image: "/images/demo/food-processing.jpg",
    description:
      "Middleby Bakery and Protein Innovation Centers for industrial processing development. Food scientists and specialized engineers help customers test product quality and optimize operational efficiency on full-scale equipment.",
    highlights: ["Bakery & Protein", "Food scientists on-site", "Process development"],
  },
  {
    id: "residential",
    name: "Middleby Residential Showrooms",
    location: "Multiple Locations",
    image: "/images/demo/residential.jpg",
    description:
      "Experience Viking, La Cornue, and AGA ultra-premium kitchen appliances and outdoor cooking solutions. Open to the public — our chefs and designers walk you through every product in person.",
    highlights: ["Viking, La Cornue, AGA", "Open to public", "Chef demonstrations"],
  },
  {
    id: "wigan",
    name: "Middleby Commercial Showroom",
    location: "Wigan, England",
    image: "/images/demo/wigan.jpg",
    description:
      "Chef-driven demonstrations of the full Middleby commercial line — beverage, cooking, frying, and ventless. Built for operators and channel partners who want hands-on time with the equipment.",
    highlights: ["Chef-driven demos", "Channel partners", "Full Middleby line"],
  },
  {
    id: "belgrade",
    name: "MB Equipment Solutions HQ",
    location: "Belgrade, Serbia",
    image: "/images/demo/dallas.jpg",
    description:
      "Our Belgrade headquarters with a full commercial kitchen showroom, Viking and La Cornue residential displays, and an industrial equipment demonstration area. Open Monday–Friday, Saturday by appointment.",
    highlights: ["Full showroom", "Commercial & residential", "Mon–Fri 08:00–17:00"],
  },
];
