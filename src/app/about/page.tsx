import { Metadata } from "next";
import { Shield, Award, Users, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { CTASection } from "@/components/sections/cta-section";
import { COMPANY_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us | Commercial Finance Experts",
  description:
    "Learn about Cascade Finance - FCA regulated commercial finance brokers with decades of combined experience. NACFB and FIBA members.",
};

const values = [
  {
    icon: Shield,
    title: "Integrity",
    description:
      "Transparent pricing with no hidden fees. We always act in your best interests and provide honest, impartial advice.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "We hold ourselves to the highest professional standards. Every case receives the attention and expertise it deserves.",
  },
  {
    icon: Users,
    title: "Relationships",
    description:
      "Long-term partnerships with clients and lenders alike. We build trust through consistent delivery and open communication.",
  },
  {
    icon: Target,
    title: "Results",
    description:
      "Your success is our success. We're measured by the outcomes we achieve for our clients, not just the deals we complete.",
  },
];

const team = [
  {
    name: "Director",
    role: "Managing Director",
    bio: "Over 15 years in commercial finance, specialising in complex property transactions and development funding.",
    credentials: ["NACFB", "CeMAP"],
  },
  {
    name: "Finance Consultant",
    role: "Senior Finance Consultant",
    bio: "Expert in asset finance and business lending with a background in corporate banking.",
    credentials: ["NACFB"],
  },
  {
    name: "Administrator",
    role: "Client Relations Manager",
    bio: "Ensuring smooth client journeys from initial enquiry through to completion and beyond.",
    credentials: [],
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary via-primary to-[#0f2341] text-primary-foreground py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
              About {COMPANY_INFO.name}
            </h1>
            <p className="text-lg text-primary-foreground/80">
              We&apos;re a team of experienced commercial finance professionals
              dedicated to helping property investors, developers, and businesses
              access the funding they need.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
              Our Story
            </h2>
            <div className="prose prose-lg text-muted-foreground">
              <p>
                {COMPANY_INFO.name} was founded with a clear mission: to provide
                expert, personal commercial finance advice that puts clients first.
              </p>
              <p>
                As an Appointed Representative of {COMPANY_INFO.fca.principalFirm},
                we operate under FCA regulation while maintaining the agility and
                personal service that larger firms often lack. This structure allows
                us to combine regulatory compliance with a boutique approach.
              </p>
              <p>
                Our team brings together decades of experience across property
                finance, business lending, and corporate banking. We&apos;ve helped
                hundreds of clients secure the funding they need, from first-time
                landlords to established developers and growing businesses.
              </p>
              <p>
                We believe in building long-term relationships, not just completing
                transactions. Many of our clients return time and again, and our
                best source of new business is referrals from satisfied clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Our Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <Card key={value.title} className="text-center">
                  <CardContent className="pt-6">
                    <div className="h-12 w-12 mx-auto rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-secondary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* The Team */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Meet the Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experienced professionals dedicated to your success.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
            {team.map((member) => (
              <Card key={member.name}>
                <CardContent className="pt-6 text-center">
                  <div className="h-24 w-24 mx-auto rounded-full bg-muted flex items-center justify-center mb-4">
                    <Users className="h-10 w-10 text-muted-foreground" />
                  </div>
                  <h3 className="font-semibold text-lg">{member.name}</h3>
                  <p className="text-secondary text-sm mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>
                  {member.credentials.length > 0 && (
                    <div className="flex justify-center gap-2">
                      {member.credentials.map((cred) => (
                        <span
                          key={cred}
                          className="text-xs bg-muted px-2 py-1 rounded"
                        >
                          {cred}
                        </span>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="section-padding bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
              Our Credentials
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 text-left">
              <div className="bg-card rounded-lg p-6">
                <h3 className="font-semibold mb-2">FCA Regulated</h3>
                <p className="text-sm text-muted-foreground">
                  Appointed Representative of {COMPANY_INFO.fca.principalFirm},
                  FRN {COMPANY_INFO.fca.principalFRN}. Our FRN is{" "}
                  {COMPANY_INFO.fca.firmReferenceNumber}.
                </p>
              </div>
              <div className="bg-card rounded-lg p-6">
                <h3 className="font-semibold mb-2">NACFB Member</h3>
                <p className="text-sm text-muted-foreground">
                  Member of the National Association of Commercial Finance
                  Brokers, the UK&apos;s leading trade body.
                </p>
              </div>
              <div className="bg-card rounded-lg p-6">
                <h3 className="font-semibold mb-2">FIBA Member</h3>
                <p className="text-sm text-muted-foreground">
                  Member of the Finance & Leasing Association Independent
                  Brokers Association.
                </p>
              </div>
              <div className="bg-card rounded-lg p-6">
                <h3 className="font-semibold mb-2">ICO Registered</h3>
                <p className="text-sm text-muted-foreground">
                  Registered with the Information Commissioner&apos;s Office for
                  data protection compliance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
