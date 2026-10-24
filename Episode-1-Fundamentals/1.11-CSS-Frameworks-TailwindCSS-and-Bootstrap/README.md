# 1.11 — CSS Frameworks: TailwindCSS & Bootstrap

> **Big Picture:** Writing every CSS rule from scratch is powerful but **slow**. CSS frameworks give you a **head start** — pre-built utilities or components that enforce consistency, responsiveness, and speed. The two dominant philosophies today are **utility-first** (Tailwind) and **component-based** (Bootstrap). Understanding both lets you pick the right tool for every project.

---

## Overview

| Sub-topic | What You'll Learn |
|-----------|-------------------|
| [1.11.a](./1.11.a-Introduction-to-CSS-Frameworks.md) | What CSS frameworks are, why they exist, categories, history, and trade-offs |
| [1.11.b](./1.11.b-Utility-First-vs-Component-Based.md) | Two philosophies: **utility-first** vs **component-based** — how each handles customization, consistency, and learning curve |
| [1.11.c](./1.11.c-TailwindCSS-Setup-and-Basics.md) | TailwindCSS installation, config, **utility classes**, responsive prefixes, state variants, and `@apply` |
| [1.11.d](./1.11.d-Building-with-TailwindCSS.md) | Hands-on Tailwind: layout, spacing, colors, typography, **responsive design**, dark mode, building real components |
| [1.11.e](./1.11.e-Introduction-to-Bootstrap.md) | Bootstrap's component-based design system, installation, **grid basics**, breakpoints, and theming approach |
| [1.11.f](./1.11.f-Bootstrap-Grid-and-Components.md) | The **12-column grid** in depth, responsive columns, offsets, and key Bootstrap components (navbar, cards, modals, forms) |
| [1.11.g](./1.11.g-Customizing-Bootstrap.md) | SASS variable overrides, theme customization, **cherry-picking components**, reducing bundle size, utilities API |
| [1.11.h](./1.11.h-TailwindCSS-vs-Bootstrap.md) | Head-to-head comparison: bundle size, learning curve, customization, ecosystem — **when to use which** |

### Extra practice & revision

| File | Purpose |
|------|---------|
| [1.11-Exercise-Questions](./1.11-Exercise-Questions.md) | ~60 practice questions: Tailwind class writing, Bootstrap grid, comparison, and build challenges |
| [1.11-Interview-Questions](./1.11-Interview-Questions.md) | ~15 model-answer questions covering framework choice, utilities, grid, customization, trade-offs |
| [1.11-Quick-Revision](./1.11-Quick-Revision.md) | Compact cheat sheet: Tailwind class reference, Bootstrap grid table, comparison table, setup commands |

Each extra file begins with **How to use this material (instructions)** — follow that workflow first.

---

## One-Line Cheat Sheet

```
Tailwind  = utility-first: compose designs in HTML with atomic classes (bg-blue-500, flex, p-4)
Bootstrap = component-based: pre-styled widgets (navbar, modal, card) + 12-col grid
Tailwind → custom designs, small bundles (purge unused), full control
Bootstrap → rapid prototyping, familiar patterns, pre-built interactive components
Both → responsive-first, customizable via config/SASS, massive communities
```

---

## Prerequisites

- [1.9 — CSS Responsive Design](../1.9-CSS-Responsive-Design/README.md) — media queries, responsive patterns
- [1.10 — CSS Architecture & Project Structure](../1.10-CSS-Architecture-and-Project-Structure/README.md) — BEM, component CSS, utility classes (frameworks build on these concepts)

---

*Start with → [1.11.a — Introduction to CSS Frameworks](./1.11.a-Introduction-to-CSS-Frameworks.md)*
