import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import { productCategories } from "@/content/products";

export default function Products() {
  return (
    <Section className="border-t border-gray-100">
      <Container>

        <SectionTitle
          eyebrow="Products & Platforms"
          title="Building the Next Generation of Intelligent Computing."
          description="Our product roadmap transforms research into practical technologies for AI optimization, systems software, and future computing."
        />

      </Container>
    </Section>
  );
}
