# 6.1 -- Microservice Foundations

> Master the architectural principles, trade-offs, and communication patterns that underpin every successful microservices deployment.

---

## Prerequisites

| Requirement | Why |
|---|---|
| Solid JavaScript / Node.js | All code examples use Express, axios, and Node built-ins |
| REST API basics (HTTP verbs, status codes) | Services communicate over HTTP -- you must read the wire |
| Basic SQL / database concepts | Database-per-service requires understanding joins, transactions, and schemas |
| Docker awareness (helpful, not required) | Microservices are typically containerised; Episode 6.2 covers orchestration |

---

## Architecture at a Glance

```
                         +------------------+
                         |   API Gateway /  |
                         |   Load Balancer  |
                         +--------+---------+
                                  |
                 +----------------+----------------+
                 |                |                 |
          +------+------+  +-----+-------+  +------+------+
          | User        |  | Order       |  | Inventory   |
          | Service     |  | Service     |  | Service     |
          | (Express)   |  | (Express)   |  | (Express)   |
          +------+------+  +-----+-------+  +------+------+
                 |                |                 |
          +------+------+  +-----+-------+  +------+------+
          | Users DB    |  | Orders DB   |  | Inventory   |
          | (Postgres)  |  | (Postgres)  |  | DB (Mongo)  |
          +-------------+  +-------------+  +-------------+
                 |                |                 |
                 +-------+--------+--------+-------+
                         |  Message Broker  |
                         |  (RabbitMQ /     |
                         |   Kafka)         |
                         +-----------------+
```

---

## Subtopic Map

| File | Title | Core Idea |
|---|---|---|
| [6.1.a](./6.1.a-Monolithic-vs-Microservices.md) | Monolithic vs Microservices | Understand both architectures, their trade-offs, and migration paths |
| [6.1.b](./6.1.b-When-Microservices-Make-Sense.md) | When Microservices Make Sense | Decision frameworks for choosing (or avoiding) microservices |
| [6.1.c](./6.1.c-Service-Boundaries.md) | Service Boundaries | Domain-Driven Design, bounded contexts, and where to draw the lines |
| [6.1.d](./6.1.d-Database-per-Service.md) | Database per Service | Data ownership, eventual consistency, sagas, and CQRS |
| [6.1.e](./6.1.e-Service-Communication-Patterns.md) | Service Communication Patterns | REST, gRPC, events, queues -- choosing the right wire |

---

## Extra Practice & Reference

| File | Purpose |
|---|---|
| [6.1-Exercise-Questions.md](./6.1-Exercise-Questions.md) | 50+ questions across all subtopics (conceptual, design, scenario) |
| [6.1-Interview-Questions.md](./6.1-Interview-Questions.md) | 11 curated questions with model answers (beginner to advanced) |
| [6.1-Quick-Revision.md](./6.1-Quick-Revision.md) | Print-friendly cheat sheet: tables, patterns, gotchas |

---

## One-Line Cheat Sheet

> **Microservices = independently deployable services, each owning its data, communicating over well-defined APIs or events, organised around business capabilities.**

---

## Suggested Study Order

1. Read **6.1.a** to understand the architectural spectrum.
2. Work through **6.1.b** to internalise the decision framework.
3. Study **6.1.c** for boundary design with DDD.
4. Dive into **6.1.d** for database patterns.
5. Finish with **6.1.e** for communication patterns.
6. Test yourself with **Exercise Questions**.
7. Rehearse with **Interview Questions**.
8. Print **Quick Revision** for exam/interview day.

---

## What Comes Next

| Episode | Topic |
|---|---|
| 6.2 | Building and Orchestrating Microservices (Docker, Kubernetes) |
| 6.3 | AWS Cloud-Native Deployment |
| 6.4 | Distributed Observability and Scaling |

---

*Part of the Cohart Full-Stack Engineering Study Guide -- Episode 6: Scaling, Reliability, Microservices & Web3*
