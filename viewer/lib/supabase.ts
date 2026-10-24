import { createClient, SupabaseClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
const supabaseAnonKey =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ??
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ??
  "";

export const supabase: SupabaseClient | null =
  supabaseUrl && supabaseAnonKey
    ? createClient(supabaseUrl, supabaseAnonKey)
    : null;

export interface Highlight {
  id: string;
  page_slug: string;
  text: string;
  color: "yellow" | "green" | "blue" | "pink";
  start_offset: number;
  end_offset: number;
  context_before: string;
  context_after: string;
  created_at: string;
}

export interface Note {
  id: string;
  page_slug: string;
  content: string;
  created_at: string;
  updated_at: string;
}

export interface Point {
  x: number;
  y: number;
}

export type ShapeTool = "pen" | "eraser" | "line" | "arrow" | "rect" | "circle" | "highlighter" | "text";

export interface WhiteboardElement {
  type: ShapeTool;
  points: Point[];
  color: string;
  width: number;
  text?: string;
  opacity?: number;
  dashed?: boolean;
}

export interface WhiteboardStroke {
  id?: string;
  page_slug: string;
  stroke_data: WhiteboardElement[];
  created_at?: string;
}
