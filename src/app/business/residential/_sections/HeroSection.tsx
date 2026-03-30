import Image from "next/image";
import { residentialBrands } from "@/data/residential";

export default function HeroSection() {
  return (
    <section
      className="relative h-[85vh] min-h-[600px] flex items-start justify-center pt-[20vh] overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/images/residential/hero-poster.jpg"
        aria-label="Luxury residential kitchen showcase"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/residential-hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 text-center px-6">
        <p className="text-gold text-sm font-semibold uppercase tracking-[0.3em] mb-4">
          Middleby Residential Portfolio
        </p>
        <h1
          id="hero-heading"
          className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1]"
        >
          Luxury Home Kitchen Equipment
        </h1>
        <p className="text-white/80 text-lg max-w-xl mx-auto mt-6 leading-relaxed">
          An authorized portfolio of {residentialBrands.length} premium indoor,
          outdoor, and beverage brands from Middleby Corporation.
        </p>
      </div>

      {/* Endorsed by Middleby badge */}
      <div className="absolute bottom-8 left-6 z-10 flex items-center gap-3 bg-black/50 backdrop-blur-sm rounded-lg px-5 py-3">
        <span className="text-white/90 text-sm font-medium">Endorsed by</span>
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
  );
}
