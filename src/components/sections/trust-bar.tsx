"use client";

import { motion } from "framer-motion";
import { Shield, Award, Building, CheckCircle } from "lucide-react";

const trustItems = [
  {
    icon: Shield,
    label: "FCA Regulated",
  },
  {
    icon: Award,
    label: "NACFB Member",
  },
  {
    icon: Building,
    label: "FIBA Member",
  },
  {
    icon: CheckCircle,
    label: "ICO Registered",
  },
];

export function TrustBar() {
  return (
    <section className="bg-muted py-6 border-y">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-8 md:gap-16"
        >
          {trustItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-2 text-muted-foreground"
              >
                <Icon className="h-5 w-5 text-secondary" />
                <span className="font-medium">{item.label}</span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
