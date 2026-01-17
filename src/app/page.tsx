import { Hero } from "@/components/sections/hero";
import { TrustBar } from "@/components/sections/trust-bar";
import { ServicesOverview } from "@/components/sections/services-overview";
import { USPSection } from "@/components/sections/usps";
import { ProcessPreview } from "@/components/sections/process-preview";
import { Testimonials } from "@/components/sections/testimonials";
import { CTASection } from "@/components/sections/cta-section";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ServicesOverview />
      <USPSection />
      <ProcessPreview />
      <Testimonials />
      <CTASection />
    </>
  );
}
