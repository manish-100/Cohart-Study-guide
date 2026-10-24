# 1.3 — Internet Protocols: TCP and UDP

> **Big Picture:** Every byte that travels across the internet follows **rules** (protocols). At the **transport layer**, two protocols dominate: **TCP** — which guarantees delivery, order, and reliability — and **UDP** — which trades those guarantees for raw speed. Understanding both is essential for building anything on the web.

---

## Overview

| Sub-topic | What You'll Learn |
|-----------|-------------------|
| [1.3.a](./1.3.a-What-is-TCP.md) | What TCP is, why it exists, and why virtually all web traffic relies on it |
| [1.3.b](./1.3.b-TCP-Three-Way-Handshake.md) | How TCP establishes a connection using the three-way handshake (SYN → SYN-ACK → ACK) |
| [1.3.c](./1.3.c-What-is-UDP.md) | What UDP is and why it is the protocol of choice for speed-critical applications |
| [1.3.d](./1.3.d-How-UDP-Works.md) | How UDP sends data — no handshake, no guarantees, just fire and go |
| [1.3.e](./1.3.e-TCP-vs-UDP.md) | Side-by-side comparison of TCP and UDP with real-world use cases |

### Extra practice & revision

| File | Purpose |
|------|---------|
| [1.3-Exercise-Questions](./1.3-Exercise-Questions.md) | Practice questions + hints across all 1.3 subtopics |
| [1.3-Interview-Questions](./1.3-Interview-Questions.md) | Model answers for common interview prompts |
| [1.3-Quick-Revision](./1.3-Quick-Revision.md) | Compact cheat sheet (print-friendly) |

Each extra file begins with **How to use this material (instructions)** — follow that workflow first.

---

## Why Transport Protocols Matter

When your browser fetches a webpage, or a game sends your position to a server, the data doesn't travel as one big chunk. It's broken into **packets**. But packets can:

- **Arrive out of order** (took different routes)
- **Get lost** (router dropped them)
- **Arrive duplicated** (network retried)
- **Arrive corrupted** (bit flips)

The **transport layer** decides how to handle these problems — or whether to handle them at all.

```
┌──────────────────────────────────────────────────────────────────┐
│                    THE TRANSPORT LAYER                            │
│                                                                  │
│  Application says: "Send this data to that server"               │
│                                                                  │
│         ┌─────────────────┐       ┌─────────────────┐            │
│         │       TCP       │       │       UDP       │            │
│         │                 │       │                 │            │
│         │  "I will make   │       │  "I will send   │            │
│         │   sure every    │       │   it fast. If   │            │
│         │   byte arrives  │       │   some packets  │            │
│         │   in order,     │       │   get lost,     │            │
│         │   even if it    │       │   that's your   │            │
│         │   takes longer" │       │   problem"      │            │
│         │                 │       │                 │            │
│         │  📦 Reliable    │       │  🚀 Fast        │            │
│         │  📋 Ordered     │       │  🎯 Low latency │            │
│         │  🤝 Connected   │       │  📡 Fire & go   │            │
│         └─────────────────┘       └─────────────────┘            │
│                                                                  │
│  Both sit on top of IP (Internet Protocol) at Layer 3            │
└──────────────────────────────────────────────────────────────────┘
```

---

## The Phone Call vs Walkie-Talkie Analogy

| | TCP = Phone Call | UDP = Walkie-Talkie |
|---|---|---|
| **Setup** | Dial, wait for answer, say hello — **connection established** | Press button, start talking — **no setup** |
| **Delivery** | Both sides confirm they hear each other | You hope the other person is listening |
| **Order** | Conversation flows in sequence | Messages might overlap or get missed |
| **Reliability** | "Can you repeat that?" is built in | If they miss it, they miss it |
| **Speed** | Slightly slower (overhead of connection) | Faster (no waiting) |
| **Use case** | Important business call (web, email, files) | Shouting across a construction site (live video, games) |

---

## Where They Sit in the Network Stack

```
┌──────────────────────────────────────────────────┐
│  Layer 7: Application    HTTP, DNS, FTP, SMTP    │
├──────────────────────────────────────────────────┤
│  Layer 4: Transport      TCP  or  UDP            │  ← THIS SECTION
├──────────────────────────────────────────────────┤
│  Layer 3: Network        IP (IPv4, IPv6)         │
├──────────────────────────────────────────────────┤
│  Layer 2: Data Link      Ethernet, Wi-Fi         │
├──────────────────────────────────────────────────┤
│  Layer 1: Physical       Cables, radio waves     │
└──────────────────────────────────────────────────┘
```

Application protocols **choose** which transport to use:
- **HTTP/1.1, HTTP/2** → TCP
- **HTTP/3 (QUIC)** → UDP (with reliability built on top)
- **DNS** → usually UDP for queries, TCP for large responses
- **Video streaming (live)** → often UDP (or UDP-based protocols)
- **Online gaming** → often UDP for game state, TCP for chat/login

---

## Prerequisites

[Section 1.1 — How the Internet Works](../1.1-How-The-Internet-Works/README.md) and [Section 1.2 — Client-Server Architecture](../1.2-Client-Server-Architecture/README.md) — understanding packets, IP, and HTTP makes transport protocols much easier to grasp.

---

*Start with → [1.3.a — What is TCP](./1.3.a-What-is-TCP.md)*
