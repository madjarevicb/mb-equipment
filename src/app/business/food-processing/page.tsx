import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
  title: "Food Processing — Industrial Equipment Solutions",
  description:
    "MB Equipment Solutions Food Processing Group partners with industrial protein and bakery processors, providing the most advanced operations solutions.",
  alternates: { canonical: "/business/food-processing" },
};

const equipmentSolutions = [
  { name: "Processing & Preparation", icon: "⚙️" },
  { name: "Industrial Baking", icon: "🍞" },
  { name: "Thermal Processing", icon: "🔥" },
  { name: "Slicing, Loading & Packaging", icon: "📦" },
  { name: "Facility Automation & Equipment Sanitation", icon: "🏭" },
];

const bakeryProducts = [
  { name: "Pet Food", icon: "🐾" },
  { name: "Breads & Buns", icon: "🍞" },
  { name: "Artisan Breads", icon: "🥖" },
  { name: "Cakes & Muffins", icon: "🧁" },
  { name: "Biscuits & Crackers", icon: "🍪" },
  { name: "Pizza & Pastry", icon: "🍕" },
  { name: "Alternative Protein", icon: "🌱" },
];

const proteinProducts = [
  { name: "Philly Steak", icon: "🥩" },
  { name: "Sausage & Hot Dog", icon: "🌭" },
  { name: "Bacon", icon: "🥓" },
  { name: "Salami & Dry Cure", icon: "🍖" },
  { name: "Sous Vide", icon: "♨️" },
  { name: "Poultry", icon: "🍗" },
  { name: "Deli & Lunch Meat", icon: "🥪" },
  { name: "Case Ready", icon: "📦" },
];

export default function FoodProcessingPage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center overflow-hidden">
        <Image
          src="/images/food-processing/hero.jpg"
          alt="Food processing industrial equipment"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <p className="text-[#C9A84C] text-sm font-semibold uppercase tracking-[0.3em] mb-4">
            Industrial Solutions
          </p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1]">
            Food Processing
          </h1>
          <p className="text-white/80 text-xl mt-4">
            Meet Tomorrow. Today.
          </p>
        </div>
        {/* Endorsed by Middleby badge */}
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
        {/* Gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* ─── INTRO ─── */}
      <section className="py-28 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <AnimatedSection>
            <span className="text-[#C9A84C] text-sm font-semibold uppercase tracking-[0.2em]">
              Food Processing Group
            </span>
            <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#0A1628] leading-tight">
                  MB Equipment Solutions Food Processing Group partners with industrial protein
                  and bakery processors, providing the most advanced operations solutions.
                </h2>
              </div>
              <div className="border-l-2 border-[#C9A84C]/30 pl-8 flex flex-col justify-center">
                <p className="text-[#595F66] leading-relaxed">
                  From raw material preparation through production to final packaging — we deliver
                  complete processing lines built for continuous operation.
                </p>
                <Link
                  href="/contact"
                  className="mt-6 inline-flex items-center gap-2 text-[#D32F3D] font-semibold text-sm hover:gap-3 transition-all"
                >
                  Discuss your project <span>&rarr;</span>
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── FOOD PROCESSING BRANDS ─── */}
      <section className="relative py-28 bg-[#0A1628] overflow-hidden">
        {/* Background image with overlay */}
        <div className="absolute inset-0">
          <Image
            src="/images/food-processing/meal.png"
            alt=""
            fill
            className="object-cover opacity-10"
          />
        </div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <AnimatedSection>
            <div className="max-w-3xl">
              <span className="text-[#C9A84C] text-sm font-semibold uppercase tracking-[0.2em]">
                Our Expertise
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-3 leading-tight">
                Food Processing Brands
              </h2>
              <div className="w-16 h-[2px] bg-[#C9A84C] mt-6 mb-10" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                <p className="text-white/70 text-lg leading-relaxed">
                  Global manufacturing, sales and support meet increasing demands for advanced
                  technologies in food production. Innovative, best-in-class equipment solutions
                  for both high volume and smaller producers.
                </p>
                <p className="text-white/50 leading-relaxed">
                  We cover processes from raw material preparation and production to product
                  packaging for retail and food service applications.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <div className="border-l-2 border-[#C9A84C] pl-6 py-2">
                  <p className="text-white font-semibold">Raw Material Preparation</p>
                  <p className="text-white/40 text-sm mt-1">Intake to processing</p>
                </div>
                <div className="border-l-2 border-[#D32F3D] pl-6 py-2">
                  <p className="text-white font-semibold">Production & Processing</p>
                  <p className="text-white/40 text-sm mt-1">Thermal, baking, forming</p>
                </div>
                <div className="border-l-2 border-white/30 pl-6 py-2">
                  <p className="text-white font-semibold">Packaging & Distribution</p>
                  <p className="text-white/40 text-sm mt-1">Retail and food service</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── EQUIPMENT SOLUTIONS ─── */}
      <section className="py-20 bg-[#F8F9FA]">
        <div className="max-w-5xl mx-auto px-6">
          <AnimatedSection>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
              <div>
                <span className="text-[#C9A84C] text-sm font-semibold uppercase tracking-[0.2em]">
                  Capabilities
                </span>
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#0A1628] mt-2">
                  Equipment Solutions
                </h2>
              </div>
              <p className="text-[#595F66] leading-relaxed max-w-md text-sm lg:text-right">
                Maximize performance and output with advice and support from our experts around the world.
              </p>
            </div>
            <div className="w-full h-[1px] bg-[#0A1628]/10 mb-0" />
          </AnimatedSection>

          <div className="space-y-0">
            {equipmentSolutions.map((item, i) => (
              <AnimatedSection key={item.name} delay={i * 0.05}>
                <div className="group flex items-center gap-5 py-5 border-b border-[#E5E7EB] hover:border-[#D32F3D]/50 cursor-pointer transition-all duration-300 hover:pl-2">
                  <span className="text-[#C9A84C]/30 font-display text-xl font-bold w-10 flex-shrink-0 group-hover:text-[#D32F3D] transition-colors">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[#0A1628] font-semibold group-hover:text-[#D32F3D] transition-colors flex-1">
                    {item.name}
                  </span>
                  <span className="text-[#0A1628]/15 text-xl group-hover:text-[#D32F3D] group-hover:translate-x-1 transition-all duration-300">
                    &rarr;
                  </span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PRODUCT APPLICATION ─── */}
      <section className="py-24 bg-[#0A1628]">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <span className="text-[#C9A84C] text-sm font-semibold uppercase tracking-[0.2em]">
              Applications
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mt-3 mb-14">
              Product Application
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Bakery — takes 5 columns */}
            <div className="lg:col-span-5">
              <AnimatedSection>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-8 h-[2px] bg-[#C9A84C]" />
                  <h3 className="font-display text-2xl font-bold text-[#C9A84C]">
                    Bakery
                  </h3>
                </div>
                <div className="space-y-0">
                  {bakeryProducts.map((product) => (
                    <div
                      key={product.name}
                      className="group flex items-center gap-4 py-3.5 border-b border-white/5 hover:border-[#C9A84C]/30 cursor-pointer transition-all"
                    >
                      <span className="w-1.5 h-1.5 bg-[#C9A84C]/40 rounded-full group-hover:bg-[#C9A84C] group-hover:scale-150 transition-all flex-shrink-0" />
                      <span className="text-white/60 group-hover:text-white text-sm font-medium transition-colors">
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

            {/* Protein — takes 5 columns */}
            <div className="lg:col-span-5">
              <AnimatedSection delay={0.1}>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-8 h-[2px] bg-[#D32F3D]" />
                  <h3 className="font-display text-2xl font-bold text-[#D32F3D]">
                    Protein
                  </h3>
                </div>
                <div className="space-y-0">
                  {proteinProducts.map((product) => (
                    <div
                      key={product.name}
                      className="group flex items-center gap-4 py-3.5 border-b border-white/5 hover:border-[#D32F3D]/30 cursor-pointer transition-all"
                    >
                      <span className="w-1.5 h-1.5 bg-[#D32F3D]/40 rounded-full group-hover:bg-[#D32F3D] group-hover:scale-150 transition-all flex-shrink-0" />
                      <span className="text-white/60 group-hover:text-white text-sm font-medium transition-colors">
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

      {/* ─── INNOVATION CENTERS ─── */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <AnimatedSection>
            <div className="bg-[#F8F9FA] border border-[#E5E7EB] rounded-sm overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-5">
                <div className="lg:col-span-3 p-10 lg:p-14 flex flex-col justify-center">
                  <span className="text-[#C9A84C] text-sm font-semibold uppercase tracking-[0.2em]">
                    Innovation Centers
                  </span>
                  <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#0A1628] mt-3 leading-tight">
                    See It. Believe It.
                  </h2>
                  <div className="w-12 h-[2px] bg-[#C9A84C] mt-4 mb-6" />
                  <p className="text-[#595F66] leading-relaxed">
                    Our Innovation Centers bring together the most advanced food processing
                    technologies. Schedule a visit to see equipment running at full production
                    capacity with your products.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 mt-8">
                    <Link
                      href="/demo-centers"
                      className="inline-flex items-center justify-center bg-[#D32F3D] text-white font-semibold px-6 py-3 rounded-sm hover:bg-[#B82735] transition-all text-sm"
                    >
                      Visit an Innovation Center
                    </Link>
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center border border-[#0A1628]/20 text-[#0A1628] font-semibold px-6 py-3 rounded-sm hover:bg-[#0A1628] hover:text-white transition-all text-sm"
                    >
                      Discuss Your Production Line
                    </Link>
                  </div>
                </div>
                <div className="lg:col-span-2 bg-[#0A1628] p-10 lg:p-14 flex items-center justify-center">
                  <div className="text-center">
                    <p className="font-display text-6xl font-bold text-[#C9A84C]">6</p>
                    <p className="text-white/60 text-sm mt-3 uppercase tracking-wider">Innovation Centers</p>
                    <p className="text-white/30 text-xs mt-1">Across the region</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
