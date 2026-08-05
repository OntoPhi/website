import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import { projects } from "@/content/opensource";


export default function OpenSource() {
  return (
    <Section className="border-t border-gray-100">
      <Container>

        <SectionTitle
          eyebrow="Open Source"
          title="Building in Public."
          description="We believe fundamental technologies become stronger through collaboration with researchers, engineers, and the open-source community."
        />

      </Container>
    </Section>
  );
}
