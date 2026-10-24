# 2.9 — Custom Hooks & Reusable Logic

> **Big picture:** Components should mostly **describe UI**. Logic that repeats across screens—fetching, subscriptions, form steps, feature flags—belongs in **reusable functions** that follow the **Rules of Hooks**: **custom hooks**. This module explains **why custom hooks exist**, how to build a solid **`useFetch`** (and why you may graduate to a data library), how to **separate business logic from presentation**, and how hooks improve **maintainability** when teams agree on naming, boundaries, and tests.

---

## Overview

| Sub-topic | What you'll learn |
| --------- | ----------------- |
| [2.9.a — Why custom hooks exist](./2.9.a-Why-Custom-Hooks-Exist.md) | DRY for stateful logic, rules of hooks, composition vs HOCs |
| [2.9.b — Writing a `useFetch` hook](./2.9.b-useFetch-Reusable-API-Fetching.md) | Abort, status union, errors, dependency discipline |
| [2.9.c — Business logic separate from UI](./2.9.c-Business-Logic-Separate-from-UI.md) | Pure functions, adapters, thin components, testing seams |
| [2.9.d — Maintainability with hooks](./2.9.d-Hooks-and-Code-Maintainability.md) | Naming, colocation, `hooks/` hygiene, documentation, pitfalls |

### Practice and revision

| File | Purpose |
| ---- | ------- |
| [2.9-Interview-Questions.md](./2.9-Interview-Questions.md) | Q&A and rapid cards |
| [2.9-Exercise-Questions.md](./2.9-Exercise-Questions.md) | Labs |
| [2.9-Quick-Revision.md](./2.9-Quick-Revision.md) | Cheat sheet |

## One-line cheat sheet

```
Custom hooks = stateful reuse with hook rules: extract non-visual logic, return data + actions, keep components thin, test hooks via @testing-library/react or pure helpers.
```

## Prerequisites

- [2.7 — Useful Hooks in React](../2.7-Useful-Hooks-in-React/README.md) when present (built-in hooks foundation)
- [2.3 — State & Re-rendering Logic](../2.3-State-and-Re-rendering-Logic/README.md) when present

## Next

- [2.10 — Advanced Reusability Patterns](../2.10-Advanced-Reusability-Patterns/README.md) when present in your curriculum copy

---

*Start with → [2.9.a — Why custom hooks exist](./2.9.a-Why-Custom-Hooks-Exist.md)*
