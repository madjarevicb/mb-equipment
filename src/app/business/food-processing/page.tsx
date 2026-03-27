import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Food Processing Equipment",
  description: "Production-grade equipment for bakeries, meat processing, dairy, and prepared foods. Rack ovens, mixers, slicers, packaging lines. 24/7 rated with full service support.",
  alternates: { canonical: "/business/food-processing" },
};

const capabilities = [
  { title: "Bakery & Confectionery", text: "Rack ovens, tunnel ovens, spiral mixers, dough dividers, sheeters, proofers, depositors, cooling systems. From 500 loaves a day to 50,000." },
  { title: "Meat & Poultry Processing", text: "Grinders, bowl cutters, stuffers, smokehouses, slicers, vacuum tumblers, packaging systems. CIP-ready hygiene standards." },
  { title: "Dairy & Beverage", text: "Pasteurizers, homogenizers, filling lines, CIP stations, cold storage. Integrated into existing process flows." },
  { title: "Ready Meals & Prepared Foods", text: "Combi ovens at scale, blast chillers and freezers, vacuum sealers, tray sealers. Cook-chill and cook-freeze production lines." },
  { title: "Packaging & End of Line", text: "Vacuum packaging, thermoforming, MAP systems, checkweighers, metal detectors, case packers." },
];

export default function FoodProcessingPage() {
  return (
    <>
      <section className="bg-[#0A1628] pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-[#C9A84C] text-sm font-semibold uppercase tracking-[0.2em]">Industrial Solutions</span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6">Production-Grade. Production-Proven.</h1>
          <p className="text-white/70 text-lg max-w-2xl leading-relaxed">Bakeries running 24-hour shifts. Meat processing plants pushing 10 tons a day. The equipment behind these operations cannot afford downtime — and neither can you.</p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection><SectionHeading overline="Capabilities" heading="Industrial Equipment Lines" align="left" /></AnimatedSection>
          <div className="mt-12 space-y-8 max-w-3xl">
            {capabilities.map((c, i) => (
              <AnimatedSection key={c.title} delay={i * 0.08}>
                <div className="border-l-2 border-[#C9A84C] pl-6">
                  <h3 className="text-xl font-bold text-[#212529] mb-2">{c.title}</h3>
                  <p className="text-[#595F66] leading-relaxed">{c.text}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#F8F9FA]">
        <div className="max-w-3xl mx-auto px-6">
          <AnimatedSection>
            <SectionHeading heading="The Math on Downtime" align="left" />
            <p className="mt-6 text-[#595F66] leading-relaxed">In a commercial kitchen, a broken oven means a modified menu. In a processing plant, a broken oven means a stopped line, missed shipments, and penalty clauses.</p>
            <p className="mt-4 text-[#595F66] leading-relaxed">We structure our industrial projects around uptime. Proven reliability records, critical spare parts inventory, preventive maintenance contracts, and a service team that responds in hours — not days.</p>
            <p className="mt-4 font-semibold text-[#212529]">The equipment is the investment. The uptime is the return.</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-6">Discuss Your Production Line</h2>
            <Link href="/contact" className="inline-flex bg-[#D32F3D] text-white font-semibold px-8 py-4 rounded-md hover:bg-[#B82735] transition-all">Get an Engineering Consultation</Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
