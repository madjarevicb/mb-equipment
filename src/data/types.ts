export interface EquipmentBrand {
  name: string;
  description: string;
  logo: string | null;
  category: string;
}

export interface EquipmentSubcategory {
  id: string;
  name: string;
  description: string;
  variants?: string[];
}
