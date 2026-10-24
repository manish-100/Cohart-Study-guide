"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { supabase } from "@/lib/supabase";
import type { Note, Highlight } from "@/lib/supabase";
import Whiteboard from "./Whiteboard";
import { useAuth } from "./AuthProvider";

type Tab = "notes" | "highlights" | "whiteboard";

const HIGHLIGHT_BG_STYLES: Record<string, string> = {
  yellow: "#fef08a",
  green: "#bbf7d0",
  blue: "#bfdbfe",
  pink: "#fbcfe8",
};

export default function StudyPanel({ pageSlug }: { pageSlug: string }) {
  const { isAuthenticated, requireAuth } = useAuth();
  const [activeTab, setActiveTab] = useState<Tab>("notes");
  const [notes, setNotes] = useState<Note[]>([]);
  const [highlights, setHighlights] = useState<Highlight[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [draft, setDraft] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editText, setEditText] = useState("");
  const [saving, setSaving] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  function showToast(message: string, type: "success" | "error") {
    setToast({ message, type });
    setTimeout(() => setToast(null), 2500);
  }

  const loadNotes = useCallback(async () => {
    if (!supabase) return;
    const { data } = await supabase
      .from("notes")
      .select("*")
      .eq("page_slug", pageSlug)
      .order("created_at", { ascending: false });
    if (data) setNotes(data);
  }, [pageSlug]);

  const loadHighlights = useCallback(async () => {
    if (!supabase) return;
    const { data } = await supabase
      .from("highlights")
      .select("*")
      .eq("page_slug", pageSlug)
      .order("created_at", { ascending: false });
    if (data) setHighlights(data);
  }, [pageSlug]);

  useEffect(() => {
    loadNotes();
    loadHighlights();
  }, [loadNotes, loadHighlights]);

  useEffect(() => {
    if (isOpen && activeTab === "highlights") loadHighlights();
  }, [isOpen, activeTab, loadHighlights]);

  async function addNote() {
    if (!draft.trim() || !supabase) return;
    setSaving(true);
    const { data, error } = await supabase
      .from("notes")
      .insert({ page_slug: pageSlug, content: draft.trim() })
      .select()
      .single();
    setSaving(false);
    if (error) { showToast("Failed to save note", "error"); return; }
    if (data) {
      setNotes((prev) => [data, ...prev]);
      setDraft("");
      showToast("Note saved", "success");
    }
  }

  async function updateNote(id: string) {
    if (!editText.trim() || !supabase) return;
    setSaving(true);
    const { data, error } = await supabase
      .from("notes")
      .update({ content: editText.trim(), updated_at: new Date().toISOString() })
      .eq("id", id)
      .select()
      .single();
    setSaving(false);
    if (error) { showToast("Failed to update note", "error"); return; }
    if (data) {
      setNotes((prev) => prev.map((n) => (n.id === id ? data : n)));
      setEditingId(null);
      setEditText("");
      showToast("Note updated", "success");
    }
  }

  async function deleteNote(id: string) {
    if (!supabase) return;
    const { error } = await supabase.from("notes").delete().eq("id", id);
    if (error) { showToast("Failed to delete", "error"); return; }
    setNotes((prev) => prev.filter((n) => n.id !== id));
  }

  async function deleteHighlight(id: string) {
    if (!supabase) return;
    const { error } = await supabase.from("highlights").delete().eq("id", id);
    if (error) { showToast("Failed to delete", "error"); return; }
    setHighlights((prev) => prev.filter((h) => h.id !== id));
    showToast("Highlight removed", "success");
  }

  function handleKeyDown(e: React.KeyboardEvent, action: () => void) {
    if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) { e.preventDefault(); action(); }
    if (e.key === "Escape" && editingId) { setEditingId(null); setEditText(""); }
  }

  function formatDate(dateStr: string) {
    const d = new Date(dateStr);
    return d.toLocaleDateString("en-US", { month: "short", day: "numeric" }) +
      ", " + d.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" });
  }

  function scrollToHighlight(id: string) {
    const mark = document.querySelector(`mark[data-highlight-id="${id}"]`);
    if (!mark) return;
    const scrollContainer = mark.closest("main");
    if (scrollContainer) {
      const markRect = mark.getBoundingClientRect();
      const containerRect = scrollContainer.getBoundingClientRect();
      const offset = markRect.top - containerRect.top + scrollContainer.scrollTop - containerRect.height / 2;
      scrollContainer.scrollTo({ top: offset, behavior: "smooth" });
    } else {
      mark.scrollIntoView({ behavior: "smooth", block: "center" });
    }
    mark.classList.add("flash-highlight");
    setTimeout(() => mark.classList.remove("flash-highlight"), 1500);
  }

  const notConnected = !supabase;
  const totalCount = notes.length + highlights.length;

  const tabs: { id: Tab; label: string; count?: number }[] = [
    { id: "notes", label: "Notes", count: notes.length },
    { id: "highlights", label: "Highlights", count: highlights.length },
    { id: "whiteboard", label: "Whiteboard" },
  ];

  return (
    <>
      <button
        onClick={() => {
          if (isOpen) { setIsOpen(false); return; }
          requireAuth(() => setIsOpen(true));
        }}
        className={`fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-all hover:scale-105 ${
          isOpen ? "bg-gray-700 hover:bg-gray-800" : "bg-blue-600 hover:bg-blue-700"
        } text-white`}
        title="Study Tools"
      >
        {isOpen ? (
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
          </svg>
        )}
        {!isOpen && totalCount > 0 && (
          <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-orange-500 text-[10px] font-bold text-white">
            {totalCount}
          </span>
        )}
      </button>

      {toast && (
        <div className={`fixed bottom-24 right-6 z-50 rounded-lg px-4 py-2 text-sm font-medium shadow-lg ${
          toast.type === "success" ? "bg-green-600 text-white" : "bg-red-600 text-white"
        }`}>
          {toast.message}
        </div>
      )}

      {isOpen && (
        <div className={`fixed bottom-24 right-6 z-40 flex flex-col rounded-2xl border border-gray-200 bg-white shadow-2xl h-[70vh] ${
          activeTab === "whiteboard" ? "w-[560px]" : "w-96"
        }`}>
          <div className="flex border-b border-gray-100">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 px-3 py-3 text-xs font-semibold transition-colors ${
                  activeTab === tab.id
                    ? "border-b-2 border-blue-600 text-blue-700"
                    : "text-gray-400 hover:text-gray-600"
                }`}
              >
                {tab.label}
                {tab.count !== undefined && tab.count > 0 && (
                  <span className="ml-1.5 rounded-full bg-gray-100 px-1.5 py-0.5 text-[10px] font-bold text-gray-500">
                    {tab.count}
                  </span>
                )}
              </button>
            ))}
          </div>

          {notConnected ? (
            <div className="px-5 py-8 text-center">
              <p className="text-sm text-gray-500">
                Set Supabase env vars in <code className="rounded bg-gray-100 px-1.5 py-0.5 text-xs">.env.local</code> to enable study tools.
              </p>
            </div>
          ) : (
            <>
              {activeTab === "notes" && (
                <div className="flex flex-1 flex-col overflow-hidden">
                  <div className="border-b border-gray-100 p-4">
                    <textarea
                      ref={textareaRef}
                      value={draft}
                      onChange={(e) => setDraft(e.target.value)}
                      onKeyDown={(e) => handleKeyDown(e, addNote)}
                      placeholder="Write a note... (Cmd+Enter to save)"
                      className="w-full resize-none rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:ring-1 focus:ring-blue-100 focus:outline-none"
                      rows={3}
                    />
                    <button
                      onClick={addNote}
                      disabled={!draft.trim() || saving}
                      className="mt-2 w-full rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 disabled:opacity-40"
                    >
                      {saving ? "Saving..." : "Save Note"}
                    </button>
                  </div>

                  <div className="flex-1 overflow-y-auto">
                    {notes.length === 0 ? (
                      <div className="px-5 py-10 text-center">
                        <p className="text-sm text-gray-400">No notes yet.</p>
                        <p className="mt-1 text-xs text-gray-300">Start writing above.</p>
                      </div>
                    ) : (
                      notes.map((note) => (
                        <div key={note.id} className="group border-b border-gray-50 px-5 py-3 last:border-0 hover:bg-gray-50/50">
                          {editingId === note.id ? (
                            <div>
                              <textarea
                                value={editText}
                                onChange={(e) => setEditText(e.target.value)}
                                onKeyDown={(e) => handleKeyDown(e, () => updateNote(note.id))}
                                className="w-full resize-none rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-700 focus:border-blue-400 focus:outline-none"
                                rows={3}
                                autoFocus
                              />
                              <div className="mt-2 flex gap-2">
                                <button onClick={() => updateNote(note.id)} disabled={saving} className="rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-blue-700 disabled:opacity-40">
                                  {saving ? "..." : "Save"}
                                </button>
                                <button onClick={() => { setEditingId(null); setEditText(""); }} className="rounded-lg bg-gray-100 px-3 py-1.5 text-xs text-gray-600 hover:bg-gray-200">
                                  Cancel
                                </button>
                              </div>
                            </div>
                          ) : (
                            <div>
                              <p className="whitespace-pre-wrap text-sm leading-relaxed text-gray-700">{note.content}</p>
                              <div className="mt-1.5 flex items-center gap-3">
                                <span className="text-[10px] text-gray-300">{formatDate(note.created_at)}</span>
                                <div className="ml-auto flex gap-2 opacity-0 transition-opacity group-hover:opacity-100">
                                  <button onClick={() => { setEditingId(note.id); setEditText(note.content); }} className="text-xs text-blue-600 hover:text-blue-700">Edit</button>
                                  <button onClick={() => deleteNote(note.id)} className="text-xs text-red-500 hover:text-red-600">Delete</button>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      ))
                    )}
                  </div>
                </div>
              )}

              {activeTab === "highlights" && (
                <div className="flex-1 overflow-y-auto">
                  {highlights.length === 0 ? (
                    <div className="px-5 py-10 text-center">
                      <p className="text-sm text-gray-400">No highlights yet.</p>
                      <p className="mt-1 text-xs text-gray-300">Select text in the content and pick a color to highlight.</p>
                    </div>
                  ) : (
                    highlights.map((hl) => (
                      <div
                        key={hl.id}
                        onClick={() => scrollToHighlight(hl.id)}
                        className="group flex cursor-pointer items-start gap-3 border-b border-gray-50 px-5 py-3 last:border-0 hover:bg-gray-50 transition-colors"
                      >
                        <span
                          className="mt-0.5 h-4 w-4 shrink-0 rounded"
                          style={{ backgroundColor: HIGHLIGHT_BG_STYLES[hl.color] ?? "#fef08a" }}
                        />
                        <div className="flex-1 min-w-0">
                          <p
                            className="text-sm leading-relaxed text-gray-800 line-clamp-3 rounded px-1 -mx-1"
                            style={{ backgroundColor: HIGHLIGHT_BG_STYLES[hl.color] ?? "#fef08a" }}
                          >
                            {hl.text}
                          </p>
                          <span className="mt-1 block text-[10px] text-gray-300">{formatDate(hl.created_at)}</span>
                        </div>
                        <button
                          onClick={() => deleteHighlight(hl.id)}
                          className="shrink-0 mt-1 opacity-0 transition-opacity group-hover:opacity-100 text-gray-300 hover:text-red-500"
                          title="Remove highlight"
                        >
                          <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                    ))
                  )}
                </div>
              )}

              {activeTab === "whiteboard" && (
                <div className="flex-1 overflow-hidden">
                  <Whiteboard pageSlug={pageSlug} />
                </div>
              )}
            </>
          )}
        </div>
      )}
    </>
  );
}
