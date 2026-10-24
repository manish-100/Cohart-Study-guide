# 9.11 Real-World System Design Problems

## Overview

This section presents **12 complete system design problems** modeled after real-world
systems asked in top-tier engineering interviews. Each problem follows a structured
template that mirrors a 45-minute system design interview.

These are not toy examples. Each solution addresses functional requirements, capacity
estimation, API design, database schema, deep dives into critical components, and
scaling considerations with explicit tradeoff discussions.

---

## Prerequisites

Before tackling these problems, ensure you are comfortable with:

| Section | Topic                          |
|---------|--------------------------------|
| 9.7     | Scalability Patterns           |
| 9.8     | Database Design & Storage      |
| 9.9     | Distributed Systems Concepts   |
| 9.10    | Communication Protocols & APIs |

---

## Problem List

| #    | Problem                  | File                              | Key Patterns                                      |
|------|--------------------------|-----------------------------------|---------------------------------------------------|
| 9.11.a | URL Shortener          | `9.11.a-URL-Shortener.md`        | Hashing, base62, read-heavy, caching              |
| 9.11.b | Rate Limiter           | `9.11.b-Rate-Limiter.md`         | Sliding window, Redis, distributed coordination   |
| 9.11.c | Chat System            | `9.11.c-Chat-System.md`          | WebSockets, pub/sub, message queues               |
| 9.11.d | Social Media Feed      | `9.11.d-Social-Media-Feed.md`    | Fan-out, timeline, ranking, celebrity problem      |
| 9.11.e | Video Streaming        | `9.11.e-Video-Streaming.md`      | CDN, transcoding pipeline, adaptive bitrate        |
| 9.11.f | E-Commerce Platform    | `9.11.f-E-Commerce.md`           | Microservices, inventory, payment, SAGA pattern    |
| 9.11.g | Notification System    | `9.11.g-Notification-System.md`  | Priority queues, fan-out, delivery guarantees      |
| 9.11.h | File Storage           | `9.11.h-File-Storage.md`         | Chunking, deduplication, sync, conflict resolution |
| 9.11.i | Search Engine          | `9.11.i-Search-Engine.md`        | Crawling, inverted index, PageRank, serving        |
| 9.11.j | Ride Sharing           | `9.11.j-Ride-Sharing.md`         | Geospatial indexing, matching, real-time tracking  |
| 9.11.k | Payment System         | `9.11.k-Payment-System.md`       | Idempotency, reconciliation, fraud detection       |
| 9.11.l | Monitoring System      | `9.11.l-Monitoring-System.md`    | Time-series DB, alerting, distributed tracing      |

---

## Approach Reminder: The RESHADED Framework

Use this structured approach for every system design problem:

```
R - Requirements        Clarify functional and non-functional requirements
E - Estimation          Back-of-envelope capacity and throughput calculations
S - Storage             Choose databases and define schemas
H - High-level Design   Draw the architecture with major components
A - API Design          Define the external-facing API endpoints
D - Detailed Design     Deep dive into 2-3 critical components
E - Evaluate            Discuss tradeoffs, bottlenecks, failure modes
D - Deploy              Scaling, monitoring, deployment strategy
```

### Time Allocation (45-minute interview)

```
+---------------------+--------+
| Phase               | Time   |
+---------------------+--------+
| Requirements        | 5 min  |
| Estimation          | 3 min  |
| High-Level Design   | 10 min |
| API + Schema        | 7 min  |
| Deep Dive           | 15 min |
| Scaling/Tradeoffs   | 5 min  |
+---------------------+--------+
```

---

## How to Use These Files

1. **First pass:** Read each problem, cover the solution, and try to design it yourself.
2. **Second pass:** Compare your design against the provided solution.
3. **Third pass:** Focus on tradeoffs -- for each decision, ask "what if we did the opposite?"
4. **Practice:** Use the Exercise Questions file to practice with unseen problems.
5. **Review:** Use the Quick Revision file before interviews.

---

## File Index

| File                            | Purpose                              |
|---------------------------------|--------------------------------------|
| `9.11-Exercise-Questions.md`    | 10+ additional design prompts        |
| `9.11-Interview-Questions.md`   | 11 meta-questions about SD approach  |
| `9.11-Quick-Revision.md`        | One-page summary per problem         |

---

## Common Patterns Across Problems

```
Pattern                 Used In
------------------------------------------------------------
Load Balancing          All problems
Caching                 URL Shortener, Feed, E-Commerce, Search
Message Queues          Chat, Notifications, Video, Monitoring
Database Sharding       URL Shortener, Chat, E-Commerce, Payment
CDN                     Video Streaming, File Storage, E-Commerce
Pub/Sub                 Chat, Feed, Notifications, Monitoring
Rate Limiting           Rate Limiter, Notification, Payment
Idempotency             Payment, E-Commerce, Notifications
Geospatial Indexing     Ride Sharing
Time-Series Storage     Monitoring
Inverted Index          Search Engine
Consensus               Rate Limiter, Payment, Chat
```

---

*Each problem file is self-contained and can be studied independently.*
