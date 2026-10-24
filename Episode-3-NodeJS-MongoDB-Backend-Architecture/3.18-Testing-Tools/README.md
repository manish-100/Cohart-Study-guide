# 3.18 — Testing Tools

> **Master the art and science of testing Node.js applications -- from unit tests with Jest to API testing with Supertest to cross-browser validation -- ensuring your code is reliable, maintainable, and production-ready.**

---

## Navigation

| File | Topic | Est. Time |
|------|-------|-----------|
| [3.18.a](./3.18.a-Introduction-to-Testing.md) | Introduction to Testing | 35 min |
| [3.18.b](./3.18.b-Unit-Testing-with-Jest.md) | Unit Testing with Jest | 50 min |
| [3.18.c](./3.18.c-API-Testing.md) | API Testing with Supertest | 45 min |
| [3.18.d](./3.18.d-Cross-Browser-and-Web-Testing.md) | Cross-Browser and Web Testing | 35 min |
| [Exercise Questions](./3.18-Exercise-Questions.md) | Practice Problems | 50 min |
| [Interview Questions](./3.18-Interview-Questions.md) | Interview Prep | 30 min |
| [Quick Revision](./3.18-Quick-Revision.md) | Revision Notes | 15 min |

---

## Overview

Testing is the backbone of reliable software. Without tests, every deployment is a gamble -- you have no way of knowing whether a change broke something that was working yesterday. This section covers the full spectrum of testing in the Node.js ecosystem: understanding the testing pyramid, writing unit tests with Jest, testing API endpoints with Supertest, and validating your application across browsers and devices. By the end, you will have the knowledge to build a robust testing strategy for any backend project.

---

## Cheat Sheet

```text
TESTING PYRAMID
  E2E Tests       (few, slow, expensive)       → Full user flows
  Integration     (some, medium speed)          → API + DB together
  Unit Tests      (many, fast, cheap)           → Individual functions

JEST BASICS
  describe('Group', () => { ... })              → Group related tests
  it('should do X', () => { ... })              → Individual test case
  expect(value).toBe(expected)                  → Strict equality (===)
  expect(value).toEqual(expected)               → Deep equality
  expect(fn).toThrow()                          → Expect error thrown

JEST MOCKING
  jest.fn()                                     → Create mock function
  jest.mock('./module')                         → Auto-mock a module
  jest.spyOn(obj, 'method')                     → Spy on existing method
  mockFn.mockReturnValue(val)                   → Set return value
  mockFn.mockResolvedValue(val)                 → Set async return value

SUPERTEST
  request(app).get('/api/users')                → Test GET endpoint
    .expect(200)                                → Assert status code
    .expect('Content-Type', /json/)             → Assert header
  request(app).post('/api/users')               → Test POST endpoint
    .send({ name: 'Test' })                     → Send request body
    .set('Authorization', 'Bearer token')       → Set headers

SETUP / TEARDOWN
  beforeAll(() => { ... })                      → Run once before all tests
  afterAll(() => { ... })                       → Run once after all tests
  beforeEach(() => { ... })                     → Run before each test
  afterEach(() => { ... })                      → Run after each test

COVERAGE
  npx jest --coverage                           → Generate coverage report
  Statements | Branches | Functions | Lines     → Four coverage metrics
```

---

## Prerequisites

- Node.js and Express fundamentals (Sections 3.1-3.6)
- REST API development with Express (Section 3.9)
- MongoDB and Mongoose basics (Section 3.8)
- Understanding of async/await in JavaScript
- npm package management basics

---

## Learning Objectives

By the end of this section, you will be able to:

1. Explain the testing pyramid and choose the right type of test for each scenario
2. Write unit tests with Jest including assertions, mocking, and setup/teardown
3. Test Express API endpoints using Supertest with authentication and error handling
4. Set up an in-memory test database with `mongodb-memory-server`
5. Understand cross-browser testing tools and E2E frameworks like Cypress and Playwright
6. Integrate tests into a CI/CD pipeline with GitHub Actions
7. Measure and interpret code coverage reports

---

**Start with** [3.18.a — Introduction to Testing](./3.18.a-Introduction-to-Testing.md)

---

[<< Previous Section: 3.17 — Error Handling in Express](../3.17-Error-Handling-in-Express/README.md) | [Next Section: 3.19 >>](../3.19/README.md)
