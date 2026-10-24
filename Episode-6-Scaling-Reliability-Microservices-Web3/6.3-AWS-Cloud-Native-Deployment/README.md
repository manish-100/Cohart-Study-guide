# 6.3 — AWS Cloud-Native Deployment

> **Big Picture:** Once you have containerized microservices (6.1-6.2), you need somewhere to **run them in production**. AWS provides a fully managed pipeline: push container images to **ECR**, run them on **ECS with Fargate** (no servers to manage), route traffic through an **Application Load Balancer**, and secure everything with **VPC networking** and **IAM roles**. This section takes you from `docker build` on your laptop to a production-grade deployment on AWS.

---

## Overview

| Sub-topic | What You'll Learn |
|-----------|-------------------|
| [6.3.a](./6.3.a-ECR-and-Container-Images.md) | Amazon **ECR** as a managed Docker registry — building, tagging, pushing images, lifecycle policies, vulnerability scanning |
| [6.3.b](./6.3.b-ECS-and-Fargate.md) | **ECS** concepts (clusters, services, tasks), task definition anatomy, **Fargate** vs EC2 launch types, auto-scaling, rolling deployments |
| [6.3.c](./6.3.c-Application-Load-Balancer.md) | **ALB** Layer 7 routing — target groups, health checks, path-based routing, HTTPS termination, ALB + ECS integration |
| [6.3.d](./6.3.d-VPC-Networking-and-IAM.md) | **VPC** architecture (subnets, security groups, NAT Gateway), **IAM** roles for ECS (task role vs execution role), least privilege |

### Extra practice & revision

| File | Purpose |
|------|---------|
| [6.3-Exercise-Questions](./6.3-Exercise-Questions.md) | 40+ practice questions + hands-on tasks across 6.3.a-d |
| [6.3-Interview-Questions](./6.3-Interview-Questions.md) | Model answers for common interview prompts (Beginner / Intermediate / Advanced) |
| [6.3-Quick-Revision](./6.3-Quick-Revision.md) | Compact cheat sheet (print-friendly) |

Each extra file begins with **How to use this material (instructions)** — follow that workflow first.

---

## The AWS Cloud-Native Deployment Pipeline

```
┌─────────────────────────────────────────────────────────────────────────────┐
│            FROM CODE TO PRODUCTION ON AWS                                    │
│                                                                             │
│  Developer Laptop                                                           │
│       │                                                                     │
│       │  docker build + docker push                                         │
│       ▼                                                                     │
│  ┌──────────────┐                                                           │
│  │  Amazon ECR   │  Managed Docker registry                                 │
│  │  (6.3.a)      │  Stores your container images                            │
│  └──────┬───────┘                                                           │
│         │  ECS pulls image                                                  │
│         ▼                                                                   │
│  ┌──────────────┐                                                           │
│  │  Amazon ECS   │  Container orchestrator                                  │
│  │  + Fargate    │  Runs containers without managing servers                │
│  │  (6.3.b)      │  Auto-scales, rolling deployments                       │
│  └──────┬───────┘                                                           │
│         │  Registers with load balancer                                     │
│         ▼                                                                   │
│  ┌──────────────┐                                                           │
│  │  Application  │  Layer 7 routing                                         │
│  │  Load Balancer│  /api/users → user-service                               │
│  │  (6.3.c)      │  /api/orders → order-service                            │
│  └──────┬───────┘                                                           │
│         │                                                                   │
│         ▼                                                                   │
│     End Users                                                               │
│                                                                             │
│  All of this runs inside a VPC with IAM roles (6.3.d)                       │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## One-line Cheat Sheet

> **AWS Deployment = Build image → Push to ECR → Define task in ECS → Run on Fargate → Route via ALB → Secure with VPC + IAM**

---

## Prerequisites

- Understanding of **microservice architecture** and why we decompose monoliths ([6.1 — Microservice Foundations](../6.1-Microservice-Foundations/README.md))
- Hands-on experience **building and orchestrating microservices** with Docker Compose ([6.2 — Building and Orchestrating Microservices](../6.2-Building-and-Orchestrating-Microservices/README.md))
- Comfort with **Docker basics** — `Dockerfile`, `docker build`, `docker run`, image layers, and registries
- Basic familiarity with **AWS concepts** — regions, the AWS CLI, and the AWS Management Console
- A working **AWS account** with the AWS CLI installed and configured (`aws configure`)

---

*Start with → [6.3.a — ECR and Container Images](./6.3.a-ECR-and-Container-Images.md)*
