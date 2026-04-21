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
      },
    },
    openGraph: {
      title,
      description,
      url: `${COMPANY.url}/business/residential`,
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
/*  JSON-LD structured data                                            */
/* ------------------------------------------------------------------ */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      name: "Residential — Luxury Home Kitchen Equipment | MB Equipment Solutions",
      description: `Authorized dealer for Viking, La Cornue, AGA, Lynx, and ${residentialBrands.length}+ premium residential brands.`,
      url: `${COMPANY.url}/business/residential`,
      isPartOf: { "@type": "WebSite", url: COMPANY.url },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: COMPANY.url,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Business",
          item: `${COMPANY.url}/business`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Residential",
          item: `${COMPANY.url}/business/residential`,
        },
      ],
    },
    {
      "@type": "ItemList",
      name: "Premium Residential Kitchen Brands",
      numberOfItems: residentialBrands.length,
      itemListElement: residentialBrands.map((b, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: b.name,
      })),
    },
  ],
};

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
          { label: "Business", href: `/${locale}/business` },
          { label: dict.metadata.residential.title },
        ]}
        locale={locale as Locale}
        homeLabel={dict.breadcrumb.home}
      />

      <HeroSection dict={dict.residential.hero} common={dict.common} />
      <PortfolioSection dict={dict.residential.portfolio} />
      <BrandCarouselSection />
      <ShowcaseSection dict={dict.residential.showcase} />
      <BrochuresSection dict={dict.residential.brochures} common={dict.common} />
      <CtaSection dict={dict.residential.cta} locale={locale as Locale} />
    </>
  );
}
