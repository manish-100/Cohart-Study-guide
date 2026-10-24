# 1.6 — CSS Core Fundamentals

> **Big Picture:** CSS is the **styling layer** of the web — it determines how elements look, feel, and respond. But CSS is not "just colors and fonts." It is a **system of rules** (cascade, specificity, inheritance) that resolves conflicts, a **box model** that governs layout math, and a set of **modern tools** (custom properties, `clamp()`, tokens) that turn ad-hoc styling into **scalable design systems**.

---

## Overview

| Sub-topic | What You'll Learn |
|-----------|-------------------|
| [1.6.a](./1.6.a-CSS-Syntax-and-Selectors.md) | CSS rule anatomy, **selectors** (element, class, ID, combinator, attribute), pseudo-classes, pseudo-elements, and the **`:has()` parent selector** |
| [1.6.b](./1.6.b-Specificity-and-Cascade.md) | The **cascade algorithm**, **specificity** scoring, `!important`, `@layer`, `:is()` vs `:where()` |
| [1.6.c](./1.6.c-Inheritance-and-Computed-Styles.md) | Which properties **inherit**, controlling inheritance (`inherit`, `initial`, `unset`, `revert`), **computed values** |
| [1.6.d](./1.6.d-Box-Model.md) | Content → padding → border → margin, **`box-sizing: border-box`**, margin collapsing, inline vs block |
| [1.6.e](./1.6.e-CSS-Units.md) | `px` vs `rem` vs `em` vs `%` vs `vw`/`vh`, `ch`, dynamic viewport units, accessibility impact |
| [1.6.f](./1.6.f-Modern-CSS-Functions.md) | **`clamp()`**, **`min()`**, **`max()`**, `calc()` — fluid design without media queries |
| [1.6.g](./1.6.g-CSS-Variables.md) | CSS custom properties (`--name`), `:root` theming, scoping, runtime updates via JS |
| [1.6.h](./1.6.h-Design-Systems.md) | What a design system is, anatomy (tokens + components + docs), consistent spacing/color/type |
| [1.6.i](./1.6.i-Design-Tokens.md) | Token tiers (primitive → semantic → component), spacing/color systems, platform-agnostic distribution |

### Extra practice & revision

| File | Purpose |
|------|---------|
| [1.6-Exercise-Questions](./1.6-Exercise-Questions.md) | Closed-book questions + DevTools drills mapped to `1.6.a`–`1.6.i` |
| [1.6-Interview-Questions](./1.6-Interview-Questions.md) | Model answers: selectors, specificity, box model, units, theming, tokens |
| [1.6-Quick-Revision](./1.6-Quick-Revision.md) | Compact cheat sheet (print-friendly) |

Each extra file begins with **How to use this material (instructions)** — follow that workflow first.

---

## One-Line Cheat Sheet

```
Selector { property: value; }
Cascade: origin → specificity (inline > ID > class > element) → source order
Box model: content + padding + border + margin  (use border-box!)
Units: rem for text/spacing, px for borders, vw/vh for viewport, ch for line width
clamp(min, preferred, max) = fluid responsive values
Custom properties: --var on :root → var(--var) everywhere → theming for free
Tokens: primitive → semantic → component → one truth, all platforms
```

---

## Prerequisites

- [1.5 — Semantic HTML & Browser Rendering](../1.5-Semantic-HTML-and-Browser-Rendering/README.md) — how the DOM and CSSOM combine to produce the render tree; understanding reflow helps explain why box model and specificity matter for performance

---

*Start with → [1.6.a — CSS Syntax & Selectors](./1.6.a-CSS-Syntax-and-Selectors.md)*
