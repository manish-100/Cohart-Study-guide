# 9.1 — LLD Foundations (Low-Level Design)

> **Big Picture:** Low-Level Design is the art of translating high-level architecture into well-structured, maintainable code. It is where you decide which classes exist, how they relate, and what each method does — the blueprint that sits between a whiteboard diagram and working software.

---

## Overview

| Sub-topic | What You'll Learn |
|-----------|-------------------|
| [9.1.a](./9.1.a-What-Is-LLD.md) | What Low-Level Design is, how it differs from HLD, when it matters, and the components of good LLD |
| [9.1.b](./9.1.b-OOP-Fundamentals.md) | Classes, objects, encapsulation, inheritance, polymorphism, abstraction — with JS/TS code examples |
| [9.1.c](./9.1.c-Class-Relationships.md) | Association, aggregation, composition, dependency, inheritance, implementation — with ASCII diagrams |
| [9.1.d](./9.1.d-UML-Diagrams.md) | Class diagrams, sequence diagrams, visibility notation, and how to draw them in interviews |
| [9.1.e](./9.1.e-LLD-Interview-Approach.md) | Step-by-step method for cracking any LLD interview question in 45 minutes |

### Extra practice & revision

| File | Purpose |
|------|---------|
| [9.1-Exercise-Questions](./9.1-Exercise-Questions.md) | 40+ practice questions across all subtopics |
| [9.1-Interview-Questions](./9.1-Interview-Questions.md) | 11 interview questions (beginner/intermediate/advanced) with model answers |
| [9.1-Quick-Revision](./9.1-Quick-Revision.md) | Compact cheat sheet (print-friendly) |

Each extra file begins with **How to use this material (instructions)** — follow that workflow first.

---

## What Is Low-Level Design?

```
┌─────────────────────────────────────────────────────────────────┐
│                      SYSTEM DESIGN SPECTRUM                     │
│                                                                 │
│  HIGH-LEVEL DESIGN (HLD)           LOW-LEVEL DESIGN (LLD)      │
│  ─────────────────────             ─────────────────────        │
│  • Which services exist?           • Which classes exist?       │
│  • How do they communicate?        • What methods do they have? │
│  • What databases are used?        • How do objects interact?   │
│  • Load balancers, caches, CDNs    • Design patterns applied    │
│  • Scale & availability            • Code-level architecture    │
│                                                                 │
│  Think: "System Architecture"      Think: "Code Architecture"   │
└─────────────────────────────────────────────────────────────────┘
```

LLD answers the question: **"Given this high-level architecture, how exactly should we write the code?"**

---

## Why LLD Matters

1. **Interview readiness** — Most product companies ask at least one LLD or machine-coding round.
2. **Code quality** — Well-designed classes reduce bugs, ease testing, and make onboarding faster.
3. **Extensibility** — A good LLD lets you add features without rewriting half the codebase.
4. **Communication** — UML and class diagrams let teams agree on structure before writing code.

---

## After Completing All Sub-topics

| Resource | Purpose |
|----------|---------|
| [Exercise Questions](./9.1-Exercise-Questions.md) | 40+ practice questions (short-answer + code + diagrams) |
| [Interview Questions](./9.1-Interview-Questions.md) | 11 interview questions with model answers |
| [Quick Revision](./9.1-Quick-Revision.md) | One-page cheat sheet for fast review before interviews |

---

## Prerequisites

- Basic knowledge of **JavaScript or TypeScript** syntax (variables, functions, classes).
- Familiarity with writing and reading code — no design pattern knowledge required yet.

---

*Start with → [9.1.a — What Is LLD](./9.1.a-What-Is-LLD.md)*
