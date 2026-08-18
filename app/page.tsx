import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import CoreTechnologies from "@/components/sections/CoreTechnologies";
import ResearchAreas from "@/components/sections/ResearchAreas";
import EngineeringExpertise from "@/components/sections/EngineeringExpertise";
import Products from "@/components/sections/Products";
import OurApproach from "@/components/sections/OurApproach";
import OpenSource from "@/components/sections/OpenSource";
import Insights from "@/components/sections/Insights";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/layout/Footer";

// Explicitly declare page-level metadata overrides if needed
export const metadata: Metadata = {
  title: "Exploring the Foundations of Future Computing",
  description: "OntoPhi explores the foundations of intelligence through computation, cognition, and engineering—transforming curiosity into breakthrough technologies.",
};

export default function Home() {
  // Comprehensive, crawlable technical structure mapping your precise company domains
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ResearchOrganization",
    "name": "OntoPhi",
    "url": "https://ontophi.com",
    "logo": "https://ontophi.com",
    "description": "Explorations into the structural foundations of intelligence through computer science, hardware compiler optimizations, and brain-inspired neuroscience architectures.",
    "sameAs": [
      "https://github.com",
      "https://x.com"
    ],
    "knowsAbout": [
      "Computational Neuroscience",
      "Cognitive Neuroscience",
      "Neuro engineering",
      "Cognitive Systems",
      "Systems Software",
      "Compiler Technologies",
      "AI Infrastructure",
      "Embedded Intelligence",
      "Optimization & Compiler Research",
      "Distributed Systems",
      "Performance Engineering"
    ]
  };

  return (
    <>
      {/* 
        Inject the JSON-LD Structured Script cleanly inside a JSX Fragment. 
        This remains invisible to your web visitors but is picked up directly by Googlebot.
      */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Navbar />

      <main className="pt-10">
        <Hero />
        { /*<CoreTechnologies /> */ }
        <ResearchAreas />
        <EngineeringExpertise />
        <Products />
        <OurApproach />
        <OpenSource />
        <Insights />
        <Footer />
      </main>
    </>
  );
}
