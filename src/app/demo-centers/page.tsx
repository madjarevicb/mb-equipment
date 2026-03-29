import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
  title: "Demo Centers & Showrooms — Experience Innovation | MB Equipment Solutions",
  description:
    "Visit Middleby Innovation Kitchens in Dallas, Madrid, Wigan and more. Hands-on equipment testing, chef demonstrations, and live cooking sessions. Book your visit.",
  alternates: { canonical: "/demo-centers" },
};

const centers = [
  {
    name: "Middleby Innovation Kitchens",
    location: "Dallas, Texas",
    image: "/images/demo/dallas-lg.jpg",
    description: "Step into the remarkable Middleby Innovation Kitchens (the MIK), an expansive facility spanning 40,000 square feet. Immerse yourself in a captivating environment featuring 15 dynamic cooking vignettes and a remarkable collection of 150 live Middleby commercial kitchen innovations.",
    highlights: ["40,000 sq ft", "15 cooking vignettes", "150 live innovations"],
  },
  {
    name: "Middleby Innovation Kitchens",
    location: "Madrid, Spain",
    image: "/images/demo/madrid-lg.jpg",
    description: "The Middleby Innovation Kitchens (MIK), Madrid was built to showcase our innovation with a European flair. A one-stop destination for hands-on learning with the extensive Middleby line of beverage, cooking, frying and ventless, located only 15 minutes from Madrid Airport.",
    highlights: ["European showcase", "Beverage & cooking", "15 min from airport"],
  },
  {
    name: "Food Processing Innovation Centers",
    location: "Multiple Locations",
    image: "/images/demo/food-processing.jpg",
    description: "Middleby Bakery and Protein Innovation Centers are havens for industry-changing processing development. Knowledgeable food scientists and specialized engineers offer their deep expertise to help customers achieve top product quality while gaining operational efficiencies.",
    highlights: ["Bakery & Protein", "Food scientists on-site", "Process development"],
  },
  {
    name: "Middleby Residential Showrooms",
    location: "Multiple Locations",
    image: "/images/demo/residential.jpg",
    description: "Experience Middleby Residential ultra-premium kitchen appliances and outdoor cooking solutions at our award-winning, state-of-the-art showrooms. Open to the public, our top-rated chefs, experienced designers and exceptional staff are ready to provide your custom experience.",
    highlights: ["Ultra-premium appliances", "Open to public", "Custom experiences"],
  },
  {
    name: "Middleby Commercial Showroom",
    location: "Wigan, England",
    image: "/images/demo/wigan.jpg",
    description: "The Middleby Commercial Showroom in Wigan, England, where Chef-driven demonstration and Middleby innovation meet. Built for customers and channel partners, it's a one-stop destination for hands-on learning about the extensive Middleby line of beverage, cooking, frying and ventless.",
    highlights: ["Chef-driven demos", "Channel partners", "Full Middleby line"],
  },
  {
    name: "MB Equipment Solutions",
    location: "Belgrade, Serbia — HQ",
    image: "/images/demo/dallas.jpg",
    description: "Our Belgrade headquarters houses a full commercial kitchen showroom with Viking, La Cornue, and AGA residential displays, plus an industrial equipment demonstration area. The largest MB Equipment facility — open Monday through Friday, Saturday by appointment.",
    highlights: ["Full showroom", "Commercial & residential", "Mon–Fri 08:00–17:00"],
  },
];

export default function DemoCentersPage() {
  return (
    <>
      {/* ═══════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════ */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <Image
          src="/images/demo/dallas-lg.jpg"
          alt="Middleby Innovation Kitchen — Demo Center"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/70 to-navy/30" />
        <div className="relative z-10 h-full flex flex-col justify-end max-w-6xl mx-auto px-6 pb-28">
          <p className="text-gold text-sm font-semibold uppercase tracking-[0.2em] mb-4">
            Demo Centers & Showrooms
          </p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 max-w-2xl leading-[1.1]">
            Welcome To Innovation
          </h1>
          <p className="text-white/70 text-lg max-w-xl mb-8">
            Experience how MB Equipment Solutions is Transforming Foodservice.
          </p>
          <div className="flex gap-4">
            <Link
              href="/contact"
              className="bg-red text-white font-semibold px-8 py-4 text-sm tracking-wide hover:bg-red-hover transition-all"
            >
              Book a Visit
            </Link>
            <Link
              href="#centers"
              className="border border-white/40 text-white font-semibold px-8 py-4 text-sm tracking-wide hover:bg-white/10 transition-all"
            >
              Explore Centers
            </Link>
          </div>
        </div>

        {/* Endorsed by Middleby badge — bottom left */}
        <div className="absolute bottom-8 left-6 z-10 flex items-center gap-3 bg-black/50 backdrop-blur-sm rounded-lg px-5 py-3">
          <span className="text-white/70 text-sm font-medium">Endorsed by</span>
          <Image
            src="/logos/middleby-white.svg"
            alt="Middleby Corporation"
            width={120}
            height={20}
            className="h-5 w-auto"
          />
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          INTRO — What to Expect
      ═══════════════════════════════════════════ */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <AnimatedSection>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-5">
                <p className="text-gold text-sm font-semibold uppercase tracking-[0.2em] mb-3">What to Expect</p>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-navy mb-2">
                  Not a Sales Pitch.<br />A Working Session.
                </h2>
                <div className="w-10 h-[2px] bg-gold" />
              </div>
              <div className="lg:col-span-7 text-text-secondary leading-relaxed space-y-3">
                <p>A demo center visit is structured around your project, not our catalog. Tell us the menu, the volume, the constraints. We set up the relevant equipment, walk through the cook cycles, and let your team operate it.</p>
                <p>Sessions run 90 minutes to half a day depending on scope. Factory application chefs are available for complex demonstrations. You leave with a clear picture of what works, what fits, and what the numbers look like.</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CENTERS — Alternating editorial cards
      ═══════════════════════════════════════════ */}
      <section id="centers" className="py-16 bg-offwhite">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <p className="text-gold text-sm font-semibold uppercase tracking-[0.2em] mb-3">Our Locations</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy mb-12">
              Innovation Centers Worldwide
            </h2>
          </AnimatedSection>

          <div className="space-y-8">
            {centers.map((center, idx) => (
              <AnimatedSection key={`${center.name}-${center.location}`} delay={0.1}>
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-0 bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 ${idx % 2 === 1 ? 'lg:direction-rtl' : ''}`}>
                  {/* Image */}
                  <div className={`relative aspect-[16/10] lg:aspect-auto ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <Image
                      src={center.image}
                      alt={`${center.name} — ${center.location}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  {/* Content */}
                  <div className={`p-8 lg:p-10 flex flex-col justify-center ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <p className="text-gold text-xs font-semibold uppercase tracking-[0.2em] mb-2">{center.location}</p>
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-navy mb-4">{center.name}</h3>
                    <p className="text-text-secondary text-sm leading-relaxed mb-6">{center.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {center.highlights.map((h) => (
                        <span key={h} className="text-xs uppercase tracking-wider text-navy border border-navy/15 px-3 py-1.5">
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CTA — Book a Demo
      ═══════════════════════════════════════════ */}
      <section className="py-16 bg-navy">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <p className="text-gold text-sm font-semibold uppercase tracking-[0.2em] mb-4">Ready?</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
              Cook On It Before You Commit
            </h2>
            <p className="text-white/60 mb-8 max-w-lg mx-auto">
              Bring your menu. Bring your team. Put the equipment through a real service simulation before you sign.
            </p>
            <Link
              href="/contact"
              className="inline-flex bg-red text-white font-semibold px-8 py-4 text-sm hover:bg-red-hover transition-all"
            >
              Book a Demo Session
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
