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
      "profesionalna parno-konvekcijska peć",
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
        eyebrow={isSr ? "Poreklo" : "Pedigree"}
        items={[
          {
            type: "heritage",
            label: isSr ? "Houno · Od 1977." : "Houno · Since 1977",
            detail: isSr ? "Randers, Danska" : "Randers, Denmark",
          },
          {
            type: "heritage",
            label: isSr ? "Lincat · Od 1971." : "Lincat · Since 1971",
            detail: isSr ? "Linkoln, V. Britanija" : "Lincoln, UK",
          },
          {
            type: "certification",
            label: "ISO 9001 + ISO 14001",
            detail: isSr ? "Kvalitet + Okruženje" : "Quality + Environment",
          },
          {
            type: "certification",
            label: "ENERGY STAR",
            detail: isSr ? "Odabrani Invoq modeli" : "Selected Invoq models",
          },
          {
            type: "award",
            label: isSr ? "Middleby grupa" : "Middleby Group",
            detail: isSr ? "Ovlašćeni partner" : "Authorized partner",
          },
        ]}
      />

      {/* Chapter II — The two houses */}
      <div className="bg-offwhite">
        <ChapterMark
          numeral="II"
          label={isSr ? "Dve kuće" : "The Two Houses"}
          caption={isSr ? "Houno iz Danske i Lincat iz Engleske — dva Middleby brenda koji dele Invoq platformu." : "Houno of Denmark and Lincat of England — two Middleby brands sharing the Invoq platform."}
          variant="light"
        />
      </div>
      <TwoHouses locale={locale as Locale} />

      {/* Chapter III — The Invoq family ledger */}
      <div className="bg-navy">
        <ChapterMark
          numeral="III"
          label={isSr ? "Invoq pregled" : "The Invoq Ledger"}
          caption={isSr ? "Pet Houno serija i Lincat CombiSlim — svaka familija parno-konvekcijskih peći, jedna zajednička platforma." : "Five Houno series and the Lincat CombiSlim — every combi family, one shared platform."}
          variant="dark"
        />
      </div>
      <InvoqLedger locale={locale as Locale} />

      {/* Chapter IV — Specs that matter */}
      <div className="bg-offwhite">
        <ChapterMark
          numeral="IV"
          label={isSr ? "Bitne specifikacije" : "Specs That Matter"}
          caption={isSr ? "Provereni Invoq podaci — temperaturni opseg, opterećenje hrane, vrhunska snaga, režimi i ciklusi pranja." : "Verified Invoq numerics — temperature range, food load, top-of-range power, modes and wash cycles."}
          variant="light"
        />
      </div>
      <SpecsThatMatter locale={locale as Locale} />

      {/* Chapter V — Specs scoreboard placeholder marker (existing structure) */}

      {/* Chapter VI — Model matrix */}
      <div className="bg-navy">
        <ChapterMark
          numeral="VI"
          label={isSr ? "Matrica modela" : "Model Matrix"}
          caption={isSr ? "Uporedite kroz Invoq + CombiSlim asortiman." : "Compare across the Invoq + CombiSlim range."}
          variant="dark"
        />
      </div>
      <ModelsMatrix
        variant="dark"
        eyebrow={isSr ? "Jedan pored drugog" : "Side by side"}
        heading={
          <>
            {isSr ? "Četiri vrhunske " : "Four flagship "}
            <span
              className="italic font-normal"
              style={{ color: "var(--color-gold)" }}
            >
              {isSr ? "konfiguracije" : "configurations"}
            </span>
          </>
        }
        models={[
          {
            serial: "No. 01",
            name: "Invoq Combi 6-1/1 GN",
            brand: "Houno",
            imageSrc: "/images/houno-lincat/invoq-10-1gn-main.png",
            specSheetHref: "https://houno.com/en/products/invoq-combi-1011-gn/",
          },
          {
            serial: "No. 02",
            name: "Invoq Combi 10-1/1 GN",
            brand: "Houno",
            imageSrc: "/images/houno-lincat/invoq-10-1gn-angle2.png",
            specSheetHref: "https://houno.com/en/products/invoq-combi-1011-gn/",
          },
          {
            serial: "No. 03",
            name: "Invoq Combi 20-2/1 GN",
            brand: "Houno",
            imageSrc: "/images/houno-lincat/invoq-10-1gn-angle3.png",
            specSheetHref: "https://houno.com/en/houno-ovens/invoq-combi-hybrid-oven/",
          },
          {
            serial: "No. 04",
            name: "CombiSlim 1.10",
            brand: "Lincat",
            imageSrc: "/images/houno-lincat/lincat-combislim-110.jpg",
            specSheetHref: "https://middleby-cdn.com/specsheets/Lincat_LCS110_CombiSlim_SpecSheet_1.pdf",
          },
        ]}
        specs={[
          {
            label: isSr ? "Kapacitet" : "Capacity",
            values: ["6× 1/1 GN", "10× 1/1 GN", "20× 2/1 GN", "10× 1/1 GN"],
          },
          {
            label: isSr ? "Snaga" : "Power",
            values: ["10.3 kW", "19.3 kW", "62.2 kW", "12.7 kW"],
          },
          {
            label: isSr ? "Širina" : "Width",
            values: ["~870 mm", "~870 mm", "~880 mm", isSr ? "513 mm (uska)" : "513 mm (narrow)"],
          },
          {
            label: isSr ? "Faza" : "Phase",
            values: isSr ? [
              "1-fazna / 3-fazna",
              "3-fazna",
              "3-fazna 400V",
              "3-fazna 400V",
            ] : [
              "1-phase / 3-phase",
              "3-phase",
              "3-phase 400V",
              "3-phase 400V",
            ],
          },
          {
            label: isSr ? "Opterećenje hrane" : "Food load",
            values: isSr ? ["~30 kg", "45 kg", "Industrijski", "~30 kg"] : ["~30 kg", "45 kg", "Industrial", "~30 kg"],
          },
          {
            label: "ENERGY STAR",
            values: isSr ? ["—", "—", "Da (US)", "Da"] : ["—", "—", "Yes (US)", "Yes"],
          },
        ]}
        footnote={isSr ? "Provereno prema proizvođačkim listovima sa specifikacijama. Faza, napon i opterećenje hrane zavise od lokacije — potvrdite sa MB Equipment-om tokom specifikacije." : "Verified against manufacturer datasheets. Phase, voltage and food-load specs site-dependent — confirm with MB Equipment during specification."}
      />

      {/* Chapter VII — Cost & savings */}
      <div className="bg-offwhite">
        <ChapterMark
          numeral="VII"
          label={isSr ? "Trošak i ušteda" : "Cost & Savings"}
          caption={isSr ? "Pet režima kuvanja. Manja potrošnja od starijih parno-konvekcijskih peći." : "Five cooking modes. Lower energy than legacy combis."}
          variant="light"
        />
      </div>
      <ROICalculator
        variant="light"
        eyebrow={isSr ? "Operativna ekonomija" : "Operating economics"}
        heading={
          <>
            {isSr ? "Šta Invoq " : "What an Invoq "}
            <span
              className="italic font-normal"
              style={{ color: "var(--color-gold-text)" }}
            >
              {isSr ? "zaista štedi" : "actually saves"}
            </span>
          </>
        }
        intro={isSr ? "Razrađeni primer, ne ponuda. Smanjenja koja navodi proizvođač kontekstualizovana na realan objekat srednjeg obima, kako biste mogli da proverite red veličine pre specifikacije." : "A worked example, not a quote. Manufacturer-stated reductions framed against a realistic mid-volume site so you can sanity-check the order of magnitude before specifying."}
        example={{
          label: isSr ? "Primer: restoran sa 200 gostiju" : "Example: 200-cover restaurant",
          inputs: isSr ? [
            { label: "Obim servisa", value: "200 gostiju/dan, 6 dana/nedeljno" },
            { label: "Radno vreme", value: "12 sati/dan" },
            { label: "Trenutna parno-konvekcijska peć", value: "Stara električna, 30 kW" },
          ] : [
            { label: "Service volume", value: "200 covers/day, 6 days/week" },
            { label: "Operating window", value: "12 hours/day" },
            { label: "Current combi", value: "Legacy electric, 30 kW" },
          ],
          output: isSr ? [
            {
              label: "Smanjenje potrošnje energije (Houno tvrdnja)",
              value: "Do 70% u režimu pare",
            },
            {
              label: "Ušteda konvekcijom (Houno tvrdnja)",
              value: "19% manje",
            },
            { label: "Ušteda vode", value: "27% manje" },
            { label: "Smanjenje troškova čišćenja", value: "70,7% manje" },
          ] : [
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
          math: isSr ? "Svi procenti navedeni od strane Houno-a u poređenju sa prethodnom generacijom Invoq-a. Uštede zavise od lokacije, menija, tvrdoće vode i navika operatera." : "All percentages stated by Houno vs. previous-generation Invoq baseline. Site-specific savings vary with menu, water hardness, and operator behavior.",
        }}
      />

      {/* Chapter VIII — FAQ */}
      <div className="bg-navy">
        <ChapterMark
          numeral="VIII"
          label={isSr ? "Pitanja" : "Questions"}
          caption={isSr ? "Osam stvari koje kupci pitaju pre specifikacije." : "Eight things buyers ask before specifying."}
          variant="dark"
        />
      </div>
      <FaqChapter
        variant="dark"
        eyebrow={isSr ? "Pre specifikacije" : "Before you specify"}
        heading={
          <>
            {isSr ? "Često postavljana " : "Frequently "}
            <span
              className="italic font-normal"
              style={{ color: "var(--color-gold)" }}
            >
              {isSr ? "pitanja" : "asked"}
            </span>
          </>
        }
        pageUrl={pageUrl}
        items={isSr ? [
          {
            q: "Koja je razlika između Invoq Combi i Invoq Hybrid?",
            a: "Invoq Combi koristi injekcionu paru — mlaz pare pogađa zagrejanu komoru. Invoq Hybrid dodaje namenski bojler koji drži rezerve pare, omogućavajući brži oporavak i precizniju kontrolu vlažnosti. Hybrid je izbor za gastronomiju i pekare visokog obima.",
          },
          {
            q: "Koja trofazna snaga mi je potrebna?",
            a: "Invoq 6×1/1 radi na jednofaznom ili trofaznom; 10×1/1 zahteva trofazno 400V pri ~30A; 20×2/1 GN zahteva trofazno 400V pri ~90A. CombiSlim 1.10 zahteva trofazno 400V pri ~21A po fazi.",
          },
          {
            q: "Da li je uklanjanje kamenca uključeno?",
            a: "Svi Invoq i CombiSlim modeli uključuju CombiWash automatsko čišćenje sa sedam ciklusa. Uklanjanje kamenca vodjeno je preko ekrana. Tvrda voda (preko 3°dH) zahteva periodično uklanjanje kamenca prema Houno preporukama o kvalitetu vode.",
          },
          {
            q: "Mogu li da nadgledam parno-konvekcijske peći daljinski?",
            a: "Da. Open Kitchen cloud povezivost je ugrađena — upravljanje flotom, distribucija recepata, prediktivno održavanje, HACCP logovanje. Besplatno prvih 12 meseci na svakom Invoq-u.",
          },
          {
            q: "Koja je garancija?",
            a: "Dve godine na delove i rad kroz Middleby UK i ovlašćene evropske distributere, plus dostupni produženi servisni ugovori. MB Equipment ostvaruje garanciju lokalno sa Middleby-obučenim inženjerima.",
          },
          {
            q: "Zašto uska CombiSlim umesto pune Invoq?",
            a: "CombiSlim je široka 513 mm — dizajnirana da se uklopi u postojeće uske kuhinjske linije ili da se uspori kao satelitska peć pored pune Invoq za à-la-carte / banket podele rada.",
          },
          {
            q: "Da li su ovi modeli ENERGY STAR sertifikovani?",
            a: "Odabrani modeli — Invoq Combi 20-2/1 GN je ENERGY STAR sertifikovan sa 81% konvekcione efikasnosti / 78% efikasnosti pare. CombiSlim 1.10 je ENERGY STAR + IPX4 + CE.",
          },
          {
            q: "Koliko brzo se instalira?",
            a: "Dva dana je tipično za jednu Invoq plus puštanje u rad, vodovodni priključak i obuku šefa. Višelokacijska instalacija se centralno koordinira — instalirali smo širom Beograda, Niša i regiona Jugoistočne Evrope.",
          },
        ] : [
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
            a: "Two years parts and labor through Middleby UK and authorized European dealers, plus extended service contracts available. MB Equipment honors warranty locally with Middleby-trained engineers.",
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
          label={isSr ? "Tri puta" : "Three Paths"}
          caption={isSr ? "Ponuda, demonstracija ili specifikacija — odaberite ono što vam odgovara." : "Quote, demo, or spec sheet — pick the one that fits where you are."}
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
          label={isSr ? "Sledeći korak" : "The Next Step"}
          caption={isSr ? "Pošaljite obim menija, napon i tvrdoću vode — specifikovaćemo Invoq ili CombiSlim konfiguraciju." : "Send your menu volume, voltage and water hardness — we'll spec the Invoq or CombiSlim configuration."}
          variant="dark"
        />
      </div>
      <CombiCta locale={locale as Locale} dict={dict} />
    </>
  );
}
