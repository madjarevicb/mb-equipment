import type { Metadata } from "next";
import { COMPANY } from "@/lib/constants";
import { getDictionary } from "@/i18n/getDictionary";
import type { Locale } from "@/i18n/config";
import ChapterMark from "../../../thermal-processing/_sections/ChapterMark";
import {
  Hero,
  Mechanism,
  ModelLedger,
  Numbers,
  HouseQuote,
  Cta,
} from "./_sections";

export const dynamic = "force-static";

const PAGE_TITLE_EN = "IMC WasteStation — Food Waste Management | MB";
const PAGE_TITLE_SR = "IMC WasteStation — upravljanje otpadom | MB";
const PAGE_DESC_EN =
  "IMC WasteStation by Imperial Machine Company (Middleby) — food waste macerator and dewaterer reducing kitchen waste volume by up to 80%. Authorized supply, Belgrade.";
const PAGE_DESC_SR =
  "IMC WasteStation (Imperial Machine Company, Middleby) — usitnjavač i dehidrator otpada koji smanjuje zapreminu kuhinjskog otpada do 80%. Ovlašćena isporuka, Beograd.";

const HERO_IMAGE_URL = "/images/imc/hero-straight.jpg";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isSr = locale === "sr";
  const PAGE_TITLE = isSr ? PAGE_TITLE_SR : PAGE_TITLE_EN;
  const PAGE_DESC = isSr ? PAGE_DESC_SR : PAGE_DESC_EN;

  return {
    title: { absolute: PAGE_TITLE },
    description: PAGE_DESC,
    keywords: [
      "IMC WasteStation",
      "Imperial Machine Company",
      "food waste macerator",
      "food waste dewaterer",
      "commercial kitchen waste reduction",
      "Middleby waste management",
      "WasteStation F79/010",
      "WasteStation Compact F79/703",
      "kitchen waste 80% reduction",
      "UKCA waste equipment",
      "IMC Lincoln UK",
      "IMC ovlašćeni partner",
      "upravljanje kuhinjskim otpadom",
      "usitnjavač otpada",
      "smanjenje zapremine otpada",
    ],
    alternates: {
      canonical: `/${locale}/equipment/neutral-inox/waste-management/waste-station-imc`,
      languages: {
        en: "/en/equipment/neutral-inox/waste-management/waste-station-imc",
        sr: "/sr/equipment/neutral-inox/waste-management/waste-station-imc",
        "x-default":
          "/en/equipment/neutral-inox/waste-management/waste-station-imc",
      },
    },
    openGraph: {
      title: PAGE_TITLE,
      description: PAGE_DESC,
      url: `${COMPANY.url}/${locale}/equipment/neutral-inox/waste-management/waste-station-imc`,
      siteName: COMPANY.name,
      locale: isSr ? "sr_RS" : "en_US",
      type: "website",
      images: [
        {
          url: `${COMPANY.url}${HERO_IMAGE_URL}`,
          width: 1200,
          height: 630,
          alt: "IMC WasteStation food waste macerator and dewaterer",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: PAGE_TITLE,
      description: PAGE_DESC,
      images: [`${COMPANY.url}${HERO_IMAGE_URL}`],
    },
  };
}

export default async function WasteStationImcPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const isSr = locale === "sr";
  const PAGE_TITLE = isSr ? PAGE_TITLE_SR : PAGE_TITLE_EN;
  const PAGE_DESC = isSr ? PAGE_DESC_SR : PAGE_DESC_EN;
  const pageUrl = `${COMPANY.url}/${locale}/equipment/neutral-inox/waste-management/waste-station-imc`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: PAGE_TITLE,
        description: PAGE_DESC,
        inLanguage: isSr ? "sr-RS" : "en",
        isPartOf: { "@id": `${COMPANY.url}/#website` },
        about: [
          { "@id": `${COMPANY.url}/#organization` },
          { "@id": `${pageUrl}#product` },
        ],
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: `${COMPANY.url}${HERO_IMAGE_URL}`,
          width: 1200,
          height: 630,
        },
        breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
        mainEntity: { "@id": `${pageUrl}#product` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: dict.breadcrumb.home,
            item: `${COMPANY.url}/${locale}`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: dict.nav.equipment,
            item: `${COMPANY.url}/${locale}/equipment`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: dict.nav.neutralAndInox,
            item: `${COMPANY.url}/${locale}/equipment/neutral-inox`,
          },
          {
            "@type": "ListItem",
            position: 4,
            name: dict.nav.wasteManagement,
            item: `${COMPANY.url}/${locale}/equipment/neutral-inox/waste-management`,
          },
          {
            "@type": "ListItem",
            position: 5,
            name: dict.nav.wasteStationImc,
          },
        ],
      },
      {
        "@type": "Product",
        "@id": `${pageUrl}#product`,
        name: "IMC WasteStation",
        description:
          "Food waste macerator and dewaterer for commercial kitchens — reduces waste volume by up to 80%. Available as full-size F79/010 (700 kg/hr) and Compact F79/703 (400 kg/hr).",
        category: "Commercial Kitchen Waste Management",
        image: [`${COMPANY.url}${HERO_IMAGE_URL}`],
        url: pageUrl,
        brand: {
          "@type": "Brand",
          name: "IMC",
          url: "https://www.imcfoodwaste.com/",
          description:
            "Imperial Machine Company — UK manufacturer of food waste and kitchen equipment, founded 1906 in Lincoln. A Middleby brand.",
        },
        manufacturer: {
          "@type": "Organization",
          name: "Imperial Machine Company",
          url: "https://www.imcfoodwaste.com/",
          foundingDate: "1906",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Whisby Road",
            addressLocality: "Lincoln",
            postalCode: "LN6 3QZ",
            addressCountry: "GB",
          },
          parentOrganization: {
            "@type": "Corporation",
            name: "Middleby Corporation",
            url: "https://www.middleby.com",
          },
        },
        countryOfOrigin: { "@type": "Country", name: "United Kingdom" },
        hasMerchantReturnPolicy: undefined,
        additionalProperty: [
          {
            "@type": "PropertyValue",
            name: "Volume reduction (manufacturer)",
            value: "Up to 80%",
          },
          {
            "@type": "PropertyValue",
            name: "Mass reduction",
            value: "Up to 60%",
          },
          {
            "@type": "PropertyValue",
            name: "Operating noise",
            value: "83 dB",
          },
          {
            "@type": "PropertyValue",
            name: "Compliance",
            value: "UKCA · IP55 · Made in UK",
          },
        ],
        isVariantOf: {
          "@type": "ProductGroup",
          name: "IMC WasteStation Range",
          variesBy: ["throughput", "footprint", "powerSupply"],
          hasVariant: [
            {
              "@type": "Product",
              name: "IMC WasteStation F79/010",
              sku: "F79/010",
              additionalProperty: [
                {
                  "@type": "PropertyValue",
                  name: "Throughput",
                  value: "700 kg/hr",
                },
                {
                  "@type": "PropertyValue",
                  name: "Power",
                  value: "4.1 kW · 380–415 V three-phase",
                },
                {
                  "@type": "PropertyValue",
                  name: "Footprint",
                  value: "900 × 700 × 1000 mm",
                },
                { "@type": "PropertyValue", name: "Mass", value: "192 kg" },
              ],
            },
            {
              "@type": "Product",
              name: "IMC WasteStation Compact F79/703",
              sku: "F79/703",
              additionalProperty: [
                {
                  "@type": "PropertyValue",
                  name: "Throughput",
                  value: "400 kg/hr",
                },
                {
                  "@type": "PropertyValue",
                  name: "Power",
                  value: "2.95 kW · 400 V three-phase",
                },
                {
                  "@type": "PropertyValue",
                  name: "Footprint",
                  value: "600 × 700 × 1044 mm",
                },
                { "@type": "PropertyValue", name: "Mass", value: "165 kg" },
              ],
            },
          ],
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd)
            .replace(/</g, "\\u003c")
            .replace(/>/g, "\\u003e"),
        }}
      />

      {/* Chapter I — Hero */}
      <Hero locale={locale as Locale} dict={dict} />

      {/* Chapter II — Mechanism */}
      <div className="bg-offwhite">
        <ChapterMark
          numeral="II"
          label="The Mechanism"
          caption="Four motions — scrape, macerate, dewater, compact."
          variant="light"
        />
      </div>
      <Mechanism />

      {/* Chapter III — Model ledger */}
      <div className="bg-navy">
        <ChapterMark
          numeral="III"
          label="The Model Ledger"
          caption="Two sizes — sized to volume, supply, and floor."
          variant="dark"
        />
      </div>
      <ModelLedger />

      {/* Chapter IV — Numbers */}
      <div className="bg-offwhite">
        <ChapterMark
          numeral="IV"
          label="Numbers That Matter"
          caption="Four figures — manufacturer-stated and honestly framed."
          variant="light"
        />
      </div>
      <Numbers />

      {/* House quote */}
      <HouseQuote />

      {/* Chapter V — CTA */}
      <div className="bg-navy">
        <ChapterMark
          numeral="V"
          label="The Next Step"
          caption="Send volume, layout, and supply — we spec the model."
          variant="dark"
        />
      </div>
      <Cta locale={locale as Locale} dict={dict} />
    </>
  );
}
