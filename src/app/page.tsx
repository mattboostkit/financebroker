import { Hero } from "@/components/sections/hero";
import { StatsBar } from "@/components/sections/stats-bar";
import { TrustBar } from "@/components/sections/trust-bar";
import { ServicesOverview } from "@/components/sections/services-overview";
import { CaseStudiesPreview } from "@/components/sections/case-studies-preview";
import { USPSection } from "@/components/sections/usps";
import { ProcessPreview } from "@/components/sections/process-preview";
import { Testimonials } from "@/components/sections/testimonials";
import { NewsletterSignup } from "@/components/sections/newsletter-signup";
import { CTASection } from "@/components/sections/cta-section";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <TrustBar />
      <ServicesOverview />
      <CaseStudiesPreview />
      <USPSection />
      <ProcessPreview />
      <Testimonials />
      <NewsletterSignup />
      <CTASection />
    </>
  );
}
