import { Metadata } from "next";
import { COMPANY_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Complaints Procedure",
  description: `How to make a complaint to ${COMPANY_INFO.name}. Our complaints handling procedure and your rights.`,
};

export default function ComplaintsPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary via-primary to-[#072820] text-primary-foreground py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
              Complaints Procedure
            </h1>
            <p className="text-lg text-primary-foreground/80">
              How to make a complaint and what to expect from our complaints handling process.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <h2>Our Commitment</h2>
            <p>
              At {COMPANY_INFO.name}, we are committed to providing a high standard of service to all
              our clients. However, we recognise that there may be occasions when you feel we have
              not met your expectations. If this happens, we want to hear from you so we can try to
              put things right.
            </p>

            <h2>How to Make a Complaint</h2>
            <p>
              If you have a complaint about any aspect of our service, you can contact us in the
              following ways:
            </p>
            <h3>In Writing</h3>
            <address className="not-italic">
              Complaints Department
              <br />
              {COMPANY_INFO.name}
              <br />
              {COMPANY_INFO.address.line1}
              <br />
              {COMPANY_INFO.address.line2}
              <br />
              {COMPANY_INFO.address.city}, {COMPANY_INFO.address.postcode}
            </address>

            <h3>By Email</h3>
            <p>
              <a href={`mailto:complaints@aegisfinance.co.uk`}>
                complaints@aegisfinance.co.uk
              </a>
            </p>

            <h3>By Telephone</h3>
            <p>{COMPANY_INFO.phone}</p>

            <h2>What Information to Include</h2>
            <p>To help us investigate your complaint efficiently, please include:</p>
            <ul>
              <li>Your full name and contact details</li>
              <li>Your account or reference number (if applicable)</li>
              <li>A clear description of your complaint</li>
              <li>Details of what you would like us to do to resolve it</li>
              <li>Copies of any relevant documents</li>
            </ul>

            <h2>Our Complaints Handling Process</h2>
            <h3>Step 1: Acknowledgement</h3>
            <p>
              We will acknowledge your complaint promptly, usually within 3 business days, and
              provide you with a reference number. We will tell you who is handling your complaint
              and how to contact them.
            </p>

            <h3>Step 2: Investigation</h3>
            <p>
              We will investigate your complaint thoroughly and fairly. This may involve reviewing
              your case file, speaking with the staff involved, and considering any documents you
              have provided.
            </p>

            <h3>Step 3: Resolution</h3>
            <p>We aim to resolve complaints as quickly as possible:</p>
            <ul>
              <li>
                <strong>Simple complaints:</strong> We will try to resolve these within 3 business
                days of receipt
              </li>
              <li>
                <strong>Complex complaints:</strong> We will provide a full response within 8 weeks
                of receiving your complaint
              </li>
            </ul>
            <p>
              If we need more time to investigate, we will keep you informed of our progress and
              explain the reasons for any delay.
            </p>

            <h3>Step 4: Final Response</h3>
            <p>
              Our final response will include:
            </p>
            <ul>
              <li>A summary of your complaint</li>
              <li>The results of our investigation</li>
              <li>Our decision and the reasons for it</li>
              <li>Any remedial action we will take</li>
              <li>Information about the Financial Ombudsman Service (if applicable)</li>
            </ul>

            <h2>If You&apos;re Not Satisfied</h2>
            <p>
              If you are not satisfied with our final response, or if 8 weeks have passed since you
              first complained and you have not received a final response, you may be able to refer
              your complaint to the Financial Ombudsman Service (FOS).
            </p>
            <p>
              <strong>Please note:</strong> Many of the products we arrange are not regulated by the
              FCA, which means the Financial Ombudsman Service may not be able to consider
              complaints about them. However, they can consider complaints about our service as an
              Appointed Representative.
            </p>

            <h3>Financial Ombudsman Service</h3>
            <address className="not-italic">
              Financial Ombudsman Service
              <br />
              Exchange Tower
              <br />
              London
              <br />
              E14 9SR
              <br />
              <br />
              Telephone: 0800 023 4567 or 0300 123 9123
              <br />
              Email: complaint.info@financial-ombudsman.org.uk
              <br />
              Website:{" "}
              <a
                href="https://www.financial-ombudsman.org.uk"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.financial-ombudsman.org.uk
              </a>
            </address>
            <p>
              You must refer your complaint to the FOS within 6 months of receiving our final
              response.
            </p>

            <h2>Professional Indemnity Insurance</h2>
            <p>
              We maintain professional indemnity insurance to cover claims arising from our
              professional activities. Details are available on request.
            </p>

            <h2>Keeping Records</h2>
            <p>
              We keep records of all complaints and their outcomes for regulatory purposes and to
              help us improve our service. All complaint information is handled in accordance with
              our Privacy Policy.
            </p>

            <h2>Our Principal Firm</h2>
            <p>
              As an Appointed Representative of {COMPANY_INFO.fca.principalFirm}, you may also
              contact our principal firm regarding any complaint:
            </p>
            <p>
              {COMPANY_INFO.fca.principalFirm}
              <br />
              FCA Reference Number: {COMPANY_INFO.fca.principalFRN}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
