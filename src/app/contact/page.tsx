import { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, Calendar, Video } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LeadCaptureForm } from "@/components/forms/lead-capture-form";
import { COMPANY_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Us | Get a Quote",
  description:
    "Contact Aegis Finance for expert commercial finance advice. Get indicative terms within 24 hours. Call, email, or complete our enquiry form.",
  alternates: {
    canonical: '/contact',
  },
};

const timeSlots = [
  "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
  "14:00", "14:30", "15:00", "15:30", "16:00", "16:30"
];

const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri"];

export default function ContactPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary via-primary to-[#072820] text-primary-foreground py-16 md:py-20">
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

              {/* Calendar Booking Placeholder */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-secondary" />
                    Book a Consultation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4">
                    Prefer a scheduled call? Choose a convenient time to speak
                    with one of our finance specialists.
                  </p>

                  {/* Placeholder Calendar UI */}
                  <div className="border rounded-lg p-4 bg-muted/50">
                    {/* Week Header */}
                    <div className="grid grid-cols-5 gap-1 mb-3">
                      {weekDays.map((day) => (
                        <div
                          key={day}
                          className="text-center text-xs font-medium text-muted-foreground py-1"
                        >
                          {day}
                        </div>
                      ))}
                    </div>

                    {/* Date Row */}
                    <div className="grid grid-cols-5 gap-1 mb-4">
                      {[27, 28, 29, 30, 31].map((date, i) => (
                        <div
                          key={date}
                          className={`text-center py-2 rounded text-sm cursor-not-allowed ${
                            i === 0
                              ? "bg-secondary text-secondary-foreground"
                              : "bg-background border hover:border-secondary"
                          }`}
                        >
                          {date}
                        </div>
                      ))}
                    </div>

                    {/* Time Slots */}
                    <div className="space-y-2">
                      <p className="text-xs font-medium text-muted-foreground">
                        Available Times
                      </p>
                      <div className="grid grid-cols-3 gap-1">
                        {timeSlots.slice(0, 6).map((time) => (
                          <div
                            key={time}
                            className="text-center py-1.5 rounded text-xs border bg-background hover:border-secondary cursor-not-allowed"
                          >
                            {time}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Coming Soon Overlay */}
                    <div className="mt-4 p-3 bg-primary/5 rounded-lg border border-primary/20">
                      <div className="flex items-center gap-2 text-sm">
                        <Video className="h-4 w-4 text-primary" />
                        <span className="font-medium text-primary">
                          Online Booking Coming Soon
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">
                        In the meantime, please call us or submit the form to
                        arrange a consultation.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[400px] bg-muted relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5">
          {/* Map Placeholder with styled background */}
          <div
            className="w-full h-full opacity-30"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23${`0D3B2E`}' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            }}
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white rounded-xl shadow-xl p-8 max-w-md mx-4 text-center">
            <div className="h-16 w-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
              <MapPin className="h-8 w-8 text-secondary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Find Us</h3>
            <address className="text-muted-foreground not-italic mb-4">
              {COMPANY_INFO.address.line1}
              <br />
              {COMPANY_INFO.address.line2}
              <br />
              {COMPANY_INFO.address.city}, {COMPANY_INFO.address.postcode}
            </address>
            <p className="text-sm text-muted-foreground">
              Interactive map will be available once our office address is
              confirmed.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
