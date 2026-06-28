"use client";

import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineArrowUpRight, HiXMark } from "react-icons/hi2";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

type Experience = (typeof experiencesData)[number];

// Two-letter fallback when a company has no logo set yet.
function initials(name: string): string {
  return name
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

// Every logo is forced into a uniform 72×72 square. Wider marks (Bloomberg)
// scale down with object-contain instead of expanding the tile.
function LogoMark({ exp }: { exp: Experience }) {
  if (exp.logo) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={exp.logo}
        alt={`${exp.company} logo`}
        className="w-[72px] h-[72px] object-contain shrink-0"
      />
    );
  }
  return (
    <span className="w-[72px] h-[72px] rounded-2xl bg-ink/[0.06] text-ink font-display text-2xl flex items-center justify-center tracking-tight shrink-0">
      {initials(exp.company)}
    </span>
  );
}

function ExperienceTile({
  exp,
  index,
  onOpen,
}: {
  exp: Experience;
  index: number;
  onOpen: () => void;
}) {
  return (
    <motion.button
      type="button"
      onClick={onOpen}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay: (index % 4) * 0.05 }}
      whileHover={{ y: -3 }}
      className="group text-left rounded-2xl border border-line bg-bg hover:bg-bg-alt transition-colors p-5 flex items-center gap-4 cursor-pointer"
    >
      <LogoMark exp={exp} />
      <div className="flex-1 min-w-0">
        <p className="font-display text-base sm:text-lg tracking-tight truncate">
          {exp.company}
        </p>
        <p className="text-xs uppercase tracking-[0.18em] text-ink-muted mt-1 truncate">
          {exp.timeline}
        </p>
      </div>
      <HiOutlineArrowUpRight className="text-ink-muted group-hover:text-ink transition-colors shrink-0" />
    </motion.button>
  );
}

function ExperienceModal({
  exp,
  onClose,
}: {
  exp: Experience;
  onClose: () => void;
}) {
  // Esc + body scroll lock while open.
  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-[80] flex items-start justify-center overflow-y-auto p-4 sm:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      {/* Backdrop */}
      <button
        type="button"
        aria-label="Close"
        onClick={onClose}
        className="absolute inset-0 bg-ink/40 backdrop-blur-sm"
      />

      {/* Card */}
      <motion.div
        role="dialog"
        aria-modal="true"
        initial={{ opacity: 0, y: 32, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 24, scale: 0.98 }}
        transition={{ duration: 0.35, ease: [0.2, 0.8, 0.2, 1] }}
        className="relative w-full max-w-4xl bg-bg rounded-3xl shadow-2xl my-6 overflow-hidden"
      >
        {/* Close */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute top-5 right-5 z-10 w-10 h-10 rounded-full bg-ink/[0.06] hover:bg-ink/10 transition-colors flex items-center justify-center"
        >
          <HiXMark className="text-xl" />
        </button>

        <div className="p-8 sm:p-12">
          <LogoMark exp={exp} />

          <h2 className="font-display text-4xl sm:text-5xl tracking-tight leading-none mt-6">
            {exp.company}
          </h2>

          {/* Meta grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-6 gap-x-8 mt-10">
            <Meta label="Timeline" value={exp.timeline} />
            <Meta label="Role" value={exp.role} />
            <Meta label="Org" value={exp.org} />
            <Meta
              label="With"
              value={
                exp.collaborators.length
                  ? exp.collaborators.join("\n")
                  : exp.location
              }
            />
          </div>

          {/* Optional cover image */}
          {exp.cover && (
            <div className="mt-10 relative w-full aspect-[16/9] rounded-2xl overflow-hidden bg-bg-alt">
              <Image
                src={exp.cover}
                alt={`${exp.company} cover`}
                fill
                sizes="(max-width: 768px) 100vw, 70vw"
                className="object-cover"
              />
            </div>
          )}

          {/* Body */}
          <div className="mt-10 space-y-5 text-base sm:text-lg leading-relaxed text-ink-muted max-w-2xl">
            {exp.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          {/* Tags */}
          {exp.tags.length > 0 && (
            <div className="mt-8 flex flex-wrap gap-x-3 gap-y-1 text-[11px] uppercase tracking-[0.15em] text-ink-muted">
              {exp.tags.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
          )}

          {/* Link */}
          {exp.link && (
            <div className="mt-10">
              <a
                href={exp.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Visit
                <HiOutlineArrowUpRight />
              </a>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs uppercase tracking-[0.18em] text-ink-muted">
        {label}
      </p>
      <p className="text-sm sm:text-base mt-1 whitespace-pre-line">{value}</p>
    </div>
  );
}

export default function Experience() {
  const { ref } = useSectionInView("Experience", 0.2);
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const openExp = openIndex !== null ? experiencesData[openIndex] : null;

  return (
    <section
      id="experience"
      ref={ref}
      className="relative scroll-mt-24 py-24 sm:py-28 px-6 sm:px-10 max-w-[90rem] mx-auto"
    >
      <div className="flex items-end justify-between mb-12 flex-wrap gap-6">
        <div>
          <span className="text-xs uppercase tracking-[0.25em] text-ink-muted">
            Where I've been
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl tracking-tight leading-[1.05] mt-3">
            Experience<span className="text-accent">.</span>
          </h2>
        </div>
        <p className="text-sm text-ink-muted max-w-xs">
          Tap any tile to read the long version.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {experiencesData.map((exp, i) => (
          <ExperienceTile
            key={exp.company + exp.timeline}
            exp={exp}
            index={i}
            onOpen={() => setOpenIndex(i)}
          />
        ))}
      </div>

      <AnimatePresence>
        {openExp && (
          <ExperienceModal exp={openExp} onClose={() => setOpenIndex(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
