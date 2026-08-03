"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { siteContent } from "@/lib/data";
import { EASE } from "@/lib/motion";

const word = {
  hidden: { y: "100%", opacity: 0 },
  show: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.08 * i + 0.2,
      duration: 0.9,
      ease: EASE,
    },
  }),
};

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);

  const sectionRef = React.useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Build lines from the tagline (split on \n)
  const lines = siteContent.hero.tagline.split("\n");

  return (
    <section
      ref={(node) => {
        ref(node as HTMLElement | null);
        sectionRef.current = node;
      }}
      id="home"
      className="relative min-h-[88vh] w-full flex flex-col justify-between pt-28 sm:pt-32 pb-10 px-6 sm:px-10 max-w-[90rem] mx-auto"
    >
      {/* top meta row */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="hidden sm:flex justify-between text-xs uppercase tracking-[0.2em] text-ink-muted"
      >
        <span>(portfolio / 2026)</span>
        <span>based in NYC </span>
      </motion.div>

      {/* big tagline */}
      <motion.div
        style={{ y, opacity }}
        className="flex-1 flex flex-col justify-center"
      >
        <h1 className="font-display text-[clamp(2rem,5.5vw,5.25rem)] leading-[1.25] tracking-tight max-w-[20ch]">
          {lines.map((line, lineIdx) => (
            <span key={lineIdx} className="block overflow-hidden pb-[0.22em] -mb-[0.22em]">
              <motion.span
                custom={lineIdx}
                variants={word}
                initial="hidden"
                animate="show"
                className="inline-block"
              >
                {line}
                {lineIdx === lines.length - 1 && (
                  <span className="inline-block w-2 h-2 sm:w-3 sm:h-3 ml-2 sm:ml-3 rounded-full bg-accent align-middle" />
                )}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="mt-10"
        >
          <p className="text-base sm:text-lg text-ink-muted max-w-xl leading-relaxed">
            {siteContent.hero.subtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <a
            href={siteContent.hero.secondaryCta.href}
            download
            className="btn-primary"
          >
            {siteContent.hero.secondaryCta.label}
          </a>

          <a
            href="https://www.linkedin.com/in/riley-leong/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="btn-ghost"
          >
            <FaLinkedinIn className="text-base" />
            LinkedIn
          </a>

          <a
            href="https://github.com/rtleong"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="btn-ghost"
          >
            <FaGithub className="text-base" />
            GitHub
          </a>
        </motion.div>
      </motion.div>

    </section>
  );
}
