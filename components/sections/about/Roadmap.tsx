import Container from "@/components/ui/Container";
import { roadmap } from "@/content/about";

export default function Roadmap() {
  return (
    <section className="bg-gray-50 py-24">
      <Container>
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gray-500">
            Roadmap
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            Long-Term Vision
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            OntoPhi is building intelligent computing through a long-term,
            research-driven roadmap focused on scientific discovery,
            engineering excellence, and open innovation.
          </p>
        </div>

        <div className="mx-auto mt-20 max-w-5xl space-y-8">
          {roadmap.map((item) => (
            <div
              key={item.year}
              className="rounded-2xl border border-gray-200 bg-white p-8 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex flex-col gap-6 md:flex-row md:items-start">
                <div className="w-32 shrink-0">
                  <span className="text-2xl font-bold text-black">
                    {item.year}
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold">
                    {item.title}
                  </h3>

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
