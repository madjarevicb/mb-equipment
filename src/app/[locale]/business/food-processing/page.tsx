import type { Metadata } from "next";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { COMPANY } from "@/lib/constants";
import { getDictionary } from "@/i18n/getDictionary";
import type { Locale } from "@/i18n/config";
import {
  HeroSection,
  IntroSection,
  BrandsSection,
  EquipmentSection,
  ApplicationSection,
  ImageBreakSection,
  InnovationCentersSection,
  CtaSection,
} from "./_sections";

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

  const title = dict.metadata.foodProcessing.title;
  const description = dict.metadata.foodProcessing.description;

  return {
    title,
    description,
    keywords: [
      "food processing equipment",
      "industrial bakery equipment",
      "protein processing equipment",
      "Middleby food processing",
      "industrial food production",
      "food packaging equipment",
      "thermal processing equipment",
      "food processing automation",
    ],
    alternates: {
      canonical: `/${locale}/business/food-processing`,
      languages: {
        en: "/en/business/food-processing",
        sr: "/sr/business/food-processing",
        "x-default": "/sr/business/food-processing",
      },
    },
    openGraph: {
      title,
      description,
      url: `${COMPANY.url}/${locale}/business/food-processing`,
      siteName: COMPANY.name,
      locale: locale === "sr" ? "sr_RS" : "en_US",
      type: "website",
      images: [{ url: "/images/og/homepage.jpg", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/og/homepage.jpg"],
    },
  };
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */
export default async function FoodProcessingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  /* JSON-LD structured data */
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        name: dict.metadata.foodProcessing.title,
        description: dict.metadata.foodProcessing.description,
        url: `${COMPANY.url}/business/food-processing`,
        isPartOf: { "@type": "WebSite", url: COMPANY.url },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: dict.breadcrumb.home,
            item: COMPANY.url,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: dict.common.business,
            item: `${COMPANY.url}/business`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: dict.nav.foodProcessing,
            item: `${COMPANY.url}/business/food-processing`,
          },
        ],
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
        items={[
          { label: dict.common.business, href: `/${locale}/business` },
          { label: dict.metadata.foodProcessing.title },
        ]}
        locale={locale as Locale}
        homeLabel={dict.breadcrumb.home}
      />

      <HeroSection dict={dict.foodProcessing.hero} common={dict.common} />
      <IntroSection dict={dict.foodProcessing.intro} locale={locale as Locale} />
      <BrandsSection dict={dict.foodProcessing.brands} />
      <EquipmentSection dict={dict.foodProcessing.equipment} />
      <ApplicationSection dict={dict.foodProcessing.applications} />
      <ImageBreakSection />
      <InnovationCentersSection dict={dict.foodProcessing.innovationCenters} locale={locale as Locale} />
      <CtaSection dict={dict.foodProcessing.cta} common={dict.common} locale={locale as Locale} />
    </>
  );
}
