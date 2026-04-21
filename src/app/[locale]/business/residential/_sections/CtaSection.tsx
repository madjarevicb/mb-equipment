import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";
import type { Dictionary } from "@/i18n/types";
import type { Locale } from "@/i18n/config";

interface Props {
  dict: Dictionary["residential"]["cta"];
  locale: Locale;
}

export default function CtaSection({ dict, locale }: Props) {
  return (
    <section
      className="py-28 lg:py-36 bg-offwhite border-t border-gray-100"
      aria-labelledby="cta-heading"
    >
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-end">
            {/* Left — heading & copy */}
            <div className="lg:col-span-7">
              <p className="text-text-secondary text-xs font-medium uppercase tracking-[0.3em] mb-8">
                {dict.eyebrow}
              </p>
              <h2
                id="cta-heading"
                className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary leading-[1.1] mb-6"
              >
                {dict.heading1}<br />
                <span className="italic font-normal">{dict.heading2}</span>
              </h2>
              <p className="text-text-secondary leading-relaxed mb-12 max-w-lg">
                {dict.body}
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="primary" href={`/${locale}/demo-centers`}>
                  {dict.belgradeShowroom}
                </Button>
                <Button variant="ghost-light" href={`/${locale}/contact`} arrow={false}>
                  {dict.designConsultation}
                </Button>
              </div>
            </div>

            {/* Right — showroom details */}
            <div className="lg:col-span-5">
              <div className="border-l-2 border-gold/30 pl-8 space-y-5">
                <div>
                  <span className="text-text-primary font-medium text-sm">{dict.liveDemos}</span>
                  <p className="text-text-secondary/60 text-xs mt-1">
                    {dict.liveDemosDesc}
                  </p>
                </div>
                <div>
                  <span className="text-text-primary font-medium text-sm">{dict.designConsultation}</span>
                  <p className="text-text-secondary/60 text-xs mt-1">
                    {dict.designConsultationDesc}
                  </p>
                </div>
                <div>
                  <span className="text-text-primary font-medium text-sm">{dict.belgradeShowroom}</span>
                  <p className="text-text-secondary/60 text-xs mt-1">
                    {dict.belgradeShowroomDesc}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
