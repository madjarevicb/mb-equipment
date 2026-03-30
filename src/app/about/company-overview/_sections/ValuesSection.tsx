import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import ValueCard from "@/components/ui/ValueCard";
import { companyValues } from "@/data/company-overview";

export default function ValuesSection() {
  return (
    <section className="py-28 bg-offwhite" aria-labelledby="values-heading">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <div className="mb-20">
            <SectionHeading id="values-heading" heading="What We Will Not Compromise On" divider />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {companyValues.map((value) => (
              <ValueCard key={value.title} {...value} />
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
