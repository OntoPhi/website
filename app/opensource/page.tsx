import type { Metadata } from "next";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import OpenSourceHero from "@/components/sections/opensource/OpenSourceHero";
import OpenSourcePhilosophy from "@/components/sections/opensource/OpenSourcePhilosophy";
import FeaturedProjects from "@/components/sections/opensource/FeaturedProjects";
import Contribution from "@/components/sections/opensource/Contribution";
import OpenSourceCTA from "@/components/sections/opensource/OpenSourceCTA";

export const metadata: Metadata = {
  title: "Open Source",
  description:
    "Open technologies and collaborative engineering at OntoPhi.",
};

export default function OpenSourcePage() {
  return (
    <>
      <Navbar />

      <main className="pt-20">
        <OpenSourceHero />
        <OpenSourcePhilosophy />
        <FeaturedProjects />
        <Contribution />
        <OpenSourceCTA />
      </main>

      <Footer />
    </>
  );
}
