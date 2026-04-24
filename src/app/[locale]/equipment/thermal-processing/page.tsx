import { COMPANY } from "@/lib/constants";
import { getDictionary } from "@/i18n/getDictionary";
import type { Locale } from "@/i18n/config";
import {
  HeroSection,
  SubcategoriesSection,
  BrandsSection,
  CtaSection,
  ChapterMark,
  PullQuoteSection,
} from "./_sections";

export const dynamic = "force-static";

const PAGE_TITLE_EN = "Commercial Cooking Equipment | Josper, Combi Ovens | MB";
const PAGE_TITLE_SR = "Profesionalna oprema za kuhanje — Josper, kombi peći";
const PAGE_DESC_EN =
  "Commercial cooking equipment in Serbia: Josper charcoal grills, combi ovens, full cooking lines. Authorized Middleby partner serving Southeast Europe.";
const PAGE_DESC_SR =
  "Profesionalna oprema za kuhanje: Josper roštilji, parno-konvekcijske peći, linije za kuvanje. Ovlašćeni Middleby partner za Jugoistočnu Evropu.";

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
      "commercial cooking equipment",
      "professional kitchen cooking equipment",
      "commercial combi ovens",
      "Josper charcoal grill",
      "commercial cooking line",
      "Middleby cooking equipment",
      "restaurant kitchen equipment supplier",
      "Houno combi oven",
      "Lincat cooking equipment",
      "Silko cooking line",
      "authorized Josper dealer Serbia",
      "Middleby authorized partner Balkans",
      "profesionalna oprema za kuhanje",
      "parno-konvekcijske peći",
      "Josper roštilj na drveni ugalj",
    ],
    alternates: {
      canonical: `/${locale}/equipment/thermal-processing`,
      languages: {
        en: "/en/equipment/thermal-processing",
        sr: "/sr/equipment/thermal-processing",
        "x-default": "/en/equipment/thermal-processing",
      },
    },
    openGraph: {
      title: PAGE_TITLE,
      description: PAGE_DESC,
      url: `${COMPANY.url}/${locale}/equipment/thermal-processing`,
      siteName: COMPANY.name,
      locale: isSr ? "sr_RS" : "en_US",
      type: "website",
      images: [
        {
          url: `${COMPANY.url}/images/whatwedo/chef-cooking.jpg`,
          width: 1200,
          height: 630,
          alt: "Professional chef working commercial cooking equipment",
        },
      ],
    },
    twitter: {
      card: "summary_large_image" as const,
      title: PAGE_TITLE,
      description: PAGE_DESC,
      images: [`${COMPANY.url}/images/whatwedo/chef-cooking.jpg`],
    },
  };
}

export default async function CookingHubPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const isSr = locale === "sr";
  const PAGE_TITLE = isSr ? PAGE_TITLE_SR : PAGE_TITLE_EN;
  const PAGE_DESC = isSr ? PAGE_DESC_SR : PAGE_DESC_EN;
  const pageUrl = `${COMPANY.url}/${locale}/equipment/thermal-processing`;

  const subcategories = [
    {
      name: isSr ? "Josper — roštilji na drveni ugalj" : "Josper — Charcoal Grills",
      description: isSr
        ? "Roštilji na drveni ugalj i čvrsto gorivo za profesionalne kuhinje sa otvorenim plamenom."
        : "Charcoal, wood, and dual-fuel cooking for open-flame commercial kitchens.",
      url: `${COMPANY.url}/${locale}/equipment/thermal-processing/charcoal-grills`,
    },
    {
      name: isSr ? "Linija za kuvanje" : "Cooking Line",
      description: isSr
        ? "Modularni blokovi za kuvanje — šporeti, friteze, kazani, kiperi, kuvala za pastu, ben mari."
        : "Modular cooking blocks — ranges, fryers, pasta cookers, bain marie, tilting pans, boiling pans.",
      url: `${COMPANY.url}/${locale}/equipment/cooking/cooking-line`,
    },
    {
      name: isSr ? "Parno-konvekcijske peći" : "Combi Ovens",
      description: isSr
        ? "Parno-konvekcijske peći — kuvanje na pari, pečenje, i regeneracija u jednom uređaju."
        : "Steam-convection ovens for steaming, baking, roasting, and regeneration in one unit.",
      url: `${COMPANY.url}/${locale}/equipment/thermal-processing/combi-ovens`,
    },
  ];

  const brands = [
    { name: "Josper", url: "https://jospergrill.com/" },
    { name: "Houno", url: "https://www.houno.com/" },
    { name: "Lincat", url: "https://www.lincat.co.uk/" },
    { name: "Silko" },
    { name: "PGE" },
    { name: "UGNS" },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
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
          url: `${COMPANY.url}/images/whatwedo/chef-cooking.jpg`,
          width: 1200,
          height: 630,
        },
        breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
        mainEntity: { "@id": `${pageUrl}#subcategories` },
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
          },
        ],
      },
      {
        "@type": "ItemList",
        "@id": `${pageUrl}#subcategories`,
        name: isSr ? "Kategorije opreme za kuhanje" : "Cooking Equipment Categories",
        numberOfItems: subcategories.length,
        itemListElement: subcategories.map((sc, i) => ({
          "@type": "ListItem",
          position: i + 1,
          item: {
            "@type": "CollectionPage",
            url: sc.url,
            name: sc.name,
            description: sc.description,
          },
        })),
      },
      {
        "@type": "ItemList",
        "@id": `${pageUrl}#brands`,
        name: isSr ? "Brendovi opreme za kuhanje" : "Cooking Equipment Brands",
        itemListElement: brands.map((brand, i) => ({
          "@type": "ListItem",
          position: i + 1,
          item: brand.url
            ? { "@type": "Brand", name: brand.name, url: brand.url }
            : { "@type": "Brand", name: brand.name },
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

      <HeroSection locale={locale as Locale} dict={dict} />

      {/* Chapter II — categories */}
      <div className="bg-white">
        <ChapterMark
          numeral="II"
          label="Index of Categories"
          caption="Three disciplines. One house. Specified around your menu."
          variant="light"
        />
      </div>
      <SubcategoriesSection locale={locale as Locale} dict={dict} />

      {/* Editorial pull quote spread */}
      <PullQuoteSection />

      {/* Chapter III — brands */}
      <div className="bg-navy">
        <ChapterMark
          numeral="III"
          label="House of Brands"
          caption="Authorized partnerships — factory support, service, parts."
          variant="dark"
        />
      </div>
      <BrandsSection />

      {/* Chapter IV — CTA */}
      <CtaSection locale={locale as Locale} dict={dict} />
    </>
  );
}
