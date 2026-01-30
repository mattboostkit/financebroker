"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Clock, Shield, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-[#072820] text-primary-foreground">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container relative mx-auto px-4 py-20 md:py-28 lg:py-36">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.6 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm backdrop-blur-sm">
              <Shield className="h-4 w-4 text-accent" />
              <span>FCA Regulated | NACFB & FIBA Member</span>
            </div>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Commercial Finance{" "}
              <span className="text-accent">Solutions</span> That Work for You
            </h1>

            <p className="text-lg text-primary-foreground/80 max-w-xl">
              Expert brokers specialising in property and business finance.
              Access 100+ lenders with indicative terms in 24 hours.
            </p>

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
                variant="outline-light"
              >
                <Link href="/calculator">Try Our Calculator</Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-primary-foreground/20">
              <div className="text-center">
                <p className="text-3xl font-bold text-accent">24&nbsp;hrs</p>
                <p className="text-sm text-primary-foreground/70">Indicative Terms</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-accent">100+</p>
                <p className="text-sm text-primary-foreground/70">Lending Partners</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-accent">£50M+</p>
                <p className="text-sm text-primary-foreground/70">Arranged</p>
              </div>
            </div>
          </motion.div>

          {/* Feature Cards */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.6, delay: 0.2 }}
            className="grid gap-4"
          >
            <div className="rounded-xl bg-white/10 p-6 backdrop-blur-sm hover:bg-white/15 transition-colors">
              <Building2 className="h-8 w-8 text-accent mb-4" />
              <h3 className="text-xl font-semibold mb-2">Property Finance</h3>
              <p className="text-primary-foreground/70 mb-4">
                Bridging loans, development finance, and buy-to-let mortgages for
                property investors and developers.
              </p>
              <Link
                href="/property-finance"
                className="inline-flex items-center text-accent hover:text-accent/80 transition-colors"
              >
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            <div className="rounded-xl bg-white/10 p-6 backdrop-blur-sm hover:bg-white/15 transition-colors">
              <Clock className="h-8 w-8 text-accent mb-4" />
              <h3 className="text-xl font-semibold mb-2">Business Finance</h3>
              <p className="text-primary-foreground/70 mb-4">
                Asset finance, invoice factoring, and working capital solutions
                to fuel your business growth.
              </p>
              <Link
                href="/business-finance"
                className="inline-flex items-center text-accent hover:text-accent/80 transition-colors"
              >
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
