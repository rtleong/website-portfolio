"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[60rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>
      <div className="relative flex justify-center">
        {/* Blurred orange blob for flair */}
        <div className="absolute -top-8 -left-16 w-40 h-32 bg-accent opacity-20 rounded-full blur-2xl z-0" />
        <motion.div
          className="relative flex text-left shadow-lg rounded-2xl px-8 py-10 md:px-14 md:py-12 max-w-2xl items-start z-10 bg-[#23211e]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
        >
          {/* Vertical orange accent bar */}
          <div className="w-1.5 h-full bg-accent rounded-full mr-8 hidden sm:block" />
          <div className="space-y-6 text-lg leading-relaxed">
            <div>
              <span className="font-serif text-2xl text-accent font-normal">Hi! I'm Riley 👋</span>
            </div>
            <div>
              I'm a UCLA senior majoring in <span className="text-accent font-semibold">Mathematics of Computation</span> - a joint Math + CS program that fuels my passion for building impactful technology.
            </div>
            <div>
              I thrive at the intersection of <span className="text-accent font-semibold">engineering</span> and <span className="text-accent font-semibold">business</span>, with hands-on experience as a data engineer and project manager.
            </div>
            <div>
              I love uncovering the "why" behind the data and turning insights into real solutions. My mission: create products that matter.
            </div>
            <div className="text-xl font-medium">
              Always happy to connect—let's build something great!
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}