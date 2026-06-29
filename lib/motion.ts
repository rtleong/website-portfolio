// Shared editorial easing used across all reveal/transition animations.
// Typed as a 4-number cubic-bezier tuple so framer-motion (v12+) accepts it —
// a plain number[] is read as a list of easings and rejected.
// See CLAUDE.md → Aesthetic rules ("Use [0.2, 0.8, 0.2, 1] easing").
export const EASE: [number, number, number, number] = [0.2, 0.8, 0.2, 1];
