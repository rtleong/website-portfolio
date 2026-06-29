"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { HiOutlineArrowUpRight } from "react-icons/hi2";
import { siteContent } from "@/lib/data";
import { EASE } from "@/lib/motion";

type Section = (typeof siteContent.hobbiesPage.sections)[number];

export default function Hobbies() {
  const { sections } = siteContent.hobbiesPage;
  const [activeId, setActiveId] = React.useState<string>(sections[0]?.id ?? "");

  // Scroll-spy: highlight the outline entry whose section is nearest the top.
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      {
        // Trigger when a heading is in the upper third of the viewport.
        rootMargin: "-20% 0px -65% 0px",
        threshold: 0,
      }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [sections]);

  const handleJump = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    setActiveId(id);
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="px-6 sm:px-10 max-w-[90rem] mx-auto pb-24">
      <div className="grid md:grid-cols-[14rem_1fr] gap-10 lg:gap-16 items-start">
        {/* Left rail — Google-Docs-style outline */}
        <nav className="md:sticky md:top-28 self-start">
          <p className="text-xs uppercase tracking-[0.25em] text-ink-muted mb-4">
            Contents
          </p>
          <ul className="flex md:flex-col gap-x-4 gap-y-1 flex-wrap border-l border-line">
            {sections.map((s) => {
              const active = s.id === activeId;
              return (
                <li key={s.id} className="md:-ml-px">
                  <button
                    type="button"
                    onClick={() => handleJump(s.id)}
                    className={`relative md:border-l-2 pl-4 py-1.5 text-left text-sm transition-colors ${
                      active
                        ? "md:border-ink text-ink font-medium"
                        : "md:border-transparent text-ink-muted hover:text-ink"
                    }`}
                  >
                    {s.title}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Right column — sections */}
        <div className="space-y-20 sm:space-y-28">
          {sections.map((section) => (
            <SectionBlock key={section.id} section={section} />
          ))}
        </div>
      </div>
    </div>
  );
}

function SectionBlock({ section }: { section: Section }) {
  return (
    <section id={section.id} className="scroll-mt-28">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: EASE }}
      >
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl tracking-tight leading-[1.05]">
          {section.title}
          <span className="text-accent">.</span>
        </h2>

        <div className="mt-6 space-y-4 text-base sm:text-lg leading-relaxed text-ink-muted max-w-2xl">
          {section.body.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        {/* Optional links */}
        {section.links.length > 0 && (
          <ul className="mt-6 flex flex-wrap gap-2">
            {section.links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost"
                >
                  {l.label}
                  <HiOutlineArrowUpRight />
                </a>
              </li>
            ))}
          </ul>
        )}

        {/* Optional photos — forced to a uniform 4:3 frame */}
        {section.photos.length > 0 && (
          <div className="mt-8 grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {section.photos.map((photo, i) => (
              <figure key={`${photo.src}-${i}`} className="group">
                <div className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl bg-bg-alt">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 768px) 50vw, 33vw"
                    className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(.2,.8,.2,1)] group-hover:scale-[1.04]"
                  />
                </div>
                {photo.caption && (
                  <figcaption className="mt-2 text-xs uppercase tracking-[0.18em] text-ink-muted">
                    {photo.caption}
                  </figcaption>
                )}
              </figure>
            ))}
          </div>
        )}
      </motion.div>
    </section>
  );
}
