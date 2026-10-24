# 4.10 — Error Handling in AI Applications

> **Big Picture:** LLM APIs are **inherently unreliable** — they return malformed JSON, truncate outputs mid-sentence, time out unpredictably, and produce different errors for the same input. Production AI systems **must** treat every API call as a potential failure, wrapping calls in robust error handling with retries, validation, logging, and graceful degradation so that a single bad response never crashes the user experience.

---

## Overview

| Sub-topic | What You'll Learn |
|-----------|-------------------|
| [4.10.a](./4.10.a-Handling-Invalid-JSON.md) | Why LLMs return **malformed JSON**, how to detect it, extract JSON from mixed text with regex, handle common failure patterns (trailing commas, single quotes, extra text), and build recovery strategies |
| [4.10.b](./4.10.b-Partial-Responses-and-Timeouts.md) | How to detect **truncated output** (`finish_reason: "length"`), handle network and API timeouts, recover from incomplete JSON, and set appropriate timeout values for different use cases |
| [4.10.c](./4.10.c-Retry-Mechanisms.md) | When to retry (transient errors, malformed output, rate limits) vs when **not** to retry (auth errors, invalid input), exponential backoff with jitter, max retry limits, retrying with modified prompts, and cost awareness |
| [4.10.d](./4.10.d-Logging-AI-Requests.md) | Why logging is **critical** for AI debugging, what to log (request, response, tokens, latency, model, temperature), structured logging, privacy considerations (PII), monitoring dashboards, and using logs to improve prompts |

### Extra practice & revision

| File | Purpose |
|------|---------|
| [4.10-Exercise-Questions](./4.10-Exercise-Questions.md) | 40+ practice questions + hands-on tasks across 4.10.a-d |
| [4.10-Interview-Questions](./4.10-Interview-Questions.md) | Model answers for common interview prompts (Beginner / Intermediate / Advanced) |
| [4.10-Quick-Revision](./4.10-Quick-Revision.md) | Compact cheat sheet (print-friendly) |

Each extra file begins with **How to use this material (instructions)** — follow that workflow first.

---

## Why Error Handling Is Non-Negotiable in AI Systems

```
Traditional API:                      LLM API:
┌──────────────────┐                  ┌──────────────────┐
│  Request          │                  │  Request          │
│      │            │                  │      │            │
│      ▼            │                  │      ▼            │
│  Response: 200 OK │                  │  Response: 200 OK │
│  { "id": 123 }   │                  │  "Sure! Here is   │
│                   │                  │   the JSON:        │
│  ✓ Always valid   │                  │   {name: 'Bob',}  │
│    JSON           │                  │   Hope that helps!"│
│  ✓ Schema is      │                  │                    │
│    guaranteed     │                  │  ✗ JSON buried in  │
│  ✓ Same input =   │                  │    text            │
│    same output    │                  │  ✗ Invalid JSON    │
│                   │                  │    (single quotes, │
│                   │                  │    trailing comma) │
│                   │                  │  ✗ Different every │
│                   │                  │    time            │
└──────────────────┘                  └──────────────────┘
```

### The five failure modes you MUST handle

| # | Failure Mode | Frequency | Example |
|---|-------------|-----------|---------|
| 1 | **Malformed JSON** | Very common | Extra text around JSON, trailing commas, single quotes |
| 2 | **Truncated output** | Common | Model hits token limit mid-JSON: `{"name": "Al` |
| 3 | **Timeout** | Common | Network drops, API overloaded, long generation |
| 4 | **Rate limit** | Common | 429 Too Many Requests |
| 5 | **Hallucinated structure** | Occasional | Returns wrong schema, extra fields, missing fields |

---

## One-line Cheat Sheet

> **Every LLM API call = try/catch + JSON validation + timeout + retry with backoff + structured logging**

---

## Prerequisites

- [4.2 — Calling LLM APIs Properly](../4.2-Calling-LLM-APIs-Properly/README.md) — You need to know how API calls work before you can handle their failures
- [4.5 — Generating JSON Responses from LLMs](../4.5-Generating-JSON-Responses-from-LLMs/README.md) — Understanding JSON output from LLMs is essential for handling malformed JSON
- [4.6 — Schema Validation with Zod](../4.6-Schema-Validation-with-Zod/README.md) — Validation is a core part of error handling; Zod is used throughout this section

---

*Start with → [4.10.a — Handling Invalid JSON](./4.10.a-Handling-Invalid-JSON.md)*
