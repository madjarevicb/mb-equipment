import type { Metadata } from "next";
import Image from "next/image";
import Breadcrumb from "@/components/ui/Breadcrumb";
import Button from "@/components/ui/Button";
import { COMPANY } from "@/lib/constants";
import { getDictionary } from "@/i18n/getDictionary";
import type { Locale } from "@/i18n/config";
import ChapterMark from "../../thermal-processing/_sections/ChapterMark";
import RunningMeta from "../../thermal-processing/_sections/RunningMeta";
import ScrollReveal from "../../thermal-processing/_sections/ScrollReveal";
import { AwardStrip, FaqChapter, CtaTriad } from "@/components/equipment";

export const dynamic = "force-static";

const PAGE_TITLE_EN = "Refrigerated Display Cases & Vitrines | MB Equipment";
const PAGE_TITLE_SR = "Rashladne vitrine za poslastice i delikatese | MB";
const PAGE_DESC_EN =
  "Refrigerated display cases & vitrines — JBG-2, Infrico, Tefcold, Bartscher. Patisserie, deli, beverage, ice cream. Authorized supply, Belgrade.";
const PAGE_DESC_SR =
  "Rashladne vitrine — JBG-2, Infrico, Tefcold, Bartscher. Poslastičarstvo, delikates, pića, sladoled. Ovlašćeni partner, Beograd.";

const HERO_BLUR =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiMwYTE2MjgiLz48L3N2Zz4=";

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
      "refrigerated display case",
      "commercial vitrine",
      "patisserie display case",
      "deli display counter",
      "grab-and-go refrigeration",
      "JBG-2 display case",
      "Infrico patisserie vitrine",
      "Tefcold beverage display",
      "Bartscher pastry showcase",
      "ice cream display case",
      "back-bar bottle cooler",
      "rashladna vitrina",
      "vitrina za poslastice",
      "vitrina za delikatese",
      "vitrina za sladoled",
    ],
    alternates: {
      canonical: `/${locale}/equipment/refrigeration/display-cases`,
      languages: {
        en: "/en/equipment/refrigeration/display-cases",
        sr: "/sr/equipment/refrigeration/display-cases",
        "x-default": "/sr/equipment/refrigeration/display-cases",
      },
    },
    openGraph: {
      title: PAGE_TITLE,
      description: PAGE_DESC,
      url: `${COMPANY.url}/${locale}/equipment/refrigeration/display-cases`,
      siteName: COMPANY.name,
      locale: isSr ? "sr_RS" : "en_US",
      type: "website",
      images: [
        {
          url: `${COMPANY.url}/images/display-cases/jbg2-gerlach.jpg`,
          width: 1200,
          height: 630,
          alt: "Refrigerated multideck display case — JBG-2 Gerlach 2.0",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: PAGE_TITLE,
      description: PAGE_DESC,
      images: [`${COMPANY.url}/images/display-cases/jbg2-gerlach.jpg`],
    },
  };
}

interface House {
  brand: string;
  founded: string;
  origin: string;
  speciality: string;
  positioning: string;
}

const HOUSES_EN: House[] = [
  {
    brand: "JBG-2",
    founded: "1989",
    origin: "Warszowice, Poland",
    speciality: "Multidecks & remote systems",
    positioning:
      "Polish family firm engineering remote-condenser multidecks for supermarkets, bakeries, and convenience stores. R290 / R600a refrigerants.",
  },
  {
    brand: "Infrico",
    founded: "1986",
    origin: "Lucena, Spain",
    speciality: "Patisserie & ice cream",
    positioning:
      "Spanish patisserie show-stopper — curved tempered glass, AISI 304 interiors, anodised aluminium frames. Hot/cold variants on Ambar.",
  },
  {
    brand: "Tefcold",
    founded: "1987",
    origin: "Viborg, Denmark",
    speciality: "Beverage & ice cream",
    positioning:
      "Danish merchandiser — beverage glass-doors, bottle coolers, ice-cream chests for cafés, kiosks, c-stores, and gelaterias.",
  },
  {
    brand: "Bartscher",
    founded: "1876",
    origin: "Geseke / Salzkotten, Germany",
    speciality: "Countertop & Deli-Cool",
    positioning:
      "150-year German engineering — 72L to 400L pastry showcases, mini-vitrines, and Deli-Cool top-units where space is the constraint.",
  },
];

const HOUSES_SR: House[] = [
  {
    brand: "JBG-2",
    founded: "1989.",
    origin: "Warszowice, Poljska",
    speciality: "Multideck i remote sistemi",
    positioning:
      "Poljska porodična firma koja inženjerira multidekove sa daljinskim kondenzatorom za supermarkete, pekare i convenience prodavnice. R290 / R600a rashladna sredstva.",
  },
  {
    brand: "Infrico",
    founded: "1986.",
    origin: "Lucena, Španija",
    speciality: "Poslastice i sladoled",
    positioning:
      "Španska poslastičarska show-zvezda — savijeno termopan staklo, AISI 304 unutrašnjost, anodirani aluminijumski okviri. Topla/hladna varijanta na Ambar-u.",
  },
  {
    brand: "Tefcold",
    founded: "1987.",
    origin: "Viborg, Danska",
    speciality: "Pića i sladoled",
    positioning:
      "Danski merchandiser — vitrine za pića sa staklenim vratima, rashladnici za flaše, sanduci za sladoled za kafiće, kioske, c-stores i gelaterije.",
  },
  {
    brand: "Bartscher",
    founded: "1876.",
    origin: "Geseke / Salzkotten, Nemačka",
    speciality: "Stoni i Deli-Cool",
    positioning:
      "150 godina nemačkog inženjerstva — vitrine za poslastice 72L do 400L, mini-vitrine i Deli-Cool gornje jedinice tamo gde je prostor ograničen.",
  },
];

interface Format {
  serial: string;
  name: string;
  brands: string;
  descriptor: string;
}

const FORMATS_EN: Format[] = [
  {
    serial: "No. 01",
    name: "Refrigerated patisserie display",
    brands: "JBG-2 Pastry Line · Infrico Niza / Lyon / Glace · Bartscher 72/100/400L",
    descriptor:
      "Curved tempered thermopane, LED canopy and per-shelf lighting — engineered to read tortes, éclairs and entremets at eye level.",
  },
  {
    serial: "No. 02",
    name: "Deli / serve-over counter",
    brands: "JBG-2 Lhotse · Bartscher Deli-Cool I / II / III",
    descriptor:
      "Stainless work-side, glass on the customer face — for charcuterie, cheese, prepared salads, and cold mise-en-place.",
  },
  {
    serial: "No. 03",
    name: "Grab-and-go vertical multideck",
    brands: "JBG-2 Glacier / Gerlach 2.0 / Garmo · Tefcold uprights",
    descriptor:
      "Open-front multidecks for impulse refrigerated retail — single-deck to 2.5-metre walls, plug-in and remote configurations.",
  },
  {
    serial: "No. 04",
    name: "Bottle / back-bar cooler",
    brands: "Infrico VBR · Tefcold BA / FS / DB",
    descriptor:
      "Hinge-door and sliding-door units sized for the bar back — bottle merchandising at service temperature.",
  },
  {
    serial: "No. 05",
    name: "Beverage glass-door display",
    brands: "Tefcold LGC2500 · SCU1425 · SGD-300GE",
    descriptor:
      "Frameless and framed merchandisers, 387L to 496L — for forecourts, c-stores, hotel back-of-house, and impulse zones.",
  },
  {
    serial: "No. 06",
    name: "Hot / heated display",
    brands: "JBG-2 Hot Cases · Infrico Ambar HT · Bartscher Deli-Plus II",
    descriptor:
      "Heated display for pies, viennoiserie, deli hot. Specified alongside refrigerated counters for combined service zones.",
  },
  {
    serial: "No. 07",
    name: "Ice cream display",
    brands: "Infrico Coral / Aries / Ibiza · Tefcold IC / NIC / ICSC · JBG-2 Fiji",
    descriptor:
      "Scoop and tub freezers, curved-glass parlour vitrines, and chest freezers — for gelaterias, kiosks, and supermarket islands.",
  },
  {
    serial: "No. 08",
    name: "Wine display",
    brands: "Tefcold TFW375 · Infrico wine cellars",
    descriptor:
      "Single and dual-zone wine cabinets — service temperature for whites and reds, presentation glass for the front of house.",
  },
];

const FORMATS_SR: Format[] = [
  {
    serial: "Br. 01",
    name: "Vitrina za poslastice",
    brands: "JBG-2 Pastry Line · Infrico Niza / Lyon / Glace · Bartscher 72/100/400L",
    descriptor:
      "Savijeno termopan staklo, LED nadstrešnica i osvetljenje po polici — projektovano da torte, ekleri i entremesi budu u visini očiju.",
  },
  {
    serial: "Br. 02",
    name: "Vitrina za delikatese / serve-over",
    brands: "JBG-2 Lhotse · Bartscher Deli-Cool I / II / III",
    descriptor:
      "Inox radna strana, staklo prema kupcu — za suhomesnate proizvode, sireve, gotove salate i hladnu mise-en-place.",
  },
  {
    serial: "Br. 03",
    name: "Vertikalni multideck (grab-and-go)",
    brands: "JBG-2 Glacier / Gerlach 2.0 / Garmo · Tefcold uprights",
    descriptor:
      "Multidekovi sa otvorenim pristupom za impulsnu rashladnu maloprodaju — od jednog dekova do zidova od 2,5 metra, plug-in i remote konfiguracije.",
  },
  {
    serial: "Br. 04",
    name: "Rashladnik za flaše / back-bar",
    brands: "Infrico VBR · Tefcold BA / FS / DB",
    descriptor:
      "Jedinice sa kliznim ili klap vratima dimenzionisane za bar — merchandising flaša na servisnoj temperaturi.",
  },
  {
    serial: "Br. 05",
    name: "Vitrine za pića sa staklenim vratima",
    brands: "Tefcold LGC2500 · SCU1425 · SGD-300GE",
    descriptor:
      "Bezokvirne i okvirne vitrine, 387L do 496L — za benzinske stanice, c-stores, hotelski back-of-house i impulsne zone.",
  },
  {
    serial: "Br. 06",
    name: "Topla / grejana vitrina",
    brands: "JBG-2 Hot Cases · Infrico Ambar HT · Bartscher Deli-Plus II",
    descriptor:
      "Grejane vitrine za pite, viennoiserie, tople delikatese. Specifikuju se uz rashladne pultove za kombinovane servisne zone.",
  },
  {
    serial: "Br. 07",
    name: "Vitrina za sladoled",
    brands: "Infrico Coral / Aries / Ibiza · Tefcold IC / NIC / ICSC · JBG-2 Fiji",
    descriptor:
      "Zamrzivači za scoop i posude, savijeno-staklene parlour vitrine i sanduci za zamrzavanje — za gelaterije, kioske i supermarket ostrva.",
  },
  {
    serial: "Br. 08",
    name: "Vinska vitrina",
    brands: "Tefcold TFW375 · Infrico vinski podrumi",
    descriptor:
      "Jednozonske i dvozonske vinske vitrine — servisna temperatura za bela i crna vina, prezentaciono staklo za front of house.",
  },
];

interface Application {
  venue: string;
  combination: string;
  note: string;
}

const APPLICATIONS_EN: Application[] = [
  {
    venue: "Bakeries & patisseries",
    combination: "Infrico Niza / Lyon front · JBG-2 Pastry Line · Bartscher 72 / 100L",
    note: "Curved-glass vitrine on the customer face, plug-in pastry behind, countertop for slices.",
  },
  {
    venue: "Butchers & delis",
    combination: "JBG-2 Lhotse serve-over · Bartscher Deli-Cool I / II / III",
    note: "Long serve-over counters paired with countertop charcuterie — single visual line.",
  },
  {
    venue: "Cafés & coffee bars",
    combination: "Bartscher mini-vitrines · Tefcold bottle coolers · Infrico VBR",
    note: "86 / 98L pastry plus a back-bar bottle cooler — every centimetre earns.",
  },
  {
    venue: "Hotels",
    combination: "Bartscher countertop · Tefcold TFW375 wine · Infrico Combo",
    note: "Lobby pastry, lounge wine, breakfast hot/cold combo — three formats, one supplier.",
  },
  {
    venue: "Supermarkets",
    combination: "JBG-2 Gerlach 2.0 / Garmo multidecks · Tefcold beverage uprights",
    note: "Remote-condenser walls for the chiller aisle, plug-in beverage at the entrance.",
  },
  {
    venue: "Gelaterias",
    combination: "Infrico Coral / Aries / Ibiza · Tefcold IC scoop / tub",
    note: "Curved-glass parlour vitrines on the line, chest freezers for back-of-house tubs.",
  },
];

const APPLICATIONS_SR: Application[] = [
  {
    venue: "Pekare i poslastičarstva",
    combination: "Infrico Niza / Lyon front · JBG-2 Pastry Line · Bartscher 72 / 100L",
    note: "Vitrina sa savijenim staklom prema kupcu, plug-in vitrina za poslastice iza, stoni format za parčad.",
  },
  {
    venue: "Mesare i delikatesi",
    combination: "JBG-2 Lhotse serve-over · Bartscher Deli-Cool I / II / III",
    note: "Dugi serve-over pultovi sparani sa stonim suhomesnatim — jedna vizualna linija.",
  },
  {
    venue: "Kafići i kafe barovi",
    combination: "Bartscher mini-vitrine · Tefcold rashladnici za flaše · Infrico VBR",
    note: "86 / 98L vitrine za poslastice plus back-bar rashladnik za flaše — svaki centimetar zarađuje.",
  },
  {
    venue: "Hoteli",
    combination: "Bartscher stoni · Tefcold TFW375 vinska · Infrico Combo",
    note: "Poslastice u lobiju, vino u salonu, doručak hot/cold combo — tri formata, jedan dobavljač.",
  },
  {
    venue: "Supermarketi",
    combination: "JBG-2 Gerlach 2.0 / Garmo multidekovi · Tefcold vertikalne za pića",
    note: "Zidovi sa remote kondenzatorom za rashladni red, plug-in pića na ulazu.",
  },
  {
    venue: "Gelaterije",
    combination: "Infrico Coral / Aries / Ibiza · Tefcold IC scoop / tub",
    note: "Parlour vitrine sa savijenim staklom na liniji, sanduci za zamrzavanje za posude u back-of-house-u.",
  },
];

export default async function DisplayCasesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const isSr = locale === "sr";
  const PAGE_TITLE = isSr ? PAGE_TITLE_SR : PAGE_TITLE_EN;
  const PAGE_DESC = isSr ? PAGE_DESC_SR : PAGE_DESC_EN;
  const pageUrl = `${COMPANY.url}/${locale}/equipment/refrigeration/display-cases`;
  const HOUSES = isSr ? HOUSES_SR : HOUSES_EN;
  const FORMATS = isSr ? FORMATS_SR : FORMATS_EN;
  const APPLICATIONS = isSr ? APPLICATIONS_SR : APPLICATIONS_EN;

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
        about: [{ "@id": `${COMPANY.url}/#organization` }],
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: `${COMPANY.url}/images/display-cases/jbg2-gerlach.jpg`,
          width: 1200,
          height: 630,
        },
        breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
        mainEntity: { "@id": `${pageUrl}#formats` },
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
            name: dict.nav.displayCases,
          },
        ],
      },
      {
        "@type": "ItemList",
        "@id": `${pageUrl}#formats`,
        name: isSr
          ? "Formati rashladnih vitrina"
          : "Display Case Formats",
        numberOfItems: FORMATS.length,
        itemListElement: FORMATS.map((row, i) => ({
          "@type": "ListItem",
          position: i + 1,
          item: {
            "@type": "Product",
            name: row.name,
            description: row.descriptor,
            brand: row.brands.split("·").map((b) => ({
              "@type": "Brand",
              name: b.trim(),
            })),
          },
        })),
      },
      {
        "@type": "Brand",
        "@id": `${pageUrl}#jbg2`,
        name: "JBG-2",
        url: "https://www.jbg2.com/",
        description:
          "Polish manufacturer of refrigerated display cases and remote multidecks, founded 1989 in Warszowice (Katowice region).",
      },
      {
        "@type": "Brand",
        "@id": `${pageUrl}#infrico`,
        name: "Infrico",
        url: "https://www.infrico.com/",
        description:
          "Spanish manufacturer of patisserie, deli, and ice cream display cases, founded 1986 in Lucena, Córdoba. Part of Grupo Infrico.",
      },
      {
        "@type": "Brand",
        "@id": `${pageUrl}#tefcold`,
        name: "Tefcold",
        url: "https://www.tefcold.com/",
        description:
          "Danish manufacturer of beverage and ice cream display merchandisers, founded 1987 in Viborg.",
      },
      {
        "@type": "Brand",
        "@id": `${pageUrl}#bartscher`,
        name: "Bartscher",
        url: "https://www.bartscher.com/",
        description:
          "German manufacturer of professional kitchen and display equipment, founded 1876 in Geseke; HQ in Salzkotten, North Rhine-Westphalia.",
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

      {/* ─────────────────────────────────────────────
          CHAPTER I — HERO
         ───────────────────────────────────────────── */}
      <section
        aria-labelledby="display-cases-hero"
        className="relative bg-navy text-white overflow-hidden"
      >
        {/* Folio top-right */}
        <div
          aria-hidden="true"
          className="hidden lg:flex absolute top-6 right-8 z-20 items-center gap-3"
        >
          <span
            className="font-display italic"
            style={{
              color: "var(--color-gold)",
              fontSize: "13px",
              letterSpacing: "0.18em",
            }}
          >
            {isSr ? "tabak 01 / 08" : "folio 01 / 08"}
          </span>
          <span
            aria-hidden="true"
            style={{
              width: "6px",
              height: "6px",
              backgroundColor: "var(--color-gold)",
              borderRadius: "50%",
              display: "inline-block",
            }}
          />
        </div>

        <Breadcrumb
          locale={locale as Locale}
          homeLabel={dict.breadcrumb.home}
          items={[
            { label: dict.nav.equipment, href: `/${locale}/equipment` },
            {
              label: dict.nav.refrigeration,
              href: `/${locale}/equipment/refrigeration`,
            },
            { label: dict.nav.displayCases },
          ]}
        />

        <RunningMeta
          variant="dark"
          folio={isSr ? "Izd. 2026" : "Ed. 2026"}
          items={[
            isSr ? "Tom IV" : "Vol. IV",
            isSr ? "Pogl. 02 — Vitrine" : "Ch. 02 — Display Cases",
            "JBG-2",
            "Infrico",
            "Tefcold",
            "Bartscher",
          ]}
        />

        {/* Vertical column rules on lg+ */}
        <div
          aria-hidden="true"
          className="hidden lg:block absolute inset-y-0 left-0 right-0 mx-auto max-w-7xl px-6 pointer-events-none"
        >
          <div
            className="relative w-full h-full"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(201,168,76,0.12) 1px, transparent 1px)",
              backgroundSize: "calc(100% / 12) 100%",
            }}
          />
        </div>

        <div
          className="relative mx-auto max-w-7xl px-6"
          style={{
            paddingTop: "clamp(1.75rem, 3vw, 2.75rem)",
            paddingBottom: "clamp(2rem, 3.5vw, 3.25rem)",
          }}
        >
          <div className="grid grid-cols-12 gap-6 lg:gap-10 items-start">
            <div className="col-span-12 lg:col-span-8 relative z-10">
              <div className="flex items-center gap-4 mb-5 lg:mb-6">
                <span
                  aria-hidden="true"
                  style={{
                    color: "var(--color-gold)",
                    fontFamily: "var(--font-display), serif",
                    fontStyle: "italic",
                    fontSize: "14px",
                  }}
                >
                  No.
                </span>
                <span
                  style={{
                    color: "var(--color-gold)",
                    letterSpacing: "0.32em",
                  }}
                  className="text-xs font-medium uppercase"
                >
                  {dict.common.authorizedMiddleby}
                </span>
                <span
                  aria-hidden="true"
                  style={{ backgroundColor: "var(--color-gold)" }}
                  className="block h-px flex-1 max-w-24 opacity-50"
                />
              </div>

              {/* Overlapping "02" numeral */}
              <div className="relative">
                <span
                  aria-hidden="true"
                  className="hidden lg:block font-display italic leading-none pointer-events-none select-none"
                  style={{
                    position: "absolute",
                    top: "-0.18em",
                    right: "-0.35em",
                    color: "var(--color-gold)",
                    fontSize: "clamp(6rem, 11vw, 11rem)",
                    opacity: 0.12,
                    letterSpacing: "-0.05em",
                    zIndex: 0,
                  }}
                >
                  02
                </span>

                <h1
                  id="display-cases-hero"
                  className="font-display text-white relative"
                  style={{
                    fontSize: "clamp(2.5rem, 6.5vw, 5.25rem)",
                    lineHeight: 0.88,
                    letterSpacing: "-0.025em",
                    fontWeight: 700,
                    zIndex: 1,
                  }}
                >
                  <ScrollReveal
                    as="span"
                    staggerLines
                    delay={40}
                    style={{ display: "block" }}
                  >
                    <span style={{ display: "block" }}>{isSr ? "Vitrine," : "Display,"}</span>
                    <span
                      style={{
                        display: "block",
                        fontStyle: "italic",
                        fontWeight: 400,
                        color: "var(--color-gold)",
                        paddingLeft: "0.6em",
                      }}
                    >
                      {isSr ? "u hladnom" : "in cold"}
                    </span>
                    <span style={{ display: "block" }}>
                      {isSr ? "i toplom" : "and warm"}
                      <span
                        aria-hidden="true"
                        style={{
                          color: "var(--color-gold)",
                          fontStyle: "italic",
                          fontWeight: 400,
                        }}
                      >
                        .
                      </span>
                    </span>
                  </ScrollReveal>
                </h1>
              </div>
            </div>

            {/* Right — plate tag */}
            <aside className="col-span-12 lg:col-span-4 relative lg:pt-12">
              <div
                style={{
                  borderTop: "1px solid rgba(201,168,76,0.35)",
                  paddingTop: "1rem",
                }}
              >
                <p
                  className="font-display italic"
                  style={{
                    color: "var(--color-gold)",
                    fontSize: "13px",
                    letterSpacing: "0.1em",
                  }}
                >
                  {isSr ? "Tabla br. 02 —" : "Plate No. 02 —"}{" "}
                  <span style={{ color: "rgba(255,255,255,0.7)" }}>
                    {isSr ? "Vitrine, Beograd." : "Vitrines, Belgrade."}
                  </span>
                </p>
              </div>
            </aside>
          </div>

          {/* Lower band — lede + image */}
          <div className="grid grid-cols-12 gap-6 lg:gap-10 mt-6 lg:mt-8 items-start">
            <div className="col-span-12 lg:col-span-5 lg:pt-2 relative">
              <span
                aria-hidden="true"
                style={{
                  color: "var(--color-gold)",
                  letterSpacing: "0.32em",
                  fontSize: "10px",
                }}
                className="block uppercase font-medium mb-4"
              >
                {isSr ? "§ Beleška urednika" : <>§ Editor&rsquo;s Note</>}
              </span>
              <p
                className="text-white/80 font-light"
                style={{
                  fontSize: "clamp(1rem, 1.15vw, 1.125rem)",
                  lineHeight: 1.6,
                  maxWidth: "44ch",
                }}
              >
                <span
                  aria-hidden="true"
                  style={{
                    fontFamily: "var(--font-display), serif",
                    fontStyle: "italic",
                    color: "var(--color-gold)",
                    fontSize: "3.6em",
                    lineHeight: 0.85,
                    float: "left",
                    paddingRight: "0.12em",
                    paddingTop: "0.06em",
                    marginTop: "-0.05em",
                    fontWeight: 400,
                  }}
                >
                  {isSr ? "Č" : "F"}
                </span>
                {isSr ? (
                  <>etiri proizvođača kroz četiri tradicije — poljski remote
                  multidekovi, španske vitrine za poslastice, danski merchandiseri,
                  nemački stoni. Od Bartscher vitrine za poslastice od 72 litra do
                  Gerlach zida od 2,5 metra.</>
                ) : (
                  <>our manufacturers across four traditions — Polish remote
                multidecks, Spanish patisserie vitrines, Danish merchandisers,
                German countertop. From a 72-litre Bartscher pastry case to a
                2.5-metre Gerlach wall.</>
                )}
              </p>
            </div>

            {/* Image */}
            <div className="col-span-12 lg:col-span-7 relative">
              <figure className="relative">
                <div
                  className="relative overflow-hidden"
                  style={{
                    aspectRatio: "16 / 9",
                    marginRight:
                      "calc(-1 * max((100vw - 80rem) / 2, 0px) - 1.5rem)",
                  }}
                >
                  <Image
                    src="/images/display-cases/jbg2-gerlach.jpg"
                    alt="Refrigerated multideck display case — JBG-2 Gerlach 2.0"
                    fill
                    priority
                    fetchPriority="high"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    placeholder="blur"
                    blurDataURL={HERO_BLUR}
                    className="object-cover"
                    style={{
                      filter: "grayscale(0.25) contrast(1.05) brightness(0.95)",
                    }}
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 mix-blend-multiply"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(10,22,40,0.30) 0%, rgba(10,22,40,0.70) 100%)",
                    }}
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 mix-blend-overlay"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(201,168,76,0.18) 0%, transparent 60%)",
                    }}
                  />

                  <figcaption
                    className="absolute bottom-4 left-5 right-5 flex items-center justify-between"
                    style={{ zIndex: 2 }}
                  >
                    <span
                      className="font-display italic"
                      style={{
                        color: "var(--color-gold)",
                        fontSize: "11px",
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                      }}
                    >
                      JBG-2 · Gerlach 2.0
                    </span>
                    <span
                      className="font-display italic"
                      style={{
                        color: "var(--color-gold)",
                        fontSize: "11px",
                        letterSpacing: "0.2em",
                      }}
                    >
                      — MB Eq.
                    </span>
                  </figcaption>
                </div>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          CHAPTER II — HERITAGE & STANDARDS
         ───────────────────────────────────────────── */}
      <div className="bg-offwhite">
        <ChapterMark
          numeral="II"
          label={isSr ? "Nasleđe i standardi" : "Heritage & Standards"}
          caption={isSr ? "Četiri kuće kroz četiri tradicije — i standardi koje održavaju." : "Four houses across four traditions — and the standards they keep."}
          variant="light"
        />
        <AwardStrip
          variant="light"
          items={[
            {
              type: "heritage",
              label: isSr ? "Bartscher · Od 1876." : "Bartscher · Since 1876",
              detail: isSr ? "Geseke, Nemačka — 150 godina" : "Geseke, Germany — 150 years",
            },
            {
              type: "heritage",
              label: isSr ? "Tefcold · Od 1987." : "Tefcold · Since 1987",
              detail: isSr ? "Viborg, Danska" : "Viborg, Denmark",
            },
            {
              type: "heritage",
              label: isSr ? "JBG-2 · Od 1989." : "JBG-2 · Since 1989",
              detail: isSr ? "Warszowice, Poljska" : "Warszowice, Poland",
            },
            {
              type: "heritage",
              label: isSr ? "Infrico · Od 1986." : "Infrico · Since 1986",
              detail: isSr ? "Lucena, Španija" : "Lucena, Spain",
            },
            {
              type: "certification",
              label: "ISO 23953-2",
              detail: isSr ? "Standard za rashladne vitrine" : "Display refrigeration std",
            },
            {
              type: "certification",
              label: "R290 / R600a",
              detail: isSr ? "Prirodna rashladna sredstva" : "Natural refrigerants",
            },
          ]}
        />
      </div>

      {/* ─────────────────────────────────────────────
          CHAPTER III — THE FOUR HOUSES
         ───────────────────────────────────────────── */}
      <div className="bg-offwhite">
        <ChapterMark
          numeral="III"
          label={isSr ? "Četiri kuće" : "The Four Houses"}
          caption={isSr ? "Poljska, Španija, Danska, Nemačka — svaka izabrana po onome u čemu je najbolja." : "Poland, Spain, Denmark, Germany — each chosen for what it does best."}
          variant="light"
        />
      </div>

      <section
        aria-labelledby="display-cases-houses"
        className="relative bg-offwhite text-navy"
        style={{
          paddingTop: "clamp(2rem, 4vw, 3.75rem)",
          paddingBottom: "clamp(3rem, 5vw, 5rem)",
        }}
      >
        {/* Column rule ornament */}
        <div
          aria-hidden="true"
          className="hidden lg:block absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(10,22,40,0.05) 1px, transparent 1px)",
            backgroundSize: "calc(100% / 12) 100%",
            backgroundPosition: "0.75rem 0",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-12 gap-6 lg:gap-10 items-end">
            <div className="col-span-12 lg:col-span-7">
              <div className="flex items-center gap-4 mb-6">
                <span
                  aria-hidden="true"
                  style={{ backgroundColor: "var(--color-gold)" }}
                  className="block h-px w-12"
                />
                <span
                  style={{
                    color: "var(--color-gold-text)",
                    letterSpacing: "0.32em",
                  }}
                  className="text-xs font-medium uppercase"
                >
                  {isSr ? "Četiri kuće, četiri tradicije" : "Four Houses, Four Traditions"}
                </span>
              </div>
              <ScrollReveal>
                <h2
                  id="display-cases-houses"
                  className="font-display font-bold text-navy"
                  style={{
                    fontSize: "clamp(1.75rem, 3.8vw, 3rem)",
                    lineHeight: 0.92,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {isSr ? "Četiri proizvođača," : "Four manufacturers,"}
                  <br />
                  <span
                    className="italic font-normal"
                    style={{ color: "var(--color-gold-text)" }}
                  >
                    {isSr ? "jedan pregled vitrina." : "one display ledger."}
                  </span>
                </h2>
              </ScrollReveal>
            </div>

            <div className="col-span-12 lg:col-span-4 lg:col-start-9 lg:pb-3">
              <p
                className="text-navy/70 font-light"
                style={{
                  fontSize: "14px",
                  lineHeight: 1.65,
                  maxWidth: "32ch",
                }}
              >
                {isSr ? "Od stonih vitrina za poslastice od 72 litra do remote multidekova od 2,5 metra — isporučujemo, instaliramo i servisiramo kroz jedno ovlašćeno partnerstvo." : "From 72-litre countertop pastry cases to 2.5-metre remote multidecks — supplied, installed, serviced under one authorized partnership."}
              </p>
            </div>
          </div>

          {/* Houses grid */}
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-x-6 lg:gap-x-12"
            style={{ marginTop: "clamp(2rem, 3.5vw, 3rem)" }}
          >
            {HOUSES.map((house, idx) => (
              <ScrollReveal
                key={house.brand}
                className="relative"
                delay={idx * 70}
              >
                <article
                  className="relative h-full"
                  style={{
                    borderTop: "1px solid rgba(10,22,40,0.18)",
                    paddingTop: "1.5rem",
                    paddingBottom: "1.75rem",
                  }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className="font-display italic"
                      style={{
                        color: "var(--color-gold-text)",
                        fontSize: "clamp(1.1rem, 1.5vw, 1.3rem)",
                        letterSpacing: "0.04em",
                      }}
                    >
                      {isSr ? "Br." : "No."} 0{idx + 1}
                    </span>
                    <span
                      aria-hidden="true"
                      style={{ backgroundColor: "var(--color-gold)" }}
                      className="block h-px w-10 opacity-60"
                    />
                    <span
                      className="uppercase text-navy/60"
                      style={{
                        fontSize: "10px",
                        letterSpacing: "0.32em",
                        fontWeight: 500,
                      }}
                    >
                      {isSr ? "Osn." : "Founded"} {house.founded}
                    </span>
                  </div>

                  <h3
                    className="font-display font-bold text-navy"
                    style={{
                      fontSize: "clamp(2rem, 3.5vw, 3rem)",
                      lineHeight: 0.9,
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {house.brand}
                    <span
                      aria-hidden="true"
                      style={{
                        color: "var(--color-gold-text)",
                        fontStyle: "italic",
                        fontWeight: 400,
                      }}
                    >
                      .
                    </span>
                  </h3>

                  <p
                    className="font-display italic"
                    style={{
                      color: "var(--color-gold-text)",
                      fontSize: "13px",
                      letterSpacing: "0.1em",
                      marginTop: "0.4rem",
                    }}
                  >
                    {house.origin}
                  </p>

                  <p
                    className="uppercase text-navy/60 mt-3"
                    style={{
                      fontSize: "10.5px",
                      letterSpacing: "0.28em",
                      fontWeight: 500,
                    }}
                  >
                    {house.speciality}
                  </p>

                  <p
                    className="font-display italic text-navy/85 mt-5"
                    style={{
                      fontSize: "clamp(1rem, 1.3vw, 1.175rem)",
                      lineHeight: 1.45,
                      fontWeight: 400,
                      maxWidth: "40ch",
                    }}
                  >
                    {house.positioning}
                  </p>
                </article>
              </ScrollReveal>
            ))}
          </div>

          <div className="relative mt-10 lg:mt-12 grid grid-cols-12 gap-6">
            <div className="col-span-12 lg:col-start-2 lg:col-span-10 flex items-center gap-4">
              <span
                aria-hidden="true"
                style={{ backgroundColor: "var(--color-gold)", opacity: 0.7 }}
                className="block h-px w-10"
              />
              <p
                className="font-display italic text-navy/70"
                style={{
                  fontSize: "13.5px",
                  lineHeight: 1.55,
                  maxWidth: "62ch",
                }}
              >
                JBG-2 and Tefcold operate on natural hydrocarbon refrigerants
                (R290 / R600a). Bartscher patisserie line uses R600a. Infrico
                builds CFC-free PU foam insulation across the range.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          CHAPTER IV — THE FORMAT LEDGER
         ───────────────────────────────────────────── */}
      <div className="bg-navy">
        <ChapterMark
          numeral="IV"
          label={isSr ? "Pregled formata" : "The Format Ledger"}
          caption={isSr ? "Osam formata vitrina — rashladne, grejane i zamrznute." : "Eight display formats — refrigerated, heated, and frozen."}
          variant="dark"
        />
      </div>

      <section
        aria-labelledby="display-cases-formats"
        className="relative bg-navy text-white"
        style={{
          paddingTop: "clamp(2.5rem, 4vw, 4rem)",
          paddingBottom: "clamp(3rem, 5.5vw, 5.5rem)",
        }}
      >
        <div className="mx-auto max-w-7xl px-6 relative">
          {/* Section head */}
          <div className="grid grid-cols-12 gap-6 lg:gap-10 items-end">
            <div className="col-span-12 lg:col-span-8">
              <div className="flex items-center gap-4 mb-6">
                <span
                  aria-hidden="true"
                  style={{ backgroundColor: "var(--color-gold)" }}
                  className="block h-px w-12"
                />
                <span
                  style={{
                    color: "var(--color-gold)",
                    letterSpacing: "0.32em",
                  }}
                  className="text-xs font-medium uppercase"
                >
                  {isSr ? "Pregled formata — osam formata" : "The Format Ledger — Eight Formats"}
                </span>
              </div>
              <ScrollReveal>
                <h2
                  id="display-cases-formats"
                  className="font-display font-bold text-white"
                  style={{
                    fontSize: "clamp(1.75rem, 3.8vw, 3rem)",
                    lineHeight: 0.92,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {isSr ? "Svaki proizvod," : "Every product,"}
                  <br />
                  <span
                    className="italic font-normal"
                    style={{ color: "var(--color-gold)" }}
                  >
                    {isSr ? "njegova prava temperatura." : "its proper temperature."}
                  </span>
                </h2>
              </ScrollReveal>
            </div>
            <div className="col-span-12 lg:col-span-4 lg:col-start-9 lg:pb-3">
              <p
                className="text-white/70 font-light"
                style={{
                  fontSize: "14px",
                  lineHeight: 1.65,
                  maxWidth: "30ch",
                }}
              >
                {isSr ? "Osam formata vitrina kroz četiri kuće — rashladne, grejane, zamrznute i za servis vina. Specifikuju se prema proizvodu na polici." : "Eight display formats across the four houses — refrigerated, heated, frozen, and wine-service. Specified to the product on the shelf."}
              </p>
            </div>
          </div>

          {/* Rule */}
          <div
            style={{
              borderTop: "1px solid rgba(201,168,76,0.35)",
              marginTop: "clamp(1.75rem, 3vw, 2.5rem)",
            }}
          />

          {/* Format ledger */}
          <ol className="relative">
            {FORMATS.map((item) => (
              <li
                key={item.serial + item.name}
                style={{
                  borderBottom: "1px solid rgba(201,168,76,0.2)",
                }}
              >
                <div
                  className="grid grid-cols-12 gap-4 items-center"
                  style={{
                    paddingTop: "clamp(0.95rem, 1.5vw, 1.4rem)",
                    paddingBottom: "clamp(0.95rem, 1.5vw, 1.4rem)",
                  }}
                >
                  <div className="col-span-3 md:col-span-2 lg:col-span-1">
                    <span
                      className="font-display italic"
                      style={{
                        color: "var(--color-gold)",
                        fontSize: "clamp(1rem, 1.3vw, 1.25rem)",
                        letterSpacing: "0.04em",
                      }}
                    >
                      {item.serial}
                    </span>
                  </div>

                  <div className="col-span-9 md:col-span-7 lg:col-span-6">
                    <span
                      className="font-display text-white block"
                      style={{
                        fontSize: "clamp(1.4rem, 2.6vw, 2.1rem)",
                        lineHeight: 0.98,
                        letterSpacing: "-0.01em",
                        fontWeight: 400,
                        fontStyle: "italic",
                      }}
                    >
                      {item.name}
                    </span>
                    <span
                      className="block text-white/65 font-light mt-2"
                      style={{
                        fontSize: "13px",
                        lineHeight: 1.55,
                        maxWidth: "62ch",
                        fontStyle: "italic",
                        fontFamily: "var(--font-display), serif",
                      }}
                    >
                      {item.descriptor}
                    </span>
                  </div>

                  <div className="col-span-12 md:col-span-3 lg:col-span-5">
                    <span
                      className="block text-white/55 font-light uppercase"
                      style={{
                        fontSize: "10.5px",
                        letterSpacing: "0.22em",
                        lineHeight: 1.7,
                      }}
                    >
                      {item.brands}
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ol>

          {/* Sample-stock strip */}
          <div className="mt-10 lg:mt-14">
            <div className="flex items-center gap-4 mb-5">
              <span
                aria-hidden="true"
                style={{ backgroundColor: "var(--color-gold)" }}
                className="block h-px w-10"
              />
              <span
                style={{
                  color: "var(--color-gold)",
                  letterSpacing: "0.32em",
                  fontSize: "10px",
                  fontWeight: 500,
                }}
                className="uppercase"
              >
                {isSr ? "§ Tabele iz kataloga" : "§ Plates from the catalog"}
              </span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
              {[
                {
                  src: "/images/display-cases/jbg2-gerlach-2.jpg",
                  alt: "JBG-2 Gerlach 2.0 multideck — front view",
                  caption: "JBG-2 Gerlach 2.0",
                },
                {
                  src: "/images/display-cases/tefcold-lgc2500.webp",
                  alt: "Tefcold LGC2500 large glass-door beverage cooler",
                  caption: "Tefcold LGC2500",
                },
                {
                  src: "/images/display-cases/tefcold-scu1425.webp",
                  alt: "Tefcold SCU1425 frameless beverage display",
                  caption: "Tefcold SCU1425",
                },
                {
                  src: "/images/display-cases/tefcold-ic101sc.webp",
                  alt: "Tefcold IC101SC ice cream chest freezer",
                  caption: "Tefcold IC101SC",
                },
              ].map((p) => (
                <figure key={p.src} className="relative">
                  <div
                    className="relative overflow-hidden"
                    style={{
                      aspectRatio: "4 / 5",
                      backgroundColor: "rgba(255,255,255,0.04)",
                    }}
                  >
                    <Image
                      src={p.src}
                      alt={p.alt}
                      fill
                      loading="lazy"
                      sizes="(max-width: 768px) 50vw, 25vw"
                      className="object-cover"
                      style={{
                        filter: "grayscale(0.15) contrast(1.02)",
                      }}
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 mix-blend-multiply"
                      style={{
                        background:
                          "linear-gradient(180deg, rgba(10,22,40,0.10) 0%, rgba(10,22,40,0.50) 100%)",
                      }}
                    />
                  </div>
                  <figcaption
                    className="font-display italic mt-3"
                    style={{
                      color: "var(--color-gold)",
                      fontSize: "11px",
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                    }}
                  >
                    {p.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          CHAPTER V — APPLICATION MATRIX + PULL QUOTE
         ───────────────────────────────────────────── */}
      <div className="bg-offwhite">
        <ChapterMark
          numeral="V"
          label={isSr ? "Pregled primene" : "The Application Ledger"}
          caption={isSr ? "Šest objekata — svaki sa svojom kombinacijom." : "Six venues — each with its proper combination."}
          variant="light"
        />
      </div>

      <section
        aria-labelledby="display-cases-applications"
        className="relative bg-offwhite text-navy"
        style={{
          paddingTop: "clamp(2rem, 3.5vw, 3.5rem)",
          paddingBottom: "clamp(2rem, 3.5vw, 3.5rem)",
        }}
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-12 gap-6 lg:gap-10 items-end mb-8 lg:mb-12">
            <div className="col-span-12 lg:col-span-8">
              <div className="flex items-center gap-4 mb-6">
                <span
                  aria-hidden="true"
                  style={{ backgroundColor: "var(--color-gold)" }}
                  className="block h-px w-12"
                />
                <span
                  style={{
                    color: "var(--color-gold-text)",
                    letterSpacing: "0.32em",
                  }}
                  className="text-xs font-medium uppercase"
                >
                  {isSr ? "Po objektu — specifične kombinacije" : "By Venue — Specified Combinations"}
                </span>
              </div>
              <ScrollReveal>
                <h2
                  id="display-cases-applications"
                  className="font-display font-bold text-navy"
                  style={{
                    fontSize: "clamp(1.75rem, 3.8vw, 3rem)",
                    lineHeight: 0.92,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {isSr ? "Od pekare do gelaterije," : "From bakery to gelateria,"}
                  <br />
                  <span
                    className="italic font-normal"
                    style={{ color: "var(--color-gold-text)" }}
                  >
                    {isSr ? "kombinacija za svakog." : "a combination for each."}
                  </span>
                </h2>
              </ScrollReveal>
            </div>
          </div>

          {/* Application list */}
          <ol
            style={{
              borderTop: "1px solid rgba(10,22,40,0.18)",
            }}
          >
            {APPLICATIONS.map((app, i) => (
              <li
                key={app.venue}
                style={{
                  borderBottom: "1px solid rgba(10,22,40,0.12)",
                }}
              >
                <div
                  className="grid grid-cols-12 gap-4 lg:gap-6 items-baseline"
                  style={{
                    paddingTop: "clamp(0.85rem, 1.4vw, 1.25rem)",
                    paddingBottom: "clamp(0.85rem, 1.4vw, 1.25rem)",
                  }}
                >
                  <div className="col-span-12 md:col-span-1 lg:col-span-1">
                    <span
                      className="font-display italic"
                      style={{
                        color: "var(--color-gold-text)",
                        fontSize: "13px",
                        letterSpacing: "0.04em",
                      }}
                    >
                      &mdash; 0{i + 1}
                    </span>
                  </div>

                  <div className="col-span-12 md:col-span-3 lg:col-span-3">
                    <span
                      className="font-display italic text-navy block"
                      style={{
                        fontSize: "clamp(1.15rem, 1.8vw, 1.4rem)",
                        lineHeight: 1.1,
                        fontWeight: 400,
                      }}
                    >
                      {app.venue}
                    </span>
                  </div>

                  <div className="col-span-12 md:col-span-4 lg:col-span-4">
                    <span
                      className="block text-navy/70 uppercase"
                      style={{
                        fontSize: "10.5px",
                        letterSpacing: "0.22em",
                        lineHeight: 1.7,
                        fontWeight: 500,
                      }}
                    >
                      {app.combination}
                    </span>
                  </div>

                  <div className="col-span-12 md:col-span-4 lg:col-span-4">
                    <span
                      className="block text-navy/70 font-light"
                      style={{
                        fontSize: "13px",
                        lineHeight: 1.55,
                        fontStyle: "italic",
                        fontFamily: "var(--font-display), serif",
                      }}
                    >
                      {app.note}
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Pull quote — house note */}
      <section
        aria-hidden="true"
        className="relative bg-offwhite"
        style={{
          paddingTop: "clamp(3rem, 5.5vw, 5.25rem)",
          paddingBottom: "clamp(3rem, 5.5vw, 5.25rem)",
        }}
      >
        <div className="mx-auto max-w-7xl px-6 relative">
          <div
            aria-hidden="true"
            className="hidden lg:block absolute inset-y-0 left-6 right-6 pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(10,22,40,0.08) 1px, transparent 1px)",
              backgroundSize: "calc(100% / 12) 100%",
            }}
          />
          <div className="grid grid-cols-12 gap-6 relative">
            <div className="col-span-12 lg:col-span-1 flex lg:items-start">
              <span
                className="font-display italic"
                style={{
                  color: "var(--color-gold-text)",
                  fontSize: "clamp(1.75rem, 2.8vw, 2.5rem)",
                  lineHeight: 0.85,
                  display: "inline-block",
                  transform: "translateY(-0.2em)",
                }}
              >
                &ldquo;
              </span>
            </div>

            <ScrollReveal
              as="blockquote"
              className="col-span-12 lg:col-span-10"
              staggerLines
            >
              <span
                className="font-display italic text-navy block"
                style={{
                  fontSize: "clamp(1.6rem, 3.2vw, 2.95rem)",
                  lineHeight: 1.04,
                  letterSpacing: "-0.015em",
                  fontWeight: 400,
                }}
              >
                {isSr ? "Od pulta do zida —" : "From countertop to wall —"}
              </span>
              <span
                className="font-display italic block"
                style={{
                  fontSize: "clamp(1.6rem, 3.2vw, 2.95rem)",
                  lineHeight: 1.04,
                  letterSpacing: "-0.015em",
                  fontWeight: 400,
                  color: "var(--color-gold-text)",
                }}
              >
                {isSr ? "svaka vitrina, na svakoj temperaturi." : "every display, in every temperature."}
              </span>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-12 gap-6 mt-6 lg:mt-8">
            <div className="col-span-12 lg:col-start-2 lg:col-span-10 flex items-center gap-4">
              <span
                aria-hidden="true"
                style={{ backgroundColor: "var(--color-gold)" }}
                className="block h-px w-10 opacity-70"
              />
              <span
                className="font-sans text-navy/70"
                style={{
                  fontSize: "10px",
                  letterSpacing: "0.32em",
                  textTransform: "uppercase",
                  fontWeight: 500,
                }}
              >
                {isSr ? "MB Equipment — Reč kuće" : "MB Equipment — House Note"}
              </span>
              <span
                aria-hidden="true"
                style={{ backgroundColor: "var(--color-gold)" }}
                className="block h-px flex-1 opacity-30"
              />
              <span
                className="uppercase text-navy/55"
                style={{ fontSize: "10px", letterSpacing: "0.32em" }}
              >
                {isSr ? "Tabak 05 / 08" : "Folio 05 / 08"}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          CHAPTER VI — FAQ
         ───────────────────────────────────────────── */}
      <div className="bg-navy">
        <ChapterMark
          numeral="VI"
          label={isSr ? "Pre izlaganja" : "Before You Display"}
          caption={isSr ? "Šest pitanja, rešenih pre specifikacije." : "Six questions, settled before specification."}
          variant="dark"
        />
      </div>
      <FaqChapter
        variant="dark"
        heading={
          <>
            {isSr ? "Pre " : "Before "}
            <span
              className="italic font-normal"
              style={{ color: "var(--color-gold)" }}
            >
              {isSr ? "izlaganja." : "you display."}
            </span>
          </>
        }
        items={isSr ? [
          {
            q: "Plug-in ili remote rashlađivanje?",
            a: "Plug-in (ugrađeni kompresor) za pojedinačne instalacije — najjednostavnije, uključuje se u 16A utičnicu. Remote (spoljni kompresor) za supermarkete i pekarske zidove — tiše u front-of-house-u, ali zahteva mašinski deo za rashlađivanje.",
          },
          {
            q: "Šta je sa kvalitetom stakla?",
            a: "Savijeno termopan dvostruko staklo na svim premium vitrinama za poslastice (Infrico Niza/Lyon, Bartscher 400L). Standardno bezokvirno termopan na Tefcold vitrinama za pića. Antikondenzaciona ventilacija na Bartscher Deli-Cool.",
          },
          {
            q: "Da li je LED osvetljenje uključeno?",
            a: "Da — sve trenutne generacije. Dvonivovsko LED na Deli-Cool seriji, kombinacije toplog 2700K + hladnog 6000K na Infrico (po polici, konfigurabilno). Smanjuje potrošnju 80–90% u odnosu na staro osvetljenje, prema Infrico-u.",
          },
          {
            q: "Izbor rashladnog sredstva?",
            a: "JBG-2 plug-in jedinice koriste R290 / R600a. Tefcold serije prešle su na R290 u novim generacijama. Bartscher poslastičarske vitrine obično koriste R600a. Sve su prirodni ugljovodonici — F-Gas usaglašene za novu opremu od 2025.",
          },
          {
            q: "Koja je garancija?",
            a: "2 godine na većini jedinica (delovi + rad) ostvariva lokalno preko MB Equipment servisa. Garancija na kompresor često se produžava na 5 godina na odabranim modelima — potvrđuje se prilikom ponude.",
          },
          {
            q: "Rok isporuke?",
            a: "Stock jedinice (Tefcold standardno, Bartscher stoni) 1–2 nedelje. Custom Infrico konfiguracije 4–8 nedelja. JBG-2 remote multidekovi specifikovani po projektu, 6–10 nedelja.",
          },
        ] : [
          {
            q: "Plug-in or remote refrigeration?",
            a: "Plug-in (built-in compressor) for single-unit installs — simplest, plug into a 16A socket. Remote (external compressor) for supermarkets and bakery walls — quieter front-of-house, but requires a refrigeration plant room.",
          },
          {
            q: "What about glass quality?",
            a: "Curved tempered thermopane double-glazing on all premium patisserie units (Infrico Niza/Lyon, Bartscher 400L). Standard frameless tempered on Tefcold beverage merchandisers. Anti-condensation ventilation on Bartscher Deli-Cool.",
          },
          {
            q: "LED lighting included?",
            a: "Yes — all current generation units. 2-tier LED on Deli-Cool series, warm 2700K + cold 6000K combinations on Infrico (per shelf, configurable). Reduces consumption 80–90% vs legacy lighting per Infrico.",
          },
          {
            q: "Refrigerant choice?",
            a: "JBG-2 plug-ins use R290 / R600a. Tefcold ranges shifted to R290 across new generations. Bartscher patisserie commonly uses R600a. All are natural hydrocarbons — F-Gas compliant for new equipment from 2025.",
          },
          {
            q: "What's the warranty?",
            a: "2 years on most units (parts and labor) honored locally through MB Equipment service. Compressor warranty often extends to 5 years on selected models — confirmed at quote.",
          },
          {
            q: "Lead times?",
            a: "Stock units (Tefcold standard, Bartscher countertop) 1–2 weeks. Custom Infrico configurations 4–8 weeks. JBG-2 remote-system multidecks specified per project, 6–10 weeks.",
          },
        ]}
        pageUrl={pageUrl}
      />

      {/* ─────────────────────────────────────────────
          CHAPTER VII — CONVERSION TRIAD
         ───────────────────────────────────────────── */}
      <div className="bg-navy">
        <ChapterMark
          numeral="VII"
          label={isSr ? "Tri puta" : "Three Routes In"}
          caption={isSr ? "Ponuda, salon ili specifikacija — Vaš izbor." : "Quote, showroom, or spec sheet — the path is yours."}
          variant="dark"
        />
      </div>
      <CtaTriad
        locale={locale as Locale}
        productSlug="display-cases"
        variant="dark"
      />

      {/* ─────────────────────────────────────────────
          CHAPTER VIII — CTA + COLOPHON
         ───────────────────────────────────────────── */}
      <div className="bg-navy">
        <ChapterMark
          numeral="VIII"
          label={isSr ? "Sledeći korak" : "The Next Step"}
          caption={isSr ? "Pošaljite prostor, Vaše proizvode i režim rashlađivanja." : "Send your space, your products, and your refrigeration mode."}
          variant="dark"
        />
      </div>

      <section
        aria-labelledby="display-cases-cta"
        className="relative bg-navy text-white overflow-hidden"
        style={{
          paddingTop: "clamp(3rem, 6vw, 6rem)",
          paddingBottom: "clamp(3rem, 6vw, 6rem)",
        }}
      >
        <div
          aria-hidden="true"
          className="hidden lg:block absolute inset-y-0 left-0 right-0 mx-auto max-w-7xl px-6 pointer-events-none"
        >
          <div
            className="relative w-full h-full"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(201,168,76,0.12) 1px, transparent 1px)",
              backgroundSize: "calc(100% / 12) 100%",
            }}
          />
        </div>

        <div className="mx-auto max-w-7xl px-6 relative">
          <div
            aria-hidden="true"
            className="hidden lg:block absolute"
            style={{
              top: "-0.35em",
              right: "1.5rem",
              fontFamily: "var(--font-display), serif",
              fontStyle: "italic",
              fontSize: "clamp(4rem, 8vw, 7rem)",
              color: "var(--color-gold)",
              opacity: 0.22,
              lineHeight: 1,
              letterSpacing: "-0.03em",
            }}
          >
            VIII
          </div>

          <div className="grid grid-cols-12 gap-6 lg:gap-10">
            <div className="col-span-12 lg:col-span-8 relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <span
                  aria-hidden="true"
                  style={{ backgroundColor: "var(--color-gold)" }}
                  className="block h-px w-12"
                />
                <span
                  style={{
                    color: "var(--color-gold)",
                    letterSpacing: "0.32em",
                  }}
                  className="text-xs font-medium uppercase"
                >
                  {isSr ? "§ Specifikujte Vašu vitrinu" : "§ Specify Your Display"}
                </span>
              </div>

              <h2
                id="display-cases-cta"
                className="font-display font-bold text-white"
                style={{
                  fontSize: "clamp(2rem, 4.8vw, 4rem)",
                  lineHeight: 0.9,
                  letterSpacing: "-0.025em",
                }}
              >
                <ScrollReveal as="span" staggerLines style={{ display: "block" }}>
                  <span style={{ display: "block" }}>{isSr ? "Specifikujte" : "Specify"}</span>
                  <span
                    style={{
                      display: "block",
                      fontStyle: "italic",
                      fontWeight: 400,
                      color: "var(--color-gold)",
                      paddingLeft: "0.4em",
                    }}
                  >
                    {isSr ? "Vašu vitrinu." : "your display."}
                  </span>
                </ScrollReveal>
              </h2>

              <p
                className="text-white/75 font-light mt-6 lg:mt-8"
                style={{
                  fontSize: "clamp(1rem, 1.2vw, 1.125rem)",
                  lineHeight: 1.65,
                  maxWidth: "54ch",
                }}
              >
                {isSr ? <>Pošaljite Vaš prostor, proizvode i režim rashlađivanja
                — plug-in ili remote kondenzator — i specifikovaćemo pravu
                kombinaciju kroz četiri kuće.
                <span
                  className="font-display italic"
                  style={{ color: "var(--color-gold)" }}
                >
                  {" "}Ponuda se vraća u roku od jednog radnog dana.</span></> : <>Send us your space, your products, and your refrigeration mode
                — plug-in or remote condenser — and we&rsquo;ll spec the right
                combination across the four houses.
                <span
                  className="font-display italic"
                  style={{ color: "var(--color-gold)" }}
                >
                  {" "}
                  Quote returned within one business day.
                </span></>}
              </p>

              <div className="flex flex-wrap gap-4 mt-6 lg:mt-8">
                <Button variant="primary" href={`/${locale}/contact`}>
                  {dict.common.requestConsultation}
                </Button>
                <Button
                  variant="ghost-dark"
                  href={`/${locale}/demo-centers`}
                  arrow={false}
                >
                  {dict.common.bookDemo}
                </Button>
              </div>
            </div>

            {/* Colophon panel */}
            <aside className="col-span-12 lg:col-span-4 relative">
              <div
                className="lg:pl-8 lg:pt-4"
                style={{
                  borderTop: "1px solid rgba(201,168,76,0.35)",
                  paddingTop: "1.25rem",
                  marginTop: "1.5rem",
                }}
              >
                <div className="mb-5">
                  <span
                    className="block uppercase mb-2"
                    style={{
                      color: "var(--color-gold)",
                      fontSize: "10px",
                      letterSpacing: "0.34em",
                      fontWeight: 500,
                    }}
                  >
                    {isSr ? "Kolofon" : "Colophon"}
                  </span>
                  <p
                    className="font-display italic text-white"
                    style={{
                      fontSize: "clamp(1.5rem, 2.3vw, 2rem)",
                      lineHeight: 1.1,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {isSr ? "Ugnežden u Beogradu." : "Set in Belgrade."}
                  </p>
                </div>

                <Entry
                  label={isSr ? "Salon" : "Showroom"}
                  value={
                    <>
                      {COMPANY.address.street}
                      <br />
                      {COMPANY.address.zip} {COMPANY.address.city}
                    </>
                  }
                />
                <Entry label={isSr ? "Pokriće" : "Coverage"} value={isSr ? "Jugoistočna Evropa i šire." : "Southeast Europe & beyond."} />
                <Entry
                  label={isSr ? "Brendovi" : "Brands"}
                  value="JBG-2 · Infrico · Tefcold · Bartscher"
                />
                <Entry
                  label={isSr ? "Rashladna sredstva" : "Refrigerants"}
                  value={isSr ? "R290 / R600a (prirodna)." : "R290 / R600a (natural)."}
                />
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Closing running-meta */}
      <RunningMeta
        variant="light"
        folio={isSr ? "tabak 08 / 08" : "folio 08 / 08"}
        items={[
          isSr ? "Tom IV" : "Vol. IV",
          isSr ? "Kraj pogl. 02" : "End of Ch. 02",
          isSr ? "Vitrine" : "Display Cases",
          "JBG-2 · Infrico · Tefcold · Bartscher",
          isSr ? "Osn. MB Equipment" : "Est. MB Equipment",
        ]}
      />
    </>
  );
}

function Entry({
  label,
  value,
}: {
  label: string;
  value: React.ReactNode;
}) {
  return (
    <div
      style={{
        borderTop: "1px solid rgba(201,168,76,0.18)",
        paddingTop: "0.625rem",
        paddingBottom: "0.625rem",
      }}
    >
      <div className="grid grid-cols-12 gap-3 items-baseline">
        <span
          className="col-span-4 uppercase"
          style={{
            color: "var(--color-gold)",
            fontSize: "10px",
            letterSpacing: "0.3em",
            fontWeight: 500,
          }}
        >
          {label}
        </span>
        <p
          className="col-span-8 text-white/80 font-light"
          style={{ fontSize: "13px", lineHeight: 1.55 }}
        >
          {value}
        </p>
      </div>
    </div>
  );
}
