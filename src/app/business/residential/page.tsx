import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
  title: "Residential — Luxury Home Kitchen Equipment | MB Equipment Solutions",
  description:
    "An elite portfolio of global epicurean brands. Viking, La Cornue, AGA, Lynx, and 20+ premium residential kitchen brands. Authorized dealer with showroom, installation, and service.",
  alternates: { canonical: "/business/residential" },
};

const residentialBrands = [
  { name: "La Cornue", logo: "/images/brands/lacornue-logo.svg", category: "Indoor" },
  { name: "Viking", logo: "/images/brands/viking-res-logo.svg", category: "Indoor" },
  { name: "AGA", logo: "/images/brands/aga-logo.svg", category: "Indoor" },
  { name: "Novy", logo: "/images/brands/novy-logo.svg", category: "Indoor" },
  { name: "CookTek", logo: "/images/brands/cooktek-res-logo.svg", category: "Indoor" },
  { name: "Leisure Sinks", logo: "/images/brands/leisure-logo.svg", category: "Indoor" },
  { name: "Rangemaster", logo: "/images/brands/rangemaster-logo.svg", category: "Indoor" },
  { name: "Brava", logo: "/images/brands/brava-logo.svg", category: "Indoor" },
  { name: "Stanley", logo: "/images/brands/stanley-logo.svg", category: "Indoor" },
  { name: "Marvel", logo: "/images/brands/marvel-logo.svg", category: "Indoor" },
  { name: "U-Line", logo: "/images/brands/uline-res-logo.svg", category: "Indoor" },
  { name: "Scotsman", logo: "/images/brands/scotsman-logo.svg", category: "Indoor" },
  { name: "Marco", logo: "/images/brands/marco-logo.svg", category: "Beverage" },
  { name: "Synesso", logo: "/images/brands/synesso-res-logo.svg", category: "Beverage" },
  { name: "Ss Brewtech", logo: "/images/brands/ssbrewtech-logo.svg", category: "Beverage" },
  { name: "Lynx", logo: "/images/brands/lynx-logo.svg", category: "Outdoor" },
  { name: "Josper Casa", logo: "/images/brands/josper-casa-logo.svg", category: "Outdoor" },
  { name: "EVO", logo: "/images/brands/evo-res-logo.svg", category: "Outdoor" },
  { name: "Fontana Forni", logo: "/images/brands/fontana-logo.svg", category: "Outdoor" },
  { name: "Kamado Joe", logo: "/images/brands/kamadojoe-logo.svg", category: "Outdoor" },
  { name: "Masterbuilt", logo: "/images/brands/masterbuilt-logo.svg", category: "Outdoor" },
  { name: "Char-Griller", logo: "/images/brands/chargriller-logo.svg", category: "Outdoor" },
  { name: "TradeWind", logo: "/images/brands/tradewind-logo.svg", category: "Indoor" },
];

export default function ResidentialPage() {
  return (
    <>
      {/* ─── HERO — Video Background ─── */}
      <section className="relative h-[85vh] min-h-[600px] flex items-start justify-center pt-[20vh] overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/residential-hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-6">
          <p className="text-gold text-sm font-semibold uppercase tracking-[0.3em] mb-4">
            MB Equipment Solutions
          </p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1]">
            Residential
          </h1>
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

        {/* Gradient fade into next section */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* ─── AN ELITE PORTFOLIO ─── */}
      <section className="py-28 bg-white relative overflow-hidden">
        {/* Decorative gold line */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-20 bg-gradient-to-b from-transparent to-gold" />

        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
              {/* Left — heading */}
              <div className="lg:col-span-2">
                <span className="text-gold text-sm font-semibold uppercase tracking-[0.2em]">
                  Our Philosophy
                </span>
                <h2 className="font-display text-4xl sm:text-5xl font-bold text-navy leading-[1.15] mt-4">
                  An Elite Portfolio
                  <span className="block text-gold mt-1">of Global Epicurean Brands</span>
                </h2>
                <div className="w-16 h-[2px] bg-gold mt-6" />
              </div>

              {/* Right — text with left gold border */}
              <div className="lg:col-span-3 border-l-2 border-gold/30 pl-8">
                <p className="text-text-secondary text-lg leading-relaxed">
                  At MB Equipment Solutions Residential, our passion is for taste. A taste for creative
                  ingenuity, innovation, and most of all, a taste for an authentic culinary story.
                </p>
                <p className="text-text-secondary text-lg leading-relaxed mt-6">
                  Our growing portfolio of global indoor and outdoor brands is so much more than a collection
                  of legends. It is a gathering of people, their tastes, and their stories. Each chapter
                  written from a unique point of view. Each story, an inspiration.
                </p>
                <p className="text-text-secondary/70 text-base leading-relaxed mt-6 italic">
                  We&apos;ve brought them all to MB Equipment Solutions to write their next chapters together.
                  To see those stories unfold within the heart of your home.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── BRAND LOGO CAROUSEL ─── */}
      <section className="py-20 bg-navy border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative overflow-hidden">
            {/* Row 1 — first half, scrolls left */}
            <div className="flex animate-scroll-residential gap-20 items-center mb-12">
              {[...residentialBrands.slice(0, 12), ...residentialBrands.slice(0, 12), ...residentialBrands.slice(0, 12)].map((brand, i) => (
                <div
                  key={`row1-${brand.name}-${i}`}
                  className="flex-shrink-0 w-[180px] h-[80px] flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity duration-300"
                >
                  <Image
                    src={brand.logo}
                    alt={`${brand.name} logo`}
                    width={180}
                    height={80}
                    className="max-h-[65px] w-auto object-contain brightness-0 invert"
                  />
                </div>
              ))}
            </div>
            {/* Row 2 — second half, scrolls right */}
            <div className="flex animate-scroll-residential-reverse gap-20 items-center">
              {[...residentialBrands.slice(12), ...residentialBrands.slice(12), ...residentialBrands.slice(12)].map((brand, i) => (
                <div
                  key={`row2-${brand.name}-${i}`}
                  className="flex-shrink-0 w-[180px] h-[80px] flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity duration-300"
                >
                  <Image
                    src={brand.logo}
                    alt={`${brand.name} logo`}
                    width={180}
                    height={80}
                    className="max-h-[65px] w-auto object-contain brightness-0 invert"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── OUR WORLD AWAITS YOU ─── */}
      <section className="py-28 bg-offwhite">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden rounded-sm">
              {/* Left — Text */}
              <div className="bg-navy p-12 lg:p-16 flex flex-col justify-center">
                <div className="w-12 h-[2px] bg-gold mb-8" />
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-white leading-tight">
                  Our MB Equipment Solutions World
                  <span className="block text-gold mt-2">Awaits You</span>
                </h2>
                <p className="mt-8 text-white/60 leading-relaxed">
                  MB Equipment Solutions Residential is a collection of twenty-one (and counting)
                  international consumer brands dedicated to manufacturing and distributing many of
                  the best known and loved kitchen appliances and interior furnishings in the world.
                </p>
                <p className="mt-4 text-white/40 leading-relaxed text-sm">
                  Middleby is setting the standard for the luxury home industry, committed to serving
                  excellence in everything we do.
                </p>
              </div>
              {/* Right — Logo */}
              <div className="bg-[#0D1520] flex items-center justify-center p-12 lg:p-16 relative">
                {/* Subtle corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-gold/20" />
                <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-gold/20" />
                <div className="text-center">
                  <Image
                    src="/mb-logo.svg"
                    alt="MB Equipment Solutions"
                    width={220}
                    height={90}
                    className="mx-auto"
                  />
                  <div className="w-10 h-[1px] bg-gold/40 mx-auto mt-8 mb-4" />
                  <p className="text-white/40 text-lg tracking-[0.6em] uppercase">
                    Residential
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── LEARN MORE — Brochures ─── */}
      <section className="py-20 bg-navy">
        <div className="max-w-5xl mx-auto px-6">
          <AnimatedSection>
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              {/* Left — heading */}
              <div className="lg:max-w-xs flex-shrink-0">
                <span className="text-gold text-sm font-semibold uppercase tracking-[0.2em]">
                  Brochures
                </span>
                <h3 className="font-display text-2xl font-bold text-white mt-2">
                  Learn More About Middleby Residential
                </h3>
                <div className="w-12 h-[2px] bg-gold mt-3" />
              </div>

              {/* Right — two brochure cards */}
              <div className="flex flex-col sm:flex-row gap-5">
                {/* Indoor */}
                <a
                  href="https://middlebyresidential.com/wp-content/uploads/2024/08/Middleby-Residential-Brand-Brochure-Update-7.24.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-5 bg-white/5 border border-white/10 px-5 py-4 hover:border-gold/40 hover:bg-white/10 transition-all duration-300"
                >
                  <Image
                    src="/images/residential/brochure-indoor.png"
                    alt="Middleby Residential Brand Overview Brochure"
                    width={70}
                    height={80}
                    className="shadow-lg flex-shrink-0 group-hover:scale-105 transition-transform duration-300"
                  />
                  <div>
                    <p className="text-white font-semibold text-sm">Brand Overview</p>
                    <p className="text-white/40 text-xs mt-1">Indoor Collection</p>
                    <span className="mt-2 inline-flex items-center gap-1 text-gold font-semibold text-xs">
                      Download PDF <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                    </span>
                  </div>
                </a>

                {/* Outdoor */}
                <a
                  href="https://middlebyresidential.com/wp-content/uploads/2024/08/Middleby-Residential-Outdoor-Brochure-Update-7.24.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-5 bg-white/5 border border-white/10 px-5 py-4 hover:border-gold/40 hover:bg-white/10 transition-all duration-300"
                >
                  <Image
                    src="/images/residential/brochure-outdoor.png"
                    alt="Middleby Residential Outdoor Overview Brochure"
                    width={70}
                    height={80}
                    className="shadow-lg flex-shrink-0 group-hover:scale-105 transition-transform duration-300"
                  />
                  <div>
                    <p className="text-white font-semibold text-sm">Outdoor Overview</p>
                    <p className="text-white/40 text-xs mt-1">Outdoor Collection</p>
                    <span className="mt-2 inline-flex items-center gap-1 text-gold font-semibold text-xs">
                      Download PDF <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── SHOWROOM CTA ─── */}
      <section className="py-24 bg-navy">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <span className="text-gold text-sm font-semibold uppercase tracking-[0.2em]">
              Experience
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mt-4 mb-6">
              Touch It. Cook On It. Decide.
            </h2>
            <p className="text-white/60 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
              We do not sell residential equipment from a PDF. Our Belgrade showroom has live
              Viking, La Cornue, and AGA units ready to demonstrate. Bring your architect.
              Bring your contractor. We&apos;ll walk through specifications, dimensions, utility
              requirements, and finish options in person.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/demo-centers"
                className="inline-flex items-center justify-center bg-red text-white font-semibold px-8 py-4 hover:bg-red-hover transition-all"
              >
                Book a Showroom Visit
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center border border-white/30 text-white font-semibold px-8 py-4 hover:bg-white/10 transition-all"
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
