# 3.15 — Realtime Communication & WebSockets

> **Master real-time bidirectional communication using WebSockets and Socket.io to build live, interactive applications.**

---

## Navigation

| File | Topic | Est. Time |
|------|-------|-----------|
| [3.15.a](./3.15.a-Understanding-WebSockets.md) | Understanding WebSockets | 40 min |
| [3.15.b](./3.15.b-HTTP-Polling-and-Alternatives.md) | HTTP Polling & Alternatives | 35 min |
| [3.15.c](./3.15.c-Socket-IO-Setup-and-Basics.md) | Socket.io Setup & Basics | 50 min |
| [3.15.d](./3.15.d-Rooms-and-Namespaces.md) | Rooms & Namespaces | 40 min |
| [3.15.e](./3.15.e-Socket-IO-Middleware.md) | Socket.io Middleware | 40 min |
| [Exercise Questions](./3.15-Exercise-Questions.md) | Practice Problems | 60 min |
| [Interview Questions](./3.15-Interview-Questions.md) | Interview Prep | 30 min |
| [Quick Revision](./3.15-Quick-Revision.md) | Revision Notes | 15 min |

---

## Overview

Real-time communication is fundamental to modern web applications. From live chat and notifications to collaborative editing and multiplayer games, users expect instant updates without refreshing the page. This section covers the WebSocket protocol, its alternatives, and the Socket.io library that simplifies real-time development.

---

## Cheat Sheet

```text
WEBSOCKET LIFECYCLE
  Client ──HTTP Upgrade──> Server
  Server ──101 Switching──> Client
  Client <══ Bidirectional ══> Server
  Either side ──Close Frame──> Other

SOCKET.IO QUICK REFERENCE
  Server:  io.on('connection', (socket) => { ... })
  Emit:    socket.emit('event', data)
  Listen:  socket.on('event', callback)
  Room:    socket.join('room') / io.to('room').emit(...)
  NS:      io.of('/namespace')

BROADCASTING
  io.emit('event', data)              → all clients
  socket.broadcast.emit('event', data) → all except sender
  io.to('room').emit('event', data)   → specific room
  socket.to('room').emit('event', data) → room except sender

MIDDLEWARE
  io.use((socket, next) => { ... next() })
  socket.handshake.auth.token → JWT from client
```

---

## Prerequisites

- Solid understanding of Node.js and Express (Sections 3.1-3.10)
- HTTP request-response cycle knowledge
- Basic understanding of TCP/IP networking
- Familiarity with `async/await` patterns
- Node.js and npm installed locally

---

## Learning Objectives

By the end of this section, you will be able to:

1. Explain the WebSocket protocol and how it differs from HTTP
2. Compare polling, long polling, SSE, and WebSocket approaches
3. Set up Socket.io with an Express server
4. Build real-time features: chat, notifications, live updates
5. Organize connections using rooms and namespaces
6. Secure WebSocket connections with authentication middleware

---

[Next Section: 3.16 — Caching with Redis >>](../3.16-Caching-with-Redis/README.md)
