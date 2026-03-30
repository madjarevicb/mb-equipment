import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";
import ChevronRightIcon from "@/components/ui/ChevronRightIcon";

export default function CtaSection() {
  return (
    <section
      className="py-24 bg-offwhite border-t border-gray-200"
      aria-labelledby="cta-heading"
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        <AnimatedSection>
          <span className="text-gold text-sm font-semibold uppercase tracking-[0.2em]">
            Experience
          </span>
          <h2
            id="cta-heading"
            className="font-display text-3xl sm:text-4xl font-bold text-navy mt-4 mb-6"
          >
            Touch It. Cook On It. Decide.
          </h2>
          <p className="text-text-secondary text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            We do not sell residential equipment from a PDF. Our Belgrade
            showroom has live Viking, La Cornue, and AGA units ready to
            demonstrate. Bring your architect. Bring your contractor.
            We&apos;ll walk through specifications, dimensions, utility
            requirements, and finish options in person.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/demo-centers"
              className="inline-flex items-center justify-center gap-2 bg-red text-white font-semibold px-8 py-4 rounded-sm shadow-lg hover:bg-red-hover hover:-translate-y-px transition-all"
            >
              Book a Showroom Visit
              <ChevronRightIcon className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border border-navy/20 text-navy font-semibold px-8 py-4 rounded-sm hover:bg-navy hover:text-white transition-all"
            >
              Contact Us
              <ChevronRightIcon className="w-4 h-4" />
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
