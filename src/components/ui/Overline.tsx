interface OverlineProps {
  label: string;
  align?: "left" | "center";
  theme?: "light" | "dark" | "muted";
}

const themeMap = {
  light: "text-gold",
  dark: "text-gold",
  muted: "text-gold/70",
} as const;

const lineMap = {
  light: "bg-gold",
  dark: "bg-gold",
  muted: "bg-gold/40",
} as const;

export default function Overline({ label, align = "left", theme = "light" }: OverlineProps) {
  return (
    <div className={`flex items-center gap-4 ${align === "center" ? "justify-center" : ""}`}>
      <div className={`w-12 h-[2px] ${lineMap[theme]}`} />
      <span className={`text-xs font-semibold uppercase tracking-[0.3em] ${themeMap[theme]}`}>{label}</span>
      {align === "center" && <div className={`w-12 h-[2px] ${lineMap[theme]}`} />}
    </div>
  );
}
