import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./providers"; // Import your provider component
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "OntoPhi",
  description: "Advancing intelligent computing structures.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        {/* Wrap children context to propagate dark mode values */}
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

