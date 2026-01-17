"use client";

import { motion } from "framer-motion";
import {
  MessageSquare,
  Search,
  FileText,
  Home,
  CheckCircle,
  FileCheck,
  PartyPopper,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { CTASection } from "@/components/sections/cta-section";

const processSteps = [
  {
    number: 1,
    icon: MessageSquare,
    title: "Initial Discussion",
    description:
      "We start with a conversation to understand your requirements, timescales, and objectives. This helps us identify the best funding solutions for your situation.",
    details: [
      "Discuss your project or purchase",
      "Understand your financial position",
      "Identify suitable finance options",
      "Explain the process and timescales",
    ],
    timeframe: "Same day",
  },
  {
    number: 2,
    icon: Search,
    title: "Market Search & Indicative Terms",
    description:
      "We search our panel of 100+ lenders to find the best options for your case. You'll receive indicative terms from suitable lenders within 24 hours.",
    details: [
      "Search across our lender panel",
      "Compare rates and terms",
      "Present best options to you",
      "Explain pros and cons of each",
    ],
    timeframe: "24 hours",
  },
  {
    number: 3,
    icon: FileText,
    title: "Full Application",
    description:
      "Once you've chosen a lender, we prepare and submit your full application with all supporting documentation. We handle the paperwork so you don't have to.",
    details: [
      "Gather required documentation",
      "Prepare comprehensive application",
      "Submit to chosen lender",
      "Chase and follow up",
    ],
    timeframe: "1-3 days",
  },
  {
    number: 4,
    icon: Home,
    title: "Valuation",
    description:
      "The lender instructs a valuation of the property or assets. We help coordinate access and ensure the valuer has all required information.",
    details: [
      "Valuation instruction",
      "Coordinate access to property",
      "Review valuation report",
      "Address any queries",
    ],
    timeframe: "3-7 days",
  },
  {
    number: 5,
    icon: CheckCircle,
    title: "Underwriting & Credit Approval",
    description:
      "The lender's underwriters review your application in detail. We stay in close contact to answer questions and provide additional information as needed.",
    details: [
      "Full underwriting review",
      "Answer underwriter queries",
      "Provide additional information",
      "Obtain credit committee approval",
    ],
    timeframe: "2-5 days",
  },
  {
    number: 6,
    icon: FileCheck,
    title: "Legal Process",
    description:
      "Solicitors complete due diligence and prepare legal documentation. We keep all parties aligned to prevent delays.",
    details: [
      "Solicitors appointed",
      "Due diligence completed",
      "Legal documentation prepared",
      "Contracts exchanged",
    ],
    timeframe: "5-14 days",
  },
  {
    number: 7,
    icon: PartyPopper,
    title: "Completion",
    description:
      "Funds are released and your finance is in place. We remain available for any questions and to help with future funding needs.",
    details: [
      "Final checks completed",
      "Funds released",
      "Finance in place",
      "Ongoing support available",
    ],
    timeframe: "Completion day",
  },
];

export default function OurProcessPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary via-primary to-[#0f2341] text-primary-foreground py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
              Our Process
            </h1>
            <p className="text-lg text-primary-foreground/80">
              From initial enquiry to completion, we guide you through every step
              of your finance journey. Here&apos;s what to expect when you work
              with us.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative pb-12 last:pb-0"
                >
                  {/* Connection Line */}
                  {index < processSteps.length - 1 && (
                    <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-border" />
                  )}

                  <div className="flex gap-6">
                    {/* Step Number */}
                    <div className="relative z-10 flex-shrink-0">
                      <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold shadow-lg">
                        {step.number}
                      </div>
                    </div>

                    {/* Content */}
                    <Card className="flex-1">
                      <CardContent className="pt-6">
                        <div className="flex items-center gap-3 mb-3">
                          <Icon className="h-5 w-5 text-secondary" />
                          <h2 className="text-xl font-semibold">{step.title}</h2>
                          <span className="ml-auto text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">
                            {step.timeframe}
                          </span>
                        </div>
                        <p className="text-muted-foreground mb-4">
                          {step.description}
                        </p>
                        <ul className="grid gap-2 sm:grid-cols-2">
                          {step.details.map((detail) => (
                            <li
                              key={detail}
                              className="flex items-center gap-2 text-sm"
                            >
                              <div className="h-1.5 w-1.5 rounded-full bg-secondary" />
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline Summary */}
      <section className="section-padding bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
              Typical Timescales
            </h2>
            <p className="text-muted-foreground mb-8">
              Every case is different, but here are typical timescales for
              different finance types.
            </p>
            <div className="grid gap-6 sm:grid-cols-3">
              <Card>
                <CardContent className="pt-6 text-center">
                  <p className="text-3xl font-bold text-secondary mb-2">48hrs - 2wks</p>
                  <p className="font-medium">Bridging Finance</p>
                  <p className="text-sm text-muted-foreground">
                    Fast completions for urgent cases
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <p className="text-3xl font-bold text-secondary mb-2">2 - 4 weeks</p>
                  <p className="font-medium">Development Finance</p>
                  <p className="text-sm text-muted-foreground">
                    From application to first drawdown
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <p className="text-3xl font-bold text-secondary mb-2">3 - 6 weeks</p>
                  <p className="font-medium">Buy-to-Let</p>
                  <p className="text-sm text-muted-foreground">
                    Standard BTL mortgage timeline
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Documents Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6 text-center">
              Documents You&apos;ll Need
            </h2>
            <p className="text-muted-foreground text-center mb-8">
              Requirements vary by finance type, but here are commonly requested
              documents.
            </p>
            <div className="grid gap-6 sm:grid-cols-2">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-3">Property Finance</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-secondary" />
                      Property details and valuation
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-secondary" />
                      ID and proof of address
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-secondary" />
                      Bank statements (3-6 months)
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-secondary" />
                      Exit strategy evidence
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-secondary" />
                      Company accounts (if applicable)
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-3">Business Finance</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-secondary" />
                      Company accounts (2-3 years)
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-secondary" />
                      Management accounts
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-secondary" />
                      Bank statements (3-6 months)
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-secondary" />
                      Aged debtor/creditor lists
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-secondary" />
                      Asset schedules
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
