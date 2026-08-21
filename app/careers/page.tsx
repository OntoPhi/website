import type { Metadata } from "next";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import CareersHero from "@/components/sections/careers/CareersHero";
import WhyJoin from "@/components/sections/careers/WhyJoin";
import OpenRoles from "@/components/sections/careers/OpenRoles";
import HiringProcess from "@/components/sections/careers/HiringProcess";
import CareersCTA from "@/components/sections/careers/CareersCTA";


export const metadata: Metadata = {
  title: "Careers",
  description:
    "Explore careers at OntoPhi across computing research, software engineering, systems engineering, optimization, compiler technologies, and cognitive systems.",

  keywords: [
    "OntoPhi careers",
    "AI engineering careers",
    "systems engineering jobs",
    "computing research careers",
    "compiler engineering",
    "runtime systems",
    "edge computing",
    "AI research",
  ],

  alternates: {
    canonical: "https://ontophi.com/careers",
  },

  openGraph: {
    title: "Careers | OntoPhi",
    description:
      "Work with OntoPhi across computing research, software engineering, systems, optimization, and cognitive systems.",
    url: "https://ontophi.com/careers",
    siteName: "OntoPhi",
    type: "website",
  },

  twitter: {
    card: "summary",
    title: "Careers | OntoPhi",
    description:
      "Explore research and engineering opportunities at OntoPhi.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function CareersPage() {
  return (
    <>
      <Navbar />

      <main className="pt-10">
        <CareersHero />
        <WhyJoin />
        <OpenRoles />
        <HiringProcess />
        <CareersCTA />
      </main>

      <Footer />
    </>
  );
}

