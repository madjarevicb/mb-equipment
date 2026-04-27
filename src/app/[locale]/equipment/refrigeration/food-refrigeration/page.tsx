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

const PAGE_TITLE_EN = "Upright & Undercounter Refrigeration | MB Equipment";
const PAGE_TITLE_SR = "Vertikalna i horizontalna rashladna oprema | MB";
const PAGE_DESC_EN =
  "Upright reach-in, undercounter, saladette and blast chillers from Dalmec, Desmon, Tefcold and Tecnodom. Authorized Middleby partner, Belgrade.";
const PAGE_DESC_SR =
  "Vertikalni i horizontalni frižideri, saladete i šokeri — Dalmec, Desmon, Tefcold, Tecnodom. Ovlašćeni Middleby partner, Beograd.";

const HERO_BLUR =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiMwYTE2MjgiLz48L3N2Zz4=";

// ---- The four houses ---------------------------------------------------------

const HOUSES = [
  {
    name: "Dalmec",
    origin: "Istrana, Italy",
    founded: "Est. 2012",
    parent: "Dal Santo Industries",
    note:
      "Italian artisan house with the deepest format catalogue — saladettes, retarder proofers, pizza counters across 700+ SKUs.",
    spec: "AISI 304 · 80 mm PU · HFO blowing agent · Climate Class 5",
    badge: "700+ SKU breadth",
  },
  {
    name: "Desmon",
    origin: "Nusco, Italy",
    founded: "Est. 1994",
    parent: "Middleby Corporation since 22 Dec 2014",
    note:
      "Reach-in cabinets, undercounter PTGM, walk-in cold rooms and the GBF blast-chiller flagship — ISO 9001 + ISO 14001.",
    spec: "AISI 304 · cyclopentane foam · UV cycle on blast chillers",
    badge: "Middleby pedigree",
  },
  {
    name: "Tefcold",
    origin: "Viborg, Denmark",
    founded: "Est. 1987",
    parent: "Christensen family — independent",
    note:
      "Danish family house — UR uprights, UF undercounters, modular cold rooms. Sustainability leader on R290 propane refrigerant.",
    spec: "R290 (GWP = 3) · in-house Viborg lab · CE / EU energy label",
    badge: "R290 leadership",
  },
  {
    name: "Tecnodom",
    origin: "Vigodarzere (Padova), Italy",
    founded: "Est. 1996",
    parent: "Independent Italian S.p.A.",
    note:
      "Italian mid-premium — ARMADIO uprights, TAVOLO counters, marble-top SLV02C6 saladette, ATTILA / ALADINO blast chillers.",
    spec: "AISI 304 · ventilated cooling · marble / granite worktop options",
    badge: "Marble saladettes",
  },
];

// ---- Format ledger -----------------------------------------------------------

interface Format {
  serial: string;
  name: string;
  descriptor: string;
  brands: string;
}

const FORMATS: Format[] = [
  {
    serial: "No. 01",
    name: "Reach-in upright refrigerators",
    descriptor:
      "Single, double and triple-door cabinets — full GN compatibility, ventilated cooling, magnetic gaskets.",
    brands: "Dalmec · Desmon PGM · Tefcold UR · Tecnodom ARMADIO",
  },
  {
    serial: "No. 02",
    name: "Reach-in upright freezers",
    descriptor:
      "Negative-temperature cabinets for frozen storage and prep — heated gaskets, automatic defrost.",
    brands: "Dalmec · Desmon · Tefcold UF · Tecnodom ARMADIO",
  },
  {
    serial: "No. 03",
    name: "Undercounter refrigerators",
    descriptor:
      "Two- or three-door units that slot under prep counters — bench depth, ventilated cooling.",
    brands: "Dalmec · Desmon PTGM2 / PTGM3 · Tefcold UD · Tecnodom",
  },
  {
    serial: "No. 04",
    name: "Undercounter freezers",
    descriptor:
      "Negative-temperature undercounter units for ice-cream, frozen prep and proteins held at the line.",
    brands: "Dalmec · Desmon · Tefcold UF200s",
  },
  {
    serial: "No. 05",
    name: "Saladette prep tables",
    descriptor:
      "Refrigerated bases with GN 1/1 or 1/3 wells under stainless, granite or marble worktops.",
    brands: "Dalmec · Tecnodom SLV02C6 (2-door, 6 GN, marble top)",
  },
  {
    serial: "No. 06",
    name: "Pizza prep counters",
    descriptor:
      "Marble or granite worktops, refrigerated ingredient wells, dough drawers — Dalmec specialty.",
    brands: "Dalmec · Tecnodom",
  },
  {
    serial: "No. 07",
    name: "Blast chillers / shock freezers",
    descriptor:
      "5, 10, 15 and 20-pan capacities — heated core probe, UV cycle, soft / hard chilling profiles.",
    brands: "Desmon GBF flagship · Dalmec · Tecnodom ATTILA / ALADINO",
  },
  {
    serial: "No. 08",
    name: "Retarder proofer cabinets",
    descriptor:
      "Two-stage cabinets for controlled dough retardation and proofing — Dalmec specialty.",
    brands: "Dalmec",
  },
  {
    serial: "No. 09",
    name: "Refrigerated drawer units",
    descriptor:
      "Drawer-style chassis for the line — fast access, low profile, GN-compatible.",
    brands: "Desmon · Dalmec",
  },
];

// ---- Metadata ----------------------------------------------------------------

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
      "upright refrigerator commercial",
      "undercounter refrigerator commercial",
      "reach-in refrigerator",
      "saladette prep table",
      "pizza prep counter",
      "blast chiller commercial",
      "shock freezer",
      "retarder proofer cabinet",
      "Dalmec refrigeration",
      "Desmon GBF blast chiller",
      "Tefcold R290",
      "Tecnodom ARMADIO",
      "Middleby authorized partner",
      "vertikalna rashladna oprema",
      "horizontalna rashladna oprema",
      "saladeta",
      "šoker za hlađenje",
    ],
    alternates: {
      canonical: `/${locale}/equipment/refrigeration/food-refrigeration`,
      languages: {
        en: "/en/equipment/refrigeration/food-refrigeration",
        sr: "/sr/equipment/refrigeration/food-refrigeration",
        "x-default": "/en/equipment/refrigeration/food-refrigeration",
      },
    },
    openGraph: {
      title: PAGE_TITLE,
      description: PAGE_DESC,
      url: `${COMPANY.url}/${locale}/equipment/refrigeration/food-refrigeration`,
      siteName: COMPANY.name,
      locale: isSr ? "sr_RS" : "en_US",
      type: "website",
      images: [
        {
          url: `${COMPANY.url}/images/whatwedo/beverage.jpg`,
          width: 1200,
          height: 630,
          alt: "Upright and undercounter commercial refrigeration",
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

// ---- Page --------------------------------------------------------------------

export default async function UprightUndercounterPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const isSr = locale === "sr";
  const PAGE_TITLE = isSr ? PAGE_TITLE_SR : PAGE_TITLE_EN;
  const PAGE_DESC = isSr ? PAGE_DESC_SR : PAGE_DESC_EN;
  const pageUrl = `${COMPANY.url}/${locale}/equipment/refrigeration/food-refrigeration`;

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
        ],
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: `${COMPANY.url}/images/upright/desmon-pgm14.png`,
          width: 1200,
          height: 1200,
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
            name: dict.nav.foodRefrigeration,
          },
        ],
      },
      {
        "@type": "ItemList",
        "@id": `${pageUrl}#formats`,
        name: isSr
          ? "Formati rashladne opreme"
          : "Refrigeration form factors",
        numberOfItems: FORMATS.length,
        itemListElement: FORMATS.map((f, i) => ({
          "@type": "ListItem",
          position: i + 1,
          item: {
            "@type": "Product",
            name: f.name,
            description: f.descriptor,
            category: "Commercial refrigeration",
          },
        })),
      },
      {
        "@type": "Brand",
        "@id": `${pageUrl}#dalmec`,
        name: "Dalmec",
        description:
          "Italian refrigeration manufacturer founded 2012 in Istrana, Treviso. Parent: Dal Santo Industries. 700+ SKU range across upright, undercounter, saladette, pizza counter, blast chiller and retarder proofer formats.",
      },
      {
        "@type": "Brand",
        "@id": `${pageUrl}#desmon`,
        name: "Desmon",
        url: "https://www.desmon.com/",
        description:
          "Italian refrigeration manufacturer founded 1994 in Nusco (Avellino). Acquired by Middleby Corporation on 22 December 2014. 300+ refrigerator and freezer models including the GBF blast-chiller line.",
        manufacturer: {
          "@type": "Corporation",
          name: "Middleby Corporation",
          url: "https://www.middleby.com",
        },
      },
      {
        "@type": "Brand",
        "@id": `${pageUrl}#tefcold`,
        name: "Tefcold",
        url: "https://tefcold.com/",
        description:
          "Danish refrigeration manufacturer founded 1987 in Viborg by Frede and Torben Christensen. Family-owned, sells in 100+ countries. R290 (propane) natural-refrigerant leader.",
      },
      {
        "@type": "Brand",
        "@id": `${pageUrl}#tecnodom`,
        name: "Tecnodom",
        url: "https://www.tecnodomspa.com/",
        description:
          "Italian refrigeration and cooking-systems manufacturer founded 1996 in Vigodarzere (Padova). Independent S.p.A., exports to 50+ countries. ARMADIO uprights, marble-top SLV02C6 saladette, ATTILA / ALADINO blast chillers.",
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

      {/* ===========================================================
          CHAPTER I — HERO
         =========================================================== */}
      <section
        aria-labelledby="upright-hero"
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
            folio 01 / 08
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
            { label: dict.nav.foodRefrigeration },
          ]}
        />

        <RunningMeta
          variant="dark"
          folio="Ed. 2026"
          items={[
            "Vol. IV",
            "Ch. 01 — Refrigeration",
            "Dalmec",
            "Desmon",
            "Tefcold",
            "Tecnodom",
          ]}
        />

        {/* 12-column grid rules */}
        <div
          aria-hidden="true"
          className="hidden lg:block absolute inset-y-0 left-0 right-0 mx-auto max-w-7xl px-6 pointer-events-none"
        >
          <div
            className="relative w-full h-full"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(201,168,76,0.10) 1px, transparent 1px)",
              backgroundSize: "calc(100% / 12) 100%",
            }}
          />
        </div>

        <div
          className="relative mx-auto max-w-7xl px-6"
          style={{
            paddingTop: "clamp(1.75rem, 3vw, 2.75rem)",
            paddingBottom: "clamp(2.5rem, 4rem, 4rem)",
          }}
        >
          <div className="grid grid-cols-12 gap-6 lg:gap-10 items-start">
            {/* Headline */}
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
                    opacity: 0.10,
                    letterSpacing: "-0.05em",
                    zIndex: 0,
                  }}
                >
                  01
                </span>

                <h1
                  id="upright-hero"
                  className="font-display text-white relative"
                  style={{
                    fontSize: "clamp(2.5rem, 6.5vw, 5.25rem)",
                    lineHeight: 0.9,
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
                    <span style={{ display: "block" }}>Upright &amp;</span>
                    <span style={{ display: "block" }}>undercounter —</span>
                    <span style={{ display: "block" }}>
                      for{" "}
                      <span
                        style={{
                          fontStyle: "italic",
                          fontWeight: 400,
                          color: "var(--color-gold)",
                        }}
                      >
                        everything
                      </span>
                    </span>
                    <span style={{ display: "block" }}>
                      that has to stay cold
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

            {/* Plate tag */}
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
                  Plate No. 01 —{" "}
                  <span style={{ color: "rgba(255,255,255,0.7)" }}>
                    Italy &amp; Denmark &rarr; Belgrade.
                  </span>
                </p>
              </div>
            </aside>
          </div>

          {/* Lower band — drop-cap lede + hero image */}
          <div className="grid grid-cols-12 gap-6 lg:gap-10 mt-8 lg:mt-12 items-start">
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
                &sect; Editor&rsquo;s Note
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
                  F
                </span>
                our manufacturers &mdash; three Italian, one Danish &mdash;
                covering every form factor a kitchen needs cold: reach-in
                upright, undercounter prep, saladette, blast chiller. Engineered
                for kitchens that don&rsquo;t stop.
              </p>
            </div>

            <div className="col-span-12 lg:col-span-7 relative">
              <figure className="relative">
                <div
                  className="relative overflow-hidden"
                  style={{
                    aspectRatio: "16 / 10",
                    marginRight:
                      "calc(-1 * max((100vw - 80rem) / 2, 0px) - 1.5rem)",
                    backgroundColor: "#0a1628",
                  }}
                >
                  <Image
                    src="/images/upright/desmon-pgm14.png"
                    alt="Desmon PGM14 double-door upright refrigerator — representative of the upright reach-in form factor"
                    fill
                    priority
                    fetchPriority="high"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    placeholder="blur"
                    blurDataURL={HERO_BLUR}
                    className="object-contain"
                    style={{
                      padding: "clamp(1.5rem, 3vw, 3rem)",
                    }}
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background:
                        "radial-gradient(ellipse at center, transparent 40%, rgba(10,22,40,0.55) 100%)",
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
                      Desmon PGM14 — Upright reach-in
                    </span>
                    <span
                      className="font-display italic"
                      style={{
                        color: "var(--color-gold)",
                        fontSize: "11px",
                        letterSpacing: "0.2em",
                      }}
                    >
                      &mdash; Nusco &times; MB Eq.
                    </span>
                  </figcaption>
                </div>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* ===========================================================
          CHAPTER II — HERITAGE & STANDARDS
         =========================================================== */}
      <div className="bg-offwhite">
        <ChapterMark
          numeral="II"
          label="Heritage & Standards"
          caption="Three Italian houses, one Danish — and the standards behind them."
          variant="light"
        />
        <AwardStrip
          variant="light"
          items={[
            {
              type: "heritage",
              label: "Tefcold · Since 1987",
              detail: "Viborg, Denmark",
            },
            {
              type: "heritage",
              label: "Desmon · Since 1994",
              detail: "Nusco, Italy",
            },
            {
              type: "heritage",
              label: "Tecnodom · Since 1996",
              detail: "Vigodarzere, Italy",
            },
            {
              type: "heritage",
              label: "Dalmec · Since 2012",
              detail: "Istrana, Italy",
            },
            {
              type: "certification",
              label: "Middleby (Desmon)",
              detail: "Acquired Dec 2014",
            },
            {
              type: "certification",
              label: "R290 leadership",
              detail: "Tefcold natural refrigerant",
            },
          ]}
        />
      </div>

      {/* ===========================================================
          CHAPTER III — THE FOUR HOUSES
         =========================================================== */}
      <div className="bg-offwhite">
        <ChapterMark
          numeral="III"
          label="The Four Houses"
          caption="Three Italian, one Danish — every cold form factor under one authorized partnership."
          variant="light"
        />
      </div>

      <section
        aria-labelledby="four-houses"
        className="relative bg-offwhite"
        style={{
          paddingTop: "clamp(2.5rem, 4vw, 4rem)",
          paddingBottom: "clamp(3rem, 5.5vw, 5.5rem)",
        }}
      >
        <div className="mx-auto max-w-7xl px-6 relative">
          <div className="grid grid-cols-12 gap-6 lg:gap-10 items-end">
            <div className="col-span-12 lg:col-span-8">
              <div className="flex items-center gap-4 mb-6">
                <span
                  aria-hidden="true"
                  style={{ backgroundColor: "var(--color-gold-text)" }}
                  className="block h-px w-12 opacity-70"
                />
                <span
                  style={{
                    color: "var(--color-gold-text)",
                    letterSpacing: "0.32em",
                  }}
                  className="text-xs font-medium uppercase"
                >
                  Four houses — single source
                </span>
              </div>
              <ScrollReveal>
                <h2
                  id="four-houses"
                  className="font-display font-bold text-navy"
                  style={{
                    fontSize: "clamp(1.75rem, 3.8vw, 3rem)",
                    lineHeight: 0.94,
                    letterSpacing: "-0.02em",
                  }}
                >
                  Italian craft,{" "}
                  <span
                    className="italic font-normal"
                    style={{ color: "var(--color-gold-text)" }}
                  >
                    Danish discipline.
                  </span>
                </h2>
              </ScrollReveal>
            </div>
            <div className="col-span-12 lg:col-span-4 lg:pb-3">
              <p
                className="text-navy/70 font-light"
                style={{
                  fontSize: "14px",
                  lineHeight: 1.65,
                  maxWidth: "32ch",
                  fontStyle: "italic",
                  fontFamily: "var(--font-display), serif",
                }}
              >
                Single source — all four brands distributed, installed and
                serviced under MB Equipment&rsquo;s authorized partnership.
              </p>
            </div>
          </div>

          <div
            style={{
              borderTop: "1px solid rgba(10,22,40,0.14)",
              marginTop: "clamp(1.75rem, 3vw, 2.5rem)",
              marginBottom: "clamp(1.75rem, 3vw, 2.5rem)",
            }}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-navy/10">
            {HOUSES.map((h, i) => (
              <article
                key={h.name}
                className="bg-offwhite relative"
                style={{
                  padding: "clamp(1.75rem, 3vw, 2.5rem)",
                }}
              >
                {/* serial */}
                <div className="flex items-baseline justify-between mb-6">
                  <span
                    className="font-display italic"
                    style={{
                      color: "var(--color-gold-text)",
                      fontSize: "13px",
                      letterSpacing: "0.12em",
                    }}
                  >
                    No. 0{i + 1}
                  </span>
                  <span
                    className="uppercase font-medium"
                    style={{
                      color: "rgba(10,22,40,0.45)",
                      fontSize: "10px",
                      letterSpacing: "0.32em",
                    }}
                  >
                    {h.founded}
                  </span>
                </div>

                <h3
                  className="font-display text-navy"
                  style={{
                    fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                    lineHeight: 0.95,
                    letterSpacing: "-0.015em",
                    fontWeight: 700,
                  }}
                >
                  {h.name}
                </h3>

                <p
                  className="font-display italic mt-2"
                  style={{
                    color: "var(--color-gold-text)",
                    fontSize: "14px",
                    letterSpacing: "0.02em",
                  }}
                >
                  {h.origin}
                </p>

                <div
                  aria-hidden="true"
                  style={{
                    backgroundColor: "var(--color-gold)",
                    height: "1px",
                    width: "48px",
                    opacity: 0.6,
                    margin: "1.25rem 0",
                  }}
                />

                <p
                  className="text-navy/75 font-light"
                  style={{
                    fontSize: "14px",
                    lineHeight: 1.6,
                    maxWidth: "44ch",
                  }}
                >
                  {h.note}
                </p>

                <p
                  className="mt-5 font-light"
                  style={{
                    color: "rgba(10,22,40,0.55)",
                    fontSize: "12px",
                    lineHeight: 1.55,
                    fontStyle: "italic",
                    fontFamily: "var(--font-display), serif",
                  }}
                >
                  {h.spec}
                </p>

                <div className="mt-6 flex items-center justify-between">
                  <span
                    className="uppercase font-medium"
                    style={{
                      color: "rgba(10,22,40,0.55)",
                      fontSize: "10px",
                      letterSpacing: "0.28em",
                    }}
                  >
                    {h.parent}
                  </span>
                  <span
                    className="font-display italic"
                    style={{
                      color: "var(--color-gold-text)",
                      fontSize: "12px",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {h.badge}
                  </span>
                </div>
              </article>
            ))}
          </div>

          {/* Brand wordmark strip */}
          <div className="mt-12 lg:mt-16">
            <div
              aria-hidden="true"
              style={{
                borderTop: "1px solid rgba(10,22,40,0.12)",
                paddingTop: "clamp(1.5rem, 2.5vw, 2rem)",
              }}
            >
              <div className="flex flex-wrap items-baseline justify-between gap-y-4 gap-x-8">
                {HOUSES.map((h) => (
                  <span
                    key={`mark-${h.name}`}
                    className="font-display italic"
                    style={{
                      color: "var(--color-gold-text)",
                      fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                      letterSpacing: "0.02em",
                      opacity: 0.85,
                    }}
                  >
                    {h.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===========================================================
          CHAPTER IV — THE FORMAT LEDGER
         =========================================================== */}
      <div className="bg-navy">
        <ChapterMark
          numeral="IV"
          label="The Format Ledger"
          caption="Nine refrigeration form factors — every box, well, drawer and chamber the line needs."
          variant="dark"
        />
      </div>

      <section
        aria-labelledby="format-ledger"
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
                  The Format Ledger — Nine Form Factors
                </span>
              </div>
              <ScrollReveal>
                <h2
                  id="format-ledger"
                  className="font-display font-bold text-white"
                  style={{
                    fontSize: "clamp(1.75rem, 3.8vw, 3rem)",
                    lineHeight: 0.92,
                    letterSpacing: "-0.02em",
                  }}
                >
                  Every cold format,
                  <br />
                  <span
                    className="italic font-normal"
                    style={{ color: "var(--color-gold)" }}
                  >
                    one specification sheet.
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
                Brand options listed per form factor — each can be specified to
                volume, ambient class and refrigerant preference.
              </p>
            </div>
          </div>

          <div
            style={{
              borderTop: "1px solid rgba(201,168,76,0.35)",
              marginTop: "clamp(1.75rem, 3vw, 2.5rem)",
            }}
          />

          <ol>
            {FORMATS.map((f) => (
              <li
                key={f.serial}
                style={{ borderBottom: "1px solid rgba(201,168,76,0.2)" }}
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
                      {f.serial}
                    </span>
                  </div>

                  <div className="col-span-9 md:col-span-7 lg:col-span-6">
                    <span
                      className="font-display text-white block"
                      style={{
                        fontSize: "clamp(1.25rem, 2.4vw, 1.95rem)",
                        lineHeight: 1,
                        letterSpacing: "-0.01em",
                        fontWeight: 400,
                        fontStyle: "italic",
                      }}
                    >
                      {f.name}
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
                      {f.descriptor}
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
                      {f.brands}
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ol>

          {/* Caveat */}
          <div className="mt-7 lg:mt-9 grid grid-cols-12 gap-6">
            <div className="col-span-12 lg:col-span-9 flex items-start gap-4">
              <span
                aria-hidden="true"
                className="font-display italic"
                style={{
                  color: "var(--color-gold)",
                  fontSize: "14px",
                  lineHeight: 1,
                  paddingTop: "0.1em",
                }}
              >
                &#9758;
              </span>
              <span
                className="text-white/55 font-light"
                style={{
                  fontSize: "12.5px",
                  lineHeight: 1.6,
                }}
              >
                Refrigerant lineup is mixed across the four houses: Tefcold
                leads on R290 (propane, GWP = 3); Tecnodom uses R452A on
                selected SKUs; Dalmec ships HFO blowing-agent insulation on the
                cabinet shell. Specify ambient class and refrigerant target with
                your enquiry.
              </span>
            </div>
            <div className="col-span-12 lg:col-span-3 lg:text-right flex lg:justify-end items-center">
              <span
                className="uppercase text-white/45"
                style={{
                  fontSize: "10px",
                  letterSpacing: "0.32em",
                }}
              >
                Folio 05 / 08
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ===========================================================
          CHAPTER V — NUMBERS + PULL QUOTE
         =========================================================== */}
      <div className="bg-offwhite">
        <ChapterMark
          numeral="V"
          label="House Note"
          caption="On scale, sustainability, and the climate the line has to live in."
          variant="light"
        />
      </div>

      <section
        aria-labelledby="numbers"
        className="relative bg-offwhite"
        style={{
          paddingTop: "clamp(2.5rem, 4vw, 4rem)",
          paddingBottom: "clamp(3rem, 5.5vw, 5.5rem)",
        }}
      >
        <div className="mx-auto max-w-7xl px-6 relative">
          {/* Scoreboard */}
          <h2 id="numbers" className="sr-only">
            Refrigeration scoreboard
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-navy/10">
            {[
              {
                k: "300+",
                l: "Desmon model variants",
                s: "Refrigerators &amp; freezers",
              },
              {
                k: "700+",
                l: "Dalmec SKUs",
                s: "Deepest format catalogue",
              },
              {
                k: "R290",
                l: "Tefcold leadership",
                s: "Natural refrigerant · GWP = 3",
              },
              {
                k: "Class 5",
                l: "+40 °C / 40 % RH",
                s: "Tropical-ready ambient",
              },
            ].map((stat) => (
              <div
                key={stat.l}
                className="bg-offwhite relative"
                style={{
                  padding: "clamp(1.5rem, 2.5vw, 2.25rem)",
                }}
              >
                <span
                  className="font-display block"
                  style={{
                    color: "var(--color-navy)",
                    fontSize: "clamp(2rem, 4vw, 3.25rem)",
                    fontWeight: 700,
                    lineHeight: 0.9,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {stat.k}
                </span>
                <span
                  className="font-display italic block mt-3"
                  style={{
                    color: "var(--color-gold-text)",
                    fontSize: "14px",
                    letterSpacing: "0.01em",
                  }}
                >
                  {stat.l}
                </span>
                <span
                  className="block mt-2"
                  style={{
                    color: "rgba(10,22,40,0.55)",
                    fontSize: "11px",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    fontWeight: 500,
                  }}
                  dangerouslySetInnerHTML={{ __html: stat.s }}
                />
              </div>
            ))}
          </div>

          {/* Pull quote */}
          <div
            className="grid grid-cols-12 gap-6 relative"
            style={{
              marginTop: "clamp(3rem, 5vw, 5rem)",
            }}
          >
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
                aria-hidden="true"
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
                  fontSize: "clamp(1.75rem, 3.5vw, 3.25rem)",
                  lineHeight: 1.02,
                  letterSpacing: "-0.015em",
                  fontWeight: 400,
                }}
              >
                Cold storage built
              </span>
              <span
                className="font-display italic block"
                style={{
                  fontSize: "clamp(1.75rem, 3.5vw, 3.25rem)",
                  lineHeight: 1.02,
                  letterSpacing: "-0.015em",
                  fontWeight: 400,
                  color: "var(--color-gold-text)",
                }}
              >
                for kitchens that don&rsquo;t stop.
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
                MB Equipment — House Note
              </span>
            </div>
          </div>

          {/* Sub-product gallery — Desmon range */}
          <div
            className="mt-16 lg:mt-20 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-px bg-navy/10"
            aria-label="Representative Desmon equipment"
          >
            {[
              {
                src: "/images/upright/desmon-gbf15.png",
                label: "GBF-15",
                cap: "15-pan blast chiller",
              },
              {
                src: "/images/upright/desmon-gbf5p.png",
                label: "GBF-5P",
                cap: "5-pan blast chiller",
              },
              {
                src: "/images/upright/desmon-pgm7.png",
                label: "PGM7",
                cap: "Single-door upright",
              },
              {
                src: "/images/upright/desmon-ptgm2.png",
                label: "PTGM2",
                cap: "Two-door undercounter",
              },
              {
                src: "/images/upright/desmon-ptgm3.png",
                label: "PTGM3",
                cap: "Three-door undercounter",
              },
            ].map((p) => (
              <figure
                key={p.label}
                className="bg-offwhite relative"
                style={{
                  padding: "clamp(0.75rem, 1.5vw, 1.25rem)",
                }}
              >
                <div
                  className="relative"
                  style={{
                    aspectRatio: "1 / 1",
                  }}
                >
                  <Image
                    src={p.src}
                    alt={`Desmon ${p.label} — ${p.cap}`}
                    fill
                    loading="lazy"
                    sizes="(max-width: 768px) 50vw, 20vw"
                    className="object-contain"
                  />
                </div>
                <figcaption className="mt-3 flex items-baseline justify-between gap-2">
                  <span
                    className="font-display italic"
                    style={{
                      color: "var(--color-gold-text)",
                      fontSize: "13px",
                      letterSpacing: "0.04em",
                    }}
                  >
                    {p.label}
                  </span>
                  <span
                    className="uppercase font-medium"
                    style={{
                      color: "rgba(10,22,40,0.55)",
                      fontSize: "9.5px",
                      letterSpacing: "0.22em",
                    }}
                  >
                    {p.cap}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>

          <p
            className="mt-4 text-navy/55 font-light"
            style={{
              fontSize: "11.5px",
              lineHeight: 1.6,
              fontStyle: "italic",
              fontFamily: "var(--font-display), serif",
            }}
          >
            Representative Desmon equipment shown — full Dalmec, Tefcold and
            Tecnodom catalogues available on request.
          </p>
        </div>
      </section>

      {/* ===========================================================
          CHAPTER VI — FAQ
         =========================================================== */}
      <div className="bg-navy">
        <ChapterMark
          numeral="VI"
          label="Before You Specify"
          caption="Six engineering questions, settled before quote."
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
              specifying.
            </span>
          </>
        }
        items={[
          {
            q: "Reach-in vs undercounter — when?",
            a: "Reach-in upright (1/2/3-door, 400–1400 L) for back-of-house bulk storage. Undercounter (Desmon PTGM, Tefcold UD) for line-side prep where chefs need cold ingredients within arm's reach.",
          },
          {
            q: "When do I need a blast chiller?",
            a: "Any HACCP-driven kitchen processing more than ~50 covers/day benefits — chilling cooked food from +90°C to +3°C in <90 min preserves quality and meets food-safety law. Desmon GBF-15 is the workhorse.",
          },
          {
            q: "Saladette vs prep counter?",
            a: "Saladette has 1/1 or 1/3 GN wells in the worktop for ingredient access (pizza, sandwich, salad lines). Prep counter has solid worktop. Both are refrigerated underneath. Dalmec and Tecnodom specialize in saladettes.",
          },
          {
            q: "AISI 304 or AISI 316?",
            a: "AISI 304 standard across all four brands — food-grade, corrosion-resistant. AISI 316 only when chemical exposure or marine air applies. None of the four brands offer 316 as standard for upright; specify if needed.",
          },
          {
            q: "What about energy class?",
            a: "Tefcold publishes EU energy labels per SKU; current generations are typically Class B–C. Desmon is upgrading to lower-GWP refrigerants for EU. Tecnodom mixed (R452A on some SKUs). Per-SKU confirmation at quote.",
          },
          {
            q: "Lead times and warranty?",
            a: "Stock 2–4 weeks (Tefcold UR/UF, common Desmon SKUs). Custom configurations 6–10 weeks. Warranty 2 years parts and labour standard; compressor often extends to 5.",
          },
        ]}
        pageUrl={pageUrl}
      />

      {/* ===========================================================
          CHAPTER VII — CONVERSION TRIAD
         =========================================================== */}
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
        productSlug="upright-undercounter"
        variant="dark"
      />

      {/* ===========================================================
          CHAPTER VIII — CTA + COLOPHON
         =========================================================== */}
      <div className="bg-navy">
        <ChapterMark
          numeral="VIII"
          label="The Next Step"
          caption="Send volume, format mix and ambient — we&rsquo;ll spec across the four houses."
          variant="dark"
        />
      </div>

      <section
        aria-labelledby="cta-heading"
        className="relative bg-navy text-white"
        style={{
          paddingTop: "clamp(2.5rem, 4vw, 4rem)",
          paddingBottom: "clamp(3rem, 5.5vw, 5.5rem)",
        }}
      >
        <div className="mx-auto max-w-7xl px-6 relative">
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
                  Specify your refrigeration
                </span>
              </div>
              <ScrollReveal>
                <h2
                  id="cta-heading"
                  className="font-display font-bold text-white"
                  style={{
                    fontSize: "clamp(2rem, 5vw, 4rem)",
                    lineHeight: 0.92,
                    letterSpacing: "-0.02em",
                  }}
                >
                  Specify your
                  <br />
                  <span
                    className="italic font-normal"
                    style={{ color: "var(--color-gold)" }}
                  >
                    refrigeration.
                  </span>
                </h2>
              </ScrollReveal>
              <p
                className="text-white/70 font-light mt-6 lg:mt-8"
                style={{
                  fontSize: "clamp(1rem, 1.15vw, 1.125rem)",
                  lineHeight: 1.6,
                  maxWidth: "52ch",
                }}
              >
                Send us your kitchen volume, format mix and ambient conditions
                &mdash; we&rsquo;ll spec across the four houses and deliver a
                single proposal with refrigerant, energy class, and timeline.
              </p>

              <div className="flex flex-wrap gap-4 mt-8 lg:mt-10">
                <Button variant="primary" href={`/${locale}/contact`}>
                  {dict.common.requestConsultation}
                </Button>
                <Button
                  variant="ghost-dark"
                  href={`/${locale}/contact`}
                  arrow={false}
                >
                  {dict.common.bookDemo}
                </Button>
              </div>
            </div>

            {/* Colophon */}
            <aside className="col-span-12 lg:col-span-4 lg:col-start-9">
              <div
                style={{
                  borderTop: "1px solid rgba(201,168,76,0.35)",
                  paddingTop: "clamp(1.25rem, 2vw, 1.75rem)",
                }}
              >
                <span
                  className="font-display italic block mb-5"
                  style={{
                    color: "var(--color-gold)",
                    fontSize: "13px",
                    letterSpacing: "0.1em",
                  }}
                >
                  Colophon
                </span>

                <dl className="space-y-4">
                  {[
                    {
                      term: "Showroom",
                      def: `${COMPANY.address.street}, ${COMPANY.address.city}`,
                    },
                    {
                      term: "Coverage",
                      def: "Southeast Europe",
                    },
                    {
                      term: "Brands",
                      def: "Dalmec · Desmon · Tefcold · Tecnodom",
                    },
                    {
                      term: "Refrigerants",
                      def: "R290 / HFO available",
                    },
                  ].map((row) => (
                    <div
                      key={row.term}
                      className="grid grid-cols-12 gap-3 items-baseline"
                    >
                      <dt
                        className="col-span-4 uppercase font-medium"
                        style={{
                          color: "rgba(255,255,255,0.5)",
                          fontSize: "10px",
                          letterSpacing: "0.28em",
                        }}
                      >
                        {row.term}
                      </dt>
                      <dd
                        className="col-span-8 text-white/80 font-light"
                        style={{
                          fontSize: "13px",
                          lineHeight: 1.55,
                          fontStyle: "italic",
                          fontFamily: "var(--font-display), serif",
                        }}
                      >
                        {row.def}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </aside>
          </div>
        </div>

        {/* Closing running meta */}
        <div className="mt-12 lg:mt-16">
          <RunningMeta
            variant="dark"
            folio="Folio 08 / 08"
            items={[
              "End of Ch. 01",
              "Refrigeration",
              "MB Equipment Solutions",
              "Belgrade",
            ]}
          />
        </div>
      </section>
    </>
  );
}
