# 1.9 — CSS Responsive Design

> **Big Picture:** Users visit your site on phones, tablets, laptops, and ultra-wide monitors. **Responsive design** makes a single codebase look and work great on every viewport — using **media queries**, **fluid sizing**, and **smart layout** instead of separate mobile sites.

---

## Overview

| Sub-topic | What You'll Learn |
|-----------|-------------------|
| [1.9.a](./1.9.a-Mobile-First-Strategy.md) | Why starting from the **smallest screen** wins — progressive enhancement, `min-width` queries, touch targets, performance |
| [1.9.b](./1.9.b-Media-Queries.md) | Full `@media` syntax — types, features (`width`, `prefers-color-scheme`, `hover`), combining conditions, Level 4 range syntax |
| [1.9.c](./1.9.c-Breakpoint-Planning.md) | Choosing **breakpoints** by content rather than device — common ranges, token systems, DevTools testing |
| [1.9.d](./1.9.d-Responsive-Images.md) | `object-fit`, `object-position`, `<picture>` art direction, lazy loading, modern formats, `aspect-ratio` |
| [1.9.e](./1.9.e-Fluid-Typography.md) | Dynamic text sizing with `clamp()` — formula, viewport units, fluid type scales, accessibility |
| [1.9.f](./1.9.f-Spacing-Rhythm.md) | Vertical rhythm, 4px/8px spacing systems, spacing tokens, responsive spacing, `gap` for consistency |
| [1.9.g](./1.9.g-CSS-Frameworks-Overview.md) | Framework categories — utility-first (Tailwind), component-based (Bootstrap), when to use vs custom CSS |

### Extra practice & revision

| File | Purpose |
|------|---------|
| [1.9-Exercise-Questions](./1.9-Exercise-Questions.md) | ~60 closed-book questions + responsive design challenges + DevTools drills mapped to `1.9.a`–`1.9.g` |
| [1.9-Interview-Questions](./1.9-Interview-Questions.md) | Model answers: mobile-first, media queries, responsive images, fluid typography, spacing systems |
| [1.9-Quick-Revision](./1.9-Quick-Revision.md) | Compact cheat sheet (print-friendly) |

Each extra file begins with **How to use this material (instructions)** — follow that workflow first.

---

## One-Line Cheat Sheet

```
Mobile-first = min-width queries, progressive enhancement
@media (min-width: 768px) { … } — add complexity as viewport grows
clamp(1rem, 2.5vw + 0.5rem, 2rem) — fluid sizing between bounds
object-fit: cover — images fill containers without distortion
Spacing: 4px base → 4, 8, 12, 16, 24, 32, 48, 64 scale
```

---

## Prerequisites

- [1.8 — CSS Layout Mastery](../1.8-CSS-Layout-Mastery/README.md) — Flexbox and Grid foundations you'll use inside responsive layouts
- [1.6 — CSS Core Fundamentals](../1.6-CSS-Core-Fundamentals/README.md) — the box model, cascade, and units (`rem`, `em`, `vw`)

---

*Start with → [1.9.a — Mobile-First Strategy](./1.9.a-Mobile-First-Strategy.md)*
