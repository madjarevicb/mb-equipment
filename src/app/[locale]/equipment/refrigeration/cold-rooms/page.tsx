import type { Metadata } from "next";
import { COMPANY } from "@/lib/constants";
import { getDictionary } from "@/i18n/getDictionary";
import type { Locale } from "@/i18n/config";
import ChapterMark from "../../thermal-processing/_sections/ChapterMark";
import {
  ColdRoomsHero,
  BrandSpotlight,
  PanelLedger,
  PANEL_ROWS,
  ComplianceQuote,
  SpecCta,
} from "./_sections";

export const dynamic = "force-static";

const PAGE_TITLE_EN = "Modular Cold Rooms — Walk-in Cooler & Freezer | MB";
const PAGE_TITLE_SR = "Montažne rashladne komore — walk-in komora | MB";
const PAGE_DESC_EN =
  "Modular cold rooms in Serbia — walk-in coolers, walk-in freezers, blast freezers. Tecnodom / JKS Refrigeration, R290 future-proof. 2–5 day install.";
const PAGE_DESC_SR =
  "Montažne rashladne komore — walk-in plusne, minusne i šok komore. Tecnodom / JKS Refrigeration, R290 hladan agens. Montaža za 2–5 dana.";

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
      "modular cold room",
      "walk-in cooler",
      "walk-in freezer",
      "blast freezer",
      "Tecnodom cold room",
      "JKS Refrigeration",
      "PUR insulated panel cold room",
      "R290 cold room",
      "F-Gas compliant cold room",
      "cold room Belgrade",
      "cold room Serbia",
      "modular cold storage Southeast Europe",
      "montažne rashladne komore",
      "walk-in komora",
      "šok komora",
      "rashladna komora Beograd",
    ],
    alternates: {
      canonical: `/${locale}/equipment/refrigeration/cold-rooms`,
      languages: {
        en: "/en/equipment/refrigeration/cold-rooms",
        sr: "/sr/equipment/refrigeration/cold-rooms",
        "x-default": "/en/equipment/refrigeration/cold-rooms",
      },
    },
    openGraph: {
      title: PAGE_TITLE,
      description: PAGE_DESC,
      url: `${COMPANY.url}/${locale}/equipment/refrigeration/cold-rooms`,
      siteName: COMPANY.name,
      locale: isSr ? "sr_RS" : "en_US",
      type: "website",
      images: [
        {
          url: `${COMPANY.url}/images/whatwedo/beverage.jpg`,
          width: 1200,
          height: 630,
          alt: "Modular walk-in cold room interior",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: PAGE_TITLE,
      description: PAGE_DESC,
      images: [`${COMPANY.url}/images/whatwedo/beverage.jpg`],
    },
  };
}

export default async function ColdRoomsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const isSr = locale === "sr";
  const PAGE_TITLE = isSr ? PAGE_TITLE_SR : PAGE_TITLE_EN;
  const PAGE_DESC = isSr ? PAGE_DESC_SR : PAGE_DESC_EN;
  const pageUrl = `${COMPANY.url}/${locale}/equipment/refrigeration/cold-rooms`;

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
            name: "Tecnodom",
            url: "https://www.tecnodom.it/",
          },
          {
            "@type": "Brand",
            name: "JKS Refrigeration",
            parentOrganization: {
              "@type": "Corporation",
              name: "Tecnodom S.p.A.",
              url: "https://www.tecnodom.it/",
            },
          },
        ],
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: `${COMPANY.url}/images/whatwedo/beverage.jpg`,
          width: 1200,
          height: 630,
        },
        breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
        mainEntity: { "@id": `${pageUrl}#panels` },
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
            name: dict.nav.refrigeration,
            item: `${COMPANY.url}/${locale}/equipment/refrigeration`,
          },
          {
            "@type": "ListItem",
            position: 4,
            name: dict.nav.coldRooms,
          },
        ],
      },
      {
        "@type": "ItemList",
        "@id": `${pageUrl}#panels`,
        name: "Modular Cold Room Panel Specifications",
        numberOfItems: PANEL_ROWS.length,
        itemListElement: PANEL_ROWS.map((row, i) => ({
          "@type": "ListItem",
          position: i + 1,
          item: {
            "@type": "Product",
            name: `Modular cold room — ${row.thickness} panel`,
            category: "Modular Cold Room Panel",
            description: `Insulated panel ${row.thickness}, operating range ${row.temp}, application: ${row.application}.`,
            brand: { "@type": "Brand", name: "Tecnodom / JKS Refrigeration" },
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
      <ColdRoomsHero locale={locale as Locale} dict={dict} />

      {/* Chapter II — Brand spotlight */}
      <div className="bg-offwhite">
        <ChapterMark
          numeral="II"
          label="Tecnodom — JKS Refrigeration"
          caption="Vigodarzere, Padova — five facilities, 200+ employees, exports to 40+ countries."
          variant="light"
        />
      </div>
      <BrandSpotlight />

      {/* Chapter III — Panel ledger */}
      <div className="bg-navy">
        <ChapterMark
          numeral="III"
          label="The Panel Ledger"
          caption="Six panel thicknesses — from 60 mm beverage chiller to 200 mm industrial blast freezer."
          variant="dark"
        />
      </div>
      <PanelLedger />

      {/* Chapter IV — Compliance + pull quote */}
      <div className="bg-offwhite">
        <ChapterMark
          numeral="IV"
          label="Compliance &amp; Sustainability"
          caption="CE-marked, F-Gas 2024/573 compliant, R290 future-proof."
          variant="light"
        />
      </div>
      <ComplianceQuote />

      {/* Chapter V — CTA + colophon */}
      <div className="bg-navy">
        <ChapterMark
          numeral="V"
          label="Send the Floor Plan"
          caption="2–5 day install for ≤ 200 m³ — single-source from Belgrade for Southeast Europe."
          variant="dark"
        />
      </div>
      <SpecCta locale={locale as Locale} dict={dict} />
    </>
  );
}
