import AnimatedSection from "@/components/ui/AnimatedSection";

export default function WhoWeAreSection() {
  return (
    <section className="py-12 bg-white" aria-labelledby="who-we-are-heading">
      <div className="max-w-5xl mx-auto px-6">
        <AnimatedSection>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <p className="text-gold text-sm font-semibold uppercase tracking-[0.2em] mb-4">
                Who We Are
              </p>
              <h2
                id="who-we-are-heading"
                className="font-display text-3xl sm:text-4xl font-bold text-navy leading-tight"
              >
                Middleby Is the Global Leader in Commercial Kitchen Equipment
              </h2>
              <div className="w-12 h-[2px] bg-gold mt-6 mb-6" />
              <p className="text-text-secondary leading-relaxed">
                Cooking and warming, refrigeration, freezing, and beverage
                solutions for top restaurant and institutional customers.
                MB Equipment Solutions is your authorized regional partner
                for the full Middleby portfolio.
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="bg-offwhite rounded-sm p-8">
                <p className="text-text-secondary text-xs uppercase tracking-[0.2em] mb-6">
                  Middleby Corporation
                </p>
                <div className="space-y-5">
                  {[
                    { label: "Founded", value: "1888" },
                    { label: "Headquarters", value: "Chicago, IL" },
                    { label: "Employees", value: "8,400+", highlight: true },
                    { label: "Global Presence", value: "50% outside US", noBorder: true },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className={`flex items-baseline justify-between ${
                        item.noBorder ? "" : "border-b border-navy/[0.06] pb-4"
                      }`}
                    >
                      <span className="text-text-secondary text-sm">
                        {item.label}
                      </span>
                      <span
                        className={`font-display text-xl font-bold ${
                          item.highlight ? "text-gold" : "text-navy"
                        }`}
                      >
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
