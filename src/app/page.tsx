import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";

const partners = ["Starbucks", "KFC", "McDonald's", "Burger King", "Chipotle", "Pizza Hut", "Taco Bell", "Subway", "Wendy's", "Dunkin' Donuts"];

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
      <section className="relative min-h-screen flex items-center bg-[#0A1628] pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A1628] via-[#0A1628] to-[#1A2B4A]" />
        <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32">
          <div className="max-w-3xl">
            <span className="inline-block text-[#C9A84C] text-sm font-semibold uppercase tracking-[0.2em] mb-6">
              Middleby Corporation Endorsed
            </span>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6">
              110+ Brands.{" "}
              <span className="text-[#C9A84C]">One Partner.</span>
            </h1>
            <p className="text-lg lg:text-xl text-white/70 leading-relaxed max-w-2xl mb-10">
              MB Equipment Solutions is the Balkans&apos; direct link to the world&apos;s most trusted commercial kitchen, residential, and food processing brands. From a single oven to a full production line — we specify, supply, install, and service it all.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/references" className="inline-flex items-center justify-center bg-[#D32F3D] text-white font-semibold px-8 py-4 rounded-md hover:bg-[#B82735] hover:-translate-y-px transition-all shadow-lg">
                Explore Our Brands
              </Link>
              <Link href="/contact" className="inline-flex items-center justify-center border border-white/30 text-white font-semibold px-8 py-4 rounded-md hover:bg-white/10 transition-all">
                Get a Consultation
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Partner Logos */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C9A84C] text-center">Trusted by World-Leading Brands</p>
        </div>
        <div className="relative">
          <div className="flex gap-12 animate-scroll">
            {[...partners, ...partners].map((name, i) => (
              <div key={`${name}-${i}`} className="flex-shrink-0 px-6 py-3 bg-gray-50 rounded-lg text-sm font-medium text-[#595F66] whitespace-nowrap">
                {name}
              </div>
            ))}
          </div>
        </div>
        <style>{`
          @keyframes scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
          .animate-scroll { animation: scroll 30s linear infinite; display: flex; width: max-content; }
          .animate-scroll:hover { animation-play-state: paused; }
        `}</style>
      </section>

      {/* Sectors */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <SectionHeading overline="Sectors" heading="Built for Every Scale" subtext="Whether you are outfitting a five-star hotel kitchen, a quick-service chain rolling out across Southeast Europe, or a meat processing facility — the equipment has to perform. We make sure it does." />
          </AnimatedSection>
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-6">
            {sectors.map((sector, i) => (
              <AnimatedSection key={sector.title} delay={i * 0.1}>
                <Link href={sector.href} className="group block bg-[#0A1628] rounded-md p-8 lg:p-10 h-full hover:-translate-y-1 transition-all duration-300">
                  <h3 className="font-display text-2xl font-bold text-white mb-4">{sector.title}</h3>
                  <p className="text-white/60 leading-relaxed mb-6">{sector.description}</p>
                  <span className="text-[#D32F3D] text-sm font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center gap-2">
                    {sector.cta} <span aria-hidden="true">&rarr;</span>
                  </span>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <AnimatedSection key={stat.label} delay={i * 0.1}>
                <div className="border-l-2 border-[#C9A84C] pl-6">
                  <p className="text-4xl lg:text-5xl font-bold text-[#0A1628] mb-1">{stat.value}</p>
                  <p className="text-sm text-[#595F66] font-medium">{stat.label}</p>
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
