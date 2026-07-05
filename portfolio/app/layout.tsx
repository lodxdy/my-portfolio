import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/motion/smooth-scroll-provider";
import { CursorProvider } from "@/components/motion/cursor-context";
import { CustomCursor } from "@/components/motion/custom-cursor";
import { SiteNav } from "@/components/layout/site-nav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Lodxdy — Creative Developer",
  description:
    "Systems for the web, objects for the body — a portfolio built around composable tools and Buddhist design philosophy.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[var(--color-bg)]">
        <CursorProvider>
          <SiteNav />
          <SmoothScrollProvider>{children}</SmoothScrollProvider>
          <CustomCursor />
        </CursorProvider>
        <div className="grain-overlay" aria-hidden />
      </body>
    </html>
  );
}
