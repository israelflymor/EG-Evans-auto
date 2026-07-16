// =============================================================
// BUSINESS CONFIGURATION
// Single source of truth for all business data. Edit here to
// re-deploy this template for a different shop — no other file
// should hard-code company name, address, phone, or copy.
// =============================================================

export const business = {
  // --- Identity ---
  legalName: "EG Evans Auto Services LLC",
  shortName: "EG Evans Auto",
  initials: "EG",
  tagline: "Coastal Luxury. Precision Service.",
  owner: "Elizabeth Evans",
  ownerTitle: "Founder & Lead Technician",
  established: 2024,

  // --- Contact ---
  phoneDisplay: "(XXX) XXX-XXXX",
  phoneHref: "tel:+10000000000",
  email: "info@eevansautocare.com",

  // --- Location ---
  address: {
    street: "321 Waterloo Dr",
    city: "Dahlonega",
    region: "GA",
    postalCode: "30533",
    country: "US",
  },
  serviceArea: {
    primary: "Dahlonega, GA",
    secondary: "Lumpkin County & North Georgia",
    cities: ["Dahlonega", "Cleveland", "Dawsonville", "Gainesville", "Cumming"],
  },
  hours: [
    { day: "Mon – Fri", time: "8:00 AM – 6:00 PM" },
    { day: "Saturday", time: "9:00 AM – 2:00 PM" },
    { day: "Sunday", time: "Closed" },
  ],

  // --- Web / SEO ---
  domain: "egevansauto.lovable.app",
  siteUrl: "https://egevansauto.lovable.app",

  // --- Brand voice ---
  hero: {
    eyebrow: "Dahlonega · North Georgia",
    headlineLineOne: "Precision Auto Care,",
    headlineLineTwo: "Coastal-Luxury Standard.",
    sub: "From daily drivers to weekend exotics — EG Evans Auto Services delivers concierge-grade diagnostics, repair, and maintenance with the polish you'd expect from Miami's finest service houses.",
    primaryCta: { label: "Book Service", to: "/contact" as const },
    secondaryCta: { label: "Browse Services", to: "/services" as const },
  },

  trustBadges: [
    "Family Owned",
    "ASE-Minded Standards",
    "Transparent Quotes",
    "All Makes & Models",
  ],
} as const;

// --- Service catalog ---
export const services = [
  {
    title: "Diagnostics",
    body: "OBD-II scanning, check-engine investigations, electrical fault tracing, and pre-purchase inspections — root-cause first, parts second.",
  },
  {
    title: "Brakes & Suspension",
    body: "Pads, rotors, calipers, shocks, struts and alignment-related work. Safety-critical repairs done to spec.",
  },
  {
    title: "Oil & Maintenance",
    body: "Conventional, synthetic-blend and full-synthetic services. Filters, fluids and manufacturer-interval upkeep.",
  },
  {
    title: "Engine Repair",
    body: "Belts, hoses, water pumps, sensors, timing components and gasket service for most makes and models.",
  },
  {
    title: "Climate & A/C",
    body: "A/C recharge, leak detection, blower and compressor service, plus heater core diagnostics.",
  },
  {
    title: "Electrical & Battery",
    body: "Battery testing and replacement, alternator and starter service, and electrical-system troubleshooting.",
  },
] as const;

// --- Testimonials / reviews ---
// Add, edit, or remove entries here — they render on the home page,
// power the testimonials section, and feed schema.org Review markup.
export const testimonials = [
  {
    name: "Jordan M.",
    location: "Dahlonega, GA",
    vehicle: "2019 Ford F-150",
    rating: 5,
    quote:
      "Elizabeth walked me through every line of the quote before touching the truck. No surprises, no upsell — just honest work done right the first time.",
    date: "2026-04-18",
  },
  {
    name: "Priya S.",
    location: "Dawsonville, GA",
    vehicle: "2021 Toyota RAV4",
    rating: 5,
    quote:
      "Chased a check-engine light at two other shops before EG Evans diagnosed it in an hour. Felt like the only customer in the place.",
    date: "2025-11-02",
  },
  {
    name: "Marcus T.",
    location: "Cleveland, GA",
    vehicle: "2017 Jeep Wrangler",
    rating: 5,
    quote:
      "Brake job came back better than factory. Pickup bay was spotless and they even washed the rims. Concierge-grade is the right word.",
    date: "2024-09-21",
  },
] as const;
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import workshopDiagnosticsImg from "@/assets/workshop-diagnostics.jpg";
import workshopToolsImg from "@/assets/workshop-tools.jpg";
import workshopProtectionImg from "@/assets/workshop-protection.jpg";

export const projects = [
  {
    img: project1,
    title: "Engine Bay Service",
    tag: "Repair",
    caption: "Belt, hose and sensor work — torque-spec'd and owner-walked-through before pickup.",
  },
  {
    img: project2,
    title: "Brake System Overhaul",
    tag: "Safety",
    caption: "Full pad, rotor and caliper replacement on a daily-driven SUV. Pedal feel restored.",
  },
  {
    img: project3,
    title: "OBD-II Diagnostics",
    tag: "Diagnostics",
    caption: "Traced an intermittent CEL to a failing sensor — no guesswork parts swaps.",
  },
] as const;

// --- Workshop / Tools gallery ---
// Configurable entries for the About page "Inside the Laboratory" section.
export const workshopTools = [
  {
    img: workshopDiagnosticsImg,
    title: "Digital Telemetry Suite",
    system: "System 01",
    tags: ["Real-time Analysis", "ECU Mapping"],
  },
  {
    img: workshopToolsImg,
    title: "Artisan Hand-Tools",
    system: "Precision",
    tags: ["Micron-level Accuracy"],
  },
  {
    img: workshopProtectionImg,
    title: "Protective Finish Lab",
    system: "Defense",
    tags: ["Coatings & Rust Prevention"],
  },
] as const;

export const workshopStats = [
  { label: "Workshop Standard", value: "ASE-Minded Process" },
  { label: "Diagnostics", value: "OBD-II + Live Data" },
  { label: "Specialization", value: "All Makes & Models" },
] as const;

// --- Part Finder data (Year/Make/Model) ---
export const currentYear = new Date().getFullYear();
export const partFinderYears = Array.from(
  { length: currentYear - 1989 },
  (_, i) => currentYear - i,
);

export const partFinderMakes = [
  "Acura", "Audi", "BMW", "Buick", "Cadillac", "Chevrolet", "Chrysler",
  "Dodge", "Ford", "GMC", "Honda", "Hyundai", "Infiniti", "Jeep",
  "Kia", "Land Rover", "Lexus", "Lincoln", "Mazda", "Mercedes-Benz",
  "Mitsubishi", "Nissan", "Porsche", "Ram", "Subaru", "Tesla",
  "Toyota", "Volkswagen", "Volvo",
] as const;

export const partFinderModels: Record<string, readonly string[]> = {
  Ford: ["F-150", "F-250", "Mustang", "Explorer", "Escape", "Edge", "Bronco"],
  Toyota: ["Camry", "Corolla", "RAV4", "Tacoma", "Tundra", "4Runner", "Highlander"],
  Honda: ["Accord", "Civic", "CR-V", "Pilot", "Odyssey", "Ridgeline"],
  Chevrolet: ["Silverado", "Equinox", "Tahoe", "Suburban", "Malibu", "Camaro"],
  Jeep: ["Wrangler", "Grand Cherokee", "Cherokee", "Compass", "Gladiator"],
  BMW: ["3 Series", "5 Series", "X3", "X5", "M3", "M5"],
  "Mercedes-Benz": ["C-Class", "E-Class", "S-Class", "GLC", "GLE", "AMG GT"],
};
