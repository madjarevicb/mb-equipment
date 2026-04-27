import type { Metadata } from "next";
import { COMPANY } from "@/lib/constants";
import { getDictionary } from "@/i18n/getDictionary";
import type { Locale } from "@/i18n/config";
import ChapterMark from "../_sections/ChapterMark";
import { FaqChapter, CtaTriad, AwardStrip } from "@/components/equipment";
import {
  JosperHero,
  OriginTech,
  Lineup,
  HJX_MODELS,
  CulinaryQuote,
  PartnerCta,
} from "./_sections";

export const dynamic = "force-static";

const PAGE_TITLE_EN = "Josper Charcoal Oven — Authorized Dealer | MB Equipment";
const PAGE_TITLE_SR = "Josper roštilj na ugalj — ovlašćeni distributer | MB";
const PAGE_DESC_EN =
  "Josper charcoal ovens for professional kitchens — HJX range, 4-year warranty, Middleby-trained service in Belgrade. Authorized partner, Southeast Europe.";
const PAGE_DESC_SR =
  "Josper peći na drveni ugalj za profesionalne kuhinje — HJX serija, 4-godišnja garancija, Middleby servis u Beogradu. Ovlašćeni distributer, Jugoistočna Evropa.";

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
      "Josper charcoal oven",
      "commercial charcoal grill",
      "Josper grill",
      "charcoal broiler oven",
      "restaurant charcoal oven",
      "Josper charcoal oven for steakhouse",
      "Josper HJX-50 specifications",
      "Josper authorized dealer",
      "Middleby authorized partner",
      "solid fuel cooking equipment",
      "Josper roštilj",
      "Josper peć na ugalj",
      "profesionalni roštilj na drveni ugalj",
      "Josper roštilj cena Srbija",
      "Josper ovlašćeni distributer Srbija",
    ],
    alternates: {
      canonical: `/${locale}/equipment/thermal-processing/charcoal-grills`,
      languages: {
        en: "/en/equipment/thermal-processing/charcoal-grills",
        sr: "/sr/equipment/thermal-processing/charcoal-grills",
        "x-default": "/en/equipment/thermal-processing/charcoal-grills",
      },
    },
    openGraph: {
      title: PAGE_TITLE,
      description: PAGE_DESC,
      url: `${COMPANY.url}/${locale}/equipment/thermal-processing/charcoal-grills`,
      siteName: COMPANY.name,
      locale: isSr ? "sr_RS" : "en_US",
      type: "website",
      images: [
        {
          url: `${COMPANY.url}/images/whatwedo/char-grilling.jpg`,
          width: 1200,
          height: 630,
          alt: "Josper charcoal oven in a professional kitchen",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: PAGE_TITLE,
      description: PAGE_DESC,
      images: [`${COMPANY.url}/images/whatwedo/char-grilling.jpg`],
    },
  };
}

export default async function JosperCharcoalGrillsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const isSr = locale === "sr";
  const PAGE_TITLE = isSr ? PAGE_TITLE_SR : PAGE_TITLE_EN;
  const PAGE_DESC = isSr ? PAGE_DESC_SR : PAGE_DESC_EN;
  const pageUrl = `${COMPANY.url}/${locale}/equipment/thermal-processing/charcoal-grills`;

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
            name: "Josper",
            url: "https://jospergrill.com/",
            parentOrganization: {
              "@type": "Corporation",
              name: "Middleby Corporation",
              url: "https://www.middleby.com",
            },
          },
        ],
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: `${COMPANY.url}/images/whatwedo/char-grilling.jpg`,
          width: 1200,
          height: 630,
        },
        breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
        mainEntity: { "@id": `${pageUrl}#hjx` },
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
            name: dict.nav.josper,
          },
        ],
      },
      {
        "@type": "ItemList",
        "@id": `${pageUrl}#hjx`,
        name: "Josper HJX Charcoal Oven Range",
        numberOfItems: HJX_MODELS.length,
        itemListElement: HJX_MODELS.map((row, i) => ({
          "@type": "ListItem",
          position: i + 1,
          item: {
            "@type": "Product",
            name: `Josper ${row.model}`,
            brand: { "@type": "Brand", name: "Josper" },
            category: "Commercial Charcoal Oven",
            description: `Josper ${row.model} — capacity ${row.diners} diners, fire-up ${row.fireUp}, daily charcoal ${row.fuel}, autonomy ${row.autonomy}.`,
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
      <JosperHero locale={locale as Locale} dict={dict} />

      {/* Heritage & Certifications strip */}
      <div className="bg-offwhite">
        <AwardStrip
          variant="light"
          items={[
            {
              type: "heritage",
              label: "Josper · Since 1969",
              detail: "Pineda de Mar, Barcelona",
            },
            {
              type: "heritage",
              label: "Middleby brand",
              detail: "Acquired April 2018",
            },
            {
              type: "award",
              label: "World's first patent",
              detail: "Charcoal oven (1969)",
            },
            {
              type: "certification",
              label: "CE · NSF · UL · GOST",
              detail: "International compliance",
            },
            {
              type: "certification",
              label: "4-year warranty",
              detail: "Materials & components",
            },
            {
              type: "award",
              label: "40,000+ kitchens",
              detail: "Josper's stated install base",
            },
          ]}
        />
      </div>

      {/* Chapter II — Origin + Technology */}
      <div className="bg-offwhite">
        <ChapterMark
          numeral="II"
          label="Origin & Mechanism"
          caption="Pineda de Mar, 1969 — the first patented charcoal oven. A Middleby company since 2018."
          variant="light"
        />
      </div>
      <OriginTech />

      {/* Chapter III — HJX Lineup */}
      <div className="bg-navy">
        <ChapterMark
          numeral="III"
          label="HJX Ledger"
          caption="Five sizes of the flagship HJX charcoal oven — specified by cover count and autonomy."
          variant="dark"
        />
      </div>
      <Lineup />

      {/* Chapter IV — Culinary positioning + pull quote */}
      <div className="bg-offwhite">
        <ChapterMark
          numeral="IV"
          label="The Plate"
          caption="What the sealed chamber does best — and what Michelin kitchens say about it."
          variant="light"
        />
      </div>
      <CulinaryQuote />

      {/* Chapter V — Authorized partner */}
      <div className="bg-navy">
        <ChapterMark
          numeral="V"
          label="The Authorized Route"
          caption="Genuine Josper / Middleby parts, 4-year warranty, Belgrade service engineers."
          variant="dark"
        />
      </div>

      {/* Chapter VI — Frequently asked */}
      <div className="bg-navy">
        <ChapterMark
          numeral="VI"
          label="Questions"
          caption="Eight things chefs and consultants ask before specifying Josper."
          variant="dark"
        />
      </div>
      <FaqChapter
        variant="dark"
        heading={
          <>
            Frequently{" "}
            <span
              className="italic font-normal"
              style={{ color: "var(--color-gold)" }}
            >
              asked.
            </span>
          </>
        }
        items={[
          {
            q: "What charcoal does Josper recommend?",
            a: "High-quality lump charcoal — quebracho blanco for red meats and red-fleshed fish; marabu for white-fleshed fish and vegetables. Josper sells its own branded eco-friendly wood charcoal. Avoid briquettes — too smoky for the enclosed chamber.",
          },
          {
            q: "What's the difference between HJX and HJX-PRO?",
            a: "HJX is the classic charcoal oven line (HJX-15 through HJX-50). HJX-PRO is the upgraded professional tier — same chamber design, refined finishes, premium-grade alloys. HJA Class A is the further-upgraded line. PRO is the standard recommendation for new restaurants.",
          },
          {
            q: "How long does it take to fire up?",
            a: "25–40 minutes depending on size. HJX-15: ~25 min. HJX-50 Large: ~40 min. Once at temperature, the chamber holds heat for 6–9 hours per charcoal load — single fill covers most service windows.",
          },
          {
            q: "Charcoal consumption per service?",
            a: "1.5–2.5 kg/day for HJX-15, scaling to 16–20 kg/day for HJX-50 Large. Josper claims up to 40% less charcoal vs open grills (manufacturer figure, not independently audited).",
          },
          {
            q: "Power and ventilation requirements?",
            a: "Single-phase 230V for the integrated electric ignition (HJX models) — most installations work on a standard 16A socket. Ventilation: a Type 1 hood sized to ~2x the manufacturer's recommended airflow rate, with grease filtration. Flue is cooled and shielded.",
          },
          {
            q: "Warranty and service?",
            a: "4 years against defects in materials and components, 1 year on internal combustion-chamber parts and door-retaining springs (Middleby UK terms). MB Equipment honours warranty locally — Belgrade-based service engineers, factory-trained.",
          },
          {
            q: "What dishes work best?",
            a: "Steaks, large protein cuts, whole fish, shellfish, vegetables, roasts, whole poultry, pizza, bread. The sealed chamber + high heat seals the outside while imparting charcoal aroma. Versatile across savoury and sweet — Berasategui notes pizza and dessert work too.",
          },
          {
            q: "What about smoke management?",
            a: "Cooled flue with damper-controlled airflow + antispark system + combustion shield + firebreak hat. Fully enclosed combustion chamber means significantly less smoke than open grills, but still requires Type 1 hood with grease filtration per local code.",
          },
        ]}
        pageUrl={pageUrl}
      />

      {/* CTA Triad — quote / showroom / spec sheet */}
      <CtaTriad
        locale={locale as Locale}
        productSlug="josper-charcoal-grills"
        catalogHref="#"
        variant="dark"
      />

      <PartnerCta locale={locale as Locale} dict={dict} />
    </>
  );
}
