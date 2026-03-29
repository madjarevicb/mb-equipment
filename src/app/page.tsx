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

export const metadata: Metadata = {
  title: "Commercial Kitchen Equipment | MB Equipment Solutions",
  description:
    "Commercial kitchen equipment supplier in Southeast Europe. Middleby endorsed. 110+ brands for hotels, restaurants, residential and food processing.",
  alternates: { canonical: COMPANY.url },
  openGraph: {
    title: "MB Equipment Solutions — Commercial Kitchen Equipment Partner",
    description:
      "110+ equipment brands for hotels, restaurants, residential kitchens and food processing. Endorsed by Middleby Corporation. Serving 30+ countries from Belgrade.",
    url: COMPANY.url,
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: COMPANY.name,
  url: COMPANY.url,
  description:
    "Leading provider of commercial kitchen equipment in Southeast Europe. Endorsed by Middleby Corporation.",
  publisher: {
    "@type": "Organization",
    name: COMPANY.name,
    url: COMPANY.url,
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question" as const,
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer" as const,
      text: faq.answer,
    },
  })),
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
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
