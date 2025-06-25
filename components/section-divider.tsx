"use client";

import React from "react";
import { motion } from "framer-motion";

export default function SectionDivider() {
  return (
    <motion.div
      className="my-24 flex justify-center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.125 }}
    >
      <div className="w-1 h-16 bg-gray-600 rounded-full shadow-lg">
        {/* Subtle glow effect */}
        <div className="w-1 h-16 bg-gray-600 rounded-full blur-md opacity-30" />
      </div>
    </motion.div>
  );
}