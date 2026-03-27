import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "About Us — Company Overview",
  description: "Belgrade-based foodservice equipment company endorsed by Middleby Corporation. Full-cycle service from kitchen design to installation and after-sales support.",
  alternates: { canonical: "/about/company-overview" },
};

const values = [
  { title: "Precision Over Volume", text: "We would rather specify the right piece of equipment once than replace the wrong one twice. Every recommendation is based on the actual operating conditions of the project." },
  { title: "Direct Relationships", text: "No middlemen, no gray-market sourcing. Our factory relationships are direct and documented. That matters when you need a part in 48 hours, not 48 days." },
  { title: "Long-Term Thinking", text: "We service what we sell. That creates a natural incentive to sell equipment that lasts. Our reference list is our reputation." },
];

const steps = [
  "Consultation & Specification",
  "Supply & Logistics",
  "Installation & Commissioning",
  "Staff Training",
  "After-Sales & Service",
];

export default function CompanyOverviewPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0A1628] pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-[#C9A84C] text-sm font-semibold uppercase tracking-[0.2em]">About MB Equipment</span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6">One Company. The Whole Kitchen.</h1>
          <p className="text-white/70 text-lg max-w-2xl leading-relaxed">
            MB Equipment Solutions has spent over two decades building the Balkans&apos; most comprehensive foodservice equipment operation. We are not a reseller with a catalog. We are engineers, project managers, and service technicians who happen to represent the best brands in the world.
          </p>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <AnimatedSection>
            <SectionHeading overline="Our Story" heading="How We Got Here" align="left" />
            <div className="mt-8 space-y-6 text-[#595F66] leading-relaxed">
              <p>MB Equipment Solutions was founded in Belgrade with a clear premise: the region needed a professional-grade equipment partner, not just a distributor.</p>
              <p>That hands-on approach attracted attention from Middleby Corporation, one of the world&apos;s largest foodservice equipment manufacturers. The endorsement meant direct access to factory engineering, priority parts supply, and terms that nobody else in the region could match.</p>
              <p>Today, the company operates demo centers across the region, employs a full-time service team, and has delivered equipment to projects in over 40 countries. The premise has not changed. Only the scale.</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Full Cycle */}
      <section className="py-24 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <SectionHeading overline="What We Do" heading="The Full Cycle" subtext="Most equipment companies stop at delivery. We do not." />
          </AnimatedSection>
          <div className="mt-16 max-w-2xl mx-auto">
            {steps.map((step, i) => (
              <AnimatedSection key={step} delay={i * 0.1}>
                <div className="flex items-start gap-6 py-6 border-b border-gray-200 last:border-0">
                  <span className="text-3xl font-bold text-[#C9A84C]/30 font-display">{String(i + 1).padStart(2, "0")}</span>
                  <p className="text-lg font-medium text-[#212529] pt-1">{step}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <SectionHeading overline="What Holds" heading="Our Values" align="left" />
          </AnimatedSection>
          <div className="mt-12 space-y-10 max-w-2xl">
            {values.map((v, i) => (
              <AnimatedSection key={v.title} delay={i * 0.1}>
                <div className="border-l-2 border-[#C9A84C] pl-6">
                  <h3 className="text-xl font-bold text-[#212529] mb-2">{v.title}</h3>
                  <p className="text-[#595F66] leading-relaxed">{v.text}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-6">Partner With Us</h2>
            <p className="text-white/60 max-w-lg mx-auto mb-8">Whether you are a distributor, architect, or operator — we are always looking for strong partnerships.</p>
            <Link href="/contact" className="inline-flex bg-[#D32F3D] text-white font-semibold px-8 py-4 rounded-md hover:bg-[#B82735] transition-all">Contact Us</Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
