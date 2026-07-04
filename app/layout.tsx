import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";

import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Sage House Therapy",
    template: "%s | Sage House Therapy",
  },
  description:
    "Sage House Therapy offers a calm, professional space for therapy and emotional wellbeing.",
  metadataBase: new URL("https://sagehousetherapy.co.uk"),
  applicationName: "Sage House Therapy",
  authors: [{ name: "Sage House Therapy" }],
  creator: "Sage House Therapy",
  publisher: "Sage House Therapy",
  openGraph: {
    title: "Sage House Therapy",
    description:
      "A calm, professional space for therapy and emotional wellbeing.",
    url: "https://sagehousetherapy.co.uk",
    siteName: "Sage House Therapy",
    locale: "en_GB",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-GB"
      className={`${inter.variable} ${cormorantGaramond.variable}`}
    >
      <body>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
