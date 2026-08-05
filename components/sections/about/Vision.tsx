import Container from "@/components/ui/Container";
import { vision } from "@/content/about";

export default function Vision() {
  return (
    <section className="bg-gray-50 py-24">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gray-500">
            Vision
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            {vision.title}
          </h2>

          <p className="mt-8 text-xl leading-9 text-gray-600">
            {vision.description}
          </p>
        </div>
      </Container>
    </section>
  );
}
