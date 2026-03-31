interface ProcessStepCardProps {
  title: string;
  description: string;
  index: number;
  isLast: boolean;
}

export default function ProcessStepCard({ title, description, index, isLast }: ProcessStepCardProps) {
  return (
    <div className="relative bg-navy border border-navy-light p-8 h-full hover:border-gold/40 transition-colors duration-500 group">
      <div className="flex items-center gap-3 mb-4">
        <span className="font-display text-4xl font-bold text-gold italic">{String(index + 1).padStart(2, "0")}</span>
        {!isLast && (
          <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-gold/30">
            <span className="text-lg">&#8594;</span>
          </div>
        )}
      </div>
      <h3 className="text-lg font-medium text-white mb-3">{title}</h3>
      <p className="text-white/90 text-sm leading-relaxed">{description}</p>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gold/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  );
}
