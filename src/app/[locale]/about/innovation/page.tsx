import Breadcrumb from "@/components/ui/Breadcrumb";
import { COMPANY } from "@/lib/constants";
import { getDictionary } from "@/i18n/getDictionary";
import type { Locale } from "@/i18n/config";
import {
  HeroSection,
  FeaturedSection,
  ThemesSection,
  ImageBreakSection,
  CtaSection,
} from "./_sections";

export const dynamic = "force-static";

/* ---------- metadata ---------- */
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const PAGE_TITLE = dict.metadata.innovation.title;
  const PAGE_DESC = dict.metadata.innovation.description;

  return {
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
    alternates: {
      canonical: `/${locale}/about/innovation`,
      languages: { en: "/en/about/innovation", sr: "/sr/about/innovation", "x-default": "/sr/about/innovation" },
    },
    openGraph: {
      title: PAGE_TITLE,
      description: PAGE_DESC,
      url: `${COMPANY.url}/${locale}/about/innovation`,
      siteName: COMPANY.name,
      locale: locale === "sr" ? "sr_RS" : "en_US",
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
}

/* ---------- page ---------- */
export default async function InnovationPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  /* ---------- structured data (@graph wrapper) ---------- */
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${COMPANY.url}/about/innovation#webpage`,
        url: `${COMPANY.url}/about/innovation`,
        name: dict.metadata.innovation.title,
        description: dict.metadata.innovation.description,
        inLanguage: locale,
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
          { "@type": "ListItem", position: 1, name: dict.breadcrumb.home, item: COMPANY.url },
          {
            "@type": "ListItem",
            position: 2,
            name: dict.nav.aboutUs,
            item: `${COMPANY.url}/about`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: dict.nav.innovation,
            item: `${COMPANY.url}/about/innovation`,
          },
        ],
      },
      {
        "@type": "ItemList",
        name: dict.innovation.themes.heading1,
        description: dict.innovation.themes.body,
        itemListElement: dict.data.innovationThemes.map((theme, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: theme.title,
          description: theme.text,
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />

      <Breadcrumb
        locale={locale as Locale}
        homeLabel={dict.breadcrumb.home}
        items={[
          { label: dict.nav.aboutUs, href: `/${locale}/about` },
          { label: dict.nav.innovation },
        ]}
      />

      <HeroSection dict={dict.innovation.hero} locale={locale as Locale} />
      <FeaturedSection dict={dict.innovation.featured} data={dict.data.innovationFeatured} locale={locale as Locale} />
      <ThemesSection dict={dict.innovation.themes} data={dict.data.innovationThemes} locale={locale as Locale} />
      <ImageBreakSection />
      <CtaSection dict={dict.innovation.cta} locale={locale as Locale} ctaPrimary={dict.common.bookDemo} ctaSecondary={dict.common.requestConsultation} />
    </>
  );
}
