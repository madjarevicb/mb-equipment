import type { Metadata } from "next";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { COMPANY } from "@/lib/constants";
import { refrigerationSubcategories, refrigerationBrands } from "@/data/refrigeration";
import {
  HeroSection,
  OverviewSection,
  SubcategoriesSection,
  BrandsSection,
  CtaSection,
} from "./_sections";

export const dynamic = "force-static";

const PAGE_TITLE = "Refrigeration Equipment — Commercial Cold Storage | MB Equipment Solutions";
const TEMPLATE_TITLE = "Refrigeration Equipment";
const PAGE_DESC =
  "Commercial refrigeration equipment — display cases, vitrines, cold rooms, and food refrigeration. Desmon, Tefcold, Infrico, JBG-2, and Tehnodom authorized supply.";

export const metadata: Metadata = {
  title: TEMPLATE_TITLE,
  description: PAGE_DESC,
  keywords: [
    "commercial refrigeration",
    "display cases commercial",
    "cold room modular",
    "walk-in cooler",
    "refrigerated display vitrines",
    "commercial freezer",
    "food refrigeration equipment",
    "blast chiller commercial",
  ],
  alternates: { canonical: "/equipment/refrigeration" },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESC,
    url: `${COMPANY.url}/equipment/refrigeration`,
    siteName: COMPANY.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESC,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      name: PAGE_TITLE,
      description: PAGE_DESC,
      url: `${COMPANY.url}/equipment/refrigeration`,
      isPartOf: { "@type": "WebSite", url: COMPANY.url },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: COMPANY.url },
        { "@type": "ListItem", position: 2, name: "Equipment", item: `${COMPANY.url}/equipment` },
        { "@type": "ListItem", position: 3, name: "Refrigeration", item: `${COMPANY.url}/equipment/refrigeration` },
      ],
    },
    {
      "@type": "ItemList",
      name: "Refrigeration Equipment Categories",
      numberOfItems: refrigerationSubcategories.length,
      itemListElement: refrigerationSubcategories.map((item, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: item.name,
        description: item.description,
      })),
    },
    {
      "@type": "ItemList",
      name: "Refrigeration Equipment Brands",
      numberOfItems: refrigerationBrands.length,
      itemListElement: refrigerationBrands.map((brand, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: brand.name,
      })),
    },
  ],
};

export default function RefrigerationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <Breadcrumb items={[
        { label: "Equipment", href: "/equipment" },
        { label: "Refrigeration" },
      ]} />

      <HeroSection />
      <OverviewSection />
      <SubcategoriesSection />
      <BrandsSection />
      <CtaSection />
    </>
  );
}
