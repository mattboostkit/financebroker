import { Metadata } from "next";
import { COMPANY_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${COMPANY_INFO.name}. Learn how we collect, use, and protect your personal information.`,
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary via-primary to-[#0f2341] text-primary-foreground py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-primary-foreground/80">
              How we collect, use, and protect your personal information.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <p className="text-muted-foreground">
              Last updated: January 2024
            </p>

            <h2>1. Introduction</h2>
            <p>
              {COMPANY_INFO.name} (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is committed to
              protecting your privacy. This Privacy Policy explains how we collect, use, disclose,
              and safeguard your information when you visit our website or use our services.
            </p>
            <p>
              We are registered with the Information Commissioner&apos;s Office (ICO) under
              registration number {COMPANY_INFO.ico.registrationNumber}.
            </p>

            <h2>2. Information We Collect</h2>
            <h3>Personal Information</h3>
            <p>We may collect personal information that you voluntarily provide to us when you:</p>
            <ul>
              <li>Fill out forms on our website</li>
              <li>Contact us via phone, email, or through our website</li>
              <li>Apply for finance through our brokerage services</li>
              <li>Subscribe to our newsletter</li>
            </ul>
            <p>This information may include:</p>
            <ul>
              <li>Name, address, email address, and phone number</li>
              <li>Financial information relevant to your finance application</li>
              <li>Employment and income details</li>
              <li>Property and asset information</li>
              <li>Company details (for business applications)</li>
            </ul>

            <h3>Automatically Collected Information</h3>
            <p>
              When you visit our website, we may automatically collect certain information,
              including:
            </p>
            <ul>
              <li>IP address and browser type</li>
              <li>Pages visited and time spent on pages</li>
              <li>Referring website addresses</li>
              <li>Device information</li>
            </ul>

            <h2>3. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Process your finance applications and enquiries</li>
              <li>Communicate with you about our services</li>
              <li>Match you with appropriate lenders</li>
              <li>Comply with legal and regulatory requirements</li>
              <li>Improve our website and services</li>
              <li>Send marketing communications (with your consent)</li>
            </ul>

            <h2>4. Legal Basis for Processing</h2>
            <p>We process your personal data on the following legal bases:</p>
            <ul>
              <li>
                <strong>Contract:</strong> Processing necessary to fulfil our obligations under a
                contract with you
              </li>
              <li>
                <strong>Legitimate interests:</strong> Processing necessary for our legitimate
                business interests
              </li>
              <li>
                <strong>Consent:</strong> Where you have given explicit consent for specific
                processing activities
              </li>
              <li>
                <strong>Legal obligation:</strong> Processing required to comply with legal or
                regulatory requirements
              </li>
            </ul>

            <h2>5. Information Sharing</h2>
            <p>We may share your information with:</p>
            <ul>
              <li>
                <strong>Lenders:</strong> To process your finance applications
              </li>
              <li>
                <strong>Credit reference agencies:</strong> To verify your identity and
                creditworthiness
              </li>
              <li>
                <strong>Professional advisers:</strong> Solicitors, accountants, and other advisers
                involved in your application
              </li>
              <li>
                <strong>Regulatory bodies:</strong> As required by law, including the FCA
              </li>
              <li>
                <strong>Service providers:</strong> Who assist with our business operations
              </li>
            </ul>
            <p>
              We do not sell your personal information to third parties for marketing purposes.
            </p>

            <h2>6. Data Retention</h2>
            <p>
              We retain your personal information for as long as necessary to fulfil the purposes
              for which it was collected, including to satisfy legal, regulatory, accounting, or
              reporting requirements. For finance applications, we typically retain records for a
              minimum of 6 years after the relationship ends.
            </p>

            <h2>7. Your Rights</h2>
            <p>Under data protection law, you have the right to:</p>
            <ul>
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information (in certain circumstances)</li>
              <li>Object to processing of your information</li>
              <li>Request restriction of processing</li>
              <li>Data portability</li>
              <li>Withdraw consent (where processing is based on consent)</li>
            </ul>
            <p>
              To exercise any of these rights, please contact us using the details below.
            </p>

            <h2>8. Cookies</h2>
            <p>
              Our website uses cookies to improve your experience. Cookies are small text files
              stored on your device that help us understand how you use our website. You can control
              cookies through your browser settings. For more information, please see our Cookie
              Policy.
            </p>

            <h2>9. Security</h2>
            <p>
              We implement appropriate technical and organisational measures to protect your
              personal information against unauthorised access, alteration, disclosure, or
              destruction. However, no internet transmission is completely secure, and we cannot
              guarantee the security of information transmitted to our website.
            </p>

            <h2>10. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any
              significant changes by posting the new policy on our website with an updated effective
              date.
            </p>

            <h2>11. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or our data practices, please
              contact us:
            </p>
            <address className="not-italic">
              {COMPANY_INFO.name}
              <br />
              {COMPANY_INFO.address.line1}
              <br />
              {COMPANY_INFO.address.line2}
              <br />
              {COMPANY_INFO.address.city}, {COMPANY_INFO.address.postcode}
              <br />
              <br />
              Email: {COMPANY_INFO.email}
              <br />
              Phone: {COMPANY_INFO.phone}
            </address>

            <h2>12. Complaints</h2>
            <p>
              If you are unhappy with how we have handled your personal information, you have the
              right to lodge a complaint with the Information Commissioner&apos;s Office (ICO):
            </p>
            <p>
              Website:{" "}
              <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer">
                ico.org.uk
              </a>
              <br />
              Helpline: 0303 123 1113
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
