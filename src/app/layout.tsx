import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SmoothScroll } from "@/components/layout/SmoothScroll";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gagandeep Kushwah — Full Stack Developer & AI Enthusiast",
  description:
    "Portfolio of Gagandeep Kushwah — B.Tech ECE student, Full Stack Developer, AI enthusiast, and MERN stack developer building scalable digital products.",
  keywords: [
    "Gagandeep Kushwah",
    "Full Stack Developer",
    "MERN Stack",
    "React Developer",
    "Next.js Developer",
    "AI Developer",
    "ECE Student",
    "Portfolio",
  ],
  authors: [{ name: "Gagandeep Kushwah" }],
  creator: "Gagandeep Kushwah",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://gagandeepkushwah.vercel.app",
    title: "Gagandeep Kushwah — Full Stack Developer & AI Enthusiast",
    description:
      "Building intelligent digital experiences with Full Stack Development, AI, and Electronics.",
    siteName: "Gagandeep Kushwah Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gagandeep Kushwah — Full Stack Developer",
    description: "Building scalable web applications and AI-powered experiences.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={spaceGrotesk.variable} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <SmoothScroll>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
