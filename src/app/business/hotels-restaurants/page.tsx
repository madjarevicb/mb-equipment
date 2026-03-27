import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
  title: "Our Brands | MB Equipment Solutions",
  description:
    "25+ professional kitchen equipment brands. Josper, Pitco, Hobart, TurboChef, Middleby Marshall and more. Commercial, residential, and industrial foodservice equipment.",
  alternates: { canonical: "/business/hotels-restaurants" },
};

/* ------------------------------------------------------------------ */
/*  All 25 brands from the old site                                    */
/* ------------------------------------------------------------------ */
const brands = [
  {
    name: "Josper",
    text: "JOSPER has been manufacturing for over 50 years, combining tradition and the knowledge of local craftsmen with the most innovative design and production technologies, in order to obtain a product that is unique in the market.",
    category: "Grilling",
  },
  {
    name: "Pitco",
    text: "Pitco is a world leader in fryers, rethermalizers, and reduced oil use technology. Pitco technology delivers great food while saving energy, oil, and time through top-product efficiency.",
    category: "Frying",
  },
  {
    name: "Hobart",
    text: "HOBART is the global market leader for commercial dishwasher and warewash systems. As a leading innovator in commercial warewashing technology, we always find solutions that reduce the consumption of your resources continuously.",
    category: "Warewashing",
  },
  {
    name: "Hounö",
    text: "HOUNÖ Invoq Combi, Hybrid & bake ovens, as well as CombiSlim model ovens — the key to unlock high efficiency and significant cost savings for your food service business growth.",
    category: "Combi Ovens",
  },
  {
    name: "Dalmec",
    text: "Dalmec provides complete solutions for the hotel sector and collective catering. Dalmec has produced hundreds of Industrial Manipulators now in use in the best industries throughout the world.",
    category: "Material Handling",
  },
  {
    name: "Sveba Dahlen",
    text: "Sveba Dahlen, established in 1948, manufactures high-quality, user-friendly ovens and baking equipment. Sveba Dahlen products deliver the best baking results and lifetime value.",
    category: "Baking",
  },
  {
    name: "TurboChef",
    text: "TurboChef speed-cook ovens fit virtually every cooking application, offering high-quality results, superior cook speeds, and UL®-certified ventless operation.",
    category: "Speed Cooking",
  },
  {
    name: "Silko",
    text: "Since its inception in 1980, Silko has stood out for its attention to detail, the quality of its materials and the originality of its solutions, designed to optimise productivity and improve the organisation of work in the kitchen.",
    category: "Cooking Equipment",
  },
  {
    name: "Firex",
    text: "For 40 years, Firex has been a leading manufacturer of professional foodservice equipment producing highly-automated, innovative cooking systems that save energy and resources.",
    category: "Automated Cooking",
  },
  {
    name: "Lincat",
    text: "Lincat, the UK's leading manufacturer of commercial fryers, ovens, griddles, grills, chargrills, induction hobs, merchandisers and hot cupboards.",
    category: "Cooking & Grilling",
  },
  {
    name: "Infrico",
    text: "INFRICO was born in 1986 with a clear objective: to generate the best cooling solutions adapted to the specific needs of each client. Technological vanguard, certified quality and excellence.",
    category: "Refrigeration",
  },
  {
    name: "Nieco",
    text: "Building Automatic Broilers that guarantee to serve delicious, juicy, flavorful, flame broiled meals quickly and efficiently, every time.",
    category: "Broiling",
  },
  {
    name: "Desmon",
    text: "Desmon Food Service Equipment is a world leader in chilling and freezing technologies, manufacturing blast chillers and professional refrigeration.",
    category: "Blast Chilling",
  },
  {
    name: "Follett",
    text: "Follett manufactures innovative ice machines, ice and water dispensers, and ice storage and transport products for the foodservice industry.",
    category: "Ice Systems",
  },
  {
    name: "IMC",
    text: "Specializing in commercial under bar, bottle coolers and glass frosters, packaging and food waste management equipment. Robust and reliable, designed to perform in the most demanding environments.",
    category: "Bar Equipment",
  },
  {
    name: "Middleby Marshall",
    text: "Middleby Marshall is the world leader in conveyor cooking. Middleby ovens are known for their consistent bake, durability and longevity.",
    category: "Conveyor Ovens",
  },
  {
    name: "Perfect Fry",
    text: "Perfect Fry commercial ventless fryers are the best deep fryers of their kind on the market! Perfect Fryers solve all of your deep frying challenges.",
    category: "Ventless Frying",
  },
  {
    name: "Varimixer",
    text: "Varimixer is a worldwide renowned Danish manufacturer of planetary mixers for bakeries, kitchens, and food processing. Founded in 1915, with more than a century of experience.",
    category: "Mixing",
  },
  {
    name: "Viking Commercial",
    text: "Viking Commercial bar refrigeration solutions embody innovation and reliability. From sleek wine refrigerators to multi-beverage dispensers, and exclusive craft ice machines.",
    category: "Bar Refrigeration",
  },
  {
    name: "Bake Off",
    text: "Professional electrical and gas ovens for baking and bread making.",
    category: "Baking",
  },
  {
    name: "Anets",
    text: "For over 80 years, ANETS has continued to offer innovation and quality with a full line of fryers and pasta cookers. When great food and on-the-ball service are your top draws.",
    category: "Frying & Pasta",
  },
  {
    name: "APW Wyott",
    text: "APW Wyott is a leading source of quality equipment solutions to the foodservice and retail industries worldwide.",
    category: "Foodservice Equipment",
  },
  {
    name: "Bakers Pride",
    text: "The Bakers Pride Oven Company was founded in The Bronx, New York in the mid 1940's, and initiated one of the most dramatic innovations in the history of American cuisine by inventing the modern production pizza oven.",
    category: "Pizza Ovens",
  },
  {
    name: "Beech Ovens",
    text: "Beech Ovens offers a comprehensive product range, including a wide variety of ovens, rotisseries, specialty chargrills, and custom-made hearths.",
    category: "Wood-Fired Ovens",
  },
  {
    name: "BKI",
    text: "We're hard-core foodies! You can see our dedication to the culinary arts in the quality construction, durability and design elements that set BKI commercial cooking equipment apart.",
    category: "Commercial Cooking",
  },
];

/* ------------------------------------------------------------------ */
/*  Segments we serve                                                  */
/* ------------------------------------------------------------------ */
const segments = [
  {
    title: "Fine Dining & Boutique",
    text: "Custom-specified lines. Josper charcoal grills, Jade heavy-duty ranges, Desmon blast chillers.",
  },
  {
    title: "Hotels & Resorts",
    text: "Main kitchens, banquet production, pastry, garde manger, room service pantries, pool bars.",
  },
  {
    title: "Quick-Service & Fast Casual",
    text: "Standardized equipment packages for multi-unit rollouts across 50+ locations.",
  },
  {
    title: "Cafes & Bakeries",
    text: "Espresso systems, display cases, deck ovens, proofers, mixers.",
  },
  {
    title: "Institutional & Catering",
    text: "Hospitals, corporate dining, universities, airlines. High-volume production equipment.",
  },
];

export default function HotelsRestaurantsPage() {
  return (
    <>
      {/* ============================================================ */}
      {/*  HERO                                                         */}
      {/* ============================================================ */}
      <section className="relative min-h-[60vh] flex items-center bg-[#0A1628]">
        <div className="absolute inset-0 bg-[url('/images/innovation/hero.jpg')] bg-cover bg-center opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628] via-[#0A1628]/80 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
          <AnimatedSection>
            <span className="text-[#C9A84C] text-sm font-semibold uppercase tracking-[0.2em]">
              Commercial Solutions
            </span>
            <div className="w-12 h-[2px] bg-[#C9A84C] mt-4 mb-6" />
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] max-w-3xl">
              Our Brands
            </h1>
            <p className="text-white/70 text-lg max-w-xl mt-6 leading-relaxed">
              MB Equipment Solutions develops industry leading solutions for commercial restaurants,
              fast food chains, hospitality, healthcare, and convenience store operations.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                href="/contact"
                className="inline-flex bg-[#D32F3D] text-white font-semibold px-8 py-4 rounded-sm hover:bg-[#B82735] transition-all"
              >
                Request a Quote
              </Link>
              <Link
                href="/demo-centers"
                className="inline-flex border border-white/30 text-white font-semibold px-8 py-4 rounded-sm hover:bg-white/10 transition-all"
              >
                Visit a Demo Center
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  SEGMENTS — elegant inline strip                              */}
      {/* ============================================================ */}
      <section className="py-10 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="flex flex-col md:flex-row md:items-center gap-5">
              <div className="flex items-center gap-3 shrink-0">
                <div className="w-8 h-[2px] bg-[#C9A84C]" />
                <span className="text-[#0A1628] text-sm font-semibold uppercase tracking-widest">
                  We equip
                </span>
              </div>
              <div className="hidden md:block w-[1px] h-6 bg-gray-200" />
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
                {segments.map((s, i) => (
                  <span key={s.title} className="flex items-center gap-x-6">
                    <span className="text-[15px] text-[#595F66] hover:text-[#0A1628] transition-colors cursor-default">
                      {s.title}
                    </span>
                    {i < segments.length - 1 && (
                      <span className="hidden sm:inline text-[#C9A84C]/40 text-xs">●</span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  BRANDS GRID — all 25 brands                                 */}
      {/* ============================================================ */}
      <section className="py-24 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="mb-16">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
                <div className="lg:col-span-7">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-[2px] bg-[#C9A84C]" />
                    <span className="text-[#C9A84C] text-xs font-semibold uppercase tracking-widest">
                      Brand Portfolio
                    </span>
                  </div>
                  <h2 className="font-display text-3xl lg:text-5xl font-bold text-[#0A1628] leading-[1.1]">
                    The Names Behind<br className="hidden lg:block" /> the Kitchens
                  </h2>
                </div>
                <div className="lg:col-span-5">
                  <p className="text-[#595F66] leading-relaxed lg:border-l-2 lg:border-[#C9A84C]/30 lg:pl-6">
                    We represent over 25 brands from Middleby Corporation and beyond.
                    Each one selected for build quality, factory-direct service network,
                    and proven performance under pressure.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {brands.map((brand, i) => (
              <AnimatedSection key={brand.name} delay={Math.min(i * 0.04, 0.4)}>
                <div className="group bg-white border border-gray-100 hover:border-[#0A1628]/20 p-8 h-full transition-all duration-300 hover:shadow-lg">
                  {/* Category tag */}
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-[#C9A84C] bg-[#C9A84C]/10 px-3 py-1 inline-block mb-5">
                    {brand.category}
                  </span>

                  {/* Brand name */}
                  <h3 className="font-display text-2xl font-bold text-[#0A1628] mb-3 group-hover:text-[#D32F3D] transition-colors">
                    {brand.name}
                  </h3>

                  {/* Description */}
                  <p className="text-[#595F66] text-sm leading-relaxed">
                    {brand.text}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  PROCESS                                                      */}
      {/* ============================================================ */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="text-[#C9A84C] text-sm font-semibold uppercase tracking-[0.2em]">
                How It Works
              </span>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-[#0A1628] mt-4">
                How a Project Moves
              </h2>
            </div>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
              {["Brief", "Design", "Specification", "Procurement", "Installation", "Training", "Support"].map((step, i) => (
                <AnimatedSection key={step} delay={i * 0.08}>
                  <div className="text-center">
                    <div className="w-12 h-12 mx-auto bg-[#0A1628] text-[#C9A84C] font-display text-lg font-bold flex items-center justify-center mb-3">
                      {i + 1}
                    </div>
                    <p className="text-sm font-semibold text-[#0A1628]">{step}</p>
                    {i < 6 && (
                      <div className="hidden md:block w-full h-[1px] bg-[#C9A84C]/30 mt-6" />
                    )}
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  CTA                                                          */}
      {/* ============================================================ */}
      <section className="py-24 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-6">
                  Start Your Project
                </h2>
                <p className="text-white/60 leading-relaxed mb-8">
                  Tell us the menu, the covers, the space, and the budget.
                  We&apos;ll come back with brands, models, drawings, and a number.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex bg-[#D32F3D] text-white font-semibold px-8 py-4 rounded-sm hover:bg-[#B82735] transition-all"
                  >
                    Get Started
                  </Link>
                  <Link
                    href="/references"
                    className="inline-flex border border-white/20 text-white font-semibold px-8 py-4 rounded-sm hover:bg-white/10 transition-all"
                  >
                    See Our References
                  </Link>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/5 border border-white/10 p-6">
                  <span className="font-display text-4xl font-bold text-[#C9A84C]">25+</span>
                  <p className="text-white/50 text-sm mt-1">Equipment Brands</p>
                </div>
                <div className="bg-white/5 border border-white/10 p-6">
                  <span className="font-display text-4xl font-bold text-[#C9A84C]">500+</span>
                  <p className="text-white/50 text-sm mt-1">Projects Delivered</p>
                </div>
                <div className="bg-white/5 border border-white/10 p-6">
                  <span className="font-display text-4xl font-bold text-[#C9A84C]">40+</span>
                  <p className="text-white/50 text-sm mt-1">Countries Served</p>
                </div>
                <div className="bg-white/5 border border-white/10 p-6">
                  <span className="font-display text-4xl font-bold text-[#C9A84C]">24h</span>
                  <p className="text-white/50 text-sm mt-1">Response Time</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
