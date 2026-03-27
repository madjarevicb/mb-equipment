import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "References & Partners",
  description: "Trusted equipment partner for Starbucks, KFC, McDonald's, Burger King, Hilton, and hundreds of independent operators across 40+ countries.",
  alternates: { canonical: "/references" },
};

const chains = ["Starbucks", "KFC", "McDonald's", "Burger King", "Pizza Hut", "Subway", "Wendy's", "Taco Bell"];
const hotels = ["Hilton Belgrade", "Hyatt Regency Belgrade", "Radisson Collection Old Mill", "Square Nine Hotel", "Metropol Palace Belgrade"];

export default function ReferencesPage() {
  return (
    <>
      <section className="bg-[#0A1628] pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-[#C9A84C] text-sm font-semibold uppercase tracking-[0.2em]">References & Partners</span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6">The Work Speaks.</h1>
          <p className="text-white/70 text-lg max-w-2xl">A partial list of projects and partners. Each one represents a kitchen that is running today — equipped, commissioned, and supported by our team.</p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection><SectionHeading overline="Global Chains" heading="Multi-Unit Partners" align="left" /></AnimatedSection>
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {chains.map((name, i) => (
              <AnimatedSection key={name} delay={i * 0.05}>
                <div className="bg-[#F8F9FA] rounded-md p-6 text-center font-semibold text-[#212529]">{name}</div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection><SectionHeading overline="Hospitality" heading="Hotels & Independent Restaurants" align="left" /></AnimatedSection>
          <div className="mt-12 space-y-4 max-w-2xl">
            {hotels.map((h, i) => (
              <AnimatedSection key={h} delay={i * 0.05}>
                <div className="flex items-center gap-4 py-3 border-b border-gray-200">
                  <span className="w-2 h-2 rounded-full bg-[#C9A84C]" />
                  <span className="text-[#212529] font-medium">{h}</span>
                </div>
              </AnimatedSection>
            ))}
            <p className="pt-4 text-[#595F66] text-sm">And over 300 independent restaurants, cafes, and bakeries across Serbia and the region.</p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <SectionHeading heading="40+ Countries. Growing." subtext="Our equipment has been delivered and installed across the Balkans, Central Europe, the Middle East, North Africa, and Central Asia." />
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-6">Join Our Client List</h2>
            <Link href="/contact" className="inline-flex bg-[#D32F3D] text-white font-semibold px-8 py-4 rounded-md hover:bg-[#B82735] transition-all">Get Started</Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
