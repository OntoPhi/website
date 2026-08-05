import Container from "@/components/ui/Container";
import { mission } from "@/content/about";

export default function Mission() {
  return (
    <section className="py-24">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gray-500">
            Mission
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            {mission.title}
          </h2>

          <p className="mt-8 text-xl leading-9 text-gray-600">
            {mission.description}
          </p>
        </div>
      </Container>
    </section>
  );
}
