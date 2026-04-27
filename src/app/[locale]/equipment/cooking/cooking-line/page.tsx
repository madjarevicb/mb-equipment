import type { Metadata } from "next";
import { COMPANY } from "@/lib/constants";
import { getDictionary } from "@/i18n/getDictionary";
import type { Locale } from "@/i18n/config";
import ChapterMark from "../../thermal-processing/_sections/ChapterMark";
import {
  CookingLineHero,
  TwoHouses,
  InstrumentLedger,
  INSTRUMENTS,
  EngineeringQuote,
  CookingLineCta,
} from "./_sections";

export const dynamic = "force-static";

const PAGE_TITLE_EN = "Modular Cooking Line — Silko & Lincat | MB Equipment";
const PAGE_TITLE_SR = "Modularna linija za kuvanje — Silko, Lincat | MB";
const PAGE_DESC_EN =
  "Modular cooking line — Silko (Italy) and Lincat (UK, Middleby) ranges, fryers, pasta cookers, boiling and tilting pans, bain marie. Authorized supply.";
const PAGE_DESC_SR =
  "Modularna linija za kuvanje — Silko (Italija) i Lincat (UK, Middleby): šporeti, friteze, kuvala, kazani, kiperi, ben mari. Ovlašćeni partner.";

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
      "modular cooking line",
      "commercial cooking line",
      "Silko cooking equipment",
      "Silko Essence 900",
      "Silko Ikonico",
      "Lincat Opus 800",
      "Lincat Silverlink 600",
      "commercial ranges Serbia",
      "commercial fryers Serbia",
      "pasta cooker commercial",
      "tilting pan bratt pan",
      "bain marie holding",
      "Middleby authorized partner",
      "modularna linija za kuvanje",
      "profesionalni šporeti",
      "industrijske friteze",
      "kuvalo za testeninu",
      "kiper bratt pan",
      "ben mari",
    ],
    alternates: {
      canonical: `/${locale}/equipment/cooking/cooking-line`,
      languages: {
        en: "/en/equipment/cooking/cooking-line",
        sr: "/sr/equipment/cooking/cooking-line",
        "x-default": "/en/equipment/cooking/cooking-line",
      },
    },
    openGraph: {
      title: PAGE_TITLE,
      description: PAGE_DESC,
      url: `${COMPANY.url}/${locale}/equipment/cooking/cooking-line`,
      siteName: COMPANY.name,
      locale: isSr ? "sr_RS" : "en_US",
      type: "website",
      images: [
        {
          url: `${COMPANY.url}/images/whatwedo/chef-cooking.jpg`,
          width: 1200,
          height: 630,
          alt: "Professional chef working a modular commercial cooking line",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: PAGE_TITLE,
      description: PAGE_DESC,
      images: [`${COMPANY.url}/images/whatwedo/chef-cooking.jpg`],
    },
  };
}

export default async function CookingLinePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const isSr = locale === "sr";
  const PAGE_TITLE = isSr ? PAGE_TITLE_SR : PAGE_TITLE_EN;
  const PAGE_DESC = isSr ? PAGE_DESC_SR : PAGE_DESC_EN;
  const pageUrl = `${COMPANY.url}/${locale}/equipment/cooking/cooking-line`;

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
            "@type": "Corporation",
            name: "Middleby Corporation",
            url: "https://www.middleby.com",
          },
          {
            "@type": "Corporation",
            name: "Ali Group",
            url: "https://www.aligroup.com/",
          },
        ],
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: `${COMPANY.url}/images/whatwedo/chef-cooking.jpg`,
          width: 1200,
          height: 630,
        },
        breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
        mainEntity: { "@id": `${pageUrl}#instruments` },
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
            name: dict.nav.cookingLine,
          },
        ],
      },
      {
        "@type": "ItemList",
        "@id": `${pageUrl}#instruments`,
        name: isSr
          ? "Sedam disciplina linije za kuvanje"
          : "Seven Cooking-Line Disciplines",
        numberOfItems: INSTRUMENTS.length,
        itemListElement: INSTRUMENTS.map((row, i) => ({
          "@type": "ListItem",
          position: i + 1,
          item: {
            "@type": "CollectionPage",
            url: `${COMPANY.url}${row.href(locale)}`,
            name: row.name,
            description: row.descriptor,
          },
        })),
      },
      {
        "@type": "Brand",
        "@id": `${pageUrl}#silko`,
        name: "Silko",
        url: "https://www.silko.it/",
        description:
          "Italian manufacturer of modular professional cooking equipment, founded 1980 in Vittorio Veneto.",
        manufacturer: {
          "@type": "Corporation",
          name: "Ali Group",
          url: "https://www.aligroup.com/",
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
      <CookingLineHero locale={locale as Locale} dict={dict} />

      {/* Chapter II — The two houses */}
      <div className="bg-offwhite">
        <ChapterMark
          numeral="II"
          label="The Two Houses"
          caption="Silko of Italy and Lincat of England — chosen for what each does best."
          variant="light"
        />
      </div>
      <TwoHouses />

      {/* Chapter III — Seven instruments */}
      <div className="bg-navy">
        <ChapterMark
          numeral="III"
          label="The Equipment Ledger"
          caption="Seven cooking disciplines — each opens to a per-equipment page."
          variant="dark"
        />
      </div>
      <InstrumentLedger locale={locale as Locale} />

      {/* Chapter IV — Engineering pull-quote */}
      <div className="bg-offwhite">
        <ChapterMark
          numeral="IV"
          label="House Note"
          caption="On the relationship between line, menu, and engineering."
          variant="light"
        />
      </div>
      <EngineeringQuote />

      {/* Chapter V — CTA / authorized partner */}
      <div className="bg-navy">
        <ChapterMark
          numeral="V"
          label="The Next Step"
          caption="Floor plan or menu concept in — CAD layout and budget ranges out."
          variant="dark"
        />
      </div>
      <CookingLineCta locale={locale as Locale} dict={dict} />
    </>
  );
}
