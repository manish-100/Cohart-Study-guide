import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ?? "";

export async function GET() {
  if (!url || !key) return NextResponse.json({});

  const sb = createClient(url, key);
  const counts: Record<string, { notes: number; highlights: number; whiteboard: boolean }> = {};

  const [notesRes, hlRes, wbRes] = await Promise.all([
    sb.from("notes").select("page_slug"),
    sb.from("highlights").select("page_slug"),
    sb.from("whiteboards").select("page_slug"),
  ]);

  for (const row of notesRes.data ?? []) {
    const slug = row.page_slug;
    if (!counts[slug]) counts[slug] = { notes: 0, highlights: 0, whiteboard: false };
    counts[slug].notes++;
  }
  for (const row of hlRes.data ?? []) {
    const slug = row.page_slug;
    if (!counts[slug]) counts[slug] = { notes: 0, highlights: 0, whiteboard: false };
    counts[slug].highlights++;
  }
  for (const row of wbRes.data ?? []) {
    const slug = row.page_slug;
    if (!counts[slug]) counts[slug] = { notes: 0, highlights: 0, whiteboard: false };
    counts[slug].whiteboard = true;
  }

  return NextResponse.json(counts);
}
