import Breadcrumb from "@/components/ui/Breadcrumb";
import { COMPANY } from "@/lib/constants";
import { getDictionary } from "@/i18n/getDictionary";
import type { Locale } from "@/i18n/config";
import {
  HeroSection,
  PartnershipSection,
  EquipmentSection,
  ProcessSection,
  MidCtaSection,
  ValuesSection,
  ReferencesSection,
  FaqSection,
  CtaSection,
} from "./_sections";

export const dynamic = "force-static";

/* ---------- metadata ---------- */
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const PAGE_TITLE = dict.metadata.companyOverview.title;
  const PAGE_DESC = dict.metadata.companyOverview.description;

  return {
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
    alternates: {
      canonical: `/${locale}/about/company-overview`,
      languages: { en: "/en/about/company-overview", sr: "/sr/about/company-overview" },
    },
    openGraph: {
      title: PAGE_TITLE,
      description: PAGE_DESC,
      url: `${COMPANY.url}/about/company-overview`,
      siteName: COMPANY.name,
      locale: locale === "sr" ? "sr_RS" : "en_US",
      type: "website",
      images: [{ url: `${COMPANY.url}/images/whatwedo/chef-cooking.jpg`, width: 1200, height: 630, alt: "Professional chef working in a commercial kitchen equipped by MB Equipment Solutions" }],
    },
    twitter: {
      card: "summary_large_image",
      title: PAGE_TITLE,
      description: PAGE_DESC,
      images: [`${COMPANY.url}/images/whatwedo/chef-cooking.jpg`],
    },
  };
}

/* ---------- page ---------- */
export default async function CompanyOverviewPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  /* ---------- structured data (@graph wrapper) ---------- */
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "@id": `${COMPANY.url}/about/company-overview#webpage`,
        url: `${COMPANY.url}/about/company-overview`,
        name: dict.metadata.companyOverview.title,
        description: dict.metadata.companyOverview.description,
        inLanguage: locale,
        datePublished: "2025-01-01",
        dateModified: new Date().toISOString().split("T")[0],
        isPartOf: { "@id": `${COMPANY.url}/#website` },
        about: { "@id": `${COMPANY.url}/#organization` },
        publisher: { "@id": `${COMPANY.url}/#organization` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${COMPANY.url}/about/company-overview#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: dict.breadcrumb.home, item: COMPANY.url },
          { "@type": "ListItem", position: 2, name: dict.nav.aboutUs, item: `${COMPANY.url}/about` },
          { "@type": "ListItem", position: 3, name: dict.nav.companyOverview, item: `${COMPANY.url}/about/company-overview` },
        ],
      },
      {
        "@type": "ItemList",
        name: dict.companyOverview.process.heading1 + " " + dict.companyOverview.process.heading2,
        description: dict.companyOverview.process.body,
        itemListElement: dict.data.processSteps.map((step, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: step.title,
          description: step.description,
        })),
      },
      {
        "@type": "FAQPage",
        "@id": `${COMPANY.url}/about/company-overview#faq`,
        mainEntityOfPage: { "@id": `${COMPANY.url}/about/company-overview#webpage` },
        mainEntity: dict.data.faqItems.map((item) => ({
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

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />

      <Breadcrumb
        locale={locale as Locale}
        homeLabel={dict.breadcrumb.home}
        items={[
          { label: dict.nav.aboutUs, href: `/${locale}/about` },
          { label: dict.nav.companyOverview },
        ]}
      />

      <HeroSection dict={dict.companyOverview.hero} locale={locale as Locale} />
      <PartnershipSection dict={dict.companyOverview.partnership} data={dict.data.partnershipBlocks} locale={locale as Locale} />
      <EquipmentSection dict={dict.companyOverview.equipment} data={dict.data.equipmentCategories} experienceData={dict.data.experienceSpaces} locale={locale as Locale} />
      <ProcessSection dict={dict.companyOverview.process} data={dict.data.processSteps} locale={locale as Locale} />
      <MidCtaSection dict={dict.companyOverview.midCta} locale={locale as Locale} ctaLabel={dict.common.sendFloorPlan} />
      <ValuesSection dict={dict.companyOverview.values} data={dict.data.companyValues} locale={locale as Locale} />
      <ReferencesSection dict={dict.companyOverview.references} data={dict.data.projectReferences} locale={locale as Locale} ctaLabel={dict.common.seeAllReferences} />
      <FaqSection dict={dict.companyOverview.faq} data={dict.data.faqItems} locale={locale as Locale} />
      <CtaSection dict={dict.companyOverview.cta} locale={locale as Locale} ctaPrimary={dict.common.startYourProject} ctaSecondary={dict.common.seeOurWork} responseNote={dict.common.responseTime} />
    </>
  );
}
