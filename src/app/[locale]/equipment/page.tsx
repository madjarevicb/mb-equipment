import { CtaTriad } from "@/components/equipment";
import { COMPANY } from "@/lib/constants";
import { getDictionary } from "@/i18n/getDictionary";
import type { Locale } from "@/i18n/config";
import ChapterMark from "./thermal-processing/_sections/ChapterMark";
import {
  HeroChapter,
  CategoriesChapter,
  BrandIndexChapter,
  getIndexedBrands,
  SUPER_CATEGORIES,
} from "./_sections";

export const dynamic = "force-static";

const PAGE_TITLE_EN = "Commercial Kitchen Equipment — 110+ Brands | MB";
const PAGE_TITLE_SR = "Profesionalna kuhinjska oprema — 110+ brendova";
const PAGE_DESC_EN =
  "Browse 110+ commercial kitchen equipment brands by category. Cooking, refrigeration, custom inox, waste handling. Authorized Middleby partner in Belgrade.";
const PAGE_DESC_SR =
  "Pregledajte preko 110 brendova profesionalne kuhinjske opreme — kuvanje, hlađenje, inox, otpad. Ovlašćeni Middleby partner u Beogradu.";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isSr = locale === "sr";
  const PAGE_TITLE = isSr ? PAGE_TITLE_SR : PAGE_TITLE_EN;
  const PAGE_DESC = isSr ? PAGE_DESC_SR : PAGE_DESC_EN;

  return {
    title: { absolute: PAGE_TITLE },
    description: PAGE_DESC,
    keywords: [
      "commercial kitchen equipment",
      "kitchen equipment brands",
      "Middleby brands",
      "Josper",
      "Houno",
      "Lincat",
      "Hobart",
      "IMC",
      "authorized Middleby partner",
      "Belgrade kitchen equipment",
      "Southeast Europe kitchen equipment",
      "profesionalna kuhinjska oprema",
      "Middleby Beograd",
    ],
    alternates: {
      canonical: `/${locale}/equipment`,
      languages: {
        en: "/en/equipment",
        sr: "/sr/equipment",
        "x-default": "/en/equipment",
      },
    },
    openGraph: {
      title: PAGE_TITLE,
      description: PAGE_DESC,
      url: `${COMPANY.url}/${locale}/equipment`,
      siteName: COMPANY.name,
      locale: isSr ? "sr_RS" : "en_US",
      type: "website",
      images: [
        {
          url: `${COMPANY.url}/images/whatwedo/elements.jpg`,
          width: 1200,
          height: 630,
          alt: "MB Equipment Solutions — full commercial kitchen equipment portfolio",
        },
      ],
    },
    twitter: {
      card: "summary_large_image" as const,
      title: PAGE_TITLE,
      description: PAGE_DESC,
      images: [`${COMPANY.url}/images/whatwedo/elements.jpg`],
    },
  };
}

export default async function EquipmentHubPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const isSr = locale === "sr";
  const PAGE_TITLE = isSr ? PAGE_TITLE_SR : PAGE_TITLE_EN;
  const PAGE_DESC = isSr ? PAGE_DESC_SR : PAGE_DESC_EN;
  const pageUrl = `${COMPANY.url}/${locale}/equipment`;

  const indexedBrands = getIndexedBrands();
  const totalBrands = indexedBrands.length;

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
        about: { "@id": `${COMPANY.url}/#organization` },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: `${COMPANY.url}/images/whatwedo/elements.jpg`,
          width: 1200,
          height: 630,
        },
        breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
        mainEntity: { "@id": `${pageUrl}#brand-index` },
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
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "ItemList",
        "@id": `${pageUrl}#brand-index`,
        name: isSr
          ? "Indeks brendova kuhinjske opreme"
          : "Commercial Kitchen Equipment Brand Index",
        numberOfItems: indexedBrands.length,
        itemListElement: indexedBrands.map((brand, i) => ({
          "@type": "ListItem",
          position: i + 1,
          item: {
            "@type": "Brand",
            name: brand.name,
            description: brand.text,
            url: `${COMPANY.url}/${locale}/equipment/${brand.hrefSlug}`,
            ...(brand.logo
              ? {
                  logo: `${COMPANY.url}${brand.logo}`,
                }
              : {}),
          },
        })),
      },
      {
        "@type": "ItemList",
        "@id": `${pageUrl}#disciplines`,
        name: isSr ? "Discipline opreme" : "Equipment Disciplines",
        numberOfItems: SUPER_CATEGORIES.length,
        itemListElement: SUPER_CATEGORIES.map((c, i) => ({
          "@type": "ListItem",
          position: i + 1,
          item: {
            "@type": "CollectionPage",
            url: `${COMPANY.url}${c.href(locale)}`,
            name: c.label,
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
      <HeroChapter
        locale={locale as Locale}
        dict={dict}
        totalBrands={totalBrands}
      />

      {/* Chapter II mark */}
      <div className="bg-white">
        <ChapterMark
          numeral="II"
          label="Index of Disciplines"
          caption="Four categories. Each one specified around how a kitchen actually works."
          variant="light"
        />
      </div>
      <CategoriesChapter locale={locale as Locale} />

      {/* Chapter III mark */}
      <div className="bg-navy">
        <ChapterMark
          numeral="III"
          label="The Brand Index"
          caption="The full house — filterable by discipline, searchable by name."
          variant="dark"
        />
      </div>
      <BrandIndexChapter locale={locale} brands={indexedBrands} />

      {/* Chapter IV — CTA */}
      <CtaTriad
        locale={locale as "en" | "sr"}
        productSlug="equipment"
        variant="dark"
      />
    </>
  );
}
