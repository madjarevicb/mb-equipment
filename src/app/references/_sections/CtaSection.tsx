import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";
import ChevronRightIcon from "@/components/ui/ChevronRightIcon";

export default function CtaSection() {
  return (
    <section className="py-24 bg-offwhite" aria-labelledby="cta-heading">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <AnimatedSection>
          <span className="text-gold text-sm font-semibold uppercase tracking-[0.2em]">
            Work With Us
          </span>
          <h2
            id="cta-heading"
            className="font-display text-3xl sm:text-4xl font-bold text-navy mt-4 mb-6"
          >
            Let&apos;s Plan Your Kitchen
          </h2>
          <p className="text-text-secondary leading-relaxed max-w-2xl mx-auto mb-10">
            Whether you are planning a new kitchen, upgrading equipment, or
            rolling out across multiple locations — we deliver on spec, on time,
            and on budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-red text-white font-semibold px-8 py-4 rounded-sm shadow-lg hover:bg-red-hover hover:-translate-y-px transition-all text-sm"
            >
              Start Your Project
              <ChevronRightIcon className="w-4 h-4" />
            </Link>
            <Link
              href="/demo-centers"
              className="inline-flex items-center justify-center gap-2 border border-navy/20 text-navy font-semibold px-8 py-4 rounded-sm hover:bg-navy hover:text-white transition-all text-sm"
            >
              Visit a Showroom
              <ChevronRightIcon className="w-4 h-4" />
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
