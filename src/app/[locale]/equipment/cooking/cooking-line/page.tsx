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
        "x-default": "/sr/equipment/cooking/cooking-line",
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
              label: isSr ? "Silko · Od 1980." : "Silko · Since 1980",
              detail: isSr ? "Vittorio Veneto, Italija" : "Vittorio Veneto, Italy",
            },
            {
              type: "heritage",
              label: isSr ? "Lincat · Od 1971." : "Lincat · Since 1971",
              detail: isSr ? "Linkoln, V. Britanija" : "Lincoln, UK",
            },
            {
              type: "award",
              label: "Ali Group",
              detail: isSr ? "Silko matica" : "Silko parent",
            },
            {
              type: "award",
              label: isSr ? "Middleby grupa" : "Middleby Group",
              detail: isSr ? "Lincat matica (od 2011.)" : "Lincat parent (since 2011)",
            },
            {
              type: "certification",
              label: "ISO 9001 + ISO 14001",
              detail: "Lincat",
            },
            {
              type: "certification",
              label: "AISI 304",
              detail: isSr ? "Inox kroz oba brenda" : "Stainless across both",
            },
          ]}
        />
      </div>

      {/* Chapter II — The two houses */}
      <div className="bg-offwhite">
        <ChapterMark
          numeral="II"
          label={isSr ? "Dve kuće" : "The Two Houses"}
          caption={isSr ? "Silko iz Italije i Lincat iz Engleske — izabrani po onome u čemu su najbolji." : "Silko of Italy and Lincat of England — chosen for what each does best."}
          variant="light"
        />
      </div>
      <TwoHouses locale={locale as Locale} />

      {/* Chapter III — Seven instruments */}
      <div className="bg-navy">
        <ChapterMark
          numeral="III"
          label={isSr ? "Pregled opreme" : "The Equipment Ledger"}
          caption={isSr ? "Sedam disciplina kuvanja — svaka otvara stranicu sa konkretnom opremom." : "Seven cooking disciplines — each opens to a per-equipment page."}
          variant="dark"
        />
      </div>
      <InstrumentLedger locale={locale as Locale} />

      {/* Chapter IV — Capacity matrix */}
      <div className="bg-navy">
        <ChapterMark
          numeral="IV"
          label={isSr ? "Matrica kapaciteta" : "Capacity Matrix"}
          caption={isSr ? "Birajte prema dubini linije i snazi gorionika." : "Choose by line depth and burner power."}
          variant="dark"
        />
      </div>
      <ModelsMatrix
        variant="dark"
        heading={
          <>
            {isSr ? "Matrica " : "Capacity "}
            <span
              className="italic font-normal"
              style={{ color: "var(--color-gold)" }}
            >
              {isSr ? "kapaciteta." : "matrix."}
            </span>
          </>
        }
        models={[
          { serial: "No. 01", name: "Silko Essence 700", brand: "Silko", specSheetHref: "https://silko.it/en/products/essence/essence-700/" },
          { serial: "No. 02", name: "Silko Essence 900", brand: "Silko", specSheetHref: "https://silko.it/en/prodotto/900/" },
          { serial: "No. 03", name: "Lincat Opus 800", brand: "Lincat", specSheetHref: "https://www.lincat.co.uk/brand/opus-800" },
          { serial: "No. 04", name: "Lincat Silverlink 600", brand: "Lincat", specSheetHref: "https://www.lincat.co.uk/brand/silverlink-600" },
        ]}
        specs={[
          {
            label: isSr ? "Dubina" : "Depth",
            values: ["700 mm", "900 mm", "800 mm", "600 mm"],
          },
          {
            label: isSr ? "Snaga gorionika" : "Burner power",
            values: isSr ? [
              "Do 6 kW (zatvoreni)",
              "Do 10 kW (otvoreni)",
              "Do 7,5 kW (koncentrični)",
              "Srednja klasa",
            ] : [
              "Up to 6 kW (sealed)",
              "Up to 10 kW (open)",
              "Up to 7.5 kW (concentric)",
              "Mid-duty",
            ],
          },
          {
            label: isSr ? "Radna ploča" : "Worktop",
            values: isSr ? [
              "AISI 304 / 15-10",
              "AISI 304 / 20-10",
              "Postolja od livenog gvožđa",
              "Inox / liveno",
            ] : [
              "AISI 304 / 15-10",
              "AISI 304 / 20-10",
              "Cast-iron supports",
              "Stainless / cast",
            ],
          },
          {
            label: isSr ? "Moduli" : "Modules",
            values: isSr ? [
              "Otvoreni gorionici, friteze, kuvalo za pastu, ben mari",
              "Otvoreni gorionici, indukcija, solid-top, kiper",
              "Šporet, friteza, kiper, indukcija",
              "Stoni + samostojeći",
            ] : [
              "Open burners, fryers, pasta, bain marie",
              "Open burners, induction, solid-top, brattpan",
              "Range, fryer, brattpan, induction",
              "Countertop + freestanding",
            ],
          },
          {
            label: isSr ? "Najbolje za" : "Best fit",
            values: isSr ? [
              "HoReCa srednjeg obima",
              "Restoran / hotel velikog obima",
              "Heavy-duty restorani",
              "Pubovi, kafići, obrazovanje",
            ] : [
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
          label={isSr ? "Reč kuće" : "House Note"}
          caption={isSr ? "O odnosu između linije, menija i inženjeringa." : "On the relationship between line, menu, and engineering."}
          variant="light"
        />
      </div>
      <EngineeringQuote locale={locale as Locale} />

      {/* Chapter VI — Questions */}
      <div className="bg-offwhite">
        <ChapterMark
          numeral="VI"
          label={isSr ? "Pitanja" : "Questions"}
          caption={isSr ? "Pet stvari koje kupci pitaju pre specifikacije linije." : "Five things buyers ask before specifying a line."}
          variant="light"
        />
      </div>
      <FaqChapter
        variant="light"
        pageUrl={pageUrl}
        heading={
          <>
            {isSr ? "Pre " : "Before "}
            <span
              className="italic font-normal"
              style={{ color: "var(--color-gold-text)" }}
            >
              {isSr ? "specifikacije." : "you specify."}
            </span>
          </>
        }
        items={isSr ? [
          {
            q: "Da li da izaberem Silko Essence 700 ili 900?",
            a: "Essence 700 je dubok 700 mm sa zatvorenim visoko-efikasnim gorionicima od 6 kW — najbolji za HoReCa srednjeg obima gde je prostor ograničen. Essence 900 ide 900 mm u dubinu sa otvorenim gorionicima do 10 kW — napravljen za restorane i hotele velikog obima sa heavy-duty linijama.",
          },
          {
            q: "Gde Lincat staje pored Silka?",
            a: "Lincat Opus 800 (dubina 800 mm) je heavy-duty britanski parnjak Essence-u 900. Silverlink 600 pokriva srednju klasu i stonu upotrebu. Lincat se obično specifikuje tamo gde je važan Middleby ekosistem servisa i kontinuitet delova.",
          },
          {
            q: "Mogu li da kombinujem gas i indukciju u jednoj liniji?",
            a: "Da. I Silko Essence i Lincat Opus 800 podržavaju modularnu konfiguraciju — otvoreni gasni gorionici, indukcione zone, solid-top, friteza, kiper, kuvalo za pastu, ben mari, sve dele istu dubinu šasije.",
          },
          {
            q: "Šta je sa ventilacijom?",
            a: "Napa i dovod vazduha dimenzionišu se prema kumulativnom kW opterećenju linije. Koordiniramo sa Britannia-om (Middleby UK ventilacija) kada specifikujemo Lincat-heavy projekte.",
          },
          {
            q: "Rok isporuke i instalacija?",
            a: "Stock artikli 3–6 nedelja; konfiguracije po meri 8–12 nedelja. Instalacija je 2–4 dana za kompletnu liniju, plus puštanje u rad i obuka šefa.",
          },
          {
            q: "Koja je garancija?",
            a: "Lincat Opus 800: 2 godine na delove i rad. Silko: po projektu, tipično 24 meseca. MB Equipment ostvaruje oba lokalno sa obučenim servisnim inženjerima u Beogradu.",
          },
        ] : [
          {
            q: "Should I pick Silko Essence 700 or 900?",
            a: "Essence 700 is 700 mm deep with sealed high-efficiency 6 kW burners — best for mid-volume HoReCa where space is constrained. Essence 900 goes 900 mm deep with open burners up to 10 kW — built for high-volume restaurants and hotels with heavy-duty cooking lines.",
          },
          {
            q: "Where does Lincat fit alongside Silko?",
            a: "Lincat Opus 800 (800 mm depth) is the heavy-duty British counterpart to Essence 900. Silverlink 600 covers mid-duty and countertop use. Lincat is generally specified where Middleby ecosystem service and parts continuity matter most.",
          },
          {
            q: "Can I mix gas and induction in one line?",
            a: "Yes. Both Silko Essence and Lincat Opus 800 support modular configuration — open gas burners, induction zones, solid-top, fryer, brattpan, pasta cooker, and bain marie all share the same chassis depth.",
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
            a: "Lincat Opus 800: 2 years parts and labor. Silko: per project, typically 24 months. MB Equipment honors both locally with trained service engineers in Belgrade.",
          },
        ]}
      />

      {/* Chapter VII — CTA / authorized partner */}
      <div className="bg-navy">
        <ChapterMark
          numeral="VII"
          label={isSr ? "Sledeći korak" : "The Next Step"}
          caption={isSr ? "Pošaljite plan ili koncept menija — vraćamo CAD raspored i okvirni budžet." : "Floor plan or menu concept in — CAD layout and budget ranges out."}
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
