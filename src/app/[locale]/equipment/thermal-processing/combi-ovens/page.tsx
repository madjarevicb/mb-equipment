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
import {
  FaqChapter,
  CtaTriad,
  ModelsMatrix,
  AwardStrip,
  ROICalculator,
} from "@/components/equipment";

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

      {/* Heritage & certifications strip — sits below hero */}
      <AwardStrip
        variant="light"
        eyebrow="Pedigree"
        items={[
          {
            type: "heritage",
            label: "Houno · Since 1977",
            detail: "Randers, Denmark",
          },
          {
            type: "heritage",
            label: "Lincat · Since 1971",
            detail: "Lincoln, UK",
          },
          {
            type: "certification",
            label: "ISO 9001 + ISO 14001",
            detail: "Quality + Environment",
          },
          {
            type: "certification",
            label: "ENERGY STAR",
            detail: "Selected Invoq models",
          },
          {
            type: "award",
            label: "Middleby Group",
            detail: "Authorized partner",
          },
        ]}
      />

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

      {/* Chapter V — Specs scoreboard placeholder marker (existing structure) */}

      {/* Chapter VI — Model matrix */}
      <div className="bg-navy">
        <ChapterMark
          numeral="VI"
          label="Model Matrix"
          caption="Compare across the Invoq + CombiSlim range."
          variant="dark"
        />
      </div>
      <ModelsMatrix
        variant="dark"
        eyebrow="Side by side"
        heading={
          <>
            Four flagship{" "}
            <span
              className="italic font-normal"
              style={{ color: "var(--color-gold)" }}
            >
              configurations
            </span>
          </>
        }
        models={[
          {
            serial: "No. 01",
            name: "Invoq Combi 6-1/1 GN",
            brand: "Houno",
            imageSrc: "/images/houno-lincat/invoq-10-1gn-main.png",
            specSheetHref: "#",
          },
          {
            serial: "No. 02",
            name: "Invoq Combi 10-1/1 GN",
            brand: "Houno",
            imageSrc: "/images/houno-lincat/invoq-10-1gn-angle2.png",
            specSheetHref: "#",
          },
          {
            serial: "No. 03",
            name: "Invoq Combi 20-2/1 GN",
            brand: "Houno",
            imageSrc: "/images/houno-lincat/invoq-10-1gn-angle3.png",
            specSheetHref: "#",
          },
          {
            serial: "No. 04",
            name: "CombiSlim 1.10",
            brand: "Lincat",
            imageSrc: "/images/houno-lincat/lincat-combislim-110.jpg",
            specSheetHref: "#",
          },
        ]}
        specs={[
          {
            label: "Capacity",
            values: ["6× 1/1 GN", "10× 1/1 GN", "20× 2/1 GN", "10× 1/1 GN"],
          },
          {
            label: "Power",
            values: ["10.3 kW", "19.3 kW", "62.2 kW", "12.7 kW"],
          },
          {
            label: "Width",
            values: ["~870 mm", "~870 mm", "~880 mm", "513 mm (narrow)"],
          },
          {
            label: "Phase",
            values: [
              "1-phase / 3-phase",
              "3-phase",
              "3-phase 400V",
              "3-phase 400V",
            ],
          },
          {
            label: "Food load",
            values: ["~30 kg", "45 kg", "Industrial", "~30 kg"],
          },
          {
            label: "ENERGY STAR",
            values: ["—", "—", "Yes (US)", "Yes"],
          },
        ]}
        footnote="Verified against manufacturer datasheets. Phase, voltage and food-load specs site-dependent — confirm with MB Equipment during specification."
      />

      {/* Chapter VII — Cost & savings */}
      <div className="bg-offwhite">
        <ChapterMark
          numeral="VII"
          label="Cost & Savings"
          caption="Five cooking modes. Lower energy than legacy combis."
          variant="light"
        />
      </div>
      <ROICalculator
        variant="light"
        eyebrow="Operating economics"
        heading={
          <>
            What an Invoq{" "}
            <span
              className="italic font-normal"
              style={{ color: "var(--color-gold-text)" }}
            >
              actually saves
            </span>
          </>
        }
        intro="A worked example, not a quote. Manufacturer-stated reductions framed against a realistic mid-volume site so you can sanity-check the order of magnitude before specifying."
        example={{
          label: "Example: 200-cover restaurant",
          inputs: [
            { label: "Service volume", value: "200 covers/day, 6 days/week" },
            { label: "Operating window", value: "12 hours/day" },
            { label: "Current combi", value: "Legacy electric, 30 kW" },
          ],
          output: [
            {
              label: "Energy reduction (Houno claim)",
              value: "Up to 70% in steam mode",
            },
            {
              label: "Convection savings (Houno claim)",
              value: "19% less",
            },
            { label: "Water savings", value: "27% less" },
            { label: "Cleaning cost reduction", value: "70.7% less" },
          ],
          math: "All percentages stated by Houno vs previous-generation Invoq baseline. Site-specific savings vary with menu, water hardness, and operator behaviour.",
        }}
      />

      {/* Chapter VIII — FAQ */}
      <div className="bg-navy">
        <ChapterMark
          numeral="VIII"
          label="Questions"
          caption="Eight things buyers ask before specifying."
          variant="dark"
        />
      </div>
      <FaqChapter
        variant="dark"
        eyebrow="Before you specify"
        heading={
          <>
            Frequently{" "}
            <span
              className="italic font-normal"
              style={{ color: "var(--color-gold)" }}
            >
              asked
            </span>
          </>
        }
        pageUrl={pageUrl}
        items={[
          {
            q: "What is the difference between Invoq Combi and Invoq Hybrid?",
            a: "Invoq Combi uses injection steam — a steam jet hits the hot chamber. Invoq Hybrid adds a dedicated boiler that holds steam reserves, giving faster recovery and more precise humidity control. Hybrid is the choice for high-volume gastronomy and bakery.",
          },
          {
            q: "What three-phase power do I need?",
            a: "Invoq 6×1/1 runs single-phase or three-phase; the 10×1/1 needs 3-phase 400V at ~30A; the 20×2/1 GN needs 3-phase 400V at ~90A. CombiSlim 1.10 needs 3-phase 400V at ~21A per phase.",
          },
          {
            q: "Does descaling come included?",
            a: "All Invoq and CombiSlim models include CombiWash automatic cleaning with seven cycles. Descaling is on-screen guided. Hard water (above 3°dH) requires periodic descale per Houno's water-quality guidance.",
          },
          {
            q: "Can I monitor combi ovens remotely?",
            a: "Yes. Open Kitchen cloud connectivity is built in — fleet management, recipe distribution, predictive maintenance, HACCP logging. Free for the first 12 months on every Invoq.",
          },
          {
            q: "What's the warranty?",
            a: "Two years parts & labour through Middleby UK and authorized European dealers, plus extended service contracts available. MB Equipment honours warranty locally with Middleby-trained engineers.",
          },
          {
            q: "Why a narrow CombiSlim instead of full Invoq?",
            a: "CombiSlim is 513 mm wide — designed to slot into existing tight kitchen lines or pair as a satellite oven beside a full Invoq for à-la-carte / banquet split workflows.",
          },
          {
            q: "Are these ENERGY STAR certified?",
            a: "Selected models — Invoq Combi 20-2/1 GN is ENERGY STAR certified at 81% convection efficiency / 78% steam efficiency. CombiSlim 1.10 is ENERGY STAR + IPX4 + CE.",
          },
          {
            q: "How fast is installation?",
            a: "Two days typical for a single Invoq plus commissioning, plumbing, and chef walkthrough. Multi-site rollouts coordinated centrally — we've installed across Belgrade, Niš, and regional Southeast Europe.",
          },
        ]}
      />

      {/* Chapter IX — Three paths to specifying */}
      <div className="bg-navy">
        <ChapterMark
          numeral="IX"
          label="Three Paths"
          caption="Quote, demo, or spec sheet — pick the one that fits where you are."
          variant="dark"
        />
      </div>
      <CtaTriad
        locale={locale as Locale}
        productSlug="combi-ovens"
        catalogHref="#"
        variant="dark"
      />

      {/* Chapter X — CTA / colophon */}
      <div className="bg-navy">
        <ChapterMark
          numeral="X"
          label="The Next Step"
          caption="Send your menu volume, voltage and water hardness — we'll spec the Invoq or CombiSlim configuration."
          variant="dark"
        />
      </div>
      <CombiCta locale={locale as Locale} dict={dict} />
    </>
  );
}
