import Link from "next/link";
import Image from "next/image";
import type { Dictionary } from "@/i18n/types";
import type { Locale } from "@/i18n/config";

const HERO_BLUR = "data:image/jpeg;base64,/9j/2wBDACgcHiMeGSgjISMtKygwPGRBPDc3PHtYXUlkkYCZlo+AjIqgtObDoKrarYqMyP/L2u71////m8H////6/+b9//j/2wBDASstLTw1PHZBQXb4pYyl+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj/wAARCAAGAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAID/8QAGhAAAgMBAQAAAAAAAAAAAAAAAQIAAxESUv/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A1ehhaELAhjm5I6t9REg//9k=";

interface Props {
  dict: Dictionary["companyOverview"]["hero"];
  locale: Locale;
}

export default function HeroSection({ dict, locale }: Props) {
  return (
    <section className="relative min-h-[60vh] lg:min-h-[70vh] flex items-center overflow-hidden" aria-labelledby="hero-heading">
      <Image
        src="/images/whatwedo/chef-cooking.jpg"
        alt="Professional chef working in a commercial kitchen equipped by MB Equipment Solutions"
        fill
        sizes="100vw"
        className="object-cover"
        priority
        placeholder="blur"
        blurDataURL={HERO_BLUR}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/70 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-navy/20" />

      <div className="relative max-w-7xl mx-auto px-6 py-28 lg:py-36">
        <div className="max-w-2xl">
          <p className="text-gold text-xs font-medium uppercase tracking-[0.3em] mb-6">
            {dict.eyebrow}
          </p>

          <h1 id="hero-heading" className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.05] mb-6">
            {dict.heading1}<br />
            <span className="italic font-normal">{dict.heading2}</span>
            <span className="sr-only"> {dict.srOnly}</span>
          </h1>

          <div className="w-16 h-px bg-gold/60 mb-6" />

          <p className="text-white/70 text-lg leading-relaxed mb-4 max-w-lg font-light">
            {dict.body}
          </p>
          <p className="text-white/60 leading-relaxed mb-10 max-w-lg">
            {dict.subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}
