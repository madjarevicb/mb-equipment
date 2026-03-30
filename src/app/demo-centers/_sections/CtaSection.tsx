import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";
import ChevronRightIcon from "@/components/ui/ChevronRightIcon";

export default function CtaSection() {
  return (
    <section className="py-16 bg-navy" aria-labelledby="cta-heading">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <AnimatedSection>
          <p className="text-gold text-sm font-semibold uppercase tracking-[0.2em] mb-4">
            Next Step
          </p>
          <h2
            id="cta-heading"
            className="font-display text-3xl sm:text-4xl font-bold text-white mb-4"
          >
            Cook On It Before You Commit
          </h2>
          <p className="text-white/80 mb-8 max-w-lg mx-auto">
            Bring your menu. Bring your team. Put the equipment through a real
            service simulation before you sign.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-red text-white font-semibold px-8 py-4 text-sm tracking-wide rounded-sm shadow-lg hover:bg-red-hover hover:-translate-y-px transition-all"
          >
            Book a Demo Session
            <ChevronRightIcon className="w-4 h-4" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
