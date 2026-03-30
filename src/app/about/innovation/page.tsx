import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";
import { themes } from "@/data/innovation";
import {
  HeroSection,
  FeaturedSection,
  ThemesSection,
  CtaSection,
} from "./_sections";

export const dynamic = "force-static";

/* ---------- metadata ---------- */
const PAGE_TITLE = "Innovation & Technology — Commercial Kitchen Solutions";
const PAGE_DESC =
  "Explore Middleby kitchen technology through MB Equipment Solutions — IoT-connected equipment, ventless cooking systems, and ghost kitchen solutions for commercial operators in Serbia and the Balkans.";

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

      {/* Breadcrumb nav */}
      <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto px-6 pt-4">
        <ol
          role="list"
          className="flex items-center gap-2 text-sm text-text-secondary"
        >
          <li>
            <Link href="/" className="hover:text-gold transition-colors">
              Home
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <Link href="/about" className="hover:text-gold transition-colors">
              About
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" className="text-text-primary font-medium">
            Innovation
          </li>
        </ol>
      </nav>

      <HeroSection />
      <FeaturedSection />
      <ThemesSection />
      <CtaSection />
    </>
  );
}
