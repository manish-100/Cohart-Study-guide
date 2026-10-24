# 4.9 — Combining Streaming with Structured Data

> **Big Picture:** Production AI systems often need **two things at once** — stream human-readable text to the UI in real time **and** return machine-readable structured JSON for downstream processing. This section teaches you patterns for combining streaming responses with structured output: when to stream text vs return JSON, the "stream then parse" approach, two-phase response patterns, and event-based architectures that serve both humans and systems from a single LLM call.

---

## Overview

| Sub-topic | What You'll Learn |
|-----------|-------------------|
| [4.9.a](./4.9.a-Streaming-Conversational-Text.md) | Streaming **conversational text** in real time, when to stream vs return structured data, UX considerations, and partial message patterns |
| [4.9.b](./4.9.b-Returning-Structured-JSON-After-Generation.md) | The **two-phase response** pattern: stream text for UX, then return structured JSON for system processing. Delimiter-based separation, dual API calls, and the "stream then parse" approach |
| [4.9.c](./4.9.c-Separating-UI-from-System-Outputs.md) | **Architecture** for dual-purpose responses: UI-facing streamed text vs system-readable structured JSON. Event-based designs, WebSocket patterns, and production-grade separation strategies |

### Extra practice & revision

| File | Purpose |
|------|---------|
| [4.9-Exercise-Questions](./4.9-Exercise-Questions.md) | 30+ practice questions + hands-on experiments across 4.9.a-c |
| [4.9-Interview-Questions](./4.9-Interview-Questions.md) | Model answers for common interview prompts (Beginner / Intermediate / Advanced) |
| [4.9-Quick-Revision](./4.9-Quick-Revision.md) | Compact cheat sheet (print-friendly) |

Each extra file begins with **How to use this material (instructions)** — follow that workflow first.

---

## Why Combining Streaming with Structured Data Matters

```
┌─────────────────────────────────────────────────────────────────────┐
│       THE DUAL-PURPOSE RESPONSE PROBLEM                             │
│                                                                     │
│  User asks: "Analyze this sales data and give recommendations"      │
│                                                                     │
│  The UI needs:                  The system needs:                    │
│  ┌────────────────────┐        ┌────────────────────────┐           │
│  │ Streamed text       │        │ Structured JSON          │        │
│  │ "Based on your      │        │ {                        │        │
│  │  data, I see three  │        │   "trend": "declining",  │        │
│  │  key trends..."     │        │   "recommendations": [   │        │
│  │ (word by word,      │        │     { "action": "...",   │        │
│  │  real-time)         │        │       "priority": 1 }    │        │
│  └────────────────────┘        │   ]                      │        │
│  WHY: Good UX, feels fast      │ }                        │        │
│                                 └────────────────────────┘          │
│                                 WHY: Database writes,               │
│                                 downstream APIs, dashboards         │
│                                                                     │
│  CHALLENGE: How do you get BOTH from one LLM interaction?           │
└─────────────────────────────────────────────────────────────────────┘
```

---

## One-line Cheat Sheet

> **Stream text to the user for UX, then extract or return structured JSON for the system — separate the human channel from the machine channel.**

---

## Prerequisites

- [4.5 — Generating JSON Responses from LLMs](../4.5-Generating-JSON-Responses-from-LLMs/README.md) — Structured output fundamentals
- [4.8 — Streaming Responses](../4.8-Streaming-Responses/README.md) — Streaming mechanics and implementation

Both prerequisites are essential: this section builds directly on streaming (4.8) and structured JSON (4.5) to combine them into production patterns.

---

*Start with -> [4.9.a — Streaming Conversational Text](./4.9.a-Streaming-Conversational-Text.md)*
