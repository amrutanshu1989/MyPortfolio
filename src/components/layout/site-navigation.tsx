"use client";

import { useActiveSection } from "@/hooks/use-active-section";
import { Navbar } from "./navbar";
import { MobileTabBar } from "./mobile-tab-bar";

export function SiteNavigation() {
  const active = useActiveSection();

  return (
    <>
      <Navbar active={active} />
      <MobileTabBar active={active} />
    </>
  );
}
