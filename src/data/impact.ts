import type { Stat } from "@/types";

export const researchImpact: Stat[] = [
  { id: "pubs", value: 100, prefix: "", suffix: "+", label: "Publications" },
  { id: "journals", value: 21, suffix: "+", label: "Journal Papers" },
  { id: "conferences", value: 24, suffix: "+", label: "Conference Papers" },
  { id: "patents", value: 3, label: "Patents" },
  { id: "books", value: 3, label: "Books Authored" },
  { id: "books-edited", value: 2, label: "Books Edited" },
  { id: "editorial", value: 3, suffix: "+", label: "Editorial Positions" },
];

export const researchScholars = [
  {
    id: "phd-soa",
    count: 1,
    role: "Ph.D. Scholar",
    institution: "Siksha 'O' Anusandhan University (SOA)",
    status: "Completed",
  },
  {
    id: "mtech-iitp",
    count: 1,
    role: "M.Tech Scholar",
    institution: "IIT Patna",
    status: "Completed",
  },
  {
    id: "mtech-soa",
    count: 1,
    role: "M.Tech Scholar",
    institution: "Siksha 'O' Anusandhan University (SOA)",
    status: "Ongoing",
  },
];
