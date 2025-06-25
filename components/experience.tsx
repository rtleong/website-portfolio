"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

export default function Experience() {
  const { ref } = useSectionInView("Experience");

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My Experience</SectionHeading>
      
      <div className="max-w-[60rem] mx-auto px-4">
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-600" />
          
          {experiencesData.map((item, index) => (
            <motion.div
              key={index}
              className="relative mb-12 last:mb-0"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              {/* Timeline dot */}
              <div className="absolute left-6 top-6 w-4 h-4 bg-gray-500 rounded-full shadow-lg z-10" />
              
              {/* Content card */}
              <motion.div
                className="ml-16 glass-strong rounded-2xl p-6 relative group"
                whileHover={{ y: -3, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                {/* Icon */}
                <div className="absolute -top-4 -left-4 w-12 h-12 glass rounded-full flex items-center justify-center text-2xl text-white shadow-lg">
                  <div className="text-gray-400">
                    {item.icon}
                  </div>
                </div>
                
                {/* Date badge */}
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-gray-700/50 border border-gray-600/50 rounded-full text-sm font-medium text-gray-300 backdrop-blur-sm">
                    {item.date}
                  </span>
                </div>
                
                {/* Content */}
                <div className="mt-4 space-y-3">
                  <motion.h3 
                    className="text-2xl font-bold text-white"
                    whileHover={{ scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {item.title}
                  </motion.h3>
                  
                  <p className="text-lg font-medium text-gray-300">
                    {item.location}
                  </p>
                  
                  <p className="text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-gray-600 rounded-full opacity-10 blur-lg" />
                <div className="absolute bottom-4 left-4 w-6 h-6 bg-gray-500 rounded-full opacity-10 blur-lg" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}