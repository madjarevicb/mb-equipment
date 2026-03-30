import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";
import ChevronRightIcon from "@/components/ui/ChevronRightIcon";

export default function InnovationCentersSection() {
  return (
    <section className="py-24 bg-white" aria-labelledby="innovation-heading">
      <div className="max-w-5xl mx-auto px-6">
        <AnimatedSection>
          <div className="bg-offwhite border border-[#E5E7EB] rounded-sm overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-5">
              <div className="lg:col-span-3 p-10 lg:p-14 flex flex-col justify-center">
                <span className="text-gold text-sm font-semibold uppercase tracking-[0.2em]">
                  Innovation Centers
                </span>
                <h2
                  id="innovation-heading"
                  className="font-display text-3xl sm:text-4xl font-bold text-navy mt-3 leading-tight"
                >
                  Test Your Products on Full-Scale Equipment
                </h2>
                <div className="w-12 h-[2px] bg-gold mt-4 mb-6" />
                <p className="text-text-secondary leading-relaxed">
                  Our Innovation Centers bring together the most advanced food
                  processing technologies. Schedule a visit to see equipment
                  running at full production capacity with your products.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 mt-8">
                  <Link
                    href="/demo-centers"
                    className="inline-flex items-center justify-center gap-2 bg-red text-white font-semibold px-6 py-3 rounded-sm shadow-lg hover:bg-red-hover hover:-translate-y-px transition-all text-sm"
                  >
                    Visit an Innovation Center
                    <ChevronRightIcon className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 border border-navy/20 text-navy font-semibold px-6 py-3 rounded-sm hover:bg-navy hover:text-white transition-all text-sm"
                  >
                    Discuss Your Production Line
                    <ChevronRightIcon className="w-4 h-4" />
                  </Link>
                </div>
              </div>
              <div className="lg:col-span-2 bg-navy p-10 lg:p-14 flex items-center justify-center">
                <div className="text-center">
                  <p className="font-display text-6xl font-bold text-gold">6</p>
                  <p className="text-white/80 text-sm mt-3 uppercase tracking-wider">
                    Innovation Centers
                  </p>
                  <p className="text-white/80 text-xs mt-1">
                    Across the region
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
