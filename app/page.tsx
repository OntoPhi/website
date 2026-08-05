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

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="pt-20">
        <Hero />
        <CoreTechnologies />
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
