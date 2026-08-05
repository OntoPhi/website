import Image from "next/image";

export default function Hero() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-[1400px] px-8 lg:px-12">

        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-24">

          {/* LEFT */}

          <div>

            <p className="mb-8 text-xs font-semibold uppercase tracking-[0.35em] text-gray-500">
              INTELLIGENT COMPUTING
            </p>

            <h1 className="text-6xl md:text-7xl xl:text-[88px] font-semibold leading-[0.95] tracking-tight">
              Understanding <br /> Intelligence
            </h1>

            <h2 className="mt-8 text-3xl md:text-4xl font-light text-gray-600 leading-tight">
              Engineering the Future
              <br />
              of Intelligent Computing.
            </h2>

            <p className="mt-10 max-w-xl text-xl leading-9 text-gray-500">
              We build software that powers intelligent computing—from AI
              optimization and runtime systems to Linux kernel engineering,
              edge AI, and next-generation computing platforms.
            </p>

            <button className="mt-12 rounded-full bg-black px-8 py-4 text-white hover:bg-gray-800 transition">
              Explore Research & Engineering →
            </button>

          </div>

          {/* RIGHT */}

    
        </div>

      </div>
    </section>
  );
}

