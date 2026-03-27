import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Residential — Luxury Home Kitchen Equipment",
  description: "Authorized regional dealer for Viking, La Cornue, AGA, and U-Line. Luxury residential kitchen equipment with showroom, delivery, installation, and factory-backed service.",
  alternates: { canonical: "/business/residential" },
};

const brands = [
  { name: "Viking", text: "The professional home kitchen standard. Ranges, refrigeration, ventilation, outdoor grills. Full stainless or custom panel-ready." },
  { name: "La Cornue", text: "French handcraft at its most deliberate. Every Chateau and CornuFe range is built to order in Normandy. We handle specification, color selection, and white-glove installation." },
  { name: "AGA", text: "The original cast-iron range cooker. Radiant heat cooking with a following that spans generations. Available in over 20 colors." },
  { name: "U-Line", text: "Built-in beverage centers, ice makers, wine storage. Commercial-grade compressors in residential form factors." },
];

export default function ResidentialPage() {
  return (
    <>
      <section className="bg-[#0A1628] pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-[#C9A84C] text-sm font-semibold uppercase tracking-[0.2em]">Luxury Home Kitchens</span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6">Professional Brands. Private Kitchens.</h1>
          <p className="text-white/70 text-lg max-w-2xl leading-relaxed">Viking ranges. La Cornue color-matched suites. AGA cast-iron cookers. These are the brands that define serious home cooking — and we are the authorized regional source for all of them.</p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection><SectionHeading overline="Featured Brands" heading="What We Bring Home" align="left" /></AnimatedSection>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {brands.map((b, i) => (
              <AnimatedSection key={b.name} delay={i * 0.1}>
                <div className="bg-[#F8F9FA] p-8 rounded-md h-full">
                  <h3 className="font-display text-2xl font-bold text-[#212529] mb-3">{b.name}</h3>
                  <p className="text-[#595F66] leading-relaxed">{b.text}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#F8F9FA]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <AnimatedSection>
            <SectionHeading heading="Touch It. Cook On It. Decide." subtext="We do not sell residential equipment from a PDF. Our Belgrade showroom has live Viking, La Cornue, and AGA units ready to demonstrate. Bring your architect. Bring your contractor." />
            <div className="mt-8">
              <Link href="/demo-centers" className="inline-flex bg-[#D32F3D] text-white font-semibold px-8 py-4 rounded-md hover:bg-[#B82735] transition-all">Book a Showroom Visit</Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <AnimatedSection>
            <SectionHeading heading="Sold Here. Serviced Here." align="left" />
            <p className="mt-6 text-[#595F66] leading-relaxed">Every residential unit we sell is backed by factory-authorized service. Genuine parts. Trained technicians. Warranty support handled directly — no call centers, no runaround. This is the difference between buying from a regional partner and importing on your own.</p>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
