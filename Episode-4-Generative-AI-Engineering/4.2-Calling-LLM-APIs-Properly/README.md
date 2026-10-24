# 4.2 — Calling LLM APIs Properly

> **Big Picture:** Every AI feature starts with an **API call** — understanding **message roles** (system, user, assistant), **token budgeting** (prompt size vs response size), **cost awareness** (pricing per token), and **rate limit handling** (429 errors, backoff, retries) is the foundation of building reliable, cost-effective AI applications.

---

## Overview

| Sub-topic | What You'll Learn |
|-----------|-------------------|
| [4.2.a](./4.2.a-Message-Roles.md) | The **system**, **user**, and **assistant** roles — what each does, how they shape model behavior, and best practices for multi-turn conversations |
| [4.2.b](./4.2.b-Token-Budgeting.md) | Planning prompt size vs response size, **max_tokens**, overflow prevention, and dynamic budget allocation |
| [4.2.c](./4.2.c-Cost-Awareness.md) | Pricing models (per-token, input vs output), calculating costs, why bad prompts waste money, and optimization strategies |
| [4.2.d](./4.2.d-Rate-Limits-and-Retries.md) | Handling **429** errors, exponential backoff, retry strategies, concurrency limits, and production-grade error handling |

### Extra practice & revision

| File | Purpose |
|------|---------|
| [4.2-Exercise-Questions](./4.2-Exercise-Questions.md) | 40+ practice questions + calculation drills across 4.2.a-d |
| [4.2-Interview-Questions](./4.2-Interview-Questions.md) | Model answers for API design, cost optimization, and reliability questions |
| [4.2-Quick-Revision](./4.2-Quick-Revision.md) | Compact cheat sheet (print-friendly) |

Each extra file begins with **How to use this material (instructions)** — follow that workflow first.

---

## One-line Cheat Sheet

```
messages = [{role: "system"}, {role: "user"}, {role: "assistant"}]
max_tokens controls OUTPUT length  |  context window = input + output
Cost = (input_tokens × input_price) + (output_tokens × output_price)
429 → exponential backoff  |  Always set timeout + retry + fallback
```

---

## Prerequisites

- [4.1 — How LLMs Actually Work](../4.1-How-LLMs-Actually-Work/README.md) — tokens, context windows, temperature
- Familiarity with **REST APIs** and **async JavaScript** (Episode 3)

---

*Start with → [4.2.a — Message Roles](./4.2.a-Message-Roles.md)*
