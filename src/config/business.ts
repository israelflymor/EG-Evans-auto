// =============================================================
// BUSINESS CONFIGURATION
// Single source of truth for Crotteau Auto Parts LLC.
// Edit here to re-theme the site — no other file should hard-code
// company name, address, phone, or copy.
// =============================================================

export const business = {
  // --- Identity ---
  legalName: "Crotteau Auto Parts Limited Liability Company",
  shortName: "Crotteau Auto Parts",
  initials: "CAP",
  tagline: "Precision Parts. Fast Delivery.",
  owner: "Crotteau Auto Parts Team",
  ownerTitle: "Parts Specialists",
  established: 2018,

  // --- Contact ---
  phoneDisplay: "(XXX) XXX-XXXX",
  phoneHref: "tel:+10000000000",
  email: "info@crotteauautoparts.com",

  // --- Location ---
  address: {
    street: "28200 Bermont Road, Unit 16B",
    city: "Punta Gorda",
    region: "FL",
    postalCode: "33982",
    country: "US",
  },
  serviceArea: {
    primary: "Punta Gorda, FL",
    secondary: "Southwest Florida",
    cities: ["Punta Gorda", "Port Charlotte", "North Port", "Venice", "Fort Myers", "Cape Coral"],
  },
  hours: [
    { day: "Mon – Fri", time: "8:00 AM – 5:00 PM" },
    { day: "Saturday", time: "9:00 AM – 1:00 PM" },
    { day: "Sunday", time: "Closed" },
  ],

  // --- Web / SEO ---
  domain: "crotteauautoparts.lovable.app",
  siteUrl: "https://crotteauautoparts.lovable.app",

  // --- Brand voice ---
  hero: {
    eyebrow: "Punta Gorda · Southwest Florida",
    headlineLineOne: "The Right Part.",
    headlineLineTwo: "The Right Fit.",
    sub: "OEM-quality and aftermarket parts for daily drivers, fleet vehicles, and weekend projects. Search by year, make, and model — or tell us what you need and we'll source it fast.",
    primaryCta: { label: "Request a Quote", to: "/contact" as const },
    secondaryCta: { label: "Browse Categories", to: "/categories" as const },
  },

  trustBadges: [
    "OEM & Aftermarket",
    "Fast Local Pickup",
    "Nationwide Sourcing",
    "Fitment Guaranteed",
  ],
} as const;

// --- Part catalog categories ---
export const categories = [
  {
    slug: "brakes",
    title: "Brakes",
    body: "Pads, rotors, calipers, brake lines, and hardware for cars, trucks, and SUVs.",
  },
  {
    slug: "suspension",
    title: "Suspension & Steering",
    body: "Shocks, struts, control arms, tie rods, ball joints, and alignment components.",
  },
  {
    slug: "engine",
    title: "Engine & Drivetrain",
    body: "Belts, hoses, sensors, gaskets, filters, and timing components for most makes.",
  },
  {
    slug: "electrical",
    title: "Electrical & Battery",
    body: "Batteries, alternators, starters, ignition coils, sensors, and lighting.",
  },
  {
    slug: "filters-fluids",
    title: "Filters & Fluids",
    body: "Oil, air, cabin, and fuel filters plus fluids for engine, transmission, brake, and cooling systems.",
  },
  {
    slug: "climate",
    title: "Climate & A/C",
    body: "A/C compressors, condensers, blower motors, heater cores, and climate control parts.",
  },
  {
    slug: "accessories",
    title: "Accessories",
    body: "Wipers, floor mats, lighting, towing, and everyday maintenance essentials.",
  },
] as const;

export type CategorySlug = (typeof categories)[number]["slug"];

// --- Testimonials / reviews ---
export const testimonials = [
  {
    name: "Derek R.",
    location: "Punta Gorda, FL",
    vehicle: "2018 Ford F-150",
    rating: 5,
    quote:
      "Called looking for brake pads and rotors. They had them in stock and I was back on the road in under an hour. Knowledgeable crew.",
    date: "2026-05-14",
  },
  {
    name: "Sandra L.",
    location: "Port Charlotte, FL",
    vehicle: "2020 Honda CR-V",
    rating: 5,
    quote:
      "Hard-to-find sensor for my CR-V. Crotteau sourced it next day and the price beat the dealership by half. Highly recommend.",
    date: "2026-02-03",
  },
  {
    name: "Mike T.",
    location: "North Port, FL",
    vehicle: "2016 Chevrolet Silverado",
    rating: 5,
    quote:
      "I run a small fleet. These guys keep my trucks moving with fast quotes and the right parts the first time.",
    date: "2025-11-19",
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
    title: "Fleet Brake Job",
    tag: "Brakes",
    caption: "Rotors, pads, and hardware for a three-vehicle fleet — sourced, matched, and ready for pickup.",
  },
  {
    img: project2,
    title: "Suspension Refresh",
    tag: "Suspension",
    caption: "Shocks, struts, and control arms for a daily-driven SUV. Full fitment check before handoff.",
  },
  {
    img: project3,
    title: "Electrical Diagnostic",
    tag: "Electrical",
    caption: "Traced a no-start issue to a failing starter and delivered the replacement same day.",
  },
] as const;

// --- Warehouse / operations gallery ---
export const workshopTools = [
  {
    img: workshopDiagnosticsImg,
    title: "Digital Fitment Desk",
    system: "System 01",
    tags: ["Cross-Reference", "VIN Decode"],
  },
  {
    img: workshopToolsImg,
    title: "Organized Warehouse",
    system: "Storage",
    tags: ["Fast Pick", "Local Stock"],
  },
  {
    img: workshopProtectionImg,
    title: "Quality Control Bench",
    system: "QC",
    tags: ["Inspection", "Fitment Verify"],
  },
] as const;

export const workshopStats = [
  { label: "Coverage", value: "All Makes & Models" },
  { label: "Sourcing", value: "OEM + Aftermarket" },
  { label: "Service Area", value: "Southwest Florida" },
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
