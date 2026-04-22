import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "sonner";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

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
  description: "NB Auth adalah template otentikasi lengkap untuk aplikasi Next.js 16, menggunakan Better Auth, Drizzle ORM, dan Shadcn UI. Dengan fitur seperti pendaftaran, login, manajemen sesi, dan perlindungan rute, NB Auth memberikan fondasi yang kuat untuk membangun sistem otentikasi yang aman dan dapat diskalakan. Template ini dirancang untuk memudahkan pengembang dalam mengintegrasikan otentikasi ke dalam aplikasi mereka dengan cepat dan efisien.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", geistSans.variable, geistMono.variable, "font-sans", inter.variable)}
    >
      <body className="min-h-full flex flex-col">{children}
        <Toaster/>
      </body>
    </html>
  );
}
