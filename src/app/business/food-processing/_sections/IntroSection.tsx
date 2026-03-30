import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";
import ChevronRightIcon from "@/components/ui/ChevronRightIcon";

export default function IntroSection() {
  return (
    <section className="py-28 bg-white" aria-labelledby="intro-heading">
      <div className="max-w-5xl mx-auto px-6">
        <AnimatedSection>
          <span className="text-gold-text text-sm font-semibold uppercase tracking-[0.2em]">
            Food Processing Group
          </span>
          <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2
                id="intro-heading"
                className="font-display text-3xl sm:text-4xl font-bold text-navy leading-tight"
              >
                MB Equipment Solutions Food Processing Group partners with
                industrial protein and bakery processors, providing the most
                advanced operations solutions.
              </h2>
            </div>
            <div className="border-l-2 border-gold/50 pl-8 flex flex-col justify-center">
              <p className="text-text-secondary leading-relaxed">
                From raw material preparation through production to final
                packaging — we deliver complete processing lines built for
                continuous operation.
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-flex items-center gap-2 text-red font-semibold text-sm hover:gap-3 transition-all"
              >
                Discuss your project
                <ChevronRightIcon className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
