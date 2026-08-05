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
    "Explore OntoPhi's intelligent computing products and technology roadmap.",
};

export default function ProductsPage() {
  return (
    <>
      <Navbar />

      <main className="pt-20">
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
