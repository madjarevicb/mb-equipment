import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/ui/Breadcrumb";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";
import { COMPANY } from "@/lib/constants";
import { getDictionary } from "@/i18n/getDictionary";
import type { Locale } from "@/i18n/config";

export const dynamic = "force-static";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  return {
    title: dict.metadata.wasteManagement.title,
    description: dict.metadata.wasteManagement.description,
    keywords: [
      "commercial waste station",
      "IPC waste management",
      "kitchen waste separation",
      "commercial waste disposal",
      "restaurant waste management",
    ],
    alternates: {
      canonical: `/${locale}/equipment/neutral-inox/waste-management`,
      languages: { en: "/en/equipment/neutral-inox/waste-management", sr: "/sr/equipment/neutral-inox/waste-management" },
    },
    openGraph: {
      title: dict.metadata.wasteManagement.title,
      description: dict.metadata.wasteManagement.description,
      url: `${COMPANY.url}/${locale}/equipment/neutral-inox/waste-management`,
      siteName: COMPANY.name,
      locale: locale === "sr" ? "sr_RS" : "en_US",
      type: "website",
    },
    twitter: { card: "summary_large_image", title: dict.metadata.wasteManagement.title, description: dict.metadata.wasteManagement.description },
  };
}

const HERO_BLUR = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiMxMTEiLz48L3N2Zz4=";

export default async function WasteManagementPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        name: dict.metadata.wasteManagement.title,
        description: dict.metadata.wasteManagement.description,
        url: `${COMPANY.url}/${locale}/equipment/neutral-inox/waste-management`,
        isPartOf: { "@type": "WebSite", url: COMPANY.url },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: dict.breadcrumb.home, item: COMPANY.url },
          { "@type": "ListItem", position: 2, name: dict.nav.equipment, item: `${COMPANY.url}/${locale}/equipment` },
          { "@type": "ListItem", position: 3, name: dict.nav.neutralInox, item: `${COMPANY.url}/${locale}/equipment/neutral-inox` },
          { "@type": "ListItem", position: 4, name: dict.nav.wasteManagement, item: `${COMPANY.url}/${locale}/equipment/neutral-inox/waste-management` },
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
          { label: dict.nav.neutralInox, href: `/${locale}/equipment/neutral-inox` },
          { label: dict.nav.wasteManagement },
        ]}
      />

      {/* Hero */}
      <section className="relative min-h-[50vh] lg:min-h-[60vh] flex items-center overflow-hidden" aria-labelledby="hero-heading">
        <Image src="/images/whatwedo/adhoc-kitchen.jpg" alt="Professional kitchen waste management stations" fill priority sizes="100vw" className="object-cover" placeholder="blur" blurDataURL={HERO_BLUR} />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-navy/20" />
        <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32">
          <div className="max-w-2xl">
            <p className="text-gold text-xs font-medium uppercase tracking-[0.3em] mb-6">{dict.nav.neutralInox}</p>
            <h1 id="hero-heading" className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.05] mb-6">
              IPC Waste<br /><span className="italic font-normal">Stations</span>
            </h1>
            <div className="w-16 h-px bg-gold/60 mb-6" />
            <p className="text-white/70 text-lg leading-relaxed max-w-lg font-light">
              Professional waste management and separation stations — hygienic, space-efficient, and compliant with local waste codes.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-28 lg:py-36 bg-white" aria-labelledby="content-heading">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
              <div className="lg:col-span-7">
                <p className="text-text-secondary text-xs font-medium uppercase tracking-[0.3em] mb-6">{dict.nav.wasteManagement}</p>
                <h2 id="content-heading" className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary leading-[1.1]">
                  Clean Kitchen,<br /><span className="italic font-normal">Sorted Waste</span>
                </h2>
              </div>
              <div className="lg:col-span-5 flex flex-col justify-end">
                <p className="text-text-secondary leading-relaxed mb-6">
                  IPC waste stations integrate waste separation, compaction, and disposal into a single hygienic unit. Designed for commercial kitchens where space, hygiene, and waste code compliance are critical.
                </p>
                <Link href={`/${locale}/contact`} className="inline-flex items-center gap-3 text-text-primary text-sm font-medium hover:gap-4 transition-all duration-300">
                  {dict.common.startYourProject} <span aria-hidden="true">&#8594;</span>
                </Link>
                <div className="w-12 h-px bg-gold/30 mt-8" />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 lg:py-32 bg-offwhite" aria-labelledby="features-heading">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end mb-12">
              <div className="lg:col-span-5">
                <h2 id="features-heading" className="font-display text-3xl sm:text-4xl font-bold text-text-primary leading-[1.1]">
                  System<br /><span className="italic font-normal">Features</span>
                </h2>
              </div>
            </div>
            <div className="w-full h-px bg-gray-200 mb-0" />
          </AnimatedSection>
          <AnimatedSection stagger>
            {[
              { name: "Waste Separation", desc: "Multi-stream sorting stations for organic, recyclable, and general waste — built into the kitchen workflow." },
              { name: "Hygienic Construction", desc: "Stainless steel construction with sealed joints, removable bins, and easy-clean surfaces for food-safe environments." },
              { name: "Space-Efficient Design", desc: "Compact footprint that integrates into existing kitchen layouts without disrupting operational flow." },
              { name: "Code Compliance", desc: "Designed to meet local waste management regulations and HACCP requirements for commercial food operations." },
            ].map((item, i) => (
              <div key={item.name} className="group py-6 border-b border-gray-200 transition-all duration-300">
                <div className="flex items-start gap-6">
                  <span className="font-display text-xl font-bold text-text-secondary/30 w-10 flex-shrink-0 italic">{String(i + 1).padStart(2, "0")}</span>
                  <div className="flex-1">
                    <p className="text-text-primary font-medium group-hover:text-red transition-colors duration-300 mb-2">{item.name}</p>
                    <p className="text-text-secondary text-sm leading-relaxed max-w-xl">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 lg:py-36 bg-white" aria-labelledby="cta-heading">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-end">
              <div className="lg:col-span-7">
                <p className="text-text-secondary text-xs font-medium uppercase tracking-[0.3em] mb-8">Work With Us</p>
                <h2 id="cta-heading" className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary leading-[1.1] mb-6">
                  Manage Waste<br /><span className="italic font-normal">Professionally.</span>
                </h2>
                <p className="text-text-secondary leading-relaxed mb-12 max-w-lg">
                  IPC waste stations for any kitchen size — hygienic, code-compliant, and designed to fit your layout.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button variant="primary" href={`/${locale}/contact`}>{dict.common.startYourProject}</Button>
                  <Button variant="ghost-light" href={`/${locale}/equipment/neutral-inox`} arrow={false}>{dict.nav.neutralInox}</Button>
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
