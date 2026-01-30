import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Building, Home, Landmark } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ServiceHero } from "@/components/sections/service-hero";
import { CTASection } from "@/components/sections/cta-section";

export const metadata: Metadata = {
  title: "Property Finance | Bridging, Development & BTL",
  description:
    "Expert property finance solutions including bridging loans, development finance, and buy-to-let mortgages. Fast approvals, competitive rates, whole of market access.",
  alternates: {
    canonical: '/property-finance',
  },
};

const services = [
  {
    icon: Landmark,
    title: "Bridging Finance",
    description:
      "Short-term property finance for purchases, refurbishments, and auction properties. Completions in as little as 48 hours.",
    href: "/property-finance/bridging-finance",
    features: [
      "From 0.44% per month",
      "Up to 75% LTV",
      "48-hour completion available",
      "First and second charge",
    ],
  },
  {
    icon: Building,
    title: "Development Finance",
    description:
      "Funding for residential and commercial development projects. From ground-up builds to heavy refurbishments.",
    href: "/property-finance/development-finance",
    features: [
      "Up to 70% LTGDV",
      "Staged drawdowns",
      "Residential & commercial",
      "First-time developers welcome",
    ],
  },
  {
    icon: Home,
    title: "Buy-to-Let",
    description:
      "Unregulated BTL mortgages for landlords and investors. Individual names, limited companies, and SPVs.",
    href: "/property-finance/buy-to-let",
    features: [
      "From 4.5% interest",
      "Up to 80% LTV",
      "Limited company & SPV",
      "Portfolio landlords",
    ],
  },
];

export default function PropertyFinancePage() {
  return (
    <>
      <ServiceHero
        title="Property Finance"
        subtitle="Unlock Your Property Potential"
        description="Whether you're purchasing at auction, developing a site, or expanding your portfolio, we have access to over 100 specialist lenders to find the right funding for your project."
        features={["Fast Approvals", "Competitive Rates", "Whole of Market"]}
      />

      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Our Property Finance Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From quick bridging facilities to complex development funding, we
              arrange finance for every stage of your property journey.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Card key={service.title} className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="h-12 w-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-secondary" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                          <div className="h-1.5 w-1.5 rounded-full bg-secondary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button asChild className="w-full">
                      <Link href={service.href}>
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
