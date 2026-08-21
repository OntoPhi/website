import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";

export default function OpenEngineering() {
  return (
    <section className="bg-gray-50 py-20 transition-colors duration-300 dark:bg-gray-900/40 sm:py-24">
      <Container>
        <SectionHeader
          badge="Open Engineering"
          title="Build in the Open"
          description="We share engineering knowledge, tools, and selected technologies to make useful ideas accessible, reproducible, and easier to build upon."
        />

        <div className="mt-10 flex justify-center">
          <Link
            href="/opensource"
            className="inline-flex items-center rounded-full border border-gray-300 bg-white px-7 py-3 text-sm font-semibold text-gray-900 transition hover:border-black hover:shadow-sm dark:border-gray-700 dark:bg-gray-950 dark:text-gray-200 dark:hover:border-white"
          >
            Explore Open Source
          </Link>
        </div>
      </Container>
    </section>
  );
}
