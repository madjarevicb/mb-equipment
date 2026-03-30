import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";
import { brands } from "@/data/our-brands";
import {
  HeroSection,
  SegmentsSection,
  BrandsGridSection,
  ProcessSection,
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
  "Our Brands — Commercial Kitchen Equipment | MB Equipment Solutions";
const PAGE_DESC = `Authorized Middleby partner with ${brands.length} professional foodservice brands including Josper, Pitco, Hobart, TurboChef, and Middleby Marshall. Commercial kitchen equipment for restaurants, hotels, and institutional kitchens.`;

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  keywords: [
    "commercial kitchen equipment brands",
    "Middleby Corporation partner",
    "professional foodservice equipment",
    "restaurant kitchen brands",
    "Josper grills",
    "TurboChef ovens",
    "Hobart dishwashers",
    "commercial cooking equipment",
  ],
  alternates: { canonical: "/business/hotels-restaurants" },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESC,
    url: `${COMPANY.url}/business/hotels-restaurants`,
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
      url: `${COMPANY.url}/business/hotels-restaurants`,
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
          name: "Our Brands",
          item: `${COMPANY.url}/business/hotels-restaurants`,
        },
      ],
    },
    {
      "@type": "ItemList",
      name: "Commercial Kitchen Equipment Brands",
      numberOfItems: brands.length,
      itemListElement: brands.slice(0, 20).map((b, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: b.name,
        description: b.text,
      })),
    },
  ],
};

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */
export default function OurBrandsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      {/* Breadcrumb */}
      <nav
        className="max-w-7xl mx-auto px-6 pt-4"
        aria-label="Breadcrumb"
      >
        <ol className="flex items-center gap-2 text-sm text-text-secondary">
          <li>
            <Link href="/" className="hover:text-navy transition-colors">
              Home
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <Link href="/business" className="hover:text-navy transition-colors">
              Business
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" className="text-navy font-medium">
            Our Brands
          </li>
        </ol>
      </nav>

      <HeroSection />
      <SegmentsSection />
      <BrandsGridSection />
      <ProcessSection />
      <CtaSection />
    </>
  );
}
