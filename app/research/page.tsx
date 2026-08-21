import type { Metadata } from "next";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import ResearchHero from "@/components/sections/research/ResearchHero";
import ResearchPhilosophy from "@/components/sections/research/ResearchPhilosophy";
import ResearchPillars from "@/components/sections/research/ResearchPillars";
import ResearchMethodology from "@/components/sections/research/ResearchMethodology";
import ResearchRoadmap from "@/components/sections/research/ResearchRoadmap";
import Collaboration from "@/components/sections/research/Collaboration";

export const metadata: Metadata = {
  title: "Research",
  description:
    "OntoPhi conducts research across computation, systems, optimization, compiler technologies, and cognitive systems, connecting scientific understanding with practical engineering.",

  keywords: [
    "OntoPhi research",
    "computing research",
    "systems research",
    "optimization research",
    "compiler research",
    "computational neuroscience",
    "cognitive neuroscience",
    "cognitive systems",
    "future computing",
  ],

  alternates: {
    canonical: "https://ontophi.com/research",
  },

  openGraph: {
    title: "Research | OntoPhi",
    description:
      "Research across computation, systems, optimization, compiler technologies, and cognitive systems.",
    url: "https://ontophi.com/research",
    siteName: "OntoPhi",
    type: "website",
  },

  twitter: {
    card: "summary",
    title: "Research | OntoPhi",
    description:
      "OntoPhi research across computation, systems, optimization, compiler technologies, and cognitive systems.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function ResearchPage() {
  return (
    <>
      <Navbar />

      <main className="pt-10">
        <ResearchHero />
        <ResearchPhilosophy />
        <ResearchPillars /> 
        <ResearchMethodology />
        <ResearchRoadmap />
        <Collaboration />
      </main>

      <Footer />
    </>
  );
}

