# 1.5 — Semantic HTML & Browser Rendering

> **Big Picture:** Browsers do not “see” your intentions — they see **tokens**, **trees**, and **pixels**. **Semantic HTML** gives those trees **meaning** for accessibility tools, search engines, and future-you maintaining the code. Performance and **CLS** are not separate topics: they emerge from how you structure markup, assets, and layout.

---

## Overview

| Sub-topic | What You'll Learn |
|-----------|-------------------|
| [1.5.a](./1.5.a-Browser-Rendering-Pipeline.md) | From bytes to pixels: parse, DOM/CSSOM, layout, paint, compositing — the **critical rendering path** in plain English |
| [1.5.b](./1.5.b-Reflow-and-Repaint.md) | **Reflow** (layout) vs **repaint** vs **composite**; what makes work expensive; how it ties to smooth UI |
| [1.5.c](./1.5.c-Semantic-Landmark-Tags.md) | Landmark elements (`header`, `nav`, `main`, `aside`, `footer`, `section`, `article`) and when to use each |
| [1.5.d](./1.5.d-SEO-and-Semantic-HTML.md) | How semantics and document structure support **SEO** — titles, headings, metadata, and honest content hierarchy |
| [1.5.e](./1.5.e-Accessibility-and-ARIA.md) | **ARIA** basics, **native-first** patterns, inclusive design, and practical testing |
| [1.5.f](./1.5.f-Headings-Hierarchy.md) | `h1`–`h6` outlines, screen-reader navigation, SEO expectations, and common anti-patterns |
| [1.5.g](./1.5.g-Ordered-and-Unordered-Lists.md) | `ul`, `ol`, `li`, nesting, and list accessibility (announcements, counts, nesting depth) |
| [1.5.h](./1.5.h-Responsive-Images.md) | `srcset`, `sizes`, modern formats (**WebP**, **AVIF**), optimization mindset, and **CLS** prevention |
| [1.5.i](./1.5.i-Links-Navigation-and-Forms.md) | Links (`rel`, internal vs external), form structure, input types, HTML5 validation, and **client vs server** validation |

### Extra practice & revision

| File | Purpose |
|------|---------|
| [1.5-Exercise-Questions](./1.5-Exercise-Questions.md) | Closed-book questions + DevTools drills mapped to `1.5.a`–`1.5.i` |
| [1.5-Interview-Questions](./1.5-Interview-Questions.md) | Model answers: rendering, CLS, semantics, SEO, accessibility, forms |
| [1.5-Quick-Revision](./1.5-Quick-Revision.md) | Compact cheat sheet (print-friendly) |

Each extra file begins with **How to use this material (instructions)** — follow that workflow first.

---

## One-Line Cheat Sheet

```
Parse → DOM + CSSOM → render tree → Layout (reflow) → Paint → Composite layers
Semantic HTML = meaning in the tree (a11y + SEO + maintainability)
ARIA        = bridge when native HTML cannot express state/structure — use sparingly
srcset+sizes = pick resolution; <picture> = pick format/art direction
Forms       = labels + controls + server-side validation (always)
```

---

## Prerequisites

- [1.2 — Client–Server Architecture](../1.2-Client-Server-Architecture/README.md) — where HTML responses fit in the request–response cycle  
- [1.4 — HTTP & HTTPS](../1.4-Understanding-HTTP-and-HTTPS/README.md) — how documents and assets are fetched (helpful but not required for semantics)

---

*Start with → [1.5.a — Browser rendering pipeline](./1.5.a-Browser-Rendering-Pipeline.md)*
