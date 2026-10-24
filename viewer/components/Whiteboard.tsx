"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { supabase } from "@/lib/supabase";
import type { Point, WhiteboardElement, ShapeTool } from "@/lib/supabase";

const COLORS = ["#000000", "#2563eb", "#dc2626", "#16a34a", "#9333ea", "#ea580c"];
const WIDTHS = [2, 4, 8];
const TOOLS: { id: ShapeTool; label: string }[] = [
  { id: "pen", label: "Pen" },
  { id: "line", label: "Line" },
  { id: "arrow", label: "Arrow" },
  { id: "rect", label: "Rect" },
  { id: "circle", label: "Circle" },
  { id: "eraser", label: "Eraser" },
];

export default function Whiteboard({ pageSlug }: { pageSlug: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [elements, setElements] = useState<WhiteboardElement[]>([]);
  const [currentEl, setCurrentEl] = useState<WhiteboardElement | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [color, setColor] = useState("#000000");
  const [width, setWidth] = useState(2);
  const [tool, setTool] = useState<ShapeTool>("pen");
  const [dirty, setDirty] = useState(false);
  const [saving, setSaving] = useState(false);
  const [toast, setToast] = useState("");
  const startPointRef = useRef<Point | null>(null);

  function showToast(msg: string) {
    setToast(msg);
    setTimeout(() => setToast(""), 2000);
  }

  const loadData = useCallback(async () => {
    if (!supabase) return;
    const { data } = await supabase
      .from("whiteboards")
      .select("elements")
      .eq("page_slug", pageSlug)
      .single();
    if (data?.elements) setElements(data.elements as WhiteboardElement[]);
  }, [pageSlug]);

  useEffect(() => { loadData(); }, [loadData]);

  useEffect(() => { renderAll(); }, [elements, currentEl]);

  function renderAll() {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const w = canvas.clientWidth;
    const h = canvas.clientHeight;
    if (canvas.width !== w * dpr || canvas.height !== h * dpr) {
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.scale(dpr, dpr);
    } else {
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    ctx.clearRect(0, 0, w, h);

    for (const el of elements) drawElement(ctx, el);
    if (currentEl) drawElement(ctx, currentEl);
  }

  function drawElement(ctx: CanvasRenderingContext2D, el: WhiteboardElement) {
    ctx.save();
    ctx.strokeStyle = el.color;
    ctx.lineWidth = el.width;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    if (el.type === "eraser") {
      ctx.globalCompositeOperation = "destination-out";
      ctx.lineWidth = el.width * 5;
    }

    const pts = el.points;
    if (pts.length < 1) { ctx.restore(); return; }

    if (el.type === "pen" || el.type === "eraser") {
      if (pts.length < 2) { ctx.restore(); return; }
      ctx.beginPath();
      ctx.moveTo(pts[0].x, pts[0].y);
      for (let i = 1; i < pts.length; i++) ctx.lineTo(pts[i].x, pts[i].y);
      ctx.stroke();
    } else if (el.type === "line") {
      if (pts.length < 2) { ctx.restore(); return; }
      ctx.beginPath();
      ctx.moveTo(pts[0].x, pts[0].y);
      ctx.lineTo(pts[1].x, pts[1].y);
      ctx.stroke();
    } else if (el.type === "arrow") {
      if (pts.length < 2) { ctx.restore(); return; }
      const [a, b] = [pts[0], pts[1]];
      ctx.beginPath();
      ctx.moveTo(a.x, a.y);
      ctx.lineTo(b.x, b.y);
      ctx.stroke();
      const angle = Math.atan2(b.y - a.y, b.x - a.x);
      const headLen = 12 + el.width * 2;
      ctx.beginPath();
      ctx.moveTo(b.x, b.y);
      ctx.lineTo(b.x - headLen * Math.cos(angle - 0.4), b.y - headLen * Math.sin(angle - 0.4));
      ctx.moveTo(b.x, b.y);
      ctx.lineTo(b.x - headLen * Math.cos(angle + 0.4), b.y - headLen * Math.sin(angle + 0.4));
      ctx.stroke();
    } else if (el.type === "rect") {
      if (pts.length < 2) { ctx.restore(); return; }
      const x = Math.min(pts[0].x, pts[1].x);
      const y = Math.min(pts[0].y, pts[1].y);
      const rw = Math.abs(pts[1].x - pts[0].x);
      const rh = Math.abs(pts[1].y - pts[0].y);
      ctx.strokeRect(x, y, rw, rh);
    } else if (el.type === "circle") {
      if (pts.length < 2) { ctx.restore(); return; }
      const cx = (pts[0].x + pts[1].x) / 2;
      const cy = (pts[0].y + pts[1].y) / 2;
      const rx = Math.abs(pts[1].x - pts[0].x) / 2;
      const ry = Math.abs(pts[1].y - pts[0].y) / 2;
      ctx.beginPath();
      ctx.ellipse(cx, cy, rx, ry, 0, 0, Math.PI * 2);
      ctx.stroke();
    }

    ctx.restore();
  }

  function getPoint(e: React.MouseEvent | React.TouchEvent): Point {
    const canvas = canvasRef.current!;
    const rect = canvas.getBoundingClientRect();
    if ("touches" in e) {
      const t = e.touches[0];
      return { x: t.clientX - rect.left, y: t.clientY - rect.top };
    }
    return { x: e.clientX - rect.left, y: e.clientY - rect.top };
  }

  function handleStart(e: React.MouseEvent | React.TouchEvent) {
    e.preventDefault();
    const pt = getPoint(e);
    startPointRef.current = pt;
    setIsDrawing(true);
    setCurrentEl({ type: tool, points: [pt], color: tool === "eraser" ? "#ffffff" : color, width });
  }

  function handleMove(e: React.MouseEvent | React.TouchEvent) {
    if (!isDrawing || !currentEl) return;
    e.preventDefault();
    const pt = getPoint(e);

    if (tool === "pen" || tool === "eraser") {
      setCurrentEl((prev) => prev ? { ...prev, points: [...prev.points, pt] } : null);
    } else {
      setCurrentEl((prev) => prev ? { ...prev, points: [prev.points[0], pt] } : null);
    }
  }

  function handleEnd() {
    if (!isDrawing || !currentEl || currentEl.points.length < 2) {
      setIsDrawing(false);
      setCurrentEl(null);
      return;
    }
    setIsDrawing(false);
    setElements((prev) => [...prev, currentEl]);
    setCurrentEl(null);
    setDirty(true);
  }

  async function saveToDb() {
    if (!supabase) return;
    setSaving(true);

    const payload = { elements: elements as unknown as Record<string, unknown>[], updated_at: new Date().toISOString() };

    const { data: existing } = await supabase
      .from("whiteboards")
      .select("id")
      .eq("page_slug", pageSlug)
      .single();

    let error;
    if (existing) {
      ({ error } = await supabase
        .from("whiteboards")
        .update(payload)
        .eq("page_slug", pageSlug));
    } else {
      ({ error } = await supabase
        .from("whiteboards")
        .insert({ page_slug: pageSlug, ...payload }));
    }

    setSaving(false);
    if (error) {
      showToast("Failed to save");
    } else {
      setDirty(false);
      showToast("Saved!");
    }
  }

  function undo() {
    setElements((prev) => {
      if (prev.length === 0) return prev;
      setDirty(true);
      return prev.slice(0, -1);
    });
  }

  async function clearAll() {
    setElements([]);
    setDirty(false);
    if (supabase) {
      await supabase.from("whiteboards").delete().eq("page_slug", pageSlug);
    }
    showToast("Board cleared");
  }

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center gap-1.5 border-b border-gray-100 px-3 py-2 flex-wrap">
        {TOOLS.map((t) => (
          <button
            key={t.id}
            onClick={() => setTool(t.id)}
            className={`rounded-md px-2 py-1 text-[11px] font-medium transition-colors ${
              tool === t.id
                ? t.id === "eraser" ? "bg-pink-100 text-pink-700" : "bg-blue-100 text-blue-700"
                : "text-gray-500 hover:bg-gray-100"
            }`}
          >
            {t.label}
          </button>
        ))}

        <div className="mx-1 h-5 w-px bg-gray-200" />

        {COLORS.map((c) => (
          <button
            key={c}
            onClick={() => { setColor(c); if (tool === "eraser") setTool("pen"); }}
            className={`h-5 w-5 rounded-full border-2 transition-transform ${
              color === c && tool !== "eraser" ? "border-blue-500 scale-110" : "border-gray-200"
            }`}
            style={{ backgroundColor: c }}
          />
        ))}

        <div className="mx-1 h-5 w-px bg-gray-200" />

        {WIDTHS.map((w) => (
          <button
            key={w}
            onClick={() => setWidth(w)}
            className={`flex h-6 w-6 items-center justify-center rounded transition-colors ${
              width === w ? "bg-blue-100" : "hover:bg-gray-100"
            }`}
          >
            <div className="rounded-full bg-gray-700" style={{ width: w + 1, height: w + 1 }} />
          </button>
        ))}

        <div className="mx-1 h-5 w-px bg-gray-200" />

        <button onClick={undo} className="rounded-md px-2 py-1 text-[11px] font-medium text-gray-500 hover:bg-gray-100">Undo</button>
        <button onClick={clearAll} className="rounded-md px-2 py-1 text-[11px] font-medium text-red-500 hover:bg-red-50">Clear</button>

        <button
          onClick={saveToDb}
          disabled={saving || !dirty}
          className={`ml-auto rounded-lg px-3 py-1 text-[11px] font-bold transition-colors ${
            dirty
              ? "bg-blue-600 text-white hover:bg-blue-700"
              : "bg-gray-100 text-gray-400"
          } disabled:opacity-50`}
        >
          {saving ? "Saving..." : dirty ? "Save" : "Saved"}
        </button>
      </div>

      {toast && (
        <div className="absolute top-14 right-4 z-10 rounded-lg bg-green-600 px-3 py-1.5 text-xs font-medium text-white shadow-lg">
          {toast}
        </div>
      )}

      <div className="flex-1 overflow-hidden bg-white relative">
        <canvas
          ref={canvasRef}
          className="h-full w-full touch-none"
          style={{ cursor: tool === "eraser" ? "cell" : "crosshair" }}
          onMouseDown={handleStart}
          onMouseMove={handleMove}
          onMouseUp={handleEnd}
          onMouseLeave={handleEnd}
          onTouchStart={handleStart}
          onTouchMove={handleMove}
          onTouchEnd={handleEnd}
        />
      </div>
    </div>
  );
}
