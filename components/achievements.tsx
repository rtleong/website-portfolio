"use client";

import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineArrowUpRight, HiXMark } from "react-icons/hi2";

type Photo = { src: string; alt: string; caption?: string };

type Achievement = {
  title: string;
  detail: string;
  year: string;
  body?: readonly string[];
  photos?: readonly Photo[];
  tags?: readonly string[];
  link?: string;
};

type Block = {
  heading: string;
  institution: string;
  dateRange: string;
  items: readonly Achievement[];
};

function AchievementModal({
  item,
  block,
  onClose,
}: {
  item: Achievement;
  block: Block;
  onClose: () => void;
}) {
  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-[80] flex items-start justify-center overflow-y-auto p-4 sm:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      {/* Backdrop */}
      <button
        type="button"
        aria-label="Close"
        onClick={onClose}
        className="absolute inset-0 bg-ink/40 backdrop-blur-sm"
      />

      <motion.div
        role="dialog"
        aria-modal="true"
        initial={{ opacity: 0, y: 32, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 24, scale: 0.98 }}
        transition={{ duration: 0.35, ease: [0.2, 0.8, 0.2, 1] }}
        className="relative w-full max-w-4xl bg-bg rounded-3xl shadow-2xl my-6 overflow-hidden"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute top-5 right-5 z-10 w-10 h-10 rounded-full bg-ink/[0.06] hover:bg-ink/10 transition-colors flex items-center justify-center"
        >
          <HiXMark className="text-xl" />
        </button>

        <div className="p-8 sm:p-12">
          <span className="text-xs uppercase tracking-[0.25em] text-ink-muted block">
            {block.heading} · {item.year}
          </span>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl tracking-tight leading-[1.05] mt-4">
            {item.title}
          </h2>

          <p className="mt-3 text-sm text-ink-muted">{block.institution}</p>

          {/* Body — falls back to the short detail when no long-form body */}
          <div className="mt-8 space-y-5 text-base sm:text-lg leading-relaxed text-ink-muted max-w-2xl">
            {item.body && item.body.length > 0 ? (
              item.body.map((p, i) => <p key={i}>{p}</p>)
            ) : (
              <p>{item.detail}</p>
            )}
          </div>

          {/* Photo grid */}
          {item.photos && item.photos.length > 0 && (
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {item.photos.map((photo, i) => (
                <figure key={`${photo.src}-${i}`} className="group">
                  <div className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl bg-bg-alt">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(.2,.8,.2,1)] group-hover:scale-[1.03]"
                    />
                  </div>
                  {photo.caption && (
                    <figcaption className="mt-2 text-xs uppercase tracking-[0.18em] text-ink-muted">
                      {photo.caption}
                    </figcaption>
                  )}
                </figure>
              ))}
            </div>
          )}

          {/* Tags */}
          {item.tags && item.tags.length > 0 && (
            <div className="mt-8 flex flex-wrap gap-x-3 gap-y-1 text-[11px] uppercase tracking-[0.15em] text-ink-muted">
              {item.tags.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
          )}

          {/* Link */}
          {item.link && (
            <div className="mt-10">
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Learn more
                <HiOutlineArrowUpRight />
              </a>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Achievements({ block }: { block: Block }) {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);
  const openItem = openIndex !== null ? block.items[openIndex] : null;

  return (
    <section className="px-6 sm:px-10 max-w-[90rem] mx-auto py-12 sm:py-16">
      <div className="grid md:grid-cols-12 gap-10 items-start border-t border-line pt-12">
        <div className="md:col-span-4">
          <h2 className="font-display text-3xl sm:text-4xl tracking-tight leading-tight">
            {block.heading}
          </h2>
          <p className="mt-3 text-sm text-ink-muted">{block.institution}</p>
          <p className="text-xs uppercase tracking-[0.18em] text-ink-muted mt-1">
            {block.dateRange}
          </p>
        </div>

        <ul className="md:col-span-8 divide-y divide-line border-t border-line">
          {block.items.map((item, i) => (
            <motion.li
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <button
                type="button"
                onClick={() => setOpenIndex(i)}
                className="group w-full text-left grid grid-cols-12 gap-3 py-5 cursor-pointer transition-colors hover:bg-bg-alt -mx-3 px-3 rounded-lg"
              >
                <span className="col-span-3 sm:col-span-2 text-xs uppercase tracking-[0.18em] text-ink-muted pt-1">
                  {item.year}
                </span>
                <div className="col-span-7 sm:col-span-8">
                  <h3 className="font-display text-lg sm:text-xl tracking-tight leading-tight">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm sm:text-base text-ink-muted leading-relaxed">
                    {item.detail}
                  </p>
                </div>
                <span className="col-span-2 flex items-start justify-end pt-1.5 text-ink-muted group-hover:text-ink transition-colors">
                  <HiOutlineArrowUpRight />
                </span>
              </button>
            </motion.li>
          ))}
        </ul>
      </div>

      <AnimatePresence>
        {openItem && (
          <AchievementModal
            item={openItem}
            block={block}
            onClose={() => setOpenIndex(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
