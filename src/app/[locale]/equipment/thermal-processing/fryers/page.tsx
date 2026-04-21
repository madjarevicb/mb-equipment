import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/ui/Breadcrumb";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";
import { COMPANY } from "@/lib/constants";
import { thermalBrands } from "@/data/thermal-processing";
import { getDictionary } from "@/i18n/getDictionary";
import type { Locale } from "@/i18n/config";

export const dynamic = "force-static";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  return {
    title: dict.metadata.fryers.title,
    description: dict.metadata.fryers.description,
    keywords: ["commercial deep fryer", "high-efficiency fryer", "oil filtration fryer", "restaurant fryer", "commercial frying equipment"],
    alternates: {
      canonical: `/${locale}/equipment/thermal-processing/fryers`,
      languages: { en: "/en/equipment/thermal-processing/fryers", sr: "/sr/equipment/thermal-processing/fryers" },
    },
    openGraph: {
      title: dict.metadata.fryers.title,
      description: dict.metadata.fryers.description,
      url: `${COMPANY.url}/${locale}/equipment/thermal-processing/fryers`,
      siteName: COMPANY.name,
      locale: locale === "sr" ? "sr_RS" : "en_US",
      type: "website",
    },
    twitter: { card: "summary_large_image", title: dict.metadata.fryers.title, description: dict.metadata.fryers.description },
  };
}

const HERO_BLUR = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiMxMTEiLz48L3N2Zz4=";

const pageBrands = thermalBrands.filter((b) => ["Silko", "Lincat"].includes(b.name));

export default async function FryersPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        name: dict.metadata.fryers.title,
        description: dict.metadata.fryers.description,
        url: `${COMPANY.url}/${locale}/equipment/thermal-processing/fryers`,
        isPartOf: { "@type": "WebSite", url: COMPANY.url },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: dict.breadcrumb.home, item: COMPANY.url },
          { "@type": "ListItem", position: 2, name: dict.nav.equipment, item: `${COMPANY.url}/${locale}/equipment` },
          { "@type": "ListItem", position: 3, name: dict.nav.thermalProcessing, item: `${COMPANY.url}/${locale}/equipment/thermal-processing` },
          { "@type": "ListItem", position: 4, name: dict.nav.fryers, item: `${COMPANY.url}/${locale}/equipment/thermal-processing/fryers` },
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
          { label: dict.nav.thermalProcessing, href: `/${locale}/equipment/thermal-processing` },
          { label: dict.nav.fryers },
        ]}
      />

      {/* Hero */}
      <section className="relative min-h-[50vh] lg:min-h-[60vh] flex items-center overflow-hidden" aria-labelledby="hero-heading">
        <Image src="/images/whatwedo/frying.jpg" alt="Commercial deep fryers for professional kitchens" fill priority sizes="100vw" className="object-cover" placeholder="blur" blurDataURL={HERO_BLUR} />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-navy/20" />
        <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32">
          <div className="max-w-2xl">
            <p className="text-gold text-xs font-medium uppercase tracking-[0.3em] mb-6">{dict.nav.thermalProcessing}</p>
            <h1 id="hero-heading" className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.05] mb-6">
              Commercial<br />
              <span className="italic font-normal">Fryers</span>
            </h1>
            <div className="w-16 h-px bg-gold/60 mb-6" />
            <p className="text-white/70 text-lg leading-relaxed max-w-lg font-light">High-efficiency deep fryers with built-in oil filtration — consistent product quality and reduced oil consumption for every volume.</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-28 lg:py-36 bg-white" aria-labelledby="content-heading">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
              <div className="lg:col-span-7">
                <p className="text-text-secondary text-xs font-medium uppercase tracking-[0.3em] mb-6">{dict.nav.fryers}</p>
                <h2 id="content-heading" className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary leading-[1.1]">
                  Consistent Product,<br />
                  <span className="italic font-normal">Every Batch</span>
                </h2>
              </div>
              <div className="lg:col-span-5 flex flex-col justify-end">
                <p className="text-text-secondary leading-relaxed mb-6">From countertop units to floor-standing batteries — we supply fryers with built-in oil filtration systems that extend oil life, reduce operating costs, and maintain consistent product quality across every shift.</p>
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
                  Fry<br /><span className="italic font-normal">Better.</span>
                </h2>
                <p className="text-text-secondary leading-relaxed mb-12 max-w-lg">High-efficiency fryers sized for your product and volume — from single-unit restaurants to multi-location QSR rollouts.</p>
                <div className="flex flex-wrap gap-4">
                  <Button variant="primary" href={`/${locale}/contact`}>{dict.common.startYourProject}</Button>
                  <Button variant="ghost-light" href={`/${locale}/equipment/thermal-processing`} arrow={false}>{dict.nav.thermalProcessing}</Button>
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
