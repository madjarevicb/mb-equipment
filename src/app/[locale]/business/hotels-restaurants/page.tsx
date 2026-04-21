import type { Metadata } from "next";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { COMPANY } from "@/lib/constants";
import { brands } from "@/data/our-brands";
import { getDictionary } from "@/i18n/getDictionary";
import type { Locale } from "@/i18n/config";
import {
  HeroSection,
  SegmentsSection,
  BrandsGridSection,
  ImageBreakSection,
  ProcessSection,
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

  const title = dict.metadata.hotelsRestaurants.title;
  const description = dict.metadata.hotelsRestaurants.description;

  return {
    title,
    description,
    keywords: [
      "commercial kitchen equipment brands",
      "Middleby Corporation partner",
      "professional foodservice equipment",
      "restaurant kitchen brands",
      "Josper grills",
      "TurboChef ovens",
      "Hobart dishwashers",
      "commercial cooking equipment",
    ],
    alternates: {
      canonical: `/${locale}/business/hotels-restaurants`,
      languages: {
        en: "/en/business/hotels-restaurants",
        sr: "/sr/business/hotels-restaurants",
      },
    },
    openGraph: {
      title,
      description,
      url: `${COMPANY.url}/business/hotels-restaurants`,
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
      name: "Our Brands — Commercial Kitchen Equipment | MB Equipment Solutions",
      description: `Authorized Middleby partner with ${brands.length}+ professional foodservice brands.`,
      url: `${COMPANY.url}/business/hotels-restaurants`,
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
          name: "Our Brands",
          item: `${COMPANY.url}/business/hotels-restaurants`,
        },
      ],
    },
    {
      "@type": "ItemList",
      name: "Commercial Kitchen Equipment Brands",
      numberOfItems: brands.length,
      itemListElement: brands.slice(0, 20).map((b, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: b.name,
        description: b.text,
      })),
    },
  ],
};

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */
export default async function OurBrandsPage({
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
          { label: dict.metadata.hotelsRestaurants.title },
        ]}
        locale={locale as Locale}
        homeLabel={dict.breadcrumb.home}
      />

      <HeroSection dict={dict.hotelsRestaurants.hero} locale={locale as Locale} />
      <SegmentsSection dict={dict.hotelsRestaurants.segments} data={dict.data.segments} />
      <BrandsGridSection brands={brands} dict={dict.hotelsRestaurants.brandsGrid} />
      <ImageBreakSection />
      <ProcessSection dict={dict.hotelsRestaurants.process} data={dict.data.brandProcessSteps} />
      <CtaSection dict={dict.hotelsRestaurants.cta} common={dict.common} locale={locale as Locale} />
    </>
  );
}
