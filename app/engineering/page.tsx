import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import EngineeringHero from "@/components/sections/engineering/EngineeringHero";
import EngineeringDomains from "@/components/sections/engineering/EngineeringDomains";
import EngineeringProcess from "@/components/sections/engineering/EngineeringProcess";
import Platforms from "@/components/sections/engineering/Platforms";
import TechnologyStack from "@/components/sections/engineering/TechnologyStack";
import OpenEngineering from "@/components/sections/engineering/OpenEngineering";
import EngineeringCTA from "@/components/sections/engineering/EngineeringCTA";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Engineering",
  description:
    "OntoPhi builds software and computing systems across optimization, runtime systems, compiler technologies, edge computing, platforms, and performance engineering.",

  keywords: [
    "OntoPhi engineering",
    "AI systems engineering",
    "runtime systems",
    "compiler technologies",
    "edge computing",
    "software optimization",
    "performance engineering",
    "computing platforms",
  ],

  alternates: {
    canonical: "https://ontophi.com/engineering",
  },

  openGraph: {
    title: "Engineering | OntoPhi",
    description:
      "Engineering software and computing systems across optimization, runtimes, compilers, edge computing, and platforms.",
    url: "https://ontophi.com/engineering",
    siteName: "OntoPhi",
    type: "website",
  },

  twitter: {
    card: "summary",
    title: "Engineering | OntoPhi",
    description:
      "OntoPhi engineering across optimization, runtime systems, compilers, edge computing, and platforms.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function EngineeringPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-950 dark:text-white">
      <Navbar />

      <main>
        <EngineeringHero />
        <EngineeringDomains />
        <EngineeringProcess />
        <Platforms />
        <TechnologyStack />
        <OpenEngineering />
        <EngineeringCTA />
      </main>

      <Footer />
    </div>
  );
}

