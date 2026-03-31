import type { Metadata } from "next";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { COMPANY } from "@/lib/constants";
import { themes } from "@/data/innovation";
import {
  HeroSection,
  FeaturedSection,
  ThemesSection,
  ImageBreakSection,
  CtaSection,
} from "./_sections";

export const dynamic = "force-static";

/* ---------- metadata ---------- */
const PAGE_TITLE = "Innovation & Technology — Commercial Kitchen Solutions";
const PAGE_DESC =
  "Middleby kitchen technology via MB Equipment Solutions — IoT-connected equipment, ventless cooking, and ghost kitchen solutions for commercial operators.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  keywords: [
    "foodservice technology",
    "connected kitchens",
    "ventless cooking equipment",
    "IoT commercial kitchen",
    "high-speed cooking",
    "ghost kitchen solutions",
    "Middleby innovation",
    "commercial kitchen innovation",
  ],
  alternates: { canonical: "/about/innovation" },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESC,
    url: `${COMPANY.url}/about/innovation`,
    siteName: COMPANY.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${COMPANY.url}/images/innovation/hero.jpg`,
        width: 1200,
        height: 630,
        alt: "Commercial kitchen innovation technology showcase by MB Equipment Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESC,
    images: [`${COMPANY.url}/images/innovation/hero.jpg`],
  },
};

/* ---------- structured data (@graph wrapper) ---------- */
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${COMPANY.url}/about/innovation#webpage`,
      url: `${COMPANY.url}/about/innovation`,
      name: PAGE_TITLE,
      description: PAGE_DESC,
      inLanguage: "en",
      datePublished: "2024-06-01",
      dateModified: "2026-03-30",
      isPartOf: { "@id": `${COMPANY.url}/#website` },
      about: { "@id": `${COMPANY.url}/#organization` },
      publisher: { "@id": `${COMPANY.url}/#organization` },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${COMPANY.url}/about/innovation#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: COMPANY.url },
        {
          "@type": "ListItem",
          position: 2,
          name: "About",
          item: `${COMPANY.url}/about`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Innovation & Technology",
          item: `${COMPANY.url}/about/innovation`,
        },
      ],
    },
    {
      "@type": "ItemList",
      name: "Four Technologies Shaping the Future of Commercial Kitchens",
      description:
        "Key technology trends driving innovation in commercial foodservice equipment.",
      itemListElement: themes.map((theme, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: theme.title,
        description: theme.text,
      })),
    },
  ],
};

/* ---------- page ---------- */
export default function InnovationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />

      <Breadcrumb items={[
        { label: "About", href: "/about" },
        { label: "Innovation" },
      ]} />

      <HeroSection />
      <FeaturedSection />
      <ThemesSection />
      <ImageBreakSection />
      <CtaSection />
    </>
  );
}
