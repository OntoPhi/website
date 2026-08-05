import Container from "@/components/ui/Container";

export default function ResearchPhilosophy() {
  return (
    <section className="bg-gray-50 py-24">
      <Container>
        <div className="mx-auto max-w-5xl">

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-500">
            Research Philosophy
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            Understanding Before Engineering
          </h2>

          <div className="mt-10 space-y-8 text-lg leading-9 text-gray-600">

            <p>
              We believe meaningful engineering begins with a deep
              understanding of the underlying scientific principles.
              Our research combines insights from neuroscience,
              computer science, artificial intelligence,
              and systems engineering.
            </p>

            <p>
              Rather than treating disciplines independently,
              OntoPhi studies how they interact to create
              intelligent, efficient, and reliable computing systems.
            </p>

            <p>
              Every research initiative is designed to produce
              practical engineering outcomes while contributing
              to long-term scientific knowledge.
            </p>

          </div>

        </div>
      </Container>
    </section>
  );
}
