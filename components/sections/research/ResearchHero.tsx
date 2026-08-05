import Link from "next/link";

import Container from "@/components/ui/Container";

export default function ResearchHero() {
  return (
    <section className="relative overflow-hidden py-32">
      <Container>
        <div className="mx-auto max-w-5xl text-center">

          {/* Label */}
          <div className="inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700">
            Research
          </div>

          {/* Title */}
          <h1 className="mt-8 text-5xl font-bold tracking-tight text-gray-900 md:text-7xl">
            Research for the
            <br />
            Future of
            <br />
            Intelligent Computing
          </h1>

          {/* Description */}
          <p className="mx-auto mt-10 max-w-4xl text-xl leading-9 text-gray-600">
            OntoPhi conducts interdisciplinary research spanning neuroscience,
            artificial intelligence, systems software, compiler technologies,
            runtime systems, Linux kernel engineering, high-performance
            computing, and intelligent infrastructure to advance the future of
            computing.
          </p>

          {/* CTA */}
          <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/engineering"
	      className="rounded-full border border-gray-300 px-8 py-4 transition hover:border-black hover:bg-white"
            >
              Explore Engineering
            </Link>

            <Link
              href="/opensource"
              className="rounded-full border border-gray-300 px-8 py-4 transition hover:border-black hover:bg-gray-50"
            >
              Open Research
            </Link>
          </div>

        </div>
      </Container>
    </section>
  );
}
