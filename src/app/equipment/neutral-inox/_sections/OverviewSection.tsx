import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function OverviewSection() {
  return (
    <section className="py-28 lg:py-36 bg-white" aria-labelledby="overview-heading">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-7">
              <p className="text-text-secondary text-xs font-medium uppercase tracking-[0.3em] mb-6">
                Custom Fabrication
              </p>
              <h2
                id="overview-heading"
                className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary leading-[1.1]"
              >
                Built to Your<br />
                <span className="italic font-normal">Exact Layout</span>
              </h2>
            </div>
            <div className="lg:col-span-5 flex flex-col justify-end">
              <p className="text-text-secondary leading-relaxed mb-6">
                Every stainless steel element — worktops, shelving, sinks, hoods,
                and custom fabrications — manufactured to your project dimensions
                and kitchen workflow. No catalog compromises.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 text-text-primary text-sm font-medium hover:gap-4 transition-all duration-300"
              >
                Request a consultation
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
