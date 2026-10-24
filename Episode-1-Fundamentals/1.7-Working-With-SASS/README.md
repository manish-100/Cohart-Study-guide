# 1.7 — Working With SASS

> **Big Picture:** CSS gets you far, but real-world projects need **variables**, **reusable mixins**, **file organization**, and **logic** (loops, conditionals). **SASS** (Syntactically Awesome Stylesheets) is the most popular CSS preprocessor — it compiles to plain CSS while giving you **programmer-friendly** tools for maintainable, scalable stylesheets.

---

## Overview

| Sub-topic | What You'll Learn |
|-----------|-------------------|
| [1.7.a](./1.7.a-What-is-SASS.md) | What SASS is, why preprocessors exist, key features at a glance, and how SCSS compiles to CSS |
| [1.7.b](./1.7.b-SCSS-vs-SASS-and-Setup.md) | SCSS vs indented SASS syntax, why SCSS dominates, installing **dart-sass**, watch mode, and project structure |
| [1.7.c](./1.7.c-Variables-and-Nesting.md) | `$variables`, data types, nesting selectors, the `&` parent selector, and SCSS variables vs CSS custom properties |
| [1.7.d](./1.7.d-Partials-and-Imports.md) | Partials (`_file.scss`), `@use` / `@forward` (modern), `@import` (legacy), the **7-1 pattern**, and namespacing |
| [1.7.e](./1.7.e-Mixins.md) | `@mixin` / `@include`, arguments, default values, `@content` blocks, and common real-world mixins |
| [1.7.f](./1.7.f-Inheritance-and-Extends.md) | `@extend`, placeholder selectors (`%`), selector grouping, pitfalls in media queries, extend vs mixin |
| [1.7.g](./1.7.g-Functions-and-Operators.md) | Built-in functions, custom `@function`, arithmetic / comparison / logical operators, and practical calculations |
| [1.7.h](./1.7.h-Control-Directives.md) | `@if` / `@else`, `@for`, `@each`, `@while` — generating utility classes, grids, and color palettes with loops |
| [1.7.i](./1.7.i-Color-Functions.md) | `lighten()`, `darken()`, `mix()`, modern `color.adjust()` / `color.scale()`, building palettes, and accessibility |

### Extra practice & revision

| File | Purpose |
|------|---------|
| [1.7-Exercise-Questions](./1.7-Exercise-Questions.md) | Closed-book questions + hands-on drills mapped to `1.7.a`–`1.7.i` |
| [1.7-Interview-Questions](./1.7-Interview-Questions.md) | Model answers: SASS fundamentals, architecture, mixins, functions, performance |
| [1.7-Quick-Revision](./1.7-Quick-Revision.md) | Compact cheat sheet (print-friendly) |

Each extra file begins with **How to use this material (instructions)** — follow that workflow first.

---

## One-Line Cheat Sheet

```
SCSS = CSS superset + $variables + nesting + @mixin/@include + @use partials + @function + @if/@each/@for
Compiles to plain CSS — browsers never see SCSS
7-1 pattern = abstracts/ base/ components/ layout/ pages/ themes/ vendors/ + main.scss
```

---

## Prerequisites

- [1.6 — CSS Core Fundamentals](../1.6-CSS-Core-Fundamentals/README.md) — selectors, specificity, the cascade, box model, layout — everything SASS compiles **down to**

---

*Start with → [1.7.a — What is SASS?](./1.7.a-What-is-SASS.md)*
