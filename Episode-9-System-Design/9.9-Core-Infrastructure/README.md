# 9.9 Core Infrastructure

## Overview

Core infrastructure is the **backbone of every large-scale system**. While databases store your data and APIs expose your services, it is the infrastructure layer -- caching, load balancing, content delivery, message queues, API gateways, and microservices architecture -- that determines whether your system can handle millions of users or collapses under load.

In system design interviews, candidates are expected to fluently discuss these building blocks, know when to apply each one, and understand the trade-offs involved. This section provides deep, interview-ready coverage of every major infrastructure component.

```
+------------------------------------------------------------------+
|                    CORE INFRASTRUCTURE MAP                        |
|                                                                   |
|   Users/Clients                                                   |
|        |                                                          |
|        v                                                          |
|   +----------+     +-----------+     +------------------+         |
|   |   CDN    |---->|    API    |---->|  Load Balancer   |         |
|   | (Static  |     |  Gateway  |     | (L4/L7 routing)  |         |
|   |  Assets) |     | (Auth,    |     +--------+---------+         |
|   +----------+     |  Rate     |              |                   |
|                     |  Limit)  |     +--------+---------+         |
|                     +----------+     |        |         |         |
|                                      v        v         v         |
|                                  +------+ +------+ +------+      |
|                                  |Svc A | |Svc B | |Svc C |      |
|                                  +--+---+ +--+---+ +--+---+      |
|                                     |        |         |          |
|                          +----------+--------+---------+----+     |
|                          |          |        |         |    |     |
|                          v          v        v         v    v     |
|                       +-----+  +-------+  +-----+  +-----+      |
|                       |Cache|  |Message|  | DB  |  | DB  |      |
|                       |Redis|  |Queue  |  |Primary |Replica|    |
|                       +-----+  +-------+  +-----+  +-----+      |
+------------------------------------------------------------------+
```

---

## Subtopic Table

| File | Topic | Key Concepts |
|------|-------|-------------|
| [9.9.a](./9.9.a-Caching-Strategies.md) | Caching Strategies | Cache-aside, write-through, write-behind, Redis vs Memcached, eviction, stampede, CDN caching |
| [9.9.b](./9.9.b-CDN-and-Content-Delivery.md) | CDN & Content Delivery | Push vs pull CDN, edge locations, cache headers, CloudFront, Cloudflare |
| [9.9.c](./9.9.c-Load-Balancing.md) | Load Balancing | L4 vs L7, round robin, least connections, consistent hashing, health checks |
| [9.9.d](./9.9.d-API-Gateway.md) | API Gateway | Routing, auth, rate limiting, request transformation, gateway vs LB |
| [9.9.e](./9.9.e-Message-Queues.md) | Message Queues | Kafka vs RabbitMQ vs SQS, pub/sub, dead letter queues, exactly-once delivery |
| [9.9.f](./9.9.f-Microservices-Architecture.md) | Microservices Architecture | Service discovery, inter-service communication, distributed transactions |

---

## Supporting Files

| File | Purpose |
|------|---------|
| [Exercise Questions](./9.9-Exercise-Questions.md) | 40+ practice problems covering all subtopics |
| [Interview Questions](./9.9-Interview-Questions.md) | 11 questions with detailed model answers |
| [Quick Revision](./9.9-Quick-Revision.md) | Compact cheat sheet for last-minute review |

---

## Prerequisites

Before studying this section, ensure you have solid understanding of:

- **[9.7 System Design Foundations](../9.7-System-Design-Foundations/)** -- Scalability, availability, consistency, CAP theorem, estimation
- **[9.8 Communication and Data Layer](../9.8-Communication-and-Data-Layer/)** -- REST, gRPC, WebSockets, SQL vs NoSQL, replication, sharding

---

## How This Section Fits Into System Design

```
+---------------------------------------------------------------+
|                   SYSTEM DESIGN KNOWLEDGE MAP                 |
|                                                               |
|  9.7 Foundations    9.8 Data Layer    >>> 9.9 INFRASTRUCTURE  |
|  (Theory)           (Storage +        (How components talk,   |
|                      Communication)    scale, and survive)    |
|                                                               |
|  Feeds into --> 9.10 Advanced Distributed Systems             |
|  Feeds into --> 9.11 Real-World System Design Problems        |
+---------------------------------------------------------------+
```

---

## Learning Objectives

After completing this section, you will be able to:

1. Design caching layers and choose appropriate eviction strategies
2. Integrate CDNs into system architectures for performance
3. Select and configure load balancing strategies for different scenarios
4. Use API gateways as the front door of microservices
5. Design asynchronous workflows using message queues
6. Decompose monoliths into microservices and handle the resulting complexity
7. Combine all infrastructure components into coherent system designs

---

## Key Principle

> **"Every component you add to a system must earn its place. Infrastructure should solve real problems -- not add complexity for its own sake."**

The best system designers do not blindly add caching, queues, and load balancers. They identify bottlenecks first, then apply the right tool. This section teaches you both the tools and the judgment to use them wisely.
