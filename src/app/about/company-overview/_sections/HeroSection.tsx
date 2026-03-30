import Link from "next/link";
import Image from "next/image";
import Overline from "@/components/ui/Overline";
import ChevronRightIcon from "@/components/ui/ChevronRightIcon";
import { heroStats } from "@/data/company-overview";

const HERO_BLUR = "data:image/jpeg;base64,/9j/2wBDACgcHiMeGSgjISMtKygwPGRBPDc3PHtYXUlkkYCZlo+AjIqgtObDoKrarYqMyP/L2u71////m8H////6/+b9//j/2wBDASstLTw1PHZBQXb4pYyl+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj/wAARCAAGAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAID/8QAGhAAAgMBAQAAAAAAAAAAAAAAAQIAAxESUv/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A1ehhaELAhjm5I6t9REg//9k=";
const ctaPrimary = "inline-flex items-center gap-2 bg-red text-white font-semibold px-8 py-4 rounded-sm hover:bg-red-hover hover:-translate-y-px focus-visible:outline-gold transition-[color,background-color,transform] shadow-lg";

export default function HeroSection() {
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
      <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/80 to-navy/40" />

      <div className="relative max-w-7xl mx-auto px-6 py-28 lg:py-36">
        <div className="max-w-2xl">
          <div className="mb-6">
            <Overline label="Company Overview" />
          </div>

          <h1 id="hero-heading" className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6">
            One Company.<br />
            <span className="text-gold italic">The Whole Kitchen.</span>
            <span className="sr-only"> — Commercial Kitchen Equipment in Belgrade, Serbia</span>
          </h1>

          <p className="text-white/90 text-lg leading-relaxed mb-4">
            For over two decades, MB Equipment Solutions has designed, supplied, installed, and serviced commercial kitchen equipment across Southeast Europe and beyond.
          </p>
          <p className="text-white/90 text-lg leading-relaxed mb-8">
            Based in <Link href="/demo-centers" className="text-white underline underline-offset-2 hover:text-gold transition-colors">Belgrade, Serbia</Link>, and authorized by <Link href="/about/innovation" className="text-white underline underline-offset-2 hover:text-gold transition-colors">Middleby Corporation</Link>, we represent 110+ of the world&apos;s leading foodservice brands — with factory-trained engineers who spec, install, commission, and service every piece of equipment we sell.
          </p>

          <ul role="list" aria-label="Company statistics" className="flex flex-col sm:flex-row flex-wrap gap-x-8 gap-y-2 mb-10 text-sm font-semibold text-white/80 uppercase tracking-widest list-none [&>li+li]:sm:border-l [&>li+li]:sm:border-white/20 [&>li+li]:sm:pl-8">
            {heroStats.map((stat) => (
              <li key={stat.label}>{stat.label}</li>
            ))}
          </ul>

          <Link href="/contact" className={ctaPrimary}>
            Get a Free Kitchen Assessment
            <ChevronRightIcon />
          </Link>
        </div>
      </div>
    </section>
  );
}
