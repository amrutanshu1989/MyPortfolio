"use client";

import * as React from "react";
import { navLinks } from "@/data/site";

const HEADER_OFFSET = 80;

/** Non-nav sections that should keep a nav tab highlighted */
const SECTION_ALIASES: Record<string, string> = {
  impact: "research",
};

export function useActiveSection() {
  const [active, setActive] = React.useState<string>("home");

  React.useEffect(() => {
    const navIds = navLinks.map((l) => l.href.replace("#", ""));
    const observedIds = [...navIds, ...Object.keys(SECTION_ALIASES)];

    const update = () => {
      const sections = observedIds
        .map((id) => document.getElementById(id))
        .filter((el): el is HTMLElement => el !== null)
        .sort((a, b) =>
          a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING
            ? -1
            : 1,
        );

      const probe = HEADER_OFFSET + 1;
      let current = "home";

      for (const el of sections) {
        if (el.getBoundingClientRect().top <= probe) {
          current = SECTION_ALIASES[el.id] ?? el.id;
        }
      }

      setActive((prev) => (prev === current ? prev : current));
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    const observer = new IntersectionObserver(update, {
      rootMargin: `-${HEADER_OFFSET}px 0px -40% 0px`,
      threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
    });

    observedIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      observer.disconnect();
    };
  }, []);

  return active;
}
