import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ScrollToTop } from "@/components/scroll-to-top";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Peyton Salvant - Full-Stack Developer & AI Engineer",
    template: "%s | Peyton Salvant",
  },
  description:
    "Full-stack engineer specializing in AI integrations, scalable infrastructure, and polished UI/UX. Building end-to-end applications with React, Next.js, AWS, and third-party APIs.",
  keywords: [
    "Full-Stack Developer",
    "AI Engineer",
    "Web Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Python",
    "AWS",
    "Node.js",
    "Stripe Integration",
    "Peyton Salvant",
    "Portfolio",
    "JavaScript",
    "Frontend",
    "Backend",
  ],
  authors: [{ name: "Peyton Salvant" }],
  creator: "Peyton Salvant",
  metadataBase: new URL("https://peyton.dev"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://peyton.dev",
    title: "Peyton Salvant - Full-Stack Developer & AI Engineer",
    description:
      "Full-stack engineer specializing in AI integrations, scalable infrastructure, and polished UI/UX. Building end-to-end applications with React, Next.js, AWS, and third-party APIs.",
    siteName: "Peyton Salvant Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Peyton Salvant - Full-Stack Developer & AI Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Peyton Salvant - Full-Stack Developer & AI Engineer",
    description:
      "Full-stack engineer specializing in AI integrations, scalable infrastructure, and polished UI/UX.",
    creator: "@peytonsalvant",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          <ScrollToTop />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
