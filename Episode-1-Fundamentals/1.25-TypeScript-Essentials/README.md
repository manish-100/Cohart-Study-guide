# 1.25 — TypeScript Essentials

> **Big Picture:** **TypeScript** adds a **static type system** on top of JavaScript — catching bugs at **compile time**, powering **IDE intelligence** (autocomplete, refactoring), and serving as **living documentation** — while compiling down to **plain JS** that runs anywhere JavaScript runs.

---

## Overview

| Sub-topic | What You'll Learn |
|-----------|-------------------|
| [1.25.a](./1.25.a-What-is-TypeScript.md) | What TypeScript is, why it exists, TS vs JS, the compilation step, and real-world adoption |
| [1.25.b](./1.25.b-Thinking-in-TypeScript.md) | Types-first mindset, type-driven development, reading errors, gradual typing, `any` escape hatch |
| [1.25.c](./1.25.c-Installing-and-Setting-Up.md) | Installing TS, `tsc --init`, compiling, watch mode, ts-node, VS Code setup, `@types/*` packages |
| [1.25.d](./1.25.d-Basic-Types.md) | `string`, `number`, `boolean`, `any`, `unknown`, `void`, `never`, arrays, tuples, enums, literals, assertions |
| [1.25.e](./1.25.e-Interfaces-vs-Type-Aliases.md) | `interface` vs `type`, extends vs intersection, declaration merging, optional/readonly properties |
| [1.25.f](./1.25.f-Union-and-Intersection-Types.md) | Union `\|`, intersection `&`, type narrowing, discriminated unions, strict null checks |
| [1.25.g](./1.25.g-Generic-Functions.md) | Generic syntax `<T>`, type parameters, inference, constraints, built-in generic types |
| [1.25.h](./1.25.h-Generic-Interfaces-and-Constraints.md) | Generic interfaces, `keyof`, mapped types, utility types (`Partial`, `Pick`, `Omit`, `Record`) |
| [1.25.i](./1.25.i-TypeScript-Tooling.md) | Language Server, VS Code features, Playground, ts-node, tsx, build tools, `.d.ts` files, source maps |
| [1.25.j](./1.25.j-tsconfig-Explained.md) | `tsconfig.json` options: `target`, `module`, `strict`, `outDir`, `lib`, `jsx`, common configs |
| [1.25.k](./1.25.k-TypeScript-Compiler.md) | `tsc` usage, watch mode, `--noEmit`, compiler errors, tsc vs tsx vs ts-node, build pipelines |
| [1.25.l](./1.25.l-Linting-and-Formatting.md) | ESLint + TypeScript, Prettier, eslint-config-prettier, husky, lint-staged, CI pipelines |

### Extra practice & revision

| File | Purpose |
|------|---------|
| [1.25-Exercise-Questions](./1.25-Exercise-Questions.md) | 50+ closed-book questions mapped to `1.25.a`–`1.25.l` |
| [1.25-Interview-Questions](./1.25-Interview-Questions.md) | Model answers: Beginner / Intermediate / Advanced |
| [1.25-Quick-Revision](./1.25-Quick-Revision.md) | Compact cheat sheet — type syntax, tsconfig options, utility types (print-friendly) |

Each extra file begins with **How to use this material (instructions)** — follow that workflow first.

---

## One-Line Cheat Sheet

```
TS = JS + static types  |  .ts → tsc → .js  |  every JS file is valid TS
string, number, boolean  |  interface = object shape  |  type = alias for any type
union A | B  |  intersection A & B  |  generic <T>  |  Partial<T>, Pick<T,K>, Omit<T,K>
tsconfig.json  |  strict: true  |  npx tsc --watch  |  @types/* for JS libs
```

---

## Prerequisites

- [1.13 — Introduction to JavaScript](../1.13-Introduction-to-JavaScript/README.md) — variables, functions, objects, arrays
- [1.20 — Functions](../1.20-Functions/README.md) — function syntax, arrow functions, parameters
- [1.23 — Objects](../1.23-Objects/README.md) — object literals, properties, methods

---

*Start with → [1.25.a — What is TypeScript](./1.25.a-What-is-TypeScript.md)*
