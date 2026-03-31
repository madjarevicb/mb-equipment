import type { Metadata } from "next";
import Breadcrumb from "@/components/ui/Breadcrumb";
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
const TEMPLATE_TITLE = "Demo Centers & Showrooms — Hands-On Equipment Testing";
const PAGE_DESC =
  "Visit Middleby Innovation Kitchens in Dallas, Madrid, Wigan, and Belgrade. Hands-on equipment testing with factory application chefs. Book your demo session.";

export const metadata: Metadata = {
  title: TEMPLATE_TITLE,
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

      <Breadcrumb items={[
        { label: "Demo Centers" },
      ]} />

      <HeroSection />
      <IntroSection />
      <CentersSection />
      <CtaSection />
    </>
  );
}
