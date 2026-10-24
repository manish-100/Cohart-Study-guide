# 2.11 — Routing & Application Structure

> **Big picture:** Single-page apps need a **client-side navigation system** so URLs, history, and UI stay in sync without full page reloads. **React Router** is the de facto standard for React: **routes** map URLs to UI, **nested routes** mirror layout hierarchies, **dynamic segments** capture parameters, **`useNavigate`** performs imperative transitions, **layout routes** share chrome (header/sidebar), and a **disciplined folder structure** keeps large repos navigable (`components/`, `hooks/`, `pages/`, `services/`, `utils/`—as conventions, not dogma).

---

## Overview

| Sub-topic | What you'll learn |
| --------- | ----------------- |
| [2.11.a — React Router: client-side navigation](./2.11.a-React-Router-Introduction-Client-Navigation.md) | Routers, history, links, SPA deployment basics |
| [2.11.b — Routes & nested routes](./2.11.b-Routes-and-Nested-Routes.md) | `Routes`, `Route`, `Outlet`, index routes, relative paths |
| [2.11.c — Dynamic routing & URL parameters](./2.11.c-Dynamic-Routing-and-URL-Parameters.md) | `:param`, splats, `useParams`, `useSearchParams` |
| [2.11.d — `useNavigate` & programmatic navigation](./2.11.d-useNavigate-Programmatic-Navigation.md) | Imperative navigation, `replace`, blocking patterns |
| [2.11.e — Layout components & shared chrome](./2.11.e-Layout-Components-Shared-Chrome.md) | Layout routes, nested `Outlet`, auth shells |
| [2.11.f — Folder structure for scalable projects](./2.11.f-Folder-Structure-for-Scalable-Projects.md) | `pages/`, `components/`, `hooks/`, `services/`, `utils/`, feature folders |

### Practice and revision

| File | Purpose |
| ---- | ------- |
| [2.11-Interview-Questions.md](./2.11-Interview-Questions.md) | Q&A and rapid cards |
| [2.11-Exercise-Questions.md](./2.11-Exercise-Questions.md) | Labs |
| [2.11-Quick-Revision.md](./2.11-Quick-Revision.md) | Cheat sheet |

## One-line cheat sheet

```
URL = product API: declare routes declaratively, nest layouts with Outlet, read params with hooks, navigate imperatively only when the UX demands it, colocate code by feature when the app outgrows type-based folders.
```

## Prerequisites

- [2.10 — Advanced Reusability Patterns](../2.10-Advanced-Reusability-Patterns/README.md) when present in your curriculum copy (layout composition, route-level wrappers)
- [2.1 — Introduction to React](../2.1-Introduction-to-React/README.md) when present (SPA mental model)
- [2.2 — React Components & Props](../2.2-React-Components-and-Props/README.md) when present

## Next

- [2.12 — Server State & API Integration](../2.12-Server-State-and-API-Integration/README.md) when present in your curriculum copy

---

*Start with → [2.11.a — React Router](./2.11.a-React-Router-Introduction-Client-Navigation.md)*
