import Link from "next/link";
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";

const partners = [
  { name: "Starbucks", logo: "/logos/starbucks.svg" },
  { name: "KFC", logo: "/logos/kfc.svg" },
  { name: "McDonald's", logo: "/logos/mcdonalds.svg" },
  { name: "Burger King", logo: "/logos/burger-king.svg" },
  { name: "Chipotle", logo: "/logos/chipotle.svg" },
  { name: "Pizza Hut", logo: "/logos/pizza-hut.png" },
  { name: "Taco Bell", logo: "/logos/taco-bell.svg" },
  { name: "Chick-fil-A", logo: "/logos/chick-fil-a.svg" },
  { name: "Subway", logo: "/logos/subway.svg" },
  { name: "Wendy's", logo: "/logos/wendys.svg" },
  { name: "Dunkin' Donuts", logo: "/logos/dunkin-donuts.png" },
];

const stats = [
  { value: "110+", label: "Equipment Brands" },
  { value: "500+", label: "Projects Delivered" },
  { value: "30+", label: "Countries Served" },
  { value: "15+", label: "Years of Expertise" },
];

const sectors = [
  {
    title: "Hotels & Restaurants",
    description: "Full kitchen design and equipment for hospitality — from fine dining to high-volume banquet operations.",
    href: "/business/hotels-restaurants",
    cta: "See Commercial Solutions",
  },
  {
    title: "Residential",
    description: "Viking. La Cornue. AGA. The brands that belong in serious home kitchens, available and fully supported in the region.",
    href: "/business/residential",
    cta: "See Home Brands",
  },
  {
    title: "Food Processing",
    description: "Industrial ovens, mixers, slicers, packaging lines. Equipment rated for 24/7 production environments.",
    href: "/business/food-processing",
    cta: "See Industrial Solutions",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center bg-[#0A1628] pt-20 overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/hero-web.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32 flex flex-col items-center justify-center text-center min-h-[80vh]">
          <h1 className="font-display text-5xl sm:text-6xl lg:text-8xl font-bold text-white leading-[1.1] mb-4 italic">
            MB Equipment Solutions
          </h1>
          <p className="text-xl sm:text-2xl lg:text-3xl text-white/80 italic font-light">
            One partner - many solutions
          </p>
        </div>

        {/* Endorsed by Middleby badge — bottom left */}
        <div className="absolute bottom-8 left-6 z-10 flex items-center gap-3 bg-black/50 backdrop-blur-sm rounded-lg px-5 py-3">
          <span className="text-white/70 text-sm font-medium">Endorsed by</span>
          <Image
            src="/logos/middleby-white.svg"
            alt="Middleby Corporation"
            width={120}
            height={20}
            className="h-5 w-auto"
          />
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Partner Logos */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C9A84C] text-center">Trusted by World-Leading Brands</p>
        </div>
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />
          <div className="flex items-center gap-20 animate-scroll">
            {[...partners, ...partners].map((partner, i) => (
              <div key={`${partner.name}-${i}`} className="flex-shrink-0 flex items-center justify-center h-24 w-44">
                <Image
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  width={160}
                  height={80}
                  className="object-contain max-h-20 w-auto"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
        <style>{`
          @keyframes scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
          .animate-scroll { animation: scroll 40s linear infinite; display: flex; width: max-content; }
          .animate-scroll:hover { animation-play-state: paused; }
        `}</style>
      </section>

      {/* Sectors */}
      <section className="py-24 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <SectionHeading overline="Sectors" heading="Built for Every Scale" subtext="Whether you are outfitting a five-star hotel kitchen, a quick-service chain rolling out across Southeast Europe, or a meat processing facility — the equipment has to perform. We make sure it does." />
          </AnimatedSection>

          {/* Asymmetric editorial grid — 1 large + 2 stacked */}
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-6">

            {/* Large card — Hotels & Restaurants */}
            <AnimatedSection>
              <Link href="/business/hotels-restaurants" className="group relative block rounded-lg overflow-hidden h-full min-h-[500px] lg:min-h-[600px]">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0A1628] via-[#1A2B4A] to-[#0A1628]" />
                <div className="absolute top-8 right-8 text-[120px] lg:text-[180px] font-display font-bold text-white/[0.03] leading-none select-none">01</div>
                <div className="relative h-full flex flex-col justify-end p-8 lg:p-12">
                  <span className="text-[#C9A84C] text-xs font-semibold uppercase tracking-[0.2em] mb-3">Commercial</span>
                  <h3 className="font-display text-3xl lg:text-4xl font-bold text-white mb-4">Hotels &<br />Restaurants</h3>
                  <p className="text-white/60 leading-relaxed mb-6 max-w-md">Full kitchen design and equipment for hospitality — from fine dining to high-volume banquet operations. Trusted by global chains and independent operators alike.</p>
                  <div className="flex items-center gap-2 text-[#D32F3D] text-sm font-semibold group-hover:gap-4 transition-all">
                    See Commercial Solutions <span aria-hidden="true" className="text-lg">&rarr;</span>
                  </div>
                </div>
                {/* Decorative line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#D32F3D] via-[#C9A84C] to-transparent" />
              </Link>
            </AnimatedSection>

            {/* Right column — 2 stacked cards */}
            <div className="grid grid-rows-2 gap-6">

              {/* Residential card */}
              <AnimatedSection delay={0.15}>
                <Link href="/business/residential" className="group relative block rounded-lg overflow-hidden h-full min-h-[280px]">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#1A2B4A] to-[#0A1628]" />
                  <div className="absolute top-6 right-6 text-[100px] font-display font-bold text-white/[0.03] leading-none select-none">02</div>
                  <div className="relative h-full flex flex-col justify-end p-8">
                    <span className="text-[#C9A84C] text-xs font-semibold uppercase tracking-[0.2em] mb-2">Luxury Home</span>
                    <h3 className="font-display text-2xl lg:text-3xl font-bold text-white mb-3">Residential</h3>
                    <p className="text-white/60 leading-relaxed mb-4 max-w-sm">Viking. La Cornue. AGA. The brands that belong in serious home kitchens.</p>
                    <div className="flex items-center gap-2 text-[#D32F3D] text-sm font-semibold group-hover:gap-4 transition-all">
                      See Home Brands <span aria-hidden="true" className="text-lg">&rarr;</span>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#C9A84C] via-[#D32F3D] to-transparent" />
                </Link>
              </AnimatedSection>

              {/* Food Processing card */}
              <AnimatedSection delay={0.25}>
                <Link href="/business/food-processing" className="group relative block rounded-lg overflow-hidden h-full min-h-[280px]">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0A1628] via-[#1A2B4A] to-[#0A1628]" />
                  <div className="absolute top-6 right-6 text-[100px] font-display font-bold text-white/[0.03] leading-none select-none">03</div>
                  <div className="relative h-full flex flex-col justify-end p-8">
                    <span className="text-[#C9A84C] text-xs font-semibold uppercase tracking-[0.2em] mb-2">Industrial</span>
                    <h3 className="font-display text-2xl lg:text-3xl font-bold text-white mb-3">Food Processing</h3>
                    <p className="text-white/60 leading-relaxed mb-4 max-w-sm">Industrial ovens, mixers, slicers, packaging lines. Equipment rated for 24/7 production.</p>
                    <div className="flex items-center gap-2 text-[#D32F3D] text-sm font-semibold group-hover:gap-4 transition-all">
                      See Industrial Solutions <span aria-hidden="true" className="text-lg">&rarr;</span>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#D32F3D] to-transparent" />
                </Link>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative py-32 bg-[#0A1628] overflow-hidden">
        {/* Top and bottom gold accent lines */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/20 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6">
          {/* Section heading */}
          <AnimatedSection>
            <div className="text-center mb-20">
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-white italic">Results That Speak</h2>
              <div className="w-16 h-[2px] bg-[#C9A84C] mx-auto mt-6" />
            </div>
          </AnimatedSection>

          {/* Stats grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
            {stats.map((stat, i) => (
              <AnimatedSection key={stat.label} delay={i * 0.12}>
                <div className={`text-center py-6 px-6 ${i < stats.length - 1 ? "lg:border-r lg:border-white/10" : ""}`}>
                  <p className="font-display text-6xl sm:text-7xl lg:text-8xl font-bold text-white mb-5 italic leading-none">{stat.value}</p>
                  <div className="w-10 h-[2px] bg-[#C9A84C] mx-auto mb-4" />
                  <p className="text-sm text-white/70 font-semibold uppercase tracking-[0.15em]">{stat.label}</p>
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
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-6">
              Let&apos;s Spec Your Kitchen.
            </h2>
            <p className="text-white/60 text-lg max-w-xl mx-auto mb-10">
              Tell us the project scope. We&apos;ll come back with brands, models, drawings, and a number.
            </p>
            <Link href="/contact" className="inline-flex items-center justify-center bg-[#D32F3D] text-white font-semibold px-8 py-4 rounded-md hover:bg-[#B82735] hover:-translate-y-px transition-all shadow-lg text-lg">
              Start a Project
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
