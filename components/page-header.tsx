"use client";

import React from "react";
import { motion } from "framer-motion";
import { EASE } from "@/lib/motion";

export default function PageHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="relative pt-28 sm:pt-32 pb-12 sm:pb-16 px-6 sm:px-10 max-w-[90rem] mx-auto">
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-xs uppercase tracking-[0.25em] text-ink-muted block"
      >
        ({eyebrow})
      </motion.span>

      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.05, ease: EASE }}
        className="font-display text-[clamp(2rem,5.5vw,5.25rem)] tracking-tight leading-[1.05] mt-3 max-w-[20ch]"
      >
        {title}
        <span className="text-accent">.</span>
      </motion.h1>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.18 }}
          className="mt-6 text-base sm:text-lg text-ink-muted max-w-2xl leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
    </section>
  );
}
