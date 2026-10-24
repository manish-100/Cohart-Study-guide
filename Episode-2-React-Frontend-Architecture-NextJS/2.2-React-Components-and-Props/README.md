# 2.2 — React Components & Props

> **Big Picture:** Components are the building blocks of every React application. Props are how you make those blocks configurable and reusable. Master these two concepts and you can build any UI.

---

## Overview

| Sub-topic | What You'll Learn |
|-----------|-------------------|
| [2.2.a — Functional Components](./2.2.a-Functional-Components.md) | Writing components as functions, return values, export patterns |
| [2.2.b — Understanding Props](./2.2.b-Understanding-Props.md) | Passing data between components, destructuring, default values |
| [2.2.c — Dynamic Rendering](./2.2.c-Dynamic-Rendering.md) | Rendering UI based on props data, conditional patterns |
| [2.2.d — Rendering Lists](./2.2.d-Rendering-Lists.md) | Using `map()` to generate repeated UI blocks from arrays |
| [2.2.e — Keys in React](./2.2.e-Keys-in-React.md) | Why unique keys are critical for performance and correctness |
| [2.2.f — Reusable Card Component](./2.2.f-Reusable-Card-Component.md) | Practical implementation — building a production-quality card |

### Extra Practice & Revision

| File | Purpose |
|------|---------|
| [Exercise Questions](./2.2-Exercise-Questions.md) | 60 hands-on practice questions |
| [Interview Questions](./2.2-Interview-Questions.md) | 18 questions with model answers |
| [Quick Revision](./2.2-Quick-Revision.md) | Compact cheat sheet for review |

## One-Line Cheat Sheet

```jsx
function Card({ title, children }) { return <div><h2>{title}</h2>{children}</div>; }
```

## Prerequisites

- [2.1 — Introduction to React](../2.1-Introduction-to-React/README.md) (component concept, JSX syntax)

---

*Start with → [2.2.a — Functional Components](./2.2.a-Functional-Components.md)*
