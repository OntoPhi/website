import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";

export default function OpenEngineering() {
  return (
    <section className="py-24">
      <Container>
        <SectionHeader
          badge="Open Engineering"
          title="Engineering for the Community"
          description="We believe robust engineering grows through openness, collaboration, documentation, and shared knowledge."
        />
      </Container>
    </section>
  );
}
