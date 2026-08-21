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
    "Explore OntoPhi open-source software, tools, and engineering projects for computing systems, optimization, compilers, runtimes, and edge computing.",

  keywords: [
    "OntoPhi open source",
    "open source computing",
    "compiler projects",
    "runtime systems",
    "AI optimization",
    "edge computing",
    "systems software",
    "open source engineering",
  ],

  alternates: {
    canonical: "https://ontophi.com/opensource",
  },

  openGraph: {
    title: "Open Source | OntoPhi",
    description:
      "Open-source software and engineering projects for computing systems, optimization, compilers, runtimes, and edge computing.",
    url: "https://ontophi.com/opensource",
    siteName: "OntoPhi",
    type: "website",
  },

  twitter: {
    card: "summary",
    title: "Open Source | OntoPhi",
    description:
      "Explore OntoPhi open-source software, tools, and engineering projects.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function OpenSourcePage() {
  return (
    <>
      <Navbar />

      <main className="pt-10">
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

