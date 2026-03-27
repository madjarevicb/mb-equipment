import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
  title: "Innovation & Technology",
  description: "Connected kitchens, high-speed cooking, ventless equipment, energy efficiency. See the latest foodservice technology from Middleby and partner brands.",
  alternates: { canonical: "/about/innovation" },
};

const themes = [
  { title: "Connected Kitchens", subtitle: "Data from Every Rack", text: "Modern commercial kitchen equipment generates data — cook times, energy consumption, maintenance alerts, HACCP logs. Brands like Middleby Connect and TurboChef are building cloud-connected platforms that let operators manage equipment across multiple sites from a single dashboard." },
  { title: "Speed & Energy", subtitle: "Faster Cook. Lower Bill.", text: "High-speed cooking technology has matured. TurboChef and Merrychef units combine convection, microwave, and impingement to cook food in a fraction of traditional time — using a fraction of the energy. The payback period on this equipment is months, not years." },
  { title: "Ventless & Compact", subtitle: "Equipment That Fits Where You Need It", text: "Not every kitchen has a hood. Not every location has three-phase power. The latest ventless combi ovens, countertop fryers, and modular cooking suites are designed for constrained spaces without compromising output." },
  { title: "Sustainability", subtitle: "Less Waste, Same Output", text: "Energy-efficient burners. Heat recovery systems. Oil management technology that extends fry oil life by 40%. Water-saving dishwashers. Sustainability in commercial kitchens is not a marketing exercise — it is an operating cost reduction." },
];

export default function InnovationPage() {
  return (
    <>
      <section className="bg-[#0A1628] pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-[#C9A84C] text-sm font-semibold uppercase tracking-[0.2em]">Technology & Innovation</span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6">The Equipment Has Changed.<br />Has Your Kitchen?</h1>
          <p className="text-white/70 text-lg max-w-2xl leading-relaxed">The gap between a good kitchen and a great one is increasingly technical. We bring that technology to the region — installed, commissioned, and supported.</p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-24">
            {themes.map((theme, i) => (
              <AnimatedSection key={theme.title} delay={0.1}>
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                  <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                    <span className="text-[#C9A84C] text-sm font-semibold uppercase tracking-wider">{theme.subtitle}</span>
                    <h2 className="font-display text-3xl font-bold text-[#212529] mt-2 mb-4">{theme.title}</h2>
                    <p className="text-[#595F66] leading-relaxed">{theme.text}</p>
                  </div>
                  <div className={`bg-[#F8F9FA] rounded-md aspect-[4/3] flex items-center justify-center ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                    <span className="text-[#595F66]/40 text-sm">[ Equipment Photo ]</span>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-4">See It Run Before You Buy It.</h2>
            <p className="text-white/60 max-w-lg mx-auto mb-8">Every technology we recommend is live and demonstrable in our regional demo centers. Book a session. Bring your team. Cook your menu on it.</p>
            <Link href="/demo-centers" className="inline-flex bg-[#D32F3D] text-white font-semibold px-8 py-4 rounded-md hover:bg-[#B82735] transition-all">Book a Demo</Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
