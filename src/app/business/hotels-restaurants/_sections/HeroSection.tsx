import Image from "next/image";
import Link from "next/link";
import ChevronRightIcon from "@/components/ui/ChevronRightIcon";
import { brands } from "@/data/our-brands";

const HERO_BLUR =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiMwQTE2MjgiLz48L3N2Zz4=";

export default function HeroSection() {
  return (
    <section
      className="relative min-h-[60vh] flex items-center bg-navy"
      aria-labelledby="hero-heading"
    >
      {/* Optimized hero image via Next/Image */}
      <Image
        src="/images/innovation/hero.jpg"
        alt="Professional commercial kitchen with Middleby equipment"
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-30"
        placeholder="blur"
        blurDataURL={HERO_BLUR}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/80 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
        <span className="text-gold text-sm font-semibold uppercase tracking-[0.2em]">
          Middleby Authorized Partner
        </span>
        <div className="w-12 h-[2px] bg-gold mt-4 mb-6" />
        <h1
          id="hero-heading"
          className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] max-w-3xl"
        >
          Commercial Kitchen Equipment Brands You Can Trust
        </h1>
        <p className="text-white/80 text-lg max-w-xl mt-6 leading-relaxed">
          As an authorized Middleby Corporation partner, MB Equipment Solutions
          provides {brands.length} professional foodservice brands — from
          charcoal grills and combi ovens to ventless fryers and IoT platforms.
        </p>
        <div className="flex flex-wrap gap-4 mt-8">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-red text-white font-semibold px-8 py-4 rounded-sm shadow-lg hover:bg-red-hover hover:-translate-y-px transition-all"
          >
            Request a Quote
            <ChevronRightIcon className="w-4 h-4" />
          </Link>
          <Link
            href="/demo-centers"
            className="inline-flex items-center gap-2 border border-white/50 text-white font-semibold px-8 py-4 rounded-sm hover:bg-white/10 transition-all"
          >
            Visit a Demo Center
            <ChevronRightIcon className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
