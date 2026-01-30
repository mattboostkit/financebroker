import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Asset Finance | Equipment Leasing & Hire Purchase",
  description:
    "Asset finance for vehicles, plant, machinery, IT equipment. Hire purchase, finance lease, operating lease. Preserve cash flow. Tax-efficient solutions for UK businesses.",
  alternates: {
    canonical: '/business-finance/asset-finance',
  },
  openGraph: {
    title: "Asset Finance | Equipment Leasing & Hire Purchase",
    description:
      "Asset finance for vehicles, plant, machinery, IT equipment. Hire purchase, finance lease, operating lease. Preserve cash flow.",
    url: '/business-finance/asset-finance',
  },
};

export default function AssetFinanceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
