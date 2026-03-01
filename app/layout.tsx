import type { Metadata } from "next";
import AppProviders from "@/components/providers/AppProviders";
import { dmsans, fanlste, satoshi } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Charmbuddy",
  description: "Toko aksesoris untuk menemukan gaya unikmu.",
  
  // OPEN GRAPH (OG) / PREVIEW WHATSAPP
  openGraph: {
    title: "Charmbuddy - Find Your Bloom",
    description: "Mix, match, and customize your everyday charms!",
    url: "https://charmbuddy.com", // Nanti diganti sama yang vercel nya
    siteName: "Charmbuddy",
    images: [
      {
        url: "/blueberrybg.jpg", // Gambar ini harus ada di dalem folder "public"
        width: 1200,             
        height: 630,
        alt: "Preview Charmbuddy",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${fanlste.variable} ${satoshi.variable} ${dmsans.variable}`}>
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}

