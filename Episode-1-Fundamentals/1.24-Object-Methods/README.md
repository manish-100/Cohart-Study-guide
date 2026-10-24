# 1.24 — Object Methods in JavaScript

> **Big Picture:** JavaScript objects are more than key-value bags. **Static methods** on the `Object` constructor let you **inspect**, **copy**, **freeze**, **seal**, and **transform** objects — giving you fine-grained control over data shape, immutability, and iteration that goes far beyond simple dot-notation access.

---

## Overview

| Sub-topic | What You'll Learn |
|-----------|-------------------|
| [1.24.a](./1.24.a-Object-entries.md) | **`Object.entries`** — convert an object into an array of `[key, value]` pairs for iteration and transformation |
| [1.24.b](./1.24.b-Object-assign.md) | **`Object.assign`** — copy and merge properties between objects (shallow), plus spread comparison |
| [1.24.c](./1.24.c-Object-freeze.md) | **`Object.freeze`** — make an object completely immutable (shallow), and the deep-freeze pattern |
| [1.24.d](./1.24.d-Object-fromEntries.md) | **`Object.fromEntries`** — build an object from `[key, value]` pairs (inverse of `entries`) |
| [1.24.e](./1.24.e-Object-is.md) | **`Object.is`** — strict equality with edge-case fixes for `NaN` and signed zeros |
| [1.24.f](./1.24.f-Object-keys.md) | **`Object.keys`** — get an array of own enumerable property names, iteration patterns |
| [1.24.g](./1.24.g-Object-seal.md) | **`Object.seal`** — prevent adding/deleting properties while still allowing value changes |
| [1.24.h](./1.24.h-Object-values.md) | **`Object.values`** — get an array of own enumerable values for aggregation and searching |

### Extra practice & revision

| File | Purpose |
|------|---------|
| [1.24-Exercise-Questions](./1.24-Exercise-Questions.md) | 50+ closed-book questions + coding drills mapped to `1.24.a`-`1.24.h` |
| [1.24-Interview-Questions](./1.24-Interview-Questions.md) | Model answers: shallow vs deep copy, freeze vs seal, entries/fromEntries pipelines |
| [1.24-Quick-Revision](./1.24-Quick-Revision.md) | Compact cheat sheet with all 8 methods in comparison tables (print-friendly) |

Each extra file begins with **How to use this material (instructions)** — follow that workflow first.

---

## One-Line Cheat Sheet

```
Object.keys/values/entries = own enumerable props  |  Object.fromEntries = inverse of entries
Object.assign(target, ...src) = shallow merge (mutates target)  |  {...obj} = spread clone
Object.freeze = immutable (shallow)  |  Object.seal = fixed shape, mutable values
Object.is(a, b) = === but NaN===NaN true, +0!==-0
```

---

## Prerequisites

- [1.23 — Objects](../1.23-Objects/README.md) — object literals, dot/bracket access, property descriptors
- [1.21 — Arrays](../1.21-Arrays/README.md) — array basics, destructuring
- [1.22 — Array Methods](../1.22-Array-Methods/README.md) — `map`, `filter`, `reduce` (used in transformation pipelines)

---

*Start with -> [1.24.a — Object.entries](./1.24.a-Object-entries.md)*
