"use client";

import { useSyncExternalStore } from "react";

const QUERY = "(prefers-reduced-motion: reduce)";

function subscribe(callback: () => void) {
  const mq = window.matchMedia(QUERY);
  mq.addEventListener("change", callback);
  return () => mq.removeEventListener("change", callback);
}

function getSnapshot() {
  return window.matchMedia(QUERY).matches;
}

function getServerSnapshot() {
  return false;
}

/**
 * Every motion primitive in this codebase must call this and branch on it.
 * No component is allowed to animate unconditionally — this is the single
 * checkpoint, so "respect reduced motion" is enforced structurally rather
 * than remembered per-component.
 *
 * Uses useSyncExternalStore (not effect + setState) since this is exactly
 * the case it exists for: subscribing to external browser state safely
 * across server/client render.
 */
export function useReducedMotion() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
