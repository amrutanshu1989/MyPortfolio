import {
  Blocks,
  BrainCircuit,
  Cpu,
  HeartPulse,
  Cloud,
  ShieldCheck,
  Wifi,
  BarChart3,
} from "lucide-react";
import type { ResearchInterest } from "@/types";

export const researchInterests: ResearchInterest[] = [
  {
    title: "Blockchain Technology",
    description:
      "Decentralized trust, PKI systems, smart contracts, and secure peer-to-peer communication.",
    icon: Blocks,
  },
  {
    title: "Artificial Intelligence",
    description:
      "Intelligent systems for prediction, classification, and decision-making across domains.",
    icon: BrainCircuit,
  },
  {
    title: "Machine Learning",
    description:
      "Ensemble learning, feature selection, and optimization algorithms for high-dimensional data.",
    icon: Cpu,
  },
  {
    title: "Healthcare AI",
    description:
      "Early disease diagnosis, cancer prediction, and clinical decision support systems.",
    icon: HeartPulse,
  },
  {
    title: "Cloud Computing",
    description:
      "Load balancing, resource optimization, and secure cloud service architectures.",
    icon: Cloud,
  },
  {
    title: "Cyber Security",
    description:
      "Key management, cryptographic systems, and phishing prevention using AI.",
    icon: ShieldCheck,
  },
  {
    title: "Internet of Things",
    description:
      "Fog of Medical Things, smart farming, and sensor-driven intelligent networks.",
    icon: Wifi,
  },
  {
    title: "Data Analytics",
    description:
      "Microarray data analysis, gene identification, and data-driven research methods.",
    icon: BarChart3,
  },
];
