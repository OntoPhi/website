import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const sections = [
  {
    title: "Information We Collect",
    text: "We may collect information that you voluntarily provide when you contact us, submit an inquiry, or interact with our website.",
  },
  {
    title: "How We Use Information",
    text: "Information may be used to respond to inquiries, provide requested services, improve our website, and communicate with you when appropriate.",
  },
  {
    title: "Cookies & Analytics",
    text: "Our website may use cookies or similar technologies to support functionality, understand website usage, and improve the user experience.",
  },
  {
    title: "Data Security",
    text: "We take reasonable measures to protect information provided to us from unauthorized access, misuse, or disclosure.",
  },
  {
    title: "Contact",
    text: "If you have questions about this Privacy Policy or how your information is handled, please contact us through the OntoPhi website.",
  },
];

export default function PrivacyPage() {
  return (
    <>
      <Navbar />

      <main className="relative min-h-screen overflow-hidden bg-white text-gray-900 transition-colors duration-300 dark:bg-gray-950 dark:text-white">
        {/* Technical Background */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-gray-100/70 blur-3xl dark:bg-gray-900/50" />

          <div
            className="absolute inset-0 opacity-[0.035] dark:opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />
        </div>
        {/* Hero */}
        <header className="mx-auto flex max-w-5xl flex-col items-center px-4 pb-16 pt-32 text-center sm:pt-36">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gray-500 dark:text-gray-400">
            Privacy
          </p>
        
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
            Privacy Policy
          </h1>
        
          <p className="mt-6 max-w-2xl text-center text-base leading-7 text-gray-600 dark:text-gray-400 sm:text-lg">
            How OntoPhi approaches the collection, use, and protection of information
            across its digital platforms.
          </p>
        </header>

        {/* Policy */}
        <div className="mx-auto max-w-4xl px-4 pb-24">
          <div className="border-t border-gray-200 dark:border-gray-800">
            {sections.map((section, index) => (
              <section
                key={section.title}
                className="grid gap-5 border-b border-gray-200 py-10 dark:border-gray-800 md:grid-cols-[220px_1fr] md:gap-12"
              >
                <div>
                  <span className="font-mono text-xs text-gray-400 dark:text-gray-600">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h2 className="mt-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                    {section.title}
                  </h2>
                </div>

                <p className="max-w-2xl text-sm leading-7 text-gray-600 dark:text-gray-400 sm:text-base">
                  {section.text}
                </p>
              </section>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-2 text-xs text-gray-400 dark:text-gray-600 sm:flex-row sm:items-center sm:justify-between">
            <span>ONTOPHI / PRIVACY POLICY</span>
            <span>LAST UPDATED — AUGUST 2026</span>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
