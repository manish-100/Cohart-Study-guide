# 4.13 — Building a RAG Pipeline

> **Big Picture:** Retrieval-Augmented Generation (RAG) combines a **retrieval system** (vector database) with a **generative model** (LLM) to produce answers **grounded in real documents** rather than the model's training data alone. The result: structured answers like `{ answer, confidence, sources }` with **source attribution**, **reduced hallucination**, and **up-to-date information** — without fine-tuning.

---

## Overview

| Sub-topic | What You'll Learn |
|-----------|-------------------|
| [4.13.a](./4.13.a-RAG-Workflow.md) | The **4-step RAG pipeline** — user query, retrieval from vector DB, context injection, structured generation. Why RAG beats fine-tuning. Architecture diagram |
| [4.13.b](./4.13.b-Retrieval-Strategies.md) | **Embedding queries**, vector similarity search, top-k retrieval, **cross-encoder re-ranking**, hybrid search (vector + BM25), handling edge cases |
| [4.13.c](./4.13.c-Prompt-Construction-for-RAG.md) | Injecting retrieved context into prompts, **system message structure**, "answer ONLY from context" instructions, chunk ordering, source attribution, preventing training-data leakage |
| [4.13.d](./4.13.d-Building-Document-QA-System.md) | **End-to-end Document QA system** — ingestion pipeline, query pipeline, structured JSON output with Zod validation, error handling, testing |

### Extra practice & revision

| File | Purpose |
|------|---------|
| [4.13-Exercise-Questions](./4.13-Exercise-Questions.md) | 40+ practice questions + hands-on tasks across 4.13.a-d |
| [4.13-Interview-Questions](./4.13-Interview-Questions.md) | Model answers for common interview prompts (Beginner / Intermediate / Advanced) |
| [4.13-Quick-Revision](./4.13-Quick-Revision.md) | Compact cheat sheet (print-friendly) |

Each extra file begins with **How to use this material (instructions)** — follow that workflow first.

---

## The RAG Workflow

```
┌──────────────────────────────────────────────────────────────────────────────┐
│                    RAG PIPELINE — END TO END                                  │
│                                                                              │
│  ┌─────────────────────────────────────────────────────────────────────────┐  │
│  │  INGESTION (offline, runs once or on schedule)                         │  │
│  │                                                                        │  │
│  │  Documents ──► Chunk ──► Embed ──► Store in Vector DB                  │  │
│  │  (PDF, MD,     (split    (OpenAI     (Pinecone,                        │  │
│  │   HTML...)      into      embeddings) Chroma,                          │  │
│  │                 passages)              pgvector...)                     │  │
│  └─────────────────────────────────────────────────────────────────────────┘  │
│                                                                              │
│  ┌─────────────────────────────────────────────────────────────────────────┐  │
│  │  QUERY (runtime, per user request)                                     │  │
│  │                                                                        │  │
│  │  Step 1            Step 2              Step 3              Step 4      │  │
│  │  ┌──────────┐      ┌──────────────┐    ┌──────────────┐   ┌─────────┐ │  │
│  │  │  User     │ ──►  │  Retrieve     │──► │  Build Prompt │──►│ LLM     │ │  │
│  │  │  Query    │      │  top-k chunks │    │  with context │   │ Generate│ │  │
│  │  │  "What is │      │  from vector  │    │  + instruction│   │ answer  │ │  │
│  │  │   ...?"   │      │  DB           │    │               │   │         │ │  │
│  │  └──────────┘      └──────────────┘    └──────────────┘   └────┬────┘ │  │
│  │                                                                 │      │  │
│  │                                                                 ▼      │  │
│  │                                                          ┌───────────┐ │  │
│  │                                                          │ Structured│ │  │
│  │                                                          │ Output    │ │  │
│  │                                                          │ {answer,  │ │  │
│  │                                                          │ confidence│ │  │
│  │                                                          │ sources[]}│ │  │
│  │                                                          └───────────┘ │  │
│  └─────────────────────────────────────────────────────────────────────────┘  │
│                                                                              │
│  KEY INSIGHT: The LLM answers from RETRIEVED documents, not from memory.     │
│  This means answers are grounded, attributable, and up-to-date.              │
└──────────────────────────────────────────────────────────────────────────────┘
```

---

## Structured Output Example

Every query to the Document QA system returns validated JSON:

```json
{
  "answer": "The refund policy allows returns within 30 days of purchase with a valid receipt. Digital products are non-refundable after download.",
  "confidence": 0.92,
  "sources": [
    { "document": "refund-policy.md", "chunk": 3, "relevance": 0.95 },
    { "document": "terms-of-service.md", "chunk": 7, "relevance": 0.87 }
  ]
}
```

This structure gives your application **the answer**, a **confidence score** to decide whether to show it or escalate to a human, and **source attribution** so users can verify the information.

---

## One-line Cheat Sheet

> **RAG = Embed query -> Retrieve relevant chunks from vector DB -> Inject into prompt as context -> Generate grounded, structured answer with sources**

---

## Prerequisites

- Completion of [4.11 — Understanding Embeddings](../4.11-Understanding-Embeddings/README.md) (how text becomes vectors, similarity search concepts)
- Completion of [4.12 — Integrating Vector Databases](../4.12-Integrating-Vector-Databases/README.md) (storing and querying embeddings, vector DB operations)
- Working knowledge of **Zod schema validation** ([4.6](../4.6-Schema-Validation-with-Zod/README.md))
- Familiarity with **LLM API calls** ([4.2](../4.2-Calling-LLM-APIs-Properly/README.md)) and **structured output** ([4.4](../4.4-Structured-Output-in-AI-Systems/README.md))
- Node.js installed (v18+)

---

*Start with -> [4.13.a — RAG Workflow](./4.13.a-RAG-Workflow.md)*
