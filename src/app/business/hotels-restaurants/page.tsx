import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Hotels & Restaurants Equipment",
  description: "Complete kitchen specification and supply for hotels, restaurants, cafes, and multi-unit chains. Blodgett, TurboChef, Pitco, Josper, and 90+ commercial brands.",
  alternates: { canonical: "/business/hotels-restaurants" },
};

const segments = [
  { title: "Fine Dining & Boutique Restaurants", text: "Custom-specified lines. Josper charcoal grills, Jade heavy-duty ranges, Desmon blast chillers. Equipment chosen to match the chef's workflow." },
  { title: "Hotels & Resorts", text: "Main kitchens, banquet production, pastry, garde manger, room service pantries, pool bars. We handle the full scope." },
  { title: "Quick-Service & Fast Casual", text: "Standardized equipment packages for multi-unit rollouts. Fryers, holding cabinets, speed ovens, POS-integrated systems." },
  { title: "Cafes & Bakeries", text: "Espresso systems, display cases, deck ovens, proofers, mixers. Single artisan bakery or a chain with 20 outlets." },
  { title: "Institutional & Catering", text: "Hospitals, corporate dining, universities, airlines. High-volume production equipment with the reliability these environments demand." },
];

const process = ["Brief", "Design Support", "Specification", "Procurement", "Installation", "Commissioning & Training", "Ongoing Support"];

export default function HotelsRestaurantsPage() {
  return (
    <>
      <section className="bg-[#0A1628] pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-[#C9A84C] text-sm font-semibold uppercase tracking-[0.2em]">Commercial Solutions</span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6">From Concept Kitchen to Opening Night</h1>
          <p className="text-white/70 text-lg max-w-2xl leading-relaxed">We have equipped hotel kitchens for 300-cover banquets, restaurant lines built around a single chef&apos;s vision, and QSR back-of-house systems designed to replicate across 50 locations.</p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection><SectionHeading overline="Capabilities" heading="Every Station, Every Format" align="left" /></AnimatedSection>
          <div className="mt-12 space-y-8 max-w-3xl">
            {segments.map((s, i) => (
              <AnimatedSection key={s.title} delay={i * 0.08}>
                <div className="border-l-2 border-[#D32F3D] pl-6">
                  <h3 className="text-xl font-bold text-[#212529] mb-2">{s.title}</h3>
                  <p className="text-[#595F66] leading-relaxed">{s.text}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection><SectionHeading heading="How a Project Moves" /></AnimatedSection>
          <div className="mt-12 max-w-2xl mx-auto">
            {process.map((step, i) => (
              <AnimatedSection key={step} delay={i * 0.08}>
                <div className="flex items-center gap-6 py-5 border-b border-gray-200 last:border-0">
                  <span className="text-2xl font-bold text-[#C9A84C]/40 font-display w-10">{i + 1}</span>
                  <span className="text-lg font-medium text-[#212529]">{step}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-6">Start Your Project</h2>
            <p className="text-white/60 max-w-lg mx-auto mb-8">Tell us the menu, the covers, the space. We&apos;ll handle the rest.</p>
            <Link href="/contact" className="inline-flex bg-[#D32F3D] text-white font-semibold px-8 py-4 rounded-md hover:bg-[#B82735] transition-all">Get Started</Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
