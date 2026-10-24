# 2.10 — Advanced Reusability Patterns

> **Big picture:** Beyond “small reusable UI,” senior React work is about **reusing behavior and structure** without tangling every consumer in the same implementation details. This module covers **Higher-Order Components (HOCs)** for **wrapping** behavior, the **render props** pattern for **sharing logic through a function prop**, and **compound components** for **flexible public APIs** backed by **shared internal state**—plus when each pattern has been superseded by **hooks** and what you still need to read in legacy codebases.

---

## Overview

| Sub-topic | What you'll learn |
| --------- | ----------------- |
| [2.10.a — Higher-Order Components (HOCs)](./2.10.a-Higher-Order-Components-HOCs.md) | Wrapping, composition, `displayName`, refs, pitfalls vs hooks |
| [2.10.b — Render props pattern](./2.10.b-Render-Props-Pattern.md) | Function-as-child / render prop, inversion of control, performance notes |
| [2.10.c — Compound components](./2.10.c-Compound-Components.md) | `Tabs`/`Menu`-style APIs, context, implicit state sharing, accessibility seams |

### Practice and revision

| File | Purpose |
| ---- | ------- |
| [2.10-Interview-Questions.md](./2.10-Interview-Questions.md) | Q&A and rapid cards |
| [2.10-Exercise-Questions.md](./2.10-Exercise-Questions.md) | Labs |
| [2.10-Quick-Revision.md](./2.10-Quick-Revision.md) | Cheat sheet |

## One-line cheat sheet

```
Reuse cross-cutting behavior with composition: HOCs wrap, render props invert control through a function, compound components expose a small public surface over shared context—prefer hooks for new code unless the API shape demands these patterns.
```

## Prerequisites

- [2.9 — Custom Hooks & Reusable Logic](../2.9-Custom-Hooks-and-Reusable-Logic/README.md) when present in your curriculum copy (hooks before HOC/render-prop patterns)
- [2.2 — React Components & Props](../2.2-React-Components-and-Props/README.md) when present (props, children, composition)
- [2.7 — Useful Hooks in React](../2.7-Useful-Hooks-in-React/README.md) when present (hooks as modern default)

## Next

- [2.11 — Routing & Application Structure](../2.11-Routing-and-Application-Structure/README.md) when present in your curriculum copy

---

*Start with → [2.10.a — HOCs](./2.10.a-Higher-Order-Components-HOCs.md)*
