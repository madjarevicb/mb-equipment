export interface NeutralCapability {
  name: string;
  description: string;
}

export interface FabricationStep {
  title: string;
  description: string;
}

export const neutralCapabilities: NeutralCapability[] = [
  {
    name: "Worktops & Prep Tables",
    description:
      "Custom stainless steel worktops, prep tables, and cutting surfaces — built to your exact dimensions and workflow requirements.",
  },
  {
    name: "Shelving & Storage Systems",
    description:
      "Wall-mounted and freestanding stainless steel shelving, rack systems, and storage units for dry goods and equipment.",
  },
  {
    name: "Sinks & Wash Stations",
    description:
      "Single-, double-, and triple-basin sinks with pre-rinse assemblies — configured for pot wash, food prep, and handwashing.",
  },
  {
    name: "Pass-Through & Service Counters",
    description:
      "Heated and ambient pass-through counters, chef tables, and service points — designed around your front-of-house layout.",
  },
  {
    name: "Ventilation Hoods & Canopies",
    description:
      "Stainless steel extraction hoods, supply air canopies, and grease filtration systems — compliant with local fire and ventilation codes.",
  },
  {
    name: "Custom Fabrication",
    description:
      "Bespoke stainless steel elements — wall cladding, splashbacks, drain channels, and equipment stands built to project specifications.",
  },
];

export const fabricationSteps: FabricationStep[] = [
  {
    title: "Site Survey & Consultation",
    description:
      "We measure the space, review the kitchen layout, and define the scope — worktops, shelving, sinks, hoods, and any custom elements.",
  },
  {
    title: "CAD Drawing & Approval",
    description:
      "Detailed technical drawings with exact dimensions, material specifications, and integration points for equipment and utilities.",
  },
  {
    title: "Fabrication",
    description:
      "All pieces manufactured in AISI 304 stainless steel to exact specifications. Welded, polished, and quality-checked before dispatch.",
  },
  {
    title: "Delivery & Installation",
    description:
      "On-site delivery, positioning, and secure installation — leveled, sealed, and connected to existing kitchen infrastructure.",
  },
];

export const warewashingBrands = [
  {
    name: "Warewashing Equipment",
    description:
      "Commercial dishwashers, glasswashers, and rack conveyor systems for high-volume kitchen operations.",
  },
];

export const wasteManagement = [
  {
    name: "IPC Waste Stations",
    description:
      "Professional waste management and separation stations for commercial kitchens — hygienic, space-efficient, and code-compliant.",
  },
];
