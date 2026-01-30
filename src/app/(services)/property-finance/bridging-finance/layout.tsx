import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bridging Finance | Fast Short-Term Property Loans",
  description:
    "Bridging loans from 0.44% per month. Complete in 48 hours. Up to 75% LTV for property purchases, auctions, refurbishments. 100+ lenders. FCA regulated.",
  alternates: {
    canonical: '/property-finance/bridging-finance',
  },
  openGraph: {
    title: "Bridging Finance | Fast Short-Term Property Loans",
    description:
      "Bridging loans from 0.44% per month. Complete in 48 hours. Up to 75% LTV for property purchases, auctions, refurbishments.",
    url: '/property-finance/bridging-finance',
  },
};

export default function BridgingFinanceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
