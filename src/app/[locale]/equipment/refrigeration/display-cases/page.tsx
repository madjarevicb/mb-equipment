import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/ui/Breadcrumb";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";
import { COMPANY } from "@/lib/constants";
import { refrigerationBrands } from "@/data/refrigeration";
import { getDictionary } from "@/i18n/getDictionary";
import type { Locale } from "@/i18n/config";

export const dynamic = "force-static";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  return {
    title: dict.metadata.displayCases.title,
    description: dict.metadata.displayCases.description,
    keywords: ["refrigerated display case", "commercial vitrine", "patisserie display case", "deli display counter", "grab-and-go refrigeration"],
    alternates: {
      canonical: `/${locale}/equipment/refrigeration/display-cases`,
      languages: { en: "/en/equipment/refrigeration/display-cases", sr: "/sr/equipment/refrigeration/display-cases" },
    },
    openGraph: {
      title: dict.metadata.displayCases.title,
      description: dict.metadata.displayCases.description,
      url: `${COMPANY.url}/${locale}/equipment/refrigeration/display-cases`,
      siteName: COMPANY.name,
      locale: locale === "sr" ? "sr_RS" : "en_US",
      type: "website",
    },
    twitter: { card: "summary_large_image", title: dict.metadata.displayCases.title, description: dict.metadata.displayCases.description },
  };
}

const HERO_BLUR = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiMxMTEiLz48L3N2Zz4=";

const pageBrands = refrigerationBrands.filter((b) => ["JBG-2", "Infrico", "Tefcold", "Bartscher"].includes(b.name));

export default async function DisplayCasesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        name: dict.metadata.displayCases.title,
        description: dict.metadata.displayCases.description,
        url: `${COMPANY.url}/${locale}/equipment/refrigeration/display-cases`,
        isPartOf: { "@type": "WebSite", url: COMPANY.url },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: dict.breadcrumb.home, item: COMPANY.url },
          { "@type": "ListItem", position: 2, name: dict.nav.equipment, item: `${COMPANY.url}/${locale}/equipment` },
          { "@type": "ListItem", position: 3, name: dict.nav.refrigeration, item: `${COMPANY.url}/${locale}/equipment/refrigeration` },
          { "@type": "ListItem", position: 4, name: dict.nav.displayCases, item: `${COMPANY.url}/${locale}/equipment/refrigeration/display-cases` },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />

      <Breadcrumb
        locale={locale as Locale}
        homeLabel={dict.breadcrumb.home}
        items={[
          { label: dict.nav.equipment, href: `/${locale}/equipment` },
          { label: dict.nav.refrigeration, href: `/${locale}/equipment/refrigeration` },
          { label: dict.nav.displayCases },
        ]}
      />

      {/* Hero */}
      <section className="relative min-h-[50vh] lg:min-h-[60vh] flex items-center overflow-hidden" aria-labelledby="hero-heading">
        <Image src="/images/whatwedo/beverage.jpg" alt="Commercial refrigerated display cases and vitrines" fill priority sizes="100vw" className="object-cover" placeholder="blur" blurDataURL={HERO_BLUR} />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-navy/20" />
        <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32">
          <div className="max-w-2xl">
            <p className="text-gold text-xs font-medium uppercase tracking-[0.3em] mb-6">{dict.nav.refrigeration}</p>
            <h1 id="hero-heading" className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.05] mb-6">
              Display Cases &<br />
              <span className="italic font-normal">Vitrines</span>
            </h1>
            <div className="w-16 h-px bg-gold/60 mb-6" />
            <p className="text-white/70 text-lg leading-relaxed max-w-lg font-light">Refrigerated and heated display cases for patisserie, deli, and grab-and-go — designed for visual merchandising and food safety.</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-28 lg:py-36 bg-white" aria-labelledby="content-heading">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
              <div className="lg:col-span-7">
                <p className="text-text-secondary text-xs font-medium uppercase tracking-[0.3em] mb-6">{dict.nav.displayCases}</p>
                <h2 id="content-heading" className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary leading-[1.1]">
                  Showcase Your<br />
                  <span className="italic font-normal">Product</span>
                </h2>
              </div>
              <div className="lg:col-span-5 flex flex-col justify-end">
                <p className="text-text-secondary leading-relaxed mb-6">Display cases and vitrines combine visual merchandising with precise temperature control. We supply JBG-2 and Tefcold units configured for your product type — patisserie, deli, grab-and-go, and beverage display.</p>
                <Link href={`/${locale}/contact`} className="inline-flex items-center gap-3 text-text-primary text-sm font-medium hover:gap-4 transition-all duration-300">
                  {dict.common.startYourProject} <span aria-hidden="true">&#8594;</span>
                </Link>
                <div className="w-12 h-px bg-gold/30 mt-8" />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Brands */}
      {pageBrands.length > 0 && (
        <section className="py-24 lg:py-32 bg-navy" aria-labelledby="brands-heading">
          <div className="max-w-7xl mx-auto px-6">
            <AnimatedSection>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                <div className="lg:col-span-5">
                  <p className="text-gold text-xs font-medium uppercase tracking-[0.3em] mb-6">Brands</p>
                  <h2 id="brands-heading" className="font-display text-3xl sm:text-4xl font-bold text-white leading-[1.1] mb-8">
                    Authorized<br /><span className="italic font-normal">Supply</span>
                  </h2>
                  <div className="w-12 h-px bg-gold/30" />
                </div>
                <div className="lg:col-span-7 flex flex-col gap-6 lg:justify-center">
                  {pageBrands.map((brand) => (
                    <div key={brand.name} className="border-l-2 border-gold/40 pl-6 py-2">
                      <p className="text-white font-medium text-sm">{brand.name}</p>
                      <p className="text-white/40 text-xs mt-1">{brand.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-28 lg:py-36 bg-offwhite" aria-labelledby="cta-heading">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-end">
              <div className="lg:col-span-7">
                <p className="text-text-secondary text-xs font-medium uppercase tracking-[0.3em] mb-8">Work With Us</p>
                <h2 id="cta-heading" className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary leading-[1.1] mb-6">
                  Display With<br /><span className="italic font-normal">Confidence.</span>
                </h2>
                <p className="text-text-secondary leading-relaxed mb-12 max-w-lg">From single countertop vitrines to complete display merchandising systems — specified for your product and retail format.</p>
                <div className="flex flex-wrap gap-4">
                  <Button variant="primary" href={`/${locale}/contact`}>{dict.common.startYourProject}</Button>
                  <Button variant="ghost-light" href={`/${locale}/equipment/refrigeration`} arrow={false}>{dict.nav.refrigeration}</Button>
                </div>
              </div>
              <div className="lg:col-span-5">
                <div className="border-l-2 border-gold/30 pl-8 space-y-6">
                  {[{ value: "50+", label: dict.common.projectsDelivered }, { value: "110+", label: dict.common.brandsRepresented }].map((stat) => (
                    <div key={stat.label}>
                      <span className="font-display text-3xl font-bold text-text-primary">{stat.value}</span>
                      <p className="text-text-secondary/50 text-xs uppercase tracking-[0.15em] mt-1">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
