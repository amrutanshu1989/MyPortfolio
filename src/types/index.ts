import type { LucideIcon } from "lucide-react";

export type SectionId =
  | "home"
  | "about"
  | "academics"
  | "research"
  | "publications"
  | "teaching"
  | "awards"
  | "contact";

export interface SiteConfig {
  name: string;
  shortName: string;
  roles: string[];
  tagline: string;
  description: string;
  url: string;
  keywords: string[];
  location: string;
  email: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: LucideIcon;
  handle?: string;
  description?: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface ResearchInterest {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface TimelineEntry {
  id: string;
  period: string;
  title: string;
  organization: string;
  description?: string;
  location?: string;
  current?: boolean;
}

export interface Stat {
  id: string;
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  display?: string;
}

export type PublicationCategory = "Blockchain" | "AI" | "Healthcare" | "Cloud Computing";

export type PublicationType = "journal" | "conference" | "book-chapter";

export interface Publication {
  id: string;
  title: string;
  authors: string;
  venue: string;
  year: number;
  doi: string;
  type: PublicationType;
  categories: PublicationCategory[];
  quartile?: string;
  impactFactor?: string;
  featured?: boolean;
}

export type PatentStatus = "Published" | "Granted" | "Filed";

export interface Patent {
  id: string;
  title: string;
  applicationNumber: string;
  publicationDate: string;
  status: PatentStatus;
  description: string;
}

export type BookKind = "authored" | "edited" | "chapter";

export interface Book {
  id: string;
  title: string;
  authors: string;
  publisher: string;
  year: number;
  isbn?: string;
  kind: BookKind;
  link?: string;
  description?: string;
  coverImage?: string;
}

export interface TeachingStat {
  id: string;
  value: number;
  suffix?: string;
  label: string;
}

export interface CourseItem {
  id: string;
  title: string;
  level: string;
}

export interface ServiceCard {
  id: string;
  title: string;
  icon: LucideIcon;
  items: string[];
}

export interface AwardEntry {
  id: string;
  year: string;
  title: string;
  context: string;
  type: "award" | "chair" | "role";
}

export interface Membership {
  id: string;
  name: string;
  abbr: string;
  description: string;
}
