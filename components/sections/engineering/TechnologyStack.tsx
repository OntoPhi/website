import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";

const stack = [
  "Linux Kernel",
  "Device Drivers",
  "Compiler Technologies",
  "Runtime Systems",
  "Embedded Systems",
  "CUDA",
  "TensorRT",
  "OpenCV",
  "PyTorch",
  "ONNX",
  "Docker",
  "Kubernetes",
];

export default function TechnologyStack() {
  return (
    <section className="bg-gray-50 py-24">
      <Container>
        <SectionHeader
          badge="Technology"
          title="Technology Stack"
          description="Core technologies supporting our engineering and research."
        />

        <div className="mt-16 flex flex-wrap justify-center gap-4">
          {stack.map((item) => (
            <span
              key={item}
              className="rounded-full border border-gray-200 bg-white px-5 py-3 text-sm font-medium transition hover:border-black"
            >
              {item}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
