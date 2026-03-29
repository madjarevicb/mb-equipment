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
  navItems.find((item): item is NavItem & { children: NavChild[] } => item.label === "Business & Brands" && !!item.children)?.children ?? [];

const aboutChildren: NavChild[] =
  navItems.find((item): item is NavItem & { children: NavChild[] } => item.label === "About Us" && !!item.children)?.children ?? [];

const standaloneLinks: NavChild[] = navItems
  .filter((item): item is NavItem & { href: string } => !!item.href)
  .map(({ label, href }) => ({ label, href }));

export const companyLinks: NavChild[] = [...aboutChildren, ...standaloneLinks];
