# 2.3 — State and Re-rendering Logic

> **Big Picture:** State is what makes React applications interactive. It represents data that changes over time, and when state changes, React automatically re-renders the affected components. Understanding how state works and how React decides what to re-render is essential for building efficient, bug-free applications.

---

## Overview

| Sub-topic | What You'll Learn |
|---|---|
| [2.3.a — What Is State](./2.3.a-What-Is-State.md) | Data that changes over time |
| [2.3.b — useState Hook](./2.3.b-useState-Hook.md) | Managing local component state |
| [2.3.c — How React Re-renders](./2.3.c-How-React-Rerenders.md) | Understanding the reconciliation process |
| [2.3.d — Batching State Updates](./2.3.d-Batching-State-Updates.md) | Performance optimization internally |
| [2.3.e — Derived State](./2.3.e-Derived-State.md) | Avoiding unnecessary state variables |
| [2.3.f — Practical Build](./2.3.f-Practical-Build.md) | Interactive counter, toggle switch UI |

### Extra practice & revision

| File | Purpose |
|---|---|
| [Exercise Questions](./2.3-Exercise-Questions.md) | 60 hands-on practice questions |
| [Interview Questions](./2.3-Interview-Questions.md) | 18 questions with model answers |
| [Quick Revision](./2.3-Quick-Revision.md) | Compact cheat sheet for revision |

## One-Line Cheat Sheet

`State = component memory that triggers re-renders on change; useState returns [value, setter]; React batches updates for performance.`

## Prerequisites

- [2.1 — Introduction to React](../2.1-Introduction-To-React/)
- [2.2 — React Components and Props](../2.2-React-Components-And-Props/)

---

*Start with → [2.3.a — What Is State](./2.3.a-What-Is-State.md)*
