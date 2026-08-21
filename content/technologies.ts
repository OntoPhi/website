export interface TechCategory {
  layer: string;
  badge: string;
  tools: string[];
}

export const technologies: TechCategory[] = [
  {
    layer: "Cognitive Neuroscience & Brain-Inspired Computing",
    badge: "Neuroscience",
    tools: [
      "NEST Simulator",
      "Brian 2",
      "Nengo",
      "MNE-Python",
      "SpiNNaker",
    ],
  },
  {
    layer: "Machine Learning & AI Systems",
    badge: "AI Systems",
    tools: [
      "PyTorch",
      "PyTorch Lightning",
      "ONNX",
      "ONNX Runtime",
      "JAX",
      "XLA",
      "Triton Inference Server",
    ],
  },
  {
    layer: "Computer Vision & Model Optimization",
    badge: "AI Engineering",
    tools: [
      "OpenCV",
      "TensorRT",
      "CUDA",
      "Triton",
      "Model Optimization",
      "Inference Optimization",
    ],
  },
  {
    layer: "Compilers & Intermediate Representations",
    badge: "Compilers",
    tools: [
      "LLVM",
      "Clang",
      "MLIR",
      "Apache TVM",
      "Triton Kernel Language",
    ],
  },
  {
    layer: "Systems Software & Runtime Engineering",
    badge: "Systems",
    tools: [
      "Linux Kernel",
      "Device Drivers",
      "Runtime Systems",
      "eBPF",
      "Performance Profiling",
      "Memory Management",
    ],
  },
  {
    layer: "Embedded & Heterogeneous Computing",
    badge: "Edge Computing",
    tools: [
      "CUDA",
      "SYCL",
      "GPU / NPU Computing",
      "RTOS",
      "FreeRTOS",
      "Embedded Linux",
    ],
  },
];
