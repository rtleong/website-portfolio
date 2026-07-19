"use client";

import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  HiOutlineArrowUpRight,
  HiOutlineChevronLeft,
  HiOutlineChevronRight,
  HiOutlinePlus,
  HiOutlineMinus,
} from "react-icons/hi2";
import { siteContent } from "@/lib/data";
import { EASE } from "@/lib/motion";

type Section = (typeof siteContent.hobbiesPage.sections)[number];

// A gallery item, defined explicitly to sidestep the const-union quirk where
// heterogeneous `as const` members carry incompatible literal signatures.
type GalleryItem = { src: string; title: string; note?: string };

// Aspect classes must appear as literals so Tailwind's JIT compiles them —
// never build `aspect-[${x}]` dynamically.
const ASPECT: Record<string, string> = {
  "4/3": "aspect-[4/3]",
  "3/4": "aspect-[3/4]",
  "1/1": "aspect-square",
  "16/9": "aspect-video",
};

// Coverflow carousel: the current item sits in front, the previous / next peek
// out to the sides — blurred, scaled down, and rotated back in 3D. Navigating
// slides + flips the neighbors into frame. Clicking the front image expands the
// item's `note`; clicking a side image brings it to the front.
function HobbyGallery({
  items,
  aspect,
}: {
  items: GalleryItem[];
  aspect: string;
}) {
  const [index, setIndex] = React.useState(0);
  const [expanded, setExpanded] = React.useState(false);
  const frame = ASPECT[aspect] ?? ASPECT["4/3"];
  const item = items[index];
  const n = items.length;
  const many = n > 1;

  const go = (dir: 1 | -1) => {
    setExpanded(false);
    setIndex((i) => (i + dir + n) % n);
  };

  const jump = (i: number) => {
    setExpanded(false);
    setIndex(i);
  };

  // Shortest circular distance from the current index, so neighbors still peek
  // at the ends of the list (wrap-around).
  const offsetOf = (i: number) => {
    let off = i - index;
    if (off > n / 2) off -= n;
    if (off < -n / 2) off += n;
    return off;
  };

  return (
    <div className="mt-10">
      {/* Stage — perspective gives the side cards their 3D flip */}
      <div
        className="group relative mx-auto w-full max-w-md"
        style={{ perspective: "1200px" }}
      >
        {/* Aspect spacer keeps the stage height correct */}
        <div className={`w-full ${frame}`} />

        {items.map((it, i) => {
          const off = offsetOf(i);
          const abs = Math.abs(off);
          const isFront = off === 0;
          const visible = abs <= 1;
          return (
            <motion.button
              key={it.src + i}
              type="button"
              onClick={() =>
                isFront ? it.note && setExpanded((v) => !v) : jump(i)
              }
              aria-label={
                isFront
                  ? it.note
                    ? `${it.title} — toggle thoughts`
                    : it.title
                  : `Show ${it.title}`
              }
              className={`absolute inset-0 rounded-2xl overflow-hidden bg-bg-alt shadow-xl ${
                isFront && !it.note ? "cursor-default" : "cursor-pointer"
              }`}
              style={{ transformStyle: "preserve-3d" }}
              animate={{
                x: `${off * 58}%`,
                scale: isFront ? 1 : 0.82,
                rotateY: isFront ? 0 : off < 0 ? 24 : -24,
                filter: isFront ? "blur(0px)" : "blur(3px)",
                opacity: visible ? (isFront ? 1 : 0.55) : 0,
                zIndex: 10 - abs,
              }}
              transition={{ duration: 0.5, ease: EASE }}
            >
              {/* Blurred fill so mixed orientations don't show flat bars */}
              <Image
                src={it.src}
                alt=""
                aria-hidden
                fill
                sizes="(max-width: 768px) 90vw, 30vw"
                className="object-cover scale-125 blur-2xl saturate-150 opacity-60"
              />
              <Image
                src={it.src}
                alt={it.title}
                fill
                sizes="(max-width: 768px) 90vw, 30vw"
                className="object-contain"
              />

              {/* Front-only title + expand hint */}
              {isFront && (
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent p-4 flex items-end justify-between gap-3 pointer-events-none">
                  <span className="text-white font-display text-lg tracking-tight text-left">
                    {it.title}
                  </span>
                  {it.note && (
                    <span className="shrink-0 w-7 h-7 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-white">
                      {expanded ? (
                        <HiOutlineMinus className="text-sm" />
                      ) : (
                        <HiOutlinePlus className="text-sm" />
                      )}
                    </span>
                  )}
                </div>
              )}
            </motion.button>
          );
        })}

        {/* Prev / next — fade in on hover of the stage */}
        {many && (
          <>
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous"
              className="absolute left-2 sm:-left-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-bg/90 shadow-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-bg"
            >
              <HiOutlineChevronLeft className="text-lg" />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next"
              className="absolute right-2 sm:-right-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-bg/90 shadow-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-bg"
            >
              <HiOutlineChevronRight className="text-lg" />
            </button>
          </>
        )}
      </div>

      {/* Expanded thoughts for the current item */}
      <AnimatePresence initial={false}>
        {expanded && item.note && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="overflow-hidden mx-auto max-w-md"
          >
            <p className="mt-5 text-sm sm:text-base leading-relaxed text-ink-muted border-l-2 border-accent pl-4">
              {item.note}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

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
          {sections.map((section, i) => (
            <SectionBlock key={section.id} section={section} first={i === 0} />
          ))}
        </div>
      </div>
    </div>
  );
}

function SectionBlock({ section, first }: { section: Section; first: boolean }) {
  const [open, setOpen] = React.useState(false);

  return (
    <section id={section.id} className="scroll-mt-28">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: EASE }}
      >
        {/* Click the word to reveal / hide the write-up */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="group/title flex items-baseline gap-3 text-left"
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl tracking-tight leading-[1.05] transition-colors group-hover/title:text-accent">
            {section.title}
            <span className="text-accent">.</span>
          </h2>
          {first && (
            <span className="flex items-center gap-1 text-xs uppercase tracking-[0.18em] text-ink-muted transition-colors group-hover/title:text-accent">
              <HiOutlineChevronLeft
                className={`text-sm transition-transform duration-300 ${
                  open ? "-rotate-90" : ""
                }`}
              />
              {open ? "hide" : "read"}
            </span>
          )}
        </button>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: EASE }}
              className="overflow-hidden"
            >
              <div className="mt-6 space-y-4 text-base sm:text-lg leading-relaxed text-ink-muted max-w-2xl">
                {section.body.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

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

        {/* Flip-through gallery — one item at a time with prev/next + expand */}
        {(() => {
          const items = section.gallery as GalleryItem[];
          return items.length > 0 ? (
            <HobbyGallery items={items} aspect={section.galleryAspect} />
          ) : null;
        })()}

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
