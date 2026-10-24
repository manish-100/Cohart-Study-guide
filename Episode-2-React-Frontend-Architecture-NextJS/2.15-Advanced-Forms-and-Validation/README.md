# 2.15 — Advanced Forms & Validation

> **Big picture:** Forms are where **user intent** meets **data integrity**. This module goes beyond basic controlled inputs into **efficient registration-based handling with React Hook Form**, the **controlled vs uncontrolled** trade space, **Zod** as a **type-safe validation layer**, and **error display patterns** that stay accessible, internationalizable, and maintainable at scale.

---

## Overview

| Sub-topic | What you'll learn |
| --------- | ----------------- |
| [2.15.a — React Hook Form](./2.15.a-React-Hook-Form-Efficient-Form-Handling.md) | `register`, `Controller`, performance model, defaults, reset, composition |
| [2.15.b — Controlled vs uncontrolled forms](./2.15.b-Controlled-vs-Uncontrolled-Forms.md) | `value` vs `defaultValue`, refs, lifting state, hybrid patterns |
| [2.15.c — Zod schema validation](./2.15.c-Zod-Schema-Validation-Type-Safe-Strategy.md) | Schemas, refinements, transforms, `zodResolver`, server/client sharing |
| [2.15.d — Error display patterns](./2.15.d-Error-Display-Patterns.md) | Inline errors, summaries, `aria-*`, async/server errors, field arrays |

### Practice and revision

| File | Purpose |
| ---- | ------- |
| [2.15-Interview-Questions.md](./2.15-Interview-Questions.md) | Interview Q&A and rapid review cards |
| [2.15-Exercise-Questions.md](./2.15-Exercise-Questions.md) | Hands-on labs and deliverables |
| [2.15-Quick-Revision.md](./2.15-Quick-Revision.md) | Cheat sheet, decision trees, spoken answers |

## One-line cheat sheet

```
Measure form UX + correctness: choose uncontrolled-by-default (RHF) where it wins, validate with Zod at boundaries, surface errors accessibly, sync server failures explicitly.
```

## Prerequisites

- [2.14 — State Management Using Redux](../2.14-State-Management-Using-Redux/README.md) when present in your curriculum copy (global client state vs form-local state)
- [2.5 — Event Handling & Conditional Rendering](../2.5-Event-Handling-and-Conditional-Rendering/README.md) (especially controlled inputs)
- [2.7 — Useful Hooks in React](../2.7-Useful-Hooks-in-React/README.md) when present in your curriculum copy

## Next

- [2.16 — Performance Optimization in React](../2.16-Performance-Optimization-in-React/README.md) when present in your curriculum copy
- [2.17 — Understanding Full Stack Frameworks](../2.17-Understanding-Full-Stack-Frameworks/README.md)

---

*Start with → [2.15.a — React Hook Form](./2.15.a-React-Hook-Form-Efficient-Form-Handling.md)*
