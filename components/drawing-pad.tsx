"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import toast from "react-hot-toast";
import { HiXMark, HiOutlineArrowUpRight } from "react-icons/hi2";
import { siteContent } from "@/lib/data";
import { EASE } from "@/lib/motion";

const COLORS = ["#1a1a1a", "#d6451b", "#2563eb"];

// Simple client-side token-bucket limiter — refills 1 token/sec, cap 3. Mirrors
// the server-side throttle described in the "how this ships" modal so the demo
// actually behaves the way the writeup claims.
function useRateLimiter(capacity = 3, refillPerSec = 1) {
  const tokens = React.useRef(capacity);
  const last = React.useRef(Date.now());

  return React.useCallback(() => {
    const now = Date.now();
    tokens.current = Math.min(
      capacity,
      tokens.current + ((now - last.current) / 1000) * refillPerSec
    );
    last.current = now;
    if (tokens.current >= 1) {
      tokens.current -= 1;
      return true;
    }
    return false;
  }, [capacity, refillPerSec]);
}

export default function DrawingPad() {
  const { drawing } = siteContent.contact;
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const drawingRef = React.useRef(false);
  const lastPt = React.useRef<{ x: number; y: number } | null>(null);
  const hasDrawn = React.useRef(false);

  const [color, setColor] = React.useState(COLORS[0]);
  const [shipping, setShipping] = React.useState(false);
  const [about, setAbout] = React.useState(false);
  const takeToken = useRateLimiter();

  // Size the canvas backing store to its rendered size (retina-crisp).
  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      // Preserve existing drawing across resizes.
      const prev = canvas.toDataURL();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      ctx.scale(dpr, dpr);
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      if (hasDrawn.current) {
        const img = new window.Image();
        img.onload = () => ctx.drawImage(img, 0, 0, rect.width, rect.height);
        img.src = prev;
      }
    };
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  const pointFromEvent = (e: React.PointerEvent) => {
    const rect = canvasRef.current!.getBoundingClientRect();
    return { x: e.clientX - rect.left, y: e.clientY - rect.top };
  };

  const startDraw = (e: React.PointerEvent) => {
    if (shipping) return;
    (e.target as Element).setPointerCapture(e.pointerId);
    drawingRef.current = true;
    lastPt.current = pointFromEvent(e);
  };

  const draw = (e: React.PointerEvent) => {
    if (!drawingRef.current) return;
    const ctx = canvasRef.current?.getContext("2d");
    if (!ctx || !lastPt.current) return;
    const pt = pointFromEvent(e);
    ctx.strokeStyle = color;
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(lastPt.current.x, lastPt.current.y);
    ctx.lineTo(pt.x, pt.y);
    ctx.stroke();
    lastPt.current = pt;
    hasDrawn.current = true;
  };

  const endDraw = () => {
    drawingRef.current = false;
    lastPt.current = null;
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    hasDrawn.current = false;
  };

  const ship = async () => {
    if (shipping) return;
    if (!hasDrawn.current) {
      toast("Draw something first!", { icon: "✏️" });
      return;
    }
    // Rate limit — mirrors the server-side token bucket.
    if (!takeToken()) {
      toast.error(drawing.throttleMessage);
      return;
    }

    setShipping(true);

    // ── Where the real upload goes ──────────────────────────────────────────
    // const png = canvasRef.current!.toDataURL("image/png");
    // await fetch("/api/ship-drawing", { method: "POST", body: JSON.stringify({ png }) });
    // The API route validates + throttles server-side, then puts the object in
    // S3 keyed by timestamp. Simulated here until that route + creds are wired.
    await new Promise((r) => setTimeout(r, 900));

    // Clear animation runs (see overlay below), then wipe + confirm.
    setTimeout(() => {
      clearCanvas();
      setShipping(false);
      toast.success(drawing.successMessage);
    }, 650);
  };

  return (
    <div>
      <div className="flex items-center justify-between gap-4">
        <p className="text-xs uppercase tracking-[0.25em] text-ink-muted">
          {drawing.prompt}
        </p>
        {/* Color palette */}
        <div className="flex items-center gap-2">
          {COLORS.map((c) => (
            <button
              key={c}
              type="button"
              aria-label={`Draw in ${c}`}
              onClick={() => setColor(c)}
              className={`w-6 h-6 rounded-full transition-transform ${
                color === c
                  ? "ring-2 ring-offset-2 ring-offset-bg ring-ink scale-110"
                  : "hover:scale-110"
              }`}
              style={{ backgroundColor: c }}
            />
          ))}
        </div>
      </div>

      {/* Canvas */}
      <div className="mt-4 relative w-full aspect-[4/3] rounded-2xl border border-line bg-bg-alt overflow-hidden">
        <canvas
          ref={canvasRef}
          onPointerDown={startDraw}
          onPointerMove={draw}
          onPointerUp={endDraw}
          onPointerLeave={endDraw}
          className="absolute inset-0 w-full h-full touch-none cursor-crosshair"
        />

        {/* Ship animation — a wipe sweeps across then fades */}
        <AnimatePresence>
          {shipping && (
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.65, ease: EASE }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/30 to-transparent pointer-events-none"
            />
          )}
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="mt-4 flex items-center gap-4">
        <button
          type="button"
          onClick={ship}
          disabled={shipping}
          className="btn-primary disabled:opacity-60"
        >
          {shipping ? "Shipping…" : drawing.shipLabel}
          <HiOutlineArrowUpRight />
        </button>
        <button
          type="button"
          onClick={clearCanvas}
          disabled={shipping}
          className="text-sm text-ink-muted hover:text-ink transition-colors disabled:opacity-60"
        >
          Clear
        </button>
      </div>

      {/* Read-more trigger */}
      <button
        type="button"
        onClick={() => setAbout(true)}
        className="mt-5 inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.18em] text-ink-muted hover:text-accent transition-colors"
      >
        {drawing.aboutLabel}
        <HiOutlineArrowUpRight className="text-sm" />
      </button>

      {/* How-it-works modal */}
      <AnimatePresence>
        {about && (
          <motion.div
            className="fixed inset-0 z-[80] flex items-start justify-center overflow-y-auto p-4 sm:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <button
              type="button"
              aria-label="Close"
              onClick={() => setAbout(false)}
              className="absolute inset-0 bg-ink/40 backdrop-blur-sm"
            />
            <motion.div
              role="dialog"
              aria-modal="true"
              initial={{ opacity: 0, y: 32, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.98 }}
              transition={{ duration: 0.35, ease: EASE }}
              className="relative w-full max-w-lg bg-bg rounded-3xl shadow-2xl my-6 overflow-hidden"
            >
              <button
                type="button"
                onClick={() => setAbout(false)}
                aria-label="Close"
                className="absolute top-5 right-5 z-10 w-10 h-10 rounded-full bg-ink/[0.06] hover:bg-ink/10 transition-colors flex items-center justify-center"
              >
                <HiXMark className="text-xl" />
              </button>
              <div className="p-8 sm:p-10">
                <span className="text-xs uppercase tracking-[0.25em] text-ink-muted">
                  Under the hood
                </span>
                <h3 className="font-display text-3xl sm:text-4xl tracking-tight leading-[1.05] mt-3">
                  {drawing.aboutTitle}
                  <span className="text-accent">.</span>
                </h3>
                <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-muted">
                  {drawing.about.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
                <div className="mt-8 flex flex-wrap gap-x-3 gap-y-1 text-[11px] uppercase tracking-[0.15em] text-ink-muted">
                  <span>AWS S3</span>
                  <span>Limiting Requests</span>
                  <span>Token Bucket</span>
                  <span>Data Transformation</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
