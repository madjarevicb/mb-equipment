import type { Metadata } from "next";
import { COMPANY } from "@/lib/constants";
import { getDictionary } from "@/i18n/getDictionary";
import type { Locale } from "@/i18n/config";
import ChapterMark from "../../thermal-processing/_sections/ChapterMark";
import { AwardStrip, FaqChapter, CtaTriad } from "@/components/equipment";
import { Hero, Capabilities, MaterialsProcess, WhyCustom, Cta } from "./_sections";

export const dynamic = "force-static";

const PAGE_TITLE_EN = "Custom Stainless Steel Fabrication | MB Equipment";
const PAGE_TITLE_SR = "Inox po meri — izrada od nerđajućeg čelika | MB";
const PAGE_DESC_EN =
  "Made-to-measure stainless steel for commercial kitchens — work tables, sinks, hoods, shelving, custom counters. Belgrade workshop, Southeast Europe.";
const PAGE_DESC_SR =
  "Inox oprema po meri za profesionalne kuhinje — radni stolovi, sudopere, nape, police, pultovi. Radionica u Beogradu, Jugoistočna Evropa.";

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
      "custom stainless steel fabrication",
      "stainless steel kitchen fabrication",
      "made to measure inox",
      "commercial kitchen work tables",
      "stainless steel sinks fabrication",
      "ventilation hoods custom",
      "stainless steel shelving",
      "AISI 304 fabrication",
      "AISI 316 fabrication",
      "Belgrade stainless workshop",
      "inox po meri",
      "izrada od nerđajućeg čelika",
      "radni stolovi inox",
      "sudopere po meri",
      "nape po meri",
    ],
    alternates: {
      canonical: `/${locale}/equipment/neutral-inox/custom-fabrication`,
      languages: {
        en: "/en/equipment/neutral-inox/custom-fabrication",
        sr: "/sr/equipment/neutral-inox/custom-fabrication",
        "x-default": "/en/equipment/neutral-inox/custom-fabrication",
      },
    },
    openGraph: {
      title: PAGE_TITLE,
      description: PAGE_DESC,
      url: `${COMPANY.url}/${locale}/equipment/neutral-inox/custom-fabrication`,
      siteName: COMPANY.name,
      locale: isSr ? "sr_RS" : "en_US",
      type: "website",
      images: [
        {
          url: `${COMPANY.url}/images/whatwedo/elements.jpg`,
          width: 1200,
          height: 630,
          alt: "Stainless steel kitchen elements fabricated in the MB Equipment Belgrade workshop",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: PAGE_TITLE,
      description: PAGE_DESC,
      images: [`${COMPANY.url}/images/whatwedo/elements.jpg`],
    },
  };
}

export default async function CustomFabricationPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const isSr = locale === "sr";
  const PAGE_TITLE = isSr ? PAGE_TITLE_SR : PAGE_TITLE_EN;
  const PAGE_DESC = isSr ? PAGE_DESC_SR : PAGE_DESC_EN;
  const pageUrl = `${COMPANY.url}/${locale}/equipment/neutral-inox/custom-fabrication`;

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
          url: `${COMPANY.url}/images/whatwedo/elements.jpg`,
          width: 1200,
          height: 630,
        },
        breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
        mainEntity: { "@id": `${pageUrl}#service` },
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
            name: dict.nav.neutralAndInox,
            item: `${COMPANY.url}/${locale}/equipment/neutral-inox`,
          },
          {
            "@type": "ListItem",
            position: 4,
            name: dict.nav.customFabrication,
          },
        ],
      },
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: isSr
          ? "Izrada inox opreme po meri"
          : "Custom Stainless Steel Fabrication",
        description: PAGE_DESC,
        serviceType: "Commercial kitchen stainless steel fabrication",
        provider: { "@id": `${COMPANY.url}/#organization` },
        areaServed: [
          { "@type": "Country", name: "Serbia" },
          { "@type": "Place", name: "Southeast Europe" },
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Custom Fabrication Scope",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Work tables & prep stations",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Sinks & wash stations",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Ventilation hoods & canopies",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Shelving & storage racks",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Custom counters & service stations",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Splashbacks & wall cladding",
              },
            },
          ],
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
      <Hero locale={locale as Locale} dict={dict} />

      {/* Heritage & certifications strip */}
      <AwardStrip
        variant="light"
        items={[
          {
            type: "heritage",
            label: isSr ? "Beogradska radionica" : "Belgrade workshop",
            detail: isSr ? "MB Equipment u sopstvenom pogonu" : "MB Equipment in-house",
          },
          {
            type: "certification",
            label: "AISI 304 / 316",
            detail: isSr ? "Inox za hranu" : "Food-grade stainless",
          },
          {
            type: "certification",
            label: isSr ? "CE materijali" : "CE materials",
            detail: isSr ? "U skladu sa EU" : "EU-compliant",
          },
          {
            type: "award",
            label: isSr ? "Po meri" : "Made-to-measure",
            detail: isSr ? "Tipičan rok 20 dana" : "20-day typical lead",
          },
        ]}
      />

      {/* Chapter II — What we fabricate */}
      <div className="bg-white">
        <ChapterMark
          numeral="II"
          label={isSr ? "Šta izrađujemo" : "What we fabricate"}
          caption={isSr ? "Šest disciplina nacrtanih, sečenih, zavarivanih i finalno obrađenih — svaka izrađena prema prostoru." : "Six disciplines drawn, cut, welded, and finished — each entry made to the room."}
          variant="light"
        />
      </div>
      <Capabilities locale={locale as Locale} />

      {/* Chapter III — Materials & Process */}
      <div className="bg-offwhite">
        <ChapterMark
          numeral="III"
          label={isSr ? "Materijali i proces" : "Materials & Process"}
          caption={isSr ? "Od AISI 304 lima do puštene u rad jedinice — pet koraka, jedan tim." : "From AISI 304 sheet to commissioned unit — five steps, one team."}
          variant="light"
        />
      </div>
      <MaterialsProcess locale={locale as Locale} />

      {/* Chapter IV — Why custom */}
      <div className="bg-offwhite">
        <ChapterMark
          numeral="IV"
          label={isSr ? "Zašto po meri" : "Why custom"}
          caption={isSr ? "Citat-argument — praćen sa tri kratka principa." : "A pull-quote argument — followed by three short principles."}
          variant="light"
        />
      </div>
      <WhyCustom locale={locale as Locale} />

      {/* Chapter V — Questions */}
      <ChapterMark
        numeral="V"
        label={isSr ? "Pitanja" : "Questions"}
        caption={isSr ? "Šta kupci pitaju pre nego što počnu crteži." : "What buyers ask before drawings start."}
        variant="dark"
      />
      <FaqChapter
        variant="dark"
        heading={
          <>
            {isSr ? "Pre " : "Before "}
            <span
              className="italic font-normal"
              style={{ color: "var(--color-gold)" }}
            >
              {isSr ? "sečenja." : "we cut."}
            </span>
          </>
        }
        items={isSr ? [
          {
            q: "Koji kvalitet inoxa koristite?",
            a: "AISI 304 standardno za sve ugostiteljske radove — bezbedan za hranu, otporan na koroziju. AISI 316 za pomorske sredine, hemijske kuhinje ili gde je izloženost hloridima visoka. Oba kvaliteta su dostupna; preporučujemo prema projektu.",
          },
          {
            q: "Koje su tipične debljine?",
            a: "1,0 mm za police i lake zaštite zida. 1,2–1,5 mm za radne stolove i standardne pultove. 2,0 mm za površine velikog opterećenja (teški pripremni stolovi, mesarske ploče, prozori za prosleđivanje). Pojačano podramnom konstrukcijom na svakom komadu.",
          },
          {
            q: "Koji je rok od odobrenih crteža?",
            a: "2 nedelje za jednostavne prostorije (3–5 komada). 3–4 nedelje za kompletne kuhinje. Specifične geometrije sa složenim zavarivanjem mogu trajati 5–6 nedelja. Potvrđujemo u fazi ponude pisanim rasporedom.",
          },
          {
            q: "Da li instalirate?",
            a: "Da. Naš radionički tim obavlja merenje na licu mesta, izradu u Beogradu i instalaciju širom Jugoistočne Evrope. Jedan kontakt, jedna vremenska linija, bez podizvođača.",
          },
          {
            q: "Da li možete da zamenite oštećene komade u postojećim kuhinjama?",
            a: "Da. Merimo na licu mesta, usklađujemo postojeći materijal i obradu, i izrađujemo zamene. Tipični slučajevi: zaštite zida oštećene viljuškarom, polomljene police, naknadne stanice za pranje ruku.",
          },
          {
            q: "Koliko košta u poređenju sa katalogom?",
            a: "Izrada po meri obično je 15–35% iznad ekvivalenata iz kataloga — ali se savršeno uklapa u prostoriju, traje 10–15+ godina i izbegava mrtvi prostor. Cenu dajemo prema vašem planu, a ne prema generičkom katalogu.",
          },
        ] : [
          {
            q: "What stainless grade do you use?",
            a: "AISI 304 standard for all hospitality work — food-safe, corrosion-resistant. AISI 316 for marine environments, chemical kitchens, or where chloride exposure is high. Both grades available; we recommend per project.",
          },
          {
            q: "What gauges are typical?",
            a: "1.0 mm for shelving and light splashbacks. 1.2–1.5 mm for work tables and standard counters. 2.0 mm for high-load surfaces (heavy prep stations, butcher tables, pass-through windows). Reinforced with under-frame on every piece.",
          },
          {
            q: "What's the lead time from approved drawings?",
            a: "2 weeks for simple rooms (3–5 pieces). 3–4 weeks for full kitchens. Custom geometries with bespoke welding may run 5–6 weeks. We confirm at quote stage with a written schedule.",
          },
          {
            q: "Do you install?",
            a: "Yes. Our workshop team handles measurement on-site, fabrication in Belgrade, and install across Southeast Europe. Single contact, single timeline, no subcontracted handoff.",
          },
          {
            q: "Can you replace damaged pieces in existing kitchens?",
            a: "Yes. We measure on-site, match the existing material and finish, and fabricate replacements. Common scenarios: forklift-damaged splashbacks, broken shelving, retrofit hand-wash stations.",
          },
          {
            q: "What does it cost vs. catalog equipment?",
            a: "Custom fabrication is generally 15–35% above catalog equivalents — but it fits the room exactly, lasts 10–15+ years, and avoids dead space. We quote against your floor plan, not a generic catalog.",
          },
        ]}
        pageUrl={pageUrl}
      />

      {/* Chapter VI — CTA */}
      <div className="bg-offwhite">
        <ChapterMark
          numeral="VI"
          label={isSr ? "Sledeći korak" : "The Next Step"}
          caption={isSr ? "Pošaljite plan. Merimo, crtamo, izrađujemo, instaliramo." : "Send the floor plan. We measure, draw, fabricate, install."}
          variant="light"
        />
      </div>
      <CtaTriad
        locale={locale as Locale}
        productSlug="custom-fabrication"
        catalogHref="#"
        variant="light"
      />
      <Cta locale={locale as Locale} dict={dict} />
    </>
  );
}
