"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ContentTree, Episode, Section } from "@/lib/types";
import Logo from "./Logo";

type ActivityMap = Record<
  string,
  { notes: number; highlights: number; whiteboard: boolean }
>;

function Collapsible({
  open,
  children,
}: {
  open: boolean;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number | "auto">(open ? "auto" : 0);
  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    const el = ref.current;
    if (!el) return;

    if (open) {
      const h = el.scrollHeight;
      setHeight(0);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setHeight(h));
      });
      const onEnd = () => setHeight("auto");
      el.addEventListener("transitionend", onEnd, { once: true });
      return () => el.removeEventListener("transitionend", onEnd);
    } else {
      setHeight(el.scrollHeight);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setHeight(0));
      });
    }
  }, [open]);

  return (
    <div
      ref={ref}
      className="overflow-hidden transition-[height] duration-250 ease-[cubic-bezier(0.4,0,0.2,1)]"
      style={{ height: height === "auto" ? "auto" : `${height}px` }}
    >
      {children}
    </div>
  );
}

function Badge({ count, color }: { count: number; color: string }) {
  if (count === 0) return null;
  return (
    <span
      className={`inline-flex h-[18px] min-w-[18px] items-center justify-center rounded-full px-1.5 text-[10px] font-bold leading-none text-white shadow-sm ${color}`}
    >
      {count}
    </span>
  );
}

function ActivityDots({
  slug,
  activity,
}: {
  slug: string;
  activity: ActivityMap;
}) {
  const data = activity[slug];
  if (!data) return null;
  const { notes, highlights, whiteboard } = data;
  if (!notes && !highlights && !whiteboard) return null;

  return (
    <span className="ml-auto flex shrink-0 items-center gap-1">
      <Badge count={highlights} color="bg-amber-500" />
      <Badge count={notes} color="bg-blue-500" />
      {whiteboard && (
        <span className="flex h-[18px] w-[18px] items-center justify-center rounded-full bg-emerald-500 shadow-sm">
          <svg
            className="h-2.5 w-2.5 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931z"
            />
          </svg>
        </span>
      )}
    </span>
  );
}

function Chevron({ open, className }: { open: boolean; className?: string }) {
  return (
    <svg
      className={`h-3 w-3 shrink-0 text-gray-400 transition-transform duration-200 ease-out ${open ? "rotate-90" : ""} ${className ?? ""}`}
      fill="currentColor"
      viewBox="0 0 8 8"
    >
      <path d="M2 0l4 4-4 4V0z" />
    </svg>
  );
}

function SectionGroup({
  section,
  activeSlug,
  activity,
}: {
  section: Section;
  activeSlug: string;
  activity: ActivityMap;
}) {
  const isActive = section.files.some((f) => f.slug === activeSlug);
  const [open, setOpen] = useState(isActive);

  useEffect(() => {
    if (isActive) setOpen(true);
  }, [isActive]);

  const sectionTotal = section.files.reduce((sum, f) => {
    const a = activity[f.slug];
    return sum + (a ? a.notes + a.highlights + (a.whiteboard ? 1 : 0) : 0);
  }, 0);

  return (
    <div
      className={
        section.isAdditional
          ? "mt-3 border-t border-dashed border-gray-200/80 pt-3"
          : ""
      }
    >
      <button
        onClick={() => setOpen(!open)}
        className={`group flex w-full cursor-pointer items-center gap-2.5 rounded-lg px-3 py-2 text-left text-[12.5px] font-semibold tracking-tight transition-all duration-150 ${
          section.isAdditional
            ? isActive
              ? "bg-violet-50/80 text-violet-700"
              : "text-violet-500/80 hover:bg-violet-50/50 hover:text-violet-700"
            : isActive
              ? "bg-blue-50/80 text-blue-700"
              : "text-gray-600 hover:bg-gray-100/60 hover:text-gray-900"
        }`}
      >
        <Chevron open={open} />
        <span className="flex-1 leading-snug">{section.title}</span>
        {!open && sectionTotal > 0 && (
          <span className="shrink-0 rounded-full bg-gray-100 px-1.5 py-0.5 text-[10px] font-bold tabular-nums text-gray-400">
            {sectionTotal}
          </span>
        )}
      </button>

      <Collapsible open={open}>
        <div className="ml-[18px] mt-0.5 border-l border-gray-200/70 pl-3 pb-1">
          {section.files
            .filter((f) => !f.isReadme)
            .map((file) => (
              <Link
                key={file.slug}
                href={`/${file.slug}`}
                className={`group/link relative flex items-center gap-2 rounded-md px-2.5 py-[7px] text-[12px] leading-snug transition-all duration-150 ${
                  file.slug === activeSlug
                    ? "bg-[var(--accent)]/[0.07] font-medium text-[var(--accent)] before:absolute before:-left-3 before:top-1/2 before:h-4 before:w-[2px] before:-translate-y-1/2 before:rounded-full before:bg-[var(--accent)]"
                    : file.isSpecial
                      ? "text-orange-500/80 hover:bg-orange-50/50 hover:text-orange-600"
                      : "text-gray-450 hover:bg-gray-50 hover:text-gray-700"
                }`}
              >
                <span className="flex-1 truncate">{file.title}</span>
                <ActivityDots slug={file.slug} activity={activity} />
              </Link>
            ))}
        </div>
      </Collapsible>
    </div>
  );
}

function EpisodeGroup({
  episode,
  index,
  activeSlug,
  activity,
}: {
  episode: Episode;
  index: number;
  activeSlug: string;
  activity: ActivityMap;
}) {
  const isActive =
    episode.readme?.slug === activeSlug ||
    episode.sections.some((s) => s.files.some((f) => f.slug === activeSlug));
  const [open, setOpen] = useState(isActive);

  useEffect(() => {
    if (isActive) setOpen(true);
  }, [isActive]);

  return (
    <div className="mb-1">
      <button
        onClick={() => setOpen(!open)}
        className={`group flex w-full cursor-pointer items-center gap-2.5 rounded-xl px-3 py-2.5 text-left transition-all duration-150 ${
          isActive
            ? "bg-blue-50/70 text-blue-800"
            : "text-gray-800 hover:bg-gray-100/70"
        }`}
      >
        <span
          className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-md text-[10px] font-bold tabular-nums ${
            isActive
              ? "bg-blue-600 text-white"
              : "bg-gray-200/80 text-gray-500 group-hover:bg-gray-300/70"
          }`}
        >
          {index + 1}
        </span>
        <span className="flex-1 text-[13px] font-bold leading-snug tracking-tight">
          {episode.title}
        </span>
        <Chevron
          open={open}
          className={`h-3.5 w-3.5 ${isActive ? "text-blue-400" : ""}`}
        />
      </button>

      <Collapsible open={open}>
        <div className="mt-0.5 space-y-px pl-3">
          {episode.readme && (
            <Link
              href={`/${episode.readme.slug}`}
              className={`group/link relative flex items-center gap-2 rounded-lg px-3 py-2 text-[12.5px] transition-all duration-150 ${
                activeSlug === episode.readme.slug
                  ? "bg-[var(--accent)]/[0.07] font-medium text-[var(--accent)]"
                  : "text-gray-500 hover:bg-gray-50 hover:text-gray-700"
              }`}
            >
              <svg
                className={`h-3.5 w-3.5 shrink-0 ${activeSlug === episode.readme.slug ? "text-[var(--accent)]" : "text-gray-400"}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={1.75}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 12l8.954-8.955a1.126 1.126 0 011.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
              <span className="flex-1">Overview</span>
              <ActivityDots
                slug={episode.readme.slug}
                activity={activity}
              />
            </Link>
          )}
          {episode.sections.map((section) => (
            <SectionGroup
              key={section.slug}
              section={section}
              activeSlug={activeSlug}
              activity={activity}
            />
          ))}
        </div>
      </Collapsible>
    </div>
  );
}

export default function Sidebar({
  tree,
  firstSlug,
}: {
  tree: ContentTree;
  firstSlug: string;
}) {
  const pathname = usePathname();
  const activeSlug = pathname === "/" ? firstSlug : pathname.replace(/^\//, "");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activity, setActivity] = useState<ActivityMap>({});

  useEffect(() => {
    fetch("/api/activity")
      .then((r) => r.json())
      .then((data: ActivityMap) => setActivity(data))
      .catch(() => {});
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [activeSlug]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }
  }, [mobileOpen]);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  const nav = (
    <nav className="flex flex-col px-4 pb-6 pt-5">
      <Link href="/" className="group mb-5 flex items-center gap-3 rounded-xl px-2 py-1 transition-colors hover:bg-gray-100/60">
        <Logo size={28} />
        <div>
          <h1 className="text-[15px] font-extrabold tracking-tight text-gray-900">
            Cohart Study Guide
          </h1>
          <p className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.18em] text-gray-400">
            Web Fundamentals
          </p>
        </div>
      </Link>

      <div className="mb-4 h-px bg-gradient-to-r from-gray-200 via-gray-200/60 to-transparent" />

      <div className="mb-5 flex items-center gap-3 px-2 text-[10px] font-medium text-gray-400">
        <span className="flex items-center gap-1.5">
          <span className="inline-block h-2 w-2 rounded-full bg-amber-500 shadow-[0_0_4px_rgba(245,158,11,0.4)]" />
          Highlights
        </span>
        <span className="flex items-center gap-1.5">
          <span className="inline-block h-2 w-2 rounded-full bg-blue-500 shadow-[0_0_4px_rgba(59,130,246,0.4)]" />
          Notes
        </span>
        <span className="flex items-center gap-1.5">
          <span className="inline-block h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_4px_rgba(16,185,129,0.4)]" />
          Board
        </span>
      </div>

      <div className="space-y-0.5">
        {tree.episodes.map((episode, i) => (
          <EpisodeGroup
            key={episode.slug}
            episode={episode}
            index={i}
            activeSlug={activeSlug}
            activity={activity}
          />
        ))}
      </div>
    </nav>
  );

  return (
    <>
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="fixed left-4 top-4 z-50 flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl bg-white/90 text-gray-600 shadow-lg shadow-gray-200/50 ring-1 ring-gray-200/60 backdrop-blur-sm transition-all duration-200 hover:bg-white hover:shadow-xl active:scale-95 lg:hidden"
        aria-label="Toggle navigation"
      >
        <svg
          className="h-[18px] w-[18px]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth={2}
        >
          {mobileOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {mobileOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/25 backdrop-blur-[2px] transition-opacity lg:hidden"
          onClick={closeMobile}
          aria-hidden="true"
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-40 flex w-80 flex-col overflow-y-auto border-r border-gray-200/60 bg-[var(--surface)]/95 backdrop-blur-md transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] lg:static lg:translate-x-0 ${
          mobileOpen ? "translate-x-0 shadow-2xl" : "-translate-x-full"
        }`}
      >
        {nav}
      </aside>
    </>
  );
}
