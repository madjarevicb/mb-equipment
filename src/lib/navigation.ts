export interface NavChild {
  label: string;
  href: string;
  children?: NavChild[];
}

export type NavItem =
  | { label: string; href: string; children?: never }
  | { label: string; href?: never; children: NavChild[] };

export const navItems: NavItem[] = [
  {
    label: "About Us",
    children: [
      { label: "Company Overview", href: "/about/company-overview" },
      { label: "Innovation", href: "/about/innovation" },
    ],
  },
  {
    label: "Business & Brands",
    children: [
      { label: "Our Brands", href: "/business/hotels-restaurants" },
      { label: "Residential", href: "/business/residential" },
      { label: "Food Processing", href: "/business/food-processing" },
    ],
  },
  {
    label: "Equipment",
    children: [
      {
        label: "Thermal Processing",
        href: "/equipment/thermal-processing",
        children: [
          { label: "Charcoal Grills", href: "/equipment/thermal-processing/charcoal-grills" },
          { label: "Ranges", href: "/equipment/thermal-processing/ranges" },
          { label: "Fryers", href: "/equipment/thermal-processing/fryers" },
          { label: "Pasta Cookers", href: "/equipment/thermal-processing/pasta-cookers" },
          { label: "Bain Marie", href: "/equipment/thermal-processing/bain-marie" },
          { label: "Combi Ovens", href: "/equipment/thermal-processing/combi-ovens" },
        ],
      },
      {
        label: "Refrigeration",
        href: "/equipment/refrigeration",
        children: [
          { label: "Display Cases", href: "/equipment/refrigeration/display-cases" },
          { label: "Food Refrigeration", href: "/equipment/refrigeration/food-refrigeration" },
          { label: "Cold Rooms", href: "/equipment/refrigeration/cold-rooms" },
        ],
      },
      {
        label: "Neutral INOX",
        href: "/equipment/neutral-inox",
        children: [
          { label: "Warewashing", href: "/equipment/neutral-inox/warewashing" },
          { label: "Waste Management", href: "/equipment/neutral-inox/waste-management" },
        ],
      },
    ],
  },
  { label: "References", href: "/references" },
  { label: "Demo Centers", href: "/demo-centers" },
];

export const solutionLinks: NavChild[] =
  navItems.find((item): item is NavItem & { children: NavChild[] } => item.label === "Business & Brands" && !!item.children)?.children ?? [];

const aboutChildren: NavChild[] =
  navItems.find((item): item is NavItem & { children: NavChild[] } => item.label === "About Us" && !!item.children)?.children ?? [];

const standaloneLinks: NavChild[] = navItems
  .filter((item): item is NavItem & { href: string } => !!item.href)
  .map(({ label, href }) => ({ label, href }));

export const equipmentLinks: NavChild[] =
  navItems.find((item): item is NavItem & { children: NavChild[] } => item.label === "Equipment" && !!item.children)?.children ?? [];

export const companyLinks: NavChild[] = [...aboutChildren, ...standaloneLinks];
