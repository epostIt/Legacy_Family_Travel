export type Destination = {
  id: string;
  name: string;
  hook: string;
  bestMonths: string;
  idealFor: string;
  gradientClass: string;
};

export type Certification = {
  id: string;
  title: string;
  issuer: string;
  icon: "award" | "compass" | "academic" | "anchor";
};

export type Spotlight = {
  id: string;
  title: string;
  description: string;
  tag: string;
};

export type Testimonial = {
  id: string;
  name: string;
  quote: string;
  tripType: string;
};

export const navLinks = [
  { label: "Why Work With Us", href: "#why-work-with-us" },
  { label: "Destinations", href: "#destinations" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
] as const;

export const destinations: Destination[] = [
  {
    id: "alaska",
    name: "Alaska",
    hook: "Glacier views by day, cozy family dinners by night.",
    bestMonths: "May - September",
    idealFor: "Wildlife + scenery",
    gradientClass: "from-brand-800 via-brand-600 to-brand-300",
  },
  {
    id: "caribbean",
    name: "Caribbean",
    hook: "Easy island hopping with something fun for every age.",
    bestMonths: "December - April",
    idealFor: "Sun + easy logistics",
    gradientClass: "from-brand-700 via-brand-500 to-cyan-300",
  },
  {
    id: "mediterranean",
    name: "Mediterranean",
    hook: "Culture-rich cities and unforgettable day trips.",
    bestMonths: "April - June",
    idealFor: "History + cuisine",
    gradientClass: "from-brand-900 via-brand-700 to-amber-200",
  },
  {
    id: "norway",
    name: "Norway Fjords",
    hook: "Dramatic fjords and peaceful small-town charm.",
    bestMonths: "June - August",
    idealFor: "Nature + photography",
    gradientClass: "from-brand-900 via-brand-600 to-emerald-300",
  },
  {
    id: "hawaii",
    name: "Hawaii",
    hook: "Volcanic landscapes, beaches, and relaxed family pace.",
    bestMonths: "March - October",
    idealFor: "Adventure + downtime",
    gradientClass: "from-brand-700 via-fuchsia-500 to-orange-200",
  },
  {
    id: "panama",
    name: "Panama Canal",
    hook: "A bucket-list crossing with rich educational moments.",
    bestMonths: "November - April",
    idealFor: "Story-worthy milestone trip",
    gradientClass: "from-brand-900 via-brand-700 to-lime-300",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "The Sanders Family",
    quote:
      "Legacy Family Travel turned a complicated 11-person plan into the easiest vacation we have ever taken.",
    tripType: "Alaska trip - grandparents + kids",
  },
  {
    id: "t2",
    name: "Mia R.",
    quote:
      "Every detail felt considered. Our teens had freedom, and our parents felt fully looked after.",
    tripType: "Mediterranean vacation - 3 generations",
  },
  {
    id: "t3",
    name: "The Williams Crew",
    quote:
      "Their excursion recommendations gave us real shared moments, not just check-the-box sightseeing.",
    tripType: "Caribbean vacation - family reunion",
  },
  {
    id: "t4",
    name: "Daniel & Priya",
    quote:
      "We appreciated the honest guidance on lodging options. It matched our pace perfectly.",
    tripType: "Norway Fjords - parents + adult children",
  },
  {
    id: "t5",
    name: "The Alvarez Family",
    quote:
      "From accessibility support to dining timing, they anticipated what our family needed before we asked.",
    tripType: "Hawaii vacation - grandparents + grandchildren",
  },
];

export const tripRegions = [
  "Alaska",
  "Caribbean",
  "Mediterranean",
  "Norway Fjords",
  "Hawaii",
  "Panama Canal",
  "Other",
] as const;

export const businessInfo = {
  advisorName: "Laurie Strickland",
  phone: "719.466.7117",
  primaryEmail: "Laurie@LegacyFamilyTravel.com",
  secondaryEmail: "Laurie.LegacyFamilyTravel@gmail.com",
  tagline: "We make the plans, you make the memories.",
  headshotUrl: "/images/laurie.jpg",
} as const;

export const specialties = [
  "Trips for multi-generational families",
  "All-inclusive beach vacations",
  "Scuba and adventure-focused vacations",
  "Escorted vacations in Europe",
] as const;

export const certifications: Certification[] = [
  {
    id: "c1",
    title: "Master Travel Counselor",
    issuer: "Industry-certified travel professional",
    icon: "award",
  },
  {
    id: "c2",
    title: "Adventure Planning Specialist",
    issuer: "Advanced destination and supplier training",
    icon: "compass",
  },
  {
    id: "c3",
    title: "Academy Graduate",
    issuer: "Premium vacation supplier academy",
    icon: "academic",
  },
  {
    id: "c4",
    title: "Premium Partner Certification",
    issuer: "Luxury and family travel partners",
    icon: "anchor",
  },
];

export const spotlights: Spotlight[] = [
  {
    id: "s1",
    title: "Alaska Is Always Worth the Bucket List",
    description:
      "From glacier flightseeing to national park adventures, Alaska remains one of our most requested family destinations.",
    tag: "Top family favorite",
  },
  {
    id: "s2",
    title: "High-Demand Summer Family Vacations",
    description:
      "Popular family resorts and guided programs continue to book quickly. We help families lock in the right fit early.",
    tag: "High-demand travel",
  },
  {
    id: "s3",
    title: "Hosted Christmas Market Programs",
    description:
      "European Christmas Market experiences remain a signature seasonal trip type. Ask us about upcoming hosted dates.",
    tag: "Seasonal hosted trip",
  },
];

export const travelAdvisories = [
  "For Alaska itineraries, Canada may require passports valid at least six months beyond travel dates.",
  "Travelers with certain legal convictions (including DUI history) may be denied entry to Canada.",
  "Pricing is not considered locked until supplier payment requirements are met.",
  "Airlines and suppliers may charge additional fees, including baggage and ancillary service fees.",
  "For international travel by air or sea, a valid passport book is strongly recommended and often required.",
] as const;
