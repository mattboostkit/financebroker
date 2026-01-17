"use client";

import { Home, Building2, Users, Calculator, FileCheck, Shield } from "lucide-react";
import { ServiceHero } from "@/components/sections/service-hero";
import { ServiceFeatures } from "@/components/sections/service-features";
import { ServiceDetails } from "@/components/sections/service-details";
import { FAQs } from "@/components/sections/faqs";
import { CTASection } from "@/components/sections/cta-section";

const features = [
  {
    icon: Building2,
    title: "Limited Company & SPV",
    description:
      "Specialist in company purchases for tax efficiency. We understand SPV structures and work with lenders who embrace them.",
  },
  {
    icon: Users,
    title: "Portfolio Landlords",
    description:
      "Experience with complex portfolio applications. We navigate the additional requirements for 4+ property portfolios.",
  },
  {
    icon: Home,
    title: "All Property Types",
    description:
      "Standard BTL, HMOs, MUBs, holiday lets, and short-term rentals all considered.",
  },
  {
    icon: Calculator,
    title: "Rental Coverage Stress Test",
    description:
      "We model your rental coverage at different stress rates to find lenders who work for your situation.",
  },
  {
    icon: FileCheck,
    title: "Complex Income",
    description:
      "Self-employed, contractors, foreign nationals, and complex income sources all considered.",
  },
  {
    icon: Shield,
    title: "Unregulated Specialists",
    description:
      "As FCA regulated brokers, we specialise in unregulated BTL where the property isn't your home.",
  },
];

const details = [
  { label: "Loan Amount", value: "£50,000 - £10m+" },
  { label: "LTV", value: "Up to 80%" },
  { label: "Term", value: "5 - 40 years" },
  { label: "Interest Rates", value: "From 4.5%" },
  { label: "ICR Requirement", value: "125% - 145%" },
  { label: "Property Types", value: "BTL, HMO, MUB" },
];

const faqs = [
  {
    question: "What is unregulated buy-to-let?",
    answer:
      "An unregulated BTL mortgage is one where the borrower or their close family will not live in the property. The mortgage isn't regulated by the FCA, giving lenders more flexibility in their criteria and terms.",
  },
  {
    question: "Should I buy in personal name or limited company?",
    answer:
      "This depends on your tax situation, existing portfolio, and future plans. Limited company ownership can offer tax advantages for higher-rate taxpayers, but there are additional costs and considerations. We recommend speaking with a tax adviser.",
  },
  {
    question: "What is a portfolio landlord?",
    answer:
      "A portfolio landlord is someone who owns 4 or more mortgaged buy-to-let properties. Lenders apply additional scrutiny to portfolio applications, reviewing the entire portfolio's performance and stress-testing at higher rates.",
  },
  {
    question: "Can I get a BTL mortgage for an HMO?",
    answer:
      "Yes, many lenders offer specialist HMO mortgages. They typically require the property to be licensed where required, and may apply different rental calculations based on room-by-room rental potential.",
  },
  {
    question: "What rental coverage do lenders require?",
    answer:
      "Most lenders require the rent to cover 125-145% of the mortgage payment at a stress rate (typically 5-5.5%). We calculate this for you and match you with lenders whose criteria fit your rental income.",
  },
  {
    question: "Can foreign nationals get BTL mortgages?",
    answer:
      "Yes, several lenders consider foreign nationals and expats, though terms may vary. We work with specialist lenders who understand international income and non-UK residents.",
  },
];

export default function BuyToLetPage() {
  return (
    <>
      <ServiceHero
        title="Buy-to-Let Mortgages"
        subtitle="Finance for Landlords & Investors"
        description="Specialist unregulated buy-to-let mortgages for landlords and property investors. Whether you're buying your first rental or expanding a portfolio, we find the right mortgage for your investment strategy."
        features={["Up to 80% LTV", "Limited Company & SPV", "Portfolio Specialists"]}
      />

      <ServiceFeatures
        title="Why Choose Our BTL Service"
        subtitle="We specialise in complex BTL cases that high street banks struggle with."
        features={features}
      />

      <ServiceDetails
        title="Buy-to-Let Mortgage Terms"
        description="BTL rates and criteria vary significantly between lenders. We search across our panel to find the best terms for your specific situation."
        details={details}
      />

      <section className="section-padding bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
              BTL Scenarios We Handle
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "First-time landlords",
                "Portfolio expansion",
                "Limited company purchases",
                "SPV structures",
                "HMO & multi-unit",
                "Holiday lets",
                "Expat & foreign national",
                "Self-employed landlords",
                "Complex income",
                "Remortgage & product transfer",
              ].map((scenario) => (
                <div key={scenario} className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-secondary" />
                  <span>{scenario}</span>
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
