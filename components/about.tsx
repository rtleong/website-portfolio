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
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      
  <div className="text-left">
  <SectionHeading>About Me</SectionHeading>
  <div className="mb-3 space-y-4">
    <div>
      Hi! I'm <span className="font-bold text-orange-500">Riley</span>!
    </div>
    <div>
      <span className="font-medium"></span>I'm a Senior at {" "}
      <span className="font-medium">UCLA majoring in  Mathematics of Computation</span> 
      , a <span className="font-bold text-orange-400">joint Math + CS</span> major focused on applied technical fields.
    </div>
    <div>
      This past summer, I interned as a
      <span className="font-bold text-orange-400"> Data Engineer @ Fidelity Investments</span>, where I engineered a 
      generative AI tool to semantically search over 7 years of internal MS Teams Messages (1M+ records). 
      The tool enables vector-based search and LLM-powered Q&A to resolve common production issues more efficiently. 
      I'm passionate about full-stack development, big data systems, and designing products that make an impact!
    </div>
    <div>
      Always happy to chat so feel free to reach out!
       <span className="font-medium"></span>
    </div>
  </div>
</div>


    </motion.section>
  );
}