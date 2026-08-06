import Breadcrumb from "@/components/ui/Breadcrumb";
import { COMPANY } from "@/lib/constants";
import { refrigerationSubcategories, refrigerationBrands } from "@/data/refrigeration";
import { getDictionary } from "@/i18n/getDictionary";
import type { Locale } from "@/i18n/config";
import {
  HeroSection,
  OverviewSection,
  SubcategoriesSection,
  BrandsSection,
  CtaSection,
} from "./_sections";

export const dynamic = "force-static";

/* ---------- metadata ---------- */
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const PAGE_TITLE = dict.metadata.refrigeration.title;
  const PAGE_DESC = dict.metadata.refrigeration.description;

  return {
    title: PAGE_TITLE,
    description: PAGE_DESC,
    keywords: [
      "commercial refrigeration",
      "display cases commercial",
      "cold room modular",
      "walk-in cooler",
      "refrigerated display vitrines",
      "commercial freezer",
      "food refrigeration equipment",
      "blast chiller commercial",
    ],
    alternates: {
      canonical: `/${locale}/equipment/refrigeration`,
      languages: { en: "/en/equipment/refrigeration", sr: "/sr/equipment/refrigeration", "x-default": "/sr/equipment/refrigeration" },
    },
    openGraph: {
      title: PAGE_TITLE,
      description: PAGE_DESC,
      url: `${COMPANY.url}/${locale}/equipment/refrigeration`,
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
export default async function RefrigerationPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        name: dict.metadata.refrigeration.title,
        description: dict.metadata.refrigeration.description,
        url: `${COMPANY.url}/equipment/refrigeration`,
        inLanguage: locale,
        isPartOf: { "@type": "WebSite", url: COMPANY.url },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: dict.breadcrumb.home, item: COMPANY.url },
          { "@type": "ListItem", position: 2, name: dict.nav.equipment, item: `${COMPANY.url}/equipment` },
          { "@type": "ListItem", position: 3, name: dict.nav.refrigeration, item: `${COMPANY.url}/equipment/refrigeration` },
        ],
      },
      {
        "@type": "ItemList",
        name: "Refrigeration Equipment Categories",
        numberOfItems: refrigerationSubcategories.length,
        itemListElement: dict.data.refrigerationSubcategories.map((item, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: item.name,
          description: item.description,
        })),
      },
      {
        "@type": "ItemList",
        name: "Refrigeration Equipment Brands",
        numberOfItems: refrigerationBrands.length,
        itemListElement: refrigerationBrands.map((brand, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: brand.name,
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
          { label: dict.nav.refrigeration },
        ]}
      />

      <HeroSection dict={dict.refrigerationPage.hero} common={dict.common} />
      <OverviewSection dict={dict.refrigerationPage.overview} locale={locale as Locale} common={dict.common} />
      <SubcategoriesSection dict={dict.refrigerationPage.subcategories} data={dict.data.refrigerationSubcategories} locale={locale as Locale} />
      <BrandsSection dict={dict.refrigerationPage.brands} />
      <CtaSection dict={dict.refrigerationPage.cta} common={dict.common} locale={locale as Locale} />
    </>
  );
}
