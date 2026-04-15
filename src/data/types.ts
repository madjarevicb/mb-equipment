export interface EquipmentBrand {
  name: string;
  description: string;
  logo: string | null;
  category: string;
}

export interface EquipmentSubcategory {
  id: string;
  slug: string;
  name: string;
  description: string;
  heroImage: string;
  heroAlt: string;
  variants?: string[];
  brands: string[];
  seoTitle: string;
  seoDesc: string;
  keywords: string[];
}
