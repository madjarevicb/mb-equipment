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
    title: dict.metadata.warewashing.title,
    description: dict.metadata.warewashing.description,
    keywords: [
      "commercial dishwasher",
      "glasswasher commercial",
      "rack conveyor dishwasher",
      "warewashing equipment",
      "commercial kitchen dishwasher",
    ],
    alternates: {
      canonical: `/${locale}/equipment/neutral-inox/warewashing`,
      languages: { en: "/en/equipment/neutral-inox/warewashing", sr: "/sr/equipment/neutral-inox/warewashing", "x-default": "/sr/equipment/neutral-inox/warewashing" },
    },
    openGraph: {
      title: dict.metadata.warewashing.title,
      description: dict.metadata.warewashing.description,
      url: `${COMPANY.url}/${locale}/equipment/neutral-inox/warewashing`,
      siteName: COMPANY.name,
      locale: locale === "sr" ? "sr_RS" : "en_US",
      type: "website",
    },
    twitter: { card: "summary_large_image", title: dict.metadata.warewashing.title, description: dict.metadata.warewashing.description },
  };
}

const HERO_BLUR = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiMxMTEiLz48L3N2Zz4=";

export default async function WarewashingPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        name: dict.metadata.warewashing.title,
        description: dict.metadata.warewashing.description,
        url: `${COMPANY.url}/${locale}/equipment/neutral-inox/warewashing`,
        isPartOf: { "@type": "WebSite", url: COMPANY.url },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: dict.breadcrumb.home, item: COMPANY.url },
          { "@type": "ListItem", position: 2, name: dict.nav.equipment, item: `${COMPANY.url}/${locale}/equipment` },
          { "@type": "ListItem", position: 3, name: dict.nav.neutralInox, item: `${COMPANY.url}/${locale}/equipment/neutral-inox` },
          { "@type": "ListItem", position: 4, name: dict.nav.warewashing, item: `${COMPANY.url}/${locale}/equipment/neutral-inox/warewashing` },
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
          { label: dict.nav.warewashing },
        ]}
      />

      {/* Hero */}
      <section className="relative min-h-[50vh] lg:min-h-[60vh] flex items-center overflow-hidden" aria-labelledby="hero-heading">
        <Image src="/images/whatwedo/adhoc-kitchen.jpg" alt="Commercial warewashing and dishwashing equipment" fill priority sizes="100vw" className="object-cover" placeholder="blur" blurDataURL={HERO_BLUR} />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-navy/20" />
        <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32">
          <div className="max-w-2xl">
            <p className="text-gold text-xs font-medium uppercase tracking-[0.3em] mb-6">{dict.nav.neutralInox}</p>
            <h1 id="hero-heading" className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.05] mb-6">
              Commercial<br /><span className="italic font-normal">Warewashing</span>
            </h1>
            <div className="w-16 h-px bg-gold/60 mb-6" />
            <p className="text-white/70 text-lg leading-relaxed max-w-lg font-light">
              Dishwashers, glasswashers, and rack conveyor systems — sized for your throughput requirements and kitchen workflow.
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
                <p className="text-text-secondary text-xs font-medium uppercase tracking-[0.3em] mb-6">{dict.nav.warewashing}</p>
                <h2 id="content-heading" className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary leading-[1.1]">
                  Clean Faster,<br /><span className="italic font-normal">Wash Smarter</span>
                </h2>
              </div>
              <div className="lg:col-span-5 flex flex-col justify-end">
                <p className="text-text-secondary leading-relaxed mb-6">
                  From undercounter glasswashers to pass-through hood-type machines and full rack conveyor systems — we specify warewashing equipment matched to your volume, space, and utility connections.
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

      {/* Equipment Types */}
      <section className="py-24 lg:py-32 bg-offwhite" aria-labelledby="types-heading">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end mb-12">
              <div className="lg:col-span-5">
                <h2 id="types-heading" className="font-display text-3xl sm:text-4xl font-bold text-text-primary leading-[1.1]">
                  Equipment<br /><span className="italic font-normal">Types</span>
                </h2>
              </div>
            </div>
            <div className="w-full h-px bg-gray-200 mb-0" />
          </AnimatedSection>
          <AnimatedSection stagger>
            {[
              { name: "Undercounter Dishwashers", desc: "Compact machines for bars, cafes, and small kitchens — fast cycle times in a minimal footprint." },
              { name: "Hood-Type Dishwashers", desc: "Pass-through machines for medium-volume operations — higher capacity with efficient water and energy use." },
              { name: "Rack Conveyor Systems", desc: "High-volume washing lines for large kitchens, banquet facilities, and central production units." },
              { name: "Glasswashers", desc: "Dedicated glass washing for bars and front-of-house — gentle cycles that protect glassware and eliminate spots." },
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
                  Wash at<br /><span className="italic font-normal">Scale.</span>
                </h2>
                <p className="text-text-secondary leading-relaxed mb-12 max-w-lg">
                  From a single undercounter dishwasher to a complete rack conveyor line — we specify warewashing equipment for any kitchen volume.
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
