# 1.2 — Client-Server Architecture

> **Big Picture:** Most of what you do on the web is a conversation: your device (the client) asks for something, and another computer (the server) prepares and sends a response — usually over HTTP.

---

## Overview

| Sub-topic | What You'll Learn |
|-----------|-------------------|
| [1.2.a](./1.2.a-Client-Server-Model.md) | What the client-server model is and why it dominates the web |
| [1.2.b](./1.2.b-Client-vs-Server.md) | How clients and servers differ in role, hardware, and responsibility |
| [1.2.c](./1.2.c-HTTP-Request-Response-Cycle.md) | How HTTP carries requests and responses between browser and server |
| [1.2.d](./1.2.d-What-Happens-When-You-Visit-Website.md) | The step-by-step journey from URL to rendered page |
| [1.2.e](./1.2.e-Frontend-vs-Backend.md) | Where user-facing code lives versus where data and logic run on the server |
| [1.2.f](./1.2.f-Static-vs-Dynamic-Websites.md) | Fixed files versus pages assembled per request |
| [1.2.g](./1.2.g-Web-Hosting.md) | How sites get online — servers, hosting providers, and deployment basics |

### Extra practice & revision

| File | Purpose |
|------|---------|
| [1.2-Exercise-Questions](./1.2-Exercise-Questions.md) | Practice questions + DevTools/`curl` drills across 1.2.a–g |
| [1.2-Interview-Questions](./1.2-Interview-Questions.md) | Model answers for common interview prompts |
| [1.2-Quick-Revision](./1.2-Quick-Revision.md) | Compact cheat sheet (print-friendly) |

Each extra file begins with **How to use this material (instructions)** — follow that workflow first.

---

## Client-Server Model at a Glance

```
                    THE INTERNET (or private network)
    ┌──────────────────────────────────────────────────────────────┐
    │                                                              │
    │    ┌─────────────┐         requests          ┌─────────────┐ │
    │    │   CLIENT    │ ────────────────────────► │   SERVER    │ │
    │    │             │         (e.g. HTTP)       │             │ │
    │    │  Browser,   │ ◄──────────────────────── │  Web app,   │ │
    │    │  mobile app,│         responses         │  API, DB    │ │
    │    │  IoT device │                             │             │ │
    │    └─────────────┘                             └─────────────┘ │
    │         │                                              │       │
    │         │  asks for resources / actions                │       │
    │         │  displays results                            │ stores │
    │         │                                              │ data,  │
    │         │                                              │ runs   │
    │         │                                              │ logic  │
    │    "What do I show     "Here is HTML, JSON,              │       │
    │     the user?"         an image, a file…"               │       │
    │                                                              │
    └──────────────────────────────────────────────────────────────┘
```

> **Key Takeaway:** The client initiates; the server listens, processes, and replies. Many clients can talk to the same server; one client can talk to many servers over time.

---

## Restaurant Analogy

Think of a restaurant:

| In the restaurant | In client-server terms |
|-------------------|------------------------|
| **Customer** | **Client** — you decide what you want and place an order; you receive what the kitchen sends back. |
| **Kitchen** | **Server** — it prepares meals, follows recipes, and coordinates ingredients; you rarely go back there yourself. |
| **Waiter** | **HTTP** — carries your order to the kitchen and brings the food (response) to your table; the “protocol” for how requests and plates move. |
| **Menu** | **API** — the list of what you *can* ask for (endpoints, parameters); you don’t invent dishes from scratch, you choose from what’s offered. |

You stay at the table (the client environment); the heavy cooking happens out of sight (the server). The waiter doesn’t cook — they just deliver messages and results, just like HTTP doesn’t run your business logic; it transports the request and response.

---

## Prerequisites

[Section 1.1 — How the Internet Works](../1.1-How-The-Internet-Works/README.md) — packets, DNS, and how devices connect make client-server much easier to follow.

---

*Start with → [1.2.a — What is Client-Server Model](./1.2.a-Client-Server-Model.md)*
