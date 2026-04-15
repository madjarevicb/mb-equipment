export interface WhatWeDoItem {
  title: string;
  image: string;
  alt: string;
  description: string;
  href: string;
}

export interface ProcessStep {
  title: string;
  description: string;
}

export interface ValueItem {
  title: string;
  description: string;
}

/** HTML string — safe to use with dangerouslySetInnerHTML (sanitized at render time) */
export interface FAQItem {
  question: string;
  answer: string;
}

export interface PartnershipBlock {
  number: string;
  title: string;
  description: string;
}

export interface ProjectReference {
  label: string;
  name: string;
  description: string;
}

export const partnershipBlocks: PartnershipBlock[] = [
  {
    number: "01",
    title: "Middleby Corporation — Direct Authorization",
    description:
      "Middleby is one of the world\u2019s largest foodservice equipment manufacturers. Our authorization means direct factory engineering access, priority parts supply, and direct factory access across 110+ brands.",
  },
  {
    number: "02",
    title: "Demo Centers — Live Equipment, Real Decisions",
    description:
      "Our demo network spans four locations across Europe: Grill & Chill (Serbia), Josper (Barcelona), and Middleby showrooms in Germany and Madrid. Every center is fully operational — clients test equipment on their own menu before signing.",
  },
];

export const projectReferences: ProjectReference[] = [
  {
    label: "Convention Center",
    name: "Sava Centar, Belgrade",
    description:
      "Complete foodservice equipment specification and delivery for the largest convention center in Serbia.",
  },
  {
    label: "Hospitality",
    name: "50+ Hotels & Restaurants",
    description:
      "From boutique hotels to restaurant chains — equipped from initial specification through commissioning.",
  },
  {
    label: "MB Equipment Demo Network",
    name: "4 Live Demo Centers",
    description:
      "Grill & Chill (Serbia), Josper (Barcelona), Middleby (Germany), Middleby (Madrid) — all equipment active and available for client visits.",
  },
];

export const equipmentCategories: WhatWeDoItem[] = [
  { title: "Commercial Automation", image: "/images/whatwedo/automation.jpg", alt: "Commercial kitchen automation and robotics systems", description: "Picnic, Flippy, and Middleby automation platforms \u2014 robotics saving operators time and labor while producing a consistent product every order.", href: "/about/innovation" },
  { title: "Commercial Baking", image: "/images/whatwedo/baking.jpg", alt: "Professional baking ovens including Blodgett rotating rack oven", description: "Fifteen brands dedicated to baking excellence, anchored by Blodgett XR8 \u2014 the reference standard for rotating rack ovens.", href: "/business/hotels-restaurants" },
  { title: "Commercial Char-Grilling", image: "/images/whatwedo/char-grilling.jpg", alt: "NIECO flame broiler and infrared conveyor grill", description: "Consistent quality grill after grill \u2014 featuring NIECO flame broilers and CTX infrared conveyors for high-volume operations.", href: "/business/hotels-restaurants" },
  { title: "Commercial Combi Ovens", image: "/images/whatwedo/combi.jpg", alt: "Blodgett and Houno commercial combi ovens", description: "Steaming, baking, roasting, and regeneration in a single footprint. From 6-tray countertop to 40-tray roll-in models.", href: "/business/hotels-restaurants" },
  { title: "Professional Cooking Suites", image: "/images/whatwedo/chef-cooking.jpg", alt: "Professional chef cooking suites by Jade and Southbend", description: "Heavy-duty cooking lines built around your menu. Jade, Southbend, and Vulcan \u2014 configured and commissioned by our engineering team.", href: "/business/hotels-restaurants" },
  { title: "Commercial Beverage", image: "/images/whatwedo/beverage.jpg", alt: "Commercial beverage equipment including espresso and frozen drink machines", description: "Every beverage format your operation needs \u2014 from espresso and nitro coffee to frozen drinks and soft-serve. Powered by Taylor, Synesso, and Follett.", href: "/business/hotels-restaurants" },
  { title: "Commercial Brewing", image: "/images/whatwedo/brewing.jpg", alt: "On-premise micro and craft brewing systems", description: "On-premise craft brewing from 1-barrel pilots to 3.5-barrel production. Systems by Ss Brewtech and Deutsche Beverage Technology.", href: "/business/hotels-restaurants" },
  { title: "Commercial Frying", image: "/images/whatwedo/frying.jpg", alt: "Commercial deep fryers by Pitco and Ultrafryer", description: "Pitco, Ultrafryer, BKI, PerfectFry \u2014 a fryer for every product and volume, from c-store to full-production.", href: "/business/hotels-restaurants" },
  { title: "Commercial Griddling", image: "/images/whatwedo/griddling.jpg", alt: "Taylor double-sided clamshell grill for automated griddling", description: "Taylor clamshell grills, Star flat-tops, and Toastmaster countertop units \u2014 from high-volume QSR automation to \u00e0 la carte precision.", href: "/business/hotels-restaurants" },
  { title: "IoT & Connected Kitchen", image: "/images/whatwedo/iot.png", alt: "Open Kitchen IoT platform for connected commercial kitchens", description: "Open Kitchen IoT \u2014 automation, food safety, and equipment connectivity modules. See how a connected kitchen saves time and labor.", href: "/about/innovation" },
  { title: "Commercial Pizza Equipment", image: "/images/whatwedo/pizza.jpg", alt: "Commercial pizza production equipment for all styles", description: "Traditional, deep dish, wood-fired, or New York style. Fifteen brands covering slicing, mixing, dividing, proofing, and baking.", href: "/business/hotels-restaurants" },
  { title: "Commercial Range & Induction", image: "/images/whatwedo/range.jpg", alt: "Commercial gas and induction cooking ranges", description: "From gas to induction \u2014 the highest quality and most energy efficient ranges. Southbend with patented TruVapor technology.", href: "/business/hotels-restaurants" },
  { title: "Solid & Dual Fuel Cooking", image: "/images/whatwedo/solid-fuel.jpg", alt: "Solid fuel charcoal and wood-fired commercial cooking equipment", description: "Charcoal, wood, and dual-fuel cooking for open-flame kitchens. Beech, Josper, and Jade \u2014 built for consistency at high volume.", href: "/business/hotels-restaurants" },
  { title: "Commercial Steam Equipment", image: "/images/whatwedo/steam.jpg", alt: "Crown and FirEx commercial steam cooking equipment", description: "Crown and FirEx for all heavy-duty needs. Compartment steamers, kettles, tilt skillets, and automated pressurized skillets.", href: "/business/hotels-restaurants" },
  { title: "Ventless Kitchen Solutions", image: "/images/whatwedo/ventless.jpg", alt: "Ventless commercial kitchen cooking solutions", description: "A full commercial kitchen without traditional ventilation. Eleven brands and over 350,000 ventless systems operating worldwide.", href: "/about/innovation" },
];

export const experienceSpaces: WhatWeDoItem[] = [
  { title: "The Elements", image: "/images/whatwedo/elements.jpg", alt: "The Elements 14-seat chef table experience", description: "A 14-seat chef\u2019s table experience featuring multi-course meals prepared using wood, fire, earth, water, and metal.", href: "/demo-centers" },
  { title: "Dining Room", image: "/images/whatwedo/dining-room.jpg", alt: "MB Equipment 70-person dining room with full bar", description: "A 70-person dining room with full SkyFlo bar, Viking wine cellars, and Bluezone air purification.", href: "/demo-centers" },
  { title: "Training Room", image: "/images/whatwedo/training-room.jpg", alt: "70-person equipment training room with live cooking stations", description: "70-person capacity with live cooking stations, AV presentation systems, and hands-on equipment for product demos and operator certification.", href: "/demo-centers" },
  { title: "Ad Hoc Kitchen", image: "/images/whatwedo/adhoc-kitchen.jpg", alt: "Configurable test kitchen for equipment specification", description: "Modular test kitchen reconfigured for each project \u2014 prototype layouts, benchmark equipment side by side, and validate specs before committing to a build.", href: "/demo-centers" },
];

export const processSteps: ProcessStep[] = [
  { title: "Consultation & Specification", description: "Bring us in when the floor plan is still on the screen. We spec equipment around your menu, volume, space, and budget \u2014 not the other way around." },
  { title: "Supply & Logistics", description: "Factory-direct orders, consolidated shipping, customs clearance, and last-mile delivery to site. One point of contact, no middlemen in the chain." },
  { title: "Installation & Commissioning", description: "Our technical team installs and commissions every piece. Gas, electric, ventilation hookups \u2014 tested before handover." },
  { title: "Staff Training", description: "Equipment without training is furniture. We train kitchen staff on operation, cleaning protocols, and troubleshooting." },
  { title: "After-Sales & Service", description: "Genuine spare parts, factory-trained technicians, preventive maintenance, and service support. The equipment runs." },
];

export const companyValues: ValueItem[] = [
  { title: "Precision Over Volume", description: "We would rather specify the right piece of equipment once than replace the wrong one twice. Every recommendation is based on the actual operating conditions of the project." },
  { title: "Direct Relationships", description: "No middlemen, no gray-market sourcing. Our factory relationships are direct and documented. That matters when you need a part in 48 hours, not 48 days." },
  { title: "Long-Term Thinking", description: "We service what we sell. That creates a natural incentive to sell equipment that lasts. Our reference list is our reputation." },
  { title: "Factory Access, Not Shelf Stock", description: "Every piece of equipment is ordered directly from the manufacturer. That means original parts, current models, and delivery without intermediaries affecting price or lead time." },
];

export const faqItems: FAQItem[] = [
  { question: "What regions does MB Equipment Solutions serve?", answer: "We primarily serve Southeast Europe \u2014 Serbia, Croatia, Bosnia, Montenegro, North Macedonia, Albania, and Kosovo. Through our Middleby authorization and logistics network, we also support projects across the wider European market. Our <a href='/demo-centers' class='text-gold hover:underline'>demo centers</a> in Serbia, Spain, and Germany provide hands-on specification support." },
  { question: "What brands does MB Equipment carry?", answer: "We represent 110+ professional foodservice brands through our authorization by <a href='/about/innovation' class='text-gold hover:underline'>Middleby Corporation</a>. Key brands include Blodgett, Pitco, Taylor, Viking, Jade, Southbend, Vulcan, Josper, and many more across 15 equipment categories." },
  { question: "Do you only sell equipment or provide full-service support?", answer: "We provide the full cycle: consultation and kitchen design, equipment specification matched to your menu and volume, factory-direct supply with consolidated logistics, professional installation and gas/electric commissioning, hands-on staff training, and ongoing after-sales service with genuine spare parts. Every project gets a dedicated point of contact from first meeting through post-opening support." },
  { question: "Can I see equipment in action before buying?", answer: "Yes. We operate demo centers across Europe: Grill & Chill in Serbia, Josper showroom in Barcelona, and Middleby centers in Germany and Madrid. <a href='/contact' class='text-gold hover:underline'>Contact us</a> to schedule a visit and test equipment on your own menu." },
  { question: "What is the typical timeline for a kitchen project?", answer: "Timelines depend on project scope and equipment lead times. A single-restaurant kitchen typically takes 4\u20136 weeks from final specification to commissioning. Multi-unit rollouts across several locations run 3\u20136 months, including staggered deliveries. Large institutional projects with custom cooking suites may require 6\u20139 months. Involving us during the architectural design phase prevents costly layout revisions and keeps procurement on schedule." },
  { question: "Do you provide warranty and after-sales service?", answer: "Yes. All equipment comes with manufacturer warranty. Our factory-trained technicians provide preventive maintenance, repair, and genuine spare parts with priority delivery through our direct Middleby relationship. We service what we sell \u2014 that is a core part of our model." },
  { question: "How does MB Equipment differ from a local distributor?", answer: "A local distributor sells boxes. We design, specify, deliver, install, commission, train, and service complete commercial kitchens. As a Middleby-authorized partner, we hold direct factory access with priority parts supply, and factory-trained engineers certified on 110+ brands. See our <a href='/references' class='text-gold hover:underline'>references</a> for proof." },
  { question: "Does MB Equipment offer energy-efficient commercial kitchen equipment?", answer: "Yes. Energy efficiency is a core specification criterion in every project. Our portfolio includes ENERGY STAR-certified combi ovens, high-efficiency fryers with built-in oil filtration, induction cooking suites that cut energy use by up to 50% versus gas, and ventless systems that eliminate the cost of traditional hood infrastructure. We calculate projected utility savings during the specification phase so operators can make informed decisions." },
];
