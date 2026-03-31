import AnimatedSection from "@/components/ui/AnimatedSection";

export default function WhoWeAreSection() {
  return (
    <section className="py-16 lg:py-20 bg-white" aria-labelledby="who-we-are-heading">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            <div className="lg:col-span-7">
              <p className="text-text-secondary text-xs font-medium uppercase tracking-[0.3em] mb-6">
                Who We Are
              </p>
              <h2
                id="who-we-are-heading"
                className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary leading-[1.1]"
              >
                The Global Leader in<br />
                <span className="italic font-normal">Commercial Kitchen Equipment</span>
              </h2>
              <div className="w-12 h-px bg-gold/30 mt-8 mb-8" />
              <p className="text-text-secondary leading-relaxed text-sm">
                Cooking and warming, refrigeration, freezing, and beverage
                solutions for top restaurant and institutional customers.
                MB Equipment Solutions is your authorized regional partner
                for the full Middleby portfolio.
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="bg-offwhite p-8">
                <p className="text-text-secondary text-xs font-medium uppercase tracking-[0.2em] mb-6">
                  Middleby Corporation
                </p>
                <div className="space-y-5">
                  {[
                    { label: "Founded", value: "1888" },
                    { label: "Headquarters", value: "Chicago, IL" },
                    { label: "Employees", value: "8,400+" },
                    { label: "Global Presence", value: "50% outside US" },
                  ].map((item, i) => (
                    <div
                      key={item.label}
                      className={`flex items-baseline justify-between ${
                        i < 3 ? "border-b border-gray-200 pb-4" : ""
                      }`}
                    >
                      <span className="text-text-secondary text-sm">
                        {item.label}
                      </span>
                      <span className="font-display text-xl font-bold text-text-primary">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
