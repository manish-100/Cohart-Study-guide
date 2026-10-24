# 3.7 — Handling Files with Express

> **Big Picture:** Modern web applications need to accept file uploads (profile pictures, documents, media), store them reliably, serve them back to clients, and eventually scale to cloud storage. Express does not handle files out of the box — you need Multer middleware, storage engines, validation layers, and a strategy for serving or offloading files to services like Cloudinary.

---

## Overview

| Sub-topic | What You'll Learn |
|-----------|-------------------|
| [3.7.a](./3.7.a-Understanding-Multer.md) | What Multer is, why `express.json()` cannot handle files, and the full Multer API (`single`, `array`, `fields`, `none`) |
| [3.7.b](./3.7.b-File-Upload-with-Multer.md) | Complete upload examples (HTML form + Express route), `req.file` / `req.files`, custom filenames, FormData API, error handling |
| [3.7.c](./3.7.c-Storage-Engines.md) | Disk storage vs memory storage, custom destination/filename functions, when to use each engine |
| [3.7.d](./3.7.d-File-Validation-and-Security.md) | File type validation, MIME checking, size limits, filename sanitization, security best practices |
| [3.7.e](./3.7.e-Working-with-Express-Static.md) | Serving uploaded files with `express.static`, building file URLs, deleting files, cleanup strategies |
| [3.7.f](./3.7.f-Cloud-Storage-Cloudinary-Imagekit.md) | Cloudinary and ImageKit setup, uploading from buffer, transformations, URL-based processing, cost considerations |

### Extra practice & revision

| File | Purpose |
|------|---------|
| [3.7-Exercise-Questions](./3.7-Exercise-Questions.md) | 35+ practice questions covering all subtopics (3.7.a through 3.7.f) |
| [3.7-Interview-Questions](./3.7-Interview-Questions.md) | Model answers for common interview prompts on file handling |
| [3.7-Quick-Revision](./3.7-Quick-Revision.md) | Compact cheat sheet (print-friendly) |

Each extra file begins with **How to use this material (instructions)** — follow that workflow first.

---

## The File Upload Pipeline

```
┌──────────────────────────────────────────────────────────────────────┐
│                     FILE UPLOAD PIPELINE                             │
│                                                                      │
│  1. CLIENT                                                           │
│     HTML <form enctype="multipart/form-data">                        │
│     or JavaScript FormData + fetch/axios                             │
│            │                                                         │
│            ▼                                                         │
│  2. MULTER MIDDLEWARE                                                │
│     Parses multipart/form-data                                       │
│     Validates file type & size                                       │
│     Writes to disk or holds in memory buffer                         │
│            │                                                         │
│            ▼                                                         │
│  3. ROUTE HANDLER                                                    │
│     Access file via req.file / req.files                             │
│     Process (resize, compress) if needed                             │
│            │                                                         │
│            ▼                                                         │
│  4. STORAGE                                                          │
│     Option A: Local disk → serve via express.static                  │
│     Option B: Cloud (Cloudinary / ImageKit / S3)                     │
│            │                                                         │
│            ▼                                                         │
│  5. DATABASE                                                         │
│     Store the file URL / path (never the file itself)                │
│     Associate with user record                                       │
└──────────────────────────────────────────────────────────────────────┘
```

---

## Cheat Sheet

```
# Install
npm install multer

# Basic single upload
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
app.post('/upload', upload.single('avatar'), (req, res) => {
  console.log(req.file);   // file object
  console.log(req.body);   // text fields
});

# Multiple files (same field)
app.post('/gallery', upload.array('photos', 10), handler);

# Multiple fields
app.post('/profile', upload.fields([
  { name: 'avatar', maxCount: 1 },
  { name: 'cover', maxCount: 1 }
]), handler);

# Disk storage with custom names
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname)
});
const upload = multer({ storage });

# File filter
const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) cb(null, true);
    else cb(new Error('Only images allowed'), false);
  },
  limits: { fileSize: 5 * 1024 * 1024 } // 5 MB
});

# Serve files
app.use('/uploads', express.static('uploads'));

# Delete a file
const fs = require('fs').promises;
await fs.unlink('uploads/old-file.jpg');
```

---

## Prerequisites

| Requirement | Where to Learn |
|-------------|----------------|
| Node.js fundamentals | [3.1 — Starting with NodeJS](../3.1-Starting-with-NodeJS/README.md) |
| Creating an Express server | [3.2 — Creating Server](../3.2-Creating-Server/README.md) |
| Express.js basics (routes, req/res) | [3.4 — Express JS](../3.4-Express-JS/README.md) |
| Middleware concepts | [3.6 — Middleware in Express](../3.6-Middleware-in-Express/README.md) |
| HTML forms (helpful, not required) | Episode 1 fundamentals |

---

## After Completing All Sub-topics

| Resource | Purpose |
|----------|---------|
| [Exercise Questions](./3.7-Exercise-Questions.md) | 35+ practice questions (short-answer + code + hands-on) |
| [Interview Questions](./3.7-Interview-Questions.md) | Model answers for file-handling interview prompts |
| [Quick Revision](./3.7-Quick-Revision.md) | One-page cheat sheet for fast review before interviews |

---

*Start with → [3.7.a — Understanding Multer](./3.7.a-Understanding-Multer.md)*
