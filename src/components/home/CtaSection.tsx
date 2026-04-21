import Button from "@/components/ui/Button";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";

export default function CtaSection({
  dict,
  locale,
}: {
  dict: Dictionary["home"]["cta"];
  locale: Locale;
}) {
  return (
    <section id="contact-cta" aria-label="Start a project" className="bg-navy">
      <div className="max-w-7xl mx-auto px-6 py-32 lg:py-40">
        <div className="max-w-3xl">
          <p className="text-white/30 text-xs font-medium uppercase tracking-[0.3em] mb-8">
            {dict.eyebrow}
          </p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6">
            {dict.heading1}<br />
            <span className="italic font-normal">{dict.heading2}</span>
          </h2>
          <p className="text-white/60 leading-relaxed mb-12 max-w-lg">
            {dict.body}
          </p>
          <div className="flex flex-wrap gap-4">
            <Button variant="primary" href={`/${locale}/contact`}>
              {dict.ctaPrimary}
            </Button>
            <Button variant="ghost-dark" href={`/${locale}/references`} arrow={false}>
              {dict.ctaSecondary}
            </Button>
          </div>
          <p className="text-white/25 text-xs tracking-[0.2em] mt-10">
            Average response time: under 24 hours
          </p>
        </div>
      </div>
    </section>
  );
}
