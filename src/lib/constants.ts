// Company Information
// ⚠️ CRITICAL: UPDATE BEFORE LAUNCH
// These are placeholder values that MUST be replaced with real company details
export const COMPANY_INFO = {
  name: "Aegis Finance",
  tagline: "Commercial Finance Specialists",
  phone: "0204 634 7364",
  email: "enquiries@aegisfinance.co.uk",
  address: {
    line1: "6th Floor",
    line2: "Lombard Street",
    city: "London",
    postcode: "EC3V 9BQ",
  },
  // FCA Compliance - MUST be updated with real details
  fca: {
    firmName: "Aegis Finance",
    firmReferenceNumber: "XXXXXX", // ⚠️ CRITICAL: AR FRN must be provided
    principalFirm: "White Rose Finance Group Ltd",
    principalFRN: "630772", // ✅ Confirmed correct
  },
  ico: {
    registrationNumber: "XXXXXXXX", // ⚠️ CRITICAL: ICO registration number required
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
  // {
  //   title: "Case Studies",
  //   href: "/case-studies",
  // },
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
    // { title: "Case Studies", href: "/case-studies" },
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

// Company Stats
export const STATS = {
  established: "2024",
  lenders: "100+",
  arranged: "£50M+",
  turnaround: "24hrs",
} as const;

// Case Studies
export const CASE_STUDIES = [
  {
    slug: "warehouse-conversion-east-london",
    title: "Victorian Warehouse Conversion",
    financeType: "Development Finance",
    amount: "£2.5M",
    location: "East London",
    duration: "18 months",
    summary:
      "Transformed a disused Victorian warehouse into 12 luxury apartments. We secured development finance with 85% LTC and staged drawdowns aligned to the build programme.",
    challenge:
      "The client needed funding for a complex conversion project with listed building considerations. Traditional lenders were hesitant due to the heritage constraints.",
    solution:
      "We approached specialist development lenders familiar with heritage projects and secured competitive terms with flexible drawdown arrangements.",
    result:
      "All 12 units sold off-plan before completion, generating a 25% profit on GDV for our client.",
  },
  {
    slug: "auction-purchase-manchester",
    title: "Auction Purchase Rescue",
    financeType: "Bridging Finance",
    amount: "£850K",
    location: "Manchester",
    duration: "28 days",
    summary:
      "Secured bridging finance in just 5 days for an investor who won an auction lot but had their original funding fall through.",
    challenge:
      "The client had won an auction property at £850,000 but their original lender withdrew at the last minute, leaving just 5 working days to complete.",
    solution:
      "We mobilised our lender network immediately and secured terms within 24 hours. The valuation was fast-tracked and legal work completed in parallel.",
    result:
      "Completion achieved with 2 days to spare. The client has since refurbished and refinanced onto a BTL mortgage.",
  },
  {
    slug: "btl-portfolio-expansion",
    title: "Portfolio Landlord Expansion",
    financeType: "Buy-to-Let",
    amount: "£1.8M",
    location: "Birmingham",
    duration: "6 weeks",
    summary:
      "Helped a portfolio landlord acquire 6 properties across Birmingham using SPV structures for tax efficiency.",
    challenge:
      "The client owned 15 properties personally and wanted to expand their portfolio but was hitting rate and affordability constraints with mainstream lenders.",
    solution:
      "We structured the new acquisitions through limited company SPVs and found specialist portfolio lenders comfortable with the client's scale.",
    result:
      "Six properties acquired generating £9,500 per month in rental income with improved tax efficiency.",
  },
  {
    slug: "invoice-finance-manufacturing",
    title: "Manufacturing Growth Funding",
    financeType: "Invoice Finance",
    amount: "£500K",
    location: "West Midlands",
    duration: "Ongoing",
    summary:
      "Provided invoice finance facility to a growing manufacturing business struggling with cash flow due to 60-day payment terms.",
    challenge:
      "A successful manufacturer was winning larger contracts but the extended payment terms were straining working capital and limiting growth.",
    solution:
      "We arranged a confidential invoice finance facility releasing 85% of invoice values within 24 hours of issue.",
    result:
      "The business has doubled turnover in 12 months while maintaining healthy cash reserves and taking on larger contracts.",
  },
] as const;
