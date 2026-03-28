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
  { name: "Buena Vida", location: "Belgrade", images: ["/images/references/ref-21.jpg", "/images/references/ref-22.jpg"] },
  { name: "Burrito Madre", location: "Belgrade, 4 locations", images: ["/images/references/ref-24.jpg", "/images/references/ref-25.jpg", "/images/references/ref-26.jpg"] },
  { name: "Ambar", location: "Belgrade", images: ["/images/references/ref-29.jpg", "/images/references/ref-30.jpg"] },
  { name: "Comunale", location: "Belgrade", images: ["/images/references/ref-31.jpg", "/images/references/ref-32.jpg"] },
  { name: "Burger House Bros", location: "Belgrade", images: ["/images/references/ref-35.jpg", "/images/references/ref-36.jpg"] },
  { name: "Grey Hotel ★★★★", location: "Kopaonik", images: ["/images/references/ref-39.jpg", "/images/references/ref-40.jpg"] },
  { name: "Novak Hotel & Caffe", location: "Belgrade", images: ["/images/references/ref-44.jpg", "/images/references/ref-45.jpg", "/images/references/ref-46.jpg"] },
  { name: "Maxi", location: "Serbia", images: ["/images/references/ref-49.jpg", "/images/references/ref-50.jpg"] },
  { name: "Toro Restaurant", location: "Belgrade", images: ["/images/references/ref-51.jpg"] },
  { name: "Balkan Restaurant", location: "Belgrade", images: ["/images/references/ref-54.jpg", "/images/references/ref-55.jpg"] },
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
      <section className="relative h-[80vh] min-h-[600px] flex items-center overflow-hidden">
        <Image
          src="/images/references/ref-02.jpg"
          alt="Professional kitchen — This is Innovation, This is Middleby"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
          <AnimatedSection>
            <p className="text-[#C9A84C] text-sm font-semibold uppercase tracking-[0.3em] mb-6">
              References & Partners
            </p>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.05]">
              The Work<br />
              <span className="italic text-[#C9A84C]">Speaks.</span>
            </h1>
            <p className="text-white/60 mt-6 max-w-lg text-lg leading-relaxed">
              A partial list of projects and partners we have worked with.
              Each one represents a kitchen that is running today.
            </p>
          </AnimatedSection>
        </div>
        {/* Middleby badge */}
        <div className="absolute bottom-8 left-6 z-10 flex items-center gap-3 bg-black/60 backdrop-blur-sm rounded-lg px-5 py-3">
          <span className="text-white/70 text-sm font-medium">Endorsed by</span>
          <Image src="/logos/middleby-white.svg" alt="Middleby Corporation" width={120} height={20} className="h-5 w-auto" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A1628] to-transparent" />
      </section>

      {/* ═══════════════════════════════════════════
          WHO WE ARE — Blueprint section
      ═══════════════════════════════════════════ */}
      <section className="py-24 bg-[#0A1628]">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <Image
                  src="/images/references/ref-01.jpg"
                  alt="Who we are — Middleby kitchen design blueprints"
                  width={800}
                  height={400}
                  className="w-full rounded-sm"
                />
              </div>
              <div>
                <p className="text-[#C9A84C] text-sm font-semibold uppercase tracking-[0.2em] mb-4">
                  Who We Are
                </p>
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-white leading-tight">
                  Middleby is the leader in commercial kitchen worldwide
                </h2>
                <div className="w-12 h-[2px] bg-[#C9A84C] mt-6 mb-6" />
                <p className="text-white/50 leading-relaxed">
                  Offering the most advanced innovations for cooking and warming,
                  refrigeration, freezing, and beverage solutions for top restaurant
                  and institutional customers.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          OVER 65 BRANDS — Showroom
      ═══════════════════════════════════════════ */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="font-display text-8xl sm:text-9xl font-bold text-[#0A1628]/8 leading-none">65+</span>
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#0A1628] -mt-6">
                  Brands
                </h2>
                <div className="w-12 h-[2px] bg-[#C9A84C] mt-6 mb-8" />
                <div className="space-y-4">
                  {[
                    { color: "bg-[#C9A84C]", label: "Foodservice and Beverage" },
                    { color: "bg-[#D32F3D]", label: "Residential" },
                    { color: "bg-[#0A1628]", label: "Food Processing & Bakery" },
                  ].map((item) => (
                    <p key={item.label} className="text-[#595F66] flex items-center gap-4">
                      <span className={`w-3 h-3 ${item.color} rounded-full`} />
                      {item.label}
                    </p>
                  ))}
                </div>
              </div>
              <div className="relative rounded-sm overflow-hidden">
                <Image
                  src="/images/references/ref-03.jpg"
                  alt="Over 65 brands — MB Equipment Solutions showroom"
                  width={800}
                  height={500}
                  className="w-full object-cover"
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          INSPIRATION — 3 Full-bleed images with quotes
      ═══════════════════════════════════════════ */}
      <section>
        <div className="grid grid-cols-1 lg:grid-cols-3">
          {[
            { src: "/images/references/ref-04.jpg", quote: "Space is the breath of art" },
            { src: "/images/references/ref-06.jpg", quote: "Of all the things a company can supply, none is more important than Trust" },
            { src: "/images/references/ref-08.jpg", quote: "We know the secret to creating magical dishes" },
          ].map((item) => (
            <div key={item.quote} className="relative h-[450px] overflow-hidden group">
              <Image src={item.src} alt={item.quote} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-10 left-8 right-8 z-10">
                <p className="text-white font-display text-xl sm:text-2xl italic leading-relaxed">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          TRENDS CHANGE — Statement
      ═══════════════════════════════════════════ */}
      <section className="relative h-[500px] overflow-hidden">
        <Image
          src="/images/references/ref-09.jpg"
          alt="Trends change — luxury restaurant bar"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-6xl mx-auto px-6 w-full">
            <AnimatedSection>
              <p className="text-white font-display text-2xl sm:text-3xl lg:text-4xl leading-relaxed max-w-md italic">
                Trends change,<br />
                and we do as well,<br />
                in order to best serve<br />
                the ever-evolving needs<br />
                of our customers.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          No. 1 — Market Leadership
      ═══════════════════════════════════════════ */}
      <section className="py-24 bg-[#0A1628]">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative rounded-sm overflow-hidden h-[550px]">
                <Image src="/images/references/ref-10.jpg" alt="No. 1 — Premium meat aging display" fill className="object-cover" />
              </div>
              <div>
                <span className="text-[#C9A84C] text-sm font-semibold uppercase tracking-[0.2em]">Market Leadership</span>
                <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mt-4 mb-10 italic">No. 1</h2>
                <div className="space-y-0">
                  {no1Categories.map((cat, i) => (
                    <div key={cat} className="flex items-center gap-4 py-4 border-b border-white/10 group hover:border-[#C9A84C]/40 transition-all">
                      <span className="text-[#C9A84C]/30 text-xs font-bold w-6 font-mono">{String(i + 1).padStart(2, "0")}</span>
                      <span className="text-white/60 group-hover:text-white font-medium transition-colors uppercase tracking-wider text-sm">
                        In {cat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          GLOBAL CHAINS — Marriott, Starbucks, McDonald's, etc.
      ═══════════════════════════════════════════ */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <p className="text-[#C9A84C] text-sm font-semibold uppercase tracking-[0.2em] mb-3">Global Partnerships</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#0A1628] mb-4">
              Multi-Unit Partners
            </h2>
            <div className="w-12 h-[2px] bg-[#C9A84C] mb-14" />
          </AnimatedSection>

          {/* Marriott — featured large */}
          <AnimatedSection>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
              {globalChains[0].images?.map((img, i) => (
                <div key={i} className="relative h-[350px] rounded-sm overflow-hidden group">
                  <Image src={img} alt="Marriott Hotels project" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  {i === 0 && (
                    <div className="absolute bottom-6 left-6 z-10">
                      <h3 className="text-white font-display text-2xl font-bold">Marriott</h3>
                      <p className="text-white/50 text-sm mt-1">Hotels · Resorts · Suites</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Other global chains — grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {globalChains.slice(1).map((chain, i) => (
              <AnimatedSection key={chain.name} delay={i * 0.06}>
                <div className="relative h-[280px] rounded-sm overflow-hidden group">
                  <Image src={chain.image!} alt={`${chain.name} project`} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-6 left-6 z-10">
                    <h3 className="text-white font-bold text-lg">{chain.name}</h3>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Pitco — full width feature */}
          <AnimatedSection>
            <div className="relative h-[300px] rounded-sm overflow-hidden mt-4">
              <Image src="/images/references/ref-16.jpg" alt="Pitco — The best fries come from the best fryers" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-l from-black/10 to-transparent" />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          JOSPER — "With right tools everything is possible"
      ═══════════════════════════════════════════ */}
      <section className="relative h-[400px] overflow-hidden">
        <Image src="/images/references/ref-23.jpg" alt="Josper — With right tools everything is possible" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/30" />
      </section>

      {/* ═══════════════════════════════════════════
          LOCAL PROJECTS — Restaurants, Hotels, Retail
      ═══════════════════════════════════════════ */}
      <section className="py-24 bg-[#F8F9FA]">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <p className="text-[#C9A84C] text-sm font-semibold uppercase tracking-[0.2em] mb-3">Featured Projects</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#0A1628] mb-4">
              Kitchens That Run
            </h2>
            <div className="w-12 h-[2px] bg-[#C9A84C] mb-14" />
          </AnimatedSection>

          <div className="space-y-16">
            {localProjects.map((project, idx) => (
              <AnimatedSection key={project.name} delay={0.1}>
                <div className={`grid grid-cols-1 ${project.images.length > 1 ? 'lg:grid-cols-2' : ''} gap-4`}>
                  {project.images.map((img, i) => (
                    <div key={i} className="relative h-[320px] rounded-sm overflow-hidden group">
                      <Image src={img} alt={`${project.name} — ${project.location}`} fill className="object-cover group-hover:scale-[1.03] transition-transform duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      {i === 0 && (
                        <div className="absolute bottom-6 left-6 z-10">
                          <h3 className="text-white font-display text-xl font-bold drop-shadow-lg">{project.name}</h3>
                          <p className="text-white/60 text-sm mt-1 drop-shadow-lg">{project.location}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          BERKEL — "Let's bring people to the table"
      ═══════════════════════════════════════════ */}
      <section className="relative h-[400px] overflow-hidden">
        <Image src="/images/references/ref-41.jpg" alt="Berkel — Let's bring people to the table" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/20" />
      </section>

      {/* ═══════════════════════════════════════════
          DESIGN & ENGINEERING
      ═══════════════════════════════════════════ */}
      <section className="py-24 bg-[#0A1628]">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <p className="text-[#C9A84C] text-sm font-semibold uppercase tracking-[0.2em] mb-3">Design & Engineering</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-14">
              Selling the Experience
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <AnimatedSection>
              <div className="relative h-[350px] rounded-sm overflow-hidden">
                <Image src="/images/references/ref-07.jpg" alt="Design Technology — Selling the experience" fill className="object-cover" />
                <div className="absolute inset-0 bg-black/30" />
                <div className="absolute bottom-6 left-6 z-10">
                  <p className="text-white/50 text-xs uppercase tracking-wider">This is</p>
                  <p className="text-white font-display text-2xl font-bold">Design</p>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <div className="relative h-[350px] rounded-sm overflow-hidden">
                <Image src="/images/references/ref-57.jpg" alt="Beiersdorf — Kitchen engineering project" fill className="object-cover" />
                <div className="absolute inset-0 bg-black/30" />
                <div className="absolute bottom-6 left-6 z-10">
                  <p className="text-white/50 text-xs uppercase tracking-wider">This is</p>
                  <p className="text-white font-display text-2xl font-bold">Engineering</p>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="relative h-[350px] rounded-sm overflow-hidden">
                <Image src="/images/references/ref-58.jpg" alt="Kitchen equipment documentation and planning" fill className="object-cover" />
                <div className="absolute inset-0 bg-black/30" />
                <div className="absolute bottom-6 left-6 z-10">
                  <p className="text-white/50 text-xs uppercase tracking-wider">This is</p>
                  <p className="text-white font-display text-2xl font-bold">Planning</p>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Equipment showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
            <AnimatedSection>
              <div className="relative h-[300px] rounded-sm overflow-hidden group">
                <Image src="/images/references/ref-59.jpg" alt="Vivo Plus — food service equipment" fill className="object-cover group-hover:scale-[1.03] transition-transform duration-700" />
                <div className="absolute inset-0 bg-black/20" />
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <div className="relative h-[300px] rounded-sm overflow-hidden group">
                <Image src="/images/references/ref-60.jpg" alt="Professional bakery display counter" fill className="object-cover group-hover:scale-[1.03] transition-transform duration-700" />
                <div className="absolute inset-0 bg-black/20" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          WORLD MAP — Global Presence
      ═══════════════════════════════════════════ */}
      <section className="relative h-[500px] overflow-hidden">
        <Image src="/images/references/ref-05.jpg" alt="Middleby global presence — 40+ countries" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/20" />
      </section>

      {/* ═══════════════════════════════════════════
          ALL BRANDS — Logo grid
      ═══════════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-12">
              <p className="text-[#C9A84C] text-sm font-semibold uppercase tracking-[0.2em] mb-3">Our Network</p>
              <h2 className="font-display text-3xl font-bold text-[#0A1628]">
                Brands & Partners
              </h2>
            </div>
            <div className="relative rounded-sm overflow-hidden">
              <Image
                src="/images/references/ref-61.jpg"
                alt="MB Equipment Solutions — Complete brand and partner logo grid"
                width={1200}
                height={400}
                className="w-full object-contain"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          GEOGRAPHY STATS
      ═══════════════════════════════════════════ */}
      <section className="py-20 bg-[#F8F9FA]">
        <div className="max-w-5xl mx-auto px-6">
          <AnimatedSection>
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              <div>
                <h2 className="font-display text-3xl font-bold text-[#0A1628]">
                  40+ Countries. <span className="text-[#C9A84C]">Growing.</span>
                </h2>
                <p className="text-[#595F66] mt-3 max-w-lg text-sm">
                  Balkans, Central Europe, Middle East, North Africa, and Central Asia.
                </p>
              </div>
              <div className="flex gap-12">
                {[
                  { num: "500+", label: "Projects", color: "text-[#0A1628]" },
                  { num: "40+", label: "Countries", color: "text-[#D32F3D]" },
                  { num: "65+", label: "Brands", color: "text-[#C9A84C]" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className={`font-display text-4xl font-bold ${stat.color}`}>{stat.num}</p>
                    <p className="text-[#595F66] text-sm mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CTA — Work With Us
      ═══════════════════════════════════════════ */}
      <section className="py-24 bg-[#0A1628]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <span className="text-[#C9A84C] text-sm font-semibold uppercase tracking-[0.2em]">
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
                className="inline-flex items-center justify-center bg-[#D32F3D] text-white font-semibold px-8 py-4 rounded-sm hover:bg-[#B82735] transition-all"
              >
                Start Your Project
              </Link>
              <Link
                href="/demo-centers"
                className="inline-flex items-center justify-center border border-white/30 text-white font-semibold px-8 py-4 rounded-sm hover:bg-white/10 transition-all"
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
