# 2.6 — Component Architecture Principles

> **Big Picture:** Great React apps aren't built by accident — they follow clear architectural principles that keep components small, focused, and composable. This topic teaches you how to think about component boundaries, data flow, and composition so your UI scales without becoming a tangled mess.

---

## Overview

| Sub-topic | What You'll Learn |
|---|---|
| [2.6.a — Single Responsibility Principle](./2.6.a-Single-Responsibility-Principle.md) | One component, one job — how to identify when a component does too much and how to split it |
| [2.6.b — Smart vs Dumb Components](./2.6.b-Smart-vs-Dumb-Components.md) | Separating data logic from presentation to build testable, reusable UI |
| [2.6.c — Lifting State Up](./2.6.c-Lifting-State-Up.md) | Sharing data between sibling components by moving state to their common parent |
| [2.6.d — Prop Drilling Problem](./2.6.d-Prop-Drilling-Problem.md) | Why passing props through many layers breaks maintainability, and patterns to solve it |
| [2.6.e — Component Composition](./2.6.e-Component-Composition.md) | Building scalable layout systems using children, slots, and composition over inheritance |

### Extra practice & revision

| File | Purpose |
|---|---|
| [Exercise Questions](./2.6-Exercise-Questions.md) | 60 hands-on practice questions |
| [Interview Questions](./2.6-Interview-Questions.md) | 18 questions with model answers |
| [Quick Revision](./2.6-Quick-Revision.md) | Compact cheat sheet for review |

## One-Line Cheat Sheet

```
Good architecture = small components + clear data flow + composition over inheritance.
```

## Prerequisites

- [2.2 — React Components & Props](../2.2-React-Components-and-Props/README.md)
- [2.3 — State & Re-rendering Logic](../2.3-State-and-Re-rendering-Logic/README.md)
- [2.5 — Event Handling & Conditional Rendering](../2.5-Event-Handling-and-Conditional-Rendering/README.md)

---

*Start with → [2.6.a — Single Responsibility Principle](./2.6.a-Single-Responsibility-Principle.md)*
