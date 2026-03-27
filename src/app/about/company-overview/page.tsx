import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "About Us — Company Overview",
  description: "Belgrade-based foodservice equipment company endorsed by Middleby Corporation. Full-cycle service from kitchen design to installation and after-sales support.",
  alternates: { canonical: "/about/company-overview" },
};

const values = [
  { title: "Precision Over Volume", text: "We would rather specify the right piece of equipment once than replace the wrong one twice. Every recommendation is based on the actual operating conditions of the project." },
  { title: "Direct Relationships", text: "No middlemen, no gray-market sourcing. Our factory relationships are direct and documented. That matters when you need a part in 48 hours, not 48 days." },
  { title: "Long-Term Thinking", text: "We service what we sell. That creates a natural incentive to sell equipment that lasts. Our reference list is our reputation." },
];

const steps = [
  "Consultation & Specification",
  "Supply & Logistics",
  "Installation & Commissioning",
  "Staff Training",
  "After-Sales & Service",
];

const whatWeDo = [
  { title: "Automation", image: "/images/whatwedo/automation.jpg", text: "Robotics are here today in the commercial kitchen, saving operators time and costs while producing a consistent product every order for every customer." },
  { title: "Baking", image: "/images/whatwedo/baking.jpg", text: "Fifteen well-known brands dedicated to baking excellence, anchored by Blodgett XR8 — the reference standard for rotating rack ovens." },
  { title: "Char-Grilling", image: "/images/whatwedo/char-grilling.jpg", text: "A broad line of products engineered to deliver the best-quality food grill after grill, featuring the NIECO flame broiler and CTX infrared conveyor." },
  { title: "Combi", image: "/images/whatwedo/combi.jpg", text: "Blodgett teamed up with Houno, our European combi brand, to design one of the best combi ovens on the market." },
  { title: "Chef Cooking Suites", image: "/images/whatwedo/chef-cooking.jpg", text: "From Jade to Southbend, we have the perfect fit for your kitchen. Visit us and we'll customize it for you." },
  { title: "Beverage", image: "/images/whatwedo/beverage.jpg", text: "Hot, cold, blended, ice cream, nitro coffee, and more. Our beverage line-up includes Taylor, Follett, Concordia, Synesso, and SkyFlo." },
  { title: "Brewing", image: "/images/whatwedo/brewing.jpg", text: "Ss Brewtech and Deutsche are leaders in on-premise micro and craft brewing, featuring fully functional 1-barrel and 3.5-barrel brewing systems." },
  { title: "Frying", image: "/images/whatwedo/frying.jpg", text: "From Pitco, Ultrafryer, BKI, and PerfectFry — a fryer for every product and volume, from c-store to full-production fried chicken." },
  { title: "Griddling", image: "/images/whatwedo/griddling.jpg", text: "Automation and griddling come together with the Taylor double-sided clamshell grill — the best in griddling automation, period." },
  { title: "IoT", image: "/images/whatwedo/iot.png", text: "Open Kitchen IoT by Powerhouse Dynamics — automation, food safety, and equipment connective modules. Learn how an automated kitchen saves time and labor." },
  { title: "Pizza", image: "/images/whatwedo/pizza.jpg", text: "Traditional, deep dish, wood-fired, or New York style. Fifteen brands dedicated to pizza production — slicing, mixing, dividing, rounding, proofing, and baking." },
  { title: "Range", image: "/images/whatwedo/range.jpg", text: "From gas to induction — the highest quality and most energy efficient ranges. Cook on the legendary Southbend with patented TruVapor Combi technology." },
  { title: "Solid & Dual Fuel", image: "/images/whatwedo/solid-fuel.jpg", text: "Experience cooking with all five elements. The most asked-about products from Beech, Josper, Jade, and more — dry-aged steak cooked to perfection." },
  { title: "Steam", image: "/images/whatwedo/steam.jpg", text: "Crown and FirEx steam brands for all heavy-duty needs. Compartment steamers, kettles, conventional tilt skillets, and automated pressurized skillets." },
  { title: "Ventless", image: "/images/whatwedo/ventless.jpg", text: "A full commercial kitchen without traditional ventilation. Nearly a dozen brands with ventless cooking solutions — 350,000 ventless systems operating worldwide." },
  { title: "The Elements", image: "/images/whatwedo/elements.jpg", text: "A 14-seat chef's table experience featuring multi-course meals prepared using wood, fire, earth, water, and metal. The absolute best dining experience." },
  { title: "Dining Room", image: "/images/whatwedo/dining-room.jpg", text: "A 70-person dining room — the best way to start or end an event. Full bar powered by SkyFlo, wine from Viking cellars, and Bluezone air purification." },
  { title: "Training Room", image: "/images/whatwedo/training-room.jpg", text: "State-of-the-art 70-person training room with the most advanced equipment and amenities, protected by Bluezone by Middleby air purification." },
  { title: "Ad Hoc Kitchen", image: "/images/whatwedo/adhoc-kitchen.jpg", text: "Design it, build it, test it, and tear it down until you have it right. Configured to help you design, test, and specify the absolute best kitchen." },
];

export default function CompanyOverviewPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0A1628] pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-[#C9A84C] text-sm font-semibold uppercase tracking-[0.2em]">About MB Equipment</span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6">One Company. The Whole Kitchen.</h1>
          <p className="text-white/70 text-lg max-w-2xl leading-relaxed">
            MB Equipment Solutions has spent over two decades building the Balkans&apos; most comprehensive foodservice equipment operation. We are not a reseller with a catalog. We are engineers, project managers, and service technicians who happen to represent the best brands in the world.
          </p>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <AnimatedSection>
            <SectionHeading overline="Our Story" heading="How We Got Here" align="left" />
            <div className="mt-8 space-y-6 text-[#595F66] leading-relaxed">
              <p>MB Equipment Solutions was founded in Belgrade with a clear premise: the region needed a professional-grade equipment partner, not just a distributor.</p>
              <p>That hands-on approach attracted attention from Middleby Corporation, one of the world&apos;s largest foodservice equipment manufacturers. The endorsement meant direct access to factory engineering, priority parts supply, and terms that nobody else in the region could match.</p>
              <p>Today, the company operates demo centers across the region, employs a full-time service team, and has delivered equipment to projects in over 40 countries. The premise has not changed. Only the scale.</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* What We Do — Cards Grid */}
      <section className="py-24 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <SectionHeading heading="What We Do" theme="dark" subtext="From automation to brewing, we cover every aspect of the modern commercial kitchen." />
          </AnimatedSection>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whatWeDo.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.06}>
                <div className="group relative bg-[#1A2B4A]/50 rounded-lg overflow-hidden h-full border border-white/5 hover:border-[#C9A84C]/30 transition-all duration-500">
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-transparent to-transparent" />
                  </div>
                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-display text-xl font-bold text-white mb-3">{item.title}</h3>
                    <p className="text-white/50 text-sm leading-relaxed">{item.text}</p>
                  </div>
                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#D32F3D] via-[#C9A84C] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Full Cycle */}
      <section className="py-24 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <SectionHeading overline="The Process" heading="The Full Cycle" subtext="Most equipment companies stop at delivery. We do not." />
          </AnimatedSection>
          <div className="mt-16 max-w-2xl mx-auto">
            {steps.map((step, i) => (
              <AnimatedSection key={step} delay={i * 0.1}>
                <div className="flex items-start gap-6 py-6 border-b border-gray-200 last:border-0">
                  <span className="text-3xl font-bold text-[#C9A84C]/30 font-display">{String(i + 1).padStart(2, "0")}</span>
                  <p className="text-lg font-medium text-[#212529] pt-1">{step}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <SectionHeading overline="What Holds" heading="Our Values" align="left" />
          </AnimatedSection>
          <div className="mt-12 space-y-10 max-w-2xl">
            {values.map((v, i) => (
              <AnimatedSection key={v.title} delay={i * 0.1}>
                <div className="border-l-2 border-[#C9A84C] pl-6">
                  <h3 className="text-xl font-bold text-[#212529] mb-2">{v.title}</h3>
                  <p className="text-[#595F66] leading-relaxed">{v.text}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-6">Partner With Us</h2>
            <p className="text-white/60 max-w-lg mx-auto mb-8">Whether you are a distributor, architect, or operator — we are always looking for strong partnerships.</p>
            <Link href="/contact" className="inline-flex bg-[#D32F3D] text-white font-semibold px-8 py-4 rounded-md hover:bg-[#B82735] transition-all">Contact Us</Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
