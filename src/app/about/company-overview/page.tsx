import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import EquipmentCard from "@/components/ui/EquipmentCard";
import Overline from "@/components/ui/Overline";
import ProcessStepCard from "@/components/ui/ProcessStepCard";
import ValueCard from "@/components/ui/ValueCard";
import { COMPANY } from "@/lib/constants";
import type { Milestone } from "@/data/company-overview";
import {
  milestones,
  equipmentCategories,
  experienceSpaces,
  processSteps,
  companyValues,
} from "@/data/company-overview";

/* ---------- shared styles ---------- */
const ctaPrimary = "inline-flex items-center gap-2 bg-red text-white font-semibold px-8 py-4 hover:bg-red-hover hover:-translate-y-px focus-visible:outline-gold transition-[color,background-color,transform] shadow-lg";
const ctaSecondary = "inline-flex border border-white/20 text-white font-semibold px-8 py-4 hover:bg-white/10 focus-visible:outline-gold transition-colors";

/* ---------- metadata ---------- */
const PAGE_TITLE = "About Us — Commercial Kitchen Equipment Partner";
const PAGE_DESC = "Middleby endorsed commercial kitchen equipment partner in Belgrade. 110+ brands, full-cycle service from design to after-sales across 40+ countries.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  alternates: { canonical: "/about/company-overview" },
  openGraph: {
    title: `${PAGE_TITLE} | MB Equipment Solutions`,
    description: PAGE_DESC,
    url: "/about/company-overview",
    images: [{ url: "/images/whatwedo/chef-cooking.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${PAGE_TITLE} | MB Equipment Solutions`,
    description: PAGE_DESC,
    images: ["/images/whatwedo/chef-cooking.jpg"],
  },
};

/* ---------- structured data ---------- */
const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": `${COMPANY.url}/about/company-overview#webpage`,
  url: `${COMPANY.url}/about/company-overview`,
  name: `${PAGE_TITLE} | MB Equipment Solutions`,
  description: PAGE_DESC,
  inLanguage: "en",
  isPartOf: { "@id": `${COMPANY.url}/#website` },
  about: { "@id": `${COMPANY.url}/#organization` },
} as const;

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: COMPANY.url },
    { "@type": "ListItem", position: 2, name: "About", item: `${COMPANY.url}/about` },
    { "@type": "ListItem", position: 3, name: "Company Overview", item: `${COMPANY.url}/about/company-overview` },
  ],
} as const;

const serviceListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "The Full Cycle — MB Equipment Solutions Service Process",
  description: "Our five-step process covers the entire lifecycle of your commercial kitchen project.",
  itemListElement: processSteps.map((step, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: step.title,
    description: step.description,
  })),
} as const;

/* ---------- helpers ---------- */
const HERO_BLUR = "data:image/jpeg;base64,/9j/2wBDACgcHiMeGSgjISMtKygwPGRBPDc3PHtYXUlkkYCZlo+AjIqgtObDoKrarYqMyP/L2u71////m8H////6/+b9//j/2wBDASstLTw1PHZBQXb4pYyl+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj/wAARCAAGAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAID/8QAGhAAAgMBAQAAAAAAAAAAAAAAAQIAAxESUv/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A1ehhaELAhjm5I6t9REg//9k=";

const colorMap: Record<Milestone["color"], { dot: string; number: string }> = {
  gold: { dot: "bg-gold", number: "text-gold/20" },
  red: { dot: "bg-red", number: "text-red/20" },
};

const VISIBLE_EQUIPMENT = 6;

/* ---------- chevron icon ---------- */
function ChevronRight() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
    </svg>
  );
}

/* ---------- page ---------- */
export default function CompanyOverviewPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([aboutPageSchema, breadcrumbSchema, serviceListSchema]) }} />

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden" aria-labelledby="hero-heading">
        <Image
          src="/images/whatwedo/chef-cooking.jpg"
          alt="Professional chef working in a commercial kitchen equipped by MB Equipment Solutions"
          fill
          sizes="100vw"
          className="object-cover"
          priority
          placeholder="blur"
          blurDataURL={HERO_BLUR}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/80 to-navy/40" />

        <div className="relative max-w-7xl mx-auto px-6 py-32 lg:py-40">
          <div className="max-w-2xl">
            <div className="mb-6">
              <Overline label="Company Overview" />
            </div>

            <h1 id="hero-heading" className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6">
              One Company.<br />
              <span className="text-gold italic">The Whole Kitchen.</span>
            </h1>

            <p className="text-white/70 text-lg leading-relaxed mb-8">
              For over two decades, MB Equipment Solutions has designed, supplied, installed, and serviced commercial kitchen equipment across Southeast Europe and beyond. Based in <Link href="/demo-centers" className="text-white/90 underline underline-offset-2 hover:text-gold transition-colors">Belgrade, Serbia</Link>, and endorsed by <Link href="/about/innovation" className="text-white/90 underline underline-offset-2 hover:text-gold transition-colors">Middleby Corporation</Link>, we represent 110+ of the world&apos;s leading foodservice brands — backed by a full-time engineering and service team that stays with your project long after delivery.
            </p>

            {/* Stat line */}
            <div className="flex flex-wrap gap-x-8 gap-y-2 mb-10 text-sm font-semibold text-white/50 uppercase tracking-wider">
              <span>2,000+ Projects</span>
              <span>40+ Countries</span>
              <span>110+ Brands</span>
            </div>

            <Link href="/contact" className={ctaPrimary}>
              Get a Free Kitchen Assessment
              <ChevronRight />
            </Link>
          </div>
        </div>
      </section>

      {/* Origin Story — Timeline */}
      <section className="py-28 bg-white" aria-labelledby="timeline-heading">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="mb-20">
              <SectionHeading id="timeline-heading" heading="How We Got Here" divider />
            </div>
          </AnimatedSection>

          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-[0.9375rem] lg:left-1/2 top-0 bottom-0 w-px bg-gold/20 lg:-translate-x-px" />

            <AnimatedSection stagger>
              <ol aria-label="Company timeline" className="list-none">
                {milestones.map((m, i) => (
                  <li key={m.number} className={`relative flex flex-col lg:flex-row gap-8 lg:gap-16 pl-10 lg:pl-0 ${i < milestones.length - 1 ? "mb-20" : ""}`}>
                    <div className={`absolute left-[0.4375rem] lg:left-1/2 top-2 w-4 h-4 rounded-full ${colorMap[m.color].dot} border-4 border-white lg:-translate-x-1/2 z-10`} />
                    <div className="lg:w-1/2 lg:text-right lg:pr-16">
                      <span className={`font-display text-4xl lg:text-7xl font-bold ${colorMap[m.color].number} italic leading-none`} aria-hidden="true">{m.number}</span>
                      <span className="text-gold text-xs font-semibold uppercase tracking-[0.2em]">{m.year}</span>
                      <h3 className="text-xl font-bold text-text-primary mt-1">{m.title}</h3>
                    </div>
                    <div className="lg:w-1/2 lg:pl-16">
                      <p className="text-text-secondary leading-relaxed">{m.description}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* What We Do — Equipment Categories */}
      <section className="py-28 bg-navy" aria-labelledby="whatwedo-heading">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <SectionHeading id="whatwedo-heading" heading="What We Do" theme="dark" subtext="Fifteen equipment categories. Four experience spaces. One partner who specs, installs, and services all of it." />
          </AnimatedSection>

          <AnimatedSection stagger className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {equipmentCategories.slice(0, VISIBLE_EQUIPMENT).map((item) => (
              <EquipmentCard key={item.title} {...item} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" gradient="red-gold" />
            ))}
          </AnimatedSection>

          {/* Remaining cards — hidden by default, toggled via details/summary */}
          <details className="mt-6 group">
            <summary className="cursor-pointer list-none flex items-center justify-center gap-2 text-gold font-semibold text-sm uppercase tracking-wider hover:text-white transition-colors py-4 select-none">
              <span className="group-open:hidden">View All 15 Categories</span>
              <span className="hidden group-open:inline">Show Less</span>
              <svg className="w-4 h-4 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </summary>
            <AnimatedSection stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-2">
              {equipmentCategories.slice(VISIBLE_EQUIPMENT).map((item) => (
                <EquipmentCard key={item.title} {...item} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" gradient="red-gold" />
              ))}
            </AnimatedSection>
          </details>

          {/* Experience Spaces */}
          <AnimatedSection>
            <div className="mt-20 mb-8">
              <Overline label="Experience Spaces" muted />
            </div>
          </AnimatedSection>
          <AnimatedSection stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {experienceSpaces.map((item) => (
              <EquipmentCard key={item.title} {...item} sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw" gradient="gold" />
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* Full Cycle */}
      <section className="relative py-28 bg-white overflow-hidden" aria-labelledby="process-heading">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="mb-20">
              <SectionHeading id="process-heading" overline="The Process" heading="The Full Cycle" subtext="Most equipment companies stop at delivery. We do not." />
            </div>
          </AnimatedSection>

          <AnimatedSection stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step, i) => (
              <ProcessStepCard key={step.title} {...step} index={i} isLast={i === processSteps.length - 1} />
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* Values */}
      <section className="py-28 bg-offwhite" aria-labelledby="values-heading">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="mb-20">
              <SectionHeading id="values-heading" heading="Our Values" divider />
            </div>
          </AnimatedSection>

          <AnimatedSection stagger className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {companyValues.map((value) => (
              <ValueCard key={value.title} {...value} />
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 bg-navy" aria-labelledby="cta-heading">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center">
              <div className="mb-8">
                <Overline label="Let&apos;s Talk" align="center" />
              </div>
              <h2 id="cta-heading" className="font-display text-4xl lg:text-5xl font-bold text-white italic mb-6">
                The Right Equipment.<br />
                <span className="text-gold">The Right Partner.</span>
              </h2>
              <p className="text-white/70 text-lg leading-relaxed max-w-xl mx-auto mb-10">
                Whether you are designing a new kitchen, upgrading an existing one, or expanding across the region — involve us from day one.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact" className={ctaPrimary}>
                  Get a Free Kitchen Assessment
                  <ChevronRight />
                </Link>
                <Link href="/references" className={ctaSecondary}>
                  See Our References
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
