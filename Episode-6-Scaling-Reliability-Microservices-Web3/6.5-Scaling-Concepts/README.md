# 6.5 -- Scaling Concepts

> **Big Picture:** Scaling is the art of keeping your system fast and available as demand grows. You can **scale up** (bigger machine) or **scale out** (more machines), but scaling out only works when your application is **stateless**. A **load balancer** sits in front of your instances and distributes traffic intelligently. Master these three ideas and you can grow any service from 1 user to 1 million.

---

## Overview

| Sub-topic | What You'll Learn |
|-----------|-------------------|
| [6.5.a](./6.5.a-Vertical-vs-Horizontal-Scaling.md) | **Vertical scaling** (bigger machine) vs **horizontal scaling** (more machines) -- cost curves, limits, database scaling, and scaling Node.js specifically |
| [6.5.b](./6.5.b-Load-Balancers.md) | What load balancers do, Layer 4 vs Layer 7, algorithms (round robin, least connections, IP hash), health checks, sticky sessions, AWS ALB/NLB, Nginx config |
| [6.5.c](./6.5.c-Stateless-Design.md) | Why statelessness enables horizontal scaling, moving state externally (Redis, JWT, S3), sticky sessions, WebSocket considerations, migrating a stateful Express app |

### Extra practice & revision

| File | Purpose |
|------|---------|
| [6.5-Exercise-Questions](./6.5-Exercise-Questions.md) | 35+ practice questions across all 3 subtopics |
| [6.5-Interview-Questions](./6.5-Interview-Questions.md) | 11 curated questions with model answers (beginner to advanced) |
| [6.5-Quick-Revision](./6.5-Quick-Revision.md) | Print-friendly cheat sheet: vocabulary, comparison tables, checklists |

Each extra file begins with **How to use this material (instructions)** -- follow that workflow first.

---

## Why Scaling Concepts Matter

```
                    VERTICAL vs HORIZONTAL SCALING

  VERTICAL (Scale Up)                 HORIZONTAL (Scale Out)
  =====================               ========================

  +-----------------+                          Load Balancer
  |                 |                      +--------+--------+
  |   ONE BIG       |                      |        |        |
  |   SERVER        |               +------+--+ +---+----+ +-+-------+
  |                 |               | Server 1 | | Server 2| | Server 3|
  |   64 CPU        |               | 4 CPU    | | 4 CPU   | | 4 CPU   |
  |   512 GB RAM    |               | 16 GB    | | 16 GB   | | 16 GB   |
  |   4 TB SSD      |               +----------+ +---------+ +---------+
  |                 |
  |   $$$$$         |                  $  +  $  +  $  =  $$$
  +-----------------+
                                   + Can add Server 4, 5, 6...
  Hard ceiling:                    + No single point of failure
  can't buy a bigger               + Near-linear cost scaling
  machine forever                  - Requires stateless design
                                   - More operational complexity
```

---

## One-Line Cheat Sheet

> **Scale up = bigger box; Scale out = more boxes behind a load balancer; Stateless design = the reason scale-out works.**

---

## Prerequisites

| Requirement | Why |
|-------------|-----|
| [6.1 -- Microservice Foundations](../6.1-Microservice-Foundations/README.md) | Scaling is how microservices handle growth -- you need to understand service boundaries first |
| [6.4 -- Distributed Observability and Scaling](../6.4-Distributed-Observability-and-Scaling/README.md) | Observability tells you *when* and *where* to scale -- metrics drive scaling decisions |
| Basic Node.js / Express knowledge (Episode 3) | All code examples use Express servers and the Node.js cluster module |
| Familiarity with HTTP (status codes, headers) | Load balancers operate at the HTTP layer -- you need to understand the wire |

---

## Suggested Study Order

1. Read **6.5.a** to understand the two fundamental scaling strategies.
2. Work through **6.5.b** to learn how load balancers distribute traffic.
3. Study **6.5.c** to master stateless design -- the enabler of horizontal scaling.
4. Test yourself with **Exercise Questions**.
5. Rehearse with **Interview Questions**.
6. Print **Quick Revision** for interview day.

---

## What Comes Next

| Episode | Topic |
|---------|-------|
| 6.6 | Caching in Production -- the first tool you reach for before scaling hardware |
| 6.7 | Logging and Observability -- knowing what to scale and when |
| 6.8 | Production Hardening -- rate limiting, circuit breakers, graceful degradation |

---

*Part of the Cohart Full-Stack Engineering Study Guide -- Episode 6: Scaling, Reliability, Microservices & Web3*
