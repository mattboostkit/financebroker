import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Finance Calculators | Estimate Loan Costs",
  description:
    "Free finance calculators for bridging loans, development finance, and BTL mortgages. Estimate costs, LTV, interest, and fees instantly. Get personalised quotes from our experts.",
  alternates: {
    canonical: '/calculator',
  },
  openGraph: {
    title: "Finance Calculators | Estimate Loan Costs",
    description:
      "Free finance calculators for bridging loans, development finance, and BTL mortgages. Estimate costs, LTV, interest, and fees instantly.",
    url: '/calculator',
  },
};

export default function CalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
