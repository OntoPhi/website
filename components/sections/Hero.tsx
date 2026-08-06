import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-28">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[720px] w-[720px] -translate-x-1/2 rounded-full bg-gray-100 opacity-60 blur-3xl" />
      </div>

      <div className="mx-auto max-w-[1440px] px-10 lg:px-12">
        <div className="grid items-center gap-24 lg:grid-cols-2">

          {/* LEFT */}

          <div className="max-w-2xl">

            <p className="mb-8 text-xs font-semibold uppercase tracking-[0.4em] text-gray-600">
              UNDERSTAND • DISCOVER • ENGINEER
            </p>
            <h1 className="mb-10 text-4xl font-bold  tracking-tight text-black  xl:text-[50px]">
              Engineering the Foundations of Future Computing.
            </h1>

            <h2 className="mt-8 text-2xl font-light tracking-tight text-gray-700 md:text-4xl">
            The Unseen Shapes the Seen.
            </h2>

            <p className="mt-10 max-w-xl text-lg leading-9 text-gray-600 md:text-xl">
              Advancing the science and engineering of future computing through
              Intelligent Computing, Systems Research, and Intelligence
              Research.
            </p>

            <div className="mt-12 flex flex-wrap gap-2">

              <Link
                href="/research"
                className="rounded-full border border-gray-300 px-8 py-4 text-sm font-medium text-white transition-all duration-300 hover:border-black hover:bg-gray-50"
              >
                Explore Research
              </Link>

              <Link
                href="/engineering"
                className="rounded-full border border-gray-300 px-8 py-4 text-sm font-medium text-gray-900 transition-all duration-300 hover:border-black hover:bg-gray-50"
              >
                Explore Engineering
              </Link>

            </div>

            {/* Core Domains */}

            <div className="mt-16 grid gap-8 border-t border-gray-200 pt-10 md:grid-cols-3">

              <div>

                <h3 className="text-lg font-semibold leading-snug text-black">
                  Intelligent
                  <br />
                  Computing
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-500">
                  Optimization
                  <br />
                  Runtime Systems
                  <br />
                  Compiler Technologies
                  <br />
                  Edge Computing
                  <br />
                  Platforms
                </p>

              </div>

              <div>

                <h3 className="text-lg font-semibold leading-snug text-black">
                  Systems
                  <br />
                  Research
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-500">
                  Optimization &amp;
                  <br />
                  Compiler Research
                  <br />
                  Distributed Systems
                  <br />
                  Performance Engineering
                </p>

              </div>

              <div>

                <h3 className="text-lg font-semibold leading-snug text-black">
                  Intelligence
                  <br />
                  Research
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-500">
                  Computational Neuroscience
                  <br />
                  Cognitive Neuroscience
                  <br />
                  Neuro engineering
                  <br />
                  Cognitive Systems
                </p>

              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div className="relative flex items-center justify-center">

            <div className="relative flex h-[580px] w-[580px] items-center justify-center">

              {/* Glow */}

              <div className="absolute h-[520px] w-[520px] rounded-full bg-gradient-to-br from-gray-100 via-white to-gray-100 opacity-80 blur-3xl" />

              {/* Rings */}

              <div className="absolute h-[520px] w-[520px] rounded-full border border-gray-300" />

              <div className="absolute h-[390px] w-[390px] rounded-full border border-gray-300" />

              <div className="absolute h-[260px] w-[260px] rounded-full border border-gray-300" />

              {/* Logo */}

              <div className="relative z-10 rounded-3xl border border-gray-200 bg-white p-10 shadow-2xl">

                <Image
                  src="/logo/website_print.png"
                  alt="OntoPhi"
                  width={180}
                  height={180}
                  priority
                />

              </div>

              {/* Card 1 */}

              <div className="absolute left-0 top-10 rounded-2xl border border-gray-200 bg-white px-6 py-4 shadow-xl transition duration-300 hover:-translate-y-1">

                <p className="text-[11px] uppercase tracking-[0.3em] text-gray-500">
                  Engineering
                </p>

                <p className="mt-2 font-semibold text-black">
                  Intelligent Computing
                </p>

              </div>

              {/* Card 2 */}

              <div className="absolute right-0 top-28 rounded-2xl border border-gray-200 bg-white px-6 py-4 shadow-xl transition duration-300 hover:-translate-y-1">

                <p className="text-[11px] uppercase tracking-[0.3em] text-gray-500">
                  Research
                </p>

                <p className="mt-2 font-semibold text-black">
                  Systems Research
                </p>

              </div>

              {/* Card 3 */}

              <div className="absolute bottom-24 left-2 rounded-2xl border border-gray-200 bg-white px-6 py-4 shadow-xl transition duration-300 hover:-translate-y-1">

                <p className="text-[11px] uppercase tracking-[0.3em] text-gray-500">
                  Science
                </p>

                <p className="mt-2 font-semibold text-black">
                  Intelligence Research
                </p>

              </div>

              {/* Card 4 */}

              <div className="absolute bottom-24 right-0 rounded-2xl border border-gray-200 bg-white px-6 py-4 shadow-xl transition duration-300 hover:-translate-y-1">

                <p className="text-[11px] uppercase tracking-[0.3em] text-gray-500">
                  Knowledge
                </p>

                <p className="mt-2 font-semibold text-black">
                  Open Source &amp; Insights
                </p>

              </div>

              {/* Bottom Badge */}

              <div className="absolute bottom-0 rounded-full border border-gray-300 bg-white px-8 py-3 shadow-lg">

                <p className="text-sm font-medium text-gray-700">
                  Research • Engineering • Discovery
                </p>

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
