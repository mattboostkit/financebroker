import { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LeadCaptureForm } from "@/components/forms/lead-capture-form";
import { COMPANY_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Us | Get a Quote",
  description:
    "Contact Aegis Finance for expert commercial finance advice. Get indicative terms within 24 hours. Call, email, or complete our enquiry form.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary via-primary to-[#0f2341] text-primary-foreground py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
              Get in Touch
            </h1>
            <p className="text-lg text-primary-foreground/80">
              Ready to discuss your finance requirements? Contact us for a free,
              no-obligation consultation. We aim to provide indicative terms
              within 24 hours.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Send Us an Enquiry</CardTitle>
                </CardHeader>
                <CardContent>
                  <LeadCaptureForm source="/contact" />
                </CardContent>
              </Card>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Contact Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <a
                    href={`tel:${COMPANY_INFO.phone.replace(/\s/g, "")}`}
                    className="flex items-start gap-3 group"
                  >
                    <div className="h-10 w-10 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors">
                      <Phone className="h-5 w-5 text-secondary group-hover:text-secondary-foreground" />
                    </div>
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-muted-foreground">{COMPANY_INFO.phone}</p>
                    </div>
                  </a>

                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="flex items-start gap-3 group"
                  >
                    <div className="h-10 w-10 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors">
                      <Mail className="h-5 w-5 text-secondary group-hover:text-secondary-foreground" />
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-muted-foreground">{COMPANY_INFO.email}</p>
                    </div>
                  </a>

                  <div className="flex items-start gap-3">
                    <div className="h-10 w-10 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <p className="font-medium">Address</p>
                      <address className="text-muted-foreground not-italic">
                        {COMPANY_INFO.address.line1}
                        <br />
                        {COMPANY_INFO.address.line2}
                        <br />
                        {COMPANY_INFO.address.city}, {COMPANY_INFO.address.postcode}
                      </address>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="h-10 w-10 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <p className="font-medium">Opening Hours</p>
                      <p className="text-muted-foreground">
                        Monday - Friday: 9:00 - 18:00
                        <br />
                        Saturday: By appointment
                        <br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Book a Call</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4">
                    Prefer a scheduled call? Book a convenient time to speak with
                    one of our finance specialists.
                  </p>
                  {/* Cal.com or Calendly embed would go here */}
                  <div className="bg-muted rounded-lg p-4 text-center text-sm text-muted-foreground">
                    Calendar booking coming soon.
                    <br />
                    Please call us directly or submit the form.
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[400px] bg-muted">
        <div className="w-full h-full flex items-center justify-center text-muted-foreground">
          {/* Google Maps embed would go here with actual address */}
          <p>Map location - Coming soon</p>
        </div>
      </section>
    </>
  );
}
