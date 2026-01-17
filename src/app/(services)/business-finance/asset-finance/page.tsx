"use client";

import { Package, RefreshCw, Calculator, Clock, FileCheck, Shield } from "lucide-react";
import { ServiceHero } from "@/components/sections/service-hero";
import { ServiceFeatures } from "@/components/sections/service-features";
import { ServiceDetails } from "@/components/sections/service-details";
import { FAQs } from "@/components/sections/faqs";
import { CTASection } from "@/components/sections/cta-section";

const features = [
  {
    icon: Package,
    title: "All Asset Types",
    description:
      "Vehicles, plant, machinery, IT equipment, medical equipment, and more. We finance assets across all industries.",
  },
  {
    icon: RefreshCw,
    title: "Sale & Leaseback",
    description:
      "Release capital from assets you already own. Turn equipment equity into working capital.",
  },
  {
    icon: Calculator,
    title: "Tax-Efficient Options",
    description:
      "Structure your facility for optimal tax treatment. Capital allowances, VAT, and P&L considerations.",
  },
  {
    icon: Clock,
    title: "Quick Decisions",
    description:
      "Same-day decisions on straightforward cases. We understand the urgency of business opportunities.",
  },
  {
    icon: FileCheck,
    title: "Flexible Terms",
    description:
      "1-7 year terms with fixed or seasonal payment options. Match payments to your business cycle.",
  },
  {
    icon: Shield,
    title: "New & Used Assets",
    description:
      "Finance new equipment or quality used assets. We also support refinancing of existing equipment.",
  },
];

const details = [
  { label: "Finance Amount", value: "£5,000 - £10m+" },
  { label: "Term", value: "1 - 7 years" },
  { label: "Deposit", value: "0% - 20%" },
  { label: "Asset Age", value: "New or up to 10 years" },
  { label: "Decision Time", value: "Same day possible" },
  { label: "Payment Options", value: "Monthly, quarterly, seasonal" },
];

const faqs = [
  {
    question: "What's the difference between hire purchase and leasing?",
    answer:
      "With hire purchase, you own the asset at the end of the term after paying a small option-to-purchase fee. With leasing, the finance company retains ownership, and you may return, upgrade, or purchase the asset at the end. Each has different tax and accounting treatments.",
  },
  {
    question: "What assets can be financed?",
    answer:
      "Almost any business asset with a resale value: vehicles, plant, machinery, IT equipment, medical equipment, catering equipment, construction equipment, agricultural machinery, and more. Soft assets like software may also be included as part of a larger package.",
  },
  {
    question: "Can I finance used equipment?",
    answer:
      "Yes, we finance quality used assets up to around 10 years old, depending on the asset type. Terms may be shorter for older equipment. We can also refinance assets you already own through sale and leaseback.",
  },
  {
    question: "How does sale and leaseback work?",
    answer:
      "You sell assets you already own to a finance company and immediately lease them back. This releases the equity in your assets as working capital while you continue using them. The lease payments are typically tax-deductible.",
  },
  {
    question: "What are the tax benefits of asset finance?",
    answer:
      "Benefits depend on the structure: with hire purchase, you may claim capital allowances; with leasing, rentals are typically fully tax-deductible. VAT is spread across payments rather than paid upfront. We recommend consulting your accountant for specific advice.",
  },
  {
    question: "How quickly can I get a decision?",
    answer:
      "For straightforward cases under £50,000, we can often get same-day decisions. Larger or more complex facilities typically take 2-5 working days. Urgent cases can sometimes be expedited with the right lender.",
  },
];

export default function AssetFinancePage() {
  return (
    <>
      <ServiceHero
        title="Asset Finance"
        subtitle="Equip Your Business for Growth"
        description="Acquire the vehicles, plant, and equipment your business needs without depleting working capital. From hire purchase to leasing and sale and leaseback, we find the right structure for your needs."
        features={["All Asset Types", "Flexible Terms", "Quick Decisions"]}
      />

      <ServiceFeatures
        title="Why Choose Our Asset Finance"
        subtitle="We work with a wide panel of asset finance providers to find competitive terms for your business."
        features={features}
      />

      <ServiceDetails
        title="Asset Finance Terms"
        description="Terms vary based on asset type, business strength, and facility size. These are typical parameters across our lender panel."
        details={details}
      />

      <section className="section-padding bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
              Assets We Finance
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Commercial vehicles",
                "Plant & machinery",
                "Construction equipment",
                "IT & technology",
                "Medical equipment",
                "Catering equipment",
                "Agricultural machinery",
                "Office furniture & fit-out",
                "Manufacturing equipment",
                "Yellow goods",
              ].map((asset) => (
                <div key={asset} className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-secondary" />
                  <span>{asset}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FAQs faqs={faqs} />

      <CTASection />
    </>
  );
}
