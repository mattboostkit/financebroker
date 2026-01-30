import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Invoice Finance | Release Cash from Unpaid Invoices",
  description:
    "Invoice finance and factoring solutions. Release up to 90% of invoice value within 24 hours. Improve cash flow, fund growth. Confidential and disclosed options available.",
  alternates: {
    canonical: '/business-finance/invoice-finance',
  },
  openGraph: {
    title: "Invoice Finance | Release Cash from Unpaid Invoices",
    description:
      "Invoice finance and factoring solutions. Release up to 90% of invoice value within 24 hours. Improve cash flow, fund growth.",
    url: '/business-finance/invoice-finance',
  },
};

export default function InvoiceFinanceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
