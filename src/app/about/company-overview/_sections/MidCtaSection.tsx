import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Overline from "@/components/ui/Overline";
import ChevronRightIcon from "@/components/ui/ChevronRightIcon";

const ctaPrimary = "inline-flex items-center gap-2 bg-red text-white font-semibold px-8 py-4 rounded-sm hover:bg-red-hover hover:-translate-y-px focus-visible:outline-gold transition-[color,background-color,transform] shadow-lg";

export default function MidCtaSection() {
  return (
    <section className="py-20 bg-navy" aria-labelledby="mid-cta-heading">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <Overline label="Next Step" />
              <h2 id="mid-cta-heading" className="font-display text-2xl lg:text-3xl font-bold text-white italic mb-2 mt-4">Have a Floor Plan? Send It Over.</h2>
              <p className="text-white/90">We will return a full equipment specification with brand recommendations and budget ranges — no obligation.</p>
            </div>
            <Link href="/contact" className={`${ctaPrimary} shrink-0`}>
              Send Your Floor Plan
              <ChevronRightIcon />
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
