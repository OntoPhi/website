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
  description: "Get in touch with OntoPhi.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main className="pt-20">
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
