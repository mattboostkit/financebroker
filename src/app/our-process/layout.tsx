import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Process | How We Work",
  description:
    "Our streamlined 7-step process from initial discussion to completion. Get indicative terms in 24 hours and complete in as little as 48 hours for bridging finance.",
  alternates: {
    canonical: '/our-process',
  },
  openGraph: {
    title: "Our Process | How We Work",
    description:
      "Our streamlined 7-step process from initial discussion to completion. Get indicative terms in 24 hours.",
    url: '/our-process',
  },
};

export default function OurProcessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
