import Breadcrumb from "@/components/ui/Breadcrumb";
import { COMPANY } from "@/lib/constants";
import { getDictionary } from "@/i18n/getDictionary";
import type { Locale } from "@/i18n/config";
import {
  HeroSection,
  IntroSection,
  CentersSection,
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
  const PAGE_TITLE = dict.metadata.demoCenters.title;
  const PAGE_DESC = dict.metadata.demoCenters.description;

  return {
    title: PAGE_TITLE,
    description: PAGE_DESC,
    keywords: [
      "demo center",
      "commercial kitchen showroom",
      "Middleby Innovation Kitchen",
      "equipment demonstration",
      "foodservice demo",
      "book a demo",
      "kitchen equipment testing",
      "Middleby showroom",
    ],
    alternates: {
      canonical: `/${locale}/demo-centers`,
      languages: { en: "/en/demo-centers", sr: "/sr/demo-centers" },
    },
    openGraph: {
      title: PAGE_TITLE,
      description: PAGE_DESC,
      url: `${COMPANY.url}/demo-centers`,
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
export default async function DemoCentersPage({ params }: { params: Promise<{ locale: string }> }) {
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
        name: dict.metadata.demoCenters.title,
        description: dict.metadata.demoCenters.description,
        url: `${COMPANY.url}/demo-centers`,
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
            name: dict.nav.demoCenters,
            item: `${COMPANY.url}/demo-centers`,
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
          { label: dict.nav.demoCenters },
        ]}
      />

      <HeroSection dict={dict.demoCenters.hero} authorizedPartnerOf={dict.common.authorizedPartnerOf} />
      <IntroSection dict={dict.demoCenters.intro} />
      <CentersSection data={dict.data.demoCenters} />
      <CtaSection dict={dict.demoCenters.cta} commonDict={dict.common} locale={locale as Locale} />
    </>
  );
}
