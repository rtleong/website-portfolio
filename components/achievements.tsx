"use client";

import React from "react";
import { motion } from "framer-motion";

type Achievement = {
  title: string;
  detail: string;
  year: string;
};

type Block = {
  heading: string;
  institution: string;
  dateRange: string;
  items: readonly Achievement[];
};

export default function Achievements({ block }: { block: Block }) {
  return (
    <section className="px-6 sm:px-10 max-w-[90rem] mx-auto py-12 sm:py-16">
      <div className="grid md:grid-cols-12 gap-10 items-start border-t border-line pt-12">
        <div className="md:col-span-4">
          <h2 className="font-display text-3xl sm:text-4xl tracking-tight leading-tight">
            {block.heading}
          </h2>
          <p className="mt-3 text-sm text-ink-muted">{block.institution}</p>
          <p className="text-xs uppercase tracking-[0.18em] text-ink-muted mt-1">
            {block.dateRange}
          </p>
        </div>

        <ul className="md:col-span-8 divide-y divide-line border-t border-line">
          {block.items.map((item, i) => (
            <motion.li
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group grid grid-cols-12 gap-3 py-5"
            >
              <span className="col-span-3 sm:col-span-2 text-xs uppercase tracking-[0.18em] text-ink-muted pt-1">
                {item.year}
              </span>
              <div className="col-span-9 sm:col-span-10">
                <h3 className="font-display text-lg sm:text-xl tracking-tight leading-tight">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm sm:text-base text-ink-muted leading-relaxed">
                  {item.detail}
                </p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
