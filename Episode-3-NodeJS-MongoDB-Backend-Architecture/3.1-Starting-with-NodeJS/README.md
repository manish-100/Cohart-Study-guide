# 3.1 — Starting with Node.js

> **Big Picture:** Node.js is a JavaScript runtime built on Chrome's V8 engine that lets you run JavaScript outside the browser — powering servers, APIs, CLI tools, and real-time applications with a single language across the entire stack.

---

## Overview

| Sub-topic | What You'll Learn |
|-----------|-------------------|
| [3.1.a](./3.1.a-Introduction-to-NodeJS.md) | What Node.js is, its architecture (V8 + libuv), event loop, non-blocking I/O, and why it exists |
| [3.1.b](./3.1.b-Setting-Up-Tools-and-Environment.md) | Installing Node.js with nvm, configuring VS Code, using the REPL, and setting up your dev environment |
| [3.1.c](./3.1.c-Running-Scripts-with-NodeJS.md) | Running `.js` files, console methods, process object, command-line args, globals, and your first program |
| [3.1.d](./3.1.d-NPM-Basics.md) | npm registry and CLI, installing packages, node_modules, npx, semver, npm scripts, and security |
| [3.1.e](./3.1.e-Package-JSON-Deep-Dive.md) | Every field in package.json explained, lock files, ES modules vs CommonJS, custom scripts, and real-world patterns |

### Extra practice & revision

| File | Purpose |
|------|---------|
| [3.1-Exercise-Questions](./3.1-Exercise-Questions.md) | 40+ practice questions + hands-on drills across 3.1.a-e |
| [3.1-Interview-Questions](./3.1-Interview-Questions.md) | Model answers for common interview prompts (Beginner / Intermediate / Advanced) |
| [3.1-Quick-Revision](./3.1-Quick-Revision.md) | Compact cheat sheet (print-friendly) |

Each extra file begins with **How to use this material (instructions)** — follow that workflow first.

---

## Why Node.js Matters

```
┌─────────────────────────────────────────────────────────────────┐
│                  THE FULL-STACK JAVASCRIPT DREAM                │
│                                                                 │
│  Before Node.js (pre-2009):                                    │
│  ┌──────────┐                    ┌──────────┐                  │
│  │ Frontend  │  JavaScript       │ Backend   │  PHP/Ruby/Java  │
│  │ (Browser) │  (only here)      │ (Server)  │  (different     │
│  └──────────┘                    └──────────┘   language)       │
│                                                                 │
│  After Node.js (2009+):                                        │
│  ┌──────────┐                    ┌──────────┐                  │
│  │ Frontend  │  JavaScript       │ Backend   │  JavaScript     │
│  │ (Browser) │  ───────────────  │ (Node.js) │  (same          │
│  └──────────┘                    └──────────┘   language!)      │
│                                                                 │
│  One language → Shared code → Faster development               │
└─────────────────────────────────────────────────────────────────┘
```

---

## Timeline at a Glance

```
2009  Ryan Dahl creates Node.js — unveils it at JSConf EU
2010  npm (Node Package Manager) is born — Isaac Z. Schlueter
2010  Express.js — the first major Node.js web framework
2011  LinkedIn, Uber start adopting Node.js in production
2012  Node.js adoption explodes — PayPal, Netflix move to Node
2014  io.js fork over governance disagreements
2015  io.js merges back → Node.js Foundation formed
2015  Node.js 4.0 — first LTS release (combined codebase)
2018  Node.js 10 — stable ES modules, HTTP/2 support
2019  Node.js Foundation + JS Foundation merge → OpenJS Foundation
2020  Node.js 14 — top-level await, optional chaining
2023  Node.js 20 — stable test runner, permission model
2024  Node.js 22 — require() for ESM, WebSocket client
```

---

## One-line Cheat Sheet

> **Node.js = V8 (JavaScript engine) + libuv (async I/O) + Node APIs (fs, http, crypto, etc.)**

---

## Prerequisites

- Solid understanding of **JavaScript fundamentals** (Episode 1: Sections 1.13-1.24)
- Basic **terminal/command-line** familiarity
- A computer with **macOS, Linux, or Windows**

---

## After Completing All Sub-topics

| Resource | Purpose |
|----------|---------|
| [Exercise Questions](./3.1-Exercise-Questions.md) | 40+ practice questions (short-answer + hands-on + code challenges) |
| [Interview Questions](./3.1-Interview-Questions.md) | Beginner/Intermediate/Advanced questions with model answers |
| [Quick Revision](./3.1-Quick-Revision.md) | One-page cheat sheet for fast review before interviews |

---

*Start with → [3.1.a — Introduction to Node.js](./3.1.a-Introduction-to-NodeJS.md)*
