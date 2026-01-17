"use client";

import { motion } from "framer-motion";
import { Clock, Award, Building, Shield } from "lucide-react";
import { USPS } from "@/lib/constants";

const iconMap = {
  clock: Clock,
  award: Award,
  building: Building,
  shield: Shield,
};

export function USPSection() {
  return (
    <section className="section-padding bg-muted">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Why Choose Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We combine market expertise with personal service to deliver
            exceptional results for our clients.
          </p>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {USPS.map((usp, index) => {
            const Icon = iconMap[usp.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={usp.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="h-16 w-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                  <Icon className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{usp.title}</h3>
                <p className="text-muted-foreground">{usp.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
