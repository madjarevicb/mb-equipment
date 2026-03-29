import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
  title: "References & Partners — The Work Speaks | MB Equipment Solutions",
  description:
    "Trusted equipment partner for Starbucks, KFC, McDonald's, Burger King, Marriott, Hard Rock Cafe, and hundreds of independent operators across 40+ countries.",
  alternates: { canonical: "/references" },
};

/* ─── DATA ─── */

const globalChains = [
  { name: "Marriott", images: ["/images/references/ref-11.jpg", "/images/references/ref-12.jpg"] },
  { name: "Starbucks", image: "/images/references/ref-13.jpg" },
  { name: "Domino's", image: "/images/references/ref-14.jpg" },
  { name: "McDonald's", image: "/images/references/ref-15.jpg" },
  { name: "Burger King", image: "/images/references/ref-17.jpg" },
  { name: "KFC", image: "/images/references/ref-18.jpg" },
  { name: "Taco Bell", image: "/images/references/ref-19.jpg" },
  { name: "Hard Rock Cafe", image: "/images/references/ref-20.jpg" },
];

const localProjects = [
  { name: "Buena Vida", location: "Belgrade", images: ["/images/references/ref-22.jpg"] },
  { name: "Burrito Madre", location: "Belgrade, 4 locations", images: ["/images/references/ref-25.jpg"] },
  { name: "Frans Restaurant", location: "Belgrade", images: ["/images/references/frans.jpg"] },
  { name: "Go Sushi", location: "Belgrade", images: ["/images/references/go-sushi.jpg"] },
  { name: "Ambar", location: "Belgrade", images: ["/images/references/ref-30.jpg"] },
  { name: "Comunale", location: "Belgrade", images: ["/images/references/ref-31.jpg"] },
  { name: "Burger House Bros", location: "Belgrade", images: ["/images/references/ref-35.jpg"] },
  { name: "Mona Plaza Hotel", location: "Belgrade", images: ["/images/references/mona-plaza.jpg"] },
  { name: "Zira Golden Tulip Hotel", location: "Belgrade", images: ["/images/references/zira-golden-tulip.jpg"] },
  { name: "Grey Hotel ★★★★", location: "Kopaonik", images: ["/images/references/ref-40.jpg"] },
  { name: "Novak Hotel & Caffe", location: "Belgrade", images: ["/images/references/ref-46.jpg"] },
  { name: "Maxi", location: "Serbia", images: ["/images/references/ref-50.jpg"] },
  { name: "Toro Restaurant", location: "Belgrade", images: ["/images/references/ref-51.jpg"] },
  { name: "Balkan Restaurant", location: "Belgrade", images: ["/images/references/ref-55.jpg"] },
];

const no1Categories = [
  "Pizza Chains", "Convenience Stores", "Fast Casual",
  "Deli Sandwich Shops", "Steakhouses & Seafood", "Chicken Outlets",
  "Pan-Asian Cuisine", "Casual Dining", "QSR",
];

export default function ReferencesPage() {
  return (
    <>
      {/* ═══════════════════════════════════════════
          HERO — "This is Innovation, This is Middleby"
      ═══════════════════════════════════════════ */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <Image
          src="/images/references/ref-02.jpg"
          alt="This is Innovation, This is Middleby — Professional kitchen equipment"
          fill
          className="object-cover"
          priority
        />
        <h1 className="sr-only">References & Partners — MB Equipment Solutions</h1>
        {/* Middleby badge */}
        <div className="absolute bottom-8 left-6 z-10 flex items-center gap-3 bg-black/60 backdrop-blur-sm rounded-lg px-5 py-3">
          <span className="text-white/70 text-sm font-medium">Endorsed by</span>
          <Image src="/logos/middleby-white.svg" alt="Middleby Corporation" width={120} height={20} className="h-5 w-auto" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy to-transparent" />
      </section>

      {/* ═══════════════════════════════════════════
          WHO WE ARE — Text section for SEO
      ═══════════════════════════════════════════ */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <AnimatedSection>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7">
                <p className="text-gold text-sm font-semibold uppercase tracking-[0.2em] mb-4">
                  Who We Are
                </p>
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy leading-tight">
                  Middleby is the leader in commercial kitchen worldwide
                </h2>
                <div className="w-12 h-[2px] bg-gold mt-6 mb-6" />
                <p className="text-text-secondary leading-relaxed">
                  Offering the most advanced innovations for cooking and warming,
                  refrigeration, freezing, and beverage solutions for top restaurant
                  and institutional customers.
                </p>
              </div>
              <div className="lg:col-span-5">
                <div className="bg-offwhite rounded-sm p-8">
                  <p className="text-text-secondary/50 text-xs uppercase tracking-[0.2em] mb-6">Middleby Corporation</p>
                  <div className="space-y-5">
                    <div className="flex items-baseline justify-between border-b border-navy/[0.06] pb-4">
                      <span className="text-text-secondary text-sm">Founded</span>
                      <span className="text-navy font-display text-xl font-bold">1888</span>
                    </div>
                    <div className="flex items-baseline justify-between border-b border-navy/[0.06] pb-4">
                      <span className="text-text-secondary text-sm">Headquarters</span>
                      <span className="text-navy font-display text-xl font-bold">Chicago, IL</span>
                    </div>
                    <div className="flex items-baseline justify-between border-b border-navy/[0.06] pb-4">
                      <span className="text-text-secondary text-sm">Employees</span>
                      <span className="text-gold font-display text-xl font-bold">8,400+</span>
                    </div>
                    <div className="flex items-baseline justify-between">
                      <span className="text-text-secondary text-sm">Global Presence</span>
                      <span className="text-navy font-display text-xl font-bold">50% outside US</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          VISUAL SHOWCASE — 65 Brands + Inspiration grid
      ═══════════════════════════════════════════ */}
      <section className="bg-white py-10">
        <div className="max-w-6xl mx-auto px-6">
          {/* Top row: 65 Brands image spanning full width */}
          <div className="relative h-[280px] sm:h-[340px] overflow-hidden rounded-sm mb-4">
            <Image
              src="/images/references/ref-03.jpg"
              alt="Over 65 brands — Foodservice and Beverage, Residential, Food Processing and Bakery"
              fill
              className="object-cover"
            />
          </div>
          {/* Bottom row: 4 inspiration images in 2x2 grid */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { src: "/images/references/ref-04.jpg", alt: "Space is the breath of art" },
              { src: "/images/references/ref-06.jpg", alt: "Trust — fire cooking" },
              { src: "/images/references/ref-08.jpg", alt: "The secret to creating magical dishes" },
              { src: "/images/references/ref-09.jpg", alt: "Trends change and we do as well" },
            ].map((item) => (
              <div key={item.alt} className="relative h-[200px] sm:h-[240px] overflow-hidden group rounded-sm">
                <Image src={item.src} alt={item.alt} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          No. 1 — Market Leadership
      ═══════════════════════════════════════════ */}
      <section className="py-20 bg-navy">
        <div className="max-w-5xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-10">
              <span className="text-gold text-sm font-semibold uppercase tracking-[0.3em]">Market Leadership</span>
              <h2 className="font-display text-6xl sm:text-7xl font-bold text-white mt-4 italic">No. 1</h2>
              <p className="text-white/30 mt-2 text-sm">Across 9 foodservice segments worldwide</p>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {no1Categories.map((cat) => (
                <span key={cat} className="text-white/60 text-sm uppercase tracking-wider border border-white/10 px-5 py-2.5 hover:border-gold/40 hover:text-white transition-all cursor-default">
                  {cat}
                </span>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          GLOBAL CHAINS — Carousel
      ═══════════════════════════════════════════ */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 mb-10">
          <AnimatedSection>
            <p className="text-gold text-sm font-semibold uppercase tracking-[0.2em] mb-3">Global Partnerships</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy mb-4">
              Multi-Unit Partners
            </h2>
            <p className="text-text-secondary text-sm">
              Marriott <span className="text-gold mx-2">·</span> Starbucks <span className="text-gold mx-2">·</span> Domino&apos;s <span className="text-gold mx-2">·</span> McDonald&apos;s <span className="text-gold mx-2">·</span> Burger King <span className="text-gold mx-2">·</span> KFC <span className="text-gold mx-2">·</span> Taco Bell <span className="text-gold mx-2">·</span> Hard Rock Cafe
            </p>
          </AnimatedSection>
        </div>

        {/* Auto-scrolling carousel */}
        <div className="relative">
          <div className="flex gap-4 animate-scroll-references">
            {[
              { src: "/images/references/ref-11.jpg", alt: "Marriott Hotels" },
              { src: "/images/references/ref-13.jpg", alt: "Starbucks" },
              { src: "/images/references/ref-14.jpg", alt: "Domino's Pizza" },
              { src: "/images/references/ref-15.jpg", alt: "McDonald's" },
              { src: "/images/references/ref-17.jpg", alt: "Burger King" },
              { src: "/images/references/ref-18.jpg", alt: "KFC" },
              { src: "/images/references/ref-19.jpg", alt: "Taco Bell" },
              { src: "/images/references/ref-20.jpg", alt: "Hard Rock Cafe" },
              { src: "/images/references/ref-11.jpg", alt: "Marriott Hotels" },
              { src: "/images/references/ref-13.jpg", alt: "Starbucks" },
              { src: "/images/references/ref-14.jpg", alt: "Domino's Pizza" },
              { src: "/images/references/ref-15.jpg", alt: "McDonald's" },
              { src: "/images/references/ref-17.jpg", alt: "Burger King" },
              { src: "/images/references/ref-18.jpg", alt: "KFC" },
              { src: "/images/references/ref-19.jpg", alt: "Taco Bell" },
              { src: "/images/references/ref-20.jpg", alt: "Hard Rock Cafe" },
              { src: "/images/references/ref-11.jpg", alt: "Marriott Hotels" },
              { src: "/images/references/ref-13.jpg", alt: "Starbucks" },
              { src: "/images/references/ref-14.jpg", alt: "Domino's Pizza" },
              { src: "/images/references/ref-15.jpg", alt: "McDonald's" },
              { src: "/images/references/ref-17.jpg", alt: "Burger King" },
              { src: "/images/references/ref-18.jpg", alt: "KFC" },
              { src: "/images/references/ref-19.jpg", alt: "Taco Bell" },
              { src: "/images/references/ref-20.jpg", alt: "Hard Rock Cafe" },
            ].map((item, i) => (
              <div key={i} className="shrink-0 w-[400px] h-[220px] rounded-sm overflow-hidden relative">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          LOCAL PROJECTS — Restaurants, Hotels, Retail
      ═══════════════════════════════════════════ */}
      <section className="py-20 bg-offwhite overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 mb-10">
          <AnimatedSection>
            <p className="text-gold text-sm font-semibold uppercase tracking-[0.2em] mb-3">Featured Projects</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy mb-4">
              Kitchens That Run
            </h2>
            <p className="text-text-secondary text-sm">
              Buena Vida <span className="text-gold mx-2">·</span> Burrito Madre <span className="text-gold mx-2">·</span> Frans <span className="text-gold mx-2">·</span> Go Sushi <span className="text-gold mx-2">·</span> Ambar <span className="text-gold mx-2">·</span> Comunale <span className="text-gold mx-2">·</span> Burger House Bros <span className="text-gold mx-2">·</span> Mona Plaza <span className="text-gold mx-2">·</span> Zira Golden Tulip <span className="text-gold mx-2">·</span> Grey Hotel <span className="text-gold mx-2">·</span> Novak Hotel <span className="text-gold mx-2">·</span> Maxi <span className="text-gold mx-2">·</span> Toro <span className="text-gold mx-2">·</span> Balkan Restaurant
            </p>
          </AnimatedSection>
        </div>

        {/* Row 1 — first 7 projects, scrolling left */}
        <div className="relative mb-4">
          <div className="flex gap-4" style={{ width: 'max-content', animation: 'scroll-left 40s linear infinite' }}>
            {[...localProjects.slice(0, 7), ...localProjects.slice(0, 7), ...localProjects.slice(0, 7)].map((project, i) => (
              <div key={`r1-${i}`} className="relative w-[320px] h-[220px] flex-shrink-0 rounded-sm overflow-hidden group">
                <Image src={project.images[0]} alt={project.name} fill className="object-cover group-hover:scale-[1.03] transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white font-display text-base font-bold drop-shadow-lg">{project.name}</h3>
                  <p className="text-white/60 text-xs">{project.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 — last 7 projects, scrolling right */}
        <div className="relative">
          <div className="flex gap-4" style={{ width: 'max-content', animation: 'scroll-right 45s linear infinite' }}>
            {[...localProjects.slice(7), ...localProjects.slice(7), ...localProjects.slice(7)].map((project, i) => (
              <div key={`r2-${i}`} className="relative w-[320px] h-[220px] flex-shrink-0 rounded-sm overflow-hidden group">
                <Image src={project.images[0]} alt={project.name} fill className="object-cover group-hover:scale-[1.03] transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white font-display text-base font-bold drop-shadow-lg">{project.name}</h3>
                  <p className="text-white/60 text-xs">{project.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════
          DESIGN & ENGINEERING
      ═══════════════════════════════════════════ */}
      <section className="py-14 bg-navy">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <p className="text-gold text-sm font-semibold uppercase tracking-[0.2em] mb-3">Design & Engineering</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-14">
              Selling the Experience
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {[
              { src: "/images/references/ref-07.jpg", label: "Design", alt: "Design Technology" },
              { src: "/images/references/ref-57.jpg", label: "Engineering", alt: "Kitchen engineering project" },
              { src: "/images/references/ref-58.jpg", label: "Planning", alt: "Equipment documentation and planning" },
            ].map((item, i) => (
              <AnimatedSection key={item.label} delay={i * 0.1}>
                <p className="text-white/50 text-xs uppercase tracking-wider mb-1">This is</p>
                <p className="text-white font-display text-lg font-bold mb-2">{item.label}</p>
                <div className="relative aspect-[16/10] rounded-sm overflow-hidden group">
                  <Image src={item.src} alt={item.alt} fill className="object-cover group-hover:scale-[1.03] transition-transform duration-700" />
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Equipment showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
            {[
              { src: "/images/references/ref-59.jpg", alt: "Vivo Plus — food service equipment" },
              { src: "/images/references/ref-60.jpg", alt: "Professional bakery display counter" },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="relative aspect-[2/1] rounded-sm overflow-hidden group">
                  <Image src={item.src} alt={item.alt} fill className="object-cover group-hover:scale-[1.03] transition-transform duration-700" />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════
          ALL BRANDS — Logo grid
      ═══════════════════════════════════════════ */}
      <section className="py-14 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-2">
                <p className="text-gold text-sm font-semibold uppercase tracking-[0.2em] mb-2">Our Network</p>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-navy mb-3">
                  Brands &<br />Partners
                </h2>
                <div className="w-10 h-[2px] bg-gold mb-3" />
                <p className="text-text-secondary text-sm leading-relaxed">
                  Over 65 world-class brands under one roof.
                </p>
              </div>
              <div className="lg:col-span-10">
                <Image
                  src="/images/references/ref-61.jpg"
                  alt="MB Equipment Solutions — Complete brand and partner logo grid"
                  width={1200}
                  height={400}
                  className="w-full object-contain"
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          GEOGRAPHY STATS — Inline strip
      ═══════════════════════════════════════════ */}
      <section className="py-10 bg-navy border-y border-gold/20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-0 text-center">
            <span className="text-white font-display text-lg font-bold">500+ Projects</span>
            <span className="text-gold mx-4 hidden sm:inline">·</span>
            <span className="text-white font-display text-lg font-bold">40+ Countries</span>
            <span className="text-gold mx-4 hidden sm:inline">·</span>
            <span className="text-white font-display text-lg font-bold">65+ Brands</span>
            <span className="text-gold mx-4 hidden sm:inline">·</span>
            <span className="text-white/60 text-sm">Balkans · Central Europe · Middle East · North Africa · Central Asia</span>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CTA — Work With Us
      ═══════════════════════════════════════════ */}
      <section className="py-24 bg-navy">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <span className="text-gold text-sm font-semibold uppercase tracking-[0.2em]">
              Work With Us
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mt-4 mb-6">
              Ready to Join Our Portfolio?
            </h2>
            <p className="text-white/50 leading-relaxed max-w-2xl mx-auto mb-10">
              Whether you are planning a new kitchen, upgrading equipment, or rolling out
              across multiple locations — we deliver on spec, on time, and on budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-red text-white font-semibold px-8 py-4 hover:bg-red-hover transition-all"
              >
                Start Your Project
              </Link>
              <Link
                href="/demo-centers"
                className="inline-flex items-center justify-center border border-white/30 text-white font-semibold px-8 py-4 hover:bg-white/10 transition-all"
              >
                Visit a Showroom
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
