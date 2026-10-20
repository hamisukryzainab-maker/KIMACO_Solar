import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { ASSETS, COMPANY } from "@/lib/constants";
import "./globals.css";

const manrope = localFont({
  src: "../public/fonts/manrope-latin.woff2",
  variable: "--font-manrope",
  weight: "400 800",
  display: "swap",
  preload: true,
  fallback: ["Arial", "sans-serif"],
});

const title = "KIMACO Nigeria Limited | Solar, Power & Renewable Energy Solutions";
const description = "KIMACO Nigeria Limited provides reliable, affordable and sustainable solar, power and renewable energy solutions for homes, businesses, institutions and industries across Nigeria.";

export const metadata: Metadata = {
  metadataBase: new URL(COMPANY.url),
  title,
  description,
  applicationName: COMPANY.brand,
  alternates: { canonical: COMPANY.url },
  openGraph: {
    type: "website",
    url: COMPANY.url,
    siteName: COMPANY.name,
    locale: "en_NG",
    title,
    description,
    images: [{ url: ASSETS.hero, alt: "KIMACO Solar rooftop solar installation" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [ASSETS.hero],
  },
  robots: { index: true, follow: true },
  category: "Renewable energy",
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#031D38" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
