"use client";

import React from "react";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { navLinks, siteContent } from "@/lib/data";
import { EASE } from "@/lib/motion";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = React.useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 24));

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: EASE }}
      className={clsx(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-bg/80 backdrop-blur-md border-b border-line"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <div className="max-w-[90rem] mx-auto flex items-center justify-between px-6 sm:px-10 py-5">
        <Link href="/" className="group flex items-center gap-2">
          <span className="inline-block w-2.5 h-2.5 rounded-full bg-accent transition-transform group-hover:scale-125" />
          <span className="font-display text-xl tracking-tight">
            {siteContent.shortName}
          </span>
        </Link>

        <nav>
          <ul className="flex items-center gap-1 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={clsx(
                    "relative px-4 py-2 rounded-full transition-colors",
                    isActive(link.href)
                      ? "text-ink"
                      : "text-ink-muted hover:text-ink"
                  )}
                >
                  {isActive(link.href) && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-ink/5"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative">{link.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href={`mailto:${siteContent.contact.email}`}
          className="hidden sm:inline-flex items-center gap-2 text-sm text-ink hover:text-accent transition-colors"
        >
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          bookings available
        </a>
      </div>
    </motion.header>
  );
}
