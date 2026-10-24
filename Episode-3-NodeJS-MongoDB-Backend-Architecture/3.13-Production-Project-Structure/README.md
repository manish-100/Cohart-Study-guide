# 3.13 --- Production Project Structure

> **Big Picture:** Writing a Node.js app that *works* is one thing. Structuring it so it **scales**, survives team changes, passes code reviews, and deploys reliably is a completely different discipline. This section covers the conventions, tooling, and configuration patterns that turn a hobby project into a production-grade codebase.

---

## Overview

| Sub-topic | What You'll Learn |
|-----------|-------------------|
| [3.13.a](./3.13.a-Application-Structure.md) | **Application Structure** --- feature-based vs layer-based organisation, standard Express directory tree, separation of concerns, entry-point patterns |
| [3.13.b](./3.13.b-File-Naming-and-Git-Configuration.md) | **File Naming & Git Configuration** --- naming conventions, `.gitignore`, commit messages, branch strategies, EditorConfig, Husky git hooks |
| [3.13.c](./3.13.c-Configuration-Management.md) | **Configuration Management** --- `package.json` scripts, `.env` files, dotenv, config modules, environment validation, 12-Factor methodology |
| [3.13.d](./3.13.d-Production-Environment.md) | **Production Environment** --- PM2 process management, custom error classes, async handler wrappers, consistent API responses, CORS configuration |
| [3.13.e](./3.13.e-ESLint-and-Prettier.md) | **ESLint & Prettier** --- linting rules, formatting config, combining both tools, VS Code integration, lint-staged + Husky automation |
| [3.13.f](./3.13.f-Testing-APIs-with-Postman.md) | **Testing APIs with Postman** --- collections, environments, auth flows, automated tests, Newman CLI, mock servers, team collaboration |

### Extra practice & revision

| File | Purpose |
|------|---------|
| [3.13-Exercise-Questions](./3.13-Exercise-Questions.md) | 35+ closed-book questions covering structure, config, tooling, production patterns |
| [3.13-Interview-Questions](./3.13-Interview-Questions.md) | Model answers for common backend architecture and tooling interview questions |
| [3.13-Quick-Revision](./3.13-Quick-Revision.md) | Compact cheat sheet --- directory trees, config templates, command references |

Each extra file begins with **How to use this material (instructions)** --- follow that workflow first.

---

## One-Line Cheat Sheet

```
Structure   = src/ with config/ controllers/ middleware/ models/ routes/ services/ utils/ validators/
Naming      = kebab-case files, Conventional Commits, .gitignore everything sensitive
Config      = .env + dotenv + config module + fail-fast validation
Production  = PM2 cluster + ApiError + asyncHandler + ApiResponse + CORS whitelist
Lint/Format = ESLint (bugs) + Prettier (style) + Husky + lint-staged
Testing     = Postman collections + environments + Newman CI/CD
```

---

## Prerequisites

- [3.4 --- Express.js](../3.4-Express-JS/README.md) --- route handling, middleware basics
- [3.6 --- Middleware in Express](../3.6-Middleware-in-Express/README.md) --- custom middleware patterns
- [3.8 --- Database Basics: MongoDB](../3.8-Database-Basics-MongoDB/README.md) --- Mongoose models and connections
- [3.9 --- REST API Development](../3.9-REST-API-Development/README.md) --- building endpoints end-to-end

---

*Start with -> [3.13.a --- Application Structure](./3.13.a-Application-Structure.md)*
