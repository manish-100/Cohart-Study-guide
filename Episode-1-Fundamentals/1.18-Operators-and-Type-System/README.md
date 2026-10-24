# 1.18 — Operators and the Type System

> **Big Picture:** JavaScript **operators** perform arithmetic, compare values, combine booleans, and assign results — but every operation is shaped by the language's **dynamic type system**, where **type coercion**, **truthy/falsy** rules, and the quirky **`typeof`** operator can produce surprising results unless you understand the underlying mechanics.

---

## Overview

| Sub-topic | What You'll Learn |
|-----------|-------------------|
| [1.18.a](./1.18.a-Arithmetic-Operators.md) | `+`, `-`, `*`, `/`, `%`, `**`, increment/decrement, precedence, `NaN`, and `Infinity` |
| [1.18.b](./1.18.b-Comparison-Operators.md) | `==` vs `===`, relational operators, the abstract equality algorithm, and edge cases like `NaN === NaN` |
| [1.18.c](./1.18.c-Logical-Operators.md) | `&&`, `||`, `!`, `??` (nullish coalescing), short-circuit evaluation, guard and default-value patterns |
| [1.18.d](./1.18.d-Assignment-Operators.md) | `=`, compound assignment (`+=`, `-=`, …), logical assignment (`&&=`, `||=`, `??=`), and destructuring preview |
| [1.18.e](./1.18.e-typeof-Operator.md) | `typeof` return values, the `typeof null` bug, `instanceof`, `Array.isArray()`, and type-checking patterns |
| [1.18.f](./1.18.f-Truthy-and-Falsy-Values.md) | The 8 falsy values, truthy surprises (`[]`, `"0"`), coercion traps, and best practices for conditionals |
| [1.18.g](./1.18.g-Type-Coercion.md) | Implicit vs explicit coercion, the `+` operator's dual role, `Number()`, `String()`, `Boolean()`, and why `[] + {}` behaves the way it does |

### Extra practice & revision

| File | Purpose |
|------|---------|
| [1.18-Exercise-Questions](./1.18-Exercise-Questions.md) | 55+ closed-book questions + code-prediction and debugging tasks mapped to `1.18.a`–`1.18.g` |
| [1.18-Interview-Questions](./1.18-Interview-Questions.md) | Model answers: `==` vs `===`, coercion, truthy/falsy, `typeof`, nullish coalescing, and more |
| [1.18-Quick-Revision](./1.18-Quick-Revision.md) | Compact cheat sheet (print-friendly) |

Each extra file begins with **How to use this material (instructions)** — follow that workflow first.

---

## One-Line Cheat Sheet

```
+ - * / % **  |  == != === !==  |  > < >= <=
&& || ! ??  |  = += -= *= /= %= **= &&= ||= ??=
typeof x → string  |  typeof null === 'object' (bug)
Falsy: false, 0, -0, 0n, "", null, undefined, NaN  |  everything else truthy
"5" + 3 → "53" (string wins)  |  "5" - 3 → 2 (number wins)  |  always prefer explicit coercion
```

---

## Prerequisites

- [1.13 — Introduction to JavaScript](../1.13-Introduction-to-JavaScript/README.md) — variables, `const`/`let`, primitive types, DevTools Console

---

*Start with → [1.18.a — Arithmetic Operators](./1.18.a-Arithmetic-Operators.md)*
