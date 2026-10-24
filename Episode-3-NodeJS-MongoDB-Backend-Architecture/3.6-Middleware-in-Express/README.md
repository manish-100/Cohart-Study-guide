# 3.6 — Middleware in Express

> **Big Picture:** **Middleware** is the backbone of every Express.js application — functions that sit between the incoming **request** and the outgoing **response**, forming a processing pipeline. They parse bodies, authenticate users, log requests, handle errors, and shape every HTTP interaction. Mastering middleware is mastering Express itself.

---

## Overview

| Sub-topic | What You'll Learn |
|-----------|-------------------|
| [3.6.a](./3.6.a-Understanding-Middleware.md) | What middleware is, the `(req, res, next)` signature, the pipeline concept, and why `next()` matters |
| [3.6.b](./3.6.b-Types-of-Middleware.md) | Built-in (`express.json`, `express.static`), third-party (`cors`, `helmet`, `morgan`), and custom middleware |
| [3.6.c](./3.6.c-Application-Level-Middleware.md) | `app.use()` for global and path-specific middleware, execution order, and real-world patterns |
| [3.6.d](./3.6.d-Router-Level-Middleware.md) | `express.Router()`, scoped middleware, mounting routers, and organizing large apps |
| [3.6.e](./3.6.e-Custom-Middleware-Patterns.md) | Writing loggers, auth guards, validators, middleware factories, async patterns, and `res.locals` |
| [3.6.f](./3.6.f-Error-Handling-and-Security-Middleware.md) | The 4-parameter error handler, `next(err)`, `helmet`, `cors` config, rate limiting, and security best practices |

### Extra practice & revision

| File | Purpose |
|------|---------|
| [3.6-Exercise-Questions](./3.6-Exercise-Questions.md) | 40+ closed-book questions + coding drills mapped to `3.6.a`--`3.6.f` |
| [3.6-Interview-Questions](./3.6-Interview-Questions.md) | Model answers for middleware concepts frequently asked in Node.js interviews |
| [3.6-Quick-Revision](./3.6-Quick-Revision.md) | Compact cheat sheet (print-friendly) |

Each extra file begins with **How to use this material (instructions)** -- follow that workflow first.

---

## One-Line Cheat Sheet

```
Middleware = (req, res, next) => { /* modify req/res, then next() or res.send() */ }
app.use(mw)         -> global   |  app.use('/path', mw)  -> path-scoped
router.use(mw)      -> router-scoped  |  app.use('/api', router) -> mount
Built-in: express.json() express.urlencoded() express.static()
Security: helmet() cors() rateLimit()  |  Errors: (err, req, res, next)
Order matters: first app.use() = first to execute  |  Always call next() or send response
```

---

## Prerequisites

- [3.4 — Express.js](../3.4-Express-JS/README.md) -- routes, `req`/`res` objects, basic server setup
- [3.2 — Creating Server](../3.2-Creating-Server/README.md) -- HTTP fundamentals, request/response cycle
- [3.1 — Starting with Node.js](../3.1-Starting-with-NodeJS/README.md) -- Node basics, npm, `require`/`import`

---

*Start with -> [3.6.a -- Understanding Middleware](./3.6.a-Understanding-Middleware.md)*
