# 4.3 — Prompt Engineering Fundamentals

> **Big Picture:** Prompt engineering is the art and science of **writing instructions** that make LLMs produce the output you actually want. You control model behavior through **clear instructions**, **few-shot examples**, **chain-of-thought reasoning**, and **output formatting** — no fine-tuning, no retraining, just better prompts.

---

## Overview

| Sub-topic | What You'll Learn |
|-----------|-------------------|
| [4.3.a](./4.3.a-Writing-Clear-Instructions.md) | How to write **clear, specific instructions** — persona assignment, step-by-step format, Do vs Don't phrasing, output specification, and before/after examples of bad-to-good prompts |
| [4.3.b](./4.3.b-Few-Shot-Examples.md) | What **few-shot learning** is, how examples force pattern learning, designing effective examples, formatting conventions, and when few-shot beats detailed instructions |
| [4.3.c](./4.3.c-Chain-of-Thought.md) | What **chain-of-thought (CoT)** prompting is, when it helps (math, logic, multi-step), when it hurts, visible vs hidden reasoning, and cost implications in production |
| [4.3.d](./4.3.d-Output-Formatting-Instructions.md) | Why **predictable output format** matters for downstream code, specifying JSON/Markdown/tables, delimiters, the "Respond ONLY with..." pattern, and preventing common formatting failures |

### Extra practice & revision

| File | Purpose |
|------|---------|
| [4.3-Exercise-Questions](./4.3-Exercise-Questions.md) | 50+ practice questions + hands-on experiments across 4.3.a-d |
| [4.3-Interview-Questions](./4.3-Interview-Questions.md) | Model answers for common interview prompts (Beginner / Intermediate / Advanced) |
| [4.3-Quick-Revision](./4.3-Quick-Revision.md) | Compact cheat sheet (print-friendly) |

Each extra file begins with **How to use this material (instructions)** — follow that workflow first.

---

## Why Prompt Engineering Matters

```
┌─────────────────────────────────────────────────────────────────────┐
│            WHAT HAPPENS WHEN YOU CHANGE THE PROMPT                   │
│                                                                     │
│  SAME model, SAME temperature, SAME parameters                     │
│                                                                     │
│  Vague prompt:                                                      │
│    "Tell me about dogs"                                             │
│    → 500-word essay about dog breeds, history, care...              │
│       (not what you wanted)                                         │
│                                                                     │
│  Clear prompt:                                                      │
│    "List the 5 best dog breeds for apartments.                      │
│     For each, give: breed name, size, energy level (1-5),           │
│     and one sentence explaining why. Format as a table."            │
│    → Exactly the structured output you needed                       │
│                                                                     │
│  KEY INSIGHT: The model is the same. The prompt is the variable.    │
│  Better prompts = better outputs. No model change required.         │
└─────────────────────────────────────────────────────────────────────┘
```

---

## The Four Pillars of Prompt Engineering

```
┌─────────────────────────────────────────────────────────────┐
│                   PROMPT ENGINEERING STACK                    │
│                                                             │
│   4.3.a  Clear Instructions     ← What to do               │
│   4.3.b  Few-Shot Examples      ← How to do it (by example)│
│   4.3.c  Chain-of-Thought       ← How to reason through it │
│   4.3.d  Output Formatting      ← What shape the answer is │
│                                                             │
│   Each technique can be used alone or combined.             │
│   The best prompts often combine all four.                  │
└─────────────────────────────────────────────────────────────┘
```

---

## One-line Cheat Sheet

> **Prompt Engineering = Tell the model WHAT to do (instructions) + SHOW it HOW (examples) + ASK it to THINK (CoT) + DEFINE the SHAPE of the answer (format)**

---

## Prerequisites

- [4.1 — How LLMs Actually Work](../4.1-How-LLMs-Actually-Work/README.md) — Understand tokens, context windows, temperature, and hallucination before learning how to write better prompts
- [4.2 — Calling LLM APIs Properly](../4.2-Calling-LLM-APIs-Properly/README.md) — Know how to make API calls so you can test the prompts you build in this section
- Basic understanding of **JavaScript** (Episode 1)

---

*Start with → [4.3.a — Writing Clear Instructions](./4.3.a-Writing-Clear-Instructions.md)*
