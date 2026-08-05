import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

export default function CTA() {
  return (
    <Section className="border-t border-gray-100">

      <Container>

        <div className="rounded-3xl border border-gray-200 p-16 text-center">

          <h2 className="text-5xl font-semibold tracking-tight">
            Let's Build the Future of Intelligent Computing.
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-gray-600">
            We welcome collaborations with researchers, universities,
            technology companies, and engineering teams working on
            intelligent computing.
          </p>

          <div className="mt-12 flex justify-center gap-4">

            <Button>
              Contact Us
            </Button>

            <Button variant="secondary">
              Explore Research
            </Button>

          </div>

        </div>

      </Container>

    </Section>
  );
}
