# 4.16 — Agent Design Patterns

> **Big Picture:** Once you understand what AI agents are ([4.15](../4.15-Understanding-AI-Agents/README.md)), the next step is learning **how to compose them**. Agent design patterns are battle-tested architectures for dividing complex AI work across multiple specialized agents — a **Planner** that breaks problems into steps and an **Executor** that carries them out, a **Researcher** that gathers information and a **Writer** that synthesizes it, a **Critic** that evaluates output and a **Refiner** that improves it, and a **Router** that dispatches user requests to the right specialist. These patterns are the building blocks of every serious multi-agent system.

---

## Overview

| Sub-topic | What You'll Learn |
|-----------|-------------------|
| [4.16.a](./4.16.a-Planner-Executor.md) | The **Planner-Executor** pattern — decomposing complex tasks into plans, executing each step, re-planning on failure, and implementing a full data analysis pipeline agent |
| [4.16.b](./4.16.b-Researcher-Writer.md) | The **Researcher-Writer** pattern — gathering information via search, RAG, and APIs, then synthesizing it into polished output. Report generation, content creation, summarization |
| [4.16.c](./4.16.c-Critic-Refiner.md) | The **Critic-Refiner** loop — generating initial output, evaluating quality, iteratively improving until a quality threshold or max iterations, self-reflection, code review and writing improvement |
| [4.16.d](./4.16.d-Router-Agents.md) | The **Router** pattern — one agent classifies intent and dispatches to specialized handlers, fallback routing, architecture diagrams, comparison with function calling ([4.7](../4.7-Function-Calling-Tool-Calling/README.md)) |

### Extra practice & revision

| File | Purpose |
|------|---------|
| [4.16-Exercise-Questions](./4.16-Exercise-Questions.md) | 40+ practice questions + hands-on tasks across 4.16.a-d |
| [4.16-Interview-Questions](./4.16-Interview-Questions.md) | Model answers for common interview prompts (Beginner / Intermediate / Advanced) |
| [4.16-Quick-Revision](./4.16-Quick-Revision.md) | Compact cheat sheet (print-friendly) |

Each extra file begins with **How to use this material (instructions)** — follow that workflow first.

---

## Why Agent Design Patterns Matter

```
┌──────────────────────────────────────────────────────────────────────────────┐
│                  AGENT DESIGN PATTERNS — THE BIG FOUR                        │
│                                                                              │
│  ┌─────────────────────────────────────────────────────────────────────────┐  │
│  │  PLANNER-EXECUTOR                                                      │  │
│  │                                                                        │  │
│  │  User Task ──► Planner Agent ──► Step-by-step Plan ──► Executor Agent  │  │
│  │                (breaks down)     [1. Fetch data     ]   (runs each     │  │
│  │                                  [2. Clean data     ]    step)         │  │
│  │                                  [3. Analyze trends ]                  │  │
│  │                                  [4. Generate report]                  │  │
│  │                                                                        │  │
│  │  Best for: Complex multi-step tasks, data pipelines, code generation   │  │
│  └─────────────────────────────────────────────────────────────────────────┘  │
│                                                                              │
│  ┌─────────────────────────────────────────────────────────────────────────┐  │
│  │  RESEARCHER-WRITER                                                     │  │
│  │                                                                        │  │
│  │  User Query ──► Researcher Agent ──► Raw Facts ──► Writer Agent        │  │
│  │                 (search, RAG,        [fact1,         (synthesize into  │  │
│  │                  API calls)           fact2, ...]     polished output) │  │
│  │                                                                        │  │
│  │  Best for: Report generation, content creation, summarization          │  │
│  └─────────────────────────────────────────────────────────────────────────┘  │
│                                                                              │
│  ┌─────────────────────────────────────────────────────────────────────────┐  │
│  │  CRITIC-REFINER                                                        │  │
│  │                                                                        │  │
│  │  Generator ──► Draft ──► Critic Agent ──► Feedback ──► Refiner Agent   │  │
│  │                          (find issues)                 (improve)       │  │
│  │                               ▲                            │           │  │
│  │                               └────────── loop ────────────┘           │  │
│  │                                                                        │  │
│  │  Best for: Code review, writing quality, data validation               │  │
│  └─────────────────────────────────────────────────────────────────────────┘  │
│                                                                              │
│  ┌─────────────────────────────────────────────────────────────────────────┐  │
│  │  ROUTER                                                                │  │
│  │                                                                        │  │
│  │  User Message ──► Router Agent ──┬──► Code Agent                       │  │
│  │                   (classify       ├──► Search Agent                     │  │
│  │                    intent)        ├──► Math Agent                       │  │
│  │                                   └──► Fallback Agent                   │  │
│  │                                                                        │  │
│  │  Best for: Multi-capability systems, chatbots, API gateways            │  │
│  └─────────────────────────────────────────────────────────────────────────┘  │
│                                                                              │
│  KEY INSIGHT: These patterns are composable. A Router can dispatch to a      │
│  Planner-Executor, which uses a Researcher-Writer, whose output goes         │
│  through a Critic-Refiner loop. Real systems layer these patterns.           │
└──────────────────────────────────────────────────────────────────────────────┘
```

---

## One-line Cheat Sheet

> **Agent Design Patterns = Planner-Executor (decompose + execute), Researcher-Writer (gather + synthesize), Critic-Refiner (generate + iterate), Router (classify + dispatch) — composable building blocks for multi-agent systems**

---

## Prerequisites

- Completion of [4.15 — Understanding AI Agents](../4.15-Understanding-AI-Agents/README.md) (what agents are, tool use, the agent loop)
- Working knowledge of **function/tool calling** ([4.7](../4.7-Function-Calling-Tool-Calling/README.md))
- Familiarity with **LLM API calls** ([4.2](../4.2-Calling-LLM-APIs-Properly/README.md)) and **structured output** ([4.4](../4.4-Structured-Output-in-AI-Systems/README.md))
- Node.js installed (v18+)

---

*Start with -> [4.16.a — Planner-Executor](./4.16.a-Planner-Executor.md)*
