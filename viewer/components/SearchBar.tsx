"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";

interface SearchMatch {
  text: string;
  offset: number;
}

interface SearchResult {
  slug: string;
  title: string;
  section: string;
  matches: SearchMatch[];
}

export default function SearchBar() {
  const searchParams = useSearchParams();
  const initialQ = searchParams.get("q") ?? "";
  const [query, setQuery] = useState(initialQ);
  const [results, setResults] = useState<SearchResult[]>([]);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedIdx, setSelectedIdx] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout>>(undefined);
  const queryRef = useRef(initialQ);
  const router = useRouter();
  const pathname = usePathname();

  // Sync query state when URL search params change (e.g. after navigation)
  useEffect(() => {
    const q = searchParams.get("q") ?? "";
    setQuery(q);
    queryRef.current = q;
  }, [searchParams]);

  const search = useCallback(async (q: string) => {
    if (q.length < 2) { setResults([]); setOpen(false); return; }
    setLoading(true);
    try {
      const res = await fetch(`/api/search?q=${encodeURIComponent(q)}`);
      const data: SearchResult[] = await res.json();
      setResults(data);
      setOpen(data.length > 0);
      setSelectedIdx(-1);
    } catch { setResults([]); }
    setLoading(false);
  }, []);

  function handleChange(val: string) {
    setQuery(val);
    queryRef.current = val;
    if (timerRef.current) clearTimeout(timerRef.current);
    if (!val.trim()) {
      setResults([]);
      setOpen(false);
      // Remove ?q= from URL when search bar is cleared
      router.replace(pathname, { scroll: false });
    } else {
      timerRef.current = setTimeout(() => search(val.trim()), 250);
    }
  }

  function navigate(slug: string) {
    const q = queryRef.current.trim();
    const url = `/${slug}${q ? `?q=${encodeURIComponent(q)}` : ""}`;
    setOpen(false);
    setResults([]);
    router.push(url);
    router.refresh();
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (!open) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIdx((i) => Math.min(i + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIdx((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter" && selectedIdx >= 0) {
      e.preventDefault();
      navigate(results[selectedIdx].slug);
    } else if (e.key === "Escape") {
      setOpen(false);
    }
  }

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (inputRef.current && !inputRef.current.parentElement?.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function highlightMatch(text: string, q: string) {
    if (!q) return text;
    const idx = text.toLowerCase().indexOf(q.toLowerCase());
    if (idx === -1) return text;
    return (
      <>
        {text.slice(0, idx)}
        <span className="bg-yellow-200 font-semibold text-gray-900 rounded px-0.5">{text.slice(idx, idx + q.length)}</span>
        {text.slice(idx + q.length)}
      </>
    );
  }

  return (
    <div className="relative w-full max-w-md">
      <div className="relative">
        <svg className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => handleChange(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => results.length > 0 && setOpen(true)}
          placeholder="Search topics, keywords..."
          className="w-full rounded-xl border border-gray-200 bg-gray-50 py-2 pl-10 pr-4 text-sm text-gray-700 placeholder-gray-400 transition-colors focus:border-blue-400 focus:bg-white focus:outline-none focus:ring-1 focus:ring-blue-100"
        />
        {loading && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 animate-spin rounded-full border-2 border-gray-300 border-t-blue-500" />
        )}
      </div>

      {open && results.length > 0 && (
        <div className="absolute top-full left-0 right-0 z-50 mt-1 max-h-80 overflow-y-auto rounded-xl border border-gray-200 bg-white shadow-2xl">
          {results.map((r, i) => (
            <div
              key={`${r.slug}-${i}`}
              onMouseDown={(e) => {
                e.preventDefault();
                navigate(r.slug);
              }}
              className={`cursor-pointer w-full text-left px-4 py-3 border-b border-gray-50 last:border-0 transition-colors ${
                i === selectedIdx ? "bg-blue-50" : "hover:bg-gray-50"
              }`}
            >
              <div className="flex items-baseline gap-2">
                <span className="text-sm font-semibold text-gray-800 truncate">{r.title}</span>
                <span className="text-[10px] text-gray-400 truncate">{r.section}</span>
              </div>
              {r.matches.slice(0, 2).map((m, j) => (
                <p key={j} className="mt-1 text-xs text-gray-500 line-clamp-1">
                  {highlightMatch(m.text, query.trim())}
                </p>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
