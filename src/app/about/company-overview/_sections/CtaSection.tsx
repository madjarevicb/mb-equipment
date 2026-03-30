import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Overline from "@/components/ui/Overline";
import ChevronRightIcon from "@/components/ui/ChevronRightIcon";

const ctaPrimary = "inline-flex items-center gap-2 bg-red text-white font-semibold px-8 py-4 rounded-sm hover:bg-red-hover hover:-translate-y-px focus-visible:outline-gold transition-[color,background-color,transform] shadow-lg";
const ctaSecondary = "inline-flex items-center gap-2 border border-white/30 text-white font-semibold px-8 py-4 rounded-sm hover:bg-white/10 focus-visible:outline-gold transition-colors";

export default function CtaSection() {
  return (
    <section className="py-28 bg-navy" aria-labelledby="cta-heading">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <div className="max-w-3xl mx-auto text-center">
            <div className="mb-8">
              <Overline label="Let&apos;s Talk" align="center" />
            </div>
            <h2 id="cta-heading" className="font-display text-4xl lg:text-5xl font-bold text-white italic mb-6">
              The Right Equipment.<br />
              <span className="text-gold">The Right Partner.</span>
            </h2>
            <p className="text-white/90 text-lg leading-relaxed max-w-xl mx-auto mb-10">
              Whether you are designing a new kitchen in Belgrade, upgrading an existing one, or expanding across Southeast Europe — involve us from day one.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className={ctaPrimary}>
                Start Your Project
                <ChevronRightIcon />
              </Link>
              <Link href="/references" className={ctaSecondary}>
                See Our References
                <ChevronRightIcon />
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
