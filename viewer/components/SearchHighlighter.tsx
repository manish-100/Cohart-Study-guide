"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function SearchHighlighter() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q")?.trim().toLowerCase();

  useEffect(() => {
    if (!query || query.length < 2) return;

    const timer = setTimeout(() => {
      const container = document.querySelector(".prose-custom");
      if (!container) return;

      const marks = document.querySelectorAll("mark[data-search-highlight]");
      marks.forEach((m) => {
        const parent = m.parentNode;
        if (!parent) return;
        while (m.firstChild) parent.insertBefore(m.firstChild, m);
        parent.removeChild(m);
      });
      container.normalize();

      const walker = document.createTreeWalker(container, NodeFilter.SHOW_TEXT);
      const matches: { node: Text; start: number }[] = [];

      while (walker.nextNode()) {
        const textNode = walker.currentNode as Text;
        const text = textNode.textContent?.toLowerCase() ?? "";
        let pos = 0;
        while (pos < text.length) {
          const idx = text.indexOf(query, pos);
          if (idx === -1) break;
          matches.push({ node: textNode, start: idx });
          pos = idx + query.length;
        }
      }

      if (matches.length === 0) return;

      let firstMark: HTMLElement | null = null;

      for (let i = matches.length - 1; i >= 0; i--) {
        const { node, start } = matches[i];
        if (!node.parentNode || node.parentNode.nodeName === "MARK" || node.parentNode.nodeName === "CODE" || node.parentNode.nodeName === "PRE") continue;

        const end = start + query.length;
        const before = node.textContent?.slice(0, start) ?? "";
        const matched = node.textContent?.slice(start, end) ?? "";
        const after = node.textContent?.slice(end) ?? "";

        const mark = document.createElement("mark");
        mark.setAttribute("data-search-highlight", "true");
        mark.style.backgroundColor = "#fde047";
        mark.style.borderRadius = "3px";
        mark.style.padding = "2px 1px";
        mark.style.boxShadow = "0 0 0 2px rgba(253,224,71,0.4)";
        mark.textContent = matched;

        const fragment = document.createDocumentFragment();
        if (before) fragment.appendChild(document.createTextNode(before));
        fragment.appendChild(mark);
        if (after) fragment.appendChild(document.createTextNode(after));

        node.parentNode.replaceChild(fragment, node);
        if (i === 0) firstMark = mark;
      }

      if (firstMark) {
        const scrollContainer = firstMark.closest("main");
        if (scrollContainer) {
          const markRect = firstMark.getBoundingClientRect();
          const containerRect = scrollContainer.getBoundingClientRect();
          const offset = markRect.top - containerRect.top + scrollContainer.scrollTop - containerRect.height / 3;
          scrollContainer.scrollTo({ top: offset, behavior: "smooth" });
        }

        firstMark.style.outline = "3px solid #f59e0b";
        firstMark.style.outlineOffset = "2px";
        setTimeout(() => {
          if (firstMark) {
            firstMark.style.outline = "";
            firstMark.style.outlineOffset = "";
          }
        }, 2500);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [query]);

  return null;
}
