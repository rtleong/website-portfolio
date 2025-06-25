"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[60rem] text-center sm:mb-0 scroll-mt-[100rem] relative flex flex-col items-center justify-center"
    >
      {/* Soft orange spotlight backdrop */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none">
        <div
          style={{
            width: '520px',
            height: '320px',
            background: 'radial-gradient(ellipse 60% 40% at 50% 50%, #FF8000 0%, transparent 100%)',
            filter: 'blur(60px)',
            opacity: 0.18,
          }}
        />
      </div>

      {/* Profile image */}
      <motion.div
        className="relative z-10 flex flex-col items-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, type: "spring", stiffness: 100, damping: 20 }}
      >
        <div className="-mb-12 flex justify-center z-20">
          <span className="inline-block rounded-full p-1 bg-gradient-to-tr from-[#FF8000] to-[#FF8000]/60 shadow-lg" style={{ boxShadow: '0 4px 32px 0 #FF800033' }}>
            <Image
              src="/profile.jpg"
              alt="Profile photo of Riley Leong"
              width={160}
              height={160}
              className="rounded-full object-cover object-[50%_30%] border-4 border-[#181716] bg-[#181716]"
              priority
            />
          </span>
        </div>

        <motion.h1
          className="pt-16 mb-4 text-6xl sm:text-8xl font-serif font-normal text-shadow-strong relative z-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Riley
          <br />
          <span className="text-gray-300">Leong</span>
        </motion.h1>

        <motion.h2
          className="text-3xl sm:text-4xl font-light text-gray-300 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          Data Engineer and Project Manager
        </motion.h2>
        <motion.p
          className="text-lg text-gray-400 max-w-2xl mx-auto mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          Mathematics of Computation Major at UCLA. Passionate about using data to solve business needs, leading teams, and generating impact.
        </motion.p>
        {/* Orange accent underline - moved lower */}
        <div className="w-32 h-2 rounded-full bg-accent mb-8" style={{ boxShadow: '0 4px 32px 0 #FF800033' }} />
      </motion.div>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 mt-8 relative z-10"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 1.1,
          type: "spring",
          stiffness: 100,
          damping: 20,
        }}
      >
        <Link
          href="#contact"
          className="btn-primary group flex items-center gap-2"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Let's Connect
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition-transform" />
        </Link>

        <a
          className="btn-secondary group flex items-center gap-2"
          href="/Riley_Leong's_Resume.pdf"
          download
        >
          <HiDownload className="opacity-70 group-hover:translate-y-1 transition-transform" />
          Resume
        </a>

        <motion.div
          className="flex gap-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.3 }}
        >
          <a
            className="text-gray-300 hover:text-accent transition-all duration-300 rounded-full group hover:scale-105"
            href="https://www.linkedin.com/in/riley-leong/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsLinkedin className="text-2xl group-hover:scale-110 transition-transform" />
          </a>

          <a
            className="text-gray-300 hover:text-accent transition-all duration-300 rounded-full group hover:scale-105"
            href="https://github.com/rtleong"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithubSquare className="text-2xl group-hover:scale-110 transition-transform" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}