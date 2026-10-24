# 1.23 — JavaScript Objects

> **Big Picture:** **Objects** are JavaScript's primary tool for grouping related data and behavior into **key-value pairs**. From user profiles to API responses, nearly every real-world data structure maps to an object — and understanding how to **create**, **read**, **update**, **delete**, and **iterate** object properties is foundational to every JS codebase.

---

## Overview

| Sub-topic | What You'll Learn |
|-----------|-------------------|
| [1.23.a](./1.23.a-What-is-an-Object.md) | What objects are, **literal syntax**, reference vs primitive types, and when to use objects vs arrays |
| [1.23.b](./1.23.b-Key-Value-Pairs.md) | **Properties**, **methods**, shorthand syntax, **computed keys**, **Symbol keys**, and `this` basics |
| [1.23.c](./1.23.c-Accessing-Properties.md) | **Dot** vs **bracket** notation, **optional chaining** `?.`, **nullish coalescing** `??`, and dynamic access |
| [1.23.d](./1.23.d-Adding-and-Deleting-Properties.md) | **Adding**, **modifying**, **deleting** properties, existence checks, **spread** updates, `Object.assign` |
| [1.23.e](./1.23.e-Nested-Objects.md) | **Deep structures**, safe access, **shallow vs deep copy**, `structuredClone`, immutable update patterns |
| [1.23.f](./1.23.f-Looping-Through-Keys.md) | **`for...in`**, **`Object.keys`**, **`Object.values`**, **`Object.entries`**, property order rules |
| [1.23.g](./1.23.g-Practice-Problems.md) | **8 hands-on problems** — user profiles, shopping carts, nested grades, object comparison |

### Extra practice & revision

| File | Purpose |
|------|---------|
| [1.23-Exercise-Questions](./1.23-Exercise-Questions.md) | 50+ closed-book questions mapped to `1.23.a`–`1.23.f` |
| [1.23-Interview-Questions](./1.23-Interview-Questions.md) | Model answers: Beginner / Intermediate / Advanced tiers |
| [1.23-Quick-Revision](./1.23-Quick-Revision.md) | Compact cheat sheet (print-friendly) |

Each extra file begins with **How to use this material (instructions)** — follow that workflow first.

---

## One-Line Cheat Sheet

```
Object = { key: value }  |  dot: obj.key  |  bracket: obj['key']
?.  optional chain  |  ?? nullish default  |  delete obj.key (removes)  |  'key' in obj (checks)
{ ...obj } shallow copy  |  structuredClone(obj) deep copy
Object.keys / values / entries  |  for...in (+ hasOwnProperty guard)
```

---

## Prerequisites

- [1.13 — Introduction to JavaScript](../1.13-Introduction-to-JavaScript/README.md) — variables, `const`/`let`, basic types
- [1.18 — Operators and Type System](../1.18-Operators-and-Type-System/README.md) — `typeof`, equality, type coercion
- [1.20 — Functions](../1.20-Functions/README.md) — function expressions, arrow functions (for methods)
- [1.21 — Arrays](../1.21-Arrays/README.md) — ordered collections (contrast with keyed objects)

---

*Start with → [1.23.a — What is an Object?](./1.23.a-What-is-an-Object.md)*
