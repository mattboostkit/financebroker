import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Buy-to-Let Mortgages | BTL Finance for Landlords",
  description:
    "Unregulated BTL mortgages from 4.5%. Up to 80% LTV. Limited company and SPV specialists. Portfolio landlords welcome. HMO and multi-unit finance available.",
  alternates: {
    canonical: '/property-finance/buy-to-let',
  },
  openGraph: {
    title: "Buy-to-Let Mortgages | BTL Finance for Landlords",
    description:
      "Unregulated BTL mortgages from 4.5%. Up to 80% LTV. Limited company and SPV specialists. Portfolio landlords welcome.",
    url: '/property-finance/buy-to-let',
  },
};

export default function BuyToLetLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
