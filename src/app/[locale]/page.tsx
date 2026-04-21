import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import PartnersSection from "@/components/home/PartnersSection";
import SectorsSection from "@/components/home/SectorsSection";
import StatsSection from "@/components/home/StatsSection";
import AboutSection from "@/components/home/AboutSection";
import dynamic_ from "next/dynamic";
const FaqSection = dynamic_(() => import("@/components/home/FaqSection"));
import CtaSection from "@/components/home/CtaSection";
import { faqs } from "@/lib/faq";
import { COMPANY } from "@/lib/constants";
import { getDictionary } from "@/i18n/getDictionary";
import type { Locale } from "@/i18n/config";

/* ------------------------------------------------------------------ */
/*  Static rendering                                                   */
/* ------------------------------------------------------------------ */
export const dynamic = "force-static";

/* ------------------------------------------------------------------ */
/*  SEO metadata                                                       */
/* ------------------------------------------------------------------ */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  const title = dict.metadata.home.title;
  const description = dict.metadata.home.description;

  return {
    title: { absolute: title },
    description,
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
    alternates: {
      canonical: `/${locale}`,
      languages: { en: "/en", sr: "/sr" },
    },
    openGraph: {
      title,
      description,
      url: COMPANY.url,
      siteName: COMPANY.name,
      locale: locale === "sr" ? "sr_RS" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

/* ------------------------------------------------------------------ */
/*  JSON-LD structured data                                            */
/* ------------------------------------------------------------------ */
const PAGE_DESC =
  "Authorized Middleby partner supplying 110+ commercial kitchen equipment brands across Southeast Europe. Hotels, restaurants, residential, and food processing.";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${COMPANY.url}/#website`,
      name: COMPANY.name,
      url: COMPANY.url,
      description: PAGE_DESC,
      publisher: {
        "@type": "Organization",
        "@id": `${COMPANY.url}/#organization`,
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

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <HeroSection dict={dict.home.hero} locale={locale as Locale} />
      <PartnersSection dict={dict.home.partners} />
      <SectorsSection dict={dict.home.sectors} locale={locale as Locale} />
      <StatsSection dict={dict.home.stats} />
      <AboutSection dict={dict.home.about} locale={locale as Locale} />
      <FaqSection dict={dict.home.faq} />
      <CtaSection dict={dict.home.cta} locale={locale as Locale} />
    </>
  );
}
