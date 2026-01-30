import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Building2, MapPin, Clock, Filter } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CTASection } from "@/components/sections/cta-section";
import { CASE_STUDIES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Case Studies | Successful Finance Projects",
  description:
    "See how Aegis Finance has helped clients secure funding for property developments, bridging loans, buy-to-let portfolios, and business growth.",
  alternates: {
    canonical: '/case-studies',
  },
};

const financeTypes = [
  "All",
  "Development Finance",
  "Bridging Finance",
  "Buy-to-Let",
  "Invoice Finance",
];

export default function CaseStudiesPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary via-primary to-[#072820] text-primary-foreground py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
              Case Studies
            </h1>
            <p className="text-lg text-primary-foreground/80">
              Real examples of how we&apos;ve helped clients achieve their
              property and business finance goals. Names and some details have
              been changed for confidentiality.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto px-4">
          {/* Filter */}
          <div className="flex items-center gap-2 mb-8 flex-wrap">
            <Filter className="h-4 w-4 text-muted-foreground" />
            {financeTypes.map((type) => (
              <Badge
                key={type}
                variant={type === "All" ? "default" : "outline"}
                className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {type}
              </Badge>
            ))}
          </div>

          {/* Case Studies Grid */}
          <div className="grid gap-8 md:grid-cols-2">
            {CASE_STUDIES.map((study) => (
              <Card
                key={study.slug}
                className="overflow-hidden hover:shadow-xl transition-shadow group"
              >
                <div className="relative h-40 bg-gradient-to-br from-primary to-[#072820]">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Building2 className="h-16 w-16 text-white/20" />
                  </div>
                  <Badge className="absolute top-4 left-4 bg-white/20 text-white backdrop-blur-sm">
                    {study.financeType}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold mb-2 group-hover:text-secondary transition-colors">
                    <Link href={`/case-studies/${study.slug}`}>{study.title}</Link>
                  </h2>
                  <p className="text-muted-foreground mb-4">{study.summary}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {study.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {study.duration}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-2xl font-bold text-primary">
                      {study.amount}
                    </p>
                    <Link
                      href={`/case-studies/${study.slug}`}
                      className="inline-flex items-center text-secondary hover:text-secondary/80 font-medium transition-colors"
                    >
                      Read full story <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Discuss Your Project */}
      <section className="section-padding bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Have a Similar Project?
            </h2>
            <p className="text-muted-foreground mb-6">
              Every case is different, but our experience across hundreds of
              deals means we can find solutions for complex situations. Get in
              touch to discuss your requirements.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-md hover:bg-primary/90 transition-colors"
            >
              Discuss Your Project
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
