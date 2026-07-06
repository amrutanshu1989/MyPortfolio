import type { Stat } from "@/types";

export const researchImpact: Stat[] = [
  { id: "pubs", value: 51, prefix: "", suffix: "+", label: "Publications" },
  { id: "journals", value: 21, suffix: "+", label: "Journal Papers" },
  { id: "conferences", value: 24, suffix: "+", label: "Conference Papers" },
  { id: "patents", value: 3, label: "Patents" },
  { id: "books", value: 3, label: "Books Authored" },
  { id: "editorial", value: 3, suffix: "+", label: "Editorial Positions" },
];
