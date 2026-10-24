# 6.6 — Caching in Production

> **Big Picture:** Caching is the single most impactful optimization for production systems — by storing frequently accessed data in a **fast, temporary layer** between your application and the database, you can reduce response times from hundreds of milliseconds to **under 1ms**, slash database load by 90%+, and handle traffic spikes that would otherwise crush your infrastructure. Mastering **Redis**, **cache invalidation**, and **TTL strategies** separates production-grade engineers from tutorial-followers.

---

## Overview

| Sub-topic | What You'll Learn |
|-----------|-------------------|
| [6.6.a](./6.6.a-Redis-Caching.md) | What **Redis** is, why it dominates caching, data types, caching patterns (cache-aside, write-through, write-behind), sessions, and a complete **Express.js + Redis** middleware example |
| [6.6.b](./6.6.b-Cache-Invalidation.md) | Why cache invalidation is **the hardest problem** in CS, invalidation strategies (TTL, event-based, version-based), cache stampede prevention, stale-while-revalidate, and common bugs |
| [6.6.c](./6.6.c-TTL-Strategies.md) | How to choose **TTL values**, short vs long tradeoffs, sliding vs fixed TTL, HTTP cache headers (Cache-Control, ETag), CDN caching, and a complete **production caching strategy** |

### Extra practice & revision

| File | Purpose |
|------|---------|
| [6.6-Exercise-Questions](./6.6-Exercise-Questions.md) | 35+ practice questions + hands-on experiments across 6.6.a-c |
| [6.6-Interview-Questions](./6.6-Interview-Questions.md) | Model answers for common interview prompts (Beginner / Intermediate / Advanced) |
| [6.6-Quick-Revision](./6.6-Quick-Revision.md) | Compact cheat sheet (print-friendly) |

Each extra file begins with **How to use this material (instructions)** — follow that workflow first.

---

## Why Caching Matters in Production

```
┌─────────────────────────────────────────────────────────────────────────┐
│                  PRODUCTION CACHE FLOW                                   │
│                                                                         │
│  Client Request                                                         │
│       │                                                                 │
│       ▼                                                                 │
│  ┌──────────────┐                                                       │
│  │  Application  │                                                      │
│  │  Server       │                                                      │
│  └──────┬───────┘                                                       │
│         │                                                               │
│         ▼                                                               │
│  ┌──────────────┐     HIT                                               │
│  │  Cache        │ ──────────────► Return cached data (< 1ms)           │
│  │  (Redis)      │                                                      │
│  └──────┬───────┘                                                       │
│         │ MISS                                                          │
│         ▼                                                               │
│  ┌──────────────┐                                                       │
│  │  Database     │ ──► Fetch data (50-500ms)                            │
│  │  (PostgreSQL/ │     ──► Store in cache                               │
│  │   MongoDB)    │     ──► Return to client                             │
│  └──────────────┘                                                       │
│                                                                         │
│  Without cache:  Every request hits DB    →  50-500ms per request       │
│  With cache:     95%+ requests hit cache  →  < 1ms per request          │
│                                                                         │
│  KEY INSIGHT: Caching trades memory for speed and database relief.      │
│  The hard part isn't caching — it's knowing WHEN to invalidate.         │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## One-line Cheat Sheet

> **Caching = Store frequently read data close to the consumer, invalidate it when the source changes, and expire it with a TTL as a safety net.**

---

## Prerequisites

- Solid understanding of **Node.js and Express.js** (Episode 3)
- Familiarity with **databases** (MongoDB or PostgreSQL) and basic queries
- Understanding of **HTTP methods** (GET, POST, PUT, DELETE) and REST APIs
- Docker basics (for running Redis locally) — helpful but not required
- Familiarity with **microservices concepts** (Section 6.1–6.2) is beneficial

---

*Start with → [6.6.a — Redis Caching](./6.6.a-Redis-Caching.md)*
