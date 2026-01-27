"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Building2, Users, PoundSterling, Shield } from "lucide-react";

const stats = [
  {
    icon: Building2,
    value: "2024",
    label: "Established",
    isNumber: false,
  },
  {
    icon: Users,
    value: 100,
    suffix: "+",
    label: "Lending Partners",
    isNumber: true,
  },
  {
    icon: PoundSterling,
    value: 50,
    prefix: "£",
    suffix: "M+",
    label: "Arranged",
    isNumber: true,
  },
  {
    icon: Shield,
    value: "FCA",
    label: "Regulated",
    isNumber: false,
  },
];

function AnimatedNumber({ value, prefix = "", suffix = "" }: { value: number; prefix?: string; suffix?: string }) {
  const [displayValue, setDisplayValue] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 2000;
          const steps = 60;
          const stepValue = value / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += stepValue;
            if (current >= value) {
              setDisplayValue(value);
              clearInterval(timer);
            } else {
              setDisplayValue(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [value, hasAnimated]);

  return (
    <span ref={ref}>
      {prefix}{displayValue}{suffix}
    </span>
  );
}

export function StatsBar() {
  return (
    <section className="relative bg-[#0D3B2E] py-8 md:py-12">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container relative mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-white/10 mb-3">
                  <Icon className="h-6 w-6 text-[#C4A35A]" />
                </div>
                <p className="text-3xl md:text-4xl font-bold text-white mb-1">
                  {stat.isNumber ? (
                    <AnimatedNumber
                      value={stat.value as number}
                      prefix={stat.prefix || ""}
                      suffix={stat.suffix || ""}
                    />
                  ) : (
                    stat.value
                  )}
                </p>
                <p className="text-sm text-white/70">{stat.label}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
