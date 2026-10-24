# Episode 2 — React, Frontend Architecture & Next.js

> **Your journey from UI library basics to production-grade frontend architecture.**
> After mastering JavaScript fundamentals in Episode 1, this episode takes you through React's component model, state management ecosystem, performance patterns, and finally into Next.js — the full-stack React framework that powers modern web applications.

---

## What You Will Learn

By the end of this episode you will be able to:

- Build complex, interactive UIs using React's component-based architecture
- Manage local and global state with hooks, Context API, Zustand, and Redux
- Handle routing, forms, API integration, and performance optimization
- Understand rendering strategies (CSR, SSR, SSG, ISR) and when to use each
- Build full-stack applications with Next.js including API routes and Server Actions

---

## Table of Contents

| #    | Topic                                      | Folder                                                                 |
| ---- | ------------------------------------------ | ---------------------------------------------------------------------- |
| 2.1  | Introduction to React                      | [`2.1-Introduction-to-React/`](./2.1-Introduction-to-React/)           |
| 2.2  | React Components & Props                   | [`2.2-React-Components-and-Props/`](./2.2-React-Components-and-Props/) |
| 2.3  | State & Re-rendering Logic                 | [`2.3-State-and-Rerendering-Logic/`](./2.3-State-and-Rerendering-Logic/) |
| 2.4  | React Lifecycle Methods                    | [`2.4-React-Lifecycle-Methods/`](./2.4-React-Lifecycle-Methods/)       |
| 2.5  | Event Handling & Conditional Rendering     | [`2.5-Event-Handling-and-Conditional-Rendering/`](./2.5-Event-Handling-and-Conditional-Rendering/) |
| 2.6  | Component Architecture Principles          | [`2.6-Component-Architecture-Principles/`](./2.6-Component-Architecture-Principles/) |
| 2.7  | Useful Hooks in React                      | [`2.7-Useful-Hooks-in-React/`](./2.7-Useful-Hooks-in-React/)          |
| 2.8  | useEffect Deep Dive                        | [`2.8-useEffect-Deep-Dive/`](./2.8-useEffect-Deep-Dive/)              |
| 2.9  | Custom Hooks & Reusable Logic              | [`2.9-Custom-Hooks-and-Reusable-Logic/`](./2.9-Custom-Hooks-and-Reusable-Logic/) |
| 2.10 | Advanced Reusability Patterns              | [`2.10-Advanced-Reusability-Patterns/`](./2.10-Advanced-Reusability-Patterns/) |
| 2.11 | Routing & Application Structure            | [`2.11-Routing-and-Application-Structure/`](./2.11-Routing-and-Application-Structure/) |
| 2.12 | Server State & API Integration             | [`2.12-Server-State-and-API-Integration/`](./2.12-Server-State-and-API-Integration/) |
| 2.13 | Global State Management                    | [`2.13-Global-State-Management/`](./2.13-Global-State-Management/)     |
| 2.14 | State Management Using Redux               | [`2.14-State-Management-Using-Redux/`](./2.14-State-Management-Using-Redux/) |
| 2.15 | Advanced Forms & Validation                | [`2.15-Advanced-Forms-and-Validation/`](./2.15-Advanced-Forms-and-Validation/) |
| 2.16 | Performance Optimization in React          | [`2.16-Performance-Optimization-in-React/`](./2.16-Performance-Optimization-in-React/) |
| 2.17 | Understanding Full Stack Frameworks        | [`2.17-Understanding-Full-Stack-Frameworks/`](./2.17-Understanding-Full-Stack-Frameworks/) |
| 2.18 | Getting Started with Next.js               | [`2.18-Getting-Started-with-NextJS/`](./2.18-Getting-Started-with-NextJS/) |
| 2.19 | Rendering Strategies in Next.js            | [`2.19-Rendering-Strategies-in-NextJS/`](./2.19-Rendering-Strategies-in-NextJS/) |
| 2.20 | Building APIs with Next.js                 | [`2.20-Building-APIs-with-NextJS/`](./2.20-Building-APIs-with-NextJS/) |
| 2.21 | Working with Server Actions                | [`2.21-Working-with-Server-Actions/`](./2.21-Working-with-Server-Actions/) |

---

## Learning Path

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    EPISODE 2 — LEARNING PATH                                │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  ┌─────────────┐   ┌─────────────┐   ┌─────────────┐   ┌─────────────┐    │
│  │  2.1 Intro   │──▶│ 2.2 Comps & │──▶│ 2.3 State & │──▶│ 2.4 Life-   │    │
│  │  to React    │   │ Props       │   │ Re-render   │   │ cycle       │    │
│  └─────────────┘   └─────────────┘   └─────────────┘   └──────┬──────┘    │
│                                                                 │           │
│  ┌─────────────┐   ┌─────────────┐   ┌─────────────┐          │           │
│  │ 2.7 Hooks   │──▶│ 2.6 Comp    │──▶│ 2.5 Events  │◀─────────┘           │
│  │ Overview    │   │ Arch        │   │ & Cond      │                       │
│  └──────┬──────┘   └─────────────┘   └─────────────┘                       │
│         │                                                                   │
│         ▼                                                                   │
│  ┌─────────────┐   ┌─────────────┐   ┌─────────────┐                       │
│  │ 2.8 useEff  │──▶│ 2.9 Custom  │──▶│ 2.10 Adv    │                       │
│  │ Deep Dive   │   │ Hooks       │   │ Patterns    │                       │
│  └─────────────┘   └─────────────┘   └──────┬──────┘                       │
│                                              │                              │
│         ┌────────────────────────────────────┘                              │
│         ▼                                                                   │
│  ┌─────────────┐   ┌─────────────┐   ┌─────────────┐   ┌─────────────┐    │
│  │ 2.11 Rout-  │──▶│ 2.12 Server │──▶│ 2.13 Global │──▶│ 2.14 Redux  │    │
│  │ ing         │   │ State & API │   │ State       │   │             │    │
│  └─────────────┘   └─────────────┘   └─────────────┘   └──────┬──────┘    │
│                                                                 │           │
│  ┌─────────────┐   ┌─────────────┐                             │           │
│  │ 2.16 Perf   │──▶│ 2.15 Forms  │◀────────────────────────────┘           │
│  │ Optim       │   │ & Validation│                                         │
│  └──────┬──────┘   └─────────────┘                                         │
│         │                                                                   │
│         ▼                                                                   │
│  ┌─────────────┐   ┌─────────────┐   ┌─────────────┐   ┌─────────────┐    │
│  │ 2.17 Full   │──▶│ 2.18 Next.  │──▶│ 2.19 Render │──▶│ 2.20 APIs   │    │
│  │ Stack Fwks  │   │ js Start    │   │ Strategies  │   │ in Next     │    │
│  └─────────────┘   └─────────────┘   └─────────────┘   └──────┬──────┘    │
│                                                                 │           │
│                                        ┌─────────────┐         │           │
│                                        │ 2.21 Server │◀────────┘           │
│                                        │ Actions     │                     │
│                                        └─────────────┘                     │
│                                                                             │
│  PREREQUISITE: Episode 1 — JavaScript Fundamentals                          │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## How to Use This Material

1. **Follow the numbered order** — topics build on each other.
2. **Read every sub-topic file** — each covers one focused concept in depth.
3. **Type out every code example** — reading is not the same as doing.
4. **Complete the Exercise Questions** — they test understanding, not memorization.
5. **Use Interview Questions** for preparation — model answers show how to communicate.
6. **Quick Revision** files are for review before interviews or exams.
7. **Build the practical projects** — they tie concepts together into real applications.

---

*Last updated: April 2026*
