"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { HiOutlineArrowUpRight } from "react-icons/hi2";
import { projectsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

type Project = (typeof projectsData)[number];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const [hovered, setHovered] = React.useState(false);

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
        ease: [0.2, 0.8, 0.2, 1],
      }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="group relative flex flex-col"
    >
      <Wrapper href={project.link}>
        {/* Media — every project gets the same 4:3 frame */}
        <div className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl bg-bg-alt">
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(.2,.8,.2,1)] group-hover:scale-[1.03]"
          />

          {project.videoUrl && (
            <video
              ref={videoRef}
              src={project.videoUrl}
              muted
              loop
              playsInline
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                hovered ? "opacity-100" : "opacity-0"
              }`}
            />
          )}

          {project.link && (
            <div className="absolute inset-0 flex items-end justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-bg text-ink text-sm font-medium shadow-lg">
                Try it
                <HiOutlineArrowUpRight />
              </span>
            </div>
          )}
        </div>

        {/* Caption — fixed shape so cards line up */}
        <div className="mt-5 flex items-start justify-between gap-4">
          <h3 className="font-display text-lg sm:text-xl tracking-tight leading-tight">
            {project.title}
          </h3>
          {project.year && (
            <span className="shrink-0 text-xs uppercase tracking-[0.18em] text-ink-muted pt-1.5">
              {project.year}
            </span>
          )}
        </div>

        <p
          className="mt-2 text-sm sm:text-base text-ink-muted leading-relaxed overflow-hidden"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
          }}
        >
          {project.description}
        </p>

        <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1 text-[11px] uppercase tracking-[0.15em] text-ink-muted">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </Wrapper>
    </motion.div>
  );
}

function Wrapper({
  href,
  children,
}: {
  href?: string;
  children: React.ReactNode;
}) {
  if (href) {
    return (
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        {children}
      </Link>
    );
  }
  return <div>{children}</div>;
}

export default function Projects() {
  const { ref } = useSectionInView("Work", 0.2);
  const sectionRef = React.useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const titleY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section
      ref={(node) => {
        ref(node as HTMLElement | null);
        sectionRef.current = node;
      }}
      id="work"
      className="relative scroll-mt-24 py-24 sm:py-28 px-6 sm:px-10 max-w-[90rem] mx-auto"
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
          A mix of products, data tooling, and side experiments — hover to
          preview, click to dive in.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-12">
        {projectsData.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
