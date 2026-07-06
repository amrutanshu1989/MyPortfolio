import { PenLine, FileCheck2, Mic, Users } from "lucide-react";
import type { ServiceCard } from "@/types";

export const serviceCards: ServiceCard[] = [
  {
    id: "editor",
    title: "Editorial Roles",
    icon: PenLine,
    items: [
      "Editor, BMC Artificial Intelligence",
      "Editor, Edelweiss Applied Science and Technology journal (Scopus Indexed)",
      "Technical Editor, International Journal of Smart Sensor and Adhoc Network (IJSSAN)",
    ],
  },
  {
    id: "reviewer",
    title: "Reviewer Roles",
    icon: FileCheck2,
    items: [
      "Transactions on Emerging Telecommunications Technologies",
      "IEEE Access",
      "Heliyon, Scientific Reports, Frontiers",
      "Discover Computing, IJEEE",
    ],
  },
  {
    id: "chair",
    title: "Conference Chair Roles",
    icon: Mic,
    items: [
      "Publication Chair, ISAC3-2025",
      "Session Chair, ICICACS-2024",
      "Session Chair, ICDSM-2024",
    ],
  },
  {
    id: "tpc",
    title: "Technical Program Committee",
    icon: Users,
    items: [
      "ISAC3 2025, ICDSM 2024, PiCET 2025",
      "MLCSS 2024, DATA",
      "MysuruCon-2022, ICCS-2018, ICCSEA",
    ],
  },
];
