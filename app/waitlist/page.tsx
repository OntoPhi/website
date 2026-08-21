import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WaitlistForm from "./WaitlistForm";


export const metadata: Metadata = {
  title: "Waitlist",
  description:
    "Join the OntoPhi research and engineering network for updates on optimization, runtime systems, compiler technologies, edge computing, systems research, and cognitive systems.",

  keywords: [
    "OntoPhi",
    "computing research",
    "optimization",
    "runtime systems",
    "compiler technologies",
    "edge computing",
    "systems research",
    "distributed systems",
    "performance engineering",
    "computational neuroscience",
    "cognitive neuroscience",
    "neuro engineering",
    "cognitive systems",
  ],

  alternates: {
    canonical: "https://ontophi.com/waitlist",
  },

  openGraph: {
    title: "OntoPhi Waitlist — Research and Engineering",
    description:
      "Follow OntoPhi research and engineering across optimization, runtime systems, compiler technologies, edge computing, systems research, and cognitive systems.",
    url: "https://ontophi.com/waitlist",
    siteName: "OntoPhi",
    type: "website",
  },

  twitter: {
    card: "summary",
    title: "OntoPhi Waitlist — Research and Engineering",
    description:
      "Follow OntoPhi research and engineering across computing systems, optimization, compiler technologies, edge computing, and cognitive systems.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function WaitlistPage() {
  return (
    <>
      <Navbar />

      <main className="relative min-h-screen overflow-hidden bg-white text-gray-900 transition-colors duration-300 dark:bg-gray-950 dark:text-white">
        {/* Subtle background */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-gray-100/70 blur-3xl dark:bg-gray-900/50" />

          <div
            className="absolute inset-0 opacity-[0.035] dark:opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />
        </div>

        <section className="px-4 pb-24 pt-32 sm:pt-36">
          <div className="mx-auto max-w-5xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gray-500 dark:text-gray-400">
              OntoPhi
            </p>

            <h1 className="mt-6 text-center text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
              Stay Close to the Work
            </h1>

            <p className="mx-auto mt-5 max-w-4xl text-center text-base leading-7 text-gray-600 dark:text-gray-400 sm:text-lg sm:leading-8">
              Follow OntoPhi&apos;s research, engineering, open-source work,
              and early technology releases.
            </p>
          </div>

          <div className="mx-auto mt-16 w-full max-w-2xl">
            <WaitlistForm />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}