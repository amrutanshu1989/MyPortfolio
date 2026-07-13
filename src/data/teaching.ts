import type { TeachingStat, CourseItem } from "@/types";

export const teachingStats: TeachingStat[] = [
  { id: "years", value: 7, suffix: "+", label: "Years Teaching" },
  { id: "phd", value: 2, label: "Ph.D. Scholars" },
  { id: "mtech", value: 2, label: "M.Tech Scholars" },
  { id: "ug", value: 24, suffix: "+", label: "UG Students Mentored" },
];

export const courses: CourseItem[] = [
  { id: "c1", title: "Blockchain Technology", level: "PG / UG" },
  { id: "c2", title: "Artificial Intelligence & Machine Learning", level: "PG / UG" },
  { id: "c3", title: "Cloud Computing", level: "UG" },
  { id: "c4", title: "Computer Networks", level: "UG" },
  { id: "c5", title: "Data Structures & Algorithms", level: "UG" },
  { id: "c6", title: "Python Programming", level: "UG" },
  { id: "c7", title: "Internet of Things", level: "PG / UG" },
  { id: "c8", title: "Information Security", level: "PG / UG" },
];

export const supervision = [
  {
    id: "s1",
    level: "Ph.D. Supervision",
    detail: "2 Ph.D. scholars ongoing at Siksha 'O' Anusandhan University (SOA).",
  },
  {
    id: "s2",
    level: "M.Tech Supervision",
    detail:
      "2 M.Tech scholars — 1 completed at IIT Patna, 1 ongoing at Siksha 'O' Anusandhan University (SOA).",
  },
  {
    id: "s3",
    level: "Undergraduate Mentorship",
    detail:
      "24 graduate students continuing and 12 completed at Siksha 'O' Anusandhan University.",
  },
];
