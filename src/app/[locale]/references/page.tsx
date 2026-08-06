import Breadcrumb from "@/components/ui/Breadcrumb";
import { COMPANY } from "@/lib/constants";
import { getDictionary } from "@/i18n/getDictionary";
import type { Locale } from "@/i18n/config";
import {
  HeroSection,
  WhoWeAreSection,
  ShowcaseSection,
  MarketLeadershipSection,
  GlobalChainsSection,
  LocalProjectsSection,
  DesignEngineeringSection,
  BrandsPartnersSection,
  CtaSection,
} from "./_sections";

/* ------------------------------------------------------------------ */
/*  Static rendering                                                   */
/* ------------------------------------------------------------------ */
export const dynamic = "force-static";

/* ------------------------------------------------------------------ */
/*  SEO metadata                                                       */
/* ------------------------------------------------------------------ */
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const PAGE_TITLE = dict.metadata.references.title;
  const PAGE_DESC = dict.metadata.references.description;

  return {
    title: PAGE_TITLE,
    description: PAGE_DESC,
    keywords: [
      "commercial kitchen references",
      "restaurant equipment projects",
      "Middleby partner references",
      "foodservice equipment clients",
      "hotel kitchen installations",
      "commercial kitchen design",
      "restaurant equipment supplier Balkans",
      "Middleby authorized partner",
    ],
    alternates: {
      canonical: `/${locale}/references`,
      languages: { en: "/en/references", sr: "/sr/references", "x-default": "/sr/references" },
    },
    openGraph: {
      title: PAGE_TITLE,
      description: PAGE_DESC,
      url: `${COMPANY.url}/${locale}/references`,
      siteName: COMPANY.name,
      locale: locale === "sr" ? "sr_RS" : "en_US",
      type: "website",
      images: [{ url: "/images/og/homepage.jpg", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: PAGE_TITLE,
      description: PAGE_DESC,
      images: ["/images/og/homepage.jpg"],
    },
  };
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */
export default async function ReferencesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  /* ------------------------------------------------------------------ */
  /*  JSON-LD structured data                                            */
  /* ------------------------------------------------------------------ */
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        name: dict.metadata.references.title,
        description: dict.metadata.references.description,
        url: `${COMPANY.url}/references`,
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
            name: dict.nav.references,
            item: `${COMPANY.url}/references`,
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
        locale={locale as Locale}
        homeLabel={dict.breadcrumb.home}
        items={[
          { label: dict.nav.references },
        ]}
      />

      <HeroSection dict={dict.references.hero} authorizedPartnerOf={dict.common.authorizedPartnerOf} />
      <WhoWeAreSection dict={dict.references.whoWeAre} globalPresenceValue={dict.common.fiftyPercentOutsideUs} />
      <ShowcaseSection dict={dict.references.showcase} />
      <MarketLeadershipSection dict={dict.references.marketLeadership} />
      <GlobalChainsSection dict={dict.references.globalChains} />
      <LocalProjectsSection dict={dict.references.localProjects} />
      <DesignEngineeringSection dict={dict.references.designEngineering} />
      <BrandsPartnersSection dict={dict.references.brandsPartners} />
      <CtaSection dict={dict.references.cta} commonDict={dict.common} locale={locale as Locale} />
    </>
  );
}
