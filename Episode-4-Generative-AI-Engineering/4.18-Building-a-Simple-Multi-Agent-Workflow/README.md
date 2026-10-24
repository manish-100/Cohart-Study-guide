# 4.18 — Building a Simple Multi-Agent Workflow

> **Big Picture:** A single AI agent can do one thing well — but **real-world tasks need multiple agents working together**. A multi-agent workflow chains specialized agents into a **pipeline**, where each agent has a single responsibility, validates its own output, and passes structured data to the next. The principle: **decompose complex AI tasks into small, testable, single-purpose agents connected by validated data contracts.**

---

## Overview

| Sub-topic | What You'll Learn |
|-----------|-------------------|
| [4.18.a](./4.18.a-Multi-Agent-Pipeline-Design.md) | What a **multi-agent pipeline** is, architecture patterns (sequential, parallel, fan-out/fan-in), designing agent responsibilities, schema contracts, and data flow between agents |
| [4.18.b](./4.18.b-Hinge-Direction-Profile-Pipeline.md) | **Hinge direction** — full working dating app pipeline: Profile Analyzer → Bio Improver → Conversation Starter Generator, with Zod validation at every step |
| [4.18.c](./4.18.c-ImageKit-Direction-SEO-Pipeline.md) | **ImageKit direction** — full working image processing pipeline: Metadata Extractor → SEO Optimizer → Tag Categorizer, with Zod validation at every step |
| [4.18.d](./4.18.d-Validation-and-Error-Handling.md) | **Validation & error handling** — validating every agent step, error propagation, retry strategies, fallback responses, logging, and testing multi-agent pipelines |

### Extra practice & revision

| File | Purpose |
|------|---------|
| [4.18-Exercise-Questions](./4.18-Exercise-Questions.md) | 40+ practice questions + hands-on tasks across 4.18.a-d |
| [4.18-Interview-Questions](./4.18-Interview-Questions.md) | Model answers for common interview prompts (Beginner / Intermediate / Advanced) |
| [4.18-Quick-Revision](./4.18-Quick-Revision.md) | Compact cheat sheet (print-friendly) |

Each extra file begins with **How to use this material (instructions)** — follow that workflow first.

---

## Why Multi-Agent Workflows Matter

```
┌───────────────────────────────────────────────────────────────────────────────┐
│            SINGLE AGENT vs MULTI-AGENT PIPELINE                               │
│                                                                               │
│  SINGLE AGENT (monolithic):                                                   │
│  ┌──────────────────────────────────────────────────────┐                     │
│  │  One giant prompt tries to do EVERYTHING:             │                     │
│  │  - Analyze input                                      │                     │
│  │  - Process data                                       │                     │
│  │  - Generate multiple outputs                          │                     │
│  │  - Format everything                                  │                     │
│  │  Result: Hallucinations, inconsistency, hard to debug │                     │
│  └──────────────────────────────────────────────────────┘                     │
│                                                                               │
│  MULTI-AGENT PIPELINE (decomposed):                                           │
│  ┌──────────┐     ┌──────────┐     ┌──────────┐     ┌──────────────┐         │
│  │  Agent 1  │ ──► │  Agent 2  │ ──► │  Agent 3  │ ──► │  Structured  │         │
│  │ Analyze   │     │ Transform │     │ Generate  │     │  Output      │         │
│  └──────────┘     └──────────┘     └──────────┘     └──────────────┘         │
│       │                │                │                                      │
│   Zod check        Zod check       Zod check                                 │
│                                                                               │
│  Result: Focused, testable, debuggable, reliable                              │
└───────────────────────────────────────────────────────────────────────────────┘
```

### Example Directions

This section covers **two full pipeline examples** so you can see multi-agent workflows applied to different domains:

```
HINGE DIRECTION (Dating App):
  User Profile → [Profile Analyzer] → [Bio Improver] → [Conversation Starter Generator] → JSON

IMAGEKIT DIRECTION (Image Processing):
  Image Metadata → [Metadata Extractor] → [SEO Optimizer] → [Tag Categorizer] → JSON
```

Both follow the same architectural principles — pick the direction closest to your interests, or study both to see how the pattern generalizes.

---

## One-line Cheat Sheet

> **Multi-agent workflow = Input → Agent 1 (analyze, validate) → Agent 2 (transform, validate) → Agent 3 (generate, validate) → Structured output**

---

## Prerequisites

- Completion of [4.15 — Understanding AI Agents](../4.15-Understanding-AI-Agents/README.md) (what an agent is, tools, reasoning loops)
- Completion of [4.16 — Agent Design Patterns](../4.16-Agent-Design-Patterns/README.md) (single-agent patterns, delegation, planning)
- Familiarity with **Zod schema validation** ([4.6](../4.6-Schema-Validation-with-Zod/README.md))
- Understanding of **structured output from LLMs** ([4.4](../4.4-Structured-Output-in-AI-Systems/README.md), [4.5](../4.5-Generating-JSON-Responses-from-LLMs/README.md))
- Node.js installed (v18+)

---

*Start with → [4.18.a — Multi-Agent Pipeline Design](./4.18.a-Multi-Agent-Pipeline-Design.md)*
