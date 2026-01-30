import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Development Finance | Property Development Loans",
  description:
    "Development finance for residential and commercial projects. Up to 70% LTGDV, staged drawdowns. Ground-up builds, conversions, refurbishments. First-time developers welcome.",
  alternates: {
    canonical: '/property-finance/development-finance',
  },
  openGraph: {
    title: "Development Finance | Property Development Loans",
    description:
      "Development finance for residential and commercial projects. Up to 70% LTGDV, staged drawdowns. Ground-up builds, conversions, refurbishments.",
    url: '/property-finance/development-finance',
  },
};

export default function DevelopmentFinanceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
