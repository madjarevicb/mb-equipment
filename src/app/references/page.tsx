import type { Metadata } from "next";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { COMPANY } from "@/lib/constants";
import {
  HeroSection,
  WhoWeAreSection,
  ShowcaseSection,
  MarketLeadershipSection,
  GlobalChainsSection,
  LocalProjectsSection,
  DesignEngineeringSection,
  BrandsPartnersSection,
  CtaSection,
} from "./_sections";

/* ------------------------------------------------------------------ */
/*  Static rendering                                                   */
/* ------------------------------------------------------------------ */
export const dynamic = "force-static";

/* ------------------------------------------------------------------ */
/*  SEO metadata                                                       */
/* ------------------------------------------------------------------ */
const PAGE_TITLE =
  "References & Partners — Commercial Kitchen Projects | MB Equipment Solutions";
const TEMPLATE_TITLE = "References & Partners — Commercial Kitchen Projects";
const PAGE_DESC =
  "Middleby-authorized equipment partner for Marriott, Starbucks, McDonald's, KFC, and 2,000+ projects across 40+ countries in the Balkans and Central Europe.";

export const metadata: Metadata = {
  title: TEMPLATE_TITLE,
  description: PAGE_DESC,
  keywords: [
    "commercial kitchen references",
    "restaurant equipment projects",
    "Middleby partner references",
    "foodservice equipment clients",
    "hotel kitchen installations",
    "commercial kitchen design",
    "restaurant equipment supplier Balkans",
    "Middleby authorized partner",
  ],
  alternates: { canonical: "/references" },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESC,
    url: `${COMPANY.url}/references`,
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
      url: `${COMPANY.url}/references`,
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
          name: "References",
          item: `${COMPANY.url}/references`,
        },
      ],
    },
  ],
};

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */
export default function ReferencesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <Breadcrumb items={[
        { label: "References" },
      ]} />

      <HeroSection />
      <WhoWeAreSection />
      <ShowcaseSection />
      <MarketLeadershipSection />
      <GlobalChainsSection />
      <LocalProjectsSection />
      <DesignEngineeringSection />
      <BrandsPartnersSection />
      <CtaSection />
    </>
  );
}
