import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "MVNO Success Blueprint · Cape Town 2026 · The deck",
  description:
    "Six perspectives, one operating model. From the market opportunity through value propositions, customer value management, customer experience, technology and value-added services. The full Cape Town workshop deck, NDA-gated.",
  metadataBase: new URL("https://mvno-nation-cpt.vercel.app"),
  openGraph: {
    title: "MVNO Success Blueprint · Cape Town 2026",
    description:
      "Six perspectives, one operating model. What it takes to win in 2026 and beyond. The full Cape Town workshop deck, NDA-gated.",
    type: "website",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="min-h-screen bg-bg text-fg">{children}</body>
    </html>
  );
}
