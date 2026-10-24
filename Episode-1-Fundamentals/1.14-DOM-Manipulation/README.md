# 1.14 — Document Object Model (DOM) Manipulation

> **Big Picture:** The **DOM** is the browser’s in-memory tree of your page. **JavaScript** reads and changes that tree — selecting **nodes**, walking **parent/child/sibling** links, updating **text and attributes**, toggling **classes**, and **creating or removing** elements — which is how dynamic web apps update the UI without a full page reload.

---

## Overview

| Sub-topic | What You'll Learn |
|-----------|-------------------|
| [1.14.a](./1.14.a-Introduction-to-the-DOM.md) | What the **DOM** is, how HTML becomes a tree, and how JS fits into the rendering story |
| [1.14.b](./1.14.b-DOM-Structure-Nodes-and-Elements.md) | **Nodes** vs **elements**, `document`, the root, and common node types |
| [1.14.c](./1.14.c-Fetching-Elements-in-the-DOM.md) | **`getElementById`**, **`getElementsByTagName`**, **`getElementsByClassName`**, **`querySelector`**, **`querySelectorAll`** |
| [1.14.d](./1.14.d-DOM-Tree-Traversal.md) | **`parentNode`**, **`childNodes`**, **`firstChild`**, **`nextSibling`** — and when to prefer **element-only** properties |
| [1.14.e](./1.14.e-Manipulating-DOM-Elements.md) | **`innerHTML`** vs **`textContent`**, **`getAttribute`** / **`setAttribute`**, **`.style`**, **`classList`** |
| [1.14.f](./1.14.f-Creating-and-Removing-DOM-Elements.md) | **`createElement`**, **`appendChild`**, **`insertBefore`**, **`removeChild`** — plus brief modern helpers |

### Extra practice & revision

| File | Purpose |
|------|---------|
| [1.14-Exercise-Questions](./1.14-Exercise-Questions.md) | Closed-book questions + DevTools drills mapped to `1.14.a`–`1.14.f` |
| [1.14-Interview-Questions](./1.14-Interview-Questions.md) | Model answers: DOM vs HTML, live vs static lists, XSS, traversal, reflow |
| [1.14-Quick-Revision](./1.14-Quick-Revision.md) | Compact cheat sheet (print-friendly) |

Each extra file begins with **How to use this material (instructions)** — follow that workflow first.

---

## One-Line Cheat Sheet

```
DOM = tree of nodes  |  document = entry point  |  Element extends Node
querySelector(css) / querySelectorAll(css)  |  getElementById(id) — fastest ID lookup
childNodes ≠ children (text/comment vs elements only)
textContent = safe text  |  innerHTML = parses HTML (XSS risk if untrusted)
classList.add/toggle/remove  |  createElement → appendChild / insertBefore → removeChild
```

---

## Prerequisites

- [1.5 — Semantic HTML & Browser Rendering](../1.5-Semantic-HTML-and-Browser-Rendering/README.md) — render tree, DOM vs CSSOM context
- [1.13 — Introduction to JavaScript](../1.13-Introduction-to-JavaScript/README.md) — browser JS, `const`/`let`, DevTools Console

---

*Start with → [1.14.a — Introduction to the DOM](./1.14.a-Introduction-to-the-DOM.md)*
