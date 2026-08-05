import Container from "@/components/ui/Container";

export default function AboutHero() {
  return (
    <section className="py-32">
      <Container>
        <div className="mx-auto max-w-4xl text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-500">
            ABOUT
          </p>

          <h1 className="mt-6 text-5xl font-bold tracking-tight md:text-7xl">
            Engineering
            <br />
            Intelligent Computing
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-gray-600">
            OntoPhi advances intelligent computing through
            research, engineering,
            systems software,
            artificial intelligence,
            neuroscience,
            and open innovation.
          </p>

        </div>
      </Container>
    </section>
  );
}
