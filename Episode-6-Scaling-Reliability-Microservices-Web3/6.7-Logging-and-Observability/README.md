# 6.7 -- Logging and Observability

> **Big Picture:** You cannot fix what you cannot see. **Observability** is the ability to understand a system's internal state from its external outputs. The three pillars -- **logs**, **metrics**, and **traces** -- work together to give you a complete picture. **Structured logging** makes logs searchable and parseable. **Metrics** tell you what is happening right now. **Alerting** ensures you find out about problems before your users do. Master these and your production systems become transparent instead of opaque.

---

## Overview

| Sub-topic | What You'll Learn |
|-----------|-------------------|
| [6.7.a](./6.7.a-Structured-Logging.md) | Why **structured logging** (JSON) beats plain text, log levels, Winston/Pino for Node.js, request ID propagation, correlation IDs, PII filtering, logging middleware |
| [6.7.b](./6.7.b-Monitoring-and-Metrics.md) | The **three pillars** of observability, RED method, infrastructure/business metrics, Prometheus/Grafana, percentile latency, SLIs/SLOs/SLAs, Node.js performance monitoring |
| [6.7.c](./6.7.c-Alerting-and-Event-Logging.md) | Alert design principles, thresholds and severity, on-call basics, alert fatigue, audit logging, event logging for compliance, runbooks, CloudWatch Alarms |

### Extra practice & revision

| File | Purpose |
|------|---------|
| [6.7-Exercise-Questions](./6.7-Exercise-Questions.md) | 35+ practice questions across all 3 subtopics |
| [6.7-Interview-Questions](./6.7-Interview-Questions.md) | 11 curated questions with model answers (beginner to advanced) |
| [6.7-Quick-Revision](./6.7-Quick-Revision.md) | Print-friendly cheat sheet: vocabulary, log levels, RED method, alerting rules |

Each extra file begins with **How to use this material (instructions)** -- follow that workflow first.

---

## Why Observability Matters

```
┌─────────────────────────────────────────────────────────────────────────┐
│                  THE THREE PILLARS OF OBSERVABILITY                     │
│                                                                         │
│   ┌──────────────────┐  ┌──────────────────┐  ┌──────────────────┐     │
│   │      LOGS        │  │     METRICS      │  │     TRACES       │     │
│   │                  │  │                  │  │                  │     │
│   │  Discrete events │  │  Numeric aggre-  │  │  Request journey │     │
│   │  with context    │  │  gations over    │  │  across services │     │
│   │                  │  │  time            │  │                  │     │
│   │  "What happened" │  │  "How is the     │  │  "Where did the  │     │
│   │                  │  │   system doing?" │  │   time go?"      │     │
│   │  ┌────────────┐  │  │  ┌────────────┐  │  │  ┌────────────┐  │     │
│   │  │ JSON lines │  │  │  │ Counters   │  │  │  │ Span trees │  │     │
│   │  │ Structured │  │  │  │ Gauges     │  │  │  │ Trace IDs  │  │     │
│   │  │ Searchable │  │  │  │ Histograms │  │  │  │ Waterfall  │  │     │
│   │  └────────────┘  │  │  └────────────┘  │  │  └────────────┘  │     │
│   └──────────────────┘  └──────────────────┘  └──────────────────┘     │
│         │                       │                       │               │
│         ▼                       ▼                       ▼               │
│   ┌─────────────────────────────────────────────────────────────────┐   │
│   │                      FULL OBSERVABILITY                         │   │
│   │   Logs + Metrics + Traces = complete understanding of your     │   │
│   │   system's behavior in production                              │   │
│   └─────────────────────────────────────────────────────────────────┘   │
│                                                                         │
│   WITHOUT OBSERVABILITY:         WITH OBSERVABILITY:                    │
│   "The site is slow"             "P99 latency spiked to 3.2s at        │
│   "Something broke"               14:32 on auth-service, caused by     │
│   "Users are complaining"          a slow DB query on user_sessions    │
│                                    table (trace-id: abc123)"           │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## One-line Cheat Sheet

> **Observability = Logs (what happened) + Metrics (how much) + Traces (where) -- structured, correlated, and alerted on**

---

## Prerequisites

- Solid understanding of **Node.js and Express** (Episode 3)
- Familiarity with **microservices concepts** (Section 6.1-6.2)
- Basic understanding of **cloud deployment** (Section 6.3)
- No prior monitoring experience required -- we explain everything from scratch

---

*Start with -> [6.7.a -- Structured Logging](./6.7.a-Structured-Logging.md)*
