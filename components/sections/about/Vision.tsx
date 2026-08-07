import Container from "@/components/ui/Container";

export default function Vision() {
  return (
    <section className="bg-white py-20 sm:py-28 border-t border-b border-gray-100">
      <Container>
        <div className="mx-auto max-w-3xl text-center flex flex-col items-center">
          
          {/* Section Indicator */}
          <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-400 leading-none">
            Vision
          </p>

          {/* Section Heading */}
          <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl xl:text-5xl leading-tight">
            Our Vision
          </h2>

          {/* Simple, Universal, and Legible Vision Statement */}
          <p className="mx-auto mt-8 text-base sm:text-lg leading-relaxed text-gray-800 font-light antialiased max-w-2xl">
            To drive a continuous spiral of computing innovation—
            anchoring structured knowledge along a strict mathematical axis, 
            and expanding it into a global ecosystem of optimized compiler infrastructures, 
            edge platforms, and neuro-engineered machines.
          </p>
          
        </div>
      </Container>
    </section>
  );
}

