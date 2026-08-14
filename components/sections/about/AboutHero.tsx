import Container from "@/components/ui/Container";

export default function AboutHero() {
  return (
    <section className="py-16 sm:py-24 lg:py-32">
      <Container>
        <div className="mx-auto max-w-4xl text-center flex flex-col items-center">

          {/* Page Section Label */}
          <p className="text-[11px] font-bold uppercase tracking-[0.35em] text-gray-500 leading-none">
            ABOUT • OntoPhi
          </p>

          {/* Core Philosophy Statement */}
          <p className="mt-4 text-base font-medium italic tracking-wide text-gray-600">
            Science is Curiosity
          </p>

          {/* Unified Main Headline - Matches the Hero Page exactly */}
          <h1 className="mt-6 text-2xl font-semibold tracking-tight text-black sm:text-3xl md:text-6xl xl:text-7xl xl:leading-[1.15]">
            Exploring the Foundations of Future Computing
          </h1>

          {/* Unified Support Description Text - Matches the Hero Page exactly */}
          <p className="mx-auto mt-8 max-w-3xl text-base sm:text-lg leading-relaxed text-gray-600">
            OntoPhi explores the foundations of intelligence through computation, cognition, and engineering 
            transforming curiosity into breakthrough technologies and impactful products.
          </p>

        </div>
      </Container>
    </section>
  );
}


