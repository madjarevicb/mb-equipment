import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/ui/Breadcrumb";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";
import { COMPANY } from "@/lib/constants";
import { thermalBrands } from "@/data/thermal-processing";

export const dynamic = "force-static";

const PAGE_TITLE = "Commercial Ranges & Cooking Suites — Gas & Induction | MB Equipment Solutions";
const PAGE_DESC = "Commercial cooking ranges and suites — gas, induction, and solid-top. Silko and Lincat authorized supply for professional kitchens.";

export const metadata: Metadata = {
  title: "Ranges & Cooking Suites",
  description: PAGE_DESC,
  keywords: ["commercial cooking range", "induction cooking suite", "gas range commercial", "professional cooking suites", "Silko cooking equipment"],
  alternates: { canonical: "/equipment/thermal-processing/ranges" },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESC,
    url: `${COMPANY.url}/equipment/thermal-processing/ranges`,
    siteName: COMPANY.name,
    locale: "en_US",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: PAGE_TITLE, description: PAGE_DESC },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      name: PAGE_TITLE,
      description: PAGE_DESC,
      url: `${COMPANY.url}/equipment/thermal-processing/ranges`,
      isPartOf: { "@type": "WebSite", url: COMPANY.url },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: COMPANY.url },
        { "@type": "ListItem", position: 2, name: "Equipment", item: `${COMPANY.url}/equipment` },
        { "@type": "ListItem", position: 3, name: "Thermal Processing", item: `${COMPANY.url}/equipment/thermal-processing` },
        { "@type": "ListItem", position: 4, name: "Ranges & Cooking Suites", item: `${COMPANY.url}/equipment/thermal-processing/ranges` },
      ],
    },
  ],
};

const HERO_BLUR = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiMxMTEiLz48L3N2Zz4=";

const pageBrands = thermalBrands.filter((b) => ["Silko", "Lincat"].includes(b.name));

export default function RangesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />

      <Breadcrumb items={[
        { label: "Equipment", href: "/equipment" },
        { label: "Thermal Processing", href: "/equipment/thermal-processing" },
        { label: "Ranges & Cooking Suites" },
      ]} />

      {/* Hero */}
      <section className="relative min-h-[50vh] lg:min-h-[60vh] flex items-center overflow-hidden" aria-labelledby="hero-heading">
        <Image src="/images/whatwedo/chef-cooking.jpg" alt="Professional cooking ranges and suites in a commercial kitchen" fill priority sizes="100vw" className="object-cover" placeholder="blur" blurDataURL={HERO_BLUR} />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-navy/20" />
        <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32">
          <div className="max-w-2xl">
            <p className="text-gold text-xs font-medium uppercase tracking-[0.3em] mb-6">Thermal Processing</p>
            <h1 id="hero-heading" className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.05] mb-6">
              Ranges &<br />
              <span className="italic font-normal">Cooking Suites</span>
            </h1>
            <div className="w-16 h-px bg-gold/60 mb-6" />
            <p className="text-white/70 text-lg leading-relaxed max-w-lg font-light">Gas, induction, and solid-top cooking ranges — heavy-duty lines configured around your menu and kitchen layout.</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-28 lg:py-36 bg-white" aria-labelledby="content-heading">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
              <div className="lg:col-span-7">
                <p className="text-text-secondary text-xs font-medium uppercase tracking-[0.3em] mb-6">Ranges & Cooking Suites</p>
                <h2 id="content-heading" className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary leading-[1.1]">
                  Built Around<br />
                  <span className="italic font-normal">Your Menu</span>
                </h2>
              </div>
              <div className="lg:col-span-5 flex flex-col justify-end">
                <p className="text-text-secondary leading-relaxed mb-6">Heavy-duty cooking lines that anchor every professional kitchen. We specify gas, induction, and solid-top configurations by Silko and Lincat — matched to your production volume, menu, and available utilities.</p>
                <Link href="/contact" className="inline-flex items-center gap-3 text-text-primary text-sm font-medium hover:gap-4 transition-all duration-300">
                  Discuss your project <span aria-hidden="true">&#8594;</span>
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
                  Configure Your<br /><span className="italic font-normal">Cooking Line.</span>
                </h2>
                <p className="text-text-secondary leading-relaxed mb-12 max-w-lg">From a single range to a complete cooking suite — we specify equipment around your menu, not the other way around.</p>
                <div className="flex flex-wrap gap-4">
                  <Button variant="primary" href="/contact">Start Your Project</Button>
                  <Button variant="ghost-light" href="/equipment/thermal-processing" arrow={false}>All Thermal Equipment</Button>
                </div>
              </div>
              <div className="lg:col-span-5">
                <div className="border-l-2 border-gold/30 pl-8 space-y-6">
                  {[{ value: "50+", label: "Projects delivered" }, { value: "110+", label: "Brands represented" }].map((stat) => (
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
