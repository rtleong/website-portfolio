"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 40,
    scale: 0.95,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: 0.03 * index,
      type: "spring",
      stiffness: 120,
      damping: 18,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[60rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My Skills</SectionHeading>
      <motion.div
        className="flex flex-wrap justify-center gap-3 md:gap-4 mt-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        {skillsData.map((skill, index) => (
          <motion.div
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={index}
            whileHover={{
              y: -4,
              scale: 1.05,
              boxShadow: "0 4px 24px 0 #FF800022"
            }}
            className="flex items-center bg-[#181716] rounded-full px-5 py-2 shadow-sm transition-all duration-200 cursor-default group"
            style={{ minWidth: '110px' }}
          >
            <span className="w-2 h-2 rounded-full bg-accent mr-2 block" />
            <span className="text-base text-white font-medium select-none">
              {skill}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}