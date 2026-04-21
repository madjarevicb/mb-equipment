import Breadcrumb from "@/components/ui/Breadcrumb";
import { COMPANY } from "@/lib/constants";
import { thermalSubcategories, thermalBrands } from "@/data/thermal-processing";
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
  const PAGE_TITLE = dict.metadata.thermalProcessing.title;
  const PAGE_DESC = dict.metadata.thermalProcessing.description;

  return {
    title: PAGE_TITLE,
    description: PAGE_DESC,
    keywords: [
      "commercial cooking equipment",
      "thermal processing",
      "combi ovens",
      "commercial fryers",
      "charcoal grill Josper",
      "induction cooking commercial",
      "commercial ranges",
      "pasta cookers commercial",
    ],
    alternates: {
      canonical: `/${locale}/equipment/thermal-processing`,
      languages: { en: "/en/equipment/thermal-processing", sr: "/sr/equipment/thermal-processing" },
    },
    openGraph: {
      title: PAGE_TITLE,
      description: PAGE_DESC,
      url: `${COMPANY.url}/equipment/thermal-processing`,
      siteName: COMPANY.name,
      locale: locale === "sr" ? "sr_RS" : "en_US",
      type: "website",
      images: [{ url: `${COMPANY.url}/images/whatwedo/chef-cooking.jpg`, width: 1200, height: 630, alt: "Professional chef using thermal cooking equipment" }],
    },
    twitter: {
      card: "summary_large_image" as const,
      title: PAGE_TITLE,
      description: PAGE_DESC,
      images: [`${COMPANY.url}/images/whatwedo/chef-cooking.jpg`],
    },
  };
}

/* ---------- page ---------- */
export default async function ThermalProcessingPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        name: dict.metadata.thermalProcessing.title,
        description: dict.metadata.thermalProcessing.description,
        url: `${COMPANY.url}/equipment/thermal-processing`,
        inLanguage: locale,
        isPartOf: { "@type": "WebSite", url: COMPANY.url },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: dict.breadcrumb.home, item: COMPANY.url },
          { "@type": "ListItem", position: 2, name: dict.nav.equipment, item: `${COMPANY.url}/equipment` },
          { "@type": "ListItem", position: 3, name: dict.nav.thermalProcessing, item: `${COMPANY.url}/equipment/thermal-processing` },
        ],
      },
      {
        "@type": "ItemList",
        name: "Thermal Processing Equipment Categories",
        numberOfItems: thermalSubcategories.length,
        itemListElement: dict.data.thermalSubcategories.map((item, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: item.name,
          description: item.description,
        })),
      },
      {
        "@type": "ItemList",
        name: "Thermal Processing Equipment Brands",
        numberOfItems: thermalBrands.length,
        itemListElement: thermalBrands.map((brand, i) => ({
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
          { label: dict.nav.thermalProcessing },
        ]}
      />

      <HeroSection dict={dict.thermal.hero} common={dict.common} />
      <OverviewSection dict={dict.thermal.overview} locale={locale as Locale} common={dict.common} />
      <SubcategoriesSection dict={dict.thermal.subcategories} data={dict.data.thermalSubcategories} locale={locale as Locale} />
      <BrandsSection dict={dict.thermal.brands} />
      <CtaSection dict={dict.thermal.cta} common={dict.common} locale={locale as Locale} />
    </>
  );
}
