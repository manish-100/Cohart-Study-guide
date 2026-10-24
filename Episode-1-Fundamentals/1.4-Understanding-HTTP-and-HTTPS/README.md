# 1.4 — Understanding HTTP & HTTPS

> **Big Picture:** HTTP is how browsers ask for web pages; HTTPS is HTTP wrapped in **TLS** so nobody on the wire can read or tamper with your traffic. Proxies sit *in front of* or *beside* that path; VPNs tunnel *everything* through another network. Together they explain most of what you see in DevTools, browser security warnings, and corporate networks.

---

## Overview

| Sub-topic | What You'll Learn |
|-----------|-------------------|
| [1.4.a](./1.4.a-HTTP-and-Versions.md) | What HTTP is, how requests/responses work, and how versions evolved (0.9 → 1.1 → 2 → 3) |
| [1.4.b](./1.4.b-HTTP-Status-Codes.md) | Status code families (1xx–5xx), the ones you must know, and how to use them in APIs |
| [1.4.c](./1.4.c-HTTPS-vs-HTTP.md) | Why HTTPS is the default today — confidentiality, integrity, authentication, trust signals |
| [1.4.d](./1.4.d-How-HTTPS-Secures-Connections.md) | How TLS establishes a secure channel: certificates, handshakes, and what each step protects |
| [1.4.e](./1.4.e-SSL-TLS-Encryption.md) | What SSL/TLS is, how it differs from “SSL” in everyday speech, certificates, and modern TLS 1.3 |
| [1.4.f](./1.4.f-Proxy-and-Reverse-Proxy.md) | Forward proxies vs reverse proxies — who they serve, what they cache, and where they sit in the path |
| [1.4.g](./1.4.g-VPN-How-It-Works.md) | How VPNs tunnel traffic, what they encrypt (and what they don’t), and how they relate to “restricted content” |

### Extra practice & revision

| File | Purpose |
|------|---------|
| [1.4-Exercise-Questions](./1.4-Exercise-Questions.md) | Practice questions + DevTools/`curl` drills across all 1.4 subtopics |
| [1.4-Interview-Questions](./1.4-Interview-Questions.md) | Model answers for common interview prompts |
| [1.4-Quick-Revision](./1.4-Quick-Revision.md) | Compact cheat sheet (print-friendly) |

Each extra file begins with **How to use this material (instructions)** — follow that workflow first.

---

## One-Line Cheat Sheet

```
HTTP   = plain-text web protocol (classic: over TCP port 80)
HTTPS  = HTTP over TLS (usually TCP port 443; HTTP/3 uses QUIC/UDP)
TLS    = modern name for the encryption layer (SSL is the legacy name)
Proxy  = intermediary the CLIENT uses (outbound traffic)
Rev.   = intermediary the SERVER uses (inbound traffic to origin)
VPN    = virtual network interface; routes IP traffic through a tunnel (not “HTTP-only”)
```

---

## Prerequisites

- [1.2.c — HTTP request/response](../1.2-Client-Server-Architecture/1.2.c-HTTP-Request-Response-Cycle.md) — methods, headers, status codes in context  
- [1.3 — TCP & UDP](../1.3-Internet-Protocols/README.md) — TCP handshakes, QUIC/HTTP/3 on UDP  

---

*Start with → [1.4.a — HTTP and its versions](./1.4.a-HTTP-and-Versions.md)*
