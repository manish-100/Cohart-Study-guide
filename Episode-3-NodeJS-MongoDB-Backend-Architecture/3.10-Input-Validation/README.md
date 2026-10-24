# 3.10 — Input Validation

> **Never trust user input. Validation is the first line of defense for every backend application — protecting data integrity, security, and user experience.**

---

## Navigation

| File | Topic | Key Concepts |
|------|-------|-------------|
| [3.10.a](./3.10.a-Why-Validation-Matters.md) | Why Validation Matters | Data integrity, security, defense in depth |
| [3.10.b](./3.10.b-Express-Validator.md) | Express Validator | Field validators, chains, schemas, middleware |
| [3.10.c](./3.10.c-Zod-Validation.md) | Zod Validation | TypeScript-first schemas, parse/safeParse |
| [3.10.d](./3.10.d-Error-Response-Format.md) | Error Response Format | Standard structures, status codes, i18n |
| [3.10-Exercise-Questions.md](./3.10-Exercise-Questions.md) | Exercises | 30+ hands-on questions |
| [3.10-Interview-Questions.md](./3.10-Interview-Questions.md) | Interview Prep | Common interview topics |
| [3.10-Quick-Revision.md](./3.10-Quick-Revision.md) | Quick Revision | Cheat sheet and summary |

---

## Prerequisites

- Node.js and Express basics (Episode 3.1-3.5)
- Middleware concepts (Episode 3.6)
- REST API design (Episode 3.7)
- Basic understanding of HTTP status codes

---

## Overview

Input validation ensures that data entering your application meets expected formats, types, and constraints before it reaches your business logic or database. Without validation, applications are vulnerable to injection attacks, data corruption, crashes, and poor user experiences.

This section covers:
1. **Why validation matters** — real-world consequences of missing validation
2. **Express Validator** — the most popular validation library for Express
3. **Zod** — modern TypeScript-first schema validation
4. **Error Response Format** — standardizing how validation errors reach clients

---

## Cheat Sheet

```bash
# Install express-validator
npm install express-validator

# Install Zod
npm install zod
```

```js
// Express Validator — quick example
const { body, validationResult } = require('express-validator');

app.post('/register',
  body('email').isEmail().normalizeEmail(),
  body('password').isStrongPassword(),
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // proceed with registration
  }
);

// Zod — quick example
const { z } = require('zod');

const UserSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  age: z.number().min(13).max(120),
});

const result = UserSchema.safeParse(req.body);
if (!result.success) {
  return res.status(400).json({ errors: result.error.issues });
}
```

| Validator | Best For | Type Safety | Bundle Size |
|-----------|----------|-------------|-------------|
| express-validator | Express-specific projects | No | ~50KB |
| Zod | TypeScript projects, any framework | Yes | ~13KB |
| Joi | Hapi ecosystem, complex schemas | No | ~150KB |

---

## Key Principle

> **Validate at every boundary.** Client-side validation improves UX. Server-side validation enforces rules. Database-level validation is the last safety net. Never rely on just one layer.
