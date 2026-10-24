# 6.8 — Production Hardening

> **Big Picture:** Before any service goes live it must be **hardened** — rate limiting stops abuse, secure headers block entire classes of web attacks, and DDoS protection ensures your system survives traffic it was never designed for. Production hardening is the difference between a demo that works and a service that **stays up under fire**.

---

## Overview

| Sub-topic | What You'll Learn |
|-----------|-------------------|
| [6.8.a](./6.8.a-Rate-Limiting.md) | Why **rate limiting** is essential, algorithms (fixed window, sliding window, token bucket, leaky bucket), Redis-based distributed limiting, tiered limits per endpoint, and complete implementation |
| [6.8.b](./6.8.b-CORS-and-Secure-Headers.md) | **CORS** mechanics (same-origin policy, preflight), Helmet.js, CSP, HSTS, cookie security, HTTPS enforcement, and full secure-headers configuration |
| [6.8.c](./6.8.c-DDoS-Protection.md) | **DDoS** attack types, AWS Shield, CloudFront, WAF rules, application-level mitigation, bot detection, connection limiting, and multi-layer defense |

### Extra practice & revision

| File | Purpose |
|------|---------|
| [6.8-Exercise-Questions](./6.8-Exercise-Questions.md) | 35+ practice questions across all 3 subtopics |
| [6.8-Interview-Questions](./6.8-Interview-Questions.md) | Model answers for common interview prompts (Beginner / Intermediate / Advanced) |
| [6.8-Quick-Revision](./6.8-Quick-Revision.md) | Compact cheat sheet (print-friendly) |

Each extra file begins with **How to use this material (instructions)** — follow that workflow first.

---

## Why Production Hardening Matters

```
┌─────────────────────────────────────────────────────────────────────────┐
│                    PRODUCTION SECURITY LAYERS                           │
│                                                                         │
│  Internet Traffic                                                       │
│       │                                                                 │
│       ▼                                                                 │
│  ┌──────────────────┐                                                   │
│  │  DDoS Protection  │  AWS Shield / CloudFront absorb volumetric       │
│  │  (Network Edge)   │  attacks before they reach your infra            │
│  └────────┬─────────┘                                                   │
│           ▼                                                             │
│  ┌──────────────────┐                                                   │
│  │  WAF              │  Web Application Firewall blocks SQL injection,  │
│  │  (Application     │  XSS payloads, and known bad patterns            │
│  │   Firewall)       │                                                  │
│  └────────┬─────────┘                                                   │
│           ▼                                                             │
│  ┌──────────────────┐                                                   │
│  │  Rate Limiter     │  Enforces per-IP / per-user / per-key request    │
│  │  (API Gateway)    │  quotas — stops abuse and runaway clients        │
│  └────────┬─────────┘                                                   │
│           ▼                                                             │
│  ┌──────────────────┐                                                   │
│  │  Secure Headers   │  CORS, CSP, HSTS, X-Frame-Options prevent       │
│  │  (Express / NLB)  │  cross-site attacks and data leakage             │
│  └────────┬─────────┘                                                   │
│           ▼                                                             │
│  ┌──────────────────┐                                                   │
│  │  Application      │  Input validation, auth, business logic —        │
│  │  Code             │  the last line of defense                        │
│  └──────────────────┘                                                   │
│                                                                         │
│  KEY INSIGHT: Defense in depth — no single layer is sufficient.         │
│  Each layer catches what the previous layer missed.                     │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## One-line Cheat Sheet

> **Production Hardening = Rate Limit requests + Set Secure Headers + Defend every layer against DDoS**

---

## Prerequisites

- Working knowledge of **Express.js** middleware (Episode 3)
- Familiarity with **HTTP headers** and **REST APIs** (Episode 3)
- Basic understanding of **AWS services** (Section 6.3)
- Understanding of **microservices** and **API gateways** (Sections 6.1-6.2)

---

*Start with → [6.8.a — Rate Limiting](./6.8.a-Rate-Limiting.md)*
