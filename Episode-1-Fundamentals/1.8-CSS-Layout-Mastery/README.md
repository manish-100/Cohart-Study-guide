# 1.8 — CSS Layout Mastery

> **Big Picture:** CSS gives you three layout engines — **Flexbox**, **Grid**, and **positioned** flow — plus a stacking system and emerging **container queries**. Knowing which tool to reach for, and how to combine them, is what separates a developer who "makes it work" from one who builds layouts that **scale, adapt, and remain maintainable**.

---

## Overview

| Sub-topic | What You'll Learn |
|-----------|-------------------|
| [1.8.a](./1.8.a-Flexbox-Deep-Dive.md) | Flex containers & items, axes, `justify-content`, `align-items`, `flex` shorthand, `gap`, `order` — and when **not** to use flexbox |
| [1.8.b](./1.8.b-Common-Layout-Patterns.md) | Navbar, card grid, centering tricks, holy grail, sidebar, sticky footer — common patterns you'll build in every project |
| [1.8.c](./1.8.c-CSS-Grid.md) | `grid-template-columns/rows`, `fr`, `repeat()`, `minmax()`, named areas, line-based placement, `auto-fill` vs `auto-fit`, subgrid |
| [1.8.d](./1.8.d-Combining-Grid-and-Flex.md) | Grid for page-level layout, flex for component-level — real-world architecture and complete page examples |
| [1.8.e](./1.8.e-Positioning.md) | `static`, `relative`, `absolute`, `fixed`, `sticky` — containing blocks, offsets, and practical patterns |
| [1.8.f](./1.8.f-Stacking-Context.md) | What creates stacking contexts, `z-index` rules, paint order, common bugs, and a token-based z-index system |
| [1.8.g](./1.8.g-Container-Queries.md) | `@container` syntax, container types, `cqw`/`cqh` units, responsive components vs responsive pages |

### Extra practice & revision

| File | Purpose |
|------|---------|
| [1.8-Exercise-Questions](./1.8-Exercise-Questions.md) | ~70 practice questions + layout challenges mapped to `1.8.a`–`1.8.g` |
| [1.8-Interview-Questions](./1.8-Interview-Questions.md) | Model answers: flexbox vs grid, positioning, z-index, container queries |
| [1.8-Quick-Revision](./1.8-Quick-Revision.md) | Compact cheat sheet (print-friendly) |

Each extra file begins with **How to use this material (instructions)** — follow that workflow first.

---

## One-Line Cheat Sheet

```
Flexbox = 1D (row OR column)    Grid = 2D (rows AND columns)
position: sticky = scroll-aware  z-index = stacking contexts (not global)
Container queries = component-level responsive design
```

---

## Prerequisites

- [1.6 — CSS Core Fundamentals](../1.6-CSS-Core-Fundamentals/README.md) — the box model, selectors, specificity, and cascade (required foundation for layout)

---

*Start with → [1.8.a — Flexbox Deep Dive](./1.8.a-Flexbox-Deep-Dive.md)*
