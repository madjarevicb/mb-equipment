import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";
import type { Dictionary } from "@/i18n/types";
import type { Locale } from "@/i18n/config";

interface Props {
  dict: Dictionary["thermal"]["cta"];
  common: Dictionary["common"];
  locale: Locale;
}

export default function CtaSection({ dict, common, locale }: Props) {
  return (
    <section className="py-28 lg:py-36 bg-offwhite" aria-labelledby="cta-heading">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-end">
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
                <Button variant="primary" href={`/${locale}/contact`}>
                  {common.startYourProject}
                </Button>
                <Button variant="ghost-light" href={`/${locale}/demo-centers`} arrow={false}>
                  {common.bookDemo}
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="border-l-2 border-gold/30 pl-8 space-y-6">
                {[
                  { value: "50+", label: common.projectsDelivered },
                  { value: "110+", label: common.brandsRepresented },
                ].map((stat) => (
                  <div key={stat.label}>
                    <span className="font-display text-3xl font-bold text-text-primary">
                      {stat.value}
                    </span>
                    <p className="text-text-secondary/50 text-xs uppercase tracking-[0.15em] mt-1">
                      {stat.label}
                    </p>
                  </div>
                ))}
                <div className="pt-2">
                  <p className="text-text-secondary/50 text-xs">
                    {common.regionLabel}
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
