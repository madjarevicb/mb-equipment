import type { Metadata } from "next";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { COMPANY } from "@/lib/constants";
import { residentialBrands } from "@/data/residential";
import { getDictionary } from "@/i18n/getDictionary";
import type { Locale } from "@/i18n/config";
import {
  HeroSection,
  PortfolioSection,
  BrandCarouselSection,
  ShowcaseSection,
  BrochuresSection,
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

  const title = dict.metadata.residential.title;
  const description = dict.metadata.residential.description;

  return {
    title,
    description,
    keywords: [
      "luxury home kitchen equipment",
      "residential kitchen brands",
      "Viking range dealer",
      "La Cornue authorized dealer",
      "AGA cooker",
      "Lynx outdoor grill",
      "premium home appliances",
      "Middleby Residential",
    ],
    alternates: {
      canonical: `/${locale}/business/residential`,
      languages: {
        en: "/en/business/residential",
        sr: "/sr/business/residential",
        "x-default": "/sr/business/residential",
      },
    },
    openGraph: {
      title,
      description,
      url: `${COMPANY.url}/${locale}/business/residential`,
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
export default async function ResidentialPage({
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
        name: dict.metadata.residential.title,
        description: dict.metadata.residential.description,
        url: `${COMPANY.url}/business/residential`,
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
            name: dict.nav.residential,
            item: `${COMPANY.url}/business/residential`,
          },
        ],
      },
      {
        "@type": "ItemList",
        name: dict.metadata.residential.title,
        numberOfItems: residentialBrands.length,
        itemListElement: residentialBrands.map((b, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: b.name,
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
        items={[
          { label: dict.common.business, href: `/${locale}/business` },
          { label: dict.metadata.residential.title },
        ]}
        locale={locale as Locale}
        homeLabel={dict.breadcrumb.home}
      />

      <HeroSection dict={dict.residential.hero} common={dict.common} />
      <PortfolioSection dict={dict.residential.portfolio} />
      <BrandCarouselSection srHeading={dict.common.ourResidentialBrands} />
      <ShowcaseSection dict={dict.residential.showcase} residentialLabel={dict.common.residentialEyebrow} />
      <BrochuresSection dict={dict.residential.brochures} common={dict.common} />
      <CtaSection dict={dict.residential.cta} locale={locale as Locale} />
    </>
  );
}
