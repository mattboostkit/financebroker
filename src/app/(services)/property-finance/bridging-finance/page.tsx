"use client";

import { Clock, FileCheck, Home, Banknote, RefreshCw, Shield } from "lucide-react";
import { ServiceHero } from "@/components/sections/service-hero";
import { ServiceFeatures } from "@/components/sections/service-features";
import { ServiceDetails } from "@/components/sections/service-details";
import { FAQs } from "@/components/sections/faqs";
import { CTASection } from "@/components/sections/cta-section";

const features = [
  {
    icon: Clock,
    title: "48-Hour Completion",
    description:
      "When speed is essential, we can arrange completion in as little as 48 hours with selected lenders.",
  },
  {
    icon: Banknote,
    title: "Competitive Rates",
    description:
      "Access rates from 0.44% per month with our panel of specialist bridging lenders.",
  },
  {
    icon: Home,
    title: "All Property Types",
    description:
      "Residential, commercial, mixed-use, land, and development sites all considered.",
  },
  {
    icon: RefreshCw,
    title: "Flexible Exit",
    description:
      "Sale, refinance, or development completion. We ensure your exit strategy is solid.",
  },
  {
    icon: FileCheck,
    title: "Light Touch Underwriting",
    description:
      "Many lenders focus on the property and exit, not personal income or credit history.",
  },
  {
    icon: Shield,
    title: "Regulated Options",
    description:
      "Where required, we can arrange FCA-regulated bridging for owner-occupied properties.",
  },
];

const details = [
  { label: "Loan Amount", value: "£50,000 - £25m+" },
  { label: "LTV", value: "Up to 75%" },
  { label: "Term", value: "1 - 24 months" },
  { label: "Interest Rates", value: "From 0.44% pm" },
  { label: "Arrangement Fee", value: "1% - 2%" },
  { label: "Completion Time", value: "48 hours - 4 weeks" },
];

const faqs = [
  {
    question: "What is bridging finance?",
    answer:
      "Bridging finance is a short-term loan secured against property, typically used to 'bridge' a gap between purchasing a new property and selling an existing one, or to move quickly on auction purchases and refurbishment projects.",
  },
  {
    question: "How quickly can bridging finance complete?",
    answer:
      "With the right preparation and a straightforward case, some lenders can complete in 48 hours to 2 weeks. Most bridging loans complete within 2-4 weeks, significantly faster than traditional mortgages.",
  },
  {
    question: "What exit strategies are acceptable?",
    answer:
      "Common exit strategies include sale of the property, refinance onto a long-term mortgage, or completion of development. Lenders want to see a clear, realistic plan for repaying the loan.",
  },
  {
    question: "Can I get bridging finance with poor credit?",
    answer:
      "Yes, many bridging lenders focus primarily on the property value and exit strategy rather than credit history. We work with specialist lenders who consider adverse credit cases.",
  },
  {
    question: "What properties can be used as security?",
    answer:
      "Most property types are considered including residential, commercial, mixed-use, HMOs, development sites, and land. Some lenders also accept unusual properties and those requiring significant work.",
  },
  {
    question: "Do I need to prove income for bridging finance?",
    answer:
      "Not always. Unregulated bridging loans often require minimal income documentation, focusing instead on the property value and exit strategy. Regulated bridging for owner-occupied homes does require affordability assessment.",
  },
];

export default function BridgingFinancePage() {
  return (
    <>
      <ServiceHero
        title="Bridging Finance"
        subtitle="Fast, Flexible Property Funding"
        description="Short-term property finance designed for speed and flexibility. Whether you're purchasing at auction, funding a refurbishment, or breaking a property chain, bridging finance provides the solution."
        features={["48-Hour Completion", "Up to 75% LTV", "From 0.44% pm"]}
      />

      <ServiceFeatures
        title="Why Choose Our Bridging Finance"
        subtitle="We work with over 50 bridging lenders to find the best terms for your specific situation."
        features={features}
      />

      <ServiceDetails
        title="Bridging Finance Terms"
        description="Our bridging finance solutions are tailored to your needs. These are typical terms available through our lender panel - actual terms depend on your specific circumstances."
        details={details}
      />

      <section className="section-padding bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
              Common Uses for Bridging Finance
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Auction purchases",
                "Chain break",
                "Refurbishment projects",
                "Buying before selling",
                "Unmortgageable properties",
                "Business cash flow",
                "Development site acquisition",
                "Probate property purchase",
                "Tax bills and urgent needs",
                "Stop repossession",
              ].map((use) => (
                <div key={use} className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-secondary" />
                  <span>{use}</span>
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
