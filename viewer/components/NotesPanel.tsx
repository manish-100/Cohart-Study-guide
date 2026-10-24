"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { supabase } from "@/lib/supabase";
import type { Note } from "@/lib/supabase";

export default function NotesPanel({ pageSlug }: { pageSlug: string }) {
  const [notes, setNotes] = useState<Note[]>([]);
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
    const { data, error } = await supabase
      .from("notes")
      .select("*")
      .eq("page_slug", pageSlug)
      .order("created_at", { ascending: false });
    if (error) {
      showToast("Failed to load notes", "error");
      return;
    }
    if (data) setNotes(data);
  }, [pageSlug]);

  useEffect(() => {
    loadNotes();
  }, [loadNotes]);

  async function addNote() {
    if (!draft.trim() || !supabase) return;
    setSaving(true);
    const { data, error } = await supabase
      .from("notes")
      .insert({ page_slug: pageSlug, content: draft.trim() })
      .select()
      .single();
    setSaving(false);

    if (error) {
      showToast("Failed to save note", "error");
      return;
    }
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

    if (error) {
      showToast("Failed to update note", "error");
      return;
    }
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
    if (error) {
      showToast("Failed to delete note", "error");
      return;
    }
    setNotes((prev) => prev.filter((n) => n.id !== id));
    showToast("Note deleted", "success");
  }

  function startEdit(note: Note) {
    setEditingId(note.id);
    setEditText(note.content);
  }

  function handleKeyDown(e: React.KeyboardEvent, action: () => void) {
    if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) {
      e.preventDefault();
      action();
    }
    if (e.key === "Escape") {
      if (editingId) {
        setEditingId(null);
        setEditText("");
      }
    }
  }

  function formatDate(dateStr: string) {
    const d = new Date(dateStr);
    return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }) +
      " at " +
      d.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" });
  }

  const notConnected = !supabase;

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-all hover:scale-105 ${
          isOpen ? "bg-gray-700 hover:bg-gray-800" : "bg-blue-600 hover:bg-blue-700"
        } text-white`}
        title="Notes & Highlights"
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
        {!isOpen && notes.length > 0 && (
          <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-orange-500 text-[10px] font-bold text-white">
            {notes.length}
          </span>
        )}
      </button>

      {toast && (
        <div
          className={`fixed bottom-24 right-6 z-50 rounded-lg px-4 py-2 text-sm font-medium shadow-lg transition-all ${
            toast.type === "success" ? "bg-green-600 text-white" : "bg-red-600 text-white"
          }`}
        >
          {toast.message}
        </div>
      )}

      {isOpen && (
        <div className="fixed bottom-24 right-6 z-40 flex w-96 max-h-[70vh] flex-col rounded-2xl border border-gray-200 bg-white shadow-2xl">
          <div className="flex items-center justify-between border-b border-gray-100 px-5 py-4">
            <div>
              <h3 className="text-base font-bold text-gray-900">Notes</h3>
              <p className="text-[11px] text-gray-400">{notes.length} note{notes.length !== 1 ? "s" : ""} on this page</p>
            </div>
            {notConnected && (
              <span className="rounded-full bg-amber-100 px-2.5 py-0.5 text-[10px] font-semibold text-amber-700">
                No DB connected
              </span>
            )}
          </div>

          {notConnected ? (
            <div className="px-5 py-8 text-center">
              <p className="text-sm text-gray-500">
                Set <code className="rounded bg-gray-100 px-1.5 py-0.5 text-xs text-red-600">NEXT_PUBLIC_SUPABASE_URL</code> and <code className="rounded bg-gray-100 px-1.5 py-0.5 text-xs text-red-600">NEXT_PUBLIC_SUPABASE_ANON_KEY</code> in your <code className="rounded bg-gray-100 px-1.5 py-0.5 text-xs">.env.local</code> to enable notes and highlights.
              </p>
            </div>
          ) : (
            <>
              <div className="border-b border-gray-100 p-4">
                <textarea
                  ref={textareaRef}
                  value={draft}
                  onChange={(e) => setDraft(e.target.value)}
                  onKeyDown={(e) => handleKeyDown(e, addNote)}
                  placeholder="Write a note... (Cmd+Enter to save)"
                  className="w-full resize-none rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:ring-1 focus:ring-blue-100 focus:outline-none transition-all"
                  rows={4}
                />
                <button
                  onClick={addNote}
                  disabled={!draft.trim() || saving}
                  className="mt-3 w-full rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-700 disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  {saving ? "Saving..." : "Save Note"}
                </button>
              </div>

              <div className="flex-1 overflow-y-auto">
                {notes.length === 0 ? (
                  <div className="px-5 py-10 text-center">
                    <svg className="mx-auto mb-3 h-10 w-10 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                    </svg>
                    <p className="text-sm text-gray-400">No notes yet.</p>
                    <p className="mt-1 text-xs text-gray-300">Start writing above to add your first note.</p>
                  </div>
                ) : (
                  notes.map((note) => (
                    <div key={note.id} className="group border-b border-gray-50 px-5 py-4 last:border-0 hover:bg-gray-50/50 transition-colors">
                      {editingId === note.id ? (
                        <div>
                          <textarea
                            value={editText}
                            onChange={(e) => setEditText(e.target.value)}
                            onKeyDown={(e) => handleKeyDown(e, () => updateNote(note.id))}
                            className="w-full resize-none rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-700 focus:border-blue-400 focus:ring-1 focus:ring-blue-100 focus:outline-none"
                            rows={4}
                            autoFocus
                          />
                          <div className="mt-2 flex gap-2">
                            <button
                              onClick={() => updateNote(note.id)}
                              disabled={saving}
                              className="rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-blue-700 disabled:opacity-40"
                            >
                              {saving ? "Saving..." : "Save"}
                            </button>
                            <button
                              onClick={() => { setEditingId(null); setEditText(""); }}
                              className="rounded-lg bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600 hover:bg-gray-200"
                            >
                              Cancel
                            </button>
                          </div>
                        </div>
                      ) : (
                        <div>
                          <p className="whitespace-pre-wrap text-sm leading-relaxed text-gray-700">{note.content}</p>
                          <div className="mt-2 flex items-center gap-3">
                            <span className="text-[11px] text-gray-300">{formatDate(note.created_at)}</span>
                            <div className="ml-auto flex gap-2 opacity-0 transition-opacity group-hover:opacity-100">
                              <button
                                onClick={() => startEdit(note)}
                                className="rounded-md px-2 py-0.5 text-xs font-medium text-blue-600 hover:bg-blue-50"
                              >
                                Edit
                              </button>
                              <button
                                onClick={() => deleteNote(note.id)}
                                className="rounded-md px-2 py-0.5 text-xs font-medium text-red-500 hover:bg-red-50"
                              >
                                Delete
                              </button>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))
                )}
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
}
