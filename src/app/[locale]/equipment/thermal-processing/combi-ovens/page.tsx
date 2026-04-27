import type { Metadata } from "next";
import { COMPANY } from "@/lib/constants";
import { getDictionary } from "@/i18n/getDictionary";
import type { Locale } from "@/i18n/config";
import ChapterMark from "../_sections/ChapterMark";
import {
  CombiHero,
  TwoHouses,
  InvoqLedger,
  INVOQ_SERIES,
  SpecsThatMatter,
  CombiCta,
} from "./_sections";

export const dynamic = "force-static";

const PAGE_TITLE_EN = "Houno & Lincat Combi Ovens — Invoq Platform | MB";
const PAGE_TITLE_SR = "Houno i Lincat parno-konvekcijske peći | MB";
const PAGE_DESC_EN =
  "Houno & Lincat combi ovens on the Invoq platform — six families, 5–40 trays, 5 cooking modes, ENERGY STAR. Authorized Middleby partner, Belgrade.";
const PAGE_DESC_SR =
  "Houno i Lincat parno-konvekcijske peći na Invoq platformi — šest serija, 5–40 nivoa, ENERGY STAR. Ovlašćeni Middleby partner, Beograd.";

const HERO_OG_IMAGE = "/images/houno-lincat/lincat-combislim-110.jpg";

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
      "Houno combi oven",
      "Lincat combi oven",
      "Invoq combi oven",
      "Lincat CombiSlim",
      "Houno Invoq Combi",
      "Houno Invoq Hybrid",
      "Houno Invoq Bake",
      "Houno miniCombi",
      "Houno PassThrough",
      "commercial combi steam oven",
      "ENERGY STAR combi oven",
      "Middleby authorized partner",
      "professional combi oven Serbia",
      "parno-konvekcijska peć",
      "Houno peć",
      "Lincat peć",
      "Invoq platforma",
      "profesionalna paro-konvekcijska peć",
      "Middleby ovlašćeni distributer Srbija",
    ],
    alternates: {
      canonical: `/${locale}/equipment/thermal-processing/combi-ovens`,
      languages: {
        en: "/en/equipment/thermal-processing/combi-ovens",
        sr: "/sr/equipment/thermal-processing/combi-ovens",
        "x-default": "/en/equipment/thermal-processing/combi-ovens",
      },
    },
    openGraph: {
      title: PAGE_TITLE,
      description: PAGE_DESC,
      url: `${COMPANY.url}/${locale}/equipment/thermal-processing/combi-ovens`,
      siteName: COMPANY.name,
      locale: isSr ? "sr_RS" : "en_US",
      type: "website",
      images: [
        {
          url: `${COMPANY.url}${HERO_OG_IMAGE}`,
          width: 1200,
          height: 800,
          alt: "Lincat CombiSlim combi steam oven on the Invoq platform",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: PAGE_TITLE,
      description: PAGE_DESC,
      images: [`${COMPANY.url}${HERO_OG_IMAGE}`],
    },
  };
}

export default async function CombiOvensPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const isSr = locale === "sr";
  const PAGE_TITLE = isSr ? PAGE_TITLE_SR : PAGE_TITLE_EN;
  const PAGE_DESC = isSr ? PAGE_DESC_SR : PAGE_DESC_EN;
  const pageUrl = `${COMPANY.url}/${locale}/equipment/thermal-processing/combi-ovens`;

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
          { "@id": `${pageUrl}#houno` },
          { "@id": `${pageUrl}#lincat` },
        ],
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: `${COMPANY.url}${HERO_OG_IMAGE}`,
          width: 1200,
          height: 800,
        },
        breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
        mainEntity: { "@id": `${pageUrl}#invoq` },
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
            name: dict.nav.combiOvens,
          },
        ],
      },
      {
        "@type": "ItemList",
        "@id": `${pageUrl}#invoq`,
        name: "Invoq Combi Oven Platform — Houno & Lincat",
        numberOfItems: INVOQ_SERIES.length,
        itemListElement: INVOQ_SERIES.map((row, i) => ({
          "@type": "ListItem",
          position: i + 1,
          item: {
            "@type": "Product",
            name: row.series,
            brand: { "@type": "Brand", name: row.brand },
            category: "Commercial Combi Steam Oven",
            description: `${row.series} — ${row.steam}, sizes ${row.sizes}. ${row.positioning}`,
          },
        })),
      },
      {
        "@type": "Brand",
        "@id": `${pageUrl}#houno`,
        name: "Houno",
        url: "https://www.houno.com/",
        description:
          "Danish manufacturer of premium combi steam ovens, founded 1977 in Randers; Middleby Corporation brand since 31 August 2006.",
        manufacturer: {
          "@type": "Corporation",
          name: "Middleby Corporation",
          url: "https://www.middleby.com",
        },
      },
      {
        "@type": "Brand",
        "@id": `${pageUrl}#lincat`,
        name: "Lincat",
        url: "https://www.lincat.co.uk/",
        description:
          "British manufacturer of commercial cooking equipment, founded 1971 in Lincoln; Middleby Corporation brand since 31 May 2011.",
        manufacturer: {
          "@type": "Corporation",
          name: "Middleby Corporation",
          url: "https://www.middleby.com",
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
      <CombiHero locale={locale as Locale} dict={dict} />

      {/* Chapter II — The two houses */}
      <div className="bg-offwhite">
        <ChapterMark
          numeral="II"
          label="The Two Houses"
          caption="Houno of Denmark and Lincat of England — two Middleby brands sharing the Invoq platform."
          variant="light"
        />
      </div>
      <TwoHouses />

      {/* Chapter III — The Invoq family ledger */}
      <div className="bg-navy">
        <ChapterMark
          numeral="III"
          label="The Invoq Ledger"
          caption="Five Houno series and the Lincat CombiSlim — every combi family, one shared platform."
          variant="dark"
        />
      </div>
      <InvoqLedger />

      {/* Chapter IV — Specs that matter */}
      <div className="bg-offwhite">
        <ChapterMark
          numeral="IV"
          label="Specs That Matter"
          caption="Verified Invoq numerics — temperature range, food load, top-of-range power, modes and wash cycles."
          variant="light"
        />
      </div>
      <SpecsThatMatter />

      {/* Chapter V — CTA / colophon */}
      <div className="bg-navy">
        <ChapterMark
          numeral="V"
          label="The Next Step"
          caption="Send your menu volume, voltage and water hardness — we'll spec the Invoq or CombiSlim configuration."
          variant="dark"
        />
      </div>
      <CombiCta locale={locale as Locale} dict={dict} />
    </>
  );
}
