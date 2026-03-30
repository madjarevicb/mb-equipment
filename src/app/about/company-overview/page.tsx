import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";
import { processSteps, faqItems, testimonials } from "@/data/company-overview";
import {
  HeroSection,
  TimelineSection,
  EquipmentSection,
  ProcessSection,
  MidCtaSection,
  ValuesSection,
  SocialProofSection,
  FaqSection,
  CtaSection,
} from "./_sections";

export const dynamic = "force-static";

/* ---------- metadata ---------- */
const PAGE_TITLE = "Company Overview — Commercial Kitchen Equipment Partner";
const PAGE_DESC = "Middleby-endorsed commercial kitchen equipment partner in Belgrade, Serbia. 110+ brands, full-cycle service across 40+ countries.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  keywords: [
    "commercial kitchen equipment",
    "Middleby partner",
    "Belgrade Serbia",
    "restaurant equipment supplier",
    "kitchen design and installation",
    "foodservice equipment Southeast Europe",
  ],
  alternates: { canonical: "/about/company-overview" },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESC,
    url: `${COMPANY.url}/about/company-overview`,
    images: [{ url: `${COMPANY.url}/images/whatwedo/chef-cooking.jpg`, width: 1200, height: 630, alt: "Professional chef working in a commercial kitchen equipped by MB Equipment Solutions" }],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESC,
    images: [`${COMPANY.url}/images/whatwedo/chef-cooking.jpg`],
  },
};

/* ---------- structured data (@graph wrapper) ---------- */
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": `${COMPANY.url}/about/company-overview#webpage`,
      url: `${COMPANY.url}/about/company-overview`,
      name: PAGE_TITLE,
      description: PAGE_DESC,
      inLanguage: "en",
      datePublished: "2024-01-15",
      dateModified: "2026-03-30",
      isPartOf: { "@id": `${COMPANY.url}/#website` },
      about: { "@id": `${COMPANY.url}/#organization` },
      publisher: { "@id": `${COMPANY.url}/#organization` },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${COMPANY.url}/about/company-overview#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: COMPANY.url },
        { "@type": "ListItem", position: 2, name: "About", item: `${COMPANY.url}/about` },
        { "@type": "ListItem", position: 3, name: "Company Overview", item: `${COMPANY.url}/about/company-overview` },
      ],
    },
    {
      "@type": "ItemList",
      name: "The Full Cycle — MB Equipment Solutions Service Process",
      description: "Our five-step process covers the entire lifecycle of your commercial kitchen project.",
      itemListElement: processSteps.map((step, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: step.title,
        description: step.description,
      })),
    },
    {
      "@type": "Review",
      "@id": `${COMPANY.url}/about/company-overview#review`,
      reviewBody: testimonials[0].quote,
      author: {
        "@type": "Organization",
        name: testimonials[0].attribution,
      },
      itemReviewed: { "@id": `${COMPANY.url}/#organization` },
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${COMPANY.url}/about/company-overview#faq`,
      mainEntityOfPage: { "@id": `${COMPANY.url}/about/company-overview#webpage` },
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer.replace(/<[^>]*>/g, ""),
        },
      })),
    },
  ],
};

/* ---------- page ---------- */
export default function CompanyOverviewPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />

      {/* Breadcrumb nav */}
      <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto px-6 pt-4">
        <ol role="list" className="flex items-center gap-2 text-sm text-text-secondary">
          <li><Link href="/" className="hover:text-gold transition-colors">Home</Link></li>
          <li aria-hidden="true">/</li>
          <li><Link href="/about" className="hover:text-gold transition-colors">About</Link></li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" className="text-text-primary font-medium">Company Overview</li>
        </ol>
      </nav>

      <HeroSection />
      <TimelineSection />
      <EquipmentSection />
      <ProcessSection />
      <MidCtaSection />
      <ValuesSection />
      <SocialProofSection />
      <FaqSection />
      <CtaSection />
    </>
  );
}
