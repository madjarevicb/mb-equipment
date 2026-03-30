import AnimatedSection from "@/components/ui/AnimatedSection";

interface Stat {
  value: string;
  label: string;
  description: string;
}

const stats: Stat[] = [
  { value: "110+", label: "Equipment Brands", description: "From commercial ovens to ventilation systems" },
  { value: "2,000+", label: "Projects Delivered", description: "Across hotels, restaurants and processing facilities" },
  { value: "40+", label: "Countries Served", description: "Throughout Southeast Europe and beyond" },
  { value: "15+", label: "Years in the Industry", description: "Building kitchens that perform" },
];

export default function StatsSection() {
  return (
    <section id="stats" aria-label="Company statistics" className="relative py-24 bg-navy overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left — feature stat */}
          <AnimatedSection className="lg:col-span-5" animation="fade-right">
            <p className="text-gold text-sm font-semibold uppercase tracking-[0.2em] mb-6">By the Numbers</p>
            <p className="font-display text-7xl sm:text-8xl lg:text-9xl font-bold text-white italic leading-none mb-4">
              {stats[1].value}
            </p>
            <p className="text-white/80 text-xl font-medium mb-2">{stats[1].label}</p>
            <p className="text-white/80 text-sm leading-relaxed max-w-sm">{stats[1].description}</p>
            <div className="w-16 h-[2px] bg-gold mt-8" />
          </AnimatedSection>

          {/* Right — remaining stats */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-6 lg:pt-8">
            {stats.filter((_, i) => i !== 1).map((stat, i) => (
              <AnimatedSection key={stat.label} delay={0.1 + i * 0.1} animation="scale-in">
                <div className="border-l-2 border-gold/30 pl-6">
                  <p className="font-display text-4xl sm:text-5xl font-bold text-white italic leading-none mb-3">
                    {stat.value}
                  </p>
                  <p className="text-sm text-white/80 font-semibold uppercase tracking-[0.12em] mb-2">{stat.label}</p>
                  <p className="text-white/80 text-xs leading-relaxed">{stat.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
