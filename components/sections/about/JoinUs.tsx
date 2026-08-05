import Link from "next/link";
import Container from "@/components/ui/Container";

export default function JoinUs() {
  return (
    <section className="py-28">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gray-500">
            Join the Journey
          </p>

          <h2 className="mt-6 text-5xl font-bold tracking-tight">
            Advancing Intelligent Computing Together
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-gray-600">
            We believe the future of computing will emerge from the
            convergence of artificial intelligence, systems software,
            neuroscience, and engineering. Join us in building that future.
          </p>

          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/research"
              className="rounded-full bg-black px-8 py-4 text-white transition hover:bg-gray-800"
            >
              Explore Research
            </Link>

            <Link
              href="/contact"
              className="rounded-full border border-gray-300 px-8 py-4 transition hover:border-black hover:bg-gray-50"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
