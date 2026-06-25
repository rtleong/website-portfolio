"use client";

import React from "react";
import { siteContent } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="max-w-[100rem] mx-auto px-6 sm:px-10 py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 text-sm text-ink-muted">
        <div className="flex items-center gap-3">
          <span className="inline-block w-2 h-2 rounded-full bg-accent" />
          <span>{siteContent.footer.copyright}</span>
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-2">
          {siteContent.contact.socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="link-line"
            >
              {s.label.toLowerCase()}
            </a>
          ))}
        </div>

        <span className="text-xs">{siteContent.footer.builtWith}</span>
      </div>
    </footer>
  );
}
