# 2.19 — Rendering Strategies in Next.js

> **Big picture:** Next.js can send HTML that was produced **ahead of time** (static), **on each request** (server-rendered), or **mostly static with controlled refresh** (ISR). Modern App Router adds **React Server Components** and **streaming**, which changes *how* SSR feels — but the product questions (SEO, staleness, latency, cost) stay the same.

---

## Overview

| Sub-topic | File | Approx. depth |
| --------- | ---- | -------------- |
| Server-Side Rendering (SSR) | [2.19.a — SSR](./2.19.a-Server-Side-Rendering-SSR.md) | Full course: fundamentals → architecture → App Router → ops |
| Static Site Generation (SSG) | [2.19.b — SSG](./2.19.b-Static-Site-Generation-SSG.md) | Full course: build-time trade-offs → SEO → scale |
| Incremental Static Regeneration | [2.19.c — ISR](./2.19.c-Incremental-Static-Regeneration-ISR.md) | Full course: semantics → invalidation → failure modes |

### Practice & revision

| File | Purpose |
| ---- | ------- |
| [2.19-Interview-Questions.md](./2.19-Interview-Questions.md) | Condensed Q&A |
| [2.19-Exercise-Questions.md](./2.19-Exercise-Questions.md) | Labs |
| [2.19-Quick-Revision.md](./2.19-Quick-Revision.md) | One-pager |

## Prerequisites

- HTTP caching basics (`Cache-Control`, validators)
- React mental model (components, props, state)
- [2.18 — Getting Started with Next.js](../2.18-Getting-Started-with-NextJS/README.md) (scaffold, routing, layouts foundation)

## Next

- [2.20 — Building APIs](../2.20-Building-APIs-with-NextJS/README.md)
- [2.21 — Server Actions](../2.21-Working-with-Server-Actions/README.md)

---

*Start with → [2.19.a — SSR](./2.19.a-Server-Side-Rendering-SSR.md)*
