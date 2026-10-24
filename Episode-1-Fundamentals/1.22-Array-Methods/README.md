# 1.22 — Array Methods

> **Big Picture:** JavaScript arrays ship with dozens of **built-in methods** that let you **transform**, **filter**, **accumulate**, **sort**, and **reshape** data without writing manual loops — mastering them is the single biggest unlock for writing clean, readable, production-quality JavaScript.

---

## Overview

| Sub-topic | What You'll Learn |
|-----------|-------------------|
| [1.22.a](./1.22.a-map.md) | **`map()`** — transform every element into a new array |
| [1.22.b](./1.22.b-filter.md) | **`filter()`** — select elements that pass a test |
| [1.22.c](./1.22.c-reduce.md) | **`reduce()`** — accumulate all values into a single output |
| [1.22.d](./1.22.d-forEach.md) | **`forEach()`** — run a side-effect for each element (returns nothing) |
| [1.22.e](./1.22.e-some-and-every.md) | **`some()`** and **`every()`** — boolean tests across an array |
| [1.22.f](./1.22.f-slice-and-splice.md) | **`slice()`** vs **`splice()`** — extracting and mutating portions |
| [1.22.g](./1.22.g-sort.md) | **`sort()`** — ordering elements (and the lexicographic trap) |
| [1.22.h](./1.22.h-flat.md) | **`flat()`** and **`flatMap()`** — flattening nested arrays |
| [1.22.i](./1.22.i-Functional-Thinking.md) | **Functional thinking** — chaining, immutability, and pipelines |
| [1.22.j](./1.22.j-Practice-Problems.md) | **Practice problems** — guided exercises with solutions |

### Extra practice & revision

| File | Purpose |
|------|---------|
| [1.22-Exercise-Questions](./1.22-Exercise-Questions.md) | 50+ closed-book questions mapped to `1.22.a`–`1.22.j` |
| [1.22-Interview-Questions](./1.22-Interview-Questions.md) | Model answers: Beginner / Intermediate / Advanced tiers |
| [1.22-Quick-Revision](./1.22-Quick-Revision.md) | Compact cheat sheet with method comparison tables (print-friendly) |

Each extra file begins with **How to use this material (instructions)** — follow that workflow first.

---

## One-Line Cheat Sheet

```
map = transform   |  filter = select   |  reduce = accumulate  |  forEach = side-effect (no return)
some = any true?   |  every = all true?  |  slice = copy portion (safe)  |  splice = mutate in place
sort mutates! (use toSorted for safety)  |  flat/flatMap = unnest  |  chain: filter → map → reduce
```

---

## Prerequisites

- [1.21 — Arrays](../1.21-Arrays/README.md) — array creation, indexing, length, basic iteration
- [1.20 — Functions](../1.20-Functions/README.md) — arrow functions, callbacks, return values
- [1.19 — Conditionals and Loops](../1.19-Conditionals-and-Loops/README.md) — `for`, `for...of`, truthiness

---

*Start with → [1.22.a — map()](./1.22.a-map.md)*
