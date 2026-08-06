import Image from "next/image";
import HeroVideo from "@/components/ui/HeroVideo";
import type { Dictionary } from "@/i18n/types";

interface Props {
  dict: Dictionary["residential"]["hero"];
  common: Dictionary["common"];
}

export default function HeroSection({ dict, common }: Props) {
  return (
    <section
      className="relative h-[85vh] min-h-[600px] overflow-hidden"
      aria-label={common.luxuryShowcaseAria}
    >
      <h1 className="sr-only">{dict.srOnly}</h1>

      <HeroVideo poster="/hero-poster.jpg" src="/residential-hero.mp4" />

      {/* Subtle vignette */}
      <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,0,0,0.1)" }} />

      {/* Authorized partner badge — only element on screen */}
      <div
        className="absolute bottom-8 left-6 z-10 flex items-center gap-3 backdrop-blur-sm px-5 py-3"
        style={{ backgroundColor: "rgba(10,22,40,0.5)" }}
      >
        <span className="text-white/70 text-xs font-medium uppercase tracking-[0.1em]">
          {common.authorizedPartnerOf}
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
