import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import EquipmentCard from "@/components/ui/EquipmentCard";
import Overline from "@/components/ui/Overline";
import ChevronRightIcon from "@/components/ui/ChevronRightIcon";
import { equipmentCategories, experienceSpaces } from "@/data/company-overview";

const VISIBLE_EQUIPMENT = 6;
const ctaSecondary = "inline-flex items-center gap-2 border border-white/30 text-white font-semibold px-8 py-4 rounded-sm hover:bg-white/10 focus-visible:outline-gold transition-colors";

export default function EquipmentSection() {
  return (
    <section className="py-28 bg-navy" aria-labelledby="whatwedo-heading">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <SectionHeading id="whatwedo-heading" heading="Everything Your Kitchen Needs" theme="dark" subtext="Fifteen equipment categories. Four experience spaces. One partner who specs, installs, and services all of it." />
        </AnimatedSection>

        <AnimatedSection stagger className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {equipmentCategories.slice(0, VISIBLE_EQUIPMENT).map((item) => (
            <EquipmentCard key={item.title} {...item} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" gradient="red-gold" />
          ))}
        </AnimatedSection>

        {equipmentCategories.length > VISIBLE_EQUIPMENT && (
          <details className="mt-6 group">
            <summary className="cursor-pointer list-none flex items-center justify-center gap-2 text-gold font-semibold text-sm uppercase tracking-wider hover:text-white transition-colors py-4 select-none focus-visible:outline-gold focus-visible:outline-offset-2">
              <span className="group-open:hidden">View All {equipmentCategories.length} Categories</span>
              <span className="hidden group-open:inline">Show Less</span>
              <svg className="w-4 h-4 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </summary>
            <AnimatedSection stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-2">
              {equipmentCategories.slice(VISIBLE_EQUIPMENT).map((item) => (
                <EquipmentCard key={item.title} {...item} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" gradient="red-gold" />
              ))}
            </AnimatedSection>
          </details>
        )}

        <AnimatedSection>
          <div className="flex justify-center mt-12">
            <Link href="/demo-centers" className={ctaSecondary}>
              Explore Our Demo Centers
              <ChevronRightIcon />
            </Link>
          </div>
          <div className="mt-28 mb-14 pt-8 border-t border-white/10">
            <h3 className="sr-only" id="experience-spaces-heading">Experience Spaces</h3>
            <Overline label="Experience Spaces" muted />
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
