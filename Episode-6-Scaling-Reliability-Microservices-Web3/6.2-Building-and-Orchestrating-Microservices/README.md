# 6.2 — Building & Orchestrating Microservices

> **Big Picture:** Microservices only deliver value when each service is **independently deployable**, traffic flows through a **single API gateway**, inter-service calls are **resilient** to failure, and services communicate asynchronously via **message queues** using well-designed, **idempotent** event payloads.

---

## Overview

| Sub-topic | What You'll Learn |
|-----------|-------------------|
| [6.2.a](./6.2.a-Independent-Services-Setup.md) | Creating **independent services** with separate codebases, configs, ports, Docker containers, and service discovery |
| [6.2.b](./6.2.b-API-Gateway-Pattern.md) | Building an **API gateway** for centralized routing, auth, rate limiting, and request forwarding |
| [6.2.c](./6.2.c-Retry-Timeout-Circuit-Breaker.md) | Implementing **retries**, **timeouts**, and **circuit breakers** to survive distributed failures |
| [6.2.d](./6.2.d-Event-Driven-Architecture.md) | Designing **event-driven** systems with RabbitMQ — pub/sub, exchanges, queues, and dead letter handling |
| [6.2.e](./6.2.e-Event-Payloads-and-Idempotency.md) | Crafting **event payloads**, ensuring **idempotency**, handling duplicates, and eventual consistency |

### Extra practice & revision

| File | Purpose |
|------|---------|
| [6.2-Exercise-Questions](./6.2-Exercise-Questions.md) | 50+ practice questions + design scenarios across 6.2.a-e |
| [6.2-Interview-Questions](./6.2-Interview-Questions.md) | Model answers for common interview prompts (Beginner / Intermediate / Advanced) |
| [6.2-Quick-Revision](./6.2-Quick-Revision.md) | Compact cheat sheet (print-friendly) |

Each extra file begins with **How to use this material (instructions)** — follow that workflow first.

---

## Microservices Architecture at a Glance

```
┌──────────────────────────────────────────────────────────────────────────────┐
│                    MICROSERVICES ORCHESTRATION FLOW                          │
│                                                                              │
│  Client (Browser / Mobile)                                                   │
│       │                                                                      │
│       ▼                                                                      │
│  ┌──────────────────┐                                                        │
│  │   API Gateway     │  Auth, rate-limit, route, log                        │
│  │   (port 3000)     │                                                       │
│  └─────┬──────┬──────┘                                                       │
│        │      │      └──────────────────┐                                    │
│        ▼      ▼                         ▼                                    │
│  ┌──────────┐ ┌──────────┐  ┌────────────────┐                              │
│  │  User    │ │  Order   │  │  Notification  │                              │
│  │  Service │ │  Service │  │  Service       │                              │
│  │  :4001   │ │  :4002   │  │  :4003         │                              │
│  └────┬─────┘ └────┬─────┘  └───────┬────────┘                              │
│       │             │               │                                        │
│       ▼             ▼               ▼                                        │
│  ┌─────────────────────────────────────────────┐                             │
│  │           Message Queue (RabbitMQ)           │                            │
│  │                                               │                           │
│  │  Exchanges → Bindings → Queues → Consumers    │                           │
│  │                                               │                           │
│  │  user.created ──→ [order-queue]               │                           │
│  │  order.placed ──→ [notification-queue]        │                           │
│  │  order.placed ──→ [analytics-queue]           │                           │
│  └─────────────────────────────────────────────┘                             │
│                                                                              │
│  RESILIENCE LAYER (wraps every inter-service call):                          │
│  ┌────────────┐ ┌──────────────┐ ┌─────────────────┐                        │
│  │  Retries   │ │  Timeouts    │ │ Circuit Breaker  │                        │
│  │  (exp.     │ │  (3-5 sec    │ │ (open/closed/    │                        │
│  │  backoff)  │ │   max)       │ │  half-open)      │                        │
│  └────────────┘ └──────────────┘ └─────────────────┘                        │
└──────────────────────────────────────────────────────────────────────────────┘
```

---

## One-line Cheat Sheet

> **Microservices = Independent services + API gateway routing + resilient calls (retry/timeout/circuit-breaker) + async events (message queue) + idempotent processing**

---

## Prerequisites

- Completed **[6.1 — Microservice Foundations](../6.1-Microservice-Foundations/README.md)** — monolith vs microservices, bounded contexts, communication patterns
- Solid understanding of **Node.js and Express** (Episode 3)
- Familiarity with **REST APIs**, **HTTP status codes**, and **JSON** (Episode 3)
- Basic **Docker** knowledge helpful but not required — we cover the essentials here

---

*Start with -> [6.2.a — Independent Services Setup](./6.2.a-Independent-Services-Setup.md)*
