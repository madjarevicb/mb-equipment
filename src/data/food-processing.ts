/* ---------- interfaces ---------- */

export interface EquipmentSolution {
  name: string;
}

export interface ProductApplication {
  name: string;
}

/* ---------- equipment solutions ---------- */

export const equipmentSolutions: EquipmentSolution[] = [
  { name: "Processing & Preparation" },
  { name: "Industrial Baking" },
  { name: "Thermal Processing" },
  { name: "Slicing, Loading & Packaging" },
  { name: "Facility Automation & Equipment Sanitation" },
];

/* ---------- product applications ---------- */

export const bakeryProducts: ProductApplication[] = [
  { name: "Pet Food" },
  { name: "Breads & Buns" },
  { name: "Artisan Breads" },
  { name: "Cakes & Muffins" },
  { name: "Biscuits & Crackers" },
  { name: "Pizza & Pastry" },
  { name: "Alternative Protein" },
];

export const proteinProducts: ProductApplication[] = [
  { name: "Philly Steak" },
  { name: "Sausage & Hot Dog" },
  { name: "Bacon" },
  { name: "Salami & Dry Cure" },
  { name: "Sous Vide" },
  { name: "Poultry" },
  { name: "Deli & Lunch Meat" },
  { name: "Case Ready" },
];
