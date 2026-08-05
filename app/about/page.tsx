import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import AboutHero from "@/components/sections/about/AboutHero";
import OurStory from "@/components/sections/about/OurStory";
import Mission from "@/components/sections/about/Mission";
import Vision from "@/components/sections/about/Vision";
import CorePrinciples from "@/components/sections/about/CorePrinciples";
import Roadmap from "@/components/sections/about/Roadmap";
import JoinUs from "@/components/sections/about/JoinUs";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about OntoPhi's mission, vision, research philosophy, and engineering approach to advancing intelligent computing.",
};


export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="pt-20">
        <AboutHero />
        <OurStory />
        <Mission />
        <Vision />
        <CorePrinciples />
        <Roadmap />
        <JoinUs />
      </main>

      <Footer />
    </>
  );
}
