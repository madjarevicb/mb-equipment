import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";
import { residentialBrands } from "@/data/residential";
import {
  HeroSection,
  PortfolioSection,
  BrandCarouselSection,
  ShowcaseSection,
  BrochuresSection,
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
  "Residential — Luxury Home Kitchen Equipment | MB Equipment Solutions";
const PAGE_DESC = `Authorized dealer for Viking, La Cornue, AGA, Lynx, and ${residentialBrands.length} premium residential kitchen brands. Showroom demonstrations, professional installation, and factory-backed service in Belgrade.`;

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  keywords: [
    "luxury home kitchen equipment",
    "residential kitchen brands",
    "Viking range dealer",
    "La Cornue authorized dealer",
    "AGA cooker",
    "Lynx outdoor grill",
    "premium home appliances",
    "Middleby Residential",
  ],
  alternates: { canonical: "/business/residential" },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESC,
    url: `${COMPANY.url}/business/residential`,
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
      url: `${COMPANY.url}/business/residential`,
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
          name: "Residential",
          item: `${COMPANY.url}/business/residential`,
        },
      ],
    },
    {
      "@type": "ItemList",
      name: "Premium Residential Kitchen Brands",
      numberOfItems: residentialBrands.length,
      itemListElement: residentialBrands.map((b, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: b.name,
      })),
    },
  ],
};

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */
export default function ResidentialPage() {
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
          <li>
            <Link
              href="/business"
              className="hover:text-navy transition-colors"
            >
              Business
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" className="text-navy font-medium">
            Residential
          </li>
        </ol>
      </nav>

      <HeroSection />
      <PortfolioSection />
      <BrandCarouselSection />
      <ShowcaseSection />
      <BrochuresSection />
      <CtaSection />
    </>
  );
}
