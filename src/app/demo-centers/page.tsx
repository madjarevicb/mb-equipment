import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";
import {
  HeroSection,
  IntroSection,
  CentersSection,
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
  "Demo Centers & Showrooms — Hands-On Equipment Testing | MB Equipment Solutions";
const PAGE_DESC =
  "Visit Middleby Innovation Kitchens in Dallas, Madrid, Wigan, and Belgrade. Hands-on equipment testing with factory application chefs. Book your demo session.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  keywords: [
    "demo center",
    "commercial kitchen showroom",
    "Middleby Innovation Kitchen",
    "equipment demonstration",
    "foodservice demo",
    "book a demo",
    "kitchen equipment testing",
    "Middleby showroom",
  ],
  alternates: { canonical: "/demo-centers" },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESC,
    url: `${COMPANY.url}/demo-centers`,
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
      url: `${COMPANY.url}/demo-centers`,
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
          name: "Demo Centers",
          item: `${COMPANY.url}/demo-centers`,
        },
      ],
    },
  ],
};

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */
export default function DemoCentersPage() {
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
            Demo Centers
          </li>
        </ol>
      </nav>

      <HeroSection />
      <IntroSection />
      <CentersSection />
      <CtaSection />
    </>
  );
}
