import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Toaster } from "@/components/ui/sonner";
import { ConvexClientProvider } from "@/providers/convex-provider";
import { ScrollToTop } from "@/components/scroll-to-top";
import { SEO_DEFAULTS, COMPANY_INFO } from "@/lib/constants";

const dmSans = DM_Sans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://aegisfinance.co.uk'),
  title: {
    default: SEO_DEFAULTS.defaultTitle,
    template: `%s | ${SEO_DEFAULTS.siteName}`,
  },
  description: SEO_DEFAULTS.defaultDescription,
  keywords: [
    "commercial finance",
    "bridging loans",
    "development finance",
    "buy to let mortgages",
    "asset finance",
    "invoice finance",
    "property finance",
    "business finance",
    "UK finance broker",
  ],
  authors: [{ name: SEO_DEFAULTS.siteName }],
  creator: SEO_DEFAULTS.siteName,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: '/',
    siteName: SEO_DEFAULTS.siteName,
    title: SEO_DEFAULTS.defaultTitle,
    description: SEO_DEFAULTS.defaultDescription,
  },
  twitter: {
    card: "summary_large_image",
    site: SEO_DEFAULTS.twitterHandle,
    creator: SEO_DEFAULTS.twitterHandle,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    "name": COMPANY_INFO.name,
    "description": SEO_DEFAULTS.defaultDescription,
    "url": process.env.NEXT_PUBLIC_SITE_URL || "https://aegisfinance.co.uk",
    "telephone": COMPANY_INFO.phone,
    "email": COMPANY_INFO.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": COMPANY_INFO.address.line1,
      "addressLocality": COMPANY_INFO.address.city,
      "postalCode": COMPANY_INFO.address.postcode,
      "addressCountry": "GB"
    },
    "areaServed": {
      "@type": "Country",
      "name": "United Kingdom"
    },
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "FCA Regulated",
        "recognizedBy": {
          "@type": "Organization",
          "name": "Financial Conduct Authority"
        }
      }
    ],
    "memberOf": [
      {
        "@type": "Organization",
        "name": "National Association of Commercial Finance Brokers"
      },
      {
        "@type": "Organization",
        "name": "Finance & Leasing Association"
      }
    ]
  };

  return (
    <html lang="en-GB">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className={`${dmSans.variable} font-sans antialiased`}>
        <ConvexClientProvider>
          <ScrollToTop />
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster />
        </ConvexClientProvider>
      </body>
    </html>
  );
}
