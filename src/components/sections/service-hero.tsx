"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { COMPANY_INFO } from "@/lib/constants";

interface ServiceHeroProps {
  title: string;
  subtitle: string;
  description: string;
  features?: string[];
}

export function ServiceHero({
  title,
  subtitle,
  description,
  features,
}: ServiceHeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-[#0f2341] text-primary-foreground py-16 md:py-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container relative mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <p className="text-accent font-medium mb-2">{subtitle}</p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6">
            {title}
          </h1>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl">
            {description}
          </p>

          {features && features.length > 0 && (
            <div className="flex flex-wrap gap-3 mb-8">
              {features.map((feature) => (
                <span
                  key={feature}
                  className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-sm backdrop-blur-sm"
                >
                  {feature}
                </span>
              ))}
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              asChild
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground"
            >
              <Link href="/contact">
                Get a Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
            >
              <a href={`tel:${COMPANY_INFO.phone.replace(/\s/g, "")}`}>
                <Phone className="mr-2 h-5 w-5" />
                {COMPANY_INFO.phone}
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
