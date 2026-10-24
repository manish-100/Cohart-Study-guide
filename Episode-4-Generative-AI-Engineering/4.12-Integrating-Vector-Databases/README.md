# 4.12 — Integrating Vector Databases

> **Big Picture:** Once you've turned text into **embeddings** (4.11), you need somewhere to **store, index, and search** them at scale. Vector databases are purpose-built for this: they store high-dimensional vectors alongside metadata, let you find the **most similar** vectors in milliseconds, and support **metadata filters** so you can combine semantic search with structured constraints — the backbone of every production RAG pipeline.

---

## Overview

| Sub-topic | What You'll Learn |
|-----------|-------------------|
| [4.12.a](./4.12.a-Storing-Embeddings.md) | What **vector databases** are, why regular DBs fall short for vector search, popular options (Pinecone, Weaviate, Chroma, Qdrant, pgvector), storing embeddings with metadata, indexing strategies (HNSW, IVF), and namespaces/collections |
| [4.12.b](./4.12.b-Querying-Similar-Vectors.md) | The **query flow** (embed query, search DB, return top-k), top-k parameter, similarity thresholds, interpreting scores, combining vector search with metadata filtering, performance tuning, and pagination |
| [4.12.c](./4.12.c-Metadata-Filters.md) | What **metadata** is (tags, categories, dates, source info attached to vectors), filtering during search, combining semantic similarity with structured constraints, filter syntax across DBs, use cases, and schema design best practices |

### Extra practice & revision

| File | Purpose |
|------|---------|
| [4.12-Exercise-Questions](./4.12-Exercise-Questions.md) | 35+ practice questions + hands-on tasks across 4.12.a-c |
| [4.12-Interview-Questions](./4.12-Interview-Questions.md) | Model answers for common interview prompts (Beginner / Intermediate / Advanced) |
| [4.12-Quick-Revision](./4.12-Quick-Revision.md) | Compact cheat sheet (print-friendly) |

Each extra file begins with **How to use this material (instructions)** — follow that workflow first.

---

## Why Vector Databases Matter

```
┌───────────────────────────────────────────────────────────────────────┐
│             FROM EMBEDDINGS TO PRODUCTION SEARCH                      │
│                                                                       │
│  Your Documents                                                       │
│       │                                                               │
│       ▼                                                               │
│  ┌──────────────┐                                                     │
│  │  Embedding    │  "How do I reset my password?"                     │
│  │  Model        │  → [0.023, -0.041, 0.087, ...]  (1536 dims)      │
│  └──────┬───────┘                                                     │
│         ▼                                                             │
│  ┌──────────────┐                                                     │
│  │  Vector DB    │  Stores millions of vectors + metadata             │
│  │  (Pinecone,   │  Indexes them for fast nearest-neighbor search     │
│  │   Chroma,     │  Supports metadata filters (date, category, etc.) │
│  │   Qdrant...)  │                                                    │
│  └──────┬───────┘                                                     │
│         ▼                                                             │
│  User Query → Embed → Search Vector DB → Top-K similar docs          │
│       → Pass to LLM as context → Grounded answer                     │
│                                                                       │
│  KEY INSIGHT: Vector DBs turn "find similar meaning" into a          │
│  fast, scalable database operation — not a brute-force comparison.   │
└───────────────────────────────────────────────────────────────────────┘
```

---

## One-line Cheat Sheet

> **Vector DB = Store embeddings + metadata → Index for fast ANN search → Query with "find top-k most similar" + optional filters**

---

## Prerequisites

- Completion of **[4.11 — Understanding Embeddings](../4.11-Understanding-Embeddings/README.md)** (what embeddings are, how to generate them, similarity metrics)
- Basic understanding of **JavaScript/TypeScript** (Episode 1)
- Familiarity with **REST APIs** and **async/await** (Episode 3)
- Understanding of **LLM API calls** (4.2) and **structured output** (4.4–4.5) is helpful but not required

---

*Start with -> [4.12.a — Storing Embeddings](./4.12.a-Storing-Embeddings.md)*
