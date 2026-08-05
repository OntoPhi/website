import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";

export default function OpenSourcePhilosophy() {
  return (
    <section className="py-16">
      <Container>
        <SectionHeader
          badge="Philosophy"
          title="Engineering in the Open"
          description="We build reusable technologies that empower researchers, engineers, and developers worldwide."
        />
      </Container>
    </section>
  );
}
