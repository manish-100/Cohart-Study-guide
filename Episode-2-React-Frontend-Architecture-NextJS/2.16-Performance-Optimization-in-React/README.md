# 2.16 — Performance Optimization in React

> **Big picture:** React is fast by default, but **large apps** pay for every unnecessary render, every expensive re-computation, and every byte shipped to the browser. This module teaches you to **measure first**, then apply the right tool: **`React.memo`**, **`useMemo`**, **`useCallback`**, **code splitting** with **`React.lazy`** and **`Suspense`**, **Lighthouse** performance testing, and **DevTools / Profiler** workflows for debugging re-renders—from beginner mechanics to advanced interview-level trade-offs.

---

## Overview

| Sub-topic | What you'll learn |
| --------- | ----------------- |
| [2.16.a — `React.memo`](./2.16.a-React-Memo-Preventing-Unnecessary-Re-renders.md) | Equality checks, custom comparators, prop stability, lists, anti-patterns |
| [2.16.b — `useMemo`](./2.16.b-useMemo-Memoizing-Expensive-Calculations.md) | Dependency arrays, referential equality, derived data, gotchas with objects |
| [2.16.c — `useCallback`](./2.16.c-useCallback-Stable-Function-References.md) | Stable handlers, child memoization, dependency discipline, mental models |
| [2.16.d — Code splitting with `React.lazy` & `Suspense`](./2.16.d-Code-Splitting-React-Lazy-Suspense.md) | Boundaries, error handling, preloading, routing integration |
| [2.16.e — Lighthouse performance testing](./2.16.e-Lighthouse-Performance-Testing.md) | Core Web Vitals, audits, lab vs field, CI gates, budgets |
| [2.16.f — Debugging re-renders with DevTools](./2.16.f-Debugging-Re-renders-DevTools.md) | Profiler recordings, commit vs render, highlights, common workflows |

### Practice and revision

| File | Purpose |
| ---- | ------- |
| [2.16-Interview-Questions.md](./2.16-Interview-Questions.md) | Interview-style Q&A from junior to senior depth |
| [2.16-Exercise-Questions.md](./2.16-Exercise-Questions.md) | Hands-on labs and refactoring challenges |
| [2.16-Quick-Revision.md](./2.16-Quick-Revision.md) | Cram sheet, decision trees, and self-check answers |

## One-line cheat sheet

```
Measure → fix the biggest real cost (JS, layout, network) → stabilize props & memoize hot subtrees → split bundles → verify with Lighthouse + Profiler.
```

## Prerequisites

- [2.15 — Advanced Forms & Validation](../2.15-Advanced-Forms-and-Validation/README.md) when present in your curriculum copy (large-form re-render patterns)
- [2.3 — State & Re-rendering Logic](../2.3-State-and-Re-rendering-Logic/README.md) (especially how renders propagate)
- [2.4 — React Lifecycle / `useEffect`](../2.4-React-Lifecycle-Methods/README.md) when present in your curriculum copy
- [2.7 — Useful Hooks in React](../2.7-Useful-Hooks-in-React/README.md) (hooks rules and mental models)

## Next

- [2.17 — Understanding Full Stack Frameworks](../2.17-Understanding-Full-Stack-Frameworks/README.md) (optional curriculum bridge into Next.js)

---

*Start with → [2.16.a — `React.memo`](./2.16.a-React-Memo-Preventing-Unnecessary-Re-renders.md)*
