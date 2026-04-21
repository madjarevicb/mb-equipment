import type { Locale } from "@/i18n/config";

export interface NavChild {
  label: string;
  href: string;
  children?: NavChild[];
}

export type NavItem =
  | { label: string; href: string; children?: never }
  | { label: string; href?: never; children: NavChild[] };

/** Prefix all hrefs in a NavChild tree with /{locale} */
function prefixChild(locale: Locale, child: NavChild): NavChild {
  return {
    ...child,
    href: `/${locale}${child.href}`,
    children: child.children?.map((c) => prefixChild(locale, c)),
  };
}

/** Build the nav items for a given locale, with locale-prefixed hrefs */
export function getNavItems(locale: Locale): NavItem[] {
  const items: NavItem[] = [
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

  return items.map((item) => {
    if (item.children) {
      return {
        ...item,
        children: item.children.map((child) => prefixChild(locale, child)),
      };
    }
    return { ...item, href: `/${locale}${item.href}` };
  });
}

/** Get flat equipment links for footer */
export function getEquipmentLinks(locale: Locale): NavChild[] {
  return [
    { label: "Thermal Processing", href: `/${locale}/equipment/thermal-processing` },
    { label: "Refrigeration", href: `/${locale}/equipment/refrigeration` },
    { label: "Neutral INOX", href: `/${locale}/equipment/neutral-inox` },
  ];
}

/** Get solution links for footer */
export function getSolutionLinks(locale: Locale): NavChild[] {
  return [
    { label: "Our Brands", href: `/${locale}/business/hotels-restaurants` },
    { label: "Residential", href: `/${locale}/business/residential` },
    { label: "Food Processing", href: `/${locale}/business/food-processing` },
  ];
}

/** Get company links for footer */
export function getCompanyLinks(locale: Locale): NavChild[] {
  return [
    { label: "Company Overview", href: `/${locale}/about/company-overview` },
    { label: "Innovation", href: `/${locale}/about/innovation` },
    { label: "References", href: `/${locale}/references` },
    { label: "Demo Centers", href: `/${locale}/demo-centers` },
  ];
}
