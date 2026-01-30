"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Phone, ArrowRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { COMPANY_INFO } from "@/lib/constants";

export function CTASection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-secondary via-secondary to-[#0D3B2E] text-secondary-foreground py-16 md:py-24">
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
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={shouldReduceMotion ? { duration: 0 } : undefined}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm backdrop-blur-sm mb-6">
            <Clock className="h-4 w-4" />
            <span>Indicative terms in 24 hours</span>
          </div>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl mb-6">
            Ready to Discuss Your Finance Needs?
          </h2>

          <p className="text-lg text-secondary-foreground/80 mb-8 max-w-2xl mx-auto">
            Whether you need bridging finance for a quick purchase, development
            funding for your next project, or business finance to fuel growth,
            we&apos;re here to help.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-secondary hover:bg-white/90"
            >
              <Link href="/contact">
                Get a Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline-green"
            >
              <a href={`tel:${COMPANY_INFO.phone.replace(/\s/g, "")}`}>
                <Phone className="mr-2 h-5 w-5" />
                {COMPANY_INFO.phone}
              </a>
            </Button>
          </div>

          <p className="text-sm text-secondary-foreground/60 mt-8">
            No obligation consultation. Whole of market access. Expert guidance.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
