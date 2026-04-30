import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";

export default function AboutSection({
  dict,
  locale,
  ariaLabel,
}: {
  dict: Dictionary["home"]["about"];
  locale: Locale;
  ariaLabel?: string;
}) {
  return (
    <section aria-label={ariaLabel ?? "About MB Equipment Solutions"} className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left — heading block */}
          <AnimatedSection className="lg:col-span-5" animation="fade-right">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary leading-[1.1] mb-6">
              {dict.heading1}<br />
              <span className="italic font-normal">{dict.heading2}</span>
            </h2>
            <div className="w-12 h-px bg-gold/50" />
          </AnimatedSection>

          {/* Right — editorial text with visual break */}
          <AnimatedSection className="lg:col-span-7" animation="fade-left">
            <div className="space-y-6 text-text-secondary leading-[1.8]">
              <p>
                {dict.body1}
              </p>

              {/* Pull quote — visual break in the text wall */}
              <blockquote className="border-l-2 border-gold/40 pl-6 py-2 my-8">
                <p className="font-display text-xl lg:text-2xl text-text-primary italic leading-snug">
                  {dict.pullQuote}
                </p>
              </blockquote>

              <p>
                {dict.body2}
              </p>

              <div className="pt-4">
                <Link
                  href={`/${locale}/about/company-overview`}
                  className="inline-flex items-center gap-3 text-text-primary text-xs font-medium uppercase tracking-[0.15em] hover:gap-5 transition-all duration-500"
                >
                  {dict.cta} <span aria-hidden="true">&#8594;</span>
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
