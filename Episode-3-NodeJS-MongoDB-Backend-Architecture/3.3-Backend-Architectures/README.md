# 3.3 — Backend Architectures

> **How you organize your backend code determines whether your project thrives or collapses under its own weight. This module covers the architectural patterns that professional teams use to build scalable, maintainable server-side applications.**

---

[Next: 3.3.a — Introduction to Backend Architecture](./3.3.a-Introduction-to-Backend-Architecture.md)

---

## Overview

| File | Topic | Key Concepts |
|------|-------|-------------|
| [3.3.a](./3.3.a-Introduction-to-Backend-Architecture.md) | Introduction to Backend Architecture | Software architecture, monolith vs microservices, architectural patterns, documentation |
| [3.3.b](./3.3.b-MVC-Architecture.md) | MVC Architecture | Model-View-Controller, separation of concerns, folder structure, request flow |
| [3.3.c](./3.3.c-MVC-with-REST-APIs.md) | MVC with REST APIs | JSON views, service layer, thin controllers, CRUD with MVC, testing layers |
| [3.3.d](./3.3.d-SOA-and-Other-Architectures.md) | SOA and Other Architectures | SOA, microservices, event-driven, serverless, decision matrix |
| [3.3-Exercise-Questions.md](./3.3-Exercise-Questions.md) | Exercise Questions | 30+ hands-on practice questions |
| [3.3-Interview-Questions.md](./3.3-Interview-Questions.md) | Interview Questions | Common architecture interview questions with answers |
| [3.3-Quick-Revision.md](./3.3-Quick-Revision.md) | Quick Revision | Condensed notes for rapid review |

---

## Prerequisites

Before starting this module, you should be comfortable with:

| Prerequisite | Why It Matters |
|---|---|
| JavaScript ES6+ fundamentals | Architecture patterns are implemented in JS |
| Node.js basics (modules, `require`/`import`) | All examples use Node.js runtime |
| Express.js routing and middleware | MVC is built on top of Express |
| HTTP methods and status codes | Controllers handle HTTP request/response |
| Basic MongoDB/Mongoose operations | Models interact with the database |
| npm project setup (`package.json`) | Project structure and dependency management |

---

## Cheat Sheet

### The Five Architecture Patterns at a Glance

```
MONOLITHIC                 LAYERED (MVC)              MICROSERVICES
+------------------+       +------------------+       +-------+ +-------+ +-------+
|  All code in     |       |   Routes         |       | Users | | Auth  | | Orders|
|  one deployable  |       +------------------+       |Service| |Service| |Service|
|  unit            |       |   Controllers    |       +-------+ +-------+ +-------+
|                  |       +------------------+            |         |         |
|  Auth + Users +  |       |   Services       |       +---+----+----+----+----+---+
|  Orders + ...    |       +------------------+       |        Message Bus        |
+------------------+       |   Models         |       +---------------------------+
                           +------------------+

EVENT-DRIVEN                          SERVERLESS (FaaS)
+----------+    +-----------+         +--------+  +--------+  +--------+
| Producer | -> | Event Bus | ->      | fn: A  |  | fn: B  |  | fn: C  |
+----------+    +-----------+         +--------+  +--------+  +--------+
                  |       |               |            |            |
            +-----+  +-----+         +---+------+-----+------+----+---+
            |Sub A|  |Sub B|         |    Cloud Provider Platform     |
            +-----+  +-----+         +-------------------------------+
```

### MVC Request Flow (Quick Reference)

```
Client Request
      |
   Routes -----> picks the right controller
      |
  Controller --> validates input, calls service/model
      |
   Service ----> business logic lives here
      |
    Model -----> talks to database
      |
  Database ----> stores/retrieves data
      |
  Response <---- JSON sent back to client
```

### Folder Structure (MVC + Service Layer)

```
project/
  src/
    routes/         # URL-to-controller mapping
    controllers/    # HTTP req/res handling
    services/       # Business logic
    models/         # Database schemas and data access
    middlewares/     # Auth, validation, error handling
    utils/          # Shared helper functions
    config/         # Environment and app configuration
  tests/
    unit/           # Test individual layers
    integration/    # Test layers working together
  app.js            # Express app setup
  server.js         # Server entry point
```

### Decision Matrix (When to Use What)

| Factor | Monolith | MVC Layered | Microservices | Serverless |
|--------|----------|-------------|---------------|------------|
| Team size | 1-5 devs | 3-15 devs | 10+ devs | 1-10 devs |
| Project complexity | Low-Medium | Medium-High | High | Low-Medium |
| Deployment speed | Slow (whole app) | Moderate | Fast (per service) | Instant (per function) |
| Initial setup cost | Low | Low-Medium | High | Low |
| Scaling model | Vertical | Vertical | Horizontal | Automatic |
| Best for | MVPs, prototypes | Most web apps | Large platforms | Event-driven tasks |

---

## Learning Path

```
3.3.a  Introduction to Backend Architecture
  |      (understand WHY architecture matters)
  v
3.3.b  MVC Architecture
  |      (learn the most common pattern)
  v
3.3.c  MVC with REST APIs
  |      (apply MVC to real API development)
  v
3.3.d  SOA and Other Architectures
         (explore advanced patterns for scale)
```

---

## Key Terminal Commands

```bash
# Scaffold an MVC project quickly
mkdir -p src/{routes,controllers,services,models,middlewares,utils,config}
touch src/app.js src/server.js

# Run with nodemon for development
npx nodemon src/server.js

# Run tests
npm test
```

---

[Next: 3.3.a — Introduction to Backend Architecture](./3.3.a-Introduction-to-Backend-Architecture.md)
