import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";
import type { Dictionary } from "@/i18n/types";
import type { Locale } from "@/i18n/config";

interface Props {
  dict: Dictionary["companyOverview"]["midCta"];
  locale: Locale;
  ctaLabel: string;
}

export default function MidCtaSection({ dict, locale, ctaLabel }: Props) {
  return (
    <section className="py-16 lg:py-20 bg-navy" aria-labelledby="mid-cta-heading">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <p className="text-white/30 text-xs font-medium uppercase tracking-[0.3em] mb-4">{dict.eyebrow}</p>
              <h2 id="mid-cta-heading" className="font-display text-2xl lg:text-3xl font-bold text-white leading-snug">
                {dict.heading1}<br />
                <span className="italic font-normal">{dict.heading2}</span>
              </h2>
              <p className="text-white/60 mt-3 max-w-lg">{dict.body}</p>
            </div>
            <Button variant="primary" href={`/${locale}/contact`} className="shrink-0">
              {ctaLabel}
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
