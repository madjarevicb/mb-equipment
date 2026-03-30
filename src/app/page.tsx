import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import PartnersSection from "@/components/home/PartnersSection";
import SectorsSection from "@/components/home/SectorsSection";
import StatsSection from "@/components/home/StatsSection";
import AboutSection from "@/components/home/AboutSection";
import FaqSection from "@/components/home/FaqSection";
import CtaSection from "@/components/home/CtaSection";
import { faqs } from "@/lib/faq";
import { COMPANY } from "@/lib/constants";

/* ------------------------------------------------------------------ */
/*  Static rendering                                                   */
/* ------------------------------------------------------------------ */
export const dynamic = "force-static";

/* ------------------------------------------------------------------ */
/*  SEO metadata                                                       */
/* ------------------------------------------------------------------ */
const PAGE_TITLE = "Commercial Kitchen Equipment | MB Equipment Solutions";
const PAGE_DESC =
  "Authorized Middleby partner supplying 110+ commercial kitchen equipment brands across 40+ countries. Hotels, restaurants, residential, and food processing.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  keywords: [
    "commercial kitchen equipment",
    "Middleby partner",
    "restaurant equipment",
    "hotel kitchen equipment",
    "food processing equipment",
    "residential kitchen appliances",
    "MB Equipment Solutions",
    "kitchen equipment Belgrade",
  ],
  alternates: { canonical: COMPANY.url },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESC,
    url: COMPANY.url,
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
      "@type": "WebSite",
      name: COMPANY.name,
      url: COMPANY.url,
      description: PAGE_DESC,
      publisher: {
        "@type": "Organization",
        name: COMPANY.name,
        url: COMPANY.url,
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question" as const,
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer" as const,
          text: faq.answer,
        },
      })),
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <HeroSection />
      <PartnersSection />
      <SectorsSection />
      <StatsSection />
      <AboutSection />
      <FaqSection />
      <CtaSection />
    </>
  );
}
