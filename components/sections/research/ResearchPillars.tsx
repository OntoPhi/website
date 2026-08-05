import Container from "@/components/ui/Container";

const pillars = [
  {
    title: "Brain Sciences",
    description:
      "Understanding biological intelligence through cognitive neuroscience, computational neuroscience, neuroengineering, neuropsychology, learning systems, and brain-inspired computing.",
  },
  {
    title: "Computing Systems",
    description:
      "Research in operating systems, Linux kernel, compiler technologies, runtime systems, device drivers, and high-performance computing.",
  },
  {
    title: "Artificial Intelligence",
    description:
      "Building efficient AI through machine learning, deep learning, generative AI, agentic AI, edge AI, and model optimization.",
  },
  {
    title: "Intelligent Engineering",
    description:
      "Applying research to embedded systems, robotics, computer vision, distributed systems, AI infrastructure, and intelligent platforms.",
  },
];

export default function ResearchPillars() {
  return (
    <section className="py-24">
      <Container>
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gray-500">
            Research Pillars
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            Four Pillars of Research
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            Our research is organized into four complementary pillars that
            together advance intelligent computing from scientific discovery to
            engineering implementation.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-2xl border border-gray-200 bg-white p-8 transition duration-300 hover:-translate-y-1 hover:border-black hover:shadow-lg"
            >
              <h3 className="text-2xl font-semibold">{pillar.title}</h3>

              <p className="mt-5 leading-8 text-gray-600">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
