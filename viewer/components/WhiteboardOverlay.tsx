"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { supabase } from "@/lib/supabase";
import type { Point, WhiteboardElement, ShapeTool } from "@/lib/supabase";

const COLORS = ["#1d1d1f", "#2563eb", "#dc2626", "#16a34a", "#9333ea", "#ea580c"];
const WIDTHS = [2, 4, 8];

const TOOLS: { id: ShapeTool; icon: string }[] = [
  { id: "pen", icon: "pen" },
  { id: "highlighter", icon: "highlighter" },
  { id: "line", icon: "line" },
  { id: "arrow", icon: "arrow" },
  { id: "rect", icon: "rect" },
  { id: "circle", icon: "circle" },
  { id: "eraser", icon: "eraser" },
  { id: "text", icon: "text" },
];

function ToolIcon({ type }: { type: string }) {
  const s = "w-5 h-5";
  switch (type) {
    case "pen":
      return (
        <svg className={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 3a2.85 2.85 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
          <path d="m15 5 4 4" />
        </svg>
      );
    case "highlighter":
      return (
        <svg className={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="m9 11-6 6v3h9l3-3" />
          <path d="m22 12-4.6 4.6a2 2 0 0 1-2.8 0l-5.2-5.2a2 2 0 0 1 0-2.8L14 4" />
        </svg>
      );
    case "line":
      return (
        <svg className={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
          <line x1="5" y1="19" x2="19" y2="5" />
        </svg>
      );
    case "arrow":
      return (
        <svg className={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <line x1="5" y1="19" x2="19" y2="5" />
          <polyline points="10 5 19 5 19 14" />
        </svg>
      );
    case "rect":
      return (
        <svg className={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" />
        </svg>
      );
    case "circle":
      return (
        <svg className={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <circle cx="12" cy="12" r="9" />
        </svg>
      );
    case "eraser":
      return (
        <svg className={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21" />
          <path d="M22 21H7" />
          <path d="m5 11 9 9" />
        </svg>
      );
    case "text":
      return (
        <svg className={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="4 7 4 4 20 4 20 7" />
          <line x1="9" y1="20" x2="15" y2="20" />
          <line x1="12" y1="4" x2="12" y2="20" />
        </svg>
      );
    default:
      return null;
  }
}

interface WhiteboardOverlayProps {
  pageSlug: string;
  onClose: () => void;
}

export default function WhiteboardOverlay({ pageSlug, onClose }: WhiteboardOverlayProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [elements, setElements] = useState<WhiteboardElement[]>([]);
  const [currentEl, setCurrentEl] = useState<WhiteboardElement | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [color, setColor] = useState("#1d1d1f");
  const [width, setWidth] = useState(2);
  const [tool, setTool] = useState<ShapeTool>("pen");
  const [dirty, setDirty] = useState(false);
  const [saving, setSaving] = useState(false);
  const [savedToast, setSavedToast] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [toolbarVisible, setToolbarVisible] = useState(false);
  const [toolbarHidden, setToolbarHidden] = useState(false);
  const [textInput, setTextInput] = useState<{ x: number; y: number; value: string } | null>(null);
  const [undoStack, setUndoStack] = useState<WhiteboardElement[][]>([]);
  const [showGrid, setShowGrid] = useState(false);
  const [opacity, setOpacity] = useState(1);
  const [dashed, setDashed] = useState(false);
  const startPointRef = useRef<Point | null>(null);
  const textInputRef = useRef<HTMLInputElement>(null);
  // Keep a ref to always have the latest elements (avoids stale closure in save)
  const elementsRef = useRef<WhiteboardElement[]>([]);
  const currentElRef = useRef<WhiteboardElement | null>(null);
  const autoSaveTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const lastScrollY = useRef(0);
  const scrollContainerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    elementsRef.current = elements;
  }, [elements]);

  useEffect(() => {
    currentElRef.current = currentEl;
  }, [currentEl]);

  useEffect(() => {
    const timer = setTimeout(() => setToolbarVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Track scroll direction — hide toolbar on scroll down, show on scroll up
  useEffect(() => {
    const scrollEl = containerRef.current?.closest("main") ||
      containerRef.current?.closest("[class*='overflow']") ||
      document.querySelector("main");
    scrollContainerRef.current = scrollEl as HTMLElement;
    if (!scrollEl) return;

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const currentY = scrollEl.scrollTop;
        const delta = currentY - lastScrollY.current;
        if (delta > 8) {
          setToolbarHidden(true);
        } else if (delta < -8) {
          setToolbarHidden(false);
        }
        lastScrollY.current = currentY;
        ticking = false;
      });
    };

    scrollEl.addEventListener("scroll", onScroll, { passive: true });
    return () => scrollEl.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (textInput && textInputRef.current) {
      textInputRef.current.focus();
    }
  }, [textInput]);

  // Save on unmount so closing via toggle button never loses data
  useEffect(() => {
    return () => {
      if (autoSaveTimerRef.current) clearTimeout(autoSaveTimerRef.current);
      if (elementsRef.current.length > 0) {
        saveElementsToDb(elementsRef.current);
      }
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadData = useCallback(async () => {
    if (!supabase) return;
    const { data, error } = await supabase
      .from("whiteboards")
      .select("elements")
      .eq("page_slug", pageSlug)
      .maybeSingle();
    if (error) {
      console.error("Whiteboard load failed:", error);
      return;
    }
    if (data?.elements && Array.isArray(data.elements)) {
      setElements(data.elements as WhiteboardElement[]);
    }
  }, [pageSlug]);

  useEffect(() => { loadData(); }, [loadData]);

  // Core save function — always receives latest elements directly
  async function saveElementsToDb(els: WhiteboardElement[]) {
    if (!supabase) return;
    setSaving(true);
    const { error } = await supabase
      .from("whiteboards")
      .upsert(
        { page_slug: pageSlug, elements: els, updated_at: new Date().toISOString() },
        { onConflict: "page_slug" }
      );
    setSaving(false);
    if (error) {
      console.error("Whiteboard save failed:", error);
    } else {
      setDirty(false);
      setSavedToast(true);
      setTimeout(() => setSavedToast(false), 2000);
    }
  }

  // Auto-save 1.5s after the last stroke (debounced)
  function scheduleSave(els: WhiteboardElement[]) {
    if (autoSaveTimerRef.current) clearTimeout(autoSaveTimerRef.current);
    autoSaveTimerRef.current = setTimeout(() => {
      saveElementsToDb(els);
    }, 1500);
  }

  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const parent = container.parentElement;
    if (!parent) return;

    const dpr = window.devicePixelRatio || 1;
    const w = parent.scrollWidth;
    const h = Math.max(parent.scrollHeight, parent.offsetHeight);
    if (w === 0 || h === 0) return;

    canvas.style.width = `${w}px`;
    canvas.style.height = `${h}px`;
    container.style.width = `${w}px`;
    container.style.height = `${h}px`;

    const needsResize = canvas.width !== Math.round(w * dpr) || canvas.height !== Math.round(h * dpr);
    if (needsResize) {
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
    }
    renderAll();
  }, []);

  useEffect(() => {
    requestAnimationFrame(resizeCanvas);
    const delayedResize = setTimeout(resizeCanvas, 500);

    const container = containerRef.current;
    const parent = container?.parentElement;
    if (!parent) return () => clearTimeout(delayedResize);

    const ro = new ResizeObserver(() => resizeCanvas());
    ro.observe(parent);
    for (const child of Array.from(parent.children)) {
      if (child !== container) ro.observe(child);
    }

    const mo = new MutationObserver(() => requestAnimationFrame(resizeCanvas));
    mo.observe(parent, { childList: true, subtree: true });

    window.addEventListener("resize", resizeCanvas);
    return () => {
      clearTimeout(delayedResize);
      ro.disconnect();
      mo.disconnect();
      window.removeEventListener("resize", resizeCanvas);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resizeCanvas]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { renderAll(); }, [elements, currentEl, showGrid]);

  function renderAll() {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const w = canvas.width / dpr;
    const h = canvas.height / dpr;
    if (w === 0 || h === 0) return;

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, w, h);

    if (showGrid) {
      ctx.fillStyle = "rgba(0,0,0,0.06)";
      const step = 24;
      for (let x = step; x < w; x += step) {
        for (let y = step; y < h; y += step) {
          ctx.beginPath();
          ctx.arc(x, y, 0.6, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    }

    for (const el of elementsRef.current) drawElement(ctx, el);
    if (currentElRef.current) drawElement(ctx, currentElRef.current);
  }

  function drawElement(ctx: CanvasRenderingContext2D, el: WhiteboardElement) {
    ctx.save();
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    if (el.opacity !== undefined && el.opacity < 1) {
      ctx.globalAlpha = el.opacity;
    }
    if (el.dashed) {
      ctx.setLineDash([el.width * 3, el.width * 2]);
    }

    if (el.type === "eraser") {
      ctx.globalCompositeOperation = "destination-out";
      ctx.strokeStyle = el.color;
      ctx.lineWidth = el.width * 5;
    } else if (el.type === "highlighter") {
      ctx.globalAlpha = Math.min(ctx.globalAlpha, 0.35);
      ctx.strokeStyle = el.color;
      ctx.lineWidth = el.width * 6;
    } else if (el.type === "text") {
      ctx.fillStyle = el.color;
      ctx.font = `${Math.max(16, el.width * 7)}px "Urbanist", system-ui, sans-serif`;
      if (el.points.length > 0 && el.text) {
        ctx.fillText(el.text, el.points[0].x, el.points[0].y);
      }
      ctx.restore();
      return;
    } else {
      ctx.strokeStyle = el.color;
      ctx.lineWidth = el.width;
    }

    const pts = el.points;
    if (pts.length < 1) { ctx.restore(); return; }

    if (el.type === "pen" || el.type === "eraser" || el.type === "highlighter") {
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

  const isDrawingRef = useRef(false);
  const toolRef = useRef<ShapeTool>(tool);
  const colorRef = useRef(color);
  const widthRef = useRef(width);
  const opacityRef = useRef(opacity);
  const dashedRef = useRef(dashed);

  useEffect(() => { toolRef.current = tool; }, [tool]);
  useEffect(() => { colorRef.current = color; }, [color]);
  useEffect(() => { widthRef.current = width; }, [width]);
  useEffect(() => { opacityRef.current = opacity; }, [opacity]);
  useEffect(() => { dashedRef.current = dashed; }, [dashed]);

  function getPointFromNative(e: MouseEvent | Touch): Point {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();
    return { x: e.clientX - rect.left, y: e.clientY - rect.top };
  }

  function getPointFromReact(e: React.MouseEvent): Point {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();
    return { x: e.clientX - rect.left, y: e.clientY - rect.top };
  }

  // Native touch listeners — non-passive for stylus (preventDefault to draw),
  // passive/no-op for finger (allows browser scroll-through)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    function isStylusNative(e: TouchEvent): boolean {
      const touch = e.touches[0] || e.changedTouches[0];
      if (!touch) return false;
      return (touch as unknown as { touchType?: string }).touchType === "stylus";
    }

    function onTouchStart(e: TouchEvent) {
      if (!isStylusNative(e)) return;
      e.preventDefault();
      const touch = e.touches[0];
      const pt = getPointFromNative(touch);

      if (toolRef.current === "text") {
        setTextInput({ x: pt.x, y: pt.y, value: "" });
        return;
      }

      startPointRef.current = pt;
      isDrawingRef.current = true;
      setIsDrawing(true);
      const newEl: WhiteboardElement = {
        type: toolRef.current,
        points: [pt],
        color: toolRef.current === "eraser" ? "#ffffff" : colorRef.current,
        width: widthRef.current,
        opacity: opacityRef.current,
        dashed: dashedRef.current,
      };
      setCurrentEl(newEl);
    }

    function onTouchMove(e: TouchEvent) {
      if (!isDrawingRef.current) return;
      if (!isStylusNative(e)) return;
      e.preventDefault();
      const touch = e.touches[0];
      const pt = getPointFromNative(touch);
      const t = toolRef.current;
      if (t === "pen" || t === "eraser" || t === "highlighter") {
        setCurrentEl((prev) => prev ? { ...prev, points: [...prev.points, pt] } : null);
      } else {
        setCurrentEl((prev) => prev ? { ...prev, points: [prev.points[0], pt] } : null);
      }
    }

    function onTouchEnd(e: TouchEvent) {
      if (!isDrawingRef.current) return;
      isDrawingRef.current = false;
      setIsDrawing(false);
      const cur = currentElRef.current;
      if (!cur || cur.points.length < 2) {
        setCurrentEl(null);
        return;
      }
      const newElements = [...elementsRef.current, cur];
      setElements(newElements);
      setCurrentEl(null);
      setDirty(true);
      scheduleSave(newElements);
    }

    // Non-passive so stylus can preventDefault while finger touches pass through
    canvas.addEventListener("touchstart", onTouchStart, { passive: false });
    canvas.addEventListener("touchmove", onTouchMove, { passive: false });
    canvas.addEventListener("touchend", onTouchEnd, { passive: true });

    return () => {
      canvas.removeEventListener("touchstart", onTouchStart);
      canvas.removeEventListener("touchmove", onTouchMove);
      canvas.removeEventListener("touchend", onTouchEnd);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleMouseDown(e: React.MouseEvent) {
    if (toolRef.current === "text") {
      const pt = getPointFromReact(e);
      setTextInput({ x: pt.x, y: pt.y, value: "" });
      return;
    }
    e.preventDefault();
    const pt = getPointFromReact(e);
    startPointRef.current = pt;
    isDrawingRef.current = true;
    setIsDrawing(true);
    setCurrentEl({
      type: tool,
      points: [pt],
      color: tool === "eraser" ? "#ffffff" : color,
      width,
      opacity,
      dashed,
    });
  }

  function handleMouseMove(e: React.MouseEvent) {
    if (!isDrawingRef.current) return;
    e.preventDefault();
    const pt = getPointFromReact(e);
    if (tool === "pen" || tool === "eraser" || tool === "highlighter") {
      setCurrentEl((prev) => prev ? { ...prev, points: [...prev.points, pt] } : null);
    } else {
      setCurrentEl((prev) => prev ? { ...prev, points: [prev.points[0], pt] } : null);
    }
  }

  function handleMouseUp() {
    if (!isDrawingRef.current) return;
    isDrawingRef.current = false;
    setIsDrawing(false);
    const cur = currentElRef.current;
    if (!cur || cur.points.length < 2) {
      setCurrentEl(null);
      return;
    }
    const newElements = [...elementsRef.current, cur];
    setElements(newElements);
    setCurrentEl(null);
    setUndoStack([]);
    setDirty(true);
    scheduleSave(newElements);
  }

  function commitText() {
    if (!textInput || !textInput.value.trim()) {
      setTextInput(null);
      return;
    }
    const newEl: WhiteboardElement = {
      type: "text",
      points: [{ x: textInput.x, y: textInput.y }],
      color,
      width,
      text: textInput.value,
    };
    const newElements = [...elementsRef.current, newEl];
    setElements(newElements);
    setTextInput(null);
    setUndoStack([]);
    setDirty(true);
    scheduleSave(newElements);
  }

  function handleTextKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      commitText();
    } else if (e.key === "Escape") {
      setTextInput(null);
    }
  }

  async function saveToDb() {
    await saveElementsToDb(elementsRef.current);
  }

  function undo() {
    if (elementsRef.current.length === 0) return;
    const removed = elementsRef.current[elementsRef.current.length - 1];
    const newElements = elementsRef.current.slice(0, -1);
    setElements(newElements);
    setUndoStack((prev) => [...prev, [removed]]);
    setDirty(true);
    scheduleSave(newElements);
  }

  function redo() {
    if (undoStack.length === 0) return;
    const last = undoStack[undoStack.length - 1];
    setUndoStack((prev) => prev.slice(0, -1));
    const newElements = [...elementsRef.current, ...last];
    setElements(newElements);
    setDirty(true);
    scheduleSave(newElements);
  }

  function clearAll() {
    setElements([]);
    setUndoStack([]);
    setDirty(true);
    scheduleSave([]);
  }

  async function handleClose() {
    if (autoSaveTimerRef.current) clearTimeout(autoSaveTimerRef.current);
    await saveElementsToDb(elementsRef.current);
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 280);
  }

  function getCursor(): string {
    switch (tool) {
      case "eraser": return "cell";
      case "text": return "text";
      default: return "crosshair";
    }
  }

  return (
    <div
      ref={containerRef}
      className={`absolute top-0 left-0 z-[100] whiteboard-overlay ${isClosing ? "whiteboard-overlay-exit" : "whiteboard-overlay-enter"}`}
      style={{ background: "transparent", pointerEvents: "none" }}
    >
      {/* Canvas — covers the full content area */}
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0"
        style={{ cursor: getCursor(), pointerEvents: "all", touchAction: "auto" }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      />

      {/* Text input overlay — re-enable pointer events for typing */}
      {textInput && (
        <input
          ref={textInputRef}
          type="text"
          value={textInput.value}
          onChange={(e) => setTextInput({ ...textInput, value: e.target.value })}
          onKeyDown={handleTextKeyDown}
          onBlur={commitText}
          className="absolute z-[210] border-none outline-none bg-transparent"
          style={{
            left: textInput.x,
            top: textInput.y - 12,
            fontSize: `${Math.max(16, width * 7)}px`,
            color,
            fontFamily: '"Urbanist", system-ui, sans-serif',
            minWidth: "100px",
            caretColor: color,
            pointerEvents: "all",
          }}
        />
      )}

      {/* Floating Toolbar — fixed to viewport, hides on scroll down, shows on scroll up */}
      <div
        className={`fixed top-5 left-1/2 -translate-x-1/2 z-[200] flex items-center gap-1 px-3 py-2 rounded-2xl shadow-2xl border border-white/60 transition-all duration-300 ${
          toolbarVisible && !toolbarHidden ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
        style={{
          pointerEvents: toolbarVisible && !toolbarHidden ? "all" : "none",
          background: "rgba(255, 255, 255, 0.92)",
          backdropFilter: "blur(20px) saturate(180%)",
          WebkitBackdropFilter: "blur(20px) saturate(180%)",
        }}
      >
        {/* Tool buttons */}
        {TOOLS.map((t) => (
          <button
            key={t.id}
            onClick={() => setTool(t.id)}
            title={t.id.charAt(0).toUpperCase() + t.id.slice(1)}
            className={`relative flex items-center justify-center w-9 h-9 rounded-xl transition-all duration-200 ${
              tool === t.id
                ? "bg-blue-100 text-blue-600 shadow-sm"
                : "text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            }`}
          >
            <ToolIcon type={t.icon} />
          </button>
        ))}

        {/* Separator */}
        <div className="w-px h-7 bg-gray-200/80 mx-1" />

        {/* Colors */}
        {COLORS.map((c) => (
          <button
            key={c}
            onClick={() => { setColor(c); if (tool === "eraser") setTool("pen"); }}
            className={`w-5 h-5 rounded-full transition-all duration-200 ${
              color === c && tool !== "eraser"
                ? "ring-2 ring-blue-400 ring-offset-2 scale-110"
                : "hover:scale-110"
            }`}
            style={{ backgroundColor: c }}
          />
        ))}

        {/* Separator */}
        <div className="w-px h-7 bg-gray-200/80 mx-1" />

        {/* Widths */}
        {WIDTHS.map((w) => (
          <button
            key={w}
            onClick={() => setWidth(w)}
            className={`flex items-center justify-center w-7 h-7 rounded-lg transition-all duration-200 ${
              width === w ? "bg-gray-200" : "hover:bg-gray-100"
            }`}
          >
            <div className="rounded-full bg-gray-700" style={{ width: w + 2, height: w + 2 }} />
          </button>
        ))}

        {/* Separator */}
        <div className="w-px h-7 bg-gray-200/80 mx-1" />

        {/* Opacity slider */}
        <div className="flex items-center gap-1 px-1" title={`Opacity: ${Math.round(opacity * 100)}%`}>
          <svg className="w-3.5 h-3.5 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" strokeDasharray="3 3" />
          </svg>
          <input
            type="range"
            min="0.1"
            max="1"
            step="0.1"
            value={opacity}
            onChange={(e) => setOpacity(parseFloat(e.target.value))}
            className="w-14 h-1 accent-blue-500 cursor-pointer"
          />
        </div>

        {/* Dashed toggle */}
        <button
          onClick={() => setDashed((d) => !d)}
          title={dashed ? "Solid stroke" : "Dashed stroke"}
          className={`flex items-center justify-center w-9 h-9 rounded-xl transition-all duration-200 ${
            dashed ? "bg-blue-100 text-blue-600" : "text-gray-500 hover:bg-gray-100"
          }`}
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 3">
            <line x1="4" y1="12" x2="20" y2="12" />
          </svg>
        </button>

        {/* Grid toggle */}
        <button
          onClick={() => setShowGrid((g) => !g)}
          title={showGrid ? "Hide grid" : "Show grid"}
          className={`flex items-center justify-center w-9 h-9 rounded-xl transition-all duration-200 ${
            showGrid ? "bg-blue-100 text-blue-600" : "text-gray-500 hover:bg-gray-100"
          }`}
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            <line x1="3" y1="3" x2="3" y2="21" />
            <line x1="9" y1="3" x2="9" y2="21" />
            <line x1="15" y1="3" x2="15" y2="21" />
            <line x1="21" y1="3" x2="21" y2="21" />
            <line x1="3" y1="3" x2="21" y2="3" />
            <line x1="3" y1="9" x2="21" y2="9" />
            <line x1="3" y1="15" x2="21" y2="15" />
            <line x1="3" y1="21" x2="21" y2="21" />
          </svg>
        </button>

        {/* Separator */}
        <div className="w-px h-7 bg-gray-200/80 mx-1" />

        {/* Undo */}
        <button
          onClick={undo}
          title="Undo"
          className="flex items-center justify-center w-9 h-9 rounded-xl text-gray-500 hover:bg-gray-100 hover:text-gray-700 transition-all duration-200"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 7v6h6" />
            <path d="M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13" />
          </svg>
        </button>

        {/* Redo */}
        <button
          onClick={redo}
          title="Redo"
          className={`flex items-center justify-center w-9 h-9 rounded-xl transition-all duration-200 ${
            undoStack.length > 0
              ? "text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              : "text-gray-300"
          }`}
          disabled={undoStack.length === 0}
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 7v6h-6" />
            <path d="M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3L21 13" />
          </svg>
        </button>

        {/* Clear */}
        <button
          onClick={clearAll}
          title="Clear All"
          className="flex items-center justify-center w-9 h-9 rounded-xl text-gray-500 hover:bg-red-50 hover:text-red-500 transition-all duration-200"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 6h18" />
            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
          </svg>
        </button>

        {/* Save */}
        <button
          onClick={saveToDb}
          disabled={saving || !dirty}
          title="Save"
          className={`flex items-center justify-center w-9 h-9 rounded-xl transition-all duration-200 ${
            dirty
              ? "text-blue-600 hover:bg-blue-50"
              : "text-gray-300"
          }`}
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
            <polyline points="17 21 17 13 7 13 7 21" />
            <polyline points="7 3 7 8 15 8" />
          </svg>
        </button>
      </div>

      {/* Done button — fixed to viewport top-right */}
      <button
        onClick={handleClose}
        className={`fixed top-5 right-5 z-[200] px-4 py-2 rounded-full text-sm font-semibold text-blue-600 transition-all duration-300 ${
          toolbarVisible && !toolbarHidden ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
        style={{
          background: "rgba(255, 255, 255, 0.92)",
          backdropFilter: "blur(20px) saturate(180%)",
          WebkitBackdropFilter: "blur(20px) saturate(180%)",
          boxShadow: "0 4px 24px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.04)",
          pointerEvents: toolbarVisible && !toolbarHidden ? "all" : "none",
        }}
      >
        Done
      </button>

      {/* Status indicator — fixed to viewport bottom */}
      {(saving || savedToast) && (
        <div
          className={`fixed bottom-5 left-1/2 -translate-x-1/2 z-[200] px-4 py-2 rounded-full text-xs font-semibold shadow-lg backdrop-blur-xl transition-all duration-300 ${
            savedToast && !saving
              ? "bg-green-600 text-white"
              : "bg-white/90 text-gray-500"
          }`}
          style={{ pointerEvents: "none" }}
        >
          {saving ? "Saving…" : "Saved ✓"}
        </div>
      )}
    </div>
  );
}
