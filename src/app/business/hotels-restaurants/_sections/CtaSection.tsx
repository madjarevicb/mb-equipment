import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";
import ChevronRightIcon from "@/components/ui/ChevronRightIcon";

export default function CtaSection() {
  return (
    <section
      className="py-20 bg-offwhite border-t border-gray-200"
      aria-labelledby="cta-heading"
    >
      <div className="max-w-3xl mx-auto px-6 text-center">
        <AnimatedSection>
          <h2
            id="cta-heading"
            className="font-display text-3xl lg:text-4xl font-bold text-navy mb-4"
          >
            Let&apos;s Spec Your Kitchen.
          </h2>
          <p className="text-text-secondary leading-relaxed mb-8">
            Tell us the project scope — menu concept, capacity, space
            constraints. We&apos;ll come back with brands, models, CAD drawings,
            and a number.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-red text-white font-semibold px-8 py-4 rounded-sm shadow-lg hover:bg-red-hover hover:-translate-y-px transition-all"
            >
              Start a Project
              <ChevronRightIcon className="w-4 h-4" />
            </Link>
            <Link
              href="/references"
              className="inline-flex items-center gap-2 border border-navy/20 text-navy font-semibold px-8 py-4 rounded-sm hover:bg-navy hover:text-white transition-all"
            >
              See Our References
              <ChevronRightIcon className="w-4 h-4" />
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
