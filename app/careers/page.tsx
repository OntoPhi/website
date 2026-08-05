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
  description: "Join OntoPhi and help build the future of intelligent computing.",
};

export default function CareersPage() {
  return (
    <>
      <Navbar />

      <main className="pt-20">
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
