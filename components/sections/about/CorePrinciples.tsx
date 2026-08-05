import Container from "@/components/ui/Container";
import { principles } from "@/content/about";

export default function CorePrinciples() {
  return (
    <section className="py-24">
      <Container>
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gray-500">
            Principles
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            Core Principles
          </h2>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {principles.map((principle) => (
            <div
              key={principle}
              className="rounded-2xl border border-gray-200 p-8 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-xl font-semibold">
                {principle}
              </h3>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
