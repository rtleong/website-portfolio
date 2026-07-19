"use client";

import React from "react";
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { HiOutlineArrowUpRight, HiXMark } from "react-icons/hi2";
import { projectsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { EASE } from "@/lib/motion";

type Project =
  | (typeof projectsData.client)[number]
  | (typeof projectsData.personal)[number];

// ---------------------------------------------------------------------------
// Card — bare image / video; hover reveals a thin caption bar at the bottom
// with the project name + inline CTA links. Click anywhere opens the modal.
// ---------------------------------------------------------------------------

function ProjectCard({
  project,
  index,
  onOpen,
}: {
  project: Project;
  index: number;
  onOpen: () => void;
}) {
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const [hovered, setHovered] = React.useState(false);
  // Local SVGs must skip Next's image optimizer (it refuses SVG by default).
  const isSvg =
    typeof project.imageUrl === "string" && project.imageUrl.endsWith(".svg");

  React.useEffect(() => {
    if (!videoRef.current || !project.videoUrl) return;
    if (hovered) videoRef.current.play().catch(() => {});
    else {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [hovered, project.videoUrl]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.6,
        delay: (index % 2) * 0.08,
        ease: EASE,
      }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="group relative"
    >
      <button
        type="button"
        onClick={onOpen}
        aria-label={`Open ${project.title}`}
        className="relative block w-full aspect-[4/3] overflow-hidden rounded-2xl bg-bg-alt cursor-pointer text-left"
      >
        {/* Blurred fill — a scaled, blurred copy of the same image so any
            letterboxing reads as a soft color glow instead of a flat bar */}
        <Image
          src={project.imageUrl}
          alt=""
          aria-hidden
          fill
          unoptimized={isSvg}
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover scale-125 blur-2xl saturate-150 opacity-70"
        />

        {/* Sharp foreground — full image, never cropped */}
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          unoptimized={isSvg}
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-contain transition-transform duration-[1200ms] ease-[cubic-bezier(.2,.8,.2,1)] group-hover:scale-[1.03]"
        />

        {project.videoUrl && (
          <video
            ref={videoRef}
            src={project.videoUrl}
            muted
            loop
            playsInline
            className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-500 ${
              hovered ? "opacity-100" : "opacity-0"
            }`}
          />
        )}
      </button>

      {/* Caption below the tile — hidden until hover, then fades/slides in
          with the title + inline CTA links */}
      <div
        className={`mt-4 flex flex-wrap items-baseline gap-x-3 gap-y-1 text-sm transition-all duration-300 ease-out ${
          hovered
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-1 pointer-events-none"
        }`}
      >
        <button
          type="button"
          onClick={onOpen}
          className="font-display text-lg sm:text-xl tracking-tight text-accent text-left hover:opacity-80 transition-opacity"
        >
          {project.title}
        </button>
        {project.link && (
          <>
            <span className="text-accent/50">·</span>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent underline underline-offset-4 hover:opacity-70 transition-opacity"
            >
              Try it out
            </a>
          </>
        )}
        {project.articleLink && (
          <>
            <span className="text-accent/50">·</span>
            <a
              href={project.articleLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent underline underline-offset-4 hover:opacity-70 transition-opacity"
            >
              Check it out
            </a>
          </>
        )}
      </div>
    </motion.div>
  );
}

// ---------------------------------------------------------------------------
// Modal — title · year, optional CTA top-right, intro, grouped stack, cover
// Uses the same pattern as the Experience modal (backdrop, scroll lock,
// Esc + X to close).
// ---------------------------------------------------------------------------

function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
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

  // `project` is a union of two differently-shaped const objects, so the raw
  // array members carry incompatible literal-tuple signatures. Normalize to
  // uniform array types before iterating.
  const stack = (project.stack ?? []) as readonly {
    label: string;
    items: readonly string[];
  }[];
  const intro = (project.intro ?? []) as readonly string[];
  const tags = project.tags as readonly string[];

  const hasStack = stack.some((g) => g.items.length > 0);

  return (
    <motion.div
      className="fixed inset-0 z-[80] flex items-start justify-center overflow-y-auto p-4 sm:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      <button
        type="button"
        aria-label="Close"
        onClick={onClose}
        className="absolute inset-0 bg-ink/40 backdrop-blur-sm"
      />

      <motion.div
        role="dialog"
        aria-modal="true"
        initial={{ opacity: 0, y: 32, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 24, scale: 0.98 }}
        transition={{ duration: 0.35, ease: EASE }}
        className="relative w-full max-w-4xl bg-bg rounded-3xl shadow-2xl my-6 overflow-hidden"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute top-5 right-5 z-10 w-10 h-10 rounded-full bg-ink/[0.06] hover:bg-ink/10 transition-colors flex items-center justify-center"
        >
          <HiXMark className="text-xl" />
        </button>

        <div className="p-8 sm:p-12">
          {/* Header row */}
          <div className="flex items-start justify-between gap-6 flex-wrap pr-12">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl tracking-tight leading-[1.05]">
                {project.title}
                {project.year && (
                  <span className="text-ink-muted font-display ml-3 text-xl sm:text-2xl">
                    · {project.year}
                  </span>
                )}
              </h2>
            </div>

            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                {project.linkLabel || "Visit"}
                <HiOutlineArrowUpRight />
              </a>
            )}
          </div>

          {/* Description */}
          <p className="mt-4 text-base sm:text-lg text-ink-muted max-w-2xl leading-relaxed">
            {project.description}
          </p>

          {/* Stack grid (4-column auto-fit) */}
          {hasStack && (
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-y-6 gap-x-8 border-t border-line pt-8">
              {stack
                .filter((g) => g.items.length > 0)
                .map((group) => (
                  <div key={group.label}>
                    <p className="text-xs uppercase tracking-[0.18em] text-ink-muted">
                      {group.label}
                    </p>
                    <ul className="mt-2 space-y-1">
                      {group.items.map((item) => (
                        <li key={item} className="text-sm sm:text-base">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
            </div>
          )}

          {/* Cover image (optional) */}
          {project.cover && (
            <div className="mt-10 relative w-full aspect-[16/9] rounded-2xl overflow-hidden bg-bg-alt">
              <Image
                src={project.cover}
                alt={`${project.title} cover`}
                fill
                sizes="(max-width: 768px) 100vw, 70vw"
                className="object-cover"
              />
            </div>
          )}

          {/* Long-form intro */}
          {intro.length > 0 && (
            <div className="mt-10 space-y-5 text-base sm:text-lg leading-relaxed text-ink-muted max-w-2xl">
              {intro.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          )}

          {/* Tag fallback (only if stack is empty) */}
          {!hasStack && tags.length > 0 && (
            <div className="mt-8 flex flex-wrap gap-x-3 gap-y-1 text-[11px] uppercase tracking-[0.15em] text-ink-muted">
              {tags.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
          )}

          {/* Secondary CTA */}
          {project.articleLink && (
            <div className="mt-10">
              <a
                href={project.articleLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                Check it out
                <HiOutlineArrowUpRight />
              </a>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

// ---------------------------------------------------------------------------
// Group — renders one labeled grid of project cards
// ---------------------------------------------------------------------------

function ProjectGroup({
  eyebrow,
  items,
  onOpen,
}: {
  eyebrow: string;
  items: readonly Project[];
  onOpen: (project: Project) => void;
}) {
  return (
    <div>
      <div className="flex items-baseline justify-between gap-4 mb-8 border-t border-line pt-6">
        <h3 className="text-xs uppercase tracking-[0.25em] text-ink-muted">
          {eyebrow}
        </h3>
        <span className="text-xs text-ink-muted">
          {items.length} {items.length === 1 ? "project" : "projects"}
        </span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-12">
        {items.map((project, i) => (
          <ProjectCard
            key={project.title}
            project={project}
            index={i}
            onOpen={() => onOpen(project)}
          />
        ))}
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Section
// ---------------------------------------------------------------------------

export default function Projects() {
  const { ref } = useSectionInView("Work", 0.2);
  const sectionRef = React.useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const titleY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  const [openProject, setOpenProject] = React.useState<Project | null>(null);

  return (
    <section
      ref={(node) => {
        ref(node as HTMLElement | null);
        sectionRef.current = node;
      }}
      id="work"
      className="relative scroll-mt-24 pt-8 sm:pt-9 pb-24 sm:pb-28 px-6 sm:px-10 max-w-[90rem] mx-auto"
    >
      <div className="flex items-end justify-between mb-12 sm:mb-16 gap-8 flex-wrap">
        <motion.div style={{ y: titleY }}>
          <span className="text-xs uppercase tracking-[0.25em] text-ink-muted">
            Selected work
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl tracking-tight leading-[1.05] mt-3">
            Recent projects<span className="text-accent">.</span>
          </h2>
        </motion.div>
        <p className="text-ink-muted max-w-xs text-sm leading-relaxed">
          Hover any tile to see the name and links. Click for a full breakdown.
        </p>
      </div>

      <ProjectGroup
        eyebrow="Client portfolio"
        items={projectsData.client}
        onOpen={setOpenProject}
      />

      <div className="mt-20 sm:mt-24">
        <ProjectGroup
          eyebrow="Personal projects"
          items={projectsData.personal}
          onOpen={setOpenProject}
        />
      </div>

      <AnimatePresence>
        {openProject && (
          <ProjectModal
            project={openProject}
            onClose={() => setOpenProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
