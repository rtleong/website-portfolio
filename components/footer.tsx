"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer 
      className="mb-10 px-4 text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="glass rounded-2xl p-6 max-w-2xl mx-auto">
        <motion.small 
          className="block text-sm text-white/80 mb-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          &copy; 2024 Riley Leong
        </motion.small>
        
        <motion.p 
          className="text-sm text-white/60 leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <span className="gradient-text font-semibold">Built with:</span>{" "}
          React & Next.js, TypeScript, Tailwind CSS, Framer Motion, React Email & Resend, Vercel hosting.
        </motion.p>
        
        {/* Decorative elements */}
        <div className="absolute top-2 right-2 w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 blur-lg" />
        <div className="absolute bottom-2 left-2 w-6 h-6 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-20 blur-lg" />
      </div>
    </motion.footer>
  );
}