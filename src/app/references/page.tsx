import type { Metadata } from "next";
import Link from "next/link";
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
  GeographyStatsSection,
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
const PAGE_DESC =
  "Trusted Middleby-authorized equipment partner for Marriott, Starbucks, McDonald's, KFC, and 500+ projects across 40+ countries in the Balkans, Central Europe, and Middle East.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
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
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESC,
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

      {/* Breadcrumb */}
      <nav className="max-w-7xl mx-auto px-6 pt-4" aria-label="Breadcrumb">
        <ol className="flex items-center gap-2 text-sm text-text-secondary">
          <li>
            <Link href="/" className="hover:text-navy transition-colors">
              Home
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" className="text-navy font-medium">
            References
          </li>
        </ol>
      </nav>

      <HeroSection />
      <WhoWeAreSection />
      <ShowcaseSection />
      <MarketLeadershipSection />
      <GlobalChainsSection />
      <LocalProjectsSection />
      <DesignEngineeringSection />
      <BrandsPartnersSection />
      <GeographyStatsSection />
      <CtaSection />
    </>
  );
}
