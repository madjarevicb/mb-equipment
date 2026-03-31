import Image from "next/image";
import Button from "@/components/ui/Button";

const HERO_BLUR =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiMxMTEiLz48L3N2Zz4=";

export default function HeroSection() {
  return (
    <section
      className="relative min-h-[60vh] lg:min-h-[70vh] flex items-center overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <Image
        src="/images/food-processing/hero.jpg"
        alt="Industrial food processing production line with Middleby equipment"
        fill
        priority
        sizes="100vw"
        className="object-cover"
        placeholder="blur"
        blurDataURL={HERO_BLUR}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/70 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-navy/20" />

      <div className="relative max-w-7xl mx-auto px-6 py-28 lg:py-36">
        <div className="max-w-2xl">
          <p className="text-gold text-xs font-medium uppercase tracking-[0.3em] mb-6">
            Middleby Food Processing Group
          </p>

          <h1
            id="hero-heading"
            className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.05] mb-6"
          >
            Industrial Food<br />
            <span className="italic font-normal">Processing Equipment</span>
          </h1>

          <div className="w-16 h-px bg-gold/60 mb-6" />

          <p className="text-white/70 text-lg leading-relaxed max-w-lg font-light mb-10">
            Complete processing lines for protein and bakery operations — from
            raw preparation to final packaging.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button variant="primary" href="/contact">
              Start a Project
            </Button>
            <Button variant="ghost-dark" href="#equipment" arrow={false}>
              View Equipment
            </Button>
          </div>
        </div>
      </div>

      {/* Authorized partner badge */}
      <div
        className="absolute bottom-8 left-6 z-10 flex items-center gap-3 backdrop-blur-sm px-5 py-3"
        style={{ backgroundColor: "rgba(10,22,40,0.5)" }}
      >
        <span className="text-white/70 text-xs font-medium uppercase tracking-[0.1em]">Authorized Partner of</span>
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
