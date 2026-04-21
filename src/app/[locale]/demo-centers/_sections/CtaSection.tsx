import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";
import type { Dictionary } from "@/i18n/types";
import type { Locale } from "@/i18n/config";

interface Props {
  dict: Dictionary["demoCenters"]["cta"];
  commonDict: Dictionary["common"];
  locale: Locale;
}

export default function CtaSection({ dict, commonDict, locale }: Props) {
  return (
    <section className="py-28 lg:py-36 bg-navy" aria-labelledby="cta-heading">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <div className="max-w-3xl">
            <p className="text-gold text-xs font-medium uppercase tracking-[0.3em] mb-8">
              {dict.eyebrow}
            </p>
            <h2
              id="cta-heading"
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6"
            >
              {dict.heading1}<br />
              <span className="italic font-normal">{dict.heading2}</span>
            </h2>
            <p className="text-white/60 leading-relaxed mb-12 max-w-lg">
              {dict.body}
            </p>
            <Button variant="primary" href={`/${locale}/contact`}>
              {commonDict.bookDemo}
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
