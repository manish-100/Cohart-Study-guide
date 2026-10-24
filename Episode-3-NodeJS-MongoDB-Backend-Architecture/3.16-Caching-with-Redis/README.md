# 3.16 — Caching with Redis

> **Learn how to dramatically improve application performance by caching data with Redis, an in-memory data structure store used as a cache, message broker, and session store.**

---

## Navigation

| File | Topic | Est. Time |
|------|-------|-----------|
| [3.16.a](./3.16.a-What-is-Caching.md) | What is Caching | 35 min |
| [3.16.b](./3.16.b-Introduction-to-Redis.md) | Introduction to Redis | 40 min |
| [3.16.c](./3.16.c-Redis-with-NodeJS.md) | Redis with Node.js | 45 min |
| [3.16.d](./3.16.d-Advanced-Redis-Features.md) | Advanced Redis Features | 50 min |
| [Exercise Questions](./3.16-Exercise-Questions.md) | Practice Problems | 50 min |
| [Interview Questions](./3.16-Interview-Questions.md) | Interview Prep | 30 min |
| [Quick Revision](./3.16-Quick-Revision.md) | Revision Notes | 15 min |

---

## Overview

Database queries are often the slowest part of a web application. Caching stores frequently accessed data in fast storage (memory), reducing database load and dramatically improving response times. Redis is the industry-standard in-memory data store, supporting rich data structures, persistence, pub/sub messaging, and much more.

---

## Cheat Sheet

```text
CACHING PATTERNS
  Cache-Aside:    Check cache → miss? → query DB → store in cache → return
  Write-Through:  Write to cache → cache writes to DB → return
  Write-Behind:   Write to cache → return → cache writes to DB later

REDIS CLI BASICS
  SET key value              → store a value
  GET key                    → retrieve a value
  DEL key                    → delete a key
  EXPIRE key 3600            → set TTL (seconds)
  TTL key                    → check remaining TTL
  KEYS pattern               → find keys (dev only!)

NODE-REDIS (v4+)
  const client = createClient({ url: 'redis://localhost:6379' });
  await client.connect();
  await client.set('key', 'value', { EX: 3600 });
  const val = await client.get('key');
  await client.del('key');

REDIS DATA TYPES
  Strings   → SET/GET               → simple values, counters
  Hashes    → HSET/HGET/HGETALL     → objects, user profiles
  Lists     → LPUSH/RPUSH/LRANGE    → queues, recent items
  Sets      → SADD/SMEMBERS/SINTER  → unique tags, online users
  Sorted    → ZADD/ZRANGE           → leaderboards, rankings
```

---

## Prerequisites

- Node.js and Express fundamentals (Sections 3.1-3.10)
- MongoDB/database query concepts
- Understanding of HTTP request-response cycle
- Basic command-line skills
- Docker (optional, for running Redis locally)

---

## Learning Objectives

By the end of this section, you will be able to:

1. Explain caching patterns and cache invalidation strategies
2. Install and use Redis from the command line
3. Integrate Redis with a Node.js/Express application
4. Cache database query results with TTL-based expiration
5. Use advanced Redis data structures (Hashes, Lists, Sets, Sorted Sets)
6. Implement Pub/Sub, session storage, and rate limiting with Redis

---

[<< Previous Section: 3.15 — WebSockets](../3.15-Realtime-Communication-WebSockets/README.md) | [Next Section: 3.17 — Error Handling >>](../3.17-Error-Handling-in-Express/README.md)
