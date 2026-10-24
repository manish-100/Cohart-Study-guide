# 2.4 — React Lifecycle Methods

> **Big Picture:** Every React component goes through a lifecycle — it is **born** (mounted), **grows** (updated), and eventually **dies** (unmounted). Understanding this lifecycle is essential for controlling *when* things happen: fetching data after a component appears, cleaning up resources before it disappears, or optimising re-renders during updates. Class components expose this lifecycle through explicit methods like `componentDidMount`. Modern functional components achieve the same (and more) through the `useEffect` Hook — but the mental model shifts from "lifecycle events" to "synchronising side effects." Master both, because you *will* encounter class components in production codebases.

---

## Overview

| Sub-topic | What You'll Learn |
|-----------|-------------------|
| [2.4.a — Class Components Lifecycle](./2.4.a-Class-Components-Lifecycle.md) | ES6 class syntax, constructor, state, `this` binding, class → function conversion |
| [2.4.b — React's Lifecycle Methods](./2.4.b-Reacts-Lifecycle-Methods.md) | Every lifecycle method: mount, update, unmount, error — with diagrams |
| [2.4.c — useEffect Hook](./2.4.c-useEffect-Hook.md) | Side effects in functional components, dependency arrays, cleanup |
| [2.4.d — Data Fetching, Cleanup & DOM Manipulation](./2.4.d-Data-Fetching-Cleanup-and-DOM-Manipulation.md) | Practical patterns: fetch, abort, refs, observers, best practices |

### Extra practice & revision

| File | Purpose |
|------|---------|
| [Exercise Questions](./2.4-Exercise-Questions.md) | 60 hands-on practice questions |
| [Interview Questions](./2.4-Interview-Questions.md) | 18 interview Qs with model answers |
| [Quick Revision](./2.4-Quick-Revision.md) | One-page cheat sheet |

## One-Line Cheat Sheet

```js
useEffect(() => { /* mount + update */ return () => { /* cleanup */ }; }, [deps]);
```

## Prerequisites

- [2.3 — State & Re-rendering Logic](../2.3-State-and-Re-rendering-Logic/README.md)

---

*Start with → [2.4.a — Class Components Lifecycle](./2.4.a-Class-Components-Lifecycle.md)*
