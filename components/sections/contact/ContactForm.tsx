import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";

export default function ContactForm() {
  return (
    <section className="bg-gray-50 py-16">
      <Container>
        <SectionHeader
          badge="Contact Form"
          title="Send Us a Message"
          description="A secure contact form will be available soon."
        />
      </Container>
    </section>
  );
}
