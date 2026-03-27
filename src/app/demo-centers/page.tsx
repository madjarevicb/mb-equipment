import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Demo Centers & Showrooms",
  description: "Visit our demo centers to experience professional kitchen equipment live. Hands-on testing, chef demonstrations, and equipment training. Book your visit.",
  alternates: { canonical: "/demo-centers" },
};

export default function DemoCentersPage() {
  return (
    <>
      <section className="bg-[#0A1628] pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-[#C9A84C] text-sm font-semibold uppercase tracking-[0.2em]">Demo Centers & Showrooms</span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6">Cook On It Before You Commit.</h1>
          <p className="text-white/70 text-lg max-w-2xl leading-relaxed">We operate fully equipped demo centers across the region. Every one is stocked with live equipment, ready to fire. Bring your menu. Bring your team.</p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <AnimatedSection>
            <SectionHeading heading="Not a Sales Pitch. A Working Session." align="left" />
            <div className="mt-8 space-y-4 text-[#595F66] leading-relaxed">
              <p>A demo center visit is structured around your project, not our catalog.</p>
              <p>Tell us the menu, the volume, the constraints. We set up the relevant equipment, walk through the cook cycles, and let your team operate it. You leave with a clear picture of what works, what fits, and what the numbers look like.</p>
              <p>Sessions run 90 minutes to half a day depending on scope. Factory application chefs are available for complex demonstrations.</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <SectionHeading overline="Location" heading="Belgrade, Serbia — Headquarters" align="left" />
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-[#595F66] space-y-4">
                <p>Full commercial kitchen showroom. Viking, La Cornue, and AGA residential displays. Industrial equipment demonstration area.</p>
                <div className="pt-4 space-y-2 text-sm">
                  <p className="font-semibold text-[#212529]">Address</p>
                  <p>Vladimira Popovića 6, 11070 Beograd</p>
                  <p className="font-semibold text-[#212529] pt-2">Hours</p>
                  <p>Monday — Friday: 08:00 — 17:00</p>
                  <p>Saturday: By appointment</p>
                </div>
              </div>
              <div className="bg-gray-200 rounded-md aspect-[4/3] flex items-center justify-center">
                <span className="text-[#595F66]/40 text-sm">[ Google Maps ]</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <AnimatedSection>
            <SectionHeading heading="Bring the Design Team" align="left" />
            <p className="mt-6 text-[#595F66] leading-relaxed">We regularly host architects, interior designers, and kitchen consultants. See equipment dimensions in person. Discuss ventilation clearances. Review finish options. It is easier to spec equipment you have actually stood next to.</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-6">Book a Demo Session</h2>
            <Link href="/contact" className="inline-flex bg-[#D32F3D] text-white font-semibold px-8 py-4 rounded-md hover:bg-[#B82735] transition-all">Schedule a Visit</Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
