import {
  Mail,
  GraduationCap,
  FileText,
  BookOpen,
  Globe,
} from "lucide-react";
import { Linkedin } from "@/components/ui/icons";
import type { SocialLink, TimelineEntry } from "@/types";

export const contactLinks: SocialLink[] = [
  {
    label: "Email",
    href: "mailto:amrutansup89@gmail.com",
    icon: Mail,
    handle: "amrutansup89@gmail.com",
    description: "Primary email for academic and research enquiries.",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/dr-amrutanshu-panigrahi-775a3863/",
    icon: Linkedin,
    handle: "dr-amrutanshu-panigrahi",
    description: "Professional network and career updates.",
  },
  {
    label: "Google Scholar",
    href: "https://scholar.google.com/citations?user=6qeOFvEAAAAJ&hl=en",
    icon: GraduationCap,
    handle: "Amrutanshu Panigrahi",
    description: "Full publication list, citations, and h-index.",
  },
  {
    label: "Scopus",
    href: "https://www.scopus.com/authid/detail.uri?authorId=57209338171",
    icon: FileText,
    handle: "Author ID 57209338171",
    description: "Scopus author profile and indexed publications.",
  },
  {
    label: "ORCID",
    href: "https://orcid.org/0000-0002-1077-8532",
    icon: BookOpen,
    handle: "0000-0002-1077-8532",
    description: "Persistent digital researcher identifier.",
  },
  {
    label: "Web of Science",
    href: "https://www.webofscience.com/wos/author/record/CAG3236-2022",
    icon: Globe,
    handle: "CAG3236-2022",
    description: "Web of Science ResearcherID profile.",
  },
];

export const aboutHighlights: TimelineEntry[] = [
  {
    id: "phd",
    period: "2023",
    title: "Ph.D. in Computer Science & Engineering",
    organization: "Siksha 'O' Anusandhan (Deemed to be University)",
    location: "Bhubaneswar, India",
    description:
      "Doctoral research on blockchain-based emerging solutions for centralized applications. 9.0 CGPA in coursework.",
  },
  {
    id: "postdoc",
    period: "2025 – Present",
    title: "Postdoctoral Research Fellow",
    organization: "Lincoln University College",
    location: "Malaysia (Hybrid)",
    description:
      "Pursuing postdoctoral research in Computer Science, extending work on blockchain, AI, and secure distributed systems.",
    current: true,
  },
  {
    id: "teaching",
    period: "7+ Years",
    title: "Teaching Experience",
    organization: "UG & PG Computer Science",
    description:
      "Over seven years teaching undergraduate and postgraduate courses across multiple institutions.",
  },
  {
    id: "research",
    period: "2+ Years",
    title: "Focused Research Experience",
    organization: "Blockchain · AI · Healthcare",
    description:
      "Dedicated research leading to 100+ publications, 3 patents, and 3 authored books.",
  },
  {
    id: "gate",
    period: "2012 · 2014",
    title: "GATE Qualified",
    organization: "Graduate Aptitude Test in Engineering",
    description: "Qualified GATE in both 2012 and 2014.",
  },
];
