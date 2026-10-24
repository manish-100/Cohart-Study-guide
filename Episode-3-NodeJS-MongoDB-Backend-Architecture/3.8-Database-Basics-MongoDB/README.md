# 3.8 — Database Basics: MongoDB

> **A comprehensive guide to databases, MongoDB, Mongoose ODM, and data modeling for full-stack JavaScript developers.**

---

## Navigation

| File | Topic | Lines |
|------|-------|-------|
| [3.8.a](./3.8.a-Relational-vs-Non-Relational-Databases.md) | Relational vs Non-Relational Databases | ~300 |
| [3.8.b](./3.8.b-Introduction-to-MongoDB.md) | Introduction to MongoDB | ~280 |
| [3.8.c](./3.8.c-Setting-Up-MongoDB.md) | Setting Up MongoDB (Local + Atlas) | ~320 |
| [3.8.d](./3.8.d-MongoDB-Data-Types-and-Documents.md) | MongoDB Data Types and Documents | ~310 |
| [3.8.e](./3.8.e-Mongoose-ODM.md) | Mongoose ODM (Object Document Mapper) | ~340 |
| [3.8.f](./3.8.f-CRUD-Operations-with-Mongoose.md) | CRUD Operations with Mongoose | ~330 |
| [3.8.g](./3.8.g-Database-Relations-and-Populate.md) | Database Relations and Populate | ~320 |
| [Exercise Questions](./3.8-Exercise-Questions.md) | 50+ Hands-on Exercises | ~350 |
| [Interview Questions](./3.8-Interview-Questions.md) | Interview Prep Questions | ~300 |
| [Quick Revision](./3.8-Quick-Revision.md) | Rapid Review Notes | ~250 |

---

## Overview

This module covers everything you need to know about databases in a Node.js context -- from understanding when to pick SQL versus NoSQL, to mastering MongoDB and Mongoose for production applications.

### What You Will Learn

1. **Database fundamentals** -- relational vs non-relational paradigms
2. **MongoDB core concepts** -- documents, collections, BSON, flexible schemas
3. **Local and cloud setup** -- MongoDB Community, Compass, Atlas
4. **Data types and modeling** -- BSON types, embedding vs referencing
5. **Mongoose ODM** -- schemas, models, validation, middleware
6. **Full CRUD operations** -- create, read, update, delete with query operators
7. **Relationships and population** -- one-to-one, one-to-many, many-to-many

---

## Prerequisites

| Prerequisite | Why It Matters |
|---|---|
| JavaScript ES6+ | Mongoose uses Promises, async/await, destructuring |
| Node.js basics | MongoDB drivers and Mongoose run in Node |
| npm / package management | Installing mongoose, dotenv, etc. |
| JSON understanding | MongoDB documents are JSON-like (BSON) |
| Express.js basics | CRUD examples integrate with Express routes |
| Terminal / CLI comfort | mongosh, Compass, Atlas CLI |

---

## Quick Cheat Sheet

### MongoDB Shell (mongosh)

```bash
# Start the shell
mongosh

# Show all databases
show dbs

# Switch to / create a database
use myapp

# Show collections in current database
show collections

# Insert a document
db.users.insertOne({ name: "Alice", age: 25 })

# Find all documents
db.users.find()

# Find with filter
db.users.find({ age: { $gt: 20 } })

# Update a document
db.users.updateOne({ name: "Alice" }, { $set: { age: 26 } })

# Delete a document
db.users.deleteOne({ name: "Alice" })

# Drop a collection
db.users.drop()

# Drop the entire database
db.dropDatabase()
```

### Mongoose Quick Reference

```javascript
// Connect
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/myapp');

// Define Schema
const userSchema = new mongoose.Schema({
  name:  { type: String, required: true },
  email: { type: String, required: true, unique: true },
  age:   { type: Number, min: 0 },
  role:  { type: String, enum: ['user', 'admin'], default: 'user' }
}, { timestamps: true });

// Create Model
const User = mongoose.model('User', userSchema);

// CRUD
const user = await User.create({ name: 'Alice', email: 'alice@example.com' });
const users = await User.find({ role: 'admin' }).sort({ name: 1 }).limit(10);
const updated = await User.findByIdAndUpdate(id, { age: 30 }, { new: true });
const deleted = await User.findByIdAndDelete(id);

// Populate
const post = await Post.findById(id).populate('author', 'name email');
```

### Connection String Formats

```
Local:  mongodb://localhost:27017/dbname
Atlas:  mongodb+srv://username:password@cluster.xxxxx.mongodb.net/dbname
```

### MongoDB vs SQL Terminology

| SQL Term | MongoDB Term |
|---|---|
| Database | Database |
| Table | Collection |
| Row | Document |
| Column | Field |
| Primary Key | `_id` (ObjectId) |
| JOIN | `$lookup` / `populate()` |
| INDEX | Index |
| GROUP BY | `$group` (aggregation) |

---

## Recommended Learning Path

```
3.8.a (SQL vs NoSQL)
    |
    v
3.8.b (Intro to MongoDB)
    |
    v
3.8.c (Setting Up MongoDB)
    |
    v
3.8.d (Data Types & Documents)
    |
    v
3.8.e (Mongoose ODM)
    |
    v
3.8.f (CRUD Operations)
    |
    v
3.8.g (Relations & Populate)
    |
    v
Exercise Questions --> Interview Questions --> Quick Revision
```

---

## Tools Required

| Tool | Purpose | Link |
|---|---|---|
| Node.js (v18+) | JavaScript runtime | https://nodejs.org |
| MongoDB Community 7.x | Local database server | https://www.mongodb.com/try/download/community |
| MongoDB Compass | GUI for MongoDB | https://www.mongodb.com/products/compass |
| mongosh | MongoDB shell CLI | Bundled with MongoDB |
| MongoDB Atlas | Free cloud cluster | https://www.mongodb.com/atlas |
| VS Code | Code editor | https://code.visualstudio.com |
| Postman / Thunder Client | API testing | https://www.postman.com |

---

*Next Section: [3.8.a -- Relational vs Non-Relational Databases](./3.8.a-Relational-vs-Non-Relational-Databases.md)*
