# 1.13 — Introduction to JavaScript

> **Big Picture:** **JavaScript** is the programming language of the web — it runs in every major browser, powers servers via **Node.js**, and connects **HTML** (structure) and **CSS** (presentation) to **behavior**: validation, animation, data fetching, and full applications. This section is your first step from *markup and styles* to *real programs*.

---

## Overview

| Sub-topic | What You'll Learn |
|-----------|-------------------|
| [1.13.a](./1.13.a-What-is-JavaScript.md) | What JavaScript is, why it powers the web, and how it fits next to HTML/CSS |
| [1.13.b](./1.13.b-Where-JavaScript-Runs.md) | **Browser** vs **Node.js** — same language, different runtimes and APIs |
| [1.13.c](./1.13.c-Linking-JS-with-HTML.md) | The `<script>` tag: inline vs external, `defer` / `async`, placement, modules |
| [1.13.d](./1.13.d-Console-Debugging-and-Testing.md) | **DevTools Console** — `console.log`, errors, expressions, quick experiments |
| [1.13.e](./1.13.e-Variables-let-const-and-var.md) | **`let`**, **`const`**, **`var`** — declaration, reassignment, and **scope** (block vs function) |
| [1.13.f](./1.13.f-Naming-Conventions-and-Clean-Code.md) | Readable names, **camelCase**, constants, comments, and small-program hygiene |
| [1.13.g](./1.13.g-Data-Types-Primitives-and-Objects.md) | **`number`**, **`string`**, **`boolean`**, **`null`**, **`undefined`** — **primitive** vs **non-primitive** |
| [1.13.h](./1.13.h-Mini-Practice-Programs.md) | Calculator, greeting system, **`prompt()`** / **`alert()`** — learning I/O on the page |

### Extra practice & revision

| File | Purpose |
|------|---------|
| [1.13-Exercise-Questions](./1.13-Exercise-Questions.md) | Closed-book questions + small coding drills mapped to `1.13.a`–`1.13.h` |
| [1.13-Interview-Questions](./1.13-Interview-Questions.md) | Model answers: JS role, runtimes, scope, types, script loading |
| [1.13-Quick-Revision](./1.13-Quick-Revision.md) | Compact cheat sheet (print-friendly) |

Each extra file begins with **How to use this material (instructions)** — follow that workflow first.

---

## One-Line Cheat Sheet

```
JS = behavior layer  |  Browser (DOM) vs Node (files, HTTP, CLI)
<script src="app.js" defer></script> before </body>  |  console.log for feedback
let/const (block scope) — prefer const until you need let  |  var = function scope (legacy)
Primitives: number string boolean null undefined bigint symbol  |  Objects: everything else
```

---

## Prerequisites

- [1.5 — Semantic HTML & Browser Rendering](../1.5-Semantic-HTML-and-Browser-Rendering/README.md) — DOM, how the browser loads documents (helps with `<script>` placement)
- [1.6 — CSS Core Fundamentals](../1.6-CSS-Core-Fundamentals/README.md) — optional but useful for thinking in *layers* (HTML/CSS/JS)

---

*Start with → [1.13.a — What is JavaScript?](./1.13.a-What-is-JavaScript.md)*
