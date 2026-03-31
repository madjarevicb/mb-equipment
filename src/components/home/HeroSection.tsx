import Image from "next/image";
import Button from "@/components/ui/Button";


export default function HeroSection() {
  return (
    <section aria-label="Hero" className="relative min-h-screen flex items-center bg-navy pt-20 overflow-hidden">
      {/* Video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/hero-poster.jpg"
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/hero-web.mp4" type="video/mp4" />
      </video>

      {/* Gradient overlays — lighter on mobile, content-aware on desktop */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy/80 via-navy/40 to-transparent md:from-navy/70 md:via-navy/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-navy/20" />

      <div className="relative max-w-7xl mx-auto px-6 pt-32 lg:pt-40 flex flex-col items-start min-h-[80vh] justify-end pb-28 lg:pb-36">
        <p className="text-gold text-xs font-medium uppercase tracking-[0.3em] mb-6">
          Authorized Middleby Corporation Partner
        </p>
        <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-bold text-white leading-[1.05] mb-6 max-w-4xl">
          Commercial Kitchen<br />
          <span className="italic font-normal">Equipment</span>
        </h1>
        <div className="w-16 h-px bg-gold/60 mb-6" />
        <p className="text-lg sm:text-xl text-white/70 font-light max-w-lg mb-10 leading-relaxed">
          One partner for 110+ brands across hotels, restaurants, residential, and food processing — in 40+ countries.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button variant="primary" href="/contact">
            Start a Project
          </Button>
          <Button variant="ghost-dark" href="#sectors" arrow={false}>
            Explore Equipment
          </Button>
        </div>
      </div>

      {/* Middleby badge — bottom-right, editorial */}
      <div className="absolute bottom-8 right-8 z-10 hidden md:flex items-center gap-3 opacity-60">
        <span className="text-white/60 text-xs tracking-[0.2em] uppercase">Partner of</span>
        <Image
          src="/logos/middleby-white.svg"
          alt="Middleby Corporation"
          width={100}
          height={16}
          className="h-4 w-auto opacity-70"
        />
      </div>

      {/* Section transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/50 to-transparent" />
    </section>
  );
}
