import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Umesha Shehani Abeywickrama | IT Undergraduate & Full-Stack Developer",
  description:
    "Portfolio of Umesha Shehani Abeywickrama. BSc (Hons) Information Technology undergraduate at SLIIT. Full-stack web developer, mobile app builder, and AI-assisted product designer.",
  keywords: [
    "Umesha Shehani Abeywickrama",
    "Full-Stack Developer",
    "SLIIT",
    "React",
    "Flutter",
    "MERN",
    "Portfolio",
    "Sri Lanka",
    "IT Undergraduate",
  ],
  authors: [{ name: "Umesha Shehani Abeywickrama" }],
  openGraph: {
    title: "Umesha Shehani Abeywickrama | IT Undergraduate & Full-Stack Developer",
    description:
      "BSc (Hons) IT undergraduate at SLIIT. Building full-stack web platforms, cross-platform mobile apps, and AI-assisted products.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Umesha Shehani Abeywickrama | Portfolio",
    description:
      "Full-stack developer, mobile app builder, and AI product designer.",
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
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
