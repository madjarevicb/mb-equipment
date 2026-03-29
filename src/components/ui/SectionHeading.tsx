interface SectionHeadingProps {
  overline?: string;
  heading: string;
  subtext?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
}

export default function SectionHeading({ overline, heading, subtext, align = "center", theme = "light" }: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";
  const headingColor = theme === "dark" ? "text-white" : "text-text-primary";
  const subtextColor = theme === "dark" ? "text-gray-300" : "text-text-secondary";

  return (
    <div className={`flex flex-col gap-4 ${alignClass}`}>
      {overline && <span className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">{overline}</span>}
      <h2 className={`font-display text-3xl font-bold leading-tight md:text-4xl lg:text-5xl ${headingColor}`}>{heading}</h2>
      {subtext && <p className={`max-w-2xl text-lg leading-relaxed ${subtextColor}`}>{subtext}</p>}
    </div>
  );
}
