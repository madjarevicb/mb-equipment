import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";
import EquipmentCard from "@/components/ui/EquipmentCard";
import { equipmentCategories, experienceSpaces } from "@/data/company-overview";

const VISIBLE_EQUIPMENT = 6;

export default function EquipmentSection() {
  return (
    <section className="py-24 lg:py-32 bg-navy" aria-labelledby="whatwedo-heading">
      <div className="max-w-7xl mx-auto px-6">
        {/* Asymmetric heading — left title, right description */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end mb-16">
          <AnimatedSection className="lg:col-span-5">
            <h2 id="whatwedo-heading" className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-[1.1]">
              Everything Your<br />
              <span className="italic font-normal">Kitchen Needs</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection className="lg:col-span-7" delay={0.05}>
            <p className="text-white/60 leading-relaxed text-sm max-w-lg">
              Fifteen equipment categories. Four experience spaces. One partner who specs, installs, and services all of it.
            </p>
            <div className="w-12 h-px bg-gold/30 mt-6" />
          </AnimatedSection>
        </div>

        {/* First row: 2 cards wider */}
        <AnimatedSection stagger className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {equipmentCategories.slice(0, 2).map((item) => (
            <EquipmentCard key={item.title} {...item} sizes="(max-width: 768px) 100vw, 50vw" gradient="red-gold" />
          ))}
        </AnimatedSection>

        {/* Second row: 4 cards tighter */}
        <AnimatedSection stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {equipmentCategories.slice(2, VISIBLE_EQUIPMENT).map((item) => (
            <EquipmentCard key={item.title} {...item} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw" gradient="red-gold" />
          ))}
        </AnimatedSection>

        {equipmentCategories.length > VISIBLE_EQUIPMENT && (
          <details className="mt-6 group">
            <summary className="cursor-pointer list-none flex items-center justify-center gap-2 text-gold/70 text-xs font-medium uppercase tracking-[0.15em] hover:text-white transition-colors duration-300 py-4 select-none focus-visible:outline-gold focus-visible:outline-offset-2">
              <span className="group-open:hidden">View All {equipmentCategories.length} Categories</span>
              <span className="hidden group-open:inline">Show Less</span>
              <svg className="w-3.5 h-3.5 group-open:rotate-180 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" /></svg>
            </summary>
            <AnimatedSection stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-2">
              {equipmentCategories.slice(VISIBLE_EQUIPMENT).map((item) => (
                <EquipmentCard key={item.title} {...item} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" gradient="red-gold" />
              ))}
            </AnimatedSection>
          </details>
        )}

        <AnimatedSection>
          <div className="flex justify-start mt-12">
            <Button variant="ghost-dark" href="/demo-centers" arrow={false}>
              Explore Our Demo Centers
            </Button>
          </div>
          <div className="mt-28 mb-14 pt-8 border-t border-white/10">
            <h3 className="sr-only" id="experience-spaces-heading">Experience Spaces</h3>
            <p className="text-white/30 text-xs font-medium uppercase tracking-[0.2em]">Experience Spaces</p>
          </div>
        </AnimatedSection>

        <AnimatedSection stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {experienceSpaces.map((item) => (
            <EquipmentCard key={item.title} {...item} sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw" gradient="gold" />
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}
