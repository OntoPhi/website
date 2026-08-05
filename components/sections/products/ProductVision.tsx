import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";

export default function ProductVision() {
  return (
    <section className="py-16">
      <Container>
        <SectionHeader
          badge="Vision"
          title="From Research to Products"
          description="Every OntoPhi product is built upon scientific research, robust engineering, and continuous innovation to create practical intelligent computing solutions."
        />
      </Container>
    </section>
  );
}
