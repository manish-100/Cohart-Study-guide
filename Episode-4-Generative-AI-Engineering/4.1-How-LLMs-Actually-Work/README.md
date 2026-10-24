# 4.1 — How LLMs Actually Work

> **Big Picture:** Large Language Models are **next-token prediction machines** — they turn every input into **tokens**, process them within a fixed **context window**, use **temperature** to control randomness, and generate text that sounds confident but can **hallucinate** because the model predicts statistically likely continuations, it doesn't "know" facts.

---

## Overview

| Sub-topic | What You'll Learn |
|-----------|-------------------|
| [4.1.a](./4.1.a-Tokens-and-Tokenization.md) | What **tokens** are, why everything becomes tokens, tokenizer algorithms (BPE), and how token count affects cost and context |
| [4.1.b](./4.1.b-Context-Window.md) | What the **context window** is, why prompts get cut, how to manage token budgets, and context window sizes across models |
| [4.1.c](./4.1.c-Sampling-Temperature-and-Randomness.md) | How **temperature**, **top-p**, **top-k** control output randomness, and when to use deterministic vs creative settings |
| [4.1.d](./4.1.d-Hallucination.md) | Why models **hallucinate**, the mechanics behind confident-sounding wrong answers, and strategies to reduce hallucination |
| [4.1.e](./4.1.e-Deterministic-vs-Probabilistic-Outputs.md) | The difference between **deterministic** and **probabilistic** outputs, reproducibility, seed parameters, and implications for production systems |

### Extra practice & revision

| File | Purpose |
|------|---------|
| [4.1-Exercise-Questions](./4.1-Exercise-Questions.md) | 40+ practice questions + hands-on experiments across 4.1.a-e |
| [4.1-Interview-Questions](./4.1-Interview-Questions.md) | Model answers for common interview prompts (Beginner / Intermediate / Advanced) |
| [4.1-Quick-Revision](./4.1-Quick-Revision.md) | Compact cheat sheet (print-friendly) |

Each extra file begins with **How to use this material (instructions)** — follow that workflow first.

---

## Why Understanding LLM Internals Matters

```
┌─────────────────────────────────────────────────────────────────────┐
│              WHAT HAPPENS WHEN YOU CALL AN LLM API                  │
│                                                                     │
│  Your Prompt (text)                                                 │
│       │                                                             │
│       ▼                                                             │
│  ┌──────────────┐                                                   │
│  │  Tokenizer    │  "Hello world" → [15496, 1917]                  │
│  └──────┬───────┘                                                   │
│         ▼                                                           │
│  ┌──────────────┐                                                   │
│  │  Transformer  │  Processes tokens through attention layers       │
│  │  Model        │  Predicts probability of EVERY possible          │
│  │  (billions    │  next token                                      │
│  │   of params)  │                                                  │
│  └──────┬───────┘                                                   │
│         ▼                                                           │
│  ┌──────────────┐                                                   │
│  │  Sampling     │  temperature, top-p, top-k decide WHICH          │
│  │  Strategy     │  token from the probability distribution         │
│  └──────┬───────┘                                                   │
│         ▼                                                           │
│  Selected Token → Append to sequence → Repeat until stop            │
│                                                                     │
│  KEY INSIGHT: The model doesn't "understand" or "know" anything.    │
│  It predicts statistically likely continuations of text.            │
└─────────────────────────────────────────────────────────────────────┘
```

---

## One-line Cheat Sheet

> **LLM = Tokenize input → Predict next token probabilities → Sample one → Repeat until done**

---

## Prerequisites

- Basic understanding of **JavaScript/TypeScript** (Episode 1)
- Familiarity with **REST APIs** and **HTTP** (Episode 3)
- No machine learning background required — we explain everything from scratch

---

*Start with → [4.1.a — Tokens and Tokenization](./4.1.a-Tokens-and-Tokenization.md)*
