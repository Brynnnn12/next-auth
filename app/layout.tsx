import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";

import "./globals.css";
import "aos/dist/aos.css";

import { cn } from "@/lib/utils";
import { Toaster } from "sonner";
import { AosProvider } from "@/components/aos-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NB Auth",
  description:
    "NB Auth adalah template autentikasi modern untuk Next.js 16 menggunakan Better Auth, Drizzle ORM, dan Shadcn UI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "h-full scroll-smooth antialiased",
        geistSans.variable,
        geistMono.variable,
        inter.variable,
        "font-sans"
      )}
    >
      <body className="min-h-screen bg-background text-foreground">
        <AosProvider />

        {children}

        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}