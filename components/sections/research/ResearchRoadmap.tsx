import Container from "@/components/ui/Container";

const roadmap = [
  {
    year: "2026",
    title: "Research Foundation",
    description:
      "Establish core research in neuroscience, artificial intelligence, systems software, and intelligent computing.",
  },
  {
    year: "2027",
    title: "Open Research Platform",
    description:
      "Launch open-source research frameworks, engineering tools, and collaborative projects.",
  },
  {
    year: "2028",
    title: "Optimization Frameworks",
    description:
      "Develop compiler, runtime, and AI optimization technologies for intelligent computing.",
  },
  {
    year: "2029",
    title: "Developer Ecosystem",
    description:
      "Provide developer tools, documentation, SDKs, and research resources.",
  },
  {
    year: "2030+",
    title: "Intelligent Computing Infrastructure",
    description:
      "Advance next-generation computing platforms integrating AI, systems software, and brain-inspired intelligence.",
  },
];

export default function ResearchRoadmap() {
  return (
    <section className="py-24">
      <Container>
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gray-500">
            Research Roadmap
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            Long-Term Research Vision
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            Our roadmap reflects a long-term commitment to advancing intelligent
            computing through research, engineering, and open collaboration.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-4xl space-y-6">
          {roadmap.map((item) => (
            <div
              key={item.year}
              className="rounded-2xl border border-gray-200 p-8 transition hover:border-black hover:shadow-lg"
            >
              <div className="flex flex-col gap-6 md:flex-row">
                <div className="w-28 shrink-0">
                  <span className="text-2xl font-bold">{item.year}</span>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold">{item.title}</h3>

                  <p className="mt-3 leading-8 text-gray-600">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
