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
    <Link href={href} className="group relative bg-navy-light/50 overflow-hidden h-full border border-white/5 hover:border-gold/30 focus-visible:outline-gold focus-visible:outline-offset-[-2px] transition-[border-color,transform] duration-500 block">
      <div className="relative h-44 md:h-52 overflow-hidden">
        <Image src={image} alt={alt} fill loading="lazy" className="object-cover will-change-transform group-hover:scale-[1.03] transition-transform duration-500" sizes={sizes} placeholder="blur" blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIwOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMUEyQjRBIi8+PC9zdmc+" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent" />
      </div>
      <div className="p-6">
        <h3 className="font-display text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-white/90 text-sm leading-relaxed">{description}</p>
      </div>
      <div className={`absolute bottom-0 left-0 right-0 h-px bg-gold/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
    </Link>
  );
}
