import type { SiteConfig, NavLink, SectionId } from "@/types";

export const siteConfig: SiteConfig = {
  name: "Dr. Amrutanshu Panigrahi",
  shortName: "Amrutanshu Panigrahi",
  roles: ["Assistant Professor", "Researcher", "Postdoctoral Fellow"],
  tagline:
    "Researcher working in Blockchain, Artificial Intelligence, Machine Learning, Healthcare AI, Cloud Computing, and Emerging Technologies.",
  description:
    "Dr. Amrutanshu Panigrahi is an Assistant Professor, Postdoctoral Research Fellow, and researcher in Blockchain, Artificial Intelligence, Machine Learning, Healthcare AI, and Cloud Computing with 100+ publications and 3 patents.",
  url: "https://amrutanshupanigrahi.com",
  keywords: [
    "Amrutanshu Panigrahi",
    "Blockchain researcher",
    "Artificial Intelligence",
    "Machine Learning",
    "Healthcare AI",
    "Cloud Computing",
    "Postdoctoral Fellow",
    "Assistant Professor",
    "Computer Science",
    "PhD Computer Science",
  ],
  location: "Bhubaneswar, Odisha, India",
  email: "amrutansup89@gmail.com",
};

export const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Academics", href: "#academics" },
  { label: "Research", href: "#research" },
  { label: "Publications", href: "#publications" },
  { label: "Teaching", href: "#teaching" },
  { label: "Awards", href: "#awards" },
  { label: "Contact", href: "#contact" },
];

export const sectionIds: SectionId[] = [
  "home",
  "about",
  "academics",
  "research",
  "publications",
  "teaching",
  "awards",
  "contact",
];
