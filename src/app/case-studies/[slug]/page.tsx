import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  Building2,
  MapPin,
  Clock,
  PoundSterling,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/sections/cta-section";
import { CASE_STUDIES } from "@/lib/constants";

function getCaseStudy(slug: string) {
  return CASE_STUDIES.find((cs) => cs.slug === slug) || null;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = getCaseStudy(slug);

  if (!caseStudy) {
    return {
      title: "Case Study Not Found",
    };
  }

  return {
    title: `${caseStudy.title} | Case Study`,
    description: caseStudy.summary,
  };
}

export async function generateStaticParams() {
  return CASE_STUDIES.map((cs) => ({
    slug: cs.slug,
  }));
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const caseStudy = getCaseStudy(slug);

  if (!caseStudy) {
    notFound();
  }

  // Get related case studies (same finance type, excluding current)
  const relatedStudies = CASE_STUDIES.filter(
    (cs) => cs.financeType === caseStudy.financeType && cs.slug !== caseStudy.slug
  ).slice(0, 2);

  // If not enough related by type, add others
  if (relatedStudies.length < 2) {
    const others = CASE_STUDIES.filter(
      (cs) =>
        cs.slug !== caseStudy.slug &&
        !relatedStudies.some((r) => r.slug === cs.slug)
    ).slice(0, 2 - relatedStudies.length);
    relatedStudies.push(...others);
  }

  return (
    <>
      <section className="bg-gradient-to-br from-primary via-primary to-[#072820] text-primary-foreground py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <Link
              href="/case-studies"
              className="inline-flex items-center text-primary-foreground/70 hover:text-primary-foreground mb-4 transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Case Studies
            </Link>
            <Badge variant="secondary" className="mb-4">
              {caseStudy.financeType}
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
              {caseStudy.title}
            </h1>
            <div className="flex flex-wrap gap-6 text-primary-foreground/70">
              <span className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                {caseStudy.location}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                {caseStudy.duration}
              </span>
              <span className="flex items-center gap-2">
                <PoundSterling className="h-5 w-5" />
                {caseStudy.amount}
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Overview */}
              <div>
                <h2 className="text-2xl font-bold mb-4">Overview</h2>
                <p className="text-muted-foreground text-lg">
                  {caseStudy.summary}
                </p>
              </div>

              {/* The Challenge */}
              <div>
                <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
                <p className="text-muted-foreground">
                  {caseStudy.challenge}
                </p>
              </div>

              {/* Our Solution */}
              <div>
                <h2 className="text-2xl font-bold mb-4">Our Solution</h2>
                <p className="text-muted-foreground">
                  {caseStudy.solution}
                </p>
              </div>

              {/* The Result */}
              <div className="bg-muted rounded-lg p-6">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <CheckCircle className="h-6 w-6 text-secondary" />
                  The Result
                </h2>
                <p className="text-muted-foreground text-lg">
                  {caseStudy.result}
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Key Metrics */}
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-4">Deal Summary</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center pb-3 border-b">
                      <span className="text-muted-foreground">Finance Type</span>
                      <span className="font-medium">{caseStudy.financeType}</span>
                    </div>
                    <div className="flex justify-between items-center pb-3 border-b">
                      <span className="text-muted-foreground">Amount</span>
                      <span className="font-medium text-primary">
                        {caseStudy.amount}
                      </span>
                    </div>
                    <div className="flex justify-between items-center pb-3 border-b">
                      <span className="text-muted-foreground">Location</span>
                      <span className="font-medium">{caseStudy.location}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Duration</span>
                      <span className="font-medium">{caseStudy.duration}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* CTA Card */}
              <Card className="bg-primary text-primary-foreground">
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-2">Have a Similar Project?</h3>
                  <p className="text-sm text-primary-foreground/80 mb-4">
                    Get in touch to discuss your requirements. We&apos;ll provide
                    indicative terms within 24 hours.
                  </p>
                  <Button
                    asChild
                    className="w-full bg-white text-primary hover:bg-white/90"
                  >
                    <Link href="/contact">
                      Discuss Your Project
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Related Case Studies */}
      {relatedStudies.length > 0 && (
        <section className="section-padding bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8">Related Case Studies</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {relatedStudies.map((study) => (
                <Card
                  key={study.slug}
                  className="overflow-hidden hover:shadow-lg transition-shadow group"
                >
                  <div className="flex">
                    <div className="flex-shrink-0 w-24 h-24 bg-gradient-to-br from-primary to-[#072820] flex items-center justify-center">
                      <Building2 className="h-10 w-10 text-white/30" />
                    </div>
                    <CardContent className="p-4 flex-1">
                      <Badge variant="outline" className="mb-1 text-xs">
                        {study.financeType}
                      </Badge>
                      <h3 className="font-semibold group-hover:text-secondary transition-colors">
                        <Link href={`/case-studies/${study.slug}`}>
                          {study.title}
                        </Link>
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                        <span>{study.amount}</span>
                        <span>•</span>
                        <span>{study.location}</span>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection />
    </>
  );
}
