"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { HiOutlineArrowUpRight } from "react-icons/hi2";
import { siteContent } from "@/lib/data";

export default function Bookings() {
  const { photos, gigs, links, bookingEmail, bookingBlurb, djName } =
    siteContent.bookingsPage;

  return (
    <div className="px-6 sm:px-10 max-w-[90rem] mx-auto pb-24">
      {/* DJ name + quick links */}
      <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
        <div>
          <span className="text-xs uppercase tracking-[0.25em] text-ink-muted">
            DJ Alias
          </span>
          <p className="font-display text-3xl sm:text-4xl tracking-tight leading-none mt-2">
            {djName}
          </p>
        </div>
        <ul className="flex flex-wrap gap-2">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                {l.label}
                <HiOutlineArrowUpRight />
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Photo grid — every image forced to a 4/5 frame */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-20">
        {photos.map((photo, i) => (
          <motion.figure
            key={`${photo.src}-${i}`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: (i % 3) * 0.06 }}
            className="group"
          >
            <div className="relative w-full aspect-[4/5] overflow-hidden rounded-2xl bg-bg-alt">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(.2,.8,.2,1)] group-hover:scale-[1.04]"
              />
            </div>
            {photo.caption && (
              <figcaption className="mt-3 text-xs uppercase tracking-[0.18em] text-ink-muted">
                {photo.caption}
              </figcaption>
            )}
          </motion.figure>
        ))}
      </div>

      {/* Gigs list */}
      <div className="mb-20">
        <h2 className="text-xs uppercase tracking-[0.25em] text-ink-muted mb-6">
          Selected dates
        </h2>
        <ul className="divide-y divide-line border-t border-line">
          {gigs.map((g, i) => (
            <motion.li
              key={`${g.date}-${g.venue}`}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.04 }}
              className="grid grid-cols-12 gap-3 py-5 items-center"
            >
              <span className="col-span-12 sm:col-span-3 text-sm text-ink-muted uppercase tracking-[0.15em]">
                {g.date}
              </span>
              <span className="col-span-12 sm:col-span-5 font-display text-lg sm:text-xl tracking-tight">
                {g.venue}
              </span>
              <span className="col-span-8 sm:col-span-3 text-sm text-ink-muted">
                {g.city}
              </span>
              <span
                className={`col-span-4 sm:col-span-1 text-xs uppercase tracking-[0.18em] sm:text-right ${
                  g.status === "upcoming" ? "text-accent" : "text-ink-muted"
                }`}
              >
                {g.status}
              </span>
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Booking CTA */}
      <div className="border-t border-line pt-12">
        <span className="text-xs uppercase tracking-[0.25em] text-ink-muted">
          Bookings
        </span>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl tracking-tight leading-[1.05] mt-3 mb-4 max-w-[20ch]">
          Let's get on the calendar<span className="text-accent">.</span>
        </h2>
        <p className="text-base sm:text-lg text-ink-muted max-w-2xl leading-relaxed mb-8">
          {bookingBlurb}
        </p>
        <a
          href={`mailto:${bookingEmail}?subject=DJ Booking Inquiry`}
          className="group inline-flex items-center gap-3 font-display text-2xl sm:text-3xl md:text-4xl tracking-tight leading-none link-line break-all"
        >
          {bookingEmail}
          <HiOutlineArrowUpRight className="text-xl sm:text-2xl shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
        </a>
      </div>
    </div>
  );
}
