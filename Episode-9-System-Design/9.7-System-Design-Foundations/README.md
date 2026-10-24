# 9.7 — System Design Foundations (High-Level Design)

> **Big Picture:** High-Level Design (HLD) is the art of sketching a system's architecture on a whiteboard — choosing which services exist, how they communicate, what data stores and caches to use, and how the whole thing scales. It is the skill that separates a developer who writes code from an engineer who builds systems.

---

## Overview

| Sub-topic | What You'll Learn |
|-----------|-------------------|
| [9.7.a — What Is HLD](./9.7.a-What-Is-HLD.md) | System architecture overview, HLD vs LLD, components of HLD (services, databases, caches, queues, load balancers), architecture diagrams, whiteboard approach |
| [9.7.b — Requirements Analysis](./9.7.b-Requirements-Analysis.md) | Functional vs non-functional requirements, identifying core features, scalability/availability/consistency, back-of-envelope estimation, SLAs |
| [9.7.c — Breaking Into Components](./9.7.c-Breaking-Into-Components.md) | Decomposing systems into services, identifying boundaries, data flow, API contracts, dependency mapping, component diagrams |
| [9.7.d — Capacity Estimation](./9.7.d-Capacity-Estimation.md) | Users to QPS calculation, storage/bandwidth/memory estimation, rules of thumb, worked examples for Twitter, YouTube, URL shortener |
| [9.7.e — Interview Approach](./9.7.e-Interview-Approach.md) | Step-by-step interview framework (45 min), common mistakes, drawing diagrams, handling curveball questions |

### Extra practice & revision

| File | Purpose |
|------|---------|
| [Exercise Questions](./9.7-Exercise-Questions.md) | 40+ practice questions across all subtopics |
| [Interview Questions](./9.7-Interview-Questions.md) | 11 interview questions with model answers |
| [Quick Revision](./9.7-Quick-Revision.md) | Compact cheat sheet (print-friendly) |

Each extra file begins with **How to use this material (instructions)** — follow that workflow first.

---

## HLD vs LLD — Where Does This Fit?

```
┌─────────────────────────────────────────────────────────────────────┐
│                        SYSTEM DESIGN SPECTRUM                       │
│                                                                     │
│  HIGH-LEVEL DESIGN (HLD)              LOW-LEVEL DESIGN (LLD)       │
│  ─────────────────────                ─────────────────────         │
│  • Which services exist?              • Which classes exist?        │
│  • How do they communicate?           • What methods do they have?  │
│  • What databases / caches?           • How do objects interact?    │
│  • Load balancers, CDNs, queues       • Design patterns applied     │
│  • Scale, availability, consistency   • Code-level architecture     │
│                                                                     │
│  Scope: entire system                 Scope: single service/module  │
│  Artifact: architecture diagram       Artifact: class/sequence dia. │
│  Interview: "Design Twitter"          Interview: "Design a Parking  │
│                                         Lot system"                 │
└─────────────────────────────────────────────────────────────────────┘
```

---

## HLD vs LLD — Comparison Table

| Dimension | High-Level Design (HLD) | Low-Level Design (LLD) |
|-----------|------------------------|------------------------|
| **Scope** | Entire system / multiple services | Single service or module |
| **Audience** | Architects, senior engineers, interviewers | Developers implementing a module |
| **Key decisions** | Service boundaries, data stores, protocols, scaling strategy | Classes, interfaces, design patterns, data structures |
| **Diagrams** | Architecture / component / data-flow | Class diagrams, sequence diagrams, UML |
| **Trade-offs** | Consistency vs availability, latency vs throughput, cost vs reliability | Coupling vs cohesion, inheritance vs composition |
| **Interview prompt** | "Design a URL shortener at scale" | "Design the classes for a Parking Lot" |
| **Typical duration** | 35-45 min (interview) | 35-45 min (interview) |

---

## Why HLD Matters

1. **Interview readiness** — Every top tech company asks at least one system design round focused on HLD.
2. **Architectural thinking** — Understanding how distributed systems fit together makes you a stronger engineer.
3. **Communication** — Architecture diagrams let teams align on decisions before writing a single line of code.
4. **Scale awareness** — HLD forces you to reason about millions of users, petabytes of data, and global availability.

---

## One-Line Cheat Sheet

```
Requirements → Estimation → High-Level Diagram → Component Deep Dive → Trade-offs → Done
```

---

## After Completing All Sub-topics

| Resource | Purpose |
|----------|---------|
| [Exercise Questions](./9.7-Exercise-Questions.md) | 40+ practice questions (short-answer, estimation, diagrams) |
| [Interview Questions](./9.7-Interview-Questions.md) | 11 interview questions with model answers |
| [Quick Revision](./9.7-Quick-Revision.md) | One-page cheat sheet for fast review before interviews |

---

## Prerequisites

- [9.1 — LLD Foundations](../9.1-LLD-Foundations/README.md) — Classes, objects, design basics
- [9.2 — Design Principles](../9.2-Design-Principles/README.md) — SOLID, DRY, patterns overview
- Basic understanding of databases (SQL vs NoSQL), APIs (REST), and networking (HTTP, TCP)

---

*Start with → [9.7.a — What Is HLD](./9.7.a-What-Is-HLD.md)*
