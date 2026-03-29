export interface Milestone {
  year: string;
  number: "01" | "02" | "03" | "04";
  color: "gold" | "red";
  title: string;
  description: string;
}

export interface WhatWeDoItem {
  title: string;
  image: string;
  alt: string;
  text: string;
  href?: string;
}

export interface ProcessStep {
  title: string;
  description: string;
}

export interface ValueItem {
  title: string;
  description: string;
}

export const milestones: Milestone[] = [
  {
    year: "2003",
    number: "01",
    color: "gold",
    title: "Founded in Belgrade",
    description:
      "MB Equipment Solutions opened with a three-person team and a clear premise: the region needed a professional-grade equipment partner, not just a distributor. First projects were hotel kitchens in Serbia and Montenegro \u2014 site surveys, specs, installation, commissioning, and 24/7 service.",
  },
  {
    year: "2008",
    number: "02",
    color: "red",
    title: "Middleby Endorsement",
    description:
      "That hands-on approach attracted attention from Middleby Corporation \u2014 one of the world\u2019s largest foodservice equipment manufacturers with 110+ brands. The endorsement meant direct factory engineering access, priority parts supply, and terms that nobody else in the region could match.",
  },
  {
    year: "2014",
    number: "03",
    color: "gold",
    title: "Expanding Scope",
    description:
      "From commercial kitchens, the scope expanded. Residential luxury \u2014 Viking, La Cornue, and AGA for high-end homes. Food processing \u2014 industrial lines for bakeries, meat plants, dairy. Multi-unit rollouts for Starbucks, KFC, McDonald\u2019s, Burger King, and Subway across 30+ markets.",
  },
  {
    year: "Today",
    number: "04",
    color: "red",
    title: "40+ Countries & Growing",
    description:
      "Today, the company operates demo centers in Belgrade, Istanbul, and Dubai, employs a full-time service engineering team, and has delivered equipment to projects in over 40 countries. The premise has not changed. Only the scale.",
  },
];

export const equipmentCategories: WhatWeDoItem[] = [
  { title: "Automation", image: "/images/whatwedo/automation.jpg", alt: "Commercial kitchen automation and robotics systems", text: "Robotics saving operators time and costs while producing a consistent product every order, every customer.", href: "/about/innovation" },
  { title: "Baking", image: "/images/whatwedo/baking.jpg", alt: "Professional baking ovens including Blodgett rotating rack oven", text: "Fifteen brands dedicated to baking excellence, anchored by Blodgett XR8 \u2014 the reference standard for rotating rack ovens.", href: "/business/hotels-restaurants" },
  { title: "Char-Grilling", image: "/images/whatwedo/char-grilling.jpg", alt: "NIECO flame broiler and infrared conveyor grill", text: "Products engineered to deliver consistent quality grill after grill, featuring NIECO flame broilers and CTX infrared conveyors.", href: "/business/hotels-restaurants" },
  { title: "Combi Ovens", image: "/images/whatwedo/combi.jpg", alt: "Blodgett and Houno commercial combi ovens", text: "Steaming, baking, roasting, and regeneration in a single footprint. From 6-tray countertop to 40-tray roll-in models.", href: "/business/hotels-restaurants" },
  { title: "Cooking Suites", image: "/images/whatwedo/chef-cooking.jpg", alt: "Professional chef cooking suites by Jade and Southbend", text: "From Jade to Southbend \u2014 the perfect fit for your kitchen. Visit us and we\u2019ll customize it for you.", href: "/business/hotels-restaurants" },
  { title: "Beverage", image: "/images/whatwedo/beverage.jpg", alt: "Commercial beverage equipment including espresso and frozen drink machines", text: "Hot, cold, blended, ice cream, nitro coffee, and more. Taylor, Follett, Concordia, Synesso, and SkyFlo.", href: "/business/hotels-restaurants" },
  { title: "Brewing", image: "/images/whatwedo/brewing.jpg", alt: "On-premise micro and craft brewing systems", text: "Ss Brewtech and Deutsche \u2014 leaders in on-premise micro and craft brewing with 1-barrel and 3.5-barrel systems.", href: "/business/hotels-restaurants" },
  { title: "Frying", image: "/images/whatwedo/frying.jpg", alt: "Commercial deep fryers by Pitco and Ultrafryer", text: "Pitco, Ultrafryer, BKI, PerfectFry \u2014 a fryer for every product and volume, from c-store to full-production.", href: "/business/hotels-restaurants" },
  { title: "Griddling", image: "/images/whatwedo/griddling.jpg", alt: "Taylor double-sided clamshell grill for automated griddling", text: "Automation and griddling together with the Taylor double-sided clamshell grill \u2014 the benchmark in griddling automation.", href: "/business/hotels-restaurants" },
  { title: "IoT & Connected Kitchen", image: "/images/whatwedo/iot.png", alt: "Open Kitchen IoT platform for connected commercial kitchens", text: "Open Kitchen IoT \u2014 automation, food safety, and equipment connectivity modules. See how a connected kitchen saves time and labor.", href: "/about/innovation" },
  { title: "Pizza", image: "/images/whatwedo/pizza.jpg", alt: "Commercial pizza production equipment for all styles", text: "Traditional, deep dish, wood-fired, or New York style. Fifteen brands covering slicing, mixing, dividing, proofing, and baking.", href: "/business/hotels-restaurants" },
  { title: "Range & Induction", image: "/images/whatwedo/range.jpg", alt: "Commercial gas and induction cooking ranges", text: "From gas to induction \u2014 the highest quality and most energy efficient ranges. Southbend with patented TruVapor technology.", href: "/business/hotels-restaurants" },
  { title: "Solid & Dual Fuel", image: "/images/whatwedo/solid-fuel.jpg", alt: "Solid fuel charcoal and wood-fired commercial cooking equipment", text: "Cook with all five elements. Products from Beech, Josper, Jade \u2014 dry-aged steak cooked to perfection.", href: "/business/hotels-restaurants" },
  { title: "Steam", image: "/images/whatwedo/steam.jpg", alt: "Crown and FirEx commercial steam cooking equipment", text: "Crown and FirEx for all heavy-duty needs. Compartment steamers, kettles, tilt skillets, and automated pressurized skillets.", href: "/business/hotels-restaurants" },
  { title: "Ventless", image: "/images/whatwedo/ventless.jpg", alt: "Ventless commercial kitchen cooking solutions", text: "A full commercial kitchen without traditional ventilation. Nearly a dozen brands, 350,000 ventless systems operating worldwide.", href: "/about/innovation" },
];

export const experienceSpaces: WhatWeDoItem[] = [
  { title: "The Elements", image: "/images/whatwedo/elements.jpg", alt: "The Elements 14-seat chef table experience", text: "A 14-seat chef\u2019s table experience featuring multi-course meals prepared using wood, fire, earth, water, and metal.", href: "/demo-centers" },
  { title: "Dining Room", image: "/images/whatwedo/dining-room.jpg", alt: "MB Equipment 70-person dining room with full bar", text: "A 70-person dining room with full SkyFlo bar, Viking wine cellars, and Bluezone air purification.", href: "/demo-centers" },
  { title: "Training Room", image: "/images/whatwedo/training-room.jpg", alt: "State-of-the-art 70-person equipment training room", text: "70-person training room with advanced equipment and amenities, protected by Bluezone air purification.", href: "/demo-centers" },
  { title: "Ad Hoc Kitchen", image: "/images/whatwedo/adhoc-kitchen.jpg", alt: "Configurable test kitchen for equipment specification", text: "Design it, build it, test it, tear it down. Configured to help you design, test, and specify the right kitchen.", href: "/demo-centers" },
];

export const processSteps: ProcessStep[] = [
  { title: "Consultation & Specification", description: "We work with architects and F&B directors from the earliest planning stages \u2014 specifying equipment based on menu, volume, space, and budget." },
  { title: "Supply & Logistics", description: "Direct factory orders, competitive pricing, consolidated shipping, customs clearance, and last-mile delivery \u2014 all handled." },
  { title: "Installation & Commissioning", description: "Our technical team installs and commissions every piece. Gas, electric, ventilation hookups \u2014 tested before handover." },
  { title: "Staff Training", description: "Equipment without training is furniture. We train kitchen staff on operation, cleaning protocols, and troubleshooting." },
  { title: "After-Sales & Service", description: "Genuine spare parts, factory-trained technicians, preventive maintenance, and emergency service. The equipment runs." },
];

export const companyValues: ValueItem[] = [
  { title: "Precision Over Volume", description: "We would rather specify the right piece of equipment once than replace the wrong one twice. Every recommendation is based on the actual operating conditions of the project." },
  { title: "Direct Relationships", description: "No middlemen, no gray-market sourcing. Our factory relationships are direct and documented. That matters when you need a part in 48 hours, not 48 days." },
  { title: "Long-Term Thinking", description: "We service what we sell. That creates a natural incentive to sell equipment that lasts. Our reference list is our reputation." },
];
