import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function IntroSection() {
  return (
    <section className="py-28 lg:py-36 bg-white" aria-labelledby="intro-heading">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-7">
              <p className="text-text-secondary text-xs font-medium uppercase tracking-[0.3em] mb-6">
                Food Processing Group
              </p>
              <h2
                id="intro-heading"
                className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary leading-[1.1]"
              >
                Partners with Industrial<br />
                <span className="italic font-normal">Protein &amp; Bakery Processors</span>
              </h2>
            </div>
            <div className="lg:col-span-5 flex flex-col justify-end">
              <p className="text-text-secondary leading-relaxed mb-6">
                From raw material preparation through production to final
                packaging — we deliver complete processing lines built for
                continuous operation.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 text-text-primary text-sm font-medium hover:gap-4 transition-all duration-300"
              >
                Discuss your project
                <span aria-hidden="true">&#8594;</span>
              </Link>
              <div className="w-12 h-px bg-gold/30 mt-8" />
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
