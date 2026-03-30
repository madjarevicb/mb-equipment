import Link from "next/link";
import Image from "next/image";
import ChevronRightIcon from "@/components/ui/ChevronRightIcon";

const HERO_BLUR =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiMwQTE2MjgiLz48L3N2Zz4=";

export default function HeroSection() {
  return (
    <section aria-label="Hero" className="relative min-h-screen flex items-center bg-navy pt-20 overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/hero-poster.jpg"
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover hidden md:block"
      >
        <source src="/hero-web.webm" type="video/webm" />
        <source src="/hero-web.mp4" type="video/mp4" />
      </video>
      <Image
        src="/hero-poster.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        placeholder="blur"
        blurDataURL={HERO_BLUR}
        className="absolute inset-0 object-cover md:hidden"
      />
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32 flex flex-col items-start min-h-[80vh] justify-end pb-36">
        <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-[1.1] mb-4 italic max-w-3xl">
          Commercial Kitchen Equipment{" "}
          <span className="text-gold">for Every Scale</span>
        </h1>
        <p className="text-lg sm:text-xl lg:text-2xl text-white/80 font-light max-w-xl mb-8">
          One Partner. Many Solutions. Authorized by Middleby Corporation.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-red text-white font-semibold px-8 py-4 text-sm tracking-wide rounded-sm shadow-lg hover:bg-red-hover hover:-translate-y-px transition-all"
            aria-label="Start a kitchen equipment project — get a free quote"
          >
            Start a Project
            <ChevronRightIcon className="w-4 h-4" />
          </Link>
          <a
            href="#sectors"
            className="inline-flex items-center gap-2 border border-white/50 text-white font-semibold px-8 py-4 text-sm tracking-wide rounded-sm hover:bg-white/10 transition-all"
          >
            Explore Equipment
            <ChevronRightIcon className="w-4 h-4" />
          </a>
        </div>
      </div>

      <div className="absolute bottom-12 left-6 z-10 flex items-center gap-3 bg-black/70 backdrop-blur-sm rounded-lg px-5 py-3">
        <span className="text-white/90 text-sm font-medium">Authorized Partner of</span>
        <Image
          src="/logos/middleby-white.svg"
          alt="Middleby Corporation"
          width={120}
          height={20}
          className="h-5 w-auto"
        />
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
