import AnimatedSection from "@/components/ui/AnimatedSection";
import { bakeryProducts, proteinProducts } from "@/data/food-processing";

export default function ApplicationSection() {
  return (
    <section className="py-24 lg:py-32 bg-navy" aria-labelledby="application-heading">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <p className="text-gold text-xs font-medium uppercase tracking-[0.3em] mb-6">
            Applications
          </p>
          <h2
            id="application-heading"
            className="font-display text-3xl sm:text-4xl font-bold text-white leading-[1.1] mb-16"
          >
            Product<br />
            <span className="italic font-normal">Applications</span>
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Bakery */}
          <div className="lg:col-span-5">
            <AnimatedSection>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-px bg-gold/50" />
                <h3 className="font-display text-xl font-bold text-white">
                  Bakery
                </h3>
              </div>
              <div className="space-y-0">
                {bakeryProducts.map((product) => (
                  <div
                    key={product.name}
                    className="group flex items-center gap-4 py-3.5 border-b border-white/5 hover:border-white/15 transition-all"
                  >
                    <span className="w-1 h-1 bg-white/20 group-hover:bg-white/60 transition-all flex-shrink-0" />
                    <span className="text-white/60 group-hover:text-white/80 text-sm transition-colors">
                      {product.name}
                    </span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>

          {/* Divider */}
          <div className="hidden lg:flex lg:col-span-2 items-center justify-center">
            <div className="w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent" />
          </div>

          {/* Protein */}
          <div className="lg:col-span-5">
            <AnimatedSection>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-px bg-red/50" />
                <h3 className="font-display text-xl font-bold text-white">
                  Protein
                </h3>
              </div>
              <div className="space-y-0">
                {proteinProducts.map((product) => (
                  <div
                    key={product.name}
                    className="group flex items-center gap-4 py-3.5 border-b border-white/5 hover:border-white/15 transition-all"
                  >
                    <span className="w-1 h-1 bg-white/20 group-hover:bg-white/60 transition-all flex-shrink-0" />
                    <span className="text-white/60 group-hover:text-white/80 text-sm transition-colors">
                      {product.name}
                    </span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
