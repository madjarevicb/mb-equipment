import Link from "next/link";
import Image from "next/image";

interface EquipmentCardProps {
  title: string;
  image: string;
  alt: string;
  description: string;
  href: string;
  sizes: string;
  gradient?: "red-gold" | "gold";
}

const gradientMap = {
  "red-gold": "from-red via-gold to-transparent",
  gold: "from-gold to-transparent",
} as const;

export default function EquipmentCard({ title, image, alt, description, href, sizes, gradient = "red-gold" }: EquipmentCardProps) {
  return (
    <Link href={href} className="group relative bg-navy-light/50 overflow-hidden h-full border border-white/5 hover:border-gold/30 focus-visible:outline-gold focus-visible:outline-offset-[-2px] transition-colors duration-500 block">
      <div className="relative h-52 overflow-hidden">
        <Image src={image} alt={alt} fill loading="lazy" className="object-cover group-hover:scale-105 transition-transform duration-700" sizes={sizes} />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent" />
      </div>
      <div className="p-6">
        <h3 className="font-display text-xl font-bold text-white mb-3">{title}</h3>
        <p className="text-white/60 text-sm leading-relaxed">{description}</p>
      </div>
      <div className={`absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r ${gradientMap[gradient]} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
    </Link>
  );
}
