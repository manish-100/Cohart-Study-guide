# 6.4 — Distributed Observability & Scaling

> **Big Picture:** Production microservices must **scale horizontally** to handle variable load, use **health checks** to maintain availability, and rely on **CloudWatch monitoring** to provide visibility into system behavior — together these form the observability and scaling layer that keeps distributed systems reliable, performant, and debuggable.

---

## Overview

| Sub-topic | What You'll Learn |
|-----------|-------------------|
| [6.4.a](./6.4.a-Horizontal-Scaling-with-ECS.md) | How to **scale ECS services horizontally** with auto-scaling policies, target tracking, step scaling, CPU/memory triggers, stateless architecture, and warm-up considerations |
| [6.4.b](./6.4.b-Health-Checks-and-Availability.md) | Why **health checks** matter in distributed systems, ECS vs ALB health checks, shallow vs deep checks, liveness vs readiness, grace periods, and cascading failure prevention |
| [6.4.c](./6.4.c-CloudWatch-Monitoring.md) | **CloudWatch** metrics, logs, alarms, dashboards, custom metrics from Node.js, structured logging, distributed tracing with X-Ray, and simulating failures |

### Extra practice & revision

| File | Purpose |
|------|---------|
| [6.4-Exercise-Questions](./6.4-Exercise-Questions.md) | 35+ practice questions across all 3 subtopics + answer hints |
| [6.4-Interview-Questions](./6.4-Interview-Questions.md) | 11 model answers for common interview prompts (Beginner / Intermediate / Advanced) |
| [6.4-Quick-Revision](./6.4-Quick-Revision.md) | Compact cheat sheet (print-friendly) |

Each extra file begins with **How to use this material (instructions)** — follow that workflow first.

---

## How Scaling and Monitoring Work Together

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│                  DISTRIBUTED OBSERVABILITY & SCALING FLOW                        │
│                                                                                 │
│  Incoming Traffic                                                               │
│       │                                                                         │
│       ▼                                                                         │
│  ┌──────────────┐         ┌──────────────────────────────┐                      │
│  │   ALB (Load  │────────▶│   ECS Service (Task Set)     │                      │
│  │   Balancer)  │         │  ┌──────┐ ┌──────┐ ┌──────┐ │                      │
│  │              │◀──health─│  │Task 1│ │Task 2│ │Task 3│ │                      │
│  │  /health ──▶ │  checks  │  └──┬───┘ └──┬───┘ └──┬───┘ │                      │
│  └──────────────┘         └─────┼────────┼────────┼──────┘                      │
│                                 │        │        │                              │
│                                 ▼        ▼        ▼                              │
│                          ┌─────────────────────────────┐                         │
│                          │        CloudWatch           │                         │
│                          │  ┌─────────┐ ┌───────────┐ │                         │
│                          │  │ Metrics  │ │   Logs    │ │                         │
│                          │  │CPU,Mem,  │ │Structured │ │                         │
│                          │  │TaskCount │ │  JSON     │ │                         │
│                          │  └────┬────┘ └─────┬─────┘ │                         │
│                          │       │            │       │                          │
│                          │  ┌────▼────┐ ┌─────▼─────┐ │                         │
│                          │  │ Alarms  │ │Dashboards │ │                         │
│                          │  │CPU>80%  │ │Real-time  │ │                         │
│                          │  │Errors>5 │ │visibility │ │                         │
│                          │  └────┬────┘ └───────────┘ │                         │
│                          └───────┼─────────────────────┘                         │
│                                  │                                               │
│                                  ▼                                               │
│                    ┌──────────────────────────┐                                  │
│                    │  Auto-Scaling Policies    │                                  │
│                    │  Target Tracking / Step   │                                  │
│                    │  Scale OUT ◀──▶ Scale IN  │                                  │
│                    └──────────────────────────┘                                  │
│                                                                                 │
│  KEY INSIGHT: Metrics drive scaling decisions. Health checks ensure only         │
│  healthy tasks receive traffic. Logs provide the narrative for debugging.        │
└─────────────────────────────────────────────────────────────────────────────────┘
```

---

## One-line Cheat Sheet

> **Scale horizontally with ECS auto-scaling, validate availability with health checks, observe everything with CloudWatch metrics + logs + alarms.**

---

## Prerequisites

- Completed **[6.3 — AWS Cloud-Native Deployment](../6.3-AWS-Cloud-Native-Deployment/README.md)** — ECS, ECR, ALB, and task definitions
- Familiarity with **Docker containers** and **ECS services** (Episode 6.2)
- Understanding of **Express.js** and **Node.js** backend architecture (Episode 3)
- Basic **AWS CLI** usage and IAM concepts

---

*Start with → [6.4.a — Horizontal Scaling with ECS](./6.4.a-Horizontal-Scaling-with-ECS.md)*
