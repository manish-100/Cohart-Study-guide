# 3.14 — Authentication & Authorization (Episode 3)

> **Big Picture:** **Authentication** proves **who** a user is (passwords, tokens, OAuth); **authorization** decides **what** they can do (roles, permissions). Together they form the **security backbone** of every backend: hash passwords with **bcrypt**, issue **JWTs**, protect routes with **middleware**, and plug in **Passport.js** for social login -- all built on **Express** and **MongoDB**.

---

## Overview

| Sub-topic | What You'll Learn |
|-----------|-------------------|
| [3.14.a](./3.14.a-Authentication-vs-Authorization.md) | **Authentication** (identity) vs **authorization** (permissions) -- analogies, flows, and where auth fits in the request lifecycle |
| [3.14.b](./3.14.b-Password-Security-with-Bcrypt.md) | Why **never** store plain-text passwords; **bcrypt** hashing, salts, cost factor, Mongoose pre-save hook |
| [3.14.c](./3.14.c-Session-vs-Token-Authentication.md) | **Session-based** auth with `express-session` vs **token-based** auth with JWT -- comparison, cookies, scaling |
| [3.14.d](./3.14.d-JWT-Authentication.md) | **JWT** deep dive: header/payload/signature, `jsonwebtoken` API, access + refresh tokens, secure storage |
| [3.14.e](./3.14.e-Auth-Middleware.md) | Express **auth middleware**, extracting & verifying tokens, `req.user`, **RBAC** with role/permission checks |
| [3.14.f](./3.14.f-Passport-JS.md) | **Passport.js**: local strategy, Google OAuth 2.0, serialization, combining strategies |

### Extra practice & revision

| File | Purpose |
|------|---------|
| [3.14-Exercise-Questions](./3.14-Exercise-Questions.md) | 50+ practice questions covering passwords, JWT, middleware, RBAC, and Passport |
| [3.14-Interview-Questions](./3.14-Interview-Questions.md) | Model answers for the most common auth interview questions |
| [3.14-Quick-Revision](./3.14-Quick-Revision.md) | One-page cheat sheet for rapid review |

---

## One-Line Cheat Sheet

```
Authentication = "Who are you?"  →  credentials → verify → session/token
Authorization  = "What can you do?" →  identity → check permissions → allow/deny
bcrypt.hash(pw, 12)  →  salted hash      |  bcrypt.compare(pw, hash)  →  boolean
jwt.sign(payload, secret, {expiresIn})    |  jwt.verify(token, secret) →  decoded
Middleware: extractToken → verify → req.user → next()  |  RBAC: authorize('admin')
Passport: strategy(verify) → serialize → session/JWT
```

---

## Prerequisites

- [3.4 — Express.js](../3.4-Express-JS/README.md) -- routing, middleware basics
- [3.6 — Middleware in Express](../3.6-Middleware-in-Express/README.md) -- `next()`, error handling
- [3.8 — Database Basics: MongoDB](../3.8-Database-Basics-MongoDB/README.md) -- Mongoose models, CRUD
- [3.9 — REST API Development](../3.9-REST-API-Development/README.md) -- request/response patterns
- [3.10 — Input Validation](../3.10-Input-Validation/README.md) -- validating user input before processing

---

## Typical Auth Architecture (mental model)

```
Client                        Server                         Database
------                        ------                         --------
POST /register  ─────────►  validate → hash password  ─────► save user
POST /login     ─────────►  find user → compare hash  ─────► lookup
                             ◄── issue JWT / create session
GET /dashboard  ─────────►  auth middleware → verify token
                             authz middleware → check role
                             ◄── 200 protected data
```

---

*Start with -> [3.14.a -- Authentication vs Authorization](./3.14.a-Authentication-vs-Authorization.md)*
