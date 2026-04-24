import type { Metadata } from "next";
import { COMPANY } from "@/lib/constants";
import { getDictionary } from "@/i18n/getDictionary";
import type { Locale } from "@/i18n/config";
import ChapterMark from "../_sections/ChapterMark";
import {
  JosperHero,
  OriginTech,
  Lineup,
  HJX_MODELS,
  CulinaryQuote,
  PartnerCta,
} from "./_sections";

export const dynamic = "force-static";

const PAGE_TITLE_EN = "Josper Charcoal Oven — Authorized Dealer | MB Equipment";
const PAGE_TITLE_SR = "Josper roštilj na ugalj — ovlašćeni distributer | MB";
const PAGE_DESC_EN =
  "Josper charcoal ovens for professional kitchens — HJX range, 4-year warranty, Middleby-trained service in Belgrade. Authorized partner, Southeast Europe.";
const PAGE_DESC_SR =
  "Josper peći na drveni ugalj za profesionalne kuhinje — HJX serija, 4-godišnja garancija, Middleby servis u Beogradu. Ovlašćeni distributer, Jugoistočna Evropa.";

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
      "Josper charcoal oven",
      "commercial charcoal grill",
      "Josper grill",
      "charcoal broiler oven",
      "restaurant charcoal oven",
      "Josper charcoal oven for steakhouse",
      "Josper HJX-50 specifications",
      "Josper authorized dealer",
      "Middleby authorized partner",
      "solid fuel cooking equipment",
      "Josper roštilj",
      "Josper peć na ugalj",
      "profesionalni roštilj na drveni ugalj",
      "Josper roštilj cena Srbija",
      "Josper ovlašćeni distributer Srbija",
    ],
    alternates: {
      canonical: `/${locale}/equipment/thermal-processing/charcoal-grills`,
      languages: {
        en: "/en/equipment/thermal-processing/charcoal-grills",
        sr: "/sr/equipment/thermal-processing/charcoal-grills",
        "x-default": "/en/equipment/thermal-processing/charcoal-grills",
      },
    },
    openGraph: {
      title: PAGE_TITLE,
      description: PAGE_DESC,
      url: `${COMPANY.url}/${locale}/equipment/thermal-processing/charcoal-grills`,
      siteName: COMPANY.name,
      locale: isSr ? "sr_RS" : "en_US",
      type: "website",
      images: [
        {
          url: `${COMPANY.url}/images/whatwedo/char-grilling.jpg`,
          width: 1200,
          height: 630,
          alt: "Josper charcoal oven in a professional kitchen",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: PAGE_TITLE,
      description: PAGE_DESC,
      images: [`${COMPANY.url}/images/whatwedo/char-grilling.jpg`],
    },
  };
}

export default async function JosperCharcoalGrillsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const isSr = locale === "sr";
  const PAGE_TITLE = isSr ? PAGE_TITLE_SR : PAGE_TITLE_EN;
  const PAGE_DESC = isSr ? PAGE_DESC_SR : PAGE_DESC_EN;
  const pageUrl = `${COMPANY.url}/${locale}/equipment/thermal-processing/charcoal-grills`;

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
          {
            "@type": "Brand",
            name: "Josper",
            url: "https://jospergrill.com/",
            parentOrganization: {
              "@type": "Corporation",
              name: "Middleby Corporation",
              url: "https://www.middleby.com",
            },
          },
        ],
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: `${COMPANY.url}/images/whatwedo/char-grilling.jpg`,
          width: 1200,
          height: 630,
        },
        breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
        mainEntity: { "@id": `${pageUrl}#hjx` },
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
            name: dict.nav.cooking,
            item: `${COMPANY.url}/${locale}/equipment/thermal-processing`,
          },
          {
            "@type": "ListItem",
            position: 4,
            name: dict.nav.josper,
          },
        ],
      },
      {
        "@type": "ItemList",
        "@id": `${pageUrl}#hjx`,
        name: "Josper HJX Charcoal Oven Range",
        numberOfItems: HJX_MODELS.length,
        itemListElement: HJX_MODELS.map((row, i) => ({
          "@type": "ListItem",
          position: i + 1,
          item: {
            "@type": "Product",
            name: `Josper ${row.model}`,
            brand: { "@type": "Brand", name: "Josper" },
            category: "Commercial Charcoal Oven",
            description: `Josper ${row.model} — capacity ${row.diners} diners, fire-up ${row.fireUp}, daily charcoal ${row.fuel}, autonomy ${row.autonomy}.`,
          },
        })),
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
      <JosperHero locale={locale as Locale} dict={dict} />

      {/* Chapter II — Origin + Technology */}
      <div className="bg-offwhite">
        <ChapterMark
          numeral="II"
          label="Origin & Mechanism"
          caption="Pineda de Mar, 1969 — the first patented charcoal oven. A Middleby company since 2018."
          variant="light"
        />
      </div>
      <OriginTech />

      {/* Chapter III — HJX Lineup */}
      <div className="bg-navy">
        <ChapterMark
          numeral="III"
          label="HJX Ledger"
          caption="Five sizes of the flagship HJX charcoal oven — specified by cover count and autonomy."
          variant="dark"
        />
      </div>
      <Lineup />

      {/* Chapter IV — Culinary positioning + pull quote */}
      <div className="bg-offwhite">
        <ChapterMark
          numeral="IV"
          label="The Plate"
          caption="What the sealed chamber does best — and what Michelin kitchens say about it."
          variant="light"
        />
      </div>
      <CulinaryQuote />

      {/* Chapter V — Authorized partner + CTA */}
      <div className="bg-navy">
        <ChapterMark
          numeral="V"
          label="The Authorized Route"
          caption="Genuine Josper / Middleby parts, 4-year warranty, Belgrade service engineers."
          variant="dark"
        />
      </div>
      <PartnerCta locale={locale as Locale} dict={dict} />
    </>
  );
}
