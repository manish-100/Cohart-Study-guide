"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { supabase } from "@/lib/supabase";
import type { Highlight } from "@/lib/supabase";
import { useAuth } from "./AuthProvider";

const COLORS: Highlight["color"][] = ["yellow", "green", "blue", "pink"];

const COLOR_HEX: Record<string, string> = {
  yellow: "#fef08a",
  green: "#bbf7d0",
  blue: "#bfdbfe",
  pink: "#fbcfe8",
};

function createMark(hlId: string, bgColor: string, text: string, onRemove: (id: string) => void): HTMLElement {
  const mark = document.createElement("mark");
  mark.setAttribute("data-highlight-id", hlId);
  mark.setAttribute("data-highlight", "true");
  mark.style.backgroundColor = bgColor;
  mark.style.borderRadius = "2px";
  mark.style.padding = "1px 0";
  mark.style.cursor = "pointer";
  mark.title = "Click to remove";
  mark.textContent = text;
  mark.addEventListener("click", (e) => {
    e.stopPropagation();
    onRemove(hlId);
  });
  return mark;
}

function findAndWrapText(container: HTMLElement, searchText: string, hlId: string, bgColor: string, onRemove: (id: string) => void): boolean {
  const fullText = container.textContent ?? "";
  const searchIdx = fullText.indexOf(searchText);
  if (searchIdx === -1) return false;

  const walker = document.createTreeWalker(container, NodeFilter.SHOW_TEXT);
  let charCount = 0;
  const targetStart = searchIdx;
  const targetEnd = searchIdx + searchText.length;

  const entries: { node: Text; nodeStart: number; sliceStart: number; sliceEnd: number }[] = [];

  while (walker.nextNode()) {
    const node = walker.currentNode as Text;
    const nodeLen = node.textContent?.length ?? 0;
    const nodeEnd = charCount + nodeLen;

    if (nodeEnd > targetStart && charCount < targetEnd) {
      const sliceStart = Math.max(0, targetStart - charCount);
      const sliceEnd = Math.min(nodeLen, targetEnd - charCount);
      entries.push({ node, nodeStart: charCount, sliceStart, sliceEnd });
    }

    charCount += nodeLen;
    if (charCount >= targetEnd) break;
  }

  for (let i = entries.length - 1; i >= 0; i--) {
    const { node, sliceStart, sliceEnd } = entries[i];
    const parent = node.parentNode;
    if (!parent || parent.nodeName === "MARK" || parent.nodeName === "CODE" || parent.nodeName === "PRE") continue;

    const before = node.textContent?.slice(0, sliceStart) ?? "";
    const matched = node.textContent?.slice(sliceStart, sliceEnd) ?? "";
    const after = node.textContent?.slice(sliceEnd) ?? "";

    if (!matched) continue;

    const mark = createMark(hlId, bgColor, matched, onRemove);
    const fragment = document.createDocumentFragment();
    if (before) fragment.appendChild(document.createTextNode(before));
    fragment.appendChild(mark);
    if (after) fragment.appendChild(document.createTextNode(after));
    parent.replaceChild(fragment, node);
  }

  return entries.length > 0;
}

export default function HighlightableContent({
  pageSlug,
  children,
}: {
  pageSlug: string;
  children: React.ReactNode;
}) {
  const { requireAuth } = useAuth();
  const [highlights, setHighlights] = useState<Highlight[]>([]);
  const [popover, setPopover] = useState<{ x: number; y: number; text: string } | null>(null);
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null);
  const [domReady, setDomReady] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const appliedRef = useRef(false);

  function showToast(message: string, type: "success" | "error") {
    setToast({ message, type });
    setTimeout(() => setToast(null), 2000);
  }

  const removeHighlight = useCallback(async (id: string) => {
    if (!supabase) return;
    const { error } = await supabase.from("highlights").delete().eq("id", id);
    if (error) return;
    setHighlights((prev) => prev.filter((h) => h.id !== id));
    showToast("Highlight removed", "success");
  }, []);

  const loadHighlights = useCallback(async () => {
    if (!supabase) return;
    const { data } = await supabase
      .from("highlights")
      .select("*")
      .eq("page_slug", pageSlug)
      .order("created_at", { ascending: true });
    if (data) setHighlights(data);
  }, [pageSlug]);

  useEffect(() => { loadHighlights(); }, [loadHighlights]);

  useEffect(() => {
    if (!containerRef.current) return;
    const check = () => containerRef.current?.querySelector(".prose-custom") != null;
    if (check()) { setDomReady(true); return; }
    const observer = new MutationObserver(() => {
      if (check()) { setDomReady(true); observer.disconnect(); }
    });
    observer.observe(containerRef.current, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!domReady || highlights.length === 0 || !containerRef.current) return;
    appliedRef.current = false;
    const timer = setTimeout(() => {
      if (appliedRef.current) return;
      appliedRef.current = true;
      applyAllHighlights();
    }, 200);
    return () => clearTimeout(timer);
  }, [highlights, domReady]);

  function clearMarks() {
    if (!containerRef.current) return;
    containerRef.current.querySelectorAll("mark[data-highlight-id]").forEach((mark) => {
      const parent = mark.parentNode;
      if (!parent) return;
      while (mark.firstChild) parent.insertBefore(mark.firstChild, mark);
      parent.removeChild(mark);
    });
    containerRef.current.normalize();
  }

  function applyAllHighlights() {
    if (!containerRef.current) return;
    clearMarks();
    for (const hl of highlights) {
      const bgColor = COLOR_HEX[hl.color] ?? COLOR_HEX.yellow;
      findAndWrapText(containerRef.current, hl.text, hl.id, bgColor, removeHighlight);
    }
  }

  function handleMouseUp() {
    const selection = window.getSelection();
    if (!selection || selection.isCollapsed || !containerRef.current || !supabase) {
      setPopover(null);
      return;
    }
    const range = selection.getRangeAt(0);
    if (!containerRef.current.contains(range.commonAncestorContainer)) {
      setPopover(null);
      return;
    }
    const text = selection.toString().trim();
    if (text.length < 2) { setPopover(null); return; }

    requireAuth(() => {
      const rect = range.getBoundingClientRect();
      const containerRect = containerRef.current!.getBoundingClientRect();
      setPopover({
        x: rect.left - containerRect.left + rect.width / 2,
        y: rect.top - containerRect.top - 10,
        text,
      });
    });
  }

  async function saveHighlight(color: Highlight["color"]) {
    if (!popover || !supabase) return;

    const { data, error } = await supabase
      .from("highlights")
      .insert({
        page_slug: pageSlug,
        text: popover.text,
        color,
        start_offset: 0,
        end_offset: 0,
        context_before: popover.text.substring(0, 30),
        context_after: popover.text.substring(Math.max(0, popover.text.length - 30)),
      })
      .select()
      .single();

    if (error) {
      showToast("Failed to save", "error");
    } else if (data) {
      setHighlights((prev) => [...prev, data]);
      showToast("Highlighted!", "success");
    }

    window.getSelection()?.removeAllRanges();
    setPopover(null);
  }

  return (
    <div ref={containerRef} className="relative" onMouseUp={handleMouseUp}>
      {children}

      {popover && (
        <div
          className="absolute z-50 flex items-center gap-1.5 rounded-xl border border-gray-200 bg-white px-3 py-2 shadow-xl"
          style={{
            left: Math.max(60, Math.min(popover.x, (containerRef.current?.clientWidth ?? 400) - 60)),
            top: popover.y,
            transform: "translate(-50%, -100%)",
          }}
        >
          <span className="mr-1 text-[11px] font-medium text-gray-400">Highlight:</span>
          {COLORS.map((c) => (
            <button
              key={c}
              onClick={() => saveHighlight(c)}
              className="h-7 w-7 rounded-full border border-gray-300 transition-transform hover:scale-125 active:scale-95"
              style={{ backgroundColor: COLOR_HEX[c] }}
              title={c}
            />
          ))}
        </div>
      )}

      {toast && (
        <div className={`fixed top-6 right-6 z-50 rounded-lg px-4 py-2 text-sm font-medium shadow-lg ${
          toast.type === "success" ? "bg-green-600 text-white" : "bg-red-600 text-white"
        }`}>
          {toast.message}
        </div>
      )}
    </div>
  );
}
