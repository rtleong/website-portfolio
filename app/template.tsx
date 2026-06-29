"use client";

import React from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { EASE } from "@/lib/motion";

const CURTAIN_EASE: [number, number, number, number] = [0.76, 0, 0.24, 1];

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <>
      {/* Curtain that wipes across the screen on every navigation. */}
      <motion.div
        key={pathname + "-curtain"}
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        transition={{ duration: 0.7, ease: CURTAIN_EASE }}
        style={{ transformOrigin: "top" }}
        className="fixed inset-0 z-[60] bg-ink pointer-events-none"
      />

      {/* Page content fades + lifts in once the curtain has cleared. */}
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.35, ease: EASE }}
      >
        {children}
      </motion.div>
    </>
  );
}
