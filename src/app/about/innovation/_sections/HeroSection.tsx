import Image from "next/image";
import Button from "@/components/ui/Button";

const HERO_BLUR =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMEExNjI4Ii8+PC9zdmc+";

export default function HeroSection() {
  return (
    <section
      className="relative min-h-[60vh] lg:min-h-[70vh] flex items-center overflow-hidden"
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
      <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/70 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-navy/20" />

      <div className="relative max-w-7xl mx-auto px-6 py-28 lg:py-36">
        <div className="max-w-2xl">
          <p className="text-gold text-xs font-medium uppercase tracking-[0.3em] mb-6">
            Technology &amp; Innovation
          </p>

          <h1
            id="hero-heading"
            className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.05] mb-6"
          >
            Smarter Commercial<br />
            <span className="italic font-normal">Kitchen Technology.</span>
          </h1>

          <div className="w-16 h-px bg-gold/60 mb-6" />

          <p className="text-white/70 text-lg leading-relaxed mb-10 max-w-lg font-light">
            From IoT-connected equipment that cuts downtime by 40%, to ventless
            cooking systems installed in over 350,000 locations worldwide. We help
            operators run faster, leaner, and more profitable kitchens.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button variant="primary" href="/demo-centers">
              Book a Live Demo
            </Button>
            <Button variant="ghost-dark" href="/contact" arrow={false}>
              Request a Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
