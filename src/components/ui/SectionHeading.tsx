interface SectionHeadingProps {
  id?: string;
  overline?: string;
  heading: string;
  subtext?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
  italic?: boolean;
}

export default function SectionHeading({ id, overline, heading, subtext, align = "center", theme = "light", italic = true }: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";
  const headingColor = theme === "dark" ? "text-white" : "text-text-primary";
  const subtextColor = theme === "dark" ? "text-white/70" : "text-text-secondary";

  return (
    <div className={`flex flex-col gap-4 ${alignClass}`}>
      {overline && <span className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">{overline}</span>}
      <h2 id={id} className={`font-display text-3xl font-bold leading-tight md:text-4xl lg:text-5xl ${headingColor} ${italic ? "italic" : ""}`}>{heading}</h2>
      {subtext && <p className={`max-w-2xl text-lg leading-relaxed ${subtextColor}`}>{subtext}</p>}
    </div>
  );
}
