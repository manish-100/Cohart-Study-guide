# 9.5 Behavioral Design Patterns

## Overview

Behavioral design patterns are concerned with **algorithms and the assignment of responsibilities between objects**. They describe not just patterns of objects or classes, but also the patterns of communication between them. These patterns characterize complex control flows that are difficult to follow at runtime, shifting your focus from flow of control to the way objects are interconnected.

While creational patterns deal with object creation and structural patterns with composition, behavioral patterns focus on **how objects interact and distribute responsibility**.

```
+-----------------------------------------------------------------------+
|                    BEHAVIORAL DESIGN PATTERNS                         |
|                                                                       |
|   "It's not about what objects ARE,                                   |
|    it's about what objects DO and how they COMMUNICATE"               |
|                                                                       |
|   +-------------+  +-----------+  +-----------+  +------------+      |
|   |  Observer    |  | Strategy  |  |  Command  |  |  Iterator  |      |
|   | (Events)     |  | (Algos)   |  | (Actions) |  | (Traverse) |      |
|   +-------------+  +-----------+  +-----------+  +------------+      |
|                                                                       |
|   +-------------+  +-----------+  +-------------+  +----------+      |
|   |   State     |  | Template  |  |  Chain of   |  | Mediator |      |
|   | (Machines)  |  |  Method   |  |Responsibility|  | (Hub)    |      |
|   +-------------+  +-----------+  +-------------+  +----------+      |
+-----------------------------------------------------------------------+
```

---

## Prerequisites

| Prerequisite | Topic | Why It Matters |
|---|---|---|
| **9.2** | OOP Fundamentals | Classes, inheritance, polymorphism, and encapsulation are the building blocks |
| **9.3** | SOLID Principles | Open/Closed, Single Responsibility, and Dependency Inversion principles guide pattern choices |
| **9.4** | Creational & Structural Patterns | Understanding Factory, Singleton, Decorator, and Adapter provides context |

---

## Subtopics

| # | Topic | File | Key Concepts |
|---|---|---|---|
| 9.5.a | **Observer Pattern** | [9.5.a-Observer.md](./9.5.a-Observer.md) | Publisher/Subscriber, EventEmitter, DOM events, decoupling |
| 9.5.b | **Strategy Pattern** | [9.5.b-Strategy.md](./9.5.b-Strategy.md) | Interchangeable algorithms, sorting/payment/compression strategies |
| 9.5.c | **Command Pattern** | [9.5.c-Command.md](./9.5.c-Command.md) | Encapsulated actions, undo/redo, task queues, macros |
| 9.5.d | **Iterator Pattern** | [9.5.d-Iterator.md](./9.5.d-Iterator.md) | Sequential access, Symbol.iterator, generators, lazy evaluation |
| 9.5.e | **State Pattern** | [9.5.e-State.md](./9.5.e-State.md) | State machines, order transitions, vending machines, traffic lights |
| 9.5.f | **Template Method** | [9.5.f-Template-Method.md](./9.5.f-Template-Method.md) | Skeleton algorithms, hook methods, data pipelines |
| 9.5.g | **Chain of Responsibility** | [9.5.g-Chain-of-Responsibility.md](./9.5.g-Chain-of-Responsibility.md) | Handler chains, Express middleware, approval workflows |
| 9.5.h | **Mediator Pattern** | [9.5.h-Mediator.md](./9.5.h-Mediator.md) | Centralized communication, chat rooms, air traffic control |

---

## Extra Practice & Resources

| Resource | File | Description |
|---|---|---|
| Exercise Questions | [9.5-Exercise-Questions.md](./9.5-Exercise-Questions.md) | 50+ hands-on questions across all 8 patterns |
| Interview Questions | [9.5-Interview-Questions.md](./9.5-Interview-Questions.md) | 11 interview questions with detailed model answers |
| Quick Revision | [9.5-Quick-Revision.md](./9.5-Quick-Revision.md) | Comparison tables, when-to-use guide, code cheat sheets |

---

## How Behavioral Patterns Relate to Each Other

```
                        +-------------------+
                        |     Mediator      |
                        | (Central Hub)     |
                        +--------+----------+
                                 |
                    Reduces coupling between
                                 |
        +------------------------+------------------------+
        |                        |                        |
+-------v--------+    +---------v--------+    +-----------v------+
|    Observer     |    | Chain of Resp.   |    |     Command      |
| (1-to-many     |    | (Pass along      |    | (Encapsulate     |
|  notifications) |    |  chain)          |    |  requests)       |
+----------------+    +------------------+    +------------------+
                                                       |
                                              Can use with
                                                       |
                                              +--------v---------+
                                              |     Iterator     |
                                              | (Traverse        |
                                              |  command queue)  |
                                              +------------------+

+----------------+    +------------------+    +------------------+
|    Strategy    |    |     State        |    |  Template Method |
| (Swap algos   |    | (Swap behavior   |    | (Fixed skeleton, |
|  at runtime)  |    |  based on state) |    |  variable steps) |
+----------------+    +------------------+    +------------------+
        |                     |
        +-----Similar to------+
        (Both change behavior, but State
         transitions automatically while
         Strategy is chosen externally)
```

---

## Learning Path

1. **Start with Observer** -- the most ubiquitous pattern in JavaScript (events everywhere)
2. **Then Strategy** -- shows how to replace conditionals with polymorphism
3. **Then Command** -- builds on encapsulation, introduces undo/redo
4. **Then Iterator** -- deeply built into JavaScript (for...of, generators)
5. **Then State** -- powerful state machine pattern for complex workflows
6. **Then Template Method** -- inheritance-based pattern for algorithm skeletons
7. **Then Chain of Responsibility** -- essential for middleware understanding
8. **Finally Mediator** -- ties together decoupling concepts

---

## Key Principle

> **"Favor composition over inheritance, and communication over coupling."**
>
> Behavioral patterns give you the tools to build systems where objects collaborate efficiently without knowing each other's concrete types.
