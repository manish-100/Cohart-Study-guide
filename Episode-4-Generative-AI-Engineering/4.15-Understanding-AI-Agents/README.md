# 4.15 — Understanding AI Agents

> **Big Picture:** An AI agent is an LLM wrapped in a **loop** — it can **reason** about a problem, **use tools** (search, databases, APIs), **observe** the results, and **decide** what to do next, repeating until the task is complete. Agents turn a passive "question in, answer out" model into an active problem-solver, but they come with real costs: **more latency**, **more tokens**, **more complexity**, and **more ways to fail**. Understanding when to use an agent — and when *not* to — is the core skill this section teaches.

---

## Overview

| Sub-topic | What You'll Learn |
|-----------|-------------------|
| [4.15.a](./4.15.a-Agent-vs-Single-LLM-Call.md) | What an AI agent **is** vs a single LLM call, the **observe-think-act loop**, the **ReAct pattern**, and code comparing both approaches |
| [4.15.b](./4.15.b-Agent-Architecture.md) | Core agent **components** — LLM brain, tools, memory (short-term + long-term), planning — and how the **agent loop** connects them |
| [4.15.c](./4.15.c-When-to-Use-Agents.md) | When agents **shine** — multi-step tasks, tool use, research workflows, customer support — plus a **decision framework** for choosing single call vs chain vs agent |
| [4.15.d](./4.15.d-When-NOT-to-Use-Agents.md) | When agents are **overkill** — simple tasks, latency-sensitive apps, cost-sensitive apps — and why deterministic code often beats AI reasoning |
| [4.15.e](./4.15.e-Multi-Agent-Complexity.md) | What **multi-agent systems** are, why complexity grows **exponentially**, communication overhead, error propagation, and when multi-agent is justified |

### Extra practice & revision

| File | Purpose |
|------|---------|
| [4.15-Exercise-Questions](./4.15-Exercise-Questions.md) | 40+ practice questions + hands-on tasks across 4.15.a-e |
| [4.15-Interview-Questions](./4.15-Interview-Questions.md) | Model answers for common interview prompts (Beginner / Intermediate / Advanced) |
| [4.15-Quick-Revision](./4.15-Quick-Revision.md) | Compact cheat sheet (print-friendly) |

Each extra file begins with **How to use this material (instructions)** — follow that workflow first.

---

## The AI Agent Mental Model

```
┌──────────────────────────────────────────────────────────────────────────────┐
│                  SINGLE LLM CALL vs AI AGENT                                 │
│                                                                              │
│  SINGLE CALL (what you've been doing):                                       │
│                                                                              │
│    Input ──────► LLM ──────► Output                                          │
│    "Summarize    (one        "Here is the                                    │
│     this text"   pass)        summary..."                                    │
│                                                                              │
│  ──────────────────────────────────────────────────────────────────────────── │
│                                                                              │
│  AI AGENT (what this section teaches):                                       │
│                                                                              │
│    Task ──► LLM reasons ──► Calls tool ──► Observes result                   │
│              ▲                                    │                           │
│              │                                    │                           │
│              └────────── Loops until done ────────┘                           │
│                                                                              │
│    "Find the cheapest    1. Search flights API                               │
│     flight from NYC      2. Compare prices                                   │
│     to London next       3. Check hotel availability                         │
│     Tuesday and book     4. Book the best option                             │
│     a hotel nearby"      5. Confirm to user                                  │
│                                                                              │
│  KEY INSIGHT: The agent decides WHAT to do next based on what it             │
│  observed. No human pre-programs the exact sequence of steps.                │
└──────────────────────────────────────────────────────────────────────────────┘
```

---

## One-line Cheat Sheet

> **Agent = LLM + Tools + Loop. The LLM reasons about what to do, calls tools to act, observes results, and repeats until the task is done.**

---

## Prerequisites

- Completion of [4.7 — Function Calling / Tool Calling](../4.7-Function-Calling-Tool-Calling/README.md) (how LLMs invoke external functions — this is the foundation agents are built on)
- Working knowledge of **LLM API calls** ([4.2](../4.2-Calling-LLM-APIs-Properly/README.md))
- Familiarity with **prompt engineering** ([4.3](../4.3-Prompt-Engineering-Fundamentals/README.md))
- Understanding of **structured output** ([4.4](../4.4-Structured-Output-in-AI-Systems/README.md)) and **JSON generation** ([4.5](../4.5-Generating-JSON-Responses-from-LLMs/README.md))
- Node.js installed (v18+)

---

*Start with -> [4.15.a — Agent vs Single LLM Call](./4.15.a-Agent-vs-Single-LLM-Call.md)*
