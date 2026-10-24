# 1.19 — Conditionals and Loops

> **Big Picture:** **Conditionals** let your code make decisions (`if`, `else if`, `else`, `switch`), and **loops** let it repeat work (`for`, `while`, `do...while`). Together with **`break`**, **`continue`**, and control-flow patterns like **guard clauses**, they form the backbone of every algorithm you will ever write in JavaScript.

---

## Overview

| Sub-topic | What You'll Learn |
|-----------|-------------------|
| [1.19.a](./1.19.a-If-Else-If-Else-Branching.md) | **`if`**, **`else if`**, **`else`**, **ternary operator**, guard clauses, and early returns |
| [1.19.b](./1.19.b-Switch-Statement.md) | **`switch`** / **`case`** / **`break`** / **`default`**, fall-through, and when to choose switch over if-else |
| [1.19.c](./1.19.c-For-Loop.md) | Classic **`for`** loop anatomy, **`for...of`**, **`for...in`**, nested loops, and the `let` vs `var` closure trap |
| [1.19.d](./1.19.d-While-and-Do-While-Loops.md) | **`while`** vs **`do...while`**, infinite loops, sentinel-controlled loops, and when to prefer while over for |
| [1.19.e](./1.19.e-Break-and-Continue.md) | **`break`**, **`continue`**, labeled statements, **`return`** inside loops, and readability trade-offs |
| [1.19.f](./1.19.f-Practice-Problems.md) | Hands-on problems: FizzBuzz, prime check, Fibonacci, pattern printing, palindrome, and more |

### Extra practice & revision

| File | Purpose |
|------|---------|
| [1.19-Exercise-Questions](./1.19-Exercise-Questions.md) | 50+ closed-book questions mapped to `1.19.a`--`1.19.f` |
| [1.19-Interview-Questions](./1.19-Interview-Questions.md) | Model answers: Beginner / Intermediate / Advanced |
| [1.19-Quick-Revision](./1.19-Quick-Revision.md) | Compact cheat sheet (print-friendly) |

Each extra file begins with **How to use this material (instructions)** -- follow that workflow first.

---

## One-Line Cheat Sheet

```
if / else if / else  |  switch (expr) { case v: ... break; default: }
for (init; test; update)  |  for...of (values)  |  for...in (keys — objects only)
while (test) { }  |  do { } while (test)  — runs at least once
break = exit loop  |  continue = skip iteration  |  label: for ... break label
```

---

## Prerequisites

- [1.13 -- Introduction to JavaScript](../1.13-Introduction-to-JavaScript/README.md) -- variables, `const`/`let`, basic types, DevTools Console
- [1.18 -- Operators and Type System](../1.18-Operators-and-Type-System/README.md) -- comparison operators, truthy/falsy, type coercion

---

*Start with --> [1.19.a -- If / Else If / Else Branching](./1.19.a-If-Else-If-Else-Branching.md)*
