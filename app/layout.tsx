import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ontophi.com"),
  title: {
    default: "OntoPhi",
    template: "%s | OntoPhi",
  },
  description:
    "Advancing intelligent computing through AI, Systems Software, Linux Kernel, Device Drivers, High-Performance Computing, and Brain-Inspired Computing.",
  keywords: [
    "Artificial Intelligence",
    "Machine Learning",
    "Deep Learning",
    "Systems Software",
    "Compiler",
    "Runtime",
    "High Performance Computing",
    "Edge AI",
    "Neuro engineering",
    "Computational Neuroscience",
    "Brain Inspired Computing",
    "OntoPhi",
  ],
  authors: [
    {
      name: "OntoPhi",
    },
  ],
  creator: "OntoPhi",
  publisher: "OntoPhi",
  openGraph: {
    title: "OntoPhi",
    description:
      "Engineering Intelligent Computing through Research and Innovation.",
    url: "https://ontophi.com",
    siteName: "OntoPhi",
    locale: "en_US",
    type: "website",
  },
  // FIX: Protects contact text layers from unexpected client modifications
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

