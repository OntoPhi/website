import type { Metadata } from "next";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import ProductsHero from "@/components/sections/products/ProductsHero";
import ProductVision from "@/components/sections/products/ProductVision";
import ProductCategories from "@/components/sections/products/ProductCategories";
import ProductRoadmap from "@/components/sections/products/ProductRoadmap";
import ProductsCTA from "@/components/sections/products/ProductsCTA";


export const metadata: Metadata = {
  title: "Products",
  description:
    "OntoPhi develops computing platforms and software products that connect research, systems engineering, optimization, and real-world deployment.",

  keywords: [
    "OntoPhi products",
    "computing platforms",
    "AI optimization",
    "edge computing",
    "AI systems",
    "software platforms",
    "computing infrastructure",
  ],

  alternates: {
    canonical: "https://ontophi.com/products",
  },

  openGraph: {
    title: "Products | OntoPhi",
    description:
      "Computing platforms and software products connecting research, engineering, optimization, and deployment.",
    url: "https://ontophi.com/products",
    siteName: "OntoPhi",
    type: "website",
  },

  twitter: {
    card: "summary",
    title: "Products | OntoPhi",
    description:
      "OntoPhi computing platforms and software products.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function ProductsPage() {
  return (
    <>
      <Navbar />

      <main className="pt-10">
        <ProductsHero />
        <ProductVision />
	<ProductCategories />
	<ProductRoadmap />
	<ProductsCTA />
      </main>

      <Footer />
    </>
  );
}

