import Link from "next/link";
import Image from "next/image";
import ChevronRightIcon from "@/components/ui/ChevronRightIcon";

const HERO_BLUR =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMEExNjI4Ii8+PC9zdmc+";

export default function HeroSection() {
  return (
    <section
      className="relative min-h-[70vh] flex items-center"
      aria-labelledby="hero-heading"
    >
      <Image
        src="/images/innovation/hero.jpg"
        alt="Commercial kitchen innovation technology showcase by MB Equipment Solutions"
        fill
        priority
        sizes="100vw"
        className="object-cover"
        placeholder="blur"
        blurDataURL={HERO_BLUR}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/70 to-transparent" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
        <span className="text-gold text-sm font-semibold uppercase tracking-[0.2em]">
          Technology &amp; Innovation
        </span>
        <div className="w-12 h-[2px] bg-gold mt-4 mb-6" />
        <h1
          id="hero-heading"
          className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] max-w-2xl"
        >
          Smarter Commercial Kitchen Technology
        </h1>
        <p className="text-white/90 text-lg max-w-xl mt-6 leading-relaxed">
          MB Equipment Solutions is the authorized Middleby partner for Serbia
          and the Western Balkans — from IoT-connected equipment that cuts
          downtime by 40%, to ventless cooking systems installed in over 350,000
          locations worldwide. We help operators run faster, leaner, and more
          profitable kitchens.
        </p>
        <div className="flex flex-wrap gap-4 mt-8">
          <Link
            href="/demo-centers"
            className="inline-flex items-center gap-2 bg-red text-white font-semibold px-8 py-4 rounded-sm shadow-lg hover:bg-red-hover hover:-translate-y-px transition-all"
          >
            Book a Live Demo
            <ChevronRightIcon className="w-4 h-4" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 border border-white/30 text-white font-semibold px-8 py-4 rounded-sm hover:bg-white/10 transition-all"
          >
            Request a Consultation
            <ChevronRightIcon className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
