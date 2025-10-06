import type { Metadata } from "next";
import { ReactLenis } from "lenis/react";
import {Instrument_Serif, Instrument_Sans } from "next/font/google";
import "./globals.css";
import GridContainer from "@/lib/components/grid-container";

const geistSans = Instrument_Serif({
  variable: "--font-grandiflora-one",
  subsets: ["latin"],
  weight: "400",
});

const geistMono = Instrument_Sans({
  variable: "--font-alegreya-sans",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "photos.nischal.dev",
  description: "A minimalist photo gallery by Nischal Mudennavar;",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
   
  return (
    <html lang="en">
      <ReactLenis root />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <GridContainer>{children}</GridContainer>
      </body>
    </html>
  );
}
