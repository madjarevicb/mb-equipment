import Breadcrumb from "@/components/ui/Breadcrumb";
import { COMPANY } from "@/lib/constants";
import { neutralCapabilities, fabricationSteps } from "@/data/neutral-inox";
import { getDictionary } from "@/i18n/getDictionary";
import type { Locale } from "@/i18n/config";
import {
  HeroSection,
  OverviewSection,
  CapabilitiesSection,
  FabricationProcessSection,
  AdditionalSection,
  CtaSection,
} from "./_sections";

export const dynamic = "force-static";

/* ---------- metadata ---------- */
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const PAGE_TITLE = dict.metadata.neutralInox.title;
  const PAGE_DESC = dict.metadata.neutralInox.description;

  return {
    title: PAGE_TITLE,
    description: PAGE_DESC,
    keywords: [
      "stainless steel kitchen equipment",
      "custom kitchen fabrication",
      "commercial worktops INOX",
      "stainless steel shelving",
      "commercial kitchen sinks",
      "ventilation hoods commercial",
      "neutral kitchen equipment",
      "custom stainless steel",
    ],
    alternates: {
      canonical: `/${locale}/equipment/neutral-inox`,
      languages: { en: "/en/equipment/neutral-inox", sr: "/sr/equipment/neutral-inox" },
    },
    openGraph: {
      title: PAGE_TITLE,
      description: PAGE_DESC,
      url: `${COMPANY.url}/equipment/neutral-inox`,
      siteName: COMPANY.name,
      locale: locale === "sr" ? "sr_RS" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image" as const,
      title: PAGE_TITLE,
      description: PAGE_DESC,
    },
  };
}

/* ---------- page ---------- */
export default async function NeutralInoxPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        name: dict.metadata.neutralInox.title,
        description: dict.metadata.neutralInox.description,
        url: `${COMPANY.url}/equipment/neutral-inox`,
        inLanguage: locale,
        isPartOf: { "@type": "WebSite", url: COMPANY.url },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: dict.breadcrumb.home, item: COMPANY.url },
          { "@type": "ListItem", position: 2, name: dict.nav.equipment, item: `${COMPANY.url}/equipment` },
          { "@type": "ListItem", position: 3, name: dict.nav.neutralInox, item: `${COMPANY.url}/equipment/neutral-inox` },
        ],
      },
      {
        "@type": "ItemList",
        name: "Neutral INOX Equipment Capabilities",
        numberOfItems: neutralCapabilities.length,
        itemListElement: dict.data.neutralCapabilities.map((item, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: item.name,
          description: item.description,
        })),
      },
      {
        "@type": "HowTo",
        name: "Custom Stainless Steel Fabrication Process",
        description: dict.neutralInoxPage.fabrication.body,
        step: dict.data.fabricationSteps.map((step, i) => ({
          "@type": "HowToStep",
          position: i + 1,
          name: step.title,
          text: step.description,
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <Breadcrumb
        locale={locale as Locale}
        homeLabel={dict.breadcrumb.home}
        items={[
          { label: dict.nav.equipment, href: `/${locale}/equipment` },
          { label: dict.nav.neutralInox },
        ]}
      />

      <HeroSection dict={dict.neutralInoxPage.hero} common={dict.common} />
      <OverviewSection dict={dict.neutralInoxPage.overview} locale={locale as Locale} common={dict.common} />
      <CapabilitiesSection dict={dict.neutralInoxPage.capabilities} data={dict.data.neutralCapabilities} />
      <FabricationProcessSection dict={dict.neutralInoxPage.fabrication} data={dict.data.fabricationSteps} />
      <AdditionalSection dict={dict.neutralInoxPage.additional} locale={locale as Locale} />
      <CtaSection dict={dict.neutralInoxPage.cta} common={dict.common} locale={locale as Locale} />
    </>
  );
}
