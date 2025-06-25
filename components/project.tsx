"use client";

import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion } from "framer-motion";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
}: ProjectProps) {
  return (
    <motion.div
      className="bg-[#26231f] border border-[#23211e] rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col w-full h-full group"
      whileHover={{ y: -3, scale: 1.015 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="relative w-full h-40 overflow-hidden rounded-t-xl">
        <Image
          src={imageUrl}
          alt={`${title} project`}
          fill
          style={{ objectFit: 'cover' }}
          className="transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <div className="flex flex-col flex-1 p-6 gap-4 justify-between">
        <h3 className="text-2xl font-serif font-normal text-white mb-1">{title}</h3>
        <p className="text-gray-400 text-base flex-1 line-clamp-3">{description}</p>
        <div className="flex flex-wrap gap-2 mt-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-[#23211e] text-accent text-xs font-semibold px-2 py-0.5 rounded-full tracking-wide"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}