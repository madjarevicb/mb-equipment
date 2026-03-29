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
  faqItems,
} from "@/data/company-overview";

export const dynamic = "force-static";

/* ---------- shared styles ---------- */
const ctaPrimary = "inline-flex items-center gap-2 bg-red text-white font-semibold px-8 py-4 hover:bg-red-hover hover:-translate-y-px focus-visible:outline-gold transition-[color,background-color,transform] shadow-lg";
const ctaSecondary = "inline-flex items-center gap-2 border border-white/30 text-white font-semibold px-8 py-4 hover:bg-white/10 focus-visible:outline-gold transition-colors";

/* ---------- metadata ---------- */
const PAGE_TITLE = "About MB Equipment Solutions — Commercial Kitchen Equipment Partner";
const PAGE_DESC = "Middleby endorsed commercial kitchen equipment partner in Belgrade, Serbia. 110+ brands, full-cycle service from design to after-sales across 40+ countries in Southeast Europe and beyond.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  alternates: { canonical: "/about/company-overview" },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESC,
    url: "/about/company-overview",
    images: [{ url: "/images/whatwedo/chef-cooking.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESC,
    images: ["/images/whatwedo/chef-cooking.jpg"],
  },
};

/* ---------- structured data (@graph wrapper) ---------- */
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": `${COMPANY.url}/about/company-overview#webpage`,
      url: `${COMPANY.url}/about/company-overview`,
      name: `${PAGE_TITLE} | MB Equipment Solutions`,
      description: PAGE_DESC,
      inLanguage: "en",
      isPartOf: { "@id": `${COMPANY.url}/#website` },
      about: { "@id": `${COMPANY.url}/#organization` },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: COMPANY.url },
        { "@type": "ListItem", position: 2, name: "Company Overview", item: `${COMPANY.url}/about/company-overview` },
      ],
    },
    {
      "@type": "ItemList",
      name: "The Full Cycle — MB Equipment Solutions Service Process",
      description: "Our five-step process covers the entire lifecycle of your commercial kitchen project.",
      itemListElement: processSteps.map((step, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: step.title,
        description: step.description,
      })),
    },
    {
      "@type": "FAQPage",
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
  ],
};

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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      {/* Breadcrumb nav */}
      <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto px-6 pt-4">
        <ol className="flex items-center gap-2 text-sm text-text-secondary">
          <li><Link href="/" className="hover:text-gold transition-colors">Home</Link></li>
          <li aria-hidden="true">/</li>
          <li><Link href="/about/company-overview" className="hover:text-gold transition-colors">About</Link></li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" className="text-text-primary font-medium">Company Overview</li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="relative min-h-[60vh] lg:min-h-[70vh] flex items-center overflow-hidden" aria-labelledby="hero-heading">
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

        <div className="relative max-w-7xl mx-auto px-6 py-28 lg:py-36">
            <div className="max-w-2xl">
              <div className="mb-6">
                <Overline label="Company Overview" />
              </div>

              <h1 id="hero-heading" className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6">
                One Company.<br />
                <span className="text-gold italic">The Whole Kitchen.</span>
                <span className="sr-only"> — Commercial Kitchen Equipment in Belgrade, Serbia</span>
              </h1>

              <p className="text-white/90 text-lg leading-relaxed mb-4">
                For over two decades, MB Equipment Solutions has designed, supplied, installed, and serviced commercial kitchen equipment across Southeast Europe and beyond.
              </p>
              <p className="text-white/90 text-lg leading-relaxed mb-8">
                Based in <Link href="/demo-centers" className="text-white underline underline-offset-2 hover:text-gold transition-colors">Belgrade, Serbia</Link>, and endorsed by <Link href="/about/innovation" className="text-white underline underline-offset-2 hover:text-gold transition-colors">Middleby Corporation</Link>, we represent 110+ of the world&apos;s leading foodservice brands — backed by a full-time engineering and service team that stays with your project long after delivery.
              </p>

              {/* Stat line */}
              <ul aria-label="Company statistics" className="flex flex-col sm:flex-row flex-wrap gap-x-8 gap-y-2 mb-10 text-sm font-semibold text-white/80 uppercase tracking-wider list-none">
                <li>2,000+ Projects</li>
                <li>40+ Countries</li>
                <li>110+ Brands</li>
              </ul>

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
              <SectionHeading id="timeline-heading" heading="20 Years of Building Kitchens That Work" divider />
            </div>
          </AnimatedSection>

          <AnimatedSection stagger>
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-[0.9375rem] lg:left-1/2 top-0 bottom-0 w-[2px] bg-gold/20 lg:-translate-x-px" />
              <ol aria-label="Company timeline" className="list-none">
                {milestones.map((m, i) => (
                  <li key={m.number} className={`relative flex flex-col lg:flex-row gap-8 lg:gap-16 pl-10 lg:pl-0 ${i < milestones.length - 1 ? "mb-20" : ""}`}>
                    <div className={`absolute left-[0.4375rem] lg:left-1/2 top-2 w-4 h-4 rounded-full ${colorMap[m.color].dot} border-4 border-white lg:-translate-x-1/2 z-10`} />
                    <div className="lg:w-1/2 lg:text-right lg:pr-16">
                      <span className={`font-display text-5xl lg:text-7xl font-bold ${colorMap[m.color].number} italic leading-none`} aria-hidden="true">{m.number}</span>
                      <span className="text-gold text-sm font-semibold uppercase tracking-[0.2em]">{m.year}</span>
                      <h3 className="text-xl font-bold text-text-primary mt-1">{m.title}</h3>
                    </div>
                    <div className="lg:w-1/2 lg:pl-16">
                      <p className="text-text-secondary leading-relaxed">{m.description}</p>
                    </div>
                  </li>
                ))}
              </ol>
          </div>
            </AnimatedSection>
        </div>
      </section>

      {/* What We Do — Equipment Categories */}
      <section className="py-28 bg-navy" aria-labelledby="whatwedo-heading">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <SectionHeading id="whatwedo-heading" heading="Everything Your Kitchen Needs" theme="dark" subtext="Fifteen equipment categories. Four experience spaces. One partner who specs, installs, and services all of it." />
          </AnimatedSection>

          <AnimatedSection stagger className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {equipmentCategories.slice(0, VISIBLE_EQUIPMENT).map((item) => (
              <EquipmentCard key={item.title} {...item} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" gradient="red-gold" />
            ))}
          </AnimatedSection>

          {/* Remaining cards — hidden by default, toggled via details/summary */}
          <details className="mt-6 group">
            <summary className="cursor-pointer list-none flex items-center justify-center gap-2 text-gold font-semibold text-sm uppercase tracking-wider hover:text-white transition-colors py-4 select-none focus-visible:outline-gold focus-visible:outline-offset-2">
              <span className="group-open:hidden">View All {equipmentCategories.length} Categories</span>
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
          {/* CTA within equipment section */}
          <AnimatedSection>
            <div className="flex justify-center mt-12">
              <Link href="/demo-centers" className={ctaSecondary}>
                Explore Our Demo Centers
                <ChevronRight />
              </Link>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="mt-24 mb-12">
              <h3 className="sr-only" id="experience-spaces-heading">Experience Spaces</h3>
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

          <AnimatedSection stagger>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {processSteps.slice(0, 3).map((step, i) => (
                <ProcessStepCard key={step.title} {...step} index={i} isLast={false} />
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 max-w-3xl mx-auto">
              {processSteps.slice(3).map((step, i) => (
                <ProcessStepCard key={step.title} {...step} index={i + 3} isLast={i + 3 === processSteps.length - 1} />
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Mid-page CTA */}
      <section className="py-16 bg-navy" aria-labelledby="mid-cta-heading">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h2 id="mid-cta-heading" className="font-display text-2xl lg:text-3xl font-bold text-white italic mb-2">Ready to Start Your Kitchen Project?</h2>
                <p className="text-white/90">Involve us from day one — consultation is free.</p>
              </div>
              <Link href="/contact" className={`${ctaPrimary} shrink-0`}>
                Schedule a Consultation
                <ChevronRight />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Values */}
      <section className="py-28 bg-offwhite" aria-labelledby="values-heading">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="mb-20">
              <SectionHeading id="values-heading" heading="What We Will Not Compromise On" divider />
            </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {companyValues.map((value) => (
              <ValueCard key={value.title} {...value} />
            ))}
          </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-24 bg-white" aria-labelledby="proof-heading">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="mb-16">
              <SectionHeading id="proof-heading" heading="Trusted Across 40+ Countries" subtext="From global hotel chains to regional QSR operators, our equipment powers kitchens in Southeast Europe, the Middle East, and Central Asia." divider />
            </div>
            <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 text-lg font-semibold text-text-secondary uppercase tracking-wider mb-12">
              {["Starbucks", "KFC", "McDonald\u2019s", "Hilton", "Marriott", "Hyatt"].map((name) => (
                <Link key={name} href="/references" className="hover:text-gold transition-colors">{name}</Link>
              ))}
            </div>
            <blockquote className="max-w-2xl mx-auto text-center border-l-0 border-t-2 border-gold/30 pt-8">
              <p className="text-lg text-text-secondary italic leading-relaxed">&ldquo;MB Equipment Solutions handled everything — from specification to commissioning — across multiple locations in Belgrade and beyond. One partner, zero gaps.&rdquo;</p>
              <footer className="mt-4 text-sm font-semibold text-text-primary">— <cite>Multi-unit QSR operator, Southeast Europe</cite></footer>
            </blockquote>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-28 bg-offwhite" aria-labelledby="faq-heading">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="mb-20">
              <SectionHeading id="faq-heading" heading="Frequently Asked Questions" italic={false} />
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
              {faqItems.map((item) => (
                <details key={item.question} className="group bg-white p-6 shadow-sm">
                  <summary className="cursor-pointer list-none flex items-center justify-between gap-4 font-semibold text-text-primary text-lg focus-visible:outline-gold">
                    {item.question}
                    <svg className="w-5 h-5 text-gold shrink-0 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </summary>
                  <p className="mt-4 text-text-secondary leading-relaxed" dangerouslySetInnerHTML={{ __html: item.answer }} />
                </details>
              ))}
            </div>
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
              <p className="text-white/90 text-lg leading-relaxed max-w-xl mx-auto mb-10">
                Whether you are designing a new kitchen in Belgrade, upgrading an existing one, or expanding across Southeast Europe — involve us from day one.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact" className={ctaPrimary}>
                  Get a Free Kitchen Assessment
                  <ChevronRight />
                </Link>
                <Link href="/references" className={ctaSecondary}>
                  See Our References
                  <ChevronRight />
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
