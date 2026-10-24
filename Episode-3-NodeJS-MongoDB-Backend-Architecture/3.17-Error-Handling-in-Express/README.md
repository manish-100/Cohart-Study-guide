# 3.17 — Error Handling in Express

> **Master the art of catching, classifying, and responding to errors in Express applications -- from basic try-catch blocks and the `next(err)` pattern to centralized error handlers, custom error classes, and the asyncHandler utility that eliminates repetitive boilerplate.**

---

## Navigation

| File | Topic | Est. Time |
|------|-------|-----------|
| [3.17.a](./3.17.a-Error-Handling-Basics.md) | Error Handling Basics | 40 min |
| [3.17.b](./3.17.b-Centralized-Error-Handling.md) | Centralized Error Handling | 50 min |
| [3.17.c](./3.17.c-Async-Handler-Utility.md) | Async Handler Utility | 40 min |
| [Exercise Questions](./3.17-Exercise-Questions.md) | Practice Problems | 50 min |
| [Interview Questions](./3.17-Interview-Questions.md) | Interview Prep | 30 min |
| [Quick Revision](./3.17-Quick-Revision.md) | Revision Notes | 15 min |

---

## Overview

Error handling is one of the most critical yet overlooked aspects of building production Express applications. Unhandled errors crash servers, leak stack traces to attackers, and confuse users with cryptic messages. A well-architected error handling strategy catches every possible failure, logs it appropriately, and responds with clean, consistent error messages -- all without cluttering your route handlers with repetitive try-catch blocks.

This section covers three layers of error handling mastery: understanding how Express propagates errors (basics), building a centralized error handling architecture with custom error classes (centralized), and eliminating boilerplate with the asyncHandler utility pattern (async handler).

---

## Cheat Sheet

```text
ERROR-HANDLING MIDDLEWARE SIGNATURE
  (err, req, res, next) => { ... }    ← MUST have exactly 4 parameters
  app.use(errorHandler);               ← MUST be registered AFTER all routes

CUSTOM ERROR CLASS
  class ApiError extends Error {
    constructor(statusCode, message, isOperational = true) {
      super(message);
      this.statusCode = statusCode;
      this.isOperational = isOperational;
    }
  }
  throw new ApiError(404, 'User not found');

ASYNC HANDLER (eliminates try-catch)
  const asyncHandler = (fn) => (req, res, next) =>
    Promise.resolve(fn(req, res, next)).catch(next);

  router.get('/', asyncHandler(async (req, res) => {
    const users = await User.find();
    res.json(users);
  }));

PASSING ERRORS IN EXPRESS
  next(err);                           ← forward to error middleware
  throw new Error('...');              ← caught in sync handlers only
  next(new ApiError(400, 'Bad input'));← forward custom error

MONGOOSE ERROR TYPES
  CastError         → 400  "Invalid ID format"
  ValidationError   → 400  field-level messages
  Code 11000        → 409  "Duplicate key / already exists"

JWT ERROR TYPES
  JsonWebTokenError → 401  "Invalid token"
  TokenExpiredError → 401  "Token expired"
```

---

## Prerequisites

- Node.js and Express fundamentals (Sections 3.1-3.6)
- Middleware concepts: `next()`, middleware chain (Section 3.6)
- Async/await and Promises in JavaScript
- REST API basics (Section 3.9)
- MongoDB/Mongoose basics (Section 3.8) -- helpful for Mongoose error handling

---

## Learning Objectives

By the end of this section, you will be able to:

1. Explain how Express routes errors through the middleware chain using `next(err)`
2. Distinguish between operational errors (expected) and programmer errors (bugs)
3. Build a custom `ApiError` class with status codes and operational flags
4. Create a centralized error-handling middleware that formats responses for development and production
5. Handle Mongoose and JWT-specific error types with appropriate status codes
6. Implement the `asyncHandler` utility to eliminate try-catch boilerplate in async routes
7. Set up global handlers for unhandled promise rejections and uncaught exceptions

---

**Start with** [3.17.a — Error Handling Basics](./3.17.a-Error-Handling-Basics.md)

---

[<< Previous Section: 3.16 — Caching with Redis](../3.16-Caching-with-Redis/README.md) | [Next Section: 3.18 — Testing Tools >>](../3.18-Testing-Tools/README.md)
