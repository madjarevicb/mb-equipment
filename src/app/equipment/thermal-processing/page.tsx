import type { Metadata } from "next";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { COMPANY } from "@/lib/constants";
import { thermalSubcategories, thermalBrands } from "@/data/thermal-processing";
import {
  HeroSection,
  OverviewSection,
  SubcategoriesSection,
  BrandsSection,
  CtaSection,
} from "./_sections";

export const dynamic = "force-static";

const PAGE_TITLE = "Thermal Processing Equipment — Commercial Cooking | MB Equipment Solutions";
const TEMPLATE_TITLE = "Thermal Processing";
const PAGE_DESC =
  "Commercial thermal processing equipment — ranges, fryers, combi ovens, pasta cookers, and charcoal grills. Josper, Silko, Lincat, FirEx, and Houno authorized supply.";

export const metadata: Metadata = {
  title: TEMPLATE_TITLE,
  description: PAGE_DESC,
  keywords: [
    "commercial cooking equipment",
    "thermal processing",
    "combi ovens",
    "commercial fryers",
    "charcoal grill Josper",
    "induction cooking commercial",
    "commercial ranges",
    "pasta cookers commercial",
  ],
  alternates: { canonical: "/equipment/thermal-processing" },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESC,
    url: `${COMPANY.url}/equipment/thermal-processing`,
    siteName: COMPANY.name,
    locale: "en_US",
    type: "website",
    images: [{ url: `${COMPANY.url}/images/whatwedo/chef-cooking.jpg`, width: 1200, height: 630, alt: "Professional chef using thermal cooking equipment" }],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESC,
    images: [`${COMPANY.url}/images/whatwedo/chef-cooking.jpg`],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      name: PAGE_TITLE,
      description: PAGE_DESC,
      url: `${COMPANY.url}/equipment/thermal-processing`,
      isPartOf: { "@type": "WebSite", url: COMPANY.url },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: COMPANY.url },
        { "@type": "ListItem", position: 2, name: "Equipment", item: `${COMPANY.url}/equipment` },
        { "@type": "ListItem", position: 3, name: "Thermal Processing", item: `${COMPANY.url}/equipment/thermal-processing` },
      ],
    },
    {
      "@type": "ItemList",
      name: "Thermal Processing Equipment Categories",
      numberOfItems: thermalSubcategories.length,
      itemListElement: thermalSubcategories.map((item, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: item.name,
        description: item.description,
      })),
    },
    {
      "@type": "ItemList",
      name: "Thermal Processing Equipment Brands",
      numberOfItems: thermalBrands.length,
      itemListElement: thermalBrands.map((brand, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: brand.name,
      })),
    },
  ],
};

export default function ThermalProcessingPage() {
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
        { label: "Thermal Processing" },
      ]} />

      <HeroSection />
      <OverviewSection />
      <SubcategoriesSection />
      <BrandsSection />
      <CtaSection />
    </>
  );
}
