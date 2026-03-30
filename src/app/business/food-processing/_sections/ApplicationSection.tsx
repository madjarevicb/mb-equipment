import AnimatedSection from "@/components/ui/AnimatedSection";
import { bakeryProducts, proteinProducts } from "@/data/food-processing";

export default function ApplicationSection() {
  return (
    <section className="py-24 bg-navy" aria-labelledby="application-heading">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection>
          <span className="text-gold text-sm font-semibold uppercase tracking-[0.2em]">
            Applications
          </span>
          <h2
            id="application-heading"
            className="font-display text-3xl sm:text-4xl font-bold text-white mt-3 mb-14"
          >
            Product Applications
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Bakery */}
          <div className="lg:col-span-5">
            <AnimatedSection>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-[2px] bg-gold" />
                <h3 className="font-display text-2xl font-bold text-gold">
                  Bakery
                </h3>
              </div>
              <div className="space-y-0">
                {bakeryProducts.map((product) => (
                  <div
                    key={product.name}
                    className="group flex items-center gap-4 py-3.5 border-b border-white/5 hover:border-gold/30 transition-all"
                  >
                    <span className="w-1.5 h-1.5 bg-gold/40 rounded-full group-hover:bg-gold group-hover:scale-150 transition-all flex-shrink-0" />
                    <span className="text-white/80 group-hover:text-white text-sm font-medium transition-colors">
                      {product.name}
                    </span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>

          {/* Divider */}
          <div className="hidden lg:flex lg:col-span-2 items-center justify-center">
            <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-white/10 to-transparent" />
          </div>

          {/* Protein */}
          <div className="lg:col-span-5">
            <AnimatedSection delay={0.1}>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-[2px] bg-red" />
                <h3 className="font-display text-2xl font-bold text-red">
                  Protein
                </h3>
              </div>
              <div className="space-y-0">
                {proteinProducts.map((product) => (
                  <div
                    key={product.name}
                    className="group flex items-center gap-4 py-3.5 border-b border-white/5 hover:border-red/30 transition-all"
                  >
                    <span className="w-1.5 h-1.5 bg-red/40 rounded-full group-hover:bg-red group-hover:scale-150 transition-all flex-shrink-0" />
                    <span className="text-white/80 group-hover:text-white text-sm font-medium transition-colors">
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
