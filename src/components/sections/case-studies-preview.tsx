"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Building2, MapPin, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CASE_STUDIES } from "@/lib/constants";

export function CaseStudiesPreview() {
  const featuredStudy = CASE_STUDIES[0];
  const otherStudies = CASE_STUDIES.slice(1, 4);

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
            Recent Success Stories
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how we&apos;ve helped clients secure the funding they need for
            property and business projects.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Featured Case Study */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="h-full overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-48 bg-gradient-to-br from-primary to-[#072820]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Building2 className="h-20 w-20 text-white/20" />
                </div>
                <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">
                  Featured
                </Badge>
              </div>
              <CardContent className="p-6">
                <Badge variant="secondary" className="mb-3">
                  {featuredStudy.financeType}
                </Badge>
                <h3 className="text-xl font-semibold mb-2">
                  {featuredStudy.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {featuredStudy.summary}
                </p>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                  <span className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {featuredStudy.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {featuredStudy.duration}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-2xl font-bold text-primary">
                    {featuredStudy.amount}
                  </p>
                  <Link
                    href={`/case-studies/${featuredStudy.slug}`}
                    className="inline-flex items-center text-secondary hover:text-secondary/80 font-medium transition-colors"
                  >
                    Read more <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Other Case Studies Grid */}
          <div className="grid gap-4">
            {otherStudies.map((study, index) => (
              <motion.div
                key={study.slug}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-16 h-16 rounded-lg bg-gradient-to-br from-primary to-[#072820] flex items-center justify-center">
                        <Building2 className="h-8 w-8 text-white/40" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <Badge variant="outline" className="mb-1 text-xs">
                          {study.financeType}
                        </Badge>
                        <h4 className="font-semibold truncate">{study.title}</h4>
                        <div className="flex items-center gap-3 text-sm text-muted-foreground mt-1">
                          <span>{study.amount}</span>
                          <span>•</span>
                          <span>{study.location}</span>
                        </div>
                      </div>
                      <Link
                        href={`/case-studies/${study.slug}`}
                        className="flex-shrink-0 self-center text-secondary hover:text-secondary/80 transition-colors"
                      >
                        <ArrowRight className="h-5 w-5" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <Button asChild variant="outline" size="lg">
            <Link href="/case-studies">
              View All Case Studies
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
