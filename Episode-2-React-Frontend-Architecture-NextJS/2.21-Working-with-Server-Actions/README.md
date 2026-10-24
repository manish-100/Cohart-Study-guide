# 2.21 — Working with Server Actions

> **Big Picture:** Server Actions let you call server-only functions directly from components and forms without hand-writing REST endpoints for every mutation. They sit alongside (not instead of) Route Handlers and external APIs — the skill is knowing which tool fits which boundary.

---

## Overview

| Sub-topic | What You'll Learn |
| --------- | ----------------- |
| [2.21.a — Server Actions vs API Routes](./2.21.a-Server-Actions-vs-API-Routes.md) | Mental model, request lifecycle, caching, clients beyond React, when to pick each |
| [2.21.b — The `use server` Directive](./2.21.b-The-Use-Server-Directive.md) | File-level vs function-level server modules, boundaries, and serialization rules |
| [2.21.c — Implementing Mutations & Forms](./2.21.c-Implementing-Mutations-and-Forms.md) | Forms, `useFormStatus`, revalidation, redirects, and composition patterns |
| [2.21.d — Security, Errors & Production Concerns](./2.21.d-Security-Errors-and-Production.md) | Authentication checks, CSRF posture, rate limits, and failure handling |

### Extra practice & revision

| File | Purpose |
| ---- | ------- |
| [2.21-Exercise-Questions.md](./2.21-Exercise-Questions.md) | Hands-on prompts to solidify patterns |
| [2.21-Interview-Questions.md](./2.21-Interview-Questions.md) | Model answers at multiple depths |
| [2.21-Quick-Revision.md](./2.21-Quick-Revision.md) | Cheat sheet for last-minute review |

## One-Line Cheat Sheet

```
Server Action = async function marked with "use server" that runs on the server and is invoked via a special POST from the Next.js runtime (often from a form or transition), without you defining a public JSON contract by hand.
```

## Prerequisites

- Comfortable with React components, `async`/`await`, and the difference between client and server code
- Next.js App Router basics: `app/` directory, Server Components vs Client Components (`'use client'`)
- Recommended before or alongside: [2.20 — Building APIs with Next.js](../2.20-Building-APIs-with-NextJS/README.md) (Route Handlers, HTTP verbs, JSON contracts)

---

*Start with → [2.21.a — Server Actions vs API Routes](./2.21.a-Server-Actions-vs-API-Routes.md)*
