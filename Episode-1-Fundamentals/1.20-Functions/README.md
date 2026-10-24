# 1.20 — Functions in JavaScript

> **Big Picture:** **Functions** are the fundamental building blocks of JavaScript programs. They let you **name** and **reuse** blocks of logic, accept **parameters**, **return** values, create **scope boundaries**, and — thanks to **closures** — remember the environment where they were born. Mastering declarations, expressions, arrow syntax, **recursion**, and patterns like **pure functions** and **higher-order functions** is essential for writing clean, maintainable code.

---

## Overview

| Sub-topic | What You'll Learn |
|-----------|-------------------|
| [1.20.a](./1.20.a-Function-Declaration-vs-Expression.md) | **Declaration** vs **expression** syntax, **hoisting**, named vs anonymous, **IIFE**, first-class citizens |
| [1.20.b](./1.20.b-Parameters-and-Arguments.md) | **Default** params, **rest** params, the `arguments` object, **destructured** params, pass-by-value vs reference |
| [1.20.c](./1.20.c-Return-Values-and-Scope.md) | `return` statement, **early return**, **scope chain**, **lexical scoping**, **closures** and real-world patterns |
| [1.20.d](./1.20.d-Arrow-Functions.md) | Arrow syntax, **implicit return**, `this` binding, no `arguments`, when to use arrows vs regular functions |
| [1.20.e](./1.20.e-Writing-Reusable-Logic.md) | **DRY**, **pure functions**, **side effects**, **higher-order functions**, **composition**, naming & JSDoc |
| [1.20.f](./1.20.f-Practice-Problems.md) | Hands-on problems: calculator, converter, factorial, array stats — with hints, solutions, and explanations |
| [1.20.g](./1.20.g-Recursion.md) | **Recursive** thinking, **base case** vs **recursive case**, call stack, classic examples, **tail call optimization** |

### Extra practice & revision

| File | Purpose |
|------|---------|
| [1.20-Exercise-Questions](./1.20-Exercise-Questions.md) | 50+ closed-book questions mapped to `1.20.a`–`1.20.g` |
| [1.20-Interview-Questions](./1.20-Interview-Questions.md) | Beginner / Intermediate / Advanced model answers |
| [1.20-Quick-Revision](./1.20-Quick-Revision.md) | Compact cheat sheet (print-friendly) |

Each extra file begins with **How to use this material (instructions)** — follow that workflow first.

---

## One-Line Cheat Sheet

```
function declaration → hoisted  |  const fn = function → NOT hoisted  |  () => expr → arrow
params vs args  |  ...rest collects  |  default param = value
return exits + sends value  |  no return → undefined
scope: global > function > block  |  closure = fn + its lexical env
arrow: no own this/arguments  |  pure fn: same in → same out, no side effects
recursion: base case + recursive case  |  stack overflow = missing base case
```

---

## Prerequisites

- [1.13 — Introduction to JavaScript](../1.13-Introduction-to-JavaScript/README.md) — variables, data types, DevTools Console
- [1.18 — Operators and Type System](../1.18-Operators-and-Type-System/README.md) — operators, comparisons, type coercion basics
- [1.19 — Conditionals and Loops](../1.19-Conditionals-and-Loops/README.md) — `if`/`else`, `for`, `while` (used in examples)

---

*Start with → [1.20.a — Function Declaration vs Expression](./1.20.a-Function-Declaration-vs-Expression.md)*
