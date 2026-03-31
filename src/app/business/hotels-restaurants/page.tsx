import type { Metadata } from "next";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { COMPANY } from "@/lib/constants";
import { brands } from "@/data/our-brands";
import {
  HeroSection,
  SegmentsSection,
  BrandsGridSection,
  ImageBreakSection,
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
const TEMPLATE_TITLE = "Our Brands — Commercial Kitchen Equipment";
const PAGE_DESC = `Authorized Middleby partner with ${brands.length}+ professional foodservice brands — Josper, Pitco, Hobart, TurboChef, and more for restaurants, hotels, and institutional kitchens.`;

export const metadata: Metadata = {
  title: TEMPLATE_TITLE,
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

      <Breadcrumb items={[
        { label: "Business", href: "/business" },
        { label: "Our Brands" },
      ]} />

      <HeroSection />
      <SegmentsSection />
      <BrandsGridSection brands={brands} />
      <ImageBreakSection />
      <ProcessSection />
      <CtaSection />
    </>
  );
}
