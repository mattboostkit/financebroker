// Company Information
export const COMPANY_INFO = {
  name: "Aegis Finance", // Placeholder - to be updated
  tagline: "Commercial Finance Specialists",
  phone: "01234 567890", // Placeholder
  email: "enquiries@aegisfinance.co.uk", // Placeholder
  address: {
    line1: "123 Finance Street",
    line2: "Business District",
    city: "London",
    postcode: "EC1A 1AA",
  },
  // FCA Compliance - MUST be updated with real details
  fca: {
    firmName: "Aegis Finance", // AR Name
    firmReferenceNumber: "XXXXXX", // AR FRN - TO BE PROVIDED
    principalFirm: "White Rose Finance Group Ltd",
    principalFRN: "630772",
  },
  ico: {
    registrationNumber: "XXXXXXXX", // ICO Number - TO BE PROVIDED
  },
  memberships: ["NACFB", "FIBA"],
} as const;

// Navigation Structure
export const NAV_ITEMS = [
  {
    title: "Property Finance",
    href: "/property-finance",
    children: [
      {
        title: "Bridging Finance",
        href: "/property-finance/bridging-finance",
        description: "Fast, flexible short-term property finance",
      },
      {
        title: "Development Finance",
        href: "/property-finance/development-finance",
        description: "Funding for residential and commercial developments",
      },
      {
        title: "Buy-to-Let",
        href: "/property-finance/buy-to-let",
        description: "Unregulated BTL mortgages for investors",
      },
    ],
  },
  {
    title: "Business Finance",
    href: "/business-finance",
    children: [
      {
        title: "Asset Finance",
        href: "/business-finance/asset-finance",
        description: "Equipment leasing and hire purchase",
      },
      {
        title: "Invoice Finance",
        href: "/business-finance/invoice-finance",
        description: "Release cash tied up in invoices",
      },
    ],
  },
  {
    title: "Our Process",
    href: "/our-process",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Insights",
    href: "/insights",
  },
  {
    title: "Calculator",
    href: "/calculator",
  },
  {
    title: "Contact",
    href: "/contact",
  },
] as const;

// Footer Navigation
export const FOOTER_NAV = {
  services: [
    { title: "Bridging Finance", href: "/property-finance/bridging-finance" },
    { title: "Development Finance", href: "/property-finance/development-finance" },
    { title: "Buy-to-Let", href: "/property-finance/buy-to-let" },
    { title: "Asset Finance", href: "/business-finance/asset-finance" },
    { title: "Invoice Finance", href: "/business-finance/invoice-finance" },
  ],
  company: [
    { title: "About Us", href: "/about" },
    { title: "Our Process", href: "/our-process" },
    { title: "Insights", href: "/insights" },
    { title: "Contact", href: "/contact" },
  ],
  legal: [
    { title: "Privacy Policy", href: "/privacy-policy" },
    { title: "Terms & Conditions", href: "/terms" },
    { title: "Complaints Procedure", href: "/complaints" },
  ],
} as const;

// USP Content
export const USPS = [
  {
    title: "Speed",
    description: "Indicative terms within 24 hours. Completion in as little as 48 hours for bridging finance.",
    icon: "clock",
  },
  {
    title: "Expertise",
    description: "Decades of combined experience in commercial and property finance.",
    icon: "award",
  },
  {
    title: "Whole of Market",
    description: "Access to 100+ lenders ensuring competitive rates and flexible terms.",
    icon: "building",
  },
  {
    title: "Integrity",
    description: "FCA regulated with transparent fees and no hidden costs.",
    icon: "shield",
  },
] as const;

// Process Steps
export const LOAN_PROCESS_STEPS = [
  {
    number: 1,
    title: "Initial Discussion",
    description: "Tell us about your project and funding requirements. We'll assess the best options for you.",
  },
  {
    number: 2,
    title: "Indicative Terms",
    description: "Receive indicative terms from suitable lenders within 24 hours.",
  },
  {
    number: 3,
    title: "Application",
    description: "We prepare and submit your full application with supporting documentation.",
  },
  {
    number: 4,
    title: "Valuation",
    description: "The lender instructs a valuation of the property or asset.",
  },
  {
    number: 5,
    title: "Underwriting",
    description: "Full underwriting and credit approval process.",
  },
  {
    number: 6,
    title: "Legal Process",
    description: "Solicitors complete due diligence and prepare legal documentation.",
  },
  {
    number: 7,
    title: "Completion",
    description: "Funds released and your finance is in place.",
  },
] as const;

// Finance Types for forms
export const FINANCE_TYPES = [
  { value: "bridging", label: "Bridging Finance" },
  { value: "development", label: "Development Finance" },
  { value: "btl", label: "Buy-to-Let" },
  { value: "asset", label: "Asset Finance" },
  { value: "invoice", label: "Invoice Finance" },
  { value: "general", label: "Other / General Enquiry" },
] as const;

// SEO defaults
export const SEO_DEFAULTS = {
  siteName: "Aegis Finance",
  defaultTitle: "Commercial Finance Brokers | Property & Business Finance",
  defaultDescription:
    "Expert commercial finance brokers specialising in bridging loans, development finance, buy-to-let mortgages, and business finance. FCA regulated. Indicative terms in 24 hours.",
  twitterHandle: "@aegisfinance",
} as const;
