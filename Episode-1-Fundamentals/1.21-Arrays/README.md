# 1.21 — JavaScript Arrays

> **Big Picture:** An **array** is JavaScript's built-in ordered collection. You create arrays with **literals** or **factory methods**, access elements by **zero-based index**, add/remove items with **push/pop/shift/unshift**, loop with **for**, **for...of**, or **while**, and nest arrays to model **grids and matrices** — forming the backbone of nearly every data-driven program.

---

## Overview

| Sub-topic | What You'll Learn |
|-----------|-------------------|
| [1.21.a](./1.21.a-Creating-Arrays.md) | **Literal syntax**, **`new Array()`** quirks, **`Array.of()`**, **`Array.from()`**, mixed types, reference behavior, const arrays, sparse arrays |
| [1.21.b](./1.21.b-Accessing-Elements.md) | **Zero-based indexing**, **bracket notation**, **`at()`**, out-of-bounds behavior, **destructuring**, **swapping**, finding elements |
| [1.21.c](./1.21.c-Array-Operations.md) | **`push`/`pop`/`unshift`/`shift`**, **`concat`**, **spread merge**, **`reverse`**, **`fill`**, **`copyWithin`**, mutating vs non-mutating |
| [1.21.d](./1.21.d-Length-Property.md) | **`length`** semantics, truncation, expansion, sparse arrays, empty checks, common patterns |
| [1.21.e](./1.21.e-Basic-Iteration.md) | **`for`** loop, **`for...of`**, **`for...in`** pitfalls, **`while`** loop, getting index with **`entries()`**, breaking out, iterating backwards |
| [1.21.f](./1.21.f-Practice-Problems.md) | Hands-on problems: todo list, max/min finder, sum, duplicates, reverse, merge sorted, second largest |
| [1.21.g](./1.21.g-Multidimensional-Arrays.md) | **2D arrays** (matrices), nested access, nested loops, jagged arrays, game boards, matrix operations |

### Extra practice & revision

| File | Purpose |
|------|---------|
| [1.21-Exercise-Questions](./1.21-Exercise-Questions.md) | 50+ closed-book questions mapped to `1.21.a`--`1.21.g` |
| [1.21-Interview-Questions](./1.21-Interview-Questions.md) | Model answers: creation, indexing, mutation, iteration, multidimensional |
| [1.21-Quick-Revision](./1.21-Quick-Revision.md) | Compact cheat sheet (print-friendly) |

Each extra file begins with **How to use this material (instructions)** -- follow that workflow first.

---

## One-Line Cheat Sheet

```
Array = ordered, zero-indexed, dynamic-length  |  typeof [] === "object"
[1,2,3]  |  Array.of(3)  |  Array.from(iterable)
arr[0]  |  arr.at(-1)  |  const [a,...rest] = arr
push/pop (end, O(1))  |  unshift/shift (start, O(n))
for (let i=0; i<arr.length; i++)  |  for (const v of arr)
matrix[row][col]  |  nested for-loops for 2D
```

---

## Prerequisites

- [1.13 -- Introduction to JavaScript](../1.13-Introduction-to-JavaScript/README.md) -- variables, `const`/`let`, primitive types, DevTools Console
- [1.18 -- Operators and Type System](../1.18-Operators-and-Type-System/README.md) -- `typeof`, comparison operators
- [1.19 -- Conditionals and Loops](../1.19-Conditionals-and-Loops/README.md) -- `for`, `while`, `if/else`

---

*Start with -> [1.21.a -- Creating Arrays](./1.21.a-Creating-Arrays.md)*
