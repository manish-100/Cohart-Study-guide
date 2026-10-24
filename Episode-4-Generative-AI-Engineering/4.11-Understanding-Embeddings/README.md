# 4.11 — Understanding Embeddings

> **Big Picture:** Embeddings convert text into **numerical vectors** that capture **semantic meaning** — similar concepts land close together in vector space. This is the foundation of **semantic search**, **recommendation systems**, and **RAG pipelines** — enabling your application to find information by meaning, not just keywords.

---

## Overview

| Sub-topic | What You'll Learn |
|-----------|-------------------|
| [4.11.a](./4.11.a-What-Embeddings-Represent.md) | What **embeddings** are (text to vectors), how they capture **semantic meaning**, dimensionality (1536 vs 3072), embedding models vs generation models, and creating embeddings with the OpenAI API |
| [4.11.b](./4.11.b-Similarity-Search.md) | **Cosine similarity**, Euclidean distance, dot product, how similarity search finds nearest vectors, semantic search vs keyword search, choosing metrics, and similarity thresholds |
| [4.11.c](./4.11.c-Document-Chunking-Strategies.md) | Why you **chunk** documents, chunking methods (fixed-size, sentence, paragraph, recursive, semantic), chunk size trade-offs, overlap strategies, and attaching metadata to chunks |

### Extra practice & revision

| File | Purpose |
|------|---------|
| [4.11-Exercise-Questions](./4.11-Exercise-Questions.md) | 35+ practice questions + hands-on experiments across 4.11.a-c |
| [4.11-Interview-Questions](./4.11-Interview-Questions.md) | Model answers for common interview prompts (Beginner / Intermediate / Advanced) |
| [4.11-Quick-Revision](./4.11-Quick-Revision.md) | Compact cheat sheet (print-friendly) |

Each extra file begins with **How to use this material (instructions)** — follow that workflow first.

---

## Why Understanding Embeddings Matters

```
┌──────────────────────────────────────────────────────────────────────┐
│             HOW EMBEDDINGS POWER MODERN AI APPLICATIONS              │
│                                                                      │
│  Your Text                                                           │
│       │                                                              │
│       ▼                                                              │
│  ┌──────────────────┐                                                │
│  │ Embedding Model   │  "JavaScript is great" → [0.023, -0.041, ... │
│  │ (text-embedding-  │   1536 or 3072 floating-point numbers         │
│  │  3-small/large)   │                                               │
│  └──────┬───────────┘                                                │
│         ▼                                                            │
│  ┌──────────────────┐                                                │
│  │ Vector Database   │  Store millions of vectors                    │
│  │ (Pinecone, Qdrant,│  with their original text                    │
│  │  Weaviate, etc.)  │                                               │
│  └──────┬───────────┘                                                │
│         ▼                                                            │
│  ┌──────────────────┐                                                │
│  │ Similarity Search │  "What's a good programming language?"        │
│  │ (cosine distance) │  → finds "JavaScript is great" (similar      │
│  │                    │    meaning, different words)                  │
│  └──────┬───────────┘                                                │
│         ▼                                                            │
│  Retrieved context → Injected into LLM prompt → Grounded response   │
│                                                                      │
│  KEY INSIGHT: Embeddings let you search by MEANING, not keywords.    │
│  "happy" and "joyful" are far apart in keyword space but CLOSE       │
│  in embedding space.                                                 │
└──────────────────────────────────────────────────────────────────────┘
```

---

## One-line Cheat Sheet

> **Embedding = Text → Fixed-length number array that captures meaning; similar text → similar numbers → similarity search finds related content**

---

## Prerequisites

- Understanding of **how LLMs work** — tokens, context windows, API basics ([Section 4.1](../4.1-How-LLMs-Actually-Work/README.md))
- Familiarity with **calling LLM APIs** ([Section 4.2](../4.2-Calling-LLM-APIs-Properly/README.md))
- Basic **JavaScript/TypeScript** (Episode 1)
- Basic understanding of **arrays and numbers** — no linear algebra required

---

*Start with → [4.11.a — What Embeddings Represent](./4.11.a-What-Embeddings-Represent.md)*
