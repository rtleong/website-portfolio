"use client";

import React from "react";
import { motion } from "framer-motion";
import { HiOutlineArrowUpRight } from "react-icons/hi2";
import { useSectionInView } from "@/lib/hooks";
import DrawingPad from "./drawing-pad";
import { siteContent } from "@/lib/data";
import { EASE } from "@/lib/motion";

export default function Contact() {
  const { ref } = useSectionInView("Contact", 0.3);

  const headlineLines = siteContent.contact.headline.split("\n");

  return (
    <section
      id="contact"
      ref={ref}
      className="relative scroll-mt-24 py-24 sm:py-28 px-6 sm:px-10 max-w-[90rem] mx-auto"
    >
      <span className="text-xs uppercase tracking-[0.25em] text-ink-muted block">
        ({siteContent.contact.eyebrow})
      </span>

      <h2 className="font-display text-[clamp(2rem,5vw,4.5rem)] leading-[1.25] tracking-tight mt-4 mb-12 max-w-[18ch]">
        {headlineLines.map((line, i) => (
          <span key={i} className="block overflow-hidden pb-[0.22em] -mb-[0.22em]">
            <motion.span
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: i * 0.08, ease: EASE }}
              className="inline-block"
            >
              {line}
            </motion.span>
          </span>
        ))}
      </h2>

      <div className="grid md:grid-cols-12 gap-12 items-start">
        {/* Left: huge email + socials */}
        <div className="md:col-span-7 space-y-10">
          <a
            href={`mailto:${siteContent.contact.email}`}
            className="group inline-flex items-center gap-3 font-display text-2xl sm:text-3xl md:text-4xl tracking-tight leading-none link-line break-all"
          >
            {siteContent.contact.email}
            <HiOutlineArrowUpRight className="text-xl sm:text-2xl shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
          </a>

          <p className="text-ink-muted max-w-lg text-lg leading-relaxed">
            {siteContent.contact.blurb}
          </p>

          <ul className="flex flex-wrap gap-3">
            {siteContent.contact.socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="btn-ghost"
                >
                  {s.label}
                  <HiOutlineArrowUpRight />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: draw-and-ship pad (a fun data-engineering showcase) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="md:col-span-5"
        >
          <DrawingPad />
        </motion.div>
      </div>
    </section>
  );
}
