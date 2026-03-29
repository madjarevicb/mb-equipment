interface ProcessStepCardProps {
  title: string;
  description: string;
  index: number;
  isLast: boolean;
}

export default function ProcessStepCard({ title, description, index, isLast }: ProcessStepCardProps) {
  return (
    <div className="relative bg-navy border border-navy-light p-6 h-full hover:border-gold/40 transition-colors duration-500 group">
      <div className="flex items-center gap-3 mb-4">
        <span className="font-display text-3xl font-bold text-gold italic">{String(index + 1).padStart(2, "0")}</span>
        {!isLast && (
          <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-gold/30">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </div>
        )}
      </div>
      <h3 className="text-lg font-bold text-white mb-3">{title}</h3>
      <p className="text-white/70 text-sm leading-relaxed">{description}</p>
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  );
}
