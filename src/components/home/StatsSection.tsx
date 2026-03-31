import AnimatedSection from "@/components/ui/AnimatedSection";

interface Stat {
  value: string;
  label: string;
}

const stats: Stat[] = [
  { value: "110+", label: "Equipment Brands" },
  { value: "2,000+", label: "Projects Delivered" },
  { value: "40+", label: "Countries Served" },
];

export default function StatsSection() {
  return (
    <section id="stats" aria-label="Company statistics" className="relative py-24 lg:py-32 bg-navy overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-end">
          {/* Left — featured stat, large and confident */}
          <AnimatedSection className="lg:col-span-5" animation="fade-right">
            <p className="text-white/40 text-xs font-medium uppercase tracking-[0.3em] mb-8">
              Since 2003
            </p>
            <p className="font-display text-8xl sm:text-9xl lg:text-[10rem] font-bold text-white italic leading-none tracking-tight">
              2,000+
            </p>
            <p className="text-white/60 text-sm uppercase tracking-[0.2em] mt-4">
              Projects Delivered
            </p>
          </AnimatedSection>

          {/* Right — secondary stats, restrained */}
          <div className="lg:col-span-7 flex flex-col sm:flex-row gap-12 lg:gap-16 lg:justify-end lg:pb-4">
            {stats.filter((_, i) => i !== 1).map((stat, i) => (
              <AnimatedSection key={stat.label} delay={0.15 + i * 0.1}>
                <div>
                  <p className="font-display text-5xl lg:text-6xl font-bold text-white/90 italic leading-none mb-2">
                    {stat.value}
                  </p>
                  <p className="text-white/40 text-xs uppercase tracking-[0.2em]">{stat.label}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
