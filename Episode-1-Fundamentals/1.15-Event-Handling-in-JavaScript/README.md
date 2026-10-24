# 1.15 — Event Handling in JavaScript

> **Big Picture:** Browsers are **event-driven**: clicks, keys, scrolls, network completion, and lifecycle milestones all emit **events**. Your job is to **subscribe** with **`addEventListener`**, understand **where** the event was triggered (**`event.target`**), how events **flow** through the tree (**bubbling** / capturing), and when to **cancel defaults** (**`preventDefault`**) — especially on **forms** and **navigation**.

---

## Overview

| Sub-topic | What You'll Learn |
|-----------|-------------------|
| [1.15.a](./1.15.a-addEventListener-and-Bubbling.md) | **`addEventListener`**, **`removeEventListener`**, **`event.target`**, **bubbling** vs **capture**, **`stopPropagation`** |
| [1.15.b](./1.15.b-Mouse-Keyboard-Scroll-and-Strict-Mode.md) | **Mouse**, **keyboard**, and **scroll** events; **`'use strict'`** and why it matters |
| [1.15.c](./1.15.c-Forms-Inputs-and-preventDefault.md) | **Accessing form data**, **validation**, **`preventDefault()`**, **`submit`** / **`change`** (and how **`onsubmit`** / **`onchange`** relate) |
| [1.15.d](./1.15.d-classList-and-Events.md) | **`classList.add` / `remove` / `toggle` / `contains`** — pairing DOM state with user events |
| [1.15.e](./1.15.e-Browser-and-Window-Events.md) | **`DOMContentLoaded`**, **`load`**, **`resize`**, **`scroll`** — timing, performance, and gotchas |

### Extra practice & revision

| File | Purpose |
|------|---------|
| [1.15-Exercise-Questions](./1.15-Exercise-Questions.md) | Closed-book + mini UI tasks mapped to `1.15.a`–`1.15.e` |
| [1.15-Interview-Questions](./1.15-Interview-Questions.md) | Model answers: bubbling vs capture, target vs currentTarget, form submit, passive scroll |
| [1.15-Quick-Revision](./1.15-Quick-Revision.md) | Compact cheat sheet (print-friendly) |

Each extra file begins with **How to use this material (instructions)** — follow that workflow first.

---

## One-Line Cheat Sheet

```
addEventListener(type, handler, { capture, once, passive })
event.target = deepest element   |   event.currentTarget = element on which listener ran
Bubbling: child → ancestors   |   capture: ancestors → child (if you opt in)
preventDefault() = block default browser action (e.g. form submit, link)
DOMContentLoaded = HTML parsed  |  load = all resources  |  resize/scroll = window (throttle!)
```

---

## Prerequisites

- [1.14 — DOM Manipulation](../1.14-DOM-Manipulation/README.md) — selecting and mutating elements you will attach listeners to
- [1.13 — Introduction to JavaScript](../1.13-Introduction-to-JavaScript/README.md) — functions, `const` / `let`, DevTools

---

*Start with → [1.15.a — addEventListener & Bubbling](./1.15.a-addEventListener-and-Bubbling.md)*
