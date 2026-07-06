"use client";

import { useState, useEffect } from "react";

export function usePreloader() {
  const [showPreloader, setShowPreloader] = useState(false);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("has-visited-portfolio");
    if (!hasVisited) {
      // Deliberate: must render `false` on server/first paint to avoid a
      // hydration mismatch, then flip post-hydration based on sessionStorage.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setShowPreloader(true);
      sessionStorage.setItem("has-visited-portfolio", "true");
    }
  }, []);

  return { showPreloader, setShowPreloader };
}
