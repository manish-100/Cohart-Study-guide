# 1.10 — CSS Architecture & Project Structure [legacy]

> **Big Picture:** Writing CSS that works is easy. Writing CSS that **scales** — across teams, pages, and years — requires naming conventions, file organisation, and tooling discipline. These patterns are foundational knowledge; modern projects often delegate structure to component frameworks and utility CSS, but the *thinking* behind architecture never goes away.

⚠️ **Legacy note:** BEM, SMACSS, and the 7-1 pattern were designed for large multi-page stylesheets. Today, component frameworks (React, Vue, Svelte) and utility-first tools (Tailwind CSS) often replace manual architecture. Learn these patterns to **understand why** modern tools exist — and to maintain the codebases that still use them.

---

## Overview

| Sub-topic | What You'll Learn |
|-----------|-------------------|
| [1.10.a](./1.10.a-BEM-Naming-Convention.md) | **BEM** syntax (`block__element--modifier`), why naming conventions prevent class-name chaos, and how BEM works with SASS |
| [1.10.b](./1.10.b-Component-Based-CSS.md) | Designing **reusable style blocks**: single responsibility, component APIs, scoping, and avoiding style leakage |
| [1.10.c](./1.10.c-Utility-vs-Component-Classes.md) | **Utility-first** vs **component-class** philosophy — Tailwind vs Bootstrap mindset, hybrid approaches, and the "inline styles" myth |
| [1.10.d](./1.10.d-Real-World-Folder-Structure.md) | Organising CSS files: the **7-1 SASS pattern**, flat vs nested, import order, and how modern frameworks change the game |
| [1.10.e](./1.10.e-Debugging-with-DevTools.md) | Chrome/Firefox DevTools for CSS: inspecting styles, the box model, layout debuggers, forcing states, and hunting common bugs |

### Extra practice & revision

| File | Purpose |
|------|---------|
| [1.10-Exercise-Questions](./1.10-Exercise-Questions.md) | ~50 closed-book questions: BEM naming drills, folder-structure design, debugging challenges |
| [1.10-Interview-Questions](./1.10-Interview-Questions.md) | Model answers for architecture, BEM, utility vs component, and debugging questions |
| [1.10-Quick-Revision](./1.10-Quick-Revision.md) | Compact cheat sheet — BEM syntax table, folder tree, comparison charts |

Each extra file begins with **How to use this material (instructions)** — follow that workflow first.

---

## One-Line Cheat Sheet

```
BEM = block__element--modifier (flat, predictable, grepable)
Component CSS = one file, one job, scoped styles
Utility CSS   = small single-purpose classes composed in HTML
Folder layout = base/ + components/ + layout/ + utilities/ + abstracts/ + vendors/ → main entry
DevTools      = Elements → Styles → Computed → Box Model → Layout inspectors
```

---

## Prerequisites

- [1.6 — CSS Core Fundamentals](../1.6-CSS-Core-Fundamentals/README.md) — selectors, specificity, the cascade
- [1.8 — CSS Layout Mastery](../1.8-CSS-Layout-Mastery/README.md) — how elements are sized and positioned
- [1.9 — CSS Responsive Design](../1.9-CSS-Responsive-Design/README.md) — media queries, fluid layouts

---

*Start with → [1.10.a — BEM Naming Convention](./1.10.a-BEM-Naming-Convention.md)*
