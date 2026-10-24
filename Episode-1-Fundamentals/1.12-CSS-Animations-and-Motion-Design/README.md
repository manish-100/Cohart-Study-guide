# 1.12 — CSS Animations & Motion Design

> **Big Picture:** Motion is **feedback**. A button that lifts on hover tells the user "I'm clickable." A card that slides in says "I just arrived." CSS gives you two motion systems — **transitions** (A → B) and **keyframe animations** (A → B → C → …) — backed by hardware-accelerated **transforms**. Mastering them means building interfaces that feel alive without hurting performance or accessibility.

---

## Overview

| Sub-topic | What You'll Learn |
|-----------|-------------------|
| [1.12.a](./1.12.a-CSS-Transitions.md) | The `transition` shorthand, timing functions, duration psychology, multi-property transitions, and `prefers-reduced-motion` |
| [1.12.b](./1.12.b-CSS-Transform.md) | `translate`, `scale`, `rotate`, `skew`, combining transforms, `transform-origin`, and why transforms are GPU-friendly |
| [1.12.c](./1.12.c-3D-Transforms.md) | `perspective`, `rotateX/Y/Z`, `preserve-3d`, `backface-visibility`, card-flip animations, and 3D performance |
| [1.12.d](./1.12.d-Keyframe-Animations.md) | `@keyframes`, the `animation` shorthand, fill modes, directions, infinite loops, and practical CSS-only patterns |
| [1.12.e](./1.12.e-Animation-Performance.md) | Compositor-only properties, `will-change`, GPU layers, 60 fps frame budget, DevTools paint flashing, and accessibility |

### Extra practice & revision

| File | Purpose |
|------|---------|
| [1.12-Exercise-Questions](./1.12-Exercise-Questions.md) | ~50 practice questions: transition writing, transform challenges, keyframe creation, performance analysis |
| [1.12-Interview-Questions](./1.12-Interview-Questions.md) | ~15 interview questions with model answers covering transitions, transforms, animations, performance, and a11y |
| [1.12-Quick-Revision](./1.12-Quick-Revision.md) | Compact cheat sheet — transition syntax, transform reference, keyframe template, timing visuals, performance rules |

Each extra file begins with **How to use this material (instructions)** — follow that workflow first.

---

## One-Line Cheat Sheet

```
transition = smooth A→B on property change    |  @keyframes = multi-step timeline
transform (translate/scale/rotate/skew)        |  opacity + transform = compositor-only (fast)
prefers-reduced-motion: reduce → respect it    |  16.67 ms per frame = 60 fps budget
```

---

## Prerequisites

- [1.6 — CSS Core Fundamentals](../1.6-CSS-Core-Fundamentals/README.md) — selectors, the cascade, box model basics
- [1.8 — CSS Layout Mastery](../1.8-CSS-Layout-Mastery/README.md) — Flexbox/Grid context for animated layouts

---

*Start with → [1.12.a — CSS Transitions](./1.12.a-CSS-Transitions.md)*
