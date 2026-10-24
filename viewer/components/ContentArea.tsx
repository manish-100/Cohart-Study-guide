"use client";

import { Suspense, useState } from "react";
import MarkdownRenderer from "./MarkdownRenderer";
import HighlightableContent from "./HighlightableContent";
import StudyPanel from "./StudyPanel";
import SearchHighlighter from "./SearchHighlighter";
import WhiteboardOverlay from "./WhiteboardOverlay";

export default function ContentArea({
  content,
  pageSlug,
}: {
  content: string;
  pageSlug: string;
}) {
  const [whiteboardOpen, setWhiteboardOpen] = useState(false);

  return (
    <div className="relative">
      {/* Whiteboard toggle button — fixed so it stays visible while scrolling */}
      <button
        onClick={() => setWhiteboardOpen((v) => !v)}
        title={whiteboardOpen ? "Exit draw mode" : "Draw mode — annotate over text"}
        className={`fixed bottom-24 left-6 z-[150] flex items-center gap-2 px-4 py-2.5 rounded-full shadow-lg border font-semibold text-sm transition-all duration-200 ${
          whiteboardOpen
            ? "bg-blue-600 border-blue-500 text-white hover:bg-blue-700 shadow-blue-200"
            : "bg-white border-gray-200 text-gray-600 hover:text-gray-900 hover:shadow-xl hover:scale-105 active:scale-95"
        }`}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 3a2.85 2.85 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
          <path d="m15 5 4 4" />
        </svg>
        {whiteboardOpen ? "Exit Draw Mode" : "Draw Mode"}
      </button>

      {/* Active whiteboard — pulsing banner fixed to top of viewport */}
      {whiteboardOpen && (
        <div className="fixed top-4 left-1/2 -translate-x-1/2 z-[150] flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600 text-white text-xs font-semibold shadow-lg select-none pointer-events-none">
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
          Draw mode active — scroll anywhere and annotate
        </div>
      )}

      {/* Content wrapper — the whiteboard canvas is absolute inside here,
          covering the full scrollable height of the content */}
      <div className="relative">
        <HighlightableContent pageSlug={pageSlug}>
          <MarkdownRenderer content={content} />
        </HighlightableContent>
        <Suspense>
          <SearchHighlighter />
        </Suspense>

        {whiteboardOpen && (
          <WhiteboardOverlay pageSlug={pageSlug} onClose={() => setWhiteboardOpen(false)} />
        )}
      </div>

      <StudyPanel pageSlug={pageSlug} />
    </div>
  );
}

