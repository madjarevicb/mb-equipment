interface ValueCardProps {
  title: string;
  description: string;
}

export default function ValueCard({ title, description }: ValueCardProps) {
  return (
    <div className="relative bg-white p-8 lg:p-10 h-full group border border-gray-100 hover:border-gray-300 transition-colors duration-300">
      <div className="absolute top-0 left-0 right-0 h-px bg-gold/30" />
      <span className="font-display text-7xl text-gold/10 leading-none select-none block -mb-6">&ldquo;</span>
      <h3 className="font-display text-2xl font-bold text-text-primary mb-4 italic">{title}</h3>
      <p className="text-text-secondary leading-relaxed">{description}</p>
    </div>
  );
}
