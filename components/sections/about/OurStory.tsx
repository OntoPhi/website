import Container from "@/components/ui/Container";

export default function OurStory() {
  return (
    <section className="py-24 bg-gray-50">
      <Container>
        <div className="mx-auto max-w-4xl">

          <h2 className="text-4xl font-bold">
            Our Story
          </h2>

          <div className="mt-10 space-y-8 text-lg leading-9 text-gray-600">

            <p>
              Computing has transformed nearly every aspect of modern life.
              Yet today's intelligent systems remain fragmented across
              software, hardware, artificial intelligence, and human cognition.
            </p>

            <p>
              OntoPhi was founded with a long-term vision:
              to bridge these disciplines through rigorous research,
              engineering excellence,
              and open technologies.
            </p>

            <p>
              We believe the future of computing lies not in isolated
              innovations, but in integrating knowledge across systems,
              neuroscience, optimization,
              and intelligent engineering.
            </p>

          </div>

        </div>
      </Container>
    </section>
  );
}
