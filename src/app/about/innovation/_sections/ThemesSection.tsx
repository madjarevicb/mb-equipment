import AnimatedSection from "@/components/ui/AnimatedSection";
import { themes } from "@/data/innovation";

export default function ThemesSection() {
  const [connected, speed, ventless, sustainability] = themes;

  return (
    <section className="py-28 bg-white overflow-hidden" aria-labelledby="themes-heading">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header — left aligned */}
        <AnimatedSection>
          <div className="max-w-xl mb-16">
            <span className="text-gold text-sm font-semibold uppercase tracking-[0.2em]">
              What&apos;s Moving the Industry
            </span>
            <h2
              id="themes-heading"
              className="font-display text-3xl lg:text-4xl font-bold text-navy mt-4"
            >
              Four Technologies Shaping the Future
            </h2>
          </div>
        </AnimatedSection>

        {/* Row 1 — Two cards, 3:2 ratio, navy + white */}
        <AnimatedSection>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-6">
            {/* Connected Kitchens — navy, takes 3 cols */}
            <article className="lg:col-span-3 bg-navy p-10 lg:p-14 relative overflow-hidden">
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-[2px] bg-gold" />
                  <span className="text-gold text-xs font-semibold uppercase tracking-widest">
                    {connected.subtitle}
                  </span>
                </div>
                <h3 className="font-display text-2xl lg:text-3xl font-bold text-white mb-5">
                  {connected.title}
                </h3>
                <p className="text-white/80 leading-relaxed mb-10">
                  {connected.text}
                </p>
                <div className="flex items-baseline gap-2">
                  <span className="font-display text-5xl font-bold text-gold">
                    {connected.stat}
                  </span>
                  <span className="text-white/80 text-sm max-w-[180px]">
                    {connected.statLabel}
                  </span>
                </div>
                <p className="text-white/70 text-xs mt-2 italic">
                  {connected.statSource}
                </p>
              </div>
            </article>

            {/* Speed & Energy — white with left red border, takes 2 cols */}
            <article className="lg:col-span-2 border-l-4 border-red bg-offwhite p-10 lg:p-12 relative overflow-hidden">
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-[2px] bg-red" />
                  <span className="text-red text-xs font-semibold uppercase tracking-widest">
                    {speed.subtitle}
                  </span>
                </div>
                <h3 className="font-display text-xl lg:text-2xl font-bold text-navy mb-4">
                  {speed.title}
                </h3>
                <p className="text-text-secondary leading-relaxed text-[15px] mb-8">
                  {speed.text}
                </p>
                <div>
                  <span className="font-display text-4xl font-bold text-navy">
                    {speed.stat}
                  </span>
                  <p className="text-text-secondary text-xs mt-1">
                    {speed.statLabel}
                  </p>
                  <p className="text-text-secondary text-xs mt-1 italic">
                    {speed.statSource}
                  </p>
                </div>
              </div>
            </article>
          </div>
        </AnimatedSection>

        {/* Row 2 — Two cards, 2:3 ratio (reversed), navy + gradient */}
        <AnimatedSection>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            {/* Ventless — navy, takes 2 cols */}
            <article className="lg:col-span-2 bg-navy p-10 lg:p-12 relative overflow-hidden">
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-[2px] bg-gold" />
                  <span className="text-gold text-xs font-semibold uppercase tracking-widest">
                    {ventless.subtitle}
                  </span>
                </div>
                <h3 className="font-display text-xl lg:text-2xl font-bold text-white mb-4">
                  {ventless.title}
                </h3>
                <p className="text-white/80 leading-relaxed text-[15px] mb-8">
                  {ventless.text}
                </p>
                <div className="pt-6 border-t border-white/10">
                  <span className="font-display text-4xl font-bold text-gold">
                    {ventless.stat}
                  </span>
                  <p className="text-white/80 text-xs mt-1">
                    {ventless.statLabel}
                  </p>
                  <p className="text-white/70 text-xs mt-1 italic">
                    {ventless.statSource}
                  </p>
                </div>
              </div>
            </article>

            {/* Sustainability — gradient bg, takes 3 cols */}
            <article className="lg:col-span-3 bg-gradient-to-br from-offwhite to-[#EDF0F3] border-l-4 border-gold p-10 lg:p-14 relative overflow-hidden">
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-[2px] bg-gold" />
                  <span className="text-gold text-xs font-semibold uppercase tracking-widest">
                    {sustainability.subtitle}
                  </span>
                </div>
                <h3 className="font-display text-2xl lg:text-3xl font-bold text-navy mb-5">
                  {sustainability.title}
                </h3>
                <p className="text-text-secondary leading-relaxed mb-10">
                  {sustainability.text}
                </p>
                <div className="flex items-baseline gap-2">
                  <span className="font-display text-5xl font-bold text-red">
                    {sustainability.stat}
                  </span>
                  <span className="text-text-secondary text-sm max-w-[200px]">
                    {sustainability.statLabel}
                  </span>
                </div>
                <p className="text-text-secondary text-xs mt-2 italic">
                  {sustainability.statSource}
                </p>
              </div>
            </article>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
