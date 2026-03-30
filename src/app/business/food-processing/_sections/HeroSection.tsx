import Image from "next/image";

const HERO_BLUR =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiMxMTEiLz48L3N2Zz4=";

export default function HeroSection() {
  return (
    <section
      className="relative h-[70vh] min-h-[500px] flex items-center overflow-hidden"
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
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <p className="text-gold text-sm font-semibold uppercase tracking-[0.3em] mb-4">
          Middleby Food Processing Group
        </p>
        <h1
          id="hero-heading"
          className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1]"
        >
          Industrial Food Processing Equipment
        </h1>
        <p className="text-white/80 text-xl mt-4 max-w-2xl">
          Complete processing lines for protein and bakery operations — from
          raw preparation to final packaging.
        </p>
      </div>

      {/* Middleby authorized partner badge */}
      <div className="absolute bottom-8 left-6 z-10 flex items-center gap-3 bg-black/70 backdrop-blur-sm rounded-lg px-5 py-3">
        <span className="text-white/90 text-sm font-medium">Authorized Partner of</span>
        <Image
          src="/logos/middleby-white.svg"
          alt="Middleby Corporation"
          width={120}
          height={20}
          className="h-5 w-auto"
        />
      </div>

      {/* Gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
