"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Building2, Briefcase, Calculator } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Building2,
    title: "Property Finance",
    description:
      "From bridging loans completed in 48 hours to complex development funding. We arrange finance for residential, commercial, and mixed-use properties.",
    href: "/property-finance",
    features: ["Bridging Finance", "Development Finance", "Buy-to-Let"],
  },
  {
    icon: Briefcase,
    title: "Business Finance",
    description:
      "Unlock working capital and fuel growth. Asset finance for equipment, invoice finance to release cash flow, and bespoke business funding.",
    href: "/business-finance",
    features: ["Asset Finance", "Invoice Finance", "Working Capital"],
  },
  {
    icon: Calculator,
    title: "Finance Calculators",
    description:
      "Get instant indicative figures for your funding requirements. Calculate LTV, bridging costs, and development finance in seconds.",
    href: "/calculator",
    features: ["Bridging Calculator", "LTV Calculator", "Development Calculator"],
  },
];

export function ServicesOverview() {
  return (
    <section className="section-padding">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Our Finance Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Whether you&apos;re a property developer, investor, or business owner,
            we have the expertise and lender relationships to secure the right funding.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full card-interactive group border-0 shadow-md">
                  <CardHeader>
                    <div className="h-12 w-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors">
                      <Icon className="h-6 w-6 text-secondary group-hover:text-secondary-foreground" />
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
                    <Button asChild variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Link href={service.href}>
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
