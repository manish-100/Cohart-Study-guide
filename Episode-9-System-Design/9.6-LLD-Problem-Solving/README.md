# 9.6 — LLD Problem Solving / Machine Coding

> **Big Picture:** This section puts everything from 9.1-9.5 into practice. You will design and implement complete systems from scratch — the exact kind of problems asked in LLD / machine-coding interview rounds. Each problem follows a repeatable approach: gather requirements, identify entities, define relationships, pick patterns, and write working code.

---

## Overview

| Sub-topic | Problem | Core Concepts |
|-----------|---------|---------------|
| [9.6.a](./9.6.a-Parking-Lot-System.md) | Parking Lot System | Entity modeling, enums, strategy pattern for pricing |
| [9.6.b](./9.6.b-Vending-Machine.md) | Vending Machine | State pattern, finite state machine, refund logic |
| [9.6.c](./9.6.c-BookMyShow.md) | BookMyShow (Movie Booking) | Seat locking, concurrency, payment flow |
| [9.6.d](./9.6.d-Splitwise.md) | Splitwise (Expense Sharing) | Split strategies, graph simplification, balance calc |
| [9.6.e](./9.6.e-Uber-Ola.md) | Uber/Ola (Ride Sharing) | Location matching, trip lifecycle, fare calculation |
| [9.6.f](./9.6.f-Elevator-System.md) | Elevator System | Scheduling algorithms (FCFS, SCAN, LOOK), state machine |

### Extra practice & revision

| File | Purpose |
|------|---------|
| [9.6-Exercise-Questions](./9.6-Exercise-Questions.md) | Design prompts for 10+ additional systems |
| [9.6-Interview-Questions](./9.6-Interview-Questions.md) | 11 interview questions on LLD approach and design decisions |
| [9.6-Quick-Revision](./9.6-Quick-Revision.md) | LLD approach template, common entities, patterns per problem |

Each extra file begins with **How to use this material (instructions)** — follow that workflow first.

---

## LLD Problem-Solving Approach (Template)

Use this 6-step template for every problem in this section and in interviews:

```
┌─────────────────────────────────────────────────────────────────────┐
│                    LLD PROBLEM-SOLVING TEMPLATE                     │
│                                                                     │
│  STEP 1 — Clarify Requirements (5 min)                              │
│    • Functional: What must the system do?                           │
│    • Non-functional: Concurrency? Scale? Real-time?                 │
│    • Boundaries: What is OUT of scope?                              │
│                                                                     │
│  STEP 2 — Identify Entities / Nouns (5 min)                         │
│    • Read requirements and underline every noun                     │
│    • Each noun is a candidate class                                 │
│    • Group related nouns (e.g., Vehicle, Car, Bike → hierarchy)     │
│                                                                     │
│  STEP 3 — Define Relationships (5 min)                              │
│    • Which classes own which? (composition vs. aggregation)          │
│    • Which classes use which? (dependency)                           │
│    • Which classes extend which? (inheritance)                       │
│                                                                     │
│  STEP 4 — Design Core APIs / Methods (5 min)                        │
│    • List key actions (verbs) from requirements                     │
│    • Assign each action to the responsible class                    │
│    • Define method signatures                                       │
│                                                                     │
│  STEP 5 — Apply Design Patterns (5 min)                             │
│    • Strategy → varying algorithms (pricing, splitting)             │
│    • State → objects with lifecycle (elevator, vending machine)      │
│    • Observer → notifications, events                                │
│    • Singleton → global controllers                                  │
│    • Factory → object creation (vehicles, tickets)                   │
│                                                                     │
│  STEP 6 — Implement + Walk Through (20 min)                         │
│    • Write clean, working code                                      │
│    • Walk through one happy path end-to-end                         │
│    • Discuss edge cases and extensibility                           │
└─────────────────────────────────────────────────────────────────────┘
```

---

## Prerequisites

Before starting this section you should be comfortable with:

| Section | Topic | Why It Matters Here |
|---------|-------|---------------------|
| 9.1 | LLD Foundations | Classes, relationships, UML, interview approach |
| 9.2 | Design Principles | SOLID, DRY, KISS — you will apply these in every design |
| 9.3 | Creational Patterns | Singleton, Factory — used in controllers and object creation |
| 9.4 | Structural Patterns | Adapter, Composite — used in complex entity hierarchies |
| 9.5 | Behavioral Patterns | Strategy, State, Observer — the most-used patterns in LLD problems |

---

## How to Study Each Problem

1. **Read the requirements** — try to list entities yourself before reading the solution.
2. **Draw the class diagram** — on paper, then compare with the one in the file.
3. **Implement from scratch** — type the code yourself; do not copy-paste.
4. **Test with edge cases** — what happens if the lot is full? if payment fails?
5. **Time yourself** — aim to finish a full design in 45 minutes.

---

*Start with -> [9.6.a — Parking Lot System](./9.6.a-Parking-Lot-System.md)*
