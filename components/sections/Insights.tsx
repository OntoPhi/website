import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import { articles } from "@/content/insights";


export default function Insights() {
  return (
    <Section className="border-t border-gray-100">
      <Container>

        <SectionTitle
          eyebrow="Latest Insights"
          title="Sharing Research. Engineering Better Systems."
          description="We publish research findings, technical articles, engineering practices, and product updates."
        />

      </Container>
    </Section>
  );
}
