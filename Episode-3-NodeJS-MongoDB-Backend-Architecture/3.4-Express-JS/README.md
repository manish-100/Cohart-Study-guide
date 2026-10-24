# 3.4 — Express.js

> **Big Picture:** **Express.js** is the most widely used **web framework for Node.js** — a minimal, unopinionated layer on top of Node's built-in `http` module that gives you **routing**, **middleware**, **response helpers**, and **static file serving** out of the box. This section teaches you how to create servers, handle requests, return responses, and structure real-world back-end applications with Express.

---

## Overview

| Sub-topic | What You'll Learn |
|-----------|-------------------|
| [3.4.a](./3.4.a-What-is-ExpressJS.md) | What Express is, why it exists, how it compares to raw `http` and other frameworks |
| [3.4.b](./3.4.b-Setting-Up-Express-Server.md) | Creating your first Express server — every line explained, project structure, nodemon |
| [3.4.c](./3.4.c-Returning-Responses.md) | `res.send()`, `res.json()`, `res.status()`, redirects, headers, cookies, response patterns |
| [3.4.d](./3.4.d-Query-Parameters-and-URL-Parameters.md) | Route params (`:id`), query strings (`?q=...`), wildcards, validation |
| [3.4.e](./3.4.e-HTTP-Methods-and-Request-Body.md) | GET, POST, PUT, PATCH, DELETE — body parsing, idempotency, full CRUD |
| [3.4.f](./3.4.f-Serving-Static-Files.md) | `express.static()`, virtual paths, cache control, SPA fallback |

### Extra practice & revision

| File | Purpose |
|------|---------|
| [3.4-Exercise-Questions](./3.4-Exercise-Questions.md) | 50+ closed-book questions + coding drills mapped to `3.4.a`–`3.4.f` |
| [3.4-Interview-Questions](./3.4-Interview-Questions.md) | Model answers for common Express interview questions |
| [3.4-Quick-Revision](./3.4-Quick-Revision.md) | Compact cheat sheet (print-friendly) |

Each extra file begins with **How to use this material (instructions)** — follow that workflow first.

---

## One-Line Cheat Sheet

```
npm install express  |  const app = express()  |  app.listen(PORT)
app.get('/path', handler)  |  req.params  req.query  req.body
res.json({ data })  |  res.status(404).json({ error })
express.json() for body  |  express.static('public') for files
```

---

## Prerequisites

- [3.1 — Starting with Node.js](../3.1-Starting-with-NodeJS/README.md) — Node fundamentals, `require`/`import`, npm
- [3.2 — Creating Server](../3.2-Creating-Server/README.md) — raw `http` module (Express builds on this)
- [3.3 — Backend Architectures](../3.3-Backend-Architectures/README.md) — MVC, layered architecture patterns

---

*Start with -> [3.4.a — What is Express.js?](./3.4.a-What-is-ExpressJS.md)*
