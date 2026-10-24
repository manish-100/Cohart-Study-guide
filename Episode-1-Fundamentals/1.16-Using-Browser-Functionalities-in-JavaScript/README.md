# 1.16 — Using Browser Functionalities in JavaScript

> **Big Picture:** Beyond the **DOM**, browsers expose the **BOM** (Browser Object Model) — **`window`**, **`navigator`**, **`location`**, **`history`** — plus **persistent storage** and **network** APIs. Together they let scripts know **where** the user is, **navigate** history, **remember** state, and **talk to servers** with **`fetch`**.

---

## Overview

| Sub-topic | What You'll Learn |
|-----------|-------------------|
| [1.16.a](./1.16.a-Browser-Object-Model.md) | **BOM** vs **DOM**; **`window`**, **`navigator`**, **`history`**, **`location`**, **`document`** — what each object is for |
| [1.16.b](./1.16.b-Window-Location-and-History.md) | **`window.location`** (URL parts, navigation, reload) and **`window.history`** (back/forward, `pushState` / `replaceState`) |
| [1.16.c](./1.16.c-Web-Storage-and-Cookies.md) | **`localStorage`**, **`sessionStorage`**, and **`document.cookie`** — capacity, scope, and security basics |
| [1.16.d](./1.16.d-Fetch-API.md) | **`fetch()`** — requests, **`Response`**, **`json()`**, headers, errors, and **CORS** at a high level |

### Extra practice & revision

| File | Purpose |
|------|---------|
| [1.16-Exercise-Questions](./1.16-Exercise-Questions.md) | Closed-book + mini tasks mapped to `1.16.a`–`1.16.d` |
| [1.16-Interview-Questions](./1.16-Interview-Questions.md) | Model answers: BOM, storage vs cookies, `fetch` + `ok`, same-origin |
| [1.16-Quick-Revision](./1.16-Quick-Revision.md) | Compact cheat sheet (print-friendly) |

Each extra file begins with **How to use this material (instructions)** — follow that workflow first.

---

## One-Line Cheat Sheet

```
BOM = window + browser services   |   document = DOM root (also on window)
location = current URL + navigation   |   history = session stack + SPA routing
localStorage = origin-wide persistent   |   sessionStorage = per-tab
Cookies = HTTP + document.cookie (small, server-visible)
fetch(url) → Promise<Response>   |   check response.ok + await response.json()
```

---

## Prerequisites

- [1.14 — DOM Manipulation](../1.14-DOM-Manipulation/README.md) — `document` and element APIs
- [1.15 — Event Handling](../1.15-Event-Handling-in-JavaScript/README.md) — async patterns help for `fetch`
- [1.4 — HTTP & HTTPS](../1.4-Understanding-HTTP-and-HTTPS/README.md) — methods, status codes, headers (context for `fetch` and cookies)

---

*Start with → [1.16.a — Browser Object Model](./1.16.a-Browser-Object-Model.md)*
