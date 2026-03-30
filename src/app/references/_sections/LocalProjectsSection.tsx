import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { localProjects } from "@/data/references";

export default function LocalProjectsSection() {
  const firstHalf = localProjects.slice(0, 7);
  const secondHalf = localProjects.slice(7);
  const row1 = [...firstHalf, ...firstHalf, ...firstHalf];
  const row2 = [...secondHalf, ...secondHalf, ...secondHalf];

  return (
    <section
      className="py-20 bg-offwhite overflow-hidden"
      aria-labelledby="local-projects-heading"
    >
      <div className="max-w-6xl mx-auto px-6 mb-10">
        <AnimatedSection>
          <p className="text-gold text-sm font-semibold uppercase tracking-[0.2em] mb-3">
            Featured Projects
          </p>
          <h2
            id="local-projects-heading"
            className="font-display text-3xl sm:text-4xl font-bold text-navy mb-4"
          >
            Featured Installations
          </h2>
          <p className="text-text-secondary text-sm">
            {localProjects.map((project, i) => (
              <span key={project.name}>
                {project.name}
                {i < localProjects.length - 1 && (
                  <span className="text-gold mx-2">·</span>
                )}
              </span>
            ))}
          </p>
        </AnimatedSection>
      </div>

      {/* Row 1 — scrolling left */}
      <div className="relative mb-4" aria-label="Featured project installations row 1">
        <div className="flex gap-4 animate-scroll-left">
          {row1.map((project, i) => (
            <div
              key={`r1-${i}`}
              className="relative w-[320px] h-[220px] flex-shrink-0 rounded-sm overflow-hidden group"
            >
              <Image
                src={project.image}
                alt={`Commercial kitchen at ${project.name}, ${project.location}`}
                fill
                sizes="320px"
                loading="lazy"
                className="object-cover group-hover:scale-[1.03] transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4">
                <h3 className="text-white font-display text-base font-bold drop-shadow-lg">
                  {project.name}
                </h3>
                <p className="text-white/80 text-xs">{project.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 — scrolling right */}
      <div className="relative" aria-label="Featured project installations row 2">
        <div className="flex gap-4 animate-scroll-right">
          {row2.map((project, i) => (
            <div
              key={`r2-${i}`}
              className="relative w-[320px] h-[220px] flex-shrink-0 rounded-sm overflow-hidden group"
            >
              <Image
                src={project.image}
                alt={`Commercial kitchen at ${project.name}, ${project.location}`}
                fill
                sizes="320px"
                loading="lazy"
                className="object-cover group-hover:scale-[1.03] transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4">
                <h3 className="text-white font-display text-base font-bold drop-shadow-lg">
                  {project.name}
                </h3>
                <p className="text-white/80 text-xs">{project.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
