import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Package, FileText } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ServiceHero } from "@/components/sections/service-hero";
import { CTASection } from "@/components/sections/cta-section";

export const metadata: Metadata = {
  title: "Business Finance | Asset Finance & Invoice Finance",
  description:
    "Business finance solutions including asset finance, equipment leasing, invoice factoring, and working capital. Fuel your business growth with flexible funding.",
  alternates: {
    canonical: '/business-finance',
  },
};

const services = [
  {
    icon: Package,
    title: "Asset Finance",
    description:
      "Equipment leasing, hire purchase, and refinance. Acquire the assets your business needs without depleting cash reserves.",
    href: "/business-finance/asset-finance",
    features: [
      "Hire purchase & leasing",
      "Sale and leaseback",
      "Refinance existing assets",
      "Tax-efficient options",
    ],
  },
  {
    icon: FileText,
    title: "Invoice Finance",
    description:
      "Release cash tied up in unpaid invoices. Improve cash flow and fund growth without taking on traditional debt.",
    href: "/business-finance/invoice-finance",
    features: [
      "Invoice factoring",
      "Invoice discounting",
      "Selective invoice finance",
      "Confidential facilities",
    ],
  },
];

export default function BusinessFinancePage() {
  return (
    <>
      <ServiceHero
        title="Business Finance"
        subtitle="Fuel Your Business Growth"
        description="From equipment acquisition to working capital, we arrange flexible business finance solutions that support your growth objectives without putting unnecessary pressure on cash flow."
        features={["Flexible Terms", "Quick Decisions", "Competitive Rates"]}
      />

      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Our Business Finance Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Whether you need to invest in new equipment or improve cash flow,
              we have the funding solutions to support your business.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
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

      <section className="section-padding bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
              Why Businesses Choose Us
            </h2>
            <div className="grid gap-8 sm:grid-cols-3 text-left">
              <div>
                <h3 className="font-semibold text-lg mb-2">Quick Decisions</h3>
                <p className="text-muted-foreground">
                  We understand business timing. Our lender relationships enable
                  fast credit decisions and quick funding.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Flexible Solutions</h3>
                <p className="text-muted-foreground">
                  No one-size-fits-all approach. We structure facilities to match
                  your business cycle and cash flow.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Expert Guidance</h3>
                <p className="text-muted-foreground">
                  We explain options clearly and help you choose the most
                  cost-effective solution for your needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
