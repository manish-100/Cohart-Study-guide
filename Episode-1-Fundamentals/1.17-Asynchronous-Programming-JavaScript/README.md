# 1.17 — Asynchronous Programming in JavaScript

> **Big Picture:** JavaScript is **single-threaded** but uses an **event loop**, **callbacks**, **Promises**, and **async/await** to handle long-running tasks — network requests, timers, file reads — **without freezing** the UI, enabling responsive web applications.

---

## Overview

| Sub-topic | What You'll Learn |
|-----------|-------------------|
| [1.17.a](./1.17.a-Introduction-to-Asynchrony.md) | What **synchronous vs asynchronous** means, the **event loop**, **call stack**, **callback queue**, and **microtask queue** |
| [1.17.b](./1.17.b-Callbacks-and-Callback-Problems.md) | **Callback functions**, sync vs async callbacks, **callback hell**, **inversion of control**, and error-first patterns |
| [1.17.c](./1.17.c-Understanding-Promises.md) | **Promise states**, `.then()` / `.catch()` / `.finally()`, **chaining**, `Promise.all` / `race` / `allSettled` / `any`, and error propagation |
| [1.17.d](./1.17.d-Async-Await.md) | **`async` functions**, **`await`**, `try...catch` error handling, **sequential vs parallel** execution, and top-level await |
| [1.17.e](./1.17.e-Timers-setInterval-setTimeout.md) | **`setTimeout`**, **`setInterval`**, clearing timers, timer accuracy, `setTimeout(fn, 0)`, recursive setTimeout vs setInterval, and memory leaks |

### Extra practice & revision

| File | Purpose |
|------|---------|
| [1.17-Exercise-Questions](./1.17-Exercise-Questions.md) | 50+ questions: conceptual, code prediction, write-the-code, and debugging exercises mapped to `1.17.a`–`1.17.e` |
| [1.17-Interview-Questions](./1.17-Interview-Questions.md) | Model answers: event loop, microtask vs macrotask, Promise vs callback, async/await error handling, `Promise.all` vs `Promise.allSettled` |
| [1.17-Quick-Revision](./1.17-Quick-Revision.md) | Compact cheat sheet (print-friendly) |

Each extra file begins with **How to use this material (instructions)** — follow that workflow first.

---

## One-Line Cheat Sheet

```
sync = blocking  |  async = non-blocking  |  event loop = dispatcher
callback → Promise → async/await (evolution)
.then/.catch/.finally  |  await pauses only the async function, not the thread
setTimeout(fn, 0) = next macrotask  |  Promise.resolve().then(fn) = next microtask
Promise.all (fail-fast) vs Promise.allSettled (always all results)
```

---

## Prerequisites

- [1.13 — Introduction to JavaScript](../1.13-Introduction-to-JavaScript/README.md) — variables, functions, scope, basic control flow
- [1.20 — Functions](../1.20-Functions/README.md) — first-class functions, closures, higher-order functions

---

*Start with → [1.17.a — Introduction to Asynchrony](./1.17.a-Introduction-to-Asynchrony.md)*
