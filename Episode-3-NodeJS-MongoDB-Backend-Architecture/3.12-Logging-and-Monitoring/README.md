# 3.12 — Logging and Monitoring

> **Logging is your application's black box recorder. When things go wrong in production — and they will — logs are the first place you look. Good logging practices mean the difference between debugging in minutes and debugging in days.**

---

## Navigation

| File | Topic | Key Concepts |
|------|-------|-------------|
| [3.12.a](./3.12.a-Why-Logging-Matters.md) | Why Logging Matters | Log levels, structured logging, what to log |
| [3.12.b](./3.12.b-Logging-Libraries.md) | Logging Libraries | Winston, Pino, Morgan, daily rotation |
| [3.12.c](./3.12.c-Error-Handling-and-Logging.md) | Error Handling & Logging | Stack traces, request IDs, Sentry, ELK |
| [3.12-Exercise-Questions.md](./3.12-Exercise-Questions.md) | Exercises | 25+ hands-on questions |
| [3.12-Interview-Questions.md](./3.12-Interview-Questions.md) | Interview Prep | Common interview topics |
| [3.12-Quick-Revision.md](./3.12-Quick-Revision.md) | Quick Revision | Cheat sheet and summary |

---

## Prerequisites

- Node.js and Express fundamentals (Episode 3.3-3.5)
- Middleware concepts (Episode 3.6)
- Error handling basics (Episode 3.7)
- Environment variables and configuration

---

## Overview

This section covers everything you need to implement production-grade logging:

1. **Why Logging Matters** — log levels, structured vs unstructured, what to log and what never to log
2. **Logging Libraries** — Winston (most popular), Pino (fastest), Morgan (HTTP request logging)
3. **Error Handling and Logging** — centralized error logging, request ID correlation, external monitoring tools

---

## Cheat Sheet

```js
// Winston — basic setup
const winston = require("winston");
const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  transports: [
    new winston.transports.File({ filename: "error.log", level: "error" }),
    new winston.transports.File({ filename: "combined.log" }),
  ],
});

// Morgan — HTTP request logging
const morgan = require("morgan");
app.use(morgan("combined"));

// Pino — fastest logger
const pino = require("pino");
const logger = pino({ level: "info" });
```

| Log Level | When to Use | Example |
|-----------|------------|---------|
| `error` | Something failed and needs attention | Database connection lost |
| `warn` | Something unexpected but not critical | Deprecated API usage |
| `info` | Normal operations worth recording | User logged in, order placed |
| `http` | HTTP request/response logging | GET /api/users 200 45ms |
| `debug` | Detailed info for debugging | Variable values, function entry/exit |
| `silly` | Extremely verbose tracing | Every loop iteration |

---

## Key Principle

> **Log for your future self at 3 AM.** When production breaks, you need logs that tell you what happened, when, and with what context. Structured, leveled, searchable logs are not a luxury — they are a necessity.
