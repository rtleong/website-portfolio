"use client";

import React from "react";
import { motion } from "framer-motion";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

export default function Skills() {
  const { ref } = useSectionInView("Skills", 0.4);

  // Duplicate the list so the marquee loops seamlessly.
  const rowA = [...skillsData, ...skillsData];
  const rowB = [...skillsData].reverse();
  const rowBDuped = [...rowB, ...rowB];

  return (
    <section
      id="skills"
      ref={ref}
      className="relative scroll-mt-24 py-24 sm:py-28 overflow-hidden"
    >
      <div className="max-w-[90rem] mx-auto px-6 sm:px-10 mb-10 flex items-end justify-between flex-wrap gap-6">
        <div>
          <span className="text-xs uppercase tracking-[0.25em] text-ink-muted">
            Toolkit
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl tracking-tight leading-[1.05] mt-3">
            Skills<span className="text-accent">.</span>
          </h2>
        </div>
        <p className="text-ink-muted max-w-sm text-base">
          Languages, frameworks, and platforms I reach for most often.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="space-y-6"
      >
        <MarqueeRow items={rowA} className="animate-marquee" />
        <MarqueeRow items={rowBDuped} className="animate-marquee-slow" reverse />
      </motion.div>
    </section>
  );
}

function MarqueeRow({
  items,
  className,
  reverse,
}: {
  items: readonly string[];
  className: string;
  reverse?: boolean;
}) {
  return (
    <div className="overflow-hidden">
      <div
        className={`flex gap-4 whitespace-nowrap w-max ${className}`}
        style={reverse ? { animationDirection: "reverse" } : undefined}
      >
        {items.map((skill, i) => (
          <span
            key={`${skill}-${i}`}
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-line text-ink text-base sm:text-lg font-display tracking-tight hover:bg-ink hover:text-bg transition-colors duration-300"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
