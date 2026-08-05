import { engineeringDomains } from "@/content/engineering";

import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";

export default function EngineeringExpertise() {
  return (
    <Section>
      <Container>
        <SectionTitle
          eyebrow="Engineering"
          title="Engineering Expertise"
          description="Building intelligent systems across software, infrastructure, and computing platforms."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {engineeringDomains.map((item) => (
            <Card key={item.title}>
              <h3 className="text-xl font-semibold text-black">
                {item.title}
              </h3>

              <p className="mt-4 text-gray-600 leading-7">
                {item.description}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
