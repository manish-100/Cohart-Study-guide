# 2.12 — Server State & API Integration

> **Big picture:** **Server state** (data you do not own, lives on another machine, can fail or go stale) deserves different tools and mental models than **client UI state** (modals, toggles, form drafts). This module covers **`fetch` in React**, **graceful loading and error UX**, a clear **server vs client** split, and **TanStack Query** for **smart caching, refetching**, **`useQuery` patterns**, and **`useMutation`** for correct updates and cache coherence.

---

## Overview

| Sub-topic | What you'll learn |
| --------- | ----------------- |
| [2.12.a — `fetch` API integration in React](./2.12.a-Fetch-API-Integration-in-React.md) | Effects, cleanup, `AbortController`, JSON parsing, base URLs |
| [2.12.b — Loading & error states](./2.12.b-Loading-and-Error-States-Gracefully.md) | Discriminated async UI, skeletons, retries, boundaries |
| [2.12.c — Server state vs client state](./2.12.c-Server-State-vs-Client-State.md) | Ownership, duplication, where each kind of state should live |
| [2.12.d — TanStack Query: caching, refetching, `useQuery`](./2.12.d-TanStack-Query-useQuery-Caching-Refetching.md) | `QueryClient`, keys, `staleTime`, refetch triggers, basics of `useQuery` |
| [2.12.e — Mutations: updating server data](./2.12.e-Mutations-Server-Updates.md) | `useMutation`, invalidation, optimistic updates, error rollback |

### Practice and revision

| File | Purpose |
| ---- | ------- |
| [2.12-Interview-Questions.md](./2.12-Interview-Questions.md) | Q&A and rapid cards |
| [2.12-Exercise-Questions.md](./2.12-Exercise-Questions.md) | Labs |
| [2.12-Quick-Revision.md](./2.12-Quick-Revision.md) | Cheat sheet |

## One-line cheat sheet

```
Treat remote data as async + cacheable server state: fetch with cancellation discipline, model loading/errors explicitly, then let TanStack Query own refetch, dedupe, and mutations with cache rules you can explain.
```

## Prerequisites

- [2.11 — Routing & Application Structure](../2.11-Routing-and-Application-Structure/README.md) when present in your curriculum copy (URL-driven screens and loaders tied to routes)
- [2.3 — State & Re-rendering Logic](../2.3-State-and-Re-rendering-Logic/README.md) (`useEffect`, dependency hygiene)
- [2.4 — React Lifecycle / `useEffect`](../2.4-React-Lifecycle-Methods/README.md) when present (cleanup patterns)

## Next

- [2.13 — Global State Management](../2.13-Global-State-Management/README.md) when present in your curriculum copy

---

*Start with → [2.12.a — `fetch` in React](./2.12.a-Fetch-API-Integration-in-React.md)*
