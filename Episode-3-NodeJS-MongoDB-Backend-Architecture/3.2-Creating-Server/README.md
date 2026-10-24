# 3.2 — Creating a Server

> **Your journey from zero to a working HTTP server in Node.js, understanding every concept along the way.**

---

## Prerequisites

Before starting this section, make sure you are comfortable with:

| Prerequisite | Where to learn |
|---|---|
| JavaScript fundamentals (functions, callbacks, objects) | Episode 1 |
| Node.js installation and basic usage | Section 3.1 |
| Terminal / command-line basics | Section 3.1 |
| `npm init` and `package.json` basics | Section 3.1 |

---

## What You Will Learn

This section takes you from "what even is a server?" to building a fully functional HTTP server with routing, proper status codes, and a live-reloading development setup.

---

## Subtopic Overview

| # | File | Topic | Key Concept |
|---|---|---|---|
| a | [What is a Server](./3.2.a-What-is-a-Server.md) | Server fundamentals | Client-server model, ports, request-response cycle |
| b | [First Node.js Server with HTTP](./3.2.b-First-NodeJS-Server-with-HTTP.md) | Building your first server | `http.createServer`, `req`, `res` objects |
| c | [Serving Responses and Understanding HTTP](./3.2.c-Serving-Responses-and-Understanding-HTTP.md) | HTTP deep dive | Headers, content types, serving files and JSON |
| d | [Routing in HTTP Servers](./3.2.d-Routing-in-HTTP-Servers.md) | URL-based routing | Manual routing, query strings, building a mini router |
| e | [HTTP Status Codes](./3.2.e-HTTP-Status-Codes.md) | Response status codes | 1xx through 5xx, when to use each |
| f | [Nodemon for Development](./3.2.f-Nodemon-for-Development.md) | Dev workflow | Auto-restart, `node --watch`, configuration |

---

## Quick Cheat Sheet

```js
// 1. Import the built-in http module
const http = require('http');

// 2. Create a server
const server = http.createServer((req, res) => {
  // 3. Set response headers
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  // 4. Send response body
  res.end('Hello, World!');
});

// 5. Start listening
server.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
```

### Common Commands

```bash
# Run a server file
node server.js

# Run with auto-restart (Node.js 18+)
node --watch server.js

# Run with nodemon
npx nodemon server.js

# Test with curl
curl http://localhost:3000
curl -X POST http://localhost:3000/api/data -H "Content-Type: application/json" -d '{"key":"value"}'
```

### Common Ports

| Port | Usage |
|---|---|
| 80 | HTTP (default) |
| 443 | HTTPS (default) |
| 3000 | Node.js / React dev server |
| 8080 | Alternative HTTP / proxies |
| 5432 | PostgreSQL |
| 27017 | MongoDB |

---

## Practice Resources

| Resource | Link |
|---|---|
| [Exercise Questions](./3.2-Exercise-Questions.md) | 40+ hands-on problems |
| [Interview Questions](./3.2-Interview-Questions.md) | Beginner to Advanced |
| [Quick Revision](./3.2-Quick-Revision.md) | Last-minute review sheet |

---

## Start With

**[3.2.a — What is a Server](./3.2.a-What-is-a-Server.md)** if you are new to backend development.

**[3.2.b — First Node.js Server with HTTP](./3.2.b-First-NodeJS-Server-with-HTTP.md)** if you already understand client-server basics and want to jump into code.

---

**Navigation:** [← 3.1 Starting with Node.js](../3.1-Starting-with-NodeJS/README.md) | [3.2.a What is a Server →](./3.2.a-What-is-a-Server.md)
