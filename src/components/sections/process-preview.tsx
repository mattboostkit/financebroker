"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MessageSquare, FileCheck, Banknote, PartyPopper } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    number: 1,
    icon: MessageSquare,
    title: "Discuss",
    description: "Tell us about your requirements",
  },
  {
    number: 2,
    icon: FileCheck,
    title: "Terms",
    description: "Receive indicative terms in 24hrs",
  },
  {
    number: 3,
    icon: Banknote,
    title: "Apply",
    description: "We manage the full application",
  },
  {
    number: 4,
    icon: PartyPopper,
    title: "Complete",
    description: "Funds released to you",
  },
];

export function ProcessPreview() {
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
            Simple, Streamlined Process
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From initial enquiry to funds in your account, we handle every step
            to make securing finance as smooth as possible.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2" />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative text-center"
                >
                  {/* Step Circle */}
                  <div className="relative z-10 mx-auto mb-4">
                    <div className="h-20 w-20 mx-auto rounded-full bg-primary flex items-center justify-center text-primary-foreground shadow-lg">
                      <Icon className="h-8 w-8" />
                    </div>
                    <span className="absolute -top-2 -right-2 h-8 w-8 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center font-bold text-sm">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button asChild size="lg">
            <Link href="/our-process">
              View Full Process
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
