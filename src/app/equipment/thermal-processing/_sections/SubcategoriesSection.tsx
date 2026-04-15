import AnimatedSection from "@/components/ui/AnimatedSection";
import { thermalSubcategories } from "@/data/thermal-processing";

export default function SubcategoriesSection() {
  return (
    <section className="py-24 lg:py-32 bg-offwhite" aria-labelledby="subcategories-heading">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end mb-12">
            <div className="lg:col-span-5">
              <p className="text-text-secondary text-xs font-medium uppercase tracking-[0.3em] mb-6">
                Categories
              </p>
              <h2
                id="subcategories-heading"
                className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary leading-[1.1]"
              >
                What We<br />
                <span className="italic font-normal">Specify</span>
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="text-text-secondary leading-relaxed text-sm max-w-lg">
                Six core thermal cooking categories — each specified around your
                operating conditions, not off-the-shelf assumptions.
              </p>
            </div>
          </div>
          <div className="w-full h-px bg-gray-200 mb-0" />
        </AnimatedSection>

        <AnimatedSection stagger>
          {thermalSubcategories.map((item, i) => (
            <div
              key={item.id}
              className="group py-6 border-b border-gray-200 transition-all duration-300"
            >
              <div className="flex items-start gap-6">
                <span className="font-display text-xl font-bold text-text-secondary/30 w-10 flex-shrink-0 italic">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex-1">
                  <p className="text-text-primary font-medium group-hover:text-red transition-colors duration-300 mb-2">
                    {item.name}
                  </p>
                  <p className="text-text-secondary text-sm leading-relaxed max-w-xl">
                    {item.description}
                  </p>
                  {item.variants && (
                    <div className="flex flex-wrap gap-3 mt-3">
                      {item.variants.map((v) => (
                        <span
                          key={v}
                          className="text-[11px] text-text-secondary/60 uppercase tracking-[0.15em] border border-gray-200 px-3 py-1"
                        >
                          {v}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}
