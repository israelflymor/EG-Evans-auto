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
  email: "hello@egevansauto.com",

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

// --- Project / case-study showcase ---
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

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
