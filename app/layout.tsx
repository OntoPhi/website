import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ontophi.com"),

  title: {
    default: "OntoPhi — Computing Research and Engineering",
    template: "%s | OntoPhi",
  },

  description:
    "OntoPhi conducts research and engineering in computing systems, optimization, compiler technologies, edge computing, and cognitive systems.",

  keywords: [
    "OntoPhi",
    "computing research",
    "computing systems",
    "compiler technologies",
    "runtime systems",
    "AI optimization",
    "edge computing",
    "distributed systems",
    "performance engineering",
    "computational neuroscience",
    "cognitive systems",
  ],

  authors: [{ name: "OntoPhi" }],
  creator: "OntoPhi",
  publisher: "OntoPhi",

  applicationName: "OntoPhi",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: "https://ontophi.com",
  },

  openGraph: {
    type: "website",
    url: "https://ontophi.com",
    siteName: "OntoPhi",
    title: "OntoPhi — Computing Research and Engineering",
    description:
      "Research and engineering in computing systems, optimization, compiler technologies, edge computing, and cognitive systems.",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "OntoPhi — Computing Research and Engineering",
    description:
      "Research and engineering in computing systems, optimization, compiler technologies, edge computing, and cognitive systems.",
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
