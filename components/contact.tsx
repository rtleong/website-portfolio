"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";
import { BsEnvelope, BsLinkedin, BsGithub } from "react-icons/bs";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,60rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Get In Touch</SectionHeading>

      <motion.div
        className="glass-strong rounded-3xl p-8 mx-4 relative z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <motion.p 
          className="text-xl text-gray-300 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Let's build something amazing together! Feel free to reach out through any of these channels.
        </motion.p>

        {/* Contact methods */}
        <motion.div 
          className="flex flex-wrap justify-center gap-6 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <motion.a
            href="mailto:rileyleong24@g.ucla.edu"
            className="glass px-6 py-4 rounded-2xl flex items-center gap-3 text-gray-300 hover:text-white transition-all duration-300 group hover:scale-105"
            whileHover={{ y: -2 }}
          >
            <BsEnvelope className="text-2xl text-gray-400 group-hover:scale-110 transition-transform" />
            <span className="font-medium">Email</span>
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/riley-leong/"
            target="_blank"
            rel="noopener noreferrer"
            className="glass px-6 py-4 rounded-2xl flex items-center gap-3 text-gray-300 hover:text-white transition-all duration-300 group hover:scale-105"
            whileHover={{ y: -2 }}
          >
            <BsLinkedin className="text-2xl text-gray-400 group-hover:scale-110 transition-transform" />
            <span className="font-medium">LinkedIn</span>
          </motion.a>

          <motion.a
            href="https://github.com/rtleong"
            target="_blank"
            rel="noopener noreferrer"
            className="glass px-6 py-4 rounded-2xl flex items-center gap-3 text-gray-300 hover:text-white transition-all duration-300 group hover:scale-105"
            whileHover={{ y: -2 }}
          >
            <BsGithub className="text-2xl text-gray-400 group-hover:scale-110 transition-transform" />
            <span className="font-medium">GitHub</span>
          </motion.a>
        </motion.div>

        <motion.div
          className="w-full h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent mb-8"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ delay: 0.5, duration: 0.8 }}
        />

        {/* Decorative elements - ensure pointer-events-none and z-0 */}
        <div className="absolute top-4 right-4 w-16 h-16 bg-gray-600 rounded-full opacity-10 blur-xl pointer-events-none z-0" />
        <div className="absolute bottom-4 left-4 w-12 h-12 bg-gray-500 rounded-full opacity-10 blur-xl pointer-events-none z-0" />
        {/* Form content */}
        <motion.form
          className="flex flex-col space-y-6 z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          action={async (formData) => {
            const { data, error } = await sendEmail(formData);

            if (error) {
              toast.error(error);
              return;
            }

            toast.success("Email sent successfully!");
          }}
        >
          <motion.div
            className="relative group z-10"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <input
              className="w-full h-14 px-6 rounded-2xl glass border border-gray-600/30 text-white placeholder-gray-400 focus:border-gray-500/50 focus:outline-none transition-all duration-300 group-focus-within:scale-105 z-10"
              name="senderEmail"
              type="email"
              required
              maxLength={500}
              placeholder="Your email address"
              autoComplete="email"
            />
            <div className="absolute inset-0 rounded-2xl bg-gray-600/10 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none z-0" />
          </motion.div>

          <motion.div
            className="relative group z-10"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <textarea
              className="w-full h-52 px-6 py-4 rounded-2xl glass border border-gray-600/30 text-white placeholder-gray-400 focus:border-gray-500/50 focus:outline-none transition-all duration-300 resize-none group-focus-within:scale-105 z-10"
              name="message"
              placeholder="Tell me about your project or just say hello!"
              required
              maxLength={5000}
              autoComplete="off"
            />
            <div className="absolute inset-0 rounded-2xl bg-gray-600/10 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none z-0" />
          </motion.div>

          <motion.div
            className="flex justify-center z-10"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <SubmitBtn />
          </motion.div>
        </motion.form>
      </motion.div>
    </motion.section>
  );
}