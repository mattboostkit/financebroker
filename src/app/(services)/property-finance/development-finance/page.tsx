"use client";

import { Building, TrendingUp, Layers, Clock, Users, FileCheck } from "lucide-react";
import { ServiceHero } from "@/components/sections/service-hero";
import { ServiceFeatures } from "@/components/sections/service-features";
import { ServiceDetails } from "@/components/sections/service-details";
import { FAQs } from "@/components/sections/faqs";
import { CTASection } from "@/components/sections/cta-section";

const features = [
  {
    icon: TrendingUp,
    title: "Up to 70% LTGDV",
    description:
      "Borrow up to 70% of the Gross Development Value, maximising your leverage and returns.",
  },
  {
    icon: Layers,
    title: "Staged Drawdowns",
    description:
      "Release funds as your project progresses, reducing interest costs and improving cash flow.",
  },
  {
    icon: Building,
    title: "All Project Types",
    description:
      "Ground-up new builds, conversions, heavy refurbishments, and commercial developments.",
  },
  {
    icon: Users,
    title: "First-Time Developers",
    description:
      "We work with lenders who support new developers, especially those with construction experience.",
  },
  {
    icon: Clock,
    title: "Fast Decisions",
    description:
      "Indicative terms within 24 hours. Full approval and drawdown in as little as 2-4 weeks.",
  },
  {
    icon: FileCheck,
    title: "Expert Structuring",
    description:
      "We structure your facility to optimise costs and ensure smooth drawdowns throughout.",
  },
];

const details = [
  { label: "Loan Amount", value: "£150,000 - £50m+" },
  { label: "LTGDV", value: "Up to 70%" },
  { label: "LTC", value: "Up to 90%" },
  { label: "Term", value: "6 - 36 months" },
  { label: "Interest Rates", value: "From 7.5% pa" },
  { label: "Arrangement Fee", value: "1.5% - 2%" },
];

const faqs = [
  {
    question: "What is development finance?",
    answer:
      "Development finance is specialist funding for property development projects, including ground-up construction, conversions, and major refurbishments. It's structured with staged drawdowns aligned to construction milestones.",
  },
  {
    question: "How is development finance structured?",
    answer:
      "Development loans are typically structured with an initial drawdown for land purchase, followed by staged releases as construction progresses. A monitoring surveyor verifies work completion before each drawdown.",
  },
  {
    question: "Can first-time developers get funding?",
    answer:
      "Yes, many lenders support first-time developers, particularly those with relevant experience such as construction, project management, or property investment. A strong team and realistic project can secure funding.",
  },
  {
    question: "What's the difference between LTGDV and LTC?",
    answer:
      "LTGDV (Loan to Gross Development Value) is the loan as a percentage of the completed project value. LTC (Loan to Cost) is the loan as a percentage of total project costs. Lenders typically cap both, e.g., 70% LTGDV and 85% LTC.",
  },
  {
    question: "Do I need planning permission before applying?",
    answer:
      "Most lenders require at least outline planning permission before making an offer. Some will lend for sites with planning subject to conditions. Having full detailed permission strengthens your application.",
  },
  {
    question: "What documents do I need to apply?",
    answer:
      "Typically you'll need: project schedule and build costs, planning permission, architect's drawings, development appraisal, contractor details, your CV/experience, company accounts (if applicable), and bank statements.",
  },
];

export default function DevelopmentFinancePage() {
  return (
    <>
      <ServiceHero
        title="Development Finance"
        subtitle="Funding Your Property Projects"
        description="From single-unit conversions to multi-million pound developments, we arrange finance for property developers at every level. Access competitive rates from specialist development lenders."
        features={["Up to 70% LTGDV", "Staged Drawdowns", "First-Time Developers"]}
      />

      <ServiceFeatures
        title="Why Choose Our Development Finance"
        subtitle="We understand property development and work with lenders who share that understanding."
        features={features}
      />

      <ServiceDetails
        title="Development Finance Terms"
        description="Development finance is tailored to each project. These are typical terms available - your facility will be structured specifically for your development."
        details={details}
      />

      <section className="section-padding bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
              Projects We Fund
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Ground-up residential builds",
                "Commercial to residential conversion",
                "Office developments",
                "Permitted development schemes",
                "HMO conversions",
                "Student accommodation",
                "Care home developments",
                "Mixed-use schemes",
                "Industrial developments",
                "Retail developments",
              ].map((project) => (
                <div key={project} className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-secondary" />
                  <span>{project}</span>
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
