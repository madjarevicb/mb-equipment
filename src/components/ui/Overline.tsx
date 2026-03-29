interface OverlineProps {
  label: string;
  align?: "left" | "center";
  muted?: boolean;
}

export default function Overline({ label, align = "left", muted = false }: OverlineProps) {
  const textColor = muted ? "text-gold/90" : "text-gold";
  const lineColor = muted ? "bg-gold/60" : "bg-gold";

  return (
    <div className={`flex items-center gap-4 ${align === "center" ? "justify-center" : ""}`}>
      <div className={`w-12 h-[2px] ${lineColor}`} />
      <span className={`text-xs font-semibold uppercase tracking-[0.3em] ${textColor}`}>{label}</span>
      {align === "center" && <div className={`w-12 h-[2px] ${lineColor}`} />}
    </div>
  );
}
