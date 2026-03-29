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

export const metadata: Metadata = {
  title: "Commercial Kitchen Equipment Partner",
  description:
    "Middleby endorsed commercial kitchen equipment partner in Belgrade. 110+ brands, full-cycle service from design to after-sales across 40+ countries.",
  alternates: { canonical: "/about/company-overview" },
  openGraph: {
    title: "Company Overview — MB Equipment Solutions",
    description:
      "Middleby endorsed commercial kitchen equipment partner in Belgrade. 110+ brands, full-cycle service from design to after-sales across 40+ countries.",
    url: "/about/company-overview",
    images: [{ url: "/images/whatwedo/chef-cooking.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Company Overview — MB Equipment Solutions",
    description:
      "Middleby endorsed commercial kitchen equipment partner in Belgrade. 110+ brands, full-cycle service from design to after-sales across 40+ countries.",
    images: ["/images/whatwedo/chef-cooking.jpg"],
  },
};

const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": `${COMPANY.url}/about/company-overview#webpage`,
  url: `${COMPANY.url}/about/company-overview`,
  name: "Company Overview — MB Equipment Solutions",
  description: "Middleby endorsed commercial kitchen equipment partner in Belgrade. 110+ brands, full-cycle service from design to after-sales across 40+ countries.",
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

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "The Full Cycle — How MB Equipment Solutions Delivers a Commercial Kitchen",
  description: "Most equipment companies stop at delivery. We do not. Our five-step process covers the entire lifecycle of your commercial kitchen project.",
  step: processSteps.map((step, i) => ({
    "@type": "HowToStep",
    position: i + 1,
    name: step.title,
    text: step.description,
  })),
} as const;

const colorMap: Record<Milestone["color"], { dot: string; number: string }> = {
  gold: { dot: "bg-gold", number: "text-gold/20" },
  red: { dot: "bg-red", number: "text-red/20" },
};

export default function CompanyOverviewPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([aboutPageSchema, breadcrumbSchema, howToSchema]) }} />

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden" aria-labelledby="hero-heading">
        <Image
          src="/images/whatwedo/chef-cooking.jpg"
          alt="Professional chef working in a commercial kitchen equipped by MB Equipment Solutions"
          fill
          sizes="100vw"
          className="object-cover"
          priority
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

            <p className="text-white/70 text-lg leading-relaxed mb-10">
              For over two decades, MB Equipment Solutions has designed, supplied, installed, and serviced commercial kitchen equipment across Southeast Europe and beyond. Based in Belgrade, Serbia, and endorsed by Middleby Corporation, we represent 110+ of the world&apos;s leading foodservice brands — backed by a full-time engineering and service team that stays with your project long after delivery.
            </p>

            <Link href="/contact" className="inline-flex items-center gap-2 bg-red text-white font-semibold px-8 py-4 hover:bg-red-hover hover:-translate-y-px focus-visible:outline-gold transition-[color,background-color,transform] shadow-lg">
              Schedule a Consultation
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
            <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-px bg-gold/20 lg:-translate-x-px" />

            <ol aria-label="Company timeline" className="list-none">
              {milestones.map((m, i) => (
                <li key={m.number}>
                  <AnimatedSection delay={i * 0.1}>
                    <div className={`relative flex flex-col lg:flex-row gap-8 lg:gap-16 pl-12 lg:pl-0 ${i < milestones.length - 1 ? "mb-20" : ""}`}>
                      <div className={`absolute left-2 lg:left-1/2 top-2 w-4 h-4 rounded-full ${colorMap[m.color].dot} border-4 border-white lg:-translate-x-1/2 z-10`} />
                      <div className="lg:w-1/2 lg:text-right lg:pr-16">
                        <span className={`font-display text-4xl lg:text-7xl font-bold ${colorMap[m.color].number} italic leading-none`} aria-hidden="true">{m.number}</span>
                        <span className="text-gold text-xs font-semibold uppercase tracking-[0.2em]">{m.year}</span>
                        <h3 className="text-xl font-bold text-text-primary mt-1">{m.title}</h3>
                      </div>
                      <div className="lg:w-1/2 lg:pl-16">
                        <p className="text-text-secondary leading-relaxed">{m.description}</p>
                      </div>
                    </div>
                  </AnimatedSection>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* What We Do — Equipment Categories */}
      <section className="py-28 bg-navy" aria-labelledby="whatwedo-heading">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <SectionHeading id="whatwedo-heading" heading="What We Do" theme="dark" subtext="Fifteen equipment categories. Four experience spaces. One partner who specs, installs, and services all of it." />
          </AnimatedSection>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {equipmentCategories.map((item, i) => (
              <AnimatedSection key={item.title} delay={Math.min(i * 0.04, 0.32)}>
                <EquipmentCard {...item} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" gradient="red-gold" />
              </AnimatedSection>
            ))}
          </div>

          {/* Experience Spaces */}
          <AnimatedSection>
            <div className="mt-20 mb-8">
              <Overline label="Experience Spaces" theme="muted" />
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {experienceSpaces.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.08}>
                <EquipmentCard {...item} sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw" gradient="gold" />
              </AnimatedSection>
            ))}
          </div>
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step, i) => (
              <AnimatedSection key={step.title} delay={i * 0.1}>
                <ProcessStepCard {...step} index={i} isLast={i === processSteps.length - 1} />
              </AnimatedSection>
            ))}
          </div>
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

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {companyValues.map((value, i) => (
              <AnimatedSection key={value.title} delay={i * 0.12}>
                <ValueCard {...value} />
              </AnimatedSection>
            ))}
          </div>
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
              <p className="text-white/60 text-lg leading-relaxed max-w-xl mx-auto mb-10">
                Whether you are designing a new kitchen, upgrading an existing one, or expanding across the region — involve us from day one.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="inline-flex bg-red text-white font-semibold px-10 py-4 hover:bg-red-hover hover:-translate-y-px focus-visible:outline-gold transition-[color,background-color,transform] shadow-lg">
                  Request a Consultation
                </Link>
                <Link href="/references" className="inline-flex border border-white/20 text-white font-semibold px-8 py-4 hover:bg-white/10 transition-colors">
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
