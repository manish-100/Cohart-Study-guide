# 2.8 — useEffect Deep Dive

> **Big Picture:** `useEffect` is React's bridge to the outside world — it synchronises your components with external systems like APIs, the DOM, timers, and browser APIs. Mastering it means understanding *when* code runs, *why* it re-runs, and *how* to clean up after itself. This topic takes you from basic mental models to production-grade patterns that prevent memory leaks, race conditions, and infinite loops.

---

## Overview

| Sub-topic | What You'll Learn |
|---|---|
| [2.8.a — What useEffect Really Does](./2.8.a-What-useEffect-Really-Does.md) | The synchronisation mental model — why useEffect is not a lifecycle method but a way to keep your component in sync with external systems |
| [2.8.b — Dependency Array Behaviour](./2.8.b-Dependency-Array-Behaviour.md) | How React decides when to re-run effects, `Object.is` comparison, why infinite loops happen, and how to fix every dependency scenario |
| [2.8.c — Cleanup Functions](./2.8.c-Cleanup-Functions.md) | Preventing memory leaks with cleanup — when cleanup runs, what to clean, and production patterns for subscriptions, timers, and observers |
| [2.8.d — Data-Fetching-Pattern-with-useEffect](./2.8.d-Data-Fetching-Pattern-with-useEffect.md) | Building production-quality data fetching — loading/error states, AbortController, race condition prevention, and the evolution toward TanStack Query |
| [2.8.e — Practical-Example-Fetching-API-Data](./2.8.e-Practical-Example-Fetching-API-Data.md) | End-to-end practical build — a complete GitHub user search app with debouncing, caching, pagination, error handling, and accessibility |

### Extra practice & revision

| File | Purpose |
|---|---|
| [Exercise Questions](./2.8-Exercise-Questions.md) | 60 hands-on questions covering all sub-topics |
| [Interview Questions](./2.8-Interview-Questions.md) | 18 questions with model answers (beginner → advanced) |
| [Quick Revision](./2.8-Quick-Revision.md) | Compact cheat sheet for last-minute review |

## One-Line Cheat Sheet

```
useEffect(() => { /* sync with external system */ return () => { /* cleanup */ } }, [deps])
```

## Prerequisites

- [2.3 — State & Re-rendering Logic](../2.3-State-and-Re-rendering-Logic/README.md)
- [2.4 — React Lifecycle Methods](../2.4-React-Lifecycle-Methods/README.md) (especially 2.4.c)
- [2.7 — Useful Hooks in React](../2.7-Useful-Hooks-in-React/README.md)

---

*Start with → [2.8.a — What useEffect Really Does](./2.8.a-What-useEffect-Really-Does.md)*
