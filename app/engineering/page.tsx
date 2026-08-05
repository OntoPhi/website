import type { Metadata } from "next";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import EngineeringHero from "@/components/sections/engineering/EngineeringHero";
import EngineeringDomains from "@/components/sections/engineering/EngineeringDomains";
import TechnologyStack from "@/components/sections/engineering/TechnologyStack";
import EngineeringProcess from "@/components/sections/engineering/EngineeringProcess";
import Platforms from "@/components/sections/engineering/Platforms";
import OpenEngineering from "@/components/sections/engineering/OpenEngineering";
import EngineeringCTA from "@/components/sections/engineering/EngineeringCTA";

export const metadata: Metadata = {
  title: "Engineering",
  description:
    "Engineering intelligent computing through systems software, AI infrastructure, compiler technologies, and embedded intelligence.",
};

export default function EngineeringPage() {
  return (
    <>
      <Navbar />

      <main className="pt-20">
        <EngineeringHero />
        <EngineeringDomains />
        <TechnologyStack />
        <EngineeringProcess />
        <Platforms />
        <OpenEngineering />
        <EngineeringCTA />
      </main>

      <Footer />
    </>
  );
}
