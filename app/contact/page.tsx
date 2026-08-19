import type { Metadata } from "next";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import ContactHero from "@/components/sections/contact/ContactHero";
import ContactInfo from "@/components/sections/contact/ContactInfo";
import ContactForm from "@/components/sections/contact/ContactForm";
import FAQ from "@/components/sections/contact/FAQ";
import ContactCTA from "@/components/sections/contact/ContactCTA";

export const metadata: Metadata = {
  title: "Connect with Our Labs",
  description: "Connect with OntoPhi. Reach our specialized divisions for core computing systems infrastructure, compiler engineering, or computational neuroscience partnerships.",
  openGraph: {
    title: "Contact OntoPhi | Joint Computing Research Systems",
    description: "Inquire about technology partnerships, academic research collaborations, or engineering career tracks.",
  },
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      {/* 
        This master canvas handles the smooth background and global color transition 
        fluidly across all five child modules when the user toggles dark mode.
      */}
      <main className="bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 min-h-screen transition-colors duration-300">
        <ContactHero />
        <ContactInfo />
        <ContactForm />
        <FAQ />
        <ContactCTA />
      </main>

      <Footer />
    </>
  );
}

