# 9.4 -- Structural Design Patterns

> **Big Picture:** Structural patterns deal with **object composition** -- how classes and objects are assembled into larger structures while keeping those structures flexible and efficient. They act as the architectural blueprints that let you connect incompatible pieces, simplify complex subsystems, control access, extend behavior, and build recursive hierarchies -- all without modifying existing code.

---

## Overview

| Sub-topic | What You'll Learn |
|-----------|-------------------|
| [9.4.a](./9.4.a-Adapter.md) | Adapter pattern -- bridging incompatible interfaces, wrapping third-party APIs, legacy integration |
| [9.4.b](./9.4.b-Facade.md) | Facade pattern -- simplified interface over complex subsystems, reducing coupling, API facades |
| [9.4.c](./9.4.c-Proxy.md) | Proxy pattern -- controlled access, lazy loading, caching, logging, and protection proxies |
| [9.4.d](./9.4.d-Decorator.md) | Decorator pattern -- dynamic behavior extension, middleware, function composition |
| [9.4.e](./9.4.e-Composite.md) | Composite pattern -- tree-like structures, recursive operations, file systems, menus |

### Extra practice & revision

| File | Purpose |
|------|---------|
| [9.4-Exercise-Questions](./9.4-Exercise-Questions.md) | 40+ practice questions + hints across all 9.4 subtopics |
| [9.4-Interview-Questions](./9.4-Interview-Questions.md) | 11 interview questions with model answers |
| [9.4-Quick-Revision](./9.4-Quick-Revision.md) | Pattern comparison, when-to-use guide, code snippets (print-friendly) |

Each extra file begins with **How to use this material (instructions)** -- follow that workflow first.

---

## Why Structural Patterns Matter

When systems grow, individual classes work fine on their own, but connecting them becomes painful. You face problems like:

- **Incompatible interfaces** -- a new payment provider uses a completely different API than your code expects
- **Overwhelming complexity** -- clients must coordinate dozens of subsystem objects to accomplish one task
- **Uncontrolled access** -- every caller can directly hit expensive resources with no throttling or permissions
- **Rigid hierarchies** -- adding behavior requires deep inheritance chains that become brittle
- **Flat representations** -- you need tree-like structures but end up with tangled if/else logic

Structural patterns solve each of these problems with a specific, well-tested approach:

```
                    STRUCTURAL DESIGN PATTERNS
                    ==========================

  Problem                          Pattern          Solution
  ============================     ============     ========================
  Incompatible interfaces     -->  ADAPTER     -->  Wrap old into expected
  Complex subsystem           -->  FACADE      -->  Single simplified entry
  Controlled/lazy access      -->  PROXY       -->  Surrogate controls access
  Dynamic behavior extension  -->  DECORATOR   -->  Wrap to add behavior
  Tree / part-whole hierarchy -->  COMPOSITE   -->  Uniform leaf/node API
```

---

## Pattern Comparison Matrix

| Aspect | Adapter | Facade | Proxy | Decorator | Composite |
|--------|---------|--------|-------|-----------|-----------|
| **Intent** | Make incompatible interfaces work together | Simplify a complex subsystem | Control access to an object | Add behavior dynamically | Treat individual and composite objects uniformly |
| **Wraps** | One object (different interface) | Many objects (subsystem) | One object (same interface) | One object (same interface) | Many objects (tree) |
| **Interface change** | Yes (translates) | Yes (simplifies) | No (identical) | No (identical) | No (uniform) |
| **Key strength** | Integration | Simplicity | Control | Flexibility | Recursion |
| **Common in** | API wrappers, legacy glue | Service layers, SDKs | Caching, auth, lazy load | Middleware, logging | File systems, UI trees |

---

## The Wrapper Family

Four of the five patterns involve **wrapping** -- but each wraps for a different reason:

```
  ┌──────────────────────────────────────────────────────────────────┐
  │                     THE WRAPPER FAMILY                           │
  │                                                                  │
  │  ADAPTER        wraps to TRANSLATE interface                     │
  │  ┌─────────┐                                                     │
  │  │ Client  │──► Adapter ──► Adaptee (different interface)        │
  │  └─────────┘                                                     │
  │                                                                  │
  │  FACADE         wraps to SIMPLIFY subsystem                      │
  │  ┌─────────┐                                                     │
  │  │ Client  │──► Facade ──► SubsystemA, SubsystemB, SubsystemC   │
  │  └─────────┘                                                     │
  │                                                                  │
  │  PROXY          wraps to CONTROL access                          │
  │  ┌─────────┐                                                     │
  │  │ Client  │──► Proxy ──► RealSubject (same interface)           │
  │  └─────────┘                                                     │
  │                                                                  │
  │  DECORATOR      wraps to ADD behavior                            │
  │  ┌─────────┐                                                     │
  │  │ Client  │──► DecoratorB ──► DecoratorA ──► Component          │
  │  └─────────┘                                                     │
  └──────────────────────────────────────────────────────────────────┘
```

---

## How the Patterns Relate

```
  ┌──────────────────────────────────────────────────────────────┐
  │                                                              │
  │   ADAPTER                          FACADE                    │
  │   "I translate so you can talk"    "I simplify so you       │
  │                                     don't have to know"     │
  │          │                               │                   │
  │          │  Both hide complexity          │                   │
  │          │  behind a new interface        │                   │
  │          └──────────┬────────────────────┘                   │
  │                     │                                        │
  │                     ▼                                        │
  │               PROXY                                          │
  │   "I control access to                                      │
  │    the real object"                                         │
  │          │                                                   │
  │          │  Same interface, but adds                         │
  │          │  cross-cutting concerns                           │
  │          ▼                                                   │
  │               DECORATOR                                      │
  │   "I add behaviors in layers                                │
  │    without changing the core"                               │
  │          │                                                   │
  │          │  Can be nested recursively                        │
  │          ▼                                                   │
  │               COMPOSITE                                      │
  │   "I build trees of objects with                            │
  │    a uniform interface"                                     │
  │                                                              │
  └──────────────────────────────────────────────────────────────┘
```

---

## Prerequisites

[Section 9.2 -- Design Principles](../9.2-Design-Principles/README.md) -- understanding SOLID principles (especially Open/Closed Principle and Interface Segregation Principle) is essential before studying structural patterns. These patterns are practical applications of those principles.

Familiarity with [Section 9.3 -- Creational Design Patterns](../9.3-Creational-Design-Patterns/README.md) is helpful but not strictly required.

---

*Start with -> [9.4.a -- Adapter](./9.4.a-Adapter.md)*
