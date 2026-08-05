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
    "OntoPhi research in intelligent computing, neuroscience, systems software, artificial intelligence, and engineering.",
};

export default function ResearchPage() {
  return (
    <>
      <Navbar />

      <main className="pt-20">
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
