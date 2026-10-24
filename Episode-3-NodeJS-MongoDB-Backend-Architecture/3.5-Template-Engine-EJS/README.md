# 3.5 — Template Engine: EJS (Episode 3)

> **Big Picture:** **Template engines** let the server build **dynamic HTML** by injecting data into reusable templates before sending them to the browser. **EJS (Embedded JavaScript)** is the most beginner-friendly option — it looks like regular HTML with `<%= %>` tags for data, supports **partials** for shared layouts, and plugs straight into **Express** with one line of config. This section covers everything from first render to a full multi-page site with shared headers, footers, and static assets.

---

## Overview

| Sub-topic | What You'll Learn |
|-----------|-------------------|
| [3.5.a](./3.5.a-What-is-a-Template-Engine.md) | What template engines do, **SSR** concept, comparison of **EJS / Pug / Handlebars / Nunjucks**, when to use templates vs **SPA** frameworks, role in **MVC** |
| [3.5.b](./3.5.b-Setting-Up-EJS.md) | Installing EJS, configuring Express (`view engine`, `views`), directory structure, first `.ejs` file, `res.render()` walkthrough |
| [3.5.c](./3.5.c-EJS-Syntax-Deep-Dive.md) | `<%= %>` escaped output, `<%- %>` raw output, `<% %>` scriptlets, comments, includes, `locals` pattern, whitespace control |
| [3.5.d](./3.5.d-Control-Flow-in-EJS.md) | `if/else`, `forEach`, `for` loops, nested logic, `switch`, real-world examples — user lists, admin vs regular views |
| [3.5.e](./3.5.e-Layouts-Partials-and-Static-Files.md) | Partials (`include`), header/footer/navbar, passing data to partials, `express-ejs-layouts`, `express.static`, full multi-page project |

### Extra practice & revision

| File | Purpose |
|------|---------|
| [3.5-Exercise-Questions](./3.5-Exercise-Questions.md) | 30+ practice questions covering syntax, control flow, partials, and project structure |
| [3.5-Interview-Questions](./3.5-Interview-Questions.md) | Model answers for common EJS and template-engine interview topics |
| [3.5-Quick-Revision](./3.5-Quick-Revision.md) | One-page cheat sheet for all EJS syntax and patterns |

---

## One-Line Cheat Sheet

```
app.set('view engine', 'ejs')  →  res.render('page', { data })
<%= escaped %>   <%- raw %>   <% code %>   <%# comment %>   <%- include('partial') %>
```

---

## Prerequisites

- [3.1 — Starting with Node.js](../3.1-Starting-with-NodeJS/README.md) — `npm init`, `require`, modules
- [3.4 — Express.js](../3.4-Express-JS/README.md) — routes, `req`/`res`, middleware basics
- HTML & CSS fundamentals (Episode 1)

---

*Start with -> [3.5.a — What is a Template Engine?](./3.5.a-What-is-a-Template-Engine.md)*
