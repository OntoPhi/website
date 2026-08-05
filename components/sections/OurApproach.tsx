import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import { approach } from "@/content/approach";


export default function OurApproach() {
  return (
    <Section className="border-t border-gray-100">
      <Container>
        <SectionTitle
          eyebrow="Our Approach"
          title="Research. Engineer. Validate. Deliver."
          description="Every OntoPhi innovation follows a disciplined engineering process that transforms ideas into production-ready technologies."
        />

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {approach.map((item) => (
            <Card key={item.step}>
              <p className="text-5xl font-bold text-gray-200">{item.step}</p>

              <h3 className="mt-6 text-2xl font-semibold">
                {item.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                {item.description}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
