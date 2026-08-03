"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { HiOutlineArrowUpRight } from "react-icons/hi2";
import { siteContent } from "@/lib/data";
import { EASE } from "@/lib/motion";

type Post = (typeof siteContent.blogPage.posts)[number];

export default function Blog() {
  const { posts } = siteContent.blogPage;

  return (
    <div className="px-6 sm:px-10 max-w-[90rem] mx-auto pb-24">
      <div className="grid md:grid-cols-2 gap-x-16 lg:gap-x-32 gap-y-16 sm:gap-y-20">
        {posts.map((post, i) => (
          <BlogCard key={post.title} post={post} index={i} />
        ))}
      </div>
    </div>
  );
}

// Every "Read more" points at an external article (Medium), so links open in a
// new tab rather than routing anywhere inside the site.
function BlogCard({ post, index }: { post: Post; index: number }) {
  const href = post.href;
  const external = href.startsWith("http");
  const linkProps = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: (index % 2) * 0.08, ease: EASE }}
      className="group flex flex-col"
    >
      {/* Category eyebrow */}
      {post.category && (
        <span className="text-xs uppercase tracking-[0.22em] text-accent">
          {post.category}
        </span>
      )}

      {/* Title */}
      <a href={href} {...linkProps} className="mt-3 block">
        <h2 className="font-display text-3xl sm:text-4xl tracking-tight leading-[1.08] group-hover:text-accent transition-colors">
          {post.title}
        </h2>
      </a>

      {/* Byline */}
      <p className="mt-3 text-sm text-ink-muted">
        Published by <span className="text-ink font-medium">{post.author}</span>{" "}
        on {post.date}
      </p>

      {/* Cover image */}
      <a
        href={href}
        {...linkProps}
        className="mt-6 block relative w-full aspect-[16/9] overflow-hidden rounded-2xl bg-bg-alt"
      >
        <Image
          src={post.image}
          alt={post.title}
          fill
          sizes="(max-width: 768px) 100vw, 45vw"
          className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(.2,.8,.2,1)] group-hover:scale-[1.03]"
        />
      </a>

      {/* Excerpt */}
      <p className="mt-6 text-base sm:text-lg leading-relaxed text-ink-muted">
        {post.excerpt}
      </p>

      {/* Read more */}
      <a
        href={href}
        {...linkProps}
        className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:opacity-70 transition-opacity self-start"
      >
        Read more
        <HiOutlineArrowUpRight />
      </a>
    </motion.article>
  );
}
