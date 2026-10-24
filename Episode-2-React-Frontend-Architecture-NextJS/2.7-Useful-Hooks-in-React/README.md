# 2.7 — Useful Hooks in React

> **Big Picture:** Hooks are functions that let you "hook into" React's internal features — state, lifecycle, context, refs, and performance optimizations — from inside function components. Mastering the built-in hooks is the foundation for writing clean, reusable, and performant React code. This topic gives you a thorough understanding of every commonly used hook, the rules that govern them, and when to reach for each one.

---

## Overview

| Sub-topic | What You'll Learn |
|---|---|
| [2.7.a — Understanding React Hooks](./2.7.a-Understanding-React-Hooks.md) | What hooks are, why they were introduced, how they replaced class component patterns, and the mental model behind hook-based development. |
| [2.7.b — Rules of Hooks](./2.7.b-Rules-of-Hooks.md) | The two unbreakable rules, why they exist (linked lists), what happens when you break them, the ESLint plugin, and edge cases. |
| [2.7.c — Commonly Used Hooks](./2.7.c-Commonly-Used-Hooks.md) | Deep dive into `useState`, `useEffect`, `useContext`, `useRef`, `useCallback`, `useMemo` — with real-world patterns, gotchas, and when to use each. |

### Extra practice & revision

| File | Purpose |
|---|---|
| [Exercise Questions](./2.7-Exercise-Questions.md) | 60 hands-on practice questions |
| [Interview Questions](./2.7-Interview-Questions.md) | 18 curated questions with model answers |
| [Quick Revision](./2.7-Quick-Revision.md) | Compact cheat sheet for all hooks |

## One-Line Cheat Sheet

```
Hooks = React features as functions: useState (state), useEffect (sync), useContext (global),
useRef (mutable box), useCallback (stable fn), useMemo (cached value).
```

## Prerequisites

- [2.3 — State & Re-rendering Logic](../2.3-State-and-Re-rendering-Logic/README.md)
- [2.4 — React Lifecycle Methods](../2.4-React-Lifecycle-Methods/README.md)
- [2.6 — Component Architecture Principles](../2.6-Component-Architecture-Principles/README.md)

---

*Start with → [2.7.a — Understanding React Hooks](./2.7.a-Understanding-React-Hooks.md)*
