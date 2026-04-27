import type { Metadata } from "next";
import { COMPANY } from "@/lib/constants";
import { getDictionary } from "@/i18n/getDictionary";
import type { Locale } from "@/i18n/config";
import ChapterMark from "../../thermal-processing/_sections/ChapterMark";
import {
  FaqChapter,
  CtaTriad,
  ModelsMatrix,
  AwardStrip,
} from "@/components/equipment";
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

      {/* Heritage and certifications strip */}
      <div className="bg-offwhite">
        <AwardStrip
          variant="light"
          items={[
            {
              type: "heritage",
              label: "Silko · Since 1980",
              detail: "Vittorio Veneto, Italy",
            },
            {
              type: "heritage",
              label: "Lincat · Since 1971",
              detail: "Lincoln, UK",
            },
            {
              type: "award",
              label: "Ali Group",
              detail: "Silko parent",
            },
            {
              type: "award",
              label: "Middleby Group",
              detail: "Lincat parent (since 2011)",
            },
            {
              type: "certification",
              label: "ISO 9001 + ISO 14001",
              detail: "Lincat",
            },
            {
              type: "certification",
              label: "AISI 304",
              detail: "Stainless across both",
            },
          ]}
        />
      </div>

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

      {/* Chapter IV — Capacity matrix */}
      <div className="bg-navy">
        <ChapterMark
          numeral="IV"
          label="Capacity Matrix"
          caption="Choose by line depth and burner power."
          variant="dark"
        />
      </div>
      <ModelsMatrix
        variant="dark"
        heading={
          <>
            Capacity{" "}
            <span
              className="italic font-normal"
              style={{ color: "var(--color-gold)" }}
            >
              matrix.
            </span>
          </>
        }
        models={[
          { serial: "No. 01", name: "Silko Essence 700", brand: "Silko" },
          { serial: "No. 02", name: "Silko Essence 900", brand: "Silko" },
          { serial: "No. 03", name: "Lincat Opus 800", brand: "Lincat" },
          {
            serial: "No. 04",
            name: "Lincat Silverlink 600",
            brand: "Lincat",
          },
        ]}
        specs={[
          {
            label: "Depth",
            values: ["700 mm", "900 mm", "800 mm", "600 mm"],
          },
          {
            label: "Burner power",
            values: [
              "Up to 6 kW (sealed)",
              "Up to 10 kW (open)",
              "Up to 7.5 kW (concentric)",
              "Mid-duty",
            ],
          },
          {
            label: "Worktop",
            values: [
              "AISI 304 / 15-10",
              "AISI 304 / 20-10",
              "Cast-iron supports",
              "Stainless / cast",
            ],
          },
          {
            label: "Modules",
            values: [
              "Open burners, fryers, pasta, bain-marie",
              "Open burners, induction, solid-top, brattpan",
              "Range, fryer, brattpan, induction",
              "Counter-top + free-standing",
            ],
          },
          {
            label: "Best fit",
            values: [
              "Mid-volume HoReCa",
              "High-volume restaurant / hotel",
              "Heavy-duty restaurants",
              "Pubs, cafés, education",
            ],
          },
        ]}
      />

      {/* Chapter V — Engineering pull-quote */}
      <div className="bg-offwhite">
        <ChapterMark
          numeral="V"
          label="House Note"
          caption="On the relationship between line, menu, and engineering."
          variant="light"
        />
      </div>
      <EngineeringQuote />

      {/* Chapter VI — Questions */}
      <div className="bg-offwhite">
        <ChapterMark
          numeral="VI"
          label="Questions"
          caption="Five things buyers ask before specifying a line."
          variant="light"
        />
      </div>
      <FaqChapter
        variant="light"
        pageUrl={pageUrl}
        heading={
          <>
            Before{" "}
            <span
              className="italic font-normal"
              style={{ color: "var(--color-gold-text)" }}
            >
              you specify.
            </span>
          </>
        }
        items={[
          {
            q: "Should I pick Silko Essence 700 or 900?",
            a: "Essence 700 is 700 mm deep with sealed high-efficiency 6 kW burners — best for mid-volume HoReCa where space is constrained. Essence 900 goes 900 mm deep with open burners up to 10 kW — built for high-volume restaurants and hotels with heavy-duty cooking lines.",
          },
          {
            q: "Where does Lincat fit alongside Silko?",
            a: "Lincat Opus 800 (800 mm depth) is the heavy-duty British counterpart to Essence 900. Silverlink 600 covers mid-duty and counter-top use. Lincat is generally specified where Middleby ecosystem service and parts continuity matter most.",
          },
          {
            q: "Can I mix gas and induction in one line?",
            a: "Yes. Both Silko Essence and Lincat Opus 800 support modular config — open gas burners, induction zones, solid-top, fryer, brattpan, pasta cooker, bain-marie all share the same chassis depth.",
          },
          {
            q: "What about ventilation?",
            a: "Hood and make-up air are sized to the cumulative kW load of the line. We coordinate with Britannia (Middleby UK ventilation) when specifying Lincat-heavy projects.",
          },
          {
            q: "Lead time and install?",
            a: "Stock items 3–6 weeks; bespoke configurations 8–12 weeks. Install is 2–4 days for a complete line, plus commissioning and chef walkthrough.",
          },
          {
            q: "What's the warranty?",
            a: "Lincat Opus 800: 2 years parts and labour. Silko: per project, typically 24 months. MB Equipment honours both locally with trained service engineers in Belgrade.",
          },
        ]}
      />

      {/* Chapter VII — CTA / authorized partner */}
      <div className="bg-navy">
        <ChapterMark
          numeral="VII"
          label="The Next Step"
          caption="Floor plan or menu concept in — CAD layout and budget ranges out."
          variant="dark"
        />
      </div>
      <CtaTriad
        locale={locale as Locale}
        productSlug="cooking-line"
        catalogHref="#"
        variant="dark"
      />
      <CookingLineCta locale={locale as Locale} dict={dict} />
    </>
  );
}
