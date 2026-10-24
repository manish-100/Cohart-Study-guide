# 9.8 — Communication & Data Layer

> **Big Picture:** Every distributed system is a conversation between machines. The Communication & Data Layer defines **how services talk to each other** (protocols, APIs) and **how they remember things** (databases, replication, consistency). Master this layer and you can reason about any system design problem from first principles.

---

## Overview

| Sub-topic | What You'll Learn |
|---|---|
| [9.8.a — Networking Basics](./9.8.a-Networking-Basics.md) | HTTP/HTTPS, TCP vs UDP, WebSockets, gRPC, latency & bandwidth, DNS resolution, CDNs, network topology in distributed systems |
| [9.8.b — API Design](./9.8.b-API-Design.md) | REST principles, HTTP methods & status codes, versioning, pagination, filtering, rate limiting, GraphQL overview, API documentation |
| [9.8.c — SQL vs NoSQL](./9.8.c-SQL-vs-NoSQL.md) | Relational databases (ACID, joins, normalization), NoSQL types (document, key-value, column-family, graph), CAP theorem, database selection guide |
| [9.8.d — Database Scaling](./9.8.d-Database-Scaling.md) | Read replicas, master-slave replication, sharding strategies, shard key selection, denormalization, connection pooling, indexing |
| [9.8.e — Data Consistency](./9.8.e-Data-Consistency.md) | Strong vs eventual consistency, distributed transactions, two-phase commit, saga pattern, CRDTs, real-world tradeoffs |

### Extra practice & revision

| File | Purpose |
|---|---|
| [Exercise Questions](./9.8-Exercise-Questions.md) | 40+ practice questions across all subtopics |
| [Interview Questions](./9.8-Interview-Questions.md) | 11 interview questions with model answers |
| [Quick Revision](./9.8-Quick-Revision.md) | Compact cheat sheet with comparison tables |

Each extra file begins with **How to use this material (instructions)** — follow that workflow first.

---

## One-Line Cheat Sheet

```
Networking (protocols, DNS, CDN) -> APIs (REST, GraphQL) -> Databases (SQL, NoSQL) -> Scaling (replication, sharding) -> Consistency (CAP, sagas) -> Production-Ready Systems
```

---

## Why This Section Matters

1. **Every interview involves data flow** — You must explain how a request travels from a user's browser to a database and back.
2. **Database choice is a design decision** — Picking PostgreSQL vs DynamoDB changes your entire architecture.
3. **Scaling is not optional** — Knowing when to shard, replicate, or cache separates junior from senior answers.
4. **Consistency tradeoffs are everywhere** — From social media feeds to payment systems, consistency decisions shape user experience.

---

## Prerequisites

- [9.7 — System Design Foundations](../9.7-System-Design-Foundations/README.md) — High-level design thinking, components of a system, estimation basics

---

*Start with -> [9.8.a — Networking Basics](./9.8.a-Networking-Basics.md)*
