"use client";

import { FileText, TrendingUp, Shield, Clock, Users, RefreshCw } from "lucide-react";
import { ServiceHero } from "@/components/sections/service-hero";
import { ServiceFeatures } from "@/components/sections/service-features";
import { ServiceDetails } from "@/components/sections/service-details";
import { FAQs } from "@/components/sections/faqs";
import { CTASection } from "@/components/sections/cta-section";

const features = [
  {
    icon: TrendingUp,
    title: "Up to 90% Advance",
    description:
      "Receive up to 90% of your invoice value within 24 hours of raising an invoice. The balance (less fees) when your customer pays.",
  },
  {
    icon: Clock,
    title: "Improved Cash Flow",
    description:
      "Stop waiting 30, 60, or 90 days for payment. Access cash as you invoice, not when customers finally pay.",
  },
  {
    icon: Shield,
    title: "Confidential Options",
    description:
      "Invoice discounting allows you to manage credit control yourself. Your customers need not know you use finance.",
  },
  {
    icon: Users,
    title: "Credit Control Support",
    description:
      "With factoring, the funder manages credit control and collections, freeing your team for other work.",
  },
  {
    icon: RefreshCw,
    title: "Grows With You",
    description:
      "Unlike fixed loans, your facility grows automatically as your sales increase. No need to renegotiate.",
  },
  {
    icon: FileText,
    title: "Selective Options",
    description:
      "Don't want whole-ledger finance? Selective invoice finance lets you choose which invoices to fund.",
  },
];

const details = [
  { label: "Advance Rate", value: "Up to 90%" },
  { label: "Funding Speed", value: "Within 24 hours" },
  { label: "Minimum Turnover", value: "From £100,000 pa" },
  { label: "Contract Length", value: "12-36 months" },
  { label: "Discount Charge", value: "From 0.5% pm" },
  { label: "Service Fee", value: "0.2% - 1.5%" },
];

const faqs = [
  {
    question: "What's the difference between factoring and invoice discounting?",
    answer:
      "With factoring, the finance company manages credit control and collects payment from your customers. With invoice discounting, you retain control of credit management and customer relationships - customers may not know you're using finance.",
  },
  {
    question: "How much can I borrow against my invoices?",
    answer:
      "Typically 70-90% of the invoice value is advanced immediately, with the balance (less fees) paid when your customer settles. The exact percentage depends on your sector, customer quality, and the funder's assessment.",
  },
  {
    question: "Will my customers know I'm using invoice finance?",
    answer:
      "With factoring, yes - the funder contacts customers to collect payment. With confidential invoice discounting, no - you continue to manage credit control and payments go to a trust account you control.",
  },
  {
    question: "What happens if a customer doesn't pay?",
    answer:
      "With recourse facilities, you're responsible if customers default. With non-recourse (bad debt protection), the funder absorbs credit losses - useful for peace of mind but typically more expensive.",
  },
  {
    question: "Can start-ups use invoice finance?",
    answer:
      "Some funders work with start-ups, though most prefer businesses with a trading history. The key requirements are B2B invoicing and creditworthy customers. We can help find funders who support newer businesses.",
  },
  {
    question: "What's selective invoice finance?",
    answer:
      "Selective invoice finance lets you choose which invoices to fund, rather than financing your whole sales ledger. It's more flexible but typically more expensive per invoice. Good for occasional cash flow gaps or specific large invoices.",
  },
];

export default function InvoiceFinancePage() {
  return (
    <>
      <ServiceHero
        title="Invoice Finance"
        subtitle="Unlock Your Outstanding Invoices"
        description="Stop waiting for customers to pay. Invoice finance releases cash tied up in your sales ledger, providing working capital that grows with your business."
        features={["Up to 90% Advance", "Funding Within 24hrs", "Confidential Options"]}
      />

      <ServiceFeatures
        title="Why Choose Our Invoice Finance"
        subtitle="We match you with the right invoice finance provider for your business sector and needs."
        features={features}
      />

      <ServiceDetails
        title="Invoice Finance Terms"
        description="Costs depend on your sector, customer quality, and chosen facility type. These are typical parameters available."
        details={details}
      />

      <section className="section-padding bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
              Invoice Finance Options
            </h2>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="bg-card rounded-lg p-6 shadow-sm">
                <h3 className="font-semibold text-lg mb-2">Factoring</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Full-service solution including credit control and collections.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-secondary" />
                    Funder manages collections
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-secondary" />
                    Credit protection available
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-secondary" />
                    Frees up your team
                  </li>
                </ul>
              </div>
              <div className="bg-card rounded-lg p-6 shadow-sm">
                <h3 className="font-semibold text-lg mb-2">Invoice Discounting</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Confidential funding while you retain customer relationships.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-secondary" />
                    Confidential - customers unaware
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-secondary" />
                    You control credit management
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-secondary" />
                    Maintain customer relationships
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQs faqs={faqs} />

      <CTASection />
    </>
  );
}
