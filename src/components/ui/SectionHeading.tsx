interface SectionHeadingProps {
  id?: string;
  overline?: string;
  heading: string;
  subtext?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
  italic?: boolean;
  divider?: boolean;
}

export default function SectionHeading({ id, overline, heading, subtext, align = "center", theme = "light", italic = true, divider = false }: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";
  const headingColor = theme === "dark" ? "text-white" : "text-text-primary";
  const subtextColor = theme === "dark" ? "text-white/90" : "text-text-secondary";

  return (
    <div className={`flex flex-col gap-4 ${alignClass}`}>
      {overline && (
        <div className={`flex items-center gap-4 ${align === "center" ? "justify-center" : ""}`}>
          <div className="w-12 h-px bg-gold" />
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-gold">{overline}</span>
          {align === "center" && <div className="w-12 h-px bg-gold" />}
        </div>
      )}
      <h2 id={id} className={`font-display text-3xl font-bold leading-tight md:text-4xl lg:text-5xl ${headingColor} ${italic ? "italic" : ""}`}>{heading}</h2>
      {divider && <div className="w-16 h-px bg-gold/30 mt-4" />}
      {subtext && <p className={`max-w-2xl text-lg leading-relaxed ${subtextColor}`}>{subtext}</p>}
    </div>
  );
}
