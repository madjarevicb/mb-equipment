import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/ui/Breadcrumb";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { COMPANY } from "@/lib/constants";

export const dynamic = "force-static";

const PAGE_TITLE = "Equipment Guide — Commercial Kitchen Equipment | MB Equipment Solutions";
const PAGE_DESC =
  "Commercial kitchen equipment guide — thermal processing, refrigeration, and custom stainless steel. Explore equipment categories, brands, and specifications.";

export const metadata: Metadata = {
  title: "Equipment Guide",
  description: PAGE_DESC,
  keywords: [
    "commercial kitchen equipment",
    "thermal processing equipment",
    "commercial refrigeration",
    "stainless steel kitchen",
    "equipment guide",
    "kitchen equipment categories",
  ],
  alternates: { canonical: "/equipment" },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESC,
    url: `${COMPANY.url}/equipment`,
    siteName: COMPANY.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESC,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      name: PAGE_TITLE,
      description: PAGE_DESC,
      url: `${COMPANY.url}/equipment`,
      isPartOf: { "@type": "WebSite", url: COMPANY.url },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: COMPANY.url },
        { "@type": "ListItem", position: 2, name: "Equipment", item: `${COMPANY.url}/equipment` },
      ],
    },
  ],
};

const categories = [
  {
    number: "01",
    title: "Thermal Processing",
    subtitle: "Cooking & Baking Equipment",
    description:
      "Ranges, fryers, combi ovens, pasta cookers, and charcoal grills — every thermal cooking category for commercial kitchens.",
    brands: "Josper, Silko, Lincat, FirEx, Houno, PGE, UGNS",
    href: "/equipment/thermal-processing",
  },
  {
    number: "02",
    title: "Refrigeration",
    subtitle: "Cold Storage & Display",
    description:
      "Display cases, vitrines, food refrigeration, and modular cold rooms — specified for your operation and climate conditions.",
    brands: "Desmon, Tefcold, Tehnodom, JBG-2, Infrico",
    href: "/equipment/refrigeration",
  },
  {
    number: "03",
    title: "Neutral INOX",
    subtitle: "Custom Stainless Steel",
    description:
      "Worktops, shelving, sinks, ventilation hoods, and service counters — manufactured to your exact layout and dimensions.",
    brands: "Custom fabrication — AISI 304 stainless steel",
    href: "/equipment/neutral-inox",
  },
];

export default function EquipmentPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <Breadcrumb items={[{ label: "Equipment" }]} />

      {/* Hero */}
      <section className="py-28 lg:py-36 bg-navy" aria-labelledby="equipment-heading">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <p className="text-gold text-xs font-medium uppercase tracking-[0.3em] mb-6">
              Equipment Guide
            </p>
            <h1
              id="equipment-heading"
              className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.05] mb-6"
            >
              Commercial Kitchen<br />
              <span className="italic font-normal">Equipment</span>
            </h1>
            <div className="w-16 h-px bg-gold/60 mb-6" />
            <p className="text-white/70 text-lg leading-relaxed max-w-xl font-light">
              Three core categories — thermal processing, refrigeration, and
              custom stainless steel — covering every element of a professional
              kitchen.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Categories */}
      <section className="py-24 lg:py-32 bg-white" aria-label="Equipment categories">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection stagger>
            {categories.map((cat) => (
              <Link
                key={cat.number}
                href={cat.href}
                className="group block py-10 border-b border-gray-200 transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 items-start">
                  <div className="lg:col-span-1">
                    <span className="font-display text-2xl font-bold text-text-secondary/20 italic">
                      {cat.number}
                    </span>
                  </div>
                  <div className="lg:col-span-4">
                    <h2 className="font-display text-2xl lg:text-3xl font-bold text-text-primary group-hover:text-red transition-colors duration-300 leading-[1.1]">
                      {cat.title}
                    </h2>
                    <p className="text-text-secondary text-xs uppercase tracking-[0.15em] mt-2">
                      {cat.subtitle}
                    </p>
                  </div>
                  <div className="lg:col-span-5">
                    <p className="text-text-secondary leading-relaxed text-sm mb-3">
                      {cat.description}
                    </p>
                    <p className="text-text-secondary/50 text-xs">
                      {cat.brands}
                    </p>
                  </div>
                  <div className="lg:col-span-2 flex items-center justify-end">
                    <span className="text-text-primary text-sm font-medium group-hover:text-red transition-colors duration-300 inline-flex items-center gap-2">
                      Explore
                      <span aria-hidden="true" className="group-hover:translate-x-1 transition-transform duration-300">&#8594;</span>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
