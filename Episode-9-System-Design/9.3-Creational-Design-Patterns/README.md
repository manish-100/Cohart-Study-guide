# 9.3 Creational Design Patterns

## Overview

Creational design patterns deal with **object creation mechanisms** -- they abstract the instantiation process so your code doesn't depend on hard-coded classes and constructors scattered everywhere. Instead of `new ConcreteClass()` peppered through your codebase, creational patterns give you controlled, flexible, and testable ways to bring objects into existence.

This section covers the five classic creational patterns from the Gang of Four (GoF), adapted for modern JavaScript/Node.js development.

---

## Prerequisites

| Prerequisite | Section | Why It Matters |
|---|---|---|
| Design Principles (SOLID, DRY, KISS) | 9.2 | Creational patterns are *implementations* of these principles |
| LLD Foundations (classes, interfaces, UML) | 9.1 | You need to read class diagrams and understand polymorphism |

---

## Subtopic Table

| # | Subtopic | File | Core Idea |
|---|---|---|---|
| 9.3.a | Singleton | `9.3.a-Singleton.md` | Ensure a class has only one instance with a global access point |
| 9.3.b | Factory Method | `9.3.b-Factory-Method.md` | Define an interface for creating objects, let subclasses decide which class to instantiate |
| 9.3.c | Abstract Factory | `9.3.c-Abstract-Factory.md` | Create families of related objects without specifying concrete classes |
| 9.3.d | Builder | `9.3.d-Builder.md` | Construct complex objects step by step with a fluent interface |
| 9.3.e | Prototype | `9.3.e-Prototype.md` | Clone existing objects instead of creating from scratch |

---

## Pattern Comparison Table

| Pattern | Intent | Number of Objects | Complexity | When You Reach For It |
|---|---|---|---|---|
| **Singleton** | Exactly one instance, globally accessible | 1 | Low | Config, logger, DB connection pool |
| **Factory Method** | Delegate instantiation to subclasses/functions | Many (one type at a time) | Low-Medium | You know *when* to create but not *what* to create |
| **Abstract Factory** | Create families of related objects | Many (families) | Medium-High | Cross-platform UI, swappable DB layers |
| **Builder** | Step-by-step construction of complex objects | 1 (complex) | Medium | Objects with many optional parameters |
| **Prototype** | Clone an existing object | Many (copies) | Low | Expensive creation, configuration templates |

---

## How They Relate

```
                        Creational Patterns
                               |
          +--------------------+--------------------+
          |                    |                    |
     Control HOW          Control WHAT         Control HOW MANY
     objects are built     gets created         instances exist
          |                    |                    |
       Builder            Factory Method        Singleton
       Prototype          Abstract Factory
```

**Singleton** controls *how many* -- exactly one.
**Factory Method / Abstract Factory** control *what* gets created -- decoupling the caller from concrete classes.
**Builder** controls *how* -- step-by-step construction.
**Prototype** controls *how* -- by cloning rather than constructing.

---

## Real-World Analogy

Think of building a house:

- **Singleton** -- There is only ONE city planning office. Everyone goes to the same one.
- **Factory Method** -- You tell the contractor "build me a door." They decide if it's wood, steel, or glass based on your house type.
- **Abstract Factory** -- You pick "Modern" or "Victorian" style. The factory gives you matching doors, windows, and roofing -- all from the same family.
- **Builder** -- The architect builds your house step by step: foundation, walls, roof, interior. You can skip the pool if you want.
- **Prototype** -- The developer has a model home. New homes are cloned from it with small customizations.

---

## Quick Decision Guide

```
Do you need exactly one instance?
  YES --> Singleton

Do you need to create objects without specifying the exact class?
  YES --> Is it one product or a family of products?
            One product    --> Factory Method
            Family         --> Abstract Factory

Does the object have many optional parameters or complex construction?
  YES --> Builder

Is creating the object expensive and you need many similar copies?
  YES --> Prototype
```

---

## Supporting Files

| File | Purpose |
|---|---|
| `9.3-Exercise-Questions.md` | 40+ practice questions across all five patterns |
| `9.3-Interview-Questions.md` | 11 interview questions with model answers |
| `9.3-Quick-Revision.md` | Cheat sheet with tables, snippets, and decision guides |

---

## Key Takeaways

1. Creational patterns **decouple** object creation from usage -- making code more flexible and testable.
2. In JavaScript, some patterns (Singleton, Prototype) feel more natural because of the language's module system and prototypal inheritance.
3. You rarely use these patterns in isolation -- a Builder might use a Factory internally, and a Factory might return Singletons.
4. Don't force a pattern where it isn't needed. A simple `new` is fine until the complexity demands otherwise.

---

> **Explain-It Challenge:** You're onboarding a junior developer. Explain why `new DatabaseConnection()` scattered across 50 files is worse than using a creational pattern, using no more than three sentences.
