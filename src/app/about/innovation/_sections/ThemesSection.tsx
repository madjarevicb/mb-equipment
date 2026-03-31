import AnimatedSection from "@/components/ui/AnimatedSection";
import { themes } from "@/data/innovation";

export default function ThemesSection() {
  return (
    <section className="py-24 lg:py-32 bg-white overflow-hidden" aria-labelledby="themes-heading">
      <div className="max-w-7xl mx-auto px-6">
        {/* Asymmetric heading */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end mb-20">
          <AnimatedSection className="lg:col-span-5">
            <h2
              id="themes-heading"
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary leading-[1.1]"
            >
              Four Technologies<br />
              <span className="italic font-normal">Shaping the Future</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection className="lg:col-span-7" delay={0.05}>
            <p className="text-text-secondary leading-relaxed text-sm max-w-md">
              The commercial kitchen is changing faster than at any point in
              the last fifty years. These are the shifts we&apos;re investing in.
            </p>
            <div className="w-12 h-px bg-gold/50 mt-6" />
          </AnimatedSection>
        </div>

        {/* Themes as alternating rows */}
        <div className="space-y-0">
          {themes.map((theme, i) => (
            <AnimatedSection key={theme.title} delay={i * 0.06}>
              <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 py-12 ${i < themes.length - 1 ? "border-b border-gray-200" : ""}`}>
                {/* Number + subtitle */}
                <div className="lg:col-span-3">
                  <span className="font-display text-6xl font-bold text-text-primary/8 italic leading-none">
                    {theme.label}
                  </span>
                  <p className="text-gold/80 text-[11px] font-medium uppercase tracking-[0.2em] mt-3">
                    {theme.subtitle}
                  </p>
                </div>

                {/* Content */}
                <div className="lg:col-span-5">
                  <h3 className="font-display text-xl lg:text-2xl font-bold text-text-primary mb-4">
                    {theme.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-[1.8]">
                    {theme.text}
                  </p>
                </div>

                {/* Stat */}
                <div className="lg:col-span-4 flex flex-col justify-end">
                  <span className="font-display text-4xl lg:text-5xl font-bold text-text-primary/20">
                    {theme.stat}
                  </span>
                  <p className="text-text-secondary text-xs mt-2 leading-relaxed">
                    {theme.statLabel}
                  </p>
                  <p className="text-text-secondary/60 text-[11px] mt-1 italic">
                    {theme.statSource}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
