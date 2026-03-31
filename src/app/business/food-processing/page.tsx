import type { Metadata } from "next";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { COMPANY } from "@/lib/constants";
import {
  HeroSection,
  IntroSection,
  BrandsSection,
  EquipmentSection,
  ApplicationSection,
  ImageBreakSection,
  InnovationCentersSection,
} from "./_sections";

/* ------------------------------------------------------------------ */
/*  Static rendering                                                   */
/* ------------------------------------------------------------------ */
export const dynamic = "force-static";

/* ------------------------------------------------------------------ */
/*  SEO metadata                                                       */
/* ------------------------------------------------------------------ */
const PAGE_TITLE =
  "Food Processing — Industrial Equipment Solutions | MB Equipment Solutions";
const TEMPLATE_TITLE = "Food Processing — Industrial Equipment Solutions";
const PAGE_DESC =
  "Middleby-authorized partner for industrial food processing equipment. Thermal processing, baking, forming, and packaging for protein and bakery operations.";

export const metadata: Metadata = {
  title: TEMPLATE_TITLE,
  description: PAGE_DESC,
  keywords: [
    "food processing equipment",
    "industrial bakery equipment",
    "protein processing equipment",
    "Middleby food processing",
    "industrial food production",
    "food packaging equipment",
    "thermal processing equipment",
    "food processing automation",
  ],
  alternates: { canonical: "/business/food-processing" },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESC,
    url: `${COMPANY.url}/business/food-processing`,
    siteName: COMPANY.name,
    locale: "en_US",
    type: "website",
    images: [{ url: "/images/og/homepage.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESC,
    images: ["/images/og/homepage.jpg"],
  },
};

/* ------------------------------------------------------------------ */
/*  JSON-LD structured data                                            */
/* ------------------------------------------------------------------ */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      name: PAGE_TITLE,
      description: PAGE_DESC,
      url: `${COMPANY.url}/business/food-processing`,
      isPartOf: { "@type": "WebSite", url: COMPANY.url },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: COMPANY.url,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Business",
          item: `${COMPANY.url}/business`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Food Processing",
          item: `${COMPANY.url}/business/food-processing`,
        },
      ],
    },
  ],
};

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */
export default function FoodProcessingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <Breadcrumb items={[
        { label: "Business", href: "/business" },
        { label: "Food Processing" },
      ]} />

      <HeroSection />
      <IntroSection />
      <BrandsSection />
      <EquipmentSection />
      <ApplicationSection />
      <ImageBreakSection />
      <InnovationCentersSection />
    </>
  );
}
