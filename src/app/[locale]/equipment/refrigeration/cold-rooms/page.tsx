import type { Metadata } from "next";
import { COMPANY } from "@/lib/constants";
import { getDictionary } from "@/i18n/getDictionary";
import type { Locale } from "@/i18n/config";
import ChapterMark from "../../thermal-processing/_sections/ChapterMark";
import { AwardStrip, FaqChapter, CtaTriad } from "@/components/equipment";
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

      {/* Chapter II — Heritage & Standards */}
      <div className="bg-offwhite">
        <ChapterMark
          numeral="II"
          label="Heritage & Standards"
          caption="Two manufacturers, F-Gas-ready refrigerants, fire-rated insulated panels."
          variant="light"
        />
        <AwardStrip
          variant="light"
          items={[
            {
              type: "heritage",
              label: "Tecnodom · Since 1996",
              detail: "Padova, Italy",
            },
            {
              type: "heritage",
              label: "JKS Refrigeration · Since 2006",
              detail: "Cadoneghe, Padova",
            },
            {
              type: "certification",
              label: "F-Gas 2024/573",
              detail: "EU compliant",
            },
            {
              type: "certification",
              label: "R290 / R744",
              detail: "Natural refrigerants",
            },
            {
              type: "certification",
              label: "PUR / PIR panels",
              detail: "B-s2,d0 fire-rated option",
            },
            {
              type: "award",
              label: "20 cm modular grid",
              detail: "JKS MAXI bespoke sizing",
            },
          ]}
        />
      </div>

      {/* Chapter III — Brand spotlight */}
      <div className="bg-offwhite">
        <ChapterMark
          numeral="III"
          label="Tecnodom — JKS Refrigeration"
          caption="Vigodarzere, Padova — five facilities, 200+ employees, exports to 40+ countries."
          variant="light"
        />
      </div>
      <BrandSpotlight />

      {/* Chapter IV — Panel ledger */}
      <div className="bg-navy">
        <ChapterMark
          numeral="IV"
          label="The Panel Ledger"
          caption="Six panel thicknesses — from 60 mm beverage chiller to 200 mm industrial blast freezer."
          variant="dark"
        />
      </div>
      <PanelLedger />

      {/* Chapter V — Compliance + pull quote */}
      <div className="bg-offwhite">
        <ChapterMark
          numeral="V"
          label="Compliance &amp; Sustainability"
          caption="CE-marked, F-Gas 2024/573 compliant, R290 future-proof."
          variant="light"
        />
      </div>
      <ComplianceQuote />

      {/* Chapter VI — FAQ */}
      <div className="bg-navy">
        <ChapterMark
          numeral="VI"
          label="Before You Install"
          caption="Six engineering questions, settled before the floor plan goes out."
          variant="dark"
        />
      </div>
      <FaqChapter
        variant="dark"
        heading={
          <>
            Before{" "}
            <span
              className="italic font-normal"
              style={{ color: "var(--color-gold)" }}
            >
              install.
            </span>
          </>
        }
        items={[
          {
            q: "What panel thickness for my room?",
            a: "+0/+8°C cooler: 60–80 mm. -18/-22°C freezer: 100 mm. -22/-25°C freezer in warm climate: 120–130 mm. Blast freezer at -30°C+: 150–200 mm. Always factor ambient + duty cycle.",
          },
          {
            q: "Do I need a floor panel?",
            a: "Yes for freezers (prevents ground frost). Optional for chillers if existing slab is insulated. Floorless chillers + ramp work for pallet-jack access; insulated floor with stainless or anti-slip checker for hygiene-critical.",
          },
          {
            q: "Mono-block or split refrigeration?",
            a: "Mono-block (wall-saddle or ceiling) for rooms up to ~25 m³ — plug-and-play. Split (separate evaporator inside, condensing unit outside) for 25–100 m³ — quieter inside, better for medium rooms. Central rack for supermarkets / multi-room sites.",
          },
          {
            q: "What's the install timeline?",
            a: "Small-medium rooms (≤200 m³) — panel assembly 2–5 days plus 1–2 days commissioning. Add a few days for floor prep and electrical/plumbing. Modular = dramatically faster than fixed/built-in cold rooms.",
          },
          {
            q: "Refrigerant choice now that F-Gas hit?",
            a: "R290 (propane, GWP 3) is dominant for new self-contained equipment in EU — fully F-Gas 2024/573 compliant. R744 (CO₂) for supermarket transcritical racks. R448A still permitted for some retrofits but not future-proof under the new regulation.",
          },
          {
            q: "Can I disassemble and relocate?",
            a: "Yes. Cam-lock panels are designed for disassembly and reuse — invaluable for tenants, food trucks expanding to commissaries, or pop-up kitchens migrating venues.",
          },
        ]}
        pageUrl={pageUrl}
      />

      {/* Chapter VII — Conversion triad */}
      <div className="bg-navy">
        <ChapterMark
          numeral="VII"
          label="Three Routes In"
          caption="Quote, showroom, or spec sheet — pick your path."
          variant="dark"
        />
      </div>
      <CtaTriad
        locale={locale as Locale}
        productSlug="cold-rooms"
        variant="dark"
      />

      {/* Chapter VIII — CTA + colophon */}
      <div className="bg-navy">
        <ChapterMark
          numeral="VIII"
          label="Send the Floor Plan"
          caption="2–5 day install for ≤ 200 m³ — single-source from Belgrade for Southeast Europe."
          variant="dark"
        />
      </div>
      <SpecCta locale={locale as Locale} dict={dict} />
    </>
  );
}
