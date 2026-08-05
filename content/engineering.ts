import {
  EngineeringDomain,
  Platform,
  ProcessStep,
} from "@/types/engineering";

export const engineeringDomains: EngineeringDomain[] = [
  {
    title: "Systems Software",
    description:
      "Operating systems, Linux kernel, runtime systems, and low-level software engineering.",
  },
  {
    title: "Compiler Technologies",
    description:
      "Compilers, optimization frameworks, code generation, and performance engineering.",
  },
  {
    title: "AI Infrastructure",
    description:
      "Model deployment, inference optimization, distributed AI systems, and scalable infrastructure.",
  },
  {
    title: "Embedded Intelligence",
    description:
      "Edge AI, embedded systems, robotics, computer vision, and real-time computing.",
  },
];

export const engineeringProcess: ProcessStep[] = [
  {
    step: "01",
    title: "Design",
    description: "Architect reliable and scalable systems.",
  },
  {
    step: "02",
    title: "Develop",
    description: "Build robust software and infrastructure.",
  },
  {
    step: "03",
    title: "Optimize",
    description: "Improve performance and efficiency.",
  },
  {
    step: "04",
    title: "Validate",
    description: "Benchmark and verify engineering quality.",
  },
];

export const platforms: Platform[] = [
  {
    title: "Linux",
    description: "Kernel, drivers, runtime, and systems software.",
  },
  {
    title: "Embedded",
    description: "Edge AI and intelligent embedded platforms.",
  },
  {
    title: "Cloud",
    description: "Scalable AI infrastructure and deployment.",
  },
  {
    title: "Accelerated Computing",
    description: "GPU, NPU, TPU, and heterogeneous computing.",
  },
];
