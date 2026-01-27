import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { COMPANY_INFO, FOOTER_NAV } from "@/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1A1A1A] text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#0D3B2E] text-white font-bold text-xl">
                AF
              </div>
              <div>
                <p className="font-semibold">{COMPANY_INFO.name}</p>
                <p className="text-sm text-white/70">
                  {COMPANY_INFO.tagline}
                </p>
              </div>
            </div>
            <div className="space-y-3 text-sm">
              <a
                href={`tel:${COMPANY_INFO.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-2 hover:text-[#C4A35A] transition-colors"
              >
                <Phone className="h-4 w-4" />
                {COMPANY_INFO.phone}
              </a>
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="flex items-center gap-2 hover:text-[#C4A35A] transition-colors"
              >
                <Mail className="h-4 w-4" />
                {COMPANY_INFO.email}
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <address className="not-italic">
                  {COMPANY_INFO.address.line1}
                  <br />
                  {COMPANY_INFO.address.line2}
                  <br />
                  {COMPANY_INFO.address.city}, {COMPANY_INFO.address.postcode}
                </address>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm">
              {FOOTER_NAV.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-[#C4A35A] transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              {FOOTER_NAV.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-[#C4A35A] transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              {FOOTER_NAV.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-[#C4A35A] transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
            {/* Memberships */}
            <div className="mt-6">
              <p className="text-sm text-white/70">
                Member of:
              </p>
              <div className="flex gap-4 mt-2">
                {COMPANY_INFO.memberships.map((membership) => (
                  <span
                    key={membership}
                    className="text-xs font-medium bg-white/10 px-2 py-1 rounded"
                  >
                    {membership}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-white/20" />

      {/* Compliance Footer */}
      <div className="container mx-auto px-4 py-6">
        <div className="space-y-4 text-xs text-white/60">
          <p>
            {COMPANY_INFO.fca.firmName} is an Appointed Representative of{" "}
            {COMPANY_INFO.fca.principalFirm} who are authorised and regulated by
            the Financial Conduct Authority (FCA). Our Firm Reference Number is{" "}
            {COMPANY_INFO.fca.firmReferenceNumber} and our Principal Firm&apos;s
            Reference Number is {COMPANY_INFO.fca.principalFRN}.
          </p>
          <p>
            The FCA does not regulate some forms of commercial finance including
            buy-to-let mortgages, bridging loans, and development finance where
            the borrower is not an individual or the property will not be occupied
            by the borrower or their immediate family.
          </p>
          <p>
            Registered with the Information Commissioner&apos;s Office (ICO) for
            data protection. Registration number: {COMPANY_INFO.ico.registrationNumber}.
          </p>
          <Separator className="bg-white/20 my-4" />
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p>
              &copy; {currentYear} {COMPANY_INFO.name}. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link href="/privacy-policy" className="hover:text-[#C4A35A] transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-[#C4A35A] transition-colors">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
