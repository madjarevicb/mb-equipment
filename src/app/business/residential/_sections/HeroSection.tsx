import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      className="relative h-[85vh] min-h-[600px] overflow-hidden"
      aria-label="Luxury residential kitchen showcase"
    >
      <h1 className="sr-only">Residential Kitchen Equipment</h1>

      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/hero-poster.jpg"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/residential-hero.mp4" type="video/mp4" />
      </video>

      {/* Subtle vignette */}
      <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,0,0,0.1)" }} />

      {/* Authorized partner badge — only element on screen */}
      <div
        className="absolute bottom-8 left-6 z-10 flex items-center gap-3 backdrop-blur-sm px-5 py-3"
        style={{ backgroundColor: "rgba(10,22,40,0.5)" }}
      >
        <span className="text-white/70 text-xs font-medium uppercase tracking-[0.1em]">
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

      {/* Gradient fade into next section */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
