import Image from "next/image";
import Button from "@/components/ui/Button";
import { brands } from "@/data/our-brands";

const HERO_BLUR =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiMwQTE2MjgiLz48L3N2Zz4=";

export default function HeroSection() {
  return (
    <section
      className="relative min-h-[60vh] lg:min-h-[70vh] flex items-center overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <Image
        src="/images/innovation/hero.jpg"
        alt="Professional commercial kitchen with Middleby equipment"
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
            Middleby Authorized Partner
          </p>

          <h1
            id="hero-heading"
            className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.05] mb-6"
          >
            {brands.length} Brands.<br />
            <span className="italic font-normal">One Partner.</span>
          </h1>

          <div className="w-16 h-px bg-gold/60 mb-6" />

          <p className="text-white/70 text-lg leading-relaxed mb-10 max-w-lg font-light">
            As an authorized Middleby Corporation partner, we provide
            professional foodservice brands — from charcoal grills and combi
            ovens to ventless fryers and IoT platforms.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button variant="primary" href="/contact">
              Request a Quote
            </Button>
            <Button variant="ghost-dark" href="/demo-centers" arrow={false}>
              Visit a Demo Center
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
