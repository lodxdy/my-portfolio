"use client";

import { createContext, useContext, useState, useCallback, useMemo } from "react";

type CursorState = {
  label: string | null;
  setLabel: (label: string | null) => void;
};

const CursorContext = createContext<CursorState | null>(null);

export function CursorProvider({ children }: { children: React.ReactNode }) {
  const [label, setLabelState] = useState<string | null>(null);
  const setLabel = useCallback((l: string | null) => setLabelState(l), []);
  const value = useMemo(() => ({ label, setLabel }), [label, setLabel]);

  return <CursorContext.Provider value={value}>{children}</CursorContext.Provider>;
}

/** Attach to any hoverable element: onMouseEnter={() => setLabel("View")} onMouseLeave={() => setLabel(null)} */
export function useCursor() {
  const ctx = useContext(CursorContext);
  if (!ctx) throw new Error("useCursor must be used within CursorProvider");
  return ctx;
}
