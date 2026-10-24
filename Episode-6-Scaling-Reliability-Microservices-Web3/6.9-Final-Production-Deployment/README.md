# 6.9 -- Final Production Deployment

> **Big Picture:** This is where everything comes together. You take your containerised microservices, wrap them in **production-grade Docker images**, deploy them to **EC2 instances** behind **Nginx with SSL/TLS**, connect a **custom domain**, and automate the entire pipeline with **CI/CD using GitHub Actions**. By the end of this section you can push code to `main` and watch it flow through build, test, and deploy -- zero manual steps, zero downtime.

---

## Overview

| Sub-topic | What You'll Learn |
|-----------|-------------------|
| [6.9.a](./6.9.a-Docker-Deployment.md) | Production **Dockerfile** best practices (multi-stage builds, non-root user, layer optimisation), Docker Compose for multi-service stacks, networking, volumes, health checks, secrets, resource limits |
| [6.9.b](./6.9.b-EC2-and-SSL.md) | Launching **EC2** instances for Node.js, process management with **PM2**, custom domains via **Route 53**, **SSL/TLS** with ACM and Let's Encrypt, Nginx reverse proxy, HTTPS termination |
| [6.9.c](./6.9.c-CI-CD-Pipelines.md) | **Continuous Integration** and **Continuous Deployment** with GitHub Actions, Docker image builds in CI, deploying to ECS, environment promotion (staging to production), rollback, blue/green and canary strategies |

### Extra practice & revision

| File | Purpose |
|------|---------|
| [6.9-Exercise-Questions](./6.9-Exercise-Questions.md) | 35+ practice questions + hands-on tasks across 6.9.a-c |
| [6.9-Interview-Questions](./6.9-Interview-Questions.md) | 11 curated questions with model answers (Beginner / Intermediate / Advanced) |
| [6.9-Quick-Revision](./6.9-Quick-Revision.md) | Compact cheat sheet (print-friendly) |

Each extra file begins with **How to use this material (instructions)** -- follow that workflow first.

---

## The Full Deployment Pipeline

```
+-------------------------------------------------------------------------+
|              CODE TO PRODUCTION -- THE COMPLETE PIPELINE                  |
|                                                                         |
|  Developer                                                              |
|     |                                                                   |
|     |  git push origin main                                             |
|     v                                                                   |
|  +------------------+                                                   |
|  |  GitHub Actions   |  CI/CD Pipeline                                  |
|  |  (6.9.c)         |                                                   |
|  +--------+---------+                                                   |
|           |                                                             |
|     +-----+------+------+------+                                        |
|     |     |      |      |      |                                        |
|     v     v      v      v      v                                        |
|   Lint  Test   Build  Scan   Push                                       |
|   ESLint Jest  Docker Trivy  ECR                                        |
|     |     |      |      |      |                                        |
|     +-----+------+------+------+                                        |
|           |                                                             |
|           v                                                             |
|  +------------------+                                                   |
|  |  Docker Image     |  Multi-stage build, non-root, <100 MB           |
|  |  (6.9.a)         |  Pushed to ECR / Docker Hub                      |
|  +--------+---------+                                                   |
|           |                                                             |
|           v                                                             |
|  +------------------+       +------------------+                        |
|  |  EC2 Instance     | <--- |  Route 53        |  api.example.com      |
|  |  (6.9.b)         |      |  Custom Domain    |  A record / CNAME     |
|  +--------+---------+      +------------------+                        |
|           |                                                             |
|           v                                                             |
|  +------------------+       +------------------+                        |
|  |  Nginx            | <--- |  SSL/TLS Cert    |  ACM or Let's Encrypt |
|  |  Reverse Proxy    |      |  (6.9.b)         |  HTTPS termination    |
|  +--------+---------+      +------------------+                        |
|           |                                                             |
|           v                                                             |
|  +------------------+                                                   |
|  |  Node.js App      |  PM2 cluster mode, health checks                |
|  |  (Docker / PM2)   |  Zero-downtime restarts                         |
|  +------------------+                                                   |
|                                                                         |
|  Result: push code --> automatic build, test, deploy, live with HTTPS   |
+-------------------------------------------------------------------------+
```

---

## One-Line Cheat Sheet

> **Production = Docker multi-stage image + EC2/ECS hosting + Nginx SSL termination + custom domain + GitHub Actions CI/CD = push-to-deploy.**

---

## Prerequisites

| Requirement | Why |
|-------------|-----|
| [6.3 -- AWS Cloud-Native Deployment](../6.3-AWS-Cloud-Native-Deployment/README.md) | You need ECR, ECS, ALB, VPC, and IAM foundations before automating deployments |
| [6.8 -- Production Hardening](../6.8-Production-Hardening/README.md) | Rate limiting, circuit breakers, and graceful degradation are assumed to be in place before you deploy |
| Docker basics (Dockerfile, `docker build`, `docker run`) | Section 6.9.a builds on core Docker knowledge |
| AWS CLI installed and configured | Required for ECR push and ECS deployment commands |
| A GitHub repository | CI/CD pipeline files live inside your repo |
| Basic Nginx familiarity (helpful, not required) | We walk through config from scratch in 6.9.b |

---

## Suggested Study Order

1. Read **6.9.a** to master production Docker images and multi-service Compose stacks.
2. Work through **6.9.b** to deploy on EC2 with a custom domain and SSL.
3. Study **6.9.c** to automate everything with CI/CD.
4. Test yourself with **Exercise Questions**.
5. Rehearse with **Interview Questions**.
6. Print **Quick Revision** for interview day.

---

## What Comes Next

| Episode | Topic |
|---------|-------|
| 6.10+ | Web3, Blockchain, and Decentralised Application Patterns |

---

*Part of the Cohart Full-Stack Engineering Study Guide -- Episode 6: Scaling, Reliability, Microservices & Web3*
