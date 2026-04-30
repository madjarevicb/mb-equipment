import AnimatedSection from "@/components/ui/AnimatedSection";
import type { Dictionary } from "@/i18n/types";

interface Props {
  dict: Dictionary["demoCenters"]["intro"];
  srHeading?: string;
}

export default function IntroSection({ dict, srHeading }: Props) {
  /* The dict.body contains two paragraphs separated by \n\n */
  const paragraphs = dict.body.split("\n\n");

  return (
    <section className="py-16 lg:py-20 bg-white" aria-labelledby="intro-heading">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-start">
            <div className="lg:col-span-5">
              <h2
                id="intro-heading"
                className="sr-only"
              >
                {srHeading ?? "Introduction"}
              </h2>
              <div className="w-10 h-px bg-gold/30 mt-8" />
            </div>
            <div className="lg:col-span-7 text-text-secondary leading-relaxed space-y-4">
              {paragraphs.map((p, i) => (
                <p key={i} className={i > 0 ? "text-sm" : undefined}>
                  {p}
                </p>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
