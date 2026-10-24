# 1.17 — Additional JavaScript Topics (Episode 1)

> **Big Picture:** Two patterns show up constantly in real UIs: **throttling** and **debouncing** tame high-frequency events (`scroll`, `resize`, `input`). **JSON** is how browsers and servers exchange structured data — **`JSON.stringify`** turns objects into text; **`JSON.parse`** turns text back into values — and both pair naturally with **`fetch`** and **Web Storage**.

---

## Overview

| Sub-topic | What You'll Learn |
|-----------|-------------------|
| [1.17.a](./1.17.a-Throttling-and-Debouncing.md) | **Throttle** = run at most once per interval; **debounce** = wait for quiet period — when to use each with **`scroll`**, **`resize`**, **`input`** |
| [1.17.b](./1.17.b-JSON-parse-and-stringify.md) | **`JSON.stringify`**, **`JSON.parse`**, **`reviver`/`replacer`** (awareness), errors, and use with **storage** / **APIs** |

### Extra practice & revision

| File | Purpose |
|------|---------|
| [1.17-Exercise-Questions](./1.17-Exercise-Questions.md) | Practice: implement / choose throttle vs debounce; JSON edge cases |
| [1.17-Interview-Questions](./1.17-Interview-Questions.md) | Model answers: definitions, search boxes, `parse` throws |
| [1.17-Quick-Revision](./1.17-Quick-Revision.md) | One-page cheat sheet |

---

## One-Line Cheat Sheet

```
Throttle  = "at most every N ms" while events fire   (scroll position, resize layout)
Debounce  = "run N ms after last event"             (search API, form auto-save)
JSON.stringify(value) → string   |   JSON.parse(string) → value   (throws on invalid JSON)
```

---

## Prerequisites

- [1.15 — Event Handling](../1.15-Event-Handling-in-JavaScript/README.md) — high-frequency events, `passive` scroll
- [1.16 — Browser Functionalities](../1.16-Using-Browser-Functionalities-in-JavaScript/README.md) — `fetch` bodies, `localStorage` strings
- [1.13 — Introduction to JavaScript](../1.13-Introduction-to-JavaScript/README.md) — functions, `const` / `let`

---

*Start with → [1.17.a — Throttling & Debouncing](./1.17.a-Throttling-and-Debouncing.md)*
