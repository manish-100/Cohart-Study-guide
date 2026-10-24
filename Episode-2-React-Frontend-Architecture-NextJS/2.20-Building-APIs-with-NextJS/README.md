# 2.20 — Building APIs with Next.js

> **Big Picture:** Route Handlers turn folders under `app/` into real HTTP endpoints. You implement verbs as named exports, use the Web `Request`/`Response` APIs, talk to your database through a service layer, and return **consistent JSON** with the right **status codes** — the same discipline as Express, but file-routed and colocated with your app.

---

## Overview

| Sub-topic | What You'll Learn |
| --------- | ----------------- |
| [2.20.a — Route Handlers & File Conventions](./2.20.a-Route-Handlers-and-File-Conventions.md) | `route.ts`, URL ↔ file mapping, dynamic routes, Pages Router `pages/api` vs App Router |
| [2.20.b — HTTP Methods (GET → DELETE)](./2.20.b-HTTP-Methods-GET-through-DELETE.md) | Named exports per verb, `Request` body parsing, query params, status semantics |
| [2.20.c — Connecting APIs to Databases](./2.20.c-Connecting-APIs-to-Databases.md) | Service layer, env secrets, pooling, Edge vs Node runtime, brief ORM patterns |
| [2.20.d — Response Shape & Error Handling](./2.20.d-Response-Shape-and-Error-Handling.md) | Envelopes, problem+json-style errors, validation → 400, safe 500s, logging |

### Extra practice & revision

| File | Purpose |
| ---- | ------- |
| [2.20-Exercise-Questions.md](./2.20-Exercise-Questions.md) | Hands-on API design drills |
| [2.20-Interview-Questions.md](./2.20-Interview-Questions.md) | Model answers from junior to senior depth |
| [2.20-Quick-Revision.md](./2.20-Quick-Revision.md) | One-page recap before interviews |

## One-Line Cheat Sheet

```
App Router API = route.ts exporting GET/POST/... → one file per route segment; Request in, Response/NextResponse out; same HTTP rules as any backend.
```

## Prerequisites

- HTTP basics: methods, status codes, headers, JSON
- [2.19 — Rendering Strategies in Next.js](../2.19-Rendering-Strategies-in-NextJS/README.md) (what runs on server vs edge, caching mindset)
- Async JavaScript and `fetch` from the browser

**Next in the curriculum:** [2.21 — Working with Server Actions](../2.21-Working-with-Server-Actions/README.md) for same-app mutations without hand-written JSON endpoints.

---

*Start with → [2.20.a — Route Handlers & File Conventions](./2.20.a-Route-Handlers-and-File-Conventions.md)*
