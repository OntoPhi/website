import type { Metadata } from "next";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import InsightsHero from "@/components/sections/insights/InsightsHero";
import FeaturedArticles from "@/components/sections/insights/FeaturedArticles";
import Topics from "@/components/sections/insights/Topics";
import Newsletter from "@/components/sections/insights/Newsletter";
import InsightsCTA from "@/components/sections/insights/InsightsCTA";

export const metadata: Metadata = {
  title: "Insights",
  description: "Research articles, engineering insights, and technical publications.",
};

export default function InsightsPage() {
  return (
    <>
      <Navbar />

      <main className="pt-20">
        <InsightsHero />
        <FeaturedArticles />
        <Topics />
        <Newsletter />
        <InsightsCTA />
      </main>

      <Footer />
    </>
  );
}
