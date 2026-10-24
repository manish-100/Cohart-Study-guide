# 3.9 — REST API Development

> **Big Picture:** REST APIs are the backbone of modern web applications. They define how clients and servers communicate over HTTP using a resource-oriented architecture. This section covers REST principles, versioning strategies, testing with Postman, status codes in real applications, input validation, and API security — everything you need to build production-grade APIs with Express and Node.js.

---

## Overview

| Sub-topic | What You'll Learn |
|-----------|-------------------|
| [3.9.a](./3.9.a-What-is-a-REST-API.md) | REST architectural style, 6 constraints, resources/URIs, Richardson Maturity Model, REST vs SOAP vs GraphQL |
| [3.9.b](./3.9.b-API-Versioning.md) | URL/header/query versioning strategies, Express Router structure for v1/v2, deprecation patterns |
| [3.9.c](./3.9.c-Postman-for-API-Testing.md) | Postman interface, requests, collections, environments, test scripts, collection runner, team sharing |
| [3.9.d](./3.9.d-Status-Codes-in-Practice.md) | 2xx/4xx/5xx patterns in real APIs, decision flowchart, consistent error response format in Express |
| [3.9.e](./3.9.e-Input-Validation-and-Sanitization.md) | express-validator, Zod schemas, sanitization, validation middleware pattern, real registration examples |
| [3.9.f](./3.9.f-API-Security.md) | Rate limiting, XSS/CSRF/injection prevention, helmet, CORS, OWASP Top 10, security headers checklist |

### Extra practice & revision

| File | Purpose |
|------|---------|
| [3.9-Exercise-Questions](./3.9-Exercise-Questions.md) | 50+ practice questions + coding drills across all 3.9 subtopics |
| [3.9-Interview-Questions](./3.9-Interview-Questions.md) | Model answers for common REST API interview prompts |
| [3.9-Quick-Revision](./3.9-Quick-Revision.md) | Compact cheat sheet (print-friendly) |

Each extra file begins with **How to use this material (instructions)** — follow that workflow first.

---

## One-Line Cheat Sheet

```
REST        = architectural style: stateless, resource-oriented, HTTP methods map to CRUD
Versioning  = URL (/api/v1/) most common; header and query param alternatives exist
Postman     = GUI tool for building, testing, and documenting API requests
Status Code = 2xx success, 4xx client fault, 5xx server fault — pick precisely
Validation  = ALWAYS server-side; express-validator or Zod; sanitize inputs
Security    = rate-limit + helmet + CORS + input validation + size limits
```

---

## Prerequisites

- [3.4 — Express.js](../3.4-Express-JS/README.md) — routing, middleware, request/response objects
- [3.6 — Middleware in Express](../3.6-Middleware-in-Express/README.md) — how middleware chains work
- [3.8 — Database Basics: MongoDB](../3.8-Database-Basics-MongoDB/README.md) — Mongoose models, CRUD operations
- [1.4 — Understanding HTTP & HTTPS](../../Episode-1-Fundamentals/1.4-Understanding-HTTP-and-HTTPS/README.md) — HTTP methods, status codes, headers

---

*Start with -> [3.9.a — What is a REST API](./3.9.a-What-is-a-REST-API.md)*
