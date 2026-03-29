export interface NavChild {
  label: string;
  href: string;
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
  { label: "References", href: "/references" },
  { label: "Demo Centers", href: "/demo-centers" },
];

export const solutionLinks: NavChild[] =
  (navItems.find((item) => item.label === "Business & Brands") as { children: NavChild[] }).children;

export const companyLinks: NavChild[] = [
  { label: "Company Overview", href: "/about/company-overview" },
  { label: "Innovation", href: "/about/innovation" },
  { label: "References", href: "/references" },
  { label: "Demo Centers", href: "/demo-centers" },
];
