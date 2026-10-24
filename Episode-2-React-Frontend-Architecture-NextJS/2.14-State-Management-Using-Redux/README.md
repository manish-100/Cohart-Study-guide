# 2.14 — State Management Using Redux

> **Big picture:** As React apps grow, **local component state** and **prop drilling** stop scaling for **cross-cutting client state** that many screens must read and update consistently. **Redux** popularized a **predictable, centralized** pattern: a single store, **pure reducers**, and an explicit **action → dispatch → reducer → new state** flow. This module explains **what Redux is**, **when it earns its complexity**, the **principles and flow**, **why reducers must be pure**, the moving parts (**actions, store, middleware, thunks**), how **`react-redux`** connects UI, how **Redux Toolkit** is the modern default, and how **Recoil, Zustand, and MobX** compare as alternatives.

---

## Overview

| Sub-topic | What you'll learn |
| --------- | ----------------- |
| [2.14.a — Introduction: what, when, why, and state libraries](./2.14.a-Introduction-to-Redux-When-Why-and-State-Libraries.md) | Problems Redux solves, costs, when *not* to adopt, library landscape |
| [2.14.b — Principles, data flow, and pure reducers](./2.14.b-Redux-Principles-Flow-and-Pure-Reducers.md) | Three principles, unidirectional flow, predictability, purity rules |
| [2.14.c — Actions, reducers, store, currying, middleware, thunk](./2.14.c-Actions-Reducers-Store-Middleware-and-Thunk.md) | Core API, enhancers, middleware chains, async with thunks |
| [2.14.d — `react-redux`: connecting components](./2.14.d-React-Redux-Connecting-Components.md) | `Provider`, `connect`, hooks API, performance patterns |
| [2.14.e — Redux Toolkit (RTK)](./2.14.e-Redux-Toolkit-RTK-Introduction.md) | `configureStore`, `createSlice`, RTK Query mention, less boilerplate |
| [2.14.f — Alternatives: Recoil, Zustand, MobX](./2.14.f-Alternatives-Recoil-Zustand-MobX.md) | Trade-offs, mental models, when each fits |

### Practice and revision

| File | Purpose |
| ---- | ------- |
| [2.14-Interview-Questions.md](./2.14-Interview-Questions.md) | Q&A and rapid review |
| [2.14-Exercise-Questions.md](./2.14-Exercise-Questions.md) | Labs and refactor prompts |
| [2.14-Quick-Revision.md](./2.14-Quick-Revision.md) | Cheat sheet and spoken drills |

## One-line cheat sheet

```
Redux = single predictable client state container updated only by plain actions processed through pure reducers; side effects live in middleware/thunks (or RTK listeners), UI subscribes via react-redux.
```

## Prerequisites

- [2.13 — Global State Management](../2.13-Global-State-Management/README.md) when present in your curriculum copy (Context, Zustand, global vs local)
- [2.3 — State & Re-rendering Logic](../2.3-State-and-Re-rendering-Logic/README.md) (lifting state, when context is enough)
- [2.6 — Component Architecture Principles](../2.6-Component-Architecture-Principles/README.md) when present (boundaries and data flow)

## Next

- [2.15 — Advanced Forms & Validation](../2.15-Advanced-Forms-and-Validation/README.md) when present in your curriculum copy

---

*Start with → [2.14.a — Introduction to Redux](./2.14.a-Introduction-to-Redux-When-Why-and-State-Libraries.md)*
