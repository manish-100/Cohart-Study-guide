# 2.13 — Global State Management

> **Big picture:** Not every piece of state belongs in the **global** bucket. This module teaches you to share state **across deep trees** with the **Context API** and **providers/consumers**, to reach for **Zustand** when you want a **lightweight store** without Redux ceremony, to decide **global vs local** state with a clear decision framework, and to **avoid overengineering** state logic that slows teams down.

---

## Overview

| Sub-topic | What you'll learn |
| --------- | ----------------- |
| [2.13.a — Context API: app-wide state](./2.13.a-Context-API-App-Wide-State.md) | `createContext`, defaults, when Context fits, performance mindset |
| [2.13.b — Providers & consumers across deep trees](./2.13.b-Context-Providers-Consumers-Deep-Trees.md) | Composition, splitting contexts, avoiding mega-providers |
| [2.13.c — Zustand: lightweight global state](./2.13.c-Zustand-Lightweight-Global-State.md) | Stores, selectors, slices, comparison to Context and Redux |
| [2.13.d — Global state vs local state](./2.13.d-Global-State-vs-Local-State.md) | Colocation, URL state, server state vs client state, lifting rules |
| [2.13.e — Avoiding overengineered state logic](./2.13.e-Avoiding-Overengineered-State-Logic.md) | Smells, refactors, conventions, “boring is fast” |

### Practice and revision

| File | Purpose |
| ---- | ------- |
| [2.13-Interview-Questions.md](./2.13-Interview-Questions.md) | Q&A and rapid cards |
| [2.13-Exercise-Questions.md](./2.13-Exercise-Questions.md) | Labs and refactors |
| [2.13-Quick-Revision.md](./2.13-Quick-Revision.md) | Cheat sheet and spoken drills |

## One-line cheat sheet

```
Default local → lift only when shared → split Context by update rate → consider Zustand for shared client state without Redux weight → never globalize without a boundary and an owner.
```

## Prerequisites

- [2.12 — Server State & API Integration](../2.12-Server-State-and-API-Integration/README.md) when present in your curriculum copy (do not duplicate server cache in global stores)
- [2.3 — State & Re-rendering Logic](../2.3-State-and-Re-rendering-Logic/README.md) (lifting state, re-renders)
- [2.6 — Component Architecture Principles](../2.6-Component-Architecture-Principles/README.md) when present (composition, boundaries)

## Next

- [2.14 — State Management Using Redux](../2.14-State-Management-Using-Redux/README.md) when present in your curriculum copy

---

*Start with → [2.13.a — Context API](./2.13.a-Context-API-App-Wide-State.md)*
