import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";

const dmSerif = localFont({
  src: [
    { path: "./fonts/DMSerifDisplay-Regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/DMSerifDisplay-Italic.woff2", weight: "400", style: "italic" },
  ],
  variable: "--font-dm-serif",
  display: "swap",
});

const figtree = localFont({
  src: "./fonts/Figtree-Variable.woff2",
  weight: "300 900",
  variable: "--font-figtree",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Maheshwari Polyclinic | Dr. Munesh Maheshwari, Physician & Critical Care, Jaipur",
  description:
    "Dr. Munesh Maheshwari: 26+ years of compassionate, evidence-based physician and critical care in Jaipur. Book an appointment or call the clinic.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${dmSerif.variable} ${figtree.variable}`}>
      <body>{children}</body>
    </html>
  );
}
