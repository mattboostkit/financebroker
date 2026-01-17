"use client";

import { motion } from "framer-motion";

interface DetailRow {
  label: string;
  value: string;
}

interface ServiceDetailsProps {
  title: string;
  description: string;
  details: DetailRow[];
}

export function ServiceDetails({ title, description, details }: ServiceDetailsProps) {
  return (
    <section className="section-padding bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              {title}
            </h2>
            <p className="text-lg text-muted-foreground mb-6">{description}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-xl shadow-lg overflow-hidden"
          >
            <div className="bg-primary text-primary-foreground px-6 py-4">
              <h3 className="font-semibold">Typical Terms</h3>
            </div>
            <div className="divide-y">
              {details.map((detail, index) => (
                <div
                  key={detail.label}
                  className="px-6 py-4 flex justify-between items-center"
                >
                  <span className="text-muted-foreground">{detail.label}</span>
                  <span className="font-semibold">{detail.value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
