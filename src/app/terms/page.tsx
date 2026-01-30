import { Metadata } from "next";
import { COMPANY_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: `Terms and conditions for using ${COMPANY_INFO.name}'s website and services.`,
  alternates: {
    canonical: '/terms',
  },
};

export default function TermsPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary via-primary to-[#072820] text-primary-foreground py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
              Terms & Conditions
            </h1>
            <p className="text-lg text-primary-foreground/80">
              Terms of use for our website and services.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <p className="text-muted-foreground">Last updated: January 2024</p>

            <h2>1. Introduction</h2>
            <p>
              These Terms and Conditions (&quot;Terms&quot;) govern your use of the {COMPANY_INFO.name}{" "}
              website and our commercial finance brokerage services. By using our website or
              services, you agree to be bound by these Terms.
            </p>

            <h2>2. About Us</h2>
            <p>
              {COMPANY_INFO.name} is an Appointed Representative of {COMPANY_INFO.fca.principalFirm},
              which is authorised and regulated by the Financial Conduct Authority (FCA). Our Firm
              Reference Number is {COMPANY_INFO.fca.firmReferenceNumber} and our Principal Firm&apos;s
              Reference Number is {COMPANY_INFO.fca.principalFRN}.
            </p>

            <h2>3. Our Services</h2>
            <p>
              We provide commercial finance brokerage services, including but not limited to:
            </p>
            <ul>
              <li>Bridging finance</li>
              <li>Development finance</li>
              <li>Buy-to-let mortgages (unregulated)</li>
              <li>Asset finance</li>
              <li>Invoice finance</li>
            </ul>
            <p>
              Many of the products we arrange are not regulated by the FCA. The FCA does not regulate
              some forms of commercial finance including buy-to-let mortgages, bridging loans, and
              development finance where the borrower is not an individual or the property will not be
              occupied by the borrower or their immediate family.
            </p>

            <h2>4. No Advice</h2>
            <p>
              The information on this website is provided for general informational purposes only and
              does not constitute financial advice. We recommend that you seek professional advice
              before making any financial decisions. While we strive to provide accurate and
              up-to-date information, we make no representations or warranties of any kind about the
              completeness, accuracy, or suitability of the information.
            </p>

            <h2>5. Indicative Terms</h2>
            <p>
              Any indicative terms, rates, or figures provided on this website or through our
              calculators are for illustrative purposes only. They are not guaranteed and are subject
              to change. Actual terms will be confirmed by the lender following a full application
              and credit assessment.
            </p>

            <h2>6. Fees and Charges</h2>
            <p>
              We may charge a fee for our brokerage services, which will be disclosed to you before
              you proceed with an application. Lenders may also charge arrangement fees, valuation
              fees, legal fees, and other costs. All fees will be clearly explained before you commit
              to any finance arrangement.
            </p>

            <h2>7. Your Obligations</h2>
            <p>By using our services, you agree to:</p>
            <ul>
              <li>Provide accurate and complete information</li>
              <li>Notify us promptly of any changes to your circumstances</li>
              <li>Respond to requests for information in a timely manner</li>
              <li>Not use our services for any unlawful purpose</li>
              <li>Not provide false or misleading information</li>
            </ul>

            <h2>8. Intellectual Property</h2>
            <p>
              All content on this website, including text, graphics, logos, and images, is the
              property of {COMPANY_INFO.name} or our licensors and is protected by copyright and
              other intellectual property laws. You may not reproduce, distribute, or otherwise use
              any content without our prior written consent.
            </p>

            <h2>9. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. We are not responsible for the
              content or privacy practices of these websites. Links are provided for convenience only
              and do not imply endorsement.
            </p>

            <h2>10. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, {COMPANY_INFO.name} shall not be liable for any
              indirect, incidental, special, consequential, or punitive damages arising from your use
              of our website or services. Our total liability shall not exceed the fees paid to us
              for the specific service giving rise to the claim.
            </p>

            <h2>11. Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless {COMPANY_INFO.name}, its officers, directors,
              employees, and agents from any claims, damages, losses, or expenses arising from your
              use of our website or services, or your violation of these Terms.
            </p>

            <h2>12. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of England
              and Wales. Any disputes arising from these Terms shall be subject to the exclusive
              jurisdiction of the courts of England and Wales.
            </p>

            <h2>13. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. Changes will be effective
              immediately upon posting to our website. Your continued use of our website or services
              following any changes constitutes acceptance of the modified Terms.
            </p>

            <h2>14. Severability</h2>
            <p>
              If any provision of these Terms is found to be invalid or unenforceable, the remaining
              provisions shall continue in full force and effect.
            </p>

            <h2>15. Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us:
            </p>
            <address className="not-italic">
              {COMPANY_INFO.name}
              <br />
              Email: {COMPANY_INFO.email}
              <br />
              Phone: {COMPANY_INFO.phone}
            </address>
          </div>
        </div>
      </section>
    </>
  );
}
