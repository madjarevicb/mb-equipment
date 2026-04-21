import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";

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

/** Build the nav items for a given locale, with translated labels */
export function getNavItems(locale: Locale, nav: Dictionary["nav"]): NavItem[] {
  const items: NavItem[] = [
    {
      label: nav.aboutUs,
      children: [
        { label: nav.companyOverview, href: "/about/company-overview" },
        { label: nav.innovation, href: "/about/innovation" },
      ],
    },
    {
      label: nav.businessBrands,
      children: [
        { label: nav.ourBrands, href: "/business/hotels-restaurants" },
        { label: nav.residential, href: "/business/residential" },
        { label: nav.foodProcessing, href: "/business/food-processing" },
      ],
    },
    {
      label: nav.equipment,
      children: [
        {
          label: nav.thermalProcessing,
          href: "/equipment/thermal-processing",
          children: [
            { label: nav.charcoalGrills, href: "/equipment/thermal-processing/charcoal-grills" },
            { label: nav.ranges, href: "/equipment/thermal-processing/ranges" },
            { label: nav.fryers, href: "/equipment/thermal-processing/fryers" },
            { label: nav.pastaCookers, href: "/equipment/thermal-processing/pasta-cookers" },
            { label: nav.bainMarie, href: "/equipment/thermal-processing/bain-marie" },
            { label: nav.combiOvens, href: "/equipment/thermal-processing/combi-ovens" },
          ],
        },
        {
          label: nav.refrigeration,
          href: "/equipment/refrigeration",
          children: [
            { label: nav.displayCases, href: "/equipment/refrigeration/display-cases" },
            { label: nav.foodRefrigeration, href: "/equipment/refrigeration/food-refrigeration" },
            { label: nav.coldRooms, href: "/equipment/refrigeration/cold-rooms" },
          ],
        },
        {
          label: nav.neutralInox,
          href: "/equipment/neutral-inox",
          children: [
            { label: nav.warewashing, href: "/equipment/neutral-inox/warewashing" },
            { label: nav.wasteManagement, href: "/equipment/neutral-inox/waste-management" },
          ],
        },
      ],
    },
    { label: nav.references, href: "/references" },
    { label: nav.demoCenters, href: "/demo-centers" },
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
export function getEquipmentLinks(locale: Locale, nav: Dictionary["nav"]): NavChild[] {
  return [
    { label: nav.thermalProcessing, href: `/${locale}/equipment/thermal-processing` },
    { label: nav.refrigeration, href: `/${locale}/equipment/refrigeration` },
    { label: nav.neutralInox, href: `/${locale}/equipment/neutral-inox` },
  ];
}

/** Get solution links for footer */
export function getSolutionLinks(locale: Locale, nav: Dictionary["nav"]): NavChild[] {
  return [
    { label: nav.ourBrands, href: `/${locale}/business/hotels-restaurants` },
    { label: nav.residential, href: `/${locale}/business/residential` },
    { label: nav.foodProcessing, href: `/${locale}/business/food-processing` },
  ];
}

/** Get company links for footer */
export function getCompanyLinks(locale: Locale, nav: Dictionary["nav"]): NavChild[] {
  return [
    { label: nav.companyOverview, href: `/${locale}/about/company-overview` },
    { label: nav.innovation, href: `/${locale}/about/innovation` },
    { label: nav.references, href: `/${locale}/references` },
    { label: nav.demoCenters, href: `/${locale}/demo-centers` },
  ];
}
