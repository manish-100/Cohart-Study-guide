# 3.11 — Database Optimization

> **Efficient database operations are the backbone of performant applications. Mastering indexes, aggregation pipelines, and MongoDB operators transforms slow queries into instant responses.**

---

## Navigation

| File | Topic | Key Concepts |
|------|-------|-------------|
| [3.11.a](./3.11.a-MongoDB-Indexing.md) | MongoDB Indexing | B-tree, single/compound/text indexes, TTL |
| [3.11.b](./3.11.b-Indexing-Best-Practices.md) | Indexing Best Practices | explain(), ESR rule, selectivity, monitoring |
| [3.11.c](./3.11.c-MongoDB-Aggregation-Pipeline.md) | Aggregation Pipeline | $match, $group, $project, $lookup, $unwind |
| [3.11.d](./3.11.d-MongoDB-Operators.md) | MongoDB Operators | Comparison, logical, array, update operators |
| [3.11.e](./3.11.e-Advanced-Aggregation.md) | Advanced Aggregation | $facet, $bucket, $graphLookup, Atlas setup |
| [3.11-Exercise-Questions.md](./3.11-Exercise-Questions.md) | Exercises | 40+ hands-on questions |
| [3.11-Interview-Questions.md](./3.11-Interview-Questions.md) | Interview Prep | Common interview topics |
| [3.11-Quick-Revision.md](./3.11-Quick-Revision.md) | Quick Revision | Cheat sheet and summary |

---

## Prerequisites

- MongoDB basics and Mongoose (Episode 3.8)
- CRUD operations (Episode 3.9)
- Understanding of data modeling and schemas
- Basic knowledge of algorithmic complexity (Big O notation)

---

## Overview

This section covers everything you need to make MongoDB queries fast and efficient:

1. **Indexing** — how indexes work and which types to use
2. **Best Practices** — analyzing queries with `explain()`, the ESR rule
3. **Aggregation Pipeline** — powerful data processing and transformation
4. **Operators** — the full toolkit for querying and updating documents
5. **Advanced Aggregation** — facets, buckets, graph lookups, and Atlas

---

## Cheat Sheet

```js
// Create an index
db.users.createIndex({ email: 1 }, { unique: true });

// Compound index
db.orders.createIndex({ status: 1, createdAt: -1 });

// Analyze query performance
db.users.find({ email: "a@b.com" }).explain("executionStats");

// Aggregation pipeline
db.orders.aggregate([
  { $match: { status: "completed" } },
  { $group: { _id: "$customerId", total: { $sum: "$amount" } } },
  { $sort: { total: -1 } },
  { $limit: 10 },
]);

// Common operators
db.products.find({ price: { $gte: 10, $lte: 100 } });
db.users.updateOne({ _id: id }, { $set: { name: "New" }, $inc: { loginCount: 1 } });
```

| Operation | Without Index | With Index |
|-----------|--------------|------------|
| Find by email | O(n) collection scan | O(log n) B-tree lookup |
| Sort by date | In-memory sort (slow) | Index-ordered (fast) |
| Range query | Full scan + filter | Index range scan |
| Text search | Not possible | Text index search |

---

## Key Principle

> **Measure before you optimize.** Use `explain()` to identify actual bottlenecks. Not every collection needs indexes, and wrong indexes can hurt write performance. Let data and query patterns guide your indexing strategy.
