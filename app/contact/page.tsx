import type { Metadata } from "next";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import ContactHero from "@/components/sections/contact/ContactHero";
import ContactInfo from "@/components/sections/contact/ContactInfo";
import ContactForm from "@/components/sections/contact/ContactForm";
import FAQ from "@/components/sections/contact/FAQ";
import ContactCTA from "@/components/sections/contact/ContactCTA";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact OntoPhi about research, engineering, partnerships, open-source projects, computing platforms, and opportunities to collaborate.",

  keywords: [
    "OntoPhi contact",
    "OntoPhi research",
    "computing partnerships",
    "AI engineering collaboration",
    "systems research",
    "technology collaboration",
    "open source collaboration",
  ],

  alternates: {
    canonical: "https://ontophi.com/contact",
  },

  openGraph: {
    title: "Contact | OntoPhi",
    description:
      "Contact OntoPhi about research, engineering, partnerships, open source, and technology collaboration.",
    url: "https://ontophi.com/contact",
    siteName: "OntoPhi",
    type: "website",
  },

  twitter: {
    card: "summary",
    title: "Contact | OntoPhi",
    description:
      "Contact OntoPhi about research, engineering, partnerships, and collaboration.",
  },

  robots: {
    index: true,
    follow: true,
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

