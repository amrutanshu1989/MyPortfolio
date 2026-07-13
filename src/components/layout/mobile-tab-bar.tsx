"use client";

import * as React from "react";
import { AnimatePresence, motion } from "motion/react";
import { Home, User, FlaskConical, BookOpen, Mail, MoreHorizontal } from "lucide-react";

import { cn } from "@/lib/utils";

interface MobileTabBarProps {
  active: string;
}

const tabs = [
  { id: "home", label: "Home", icon: Home },
  { id: "about", label: "About", icon: User },
  { id: "research", label: "Research", icon: FlaskConical },
  { id: "publications", label: "Publications", icon: BookOpen },
  { id: "contact", label: "Contact", icon: Mail },
];

const moreLinks = [
  { id: "academics", label: "Academics" },
  { id: "teaching", label: "Teaching" },
  { id: "awards", label: "Awards" },
];

export function MobileTabBar({ active }: MobileTabBarProps) {
  const [moreOpen, setMoreOpen] = React.useState(false);

  React.useEffect(() => {
    document.body.style.overflow = moreOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [moreOpen]);

  const isMoreActive = moreLinks.some((l) => l.id === active);

  return (
    <>
      <AnimatePresence>
        {moreOpen && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/20 md:hidden"
              onClick={() => setMoreOpen(false)}
              aria-hidden
            />
            <motion.div
              key="sheet"
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "100%", opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-x-0 bottom-14 z-50 px-3 pb-2 md:hidden"
            >
              <nav
                className="rounded-t-xl border border-border bg-popover p-2 shadow-lg"
                aria-label="More navigation"
              >
                {moreLinks.map((link) => {
                  const isActive = active === link.id;
                  return (
                    <a
                      key={link.id}
                      href={`#${link.id}`}
                      aria-current={isActive ? "true" : undefined}
                      onClick={() => setMoreOpen(false)}
                      className={cn(
                        "block rounded-md px-3 py-2.5 text-sm font-medium transition-colors hover:bg-accent hover:text-foreground",
                        isActive
                          ? "bg-accent text-foreground"
                          : "text-muted-foreground",
                      )}
                    >
                      {link.label}
                    </a>
                  );
                })}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <nav
        aria-label="Mobile navigation"
        className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/90 backdrop-blur-md md:hidden"
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      >
        <div className="mx-auto flex h-14 max-w-6xl items-stretch justify-around px-1">
          {tabs.map(({ id, label, icon: Icon }) => {
            const isActive = active === id;
            return (
              <a
                key={id}
                href={`#${id}`}
                aria-current={isActive ? "true" : undefined}
                className={cn(
                  "flex flex-1 flex-col items-center justify-center gap-0.5 py-2 text-[10px] font-medium transition-colors",
                  isActive ? "text-foreground" : "text-muted-foreground",
                )}
              >
                <Icon
                  className={cn("size-5", isActive && "text-primary")}
                />
                {label}
              </a>
            );
          })}
          <button
            type="button"
            aria-label="More links"
            aria-expanded={moreOpen}
            onClick={() => setMoreOpen((v) => !v)}
            className={cn(
              "flex flex-1 flex-col items-center justify-center gap-0.5 py-2 text-[10px] font-medium transition-colors",
              moreOpen || isMoreActive ? "text-foreground" : "text-muted-foreground",
            )}
          >
            <MoreHorizontal
              className={cn("size-5", (moreOpen || isMoreActive) && "text-primary")}
            />
            More
          </button>
        </div>
      </nav>
    </>
  );
}
