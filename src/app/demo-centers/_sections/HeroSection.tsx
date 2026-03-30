import Image from "next/image";
import Link from "next/link";
import ChevronRightIcon from "@/components/ui/ChevronRightIcon";

const HERO_BLUR =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiMwQTE2MjgiLz48L3N2Zz4=";

export default function HeroSection() {
  return (
    <section
      className="relative h-[70vh] min-h-[500px] overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <Image
        src="/images/demo/dallas-lg.jpg"
        alt="Middleby Innovation Kitchen showroom with commercial cooking equipment"
        fill
        priority
        sizes="100vw"
        className="object-cover"
        placeholder="blur"
        blurDataURL={HERO_BLUR}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/70 to-navy/30" />

      <div className="relative z-10 h-full flex flex-col justify-end max-w-6xl mx-auto px-6 pb-28">
        <p className="text-gold text-sm font-semibold uppercase tracking-[0.2em] mb-4">
          Demo Centers & Showrooms
        </p>
        <h1
          id="hero-heading"
          className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 max-w-2xl leading-[1.1]"
        >
          Test the Equipment Before You Buy
        </h1>
        <p className="text-white/80 text-lg max-w-xl mb-8">
          Visit a demo kitchen. Run your menu on the equipment. Decide with
          real data, not a brochure.
        </p>
        <div className="flex gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-red text-white font-semibold px-8 py-4 text-sm tracking-wide rounded-sm shadow-lg hover:bg-red-hover hover:-translate-y-px transition-all"
          >
            Book a Visit
            <ChevronRightIcon className="w-4 h-4" />
          </Link>
          <a
            href="#centers"
            className="inline-flex items-center gap-2 border border-white/50 text-white font-semibold px-8 py-4 text-sm tracking-wide rounded-sm hover:bg-white/10 transition-all"
          >
            Explore Centers
            <ChevronRightIcon className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Authorized partner badge */}
      <div className="absolute bottom-8 left-6 z-10 flex items-center gap-3 bg-black/70 backdrop-blur-sm rounded-lg px-5 py-3">
        <span className="text-white/90 text-sm font-medium">
          Authorized Partner of
        </span>
        <Image
          src="/logos/middleby-white.svg"
          alt="Middleby Corporation"
          width={120}
          height={20}
          className="h-5 w-auto"
        />
      </div>
    </section>
  );
}
