import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";

export default function Newsletter() {
  return (
    <section className="py-16">
      <Container>
        <SectionHeader
          badge="Stay Updated"
          title="Follow Our Journey"
          description="Technical articles, research updates, and engineering insights will be published here."
        />
      </Container>
    </section>
  );
}
