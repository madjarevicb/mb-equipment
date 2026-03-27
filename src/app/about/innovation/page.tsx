import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
  title: "Innovation & Technology | MB Equipment Solutions",
  description:
    "Connected kitchens, high-speed cooking, ventless equipment, energy efficiency. See the latest foodservice technology from Middleby and partner brands.",
  alternates: { canonical: "/about/innovation" },
};

/* ------------------------------------------------------------------ */
/*  Featured innovation products                                       */
/* ------------------------------------------------------------------ */
const featured = [
  {
    title: "Ventless Kitchens",
    text: "A full commercial kitchen without traditional ventilation. Nearly a dozen Middleby brands with ventless cooking solutions — griddles, combis, fryers, rapid cook, and accelerated cook ovens for any application.",
    image: "/images/innovation/ventless.jpg",
  },
  {
    title: "Ghost Kitchens",
    text: "Delivery-only kitchens designed for maximum output in minimum footprint. Compact, ventless, high-speed equipment optimized for ghost kitchen operations and virtual restaurant concepts.",
    image: "/images/innovation/ghost-kitchen.jpg",
  },
  {
    title: "IoT Kitchens",
    text: "Open Kitchen IoT by Powerhouse Dynamics — automation, food safety, and equipment connectivity. Manage equipment across multiple sites from a single cloud dashboard in real time.",
    image: "/images/innovation/iot-kitchen.jpg",
  },
];

/* ------------------------------------------------------------------ */
/*  Technology themes                                                   */
/* ------------------------------------------------------------------ */
const themes = [
  {
    label: "01",
    title: "Connected Kitchens",
    subtitle: "Data from Every Rack",
    text: "Modern commercial kitchen equipment generates data — cook times, energy consumption, maintenance alerts, HACCP logs. Brands like Middleby Connect and TurboChef are building cloud-connected platforms that let operators manage equipment across multiple sites from a single dashboard. We deploy and configure these systems. Real data, real dashboards, real operational savings.",
    stat: "40%",
    statLabel: "reduction in equipment downtime with predictive maintenance",
  },
  {
    label: "02",
    title: "Speed & Energy",
    subtitle: "Faster Cook. Lower Bill.",
    text: "High-speed cooking technology has matured. TurboChef and Merrychef units combine convection, microwave, and impingement to cook food in a fraction of traditional time — using a fraction of the energy. For quick-service and fast-casual operators running tight margins, the payback period on this equipment is months, not years.",
    stat: "60%",
    statLabel: "faster cooking with high-speed impingement technology",
  },
  {
    label: "03",
    title: "Ventless & Compact",
    subtitle: "Equipment That Fits Where You Need It",
    text: "Not every kitchen has a hood. Not every location has three-phase power. The latest ventless combi ovens, countertop fryers, and modular cooking suites are designed for constrained spaces without compromising output. We have equipped hotel room-service pantries, airport lounges, and pop-up kitchens with gear that was impossible five years ago.",
    stat: "350K+",
    statLabel: "ventless systems operating around the world",
  },
  {
    label: "04",
    title: "Sustainability",
    subtitle: "Less Waste, Same Output",
    text: "Energy-efficient burners. Heat recovery systems. Oil management technology that extends fry oil life by 40%. Water-saving dishwashers. Sustainability in commercial kitchens is not a marketing exercise — it is an operating cost reduction. We spec equipment that delivers both.",
    stat: "30%",
    statLabel: "average energy savings with latest-generation equipment",
  },
];

export default function InnovationPage() {
  return (
    <>
      {/* ============================================================ */}
      {/*  HERO                                                         */}
      {/* ============================================================ */}
      <section className="relative min-h-[70vh] flex items-center">
        <Image
          src="/images/innovation/hero.jpg"
          alt="MB Equipment Solutions Innovation Center"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628]/95 via-[#0A1628]/70 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
          <AnimatedSection>
            <span className="text-[#C9A84C] text-sm font-semibold uppercase tracking-[0.2em]">
              Technology & Innovation
            </span>
            <div className="w-12 h-[2px] bg-[#C9A84C] mt-4 mb-6" />
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] max-w-2xl">
              This is Innovation in Commercial Foodservice
            </h1>
            <p className="text-white/70 text-lg max-w-xl mt-6 leading-relaxed">
              We focus on developing solutions for our customers in the constantly
              evolving foodservice industry. Innovation is the core of MB Equipment
              Solutions and our goal is to be ahead of the needs of our customers.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                href="/demo-centers"
                className="inline-flex bg-[#D32F3D] text-white font-semibold px-8 py-4 rounded-sm hover:bg-[#B82735] transition-all"
              >
                Visit Our Demo Center
              </Link>
              <Link
                href="/contact"
                className="inline-flex border border-white/30 text-white font-semibold px-8 py-4 rounded-sm hover:bg-white/10 transition-all"
              >
                Get a Consultation
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  FEATURED INNOVATION PRODUCTS                                 */}
      {/* ============================================================ */}
      <section className="py-24 bg-[#D32F3D]">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-4">
              Featured Innovation Products
            </h2>
            <p className="text-white/80 max-w-2xl mb-16">
              Three transformative solutions reshaping how commercial kitchens
              operate — from ventless cooking to cloud-connected management.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {featured.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.15}>
                <div className="group relative overflow-hidden cursor-pointer">
                  {/* Image */}
                  <div className="aspect-[4/5] relative">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  </div>

                  {/* Content overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h3 className="font-display text-2xl font-bold text-white mb-3">
                      {item.title}
                    </h3>
                    <p className="text-white/70 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 max-h-0 group-hover:max-h-40 overflow-hidden">
                      {item.text}
                    </p>
                    <div className="flex items-center gap-2 mt-4 text-white/90 text-sm font-semibold">
                      <span>Learn more</span>
                      <svg
                        className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  TECHNOLOGY THEMES — magazine editorial                       */}
      {/* ============================================================ */}
      <section className="py-28 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">

          {/* Section header — left aligned */}
          <AnimatedSection>
            <div className="max-w-xl mb-16">
              <span className="text-[#C9A84C] text-sm font-semibold uppercase tracking-[0.2em]">
                What&apos;s Moving the Industry
              </span>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-[#0A1628] mt-4">
                Four Technologies Shaping the Future
              </h2>
            </div>
          </AnimatedSection>

          {/* Row 1 — Two cards, 3:2 ratio, navy + white */}
          <AnimatedSection>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-6">
              {/* Connected Kitchens — navy, takes 3 cols */}
              <div className="lg:col-span-3 bg-[#0A1628] p-10 lg:p-14 relative overflow-hidden group">
                                <div className="relative">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-[2px] bg-[#C9A84C]" />
                    <span className="text-[#C9A84C] text-xs font-semibold uppercase tracking-widest">{themes[0].subtitle}</span>
                  </div>
                  <h3 className="font-display text-2xl lg:text-3xl font-bold text-white mb-5">{themes[0].title}</h3>
                  <p className="text-white/55 leading-relaxed mb-10">{themes[0].text}</p>
                  <div className="flex items-baseline gap-2">
                    <span className="font-display text-5xl font-bold text-[#C9A84C]">{themes[0].stat}</span>
                    <span className="text-white/35 text-sm max-w-[180px]">{themes[0].statLabel}</span>
                  </div>
                </div>
              </div>

              {/* Speed & Energy — white with left red border, takes 2 cols */}
              <div className="lg:col-span-2 border-l-4 border-[#D32F3D] bg-[#F8F9FA] p-10 lg:p-12 relative overflow-hidden group">
                                <div className="relative">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-[2px] bg-[#D32F3D]" />
                    <span className="text-[#D32F3D] text-xs font-semibold uppercase tracking-widest">{themes[1].subtitle}</span>
                  </div>
                  <h3 className="font-display text-xl lg:text-2xl font-bold text-[#0A1628] mb-4">{themes[1].title}</h3>
                  <p className="text-[#595F66] leading-relaxed text-[15px] mb-8">{themes[1].text}</p>
                  <div>
                    <span className="font-display text-4xl font-bold text-[#0A1628]">{themes[1].stat}</span>
                    <p className="text-[#595F66] text-xs mt-1">{themes[1].statLabel}</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Row 2 — Two cards, 2:3 ratio (reversed), white + navy gradient */}
          <AnimatedSection>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
              {/* Ventless — white with gold accent, takes 2 cols */}
              <div className="lg:col-span-2 bg-[#0A1628] p-10 lg:p-12 relative overflow-hidden group">
                                <div className="relative">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-[2px] bg-[#C9A84C]" />
                    <span className="text-[#C9A84C] text-xs font-semibold uppercase tracking-widest">{themes[2].subtitle}</span>
                  </div>
                  <h3 className="font-display text-xl lg:text-2xl font-bold text-white mb-4">{themes[2].title}</h3>
                  <p className="text-white/55 leading-relaxed text-[15px] mb-8">{themes[2].text}</p>
                  <div className="pt-6 border-t border-white/10">
                    <span className="font-display text-4xl font-bold text-[#C9A84C]">{themes[2].stat}</span>
                    <p className="text-white/35 text-xs mt-1">{themes[2].statLabel}</p>
                  </div>
                </div>
              </div>

              {/* Sustainability — gradient bg, takes 3 cols */}
              <div className="lg:col-span-3 bg-gradient-to-br from-[#F8F9FA] to-[#EDF0F3] border-l-4 border-[#C9A84C] p-10 lg:p-14 relative overflow-hidden group">
                                <div className="relative">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-[2px] bg-[#C9A84C]" />
                    <span className="text-[#C9A84C] text-xs font-semibold uppercase tracking-widest">{themes[3].subtitle}</span>
                  </div>
                  <h3 className="font-display text-2xl lg:text-3xl font-bold text-[#0A1628] mb-5">{themes[3].title}</h3>
                  <p className="text-[#595F66] leading-relaxed mb-10">{themes[3].text}</p>
                  <div className="flex items-baseline gap-2">
                    <span className="font-display text-5xl font-bold text-[#D32F3D]">{themes[3].stat}</span>
                    <span className="text-[#595F66] text-sm max-w-[200px]">{themes[3].statLabel}</span>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

        </div>
      </section>

      {/* ============================================================ */}
      {/*  CTA                                                          */}
      {/* ============================================================ */}
      <section className="py-24 bg-[#0A1628] relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#C9A84C]/5 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#D32F3D]/5 rounded-full translate-y-1/2 -translate-x-1/2" />

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <AnimatedSection>
            <span className="text-[#C9A84C] text-sm font-semibold uppercase tracking-[0.2em]">
              Experience It Live
            </span>
            <h2 className="font-display text-3xl lg:text-5xl font-bold text-white mt-4 mb-6">
              See It Run Before You Buy It.
            </h2>
            <p className="text-white/60 max-w-lg mx-auto mb-10 leading-relaxed">
              Every technology we recommend is live and demonstrable in our
              regional demo centers. Book a session. Bring your team. Cook your
              menu on it.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/demo-centers"
                className="inline-flex bg-[#D32F3D] text-white font-semibold px-10 py-4 rounded-sm hover:bg-[#B82735] transition-all"
              >
                Book a Demo
              </Link>
              <Link
                href="/contact"
                className="inline-flex border border-white/20 text-white font-semibold px-10 py-4 rounded-sm hover:bg-white/10 transition-all"
              >
                Contact Us
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
