import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { AcademicJourney } from "@/components/sections/academic-journey";
import { ResearchInterests } from "@/components/sections/research-interests";
import { ResearchImpact } from "@/components/sections/research-impact";
import { Publications } from "@/components/sections/publications";
import { Patents } from "@/components/sections/patents";
import { Books } from "@/components/sections/books";
import { Teaching } from "@/components/sections/teaching";
import { AcademicService } from "@/components/sections/academic-service";
import { Awards } from "@/components/sections/awards";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <AcademicJourney />
      <ResearchInterests />
      <ResearchImpact />
      <Publications />
      <Patents />
      <Books />
      <Teaching />
      <AcademicService />
      <Awards />
      <Contact />
    </>
  );
}
