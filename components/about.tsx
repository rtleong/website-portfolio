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
      Hi! My name is <span className="font-bold text-orange-500">Riley</span>!
    </div>
    <div>
      <span className="font-medium">I am</span> currently in my junior year at{" "}
      <span className="font-medium">UCLA where I study Mathematics of Computation, </span> 
      a <span className="font-bold text-orange-400">Math + CS</span> joint major focused on applied fields.
    </div>
    <div>
      This past summer, I had the privilege to work as a 
      <span className="font-bold text-orange-400"> Data Science Intern @ First American</span>, where 
      I worked on a variety of tasks relating to pipelines, quality assurance, and integrating our data 
      into corporate/consumer products.
    </div>
    <div>
      I am currently seeking Software Engineering and Data Science/Engineering roles. By developing my 
      skills in both the software and data fields, I hope to create a foundation for a successful career 
      in the tech industry. <span className="font-medium"></span>
    </div>
  </div>
</div>


    </motion.section>
  );
}