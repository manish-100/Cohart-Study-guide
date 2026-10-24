# 6.10 — Web3 Basics

> **Big Picture:** Web3 represents the next evolution of the internet — from **read-only** (Web1) to **read-write** (Web2) to **read-write-own** (Web3). Built on **blockchains**, **smart contracts**, and **cryptographic tokens**, Web3 shifts control from centralized platforms to decentralized protocols, enabling trustless interactions, native payments, and user-owned data without intermediaries.

---

## Overview

| Sub-topic | What You'll Learn |
|-----------|-------------------|
| [6.10.a](./6.10.a-Understanding-Web3.md) | What **Web3** is, Web1 vs Web2 vs Web3 evolution, core principles (decentralization, trustlessness, permissionlessness), real-world use cases, criticisms, and how Web3 relates to backend engineering |
| [6.10.b](./6.10.b-Blockchain-Fundamentals.md) | What a **blockchain** is, blocks/chains/hashes, consensus mechanisms (PoW vs PoS), immutability, major blockchains comparison, gas fees, block explorers, transaction lifecycle, and Merkle trees |
| [6.10.c](./6.10.c-Decentralized-Applications.md) | What **DApps** are, traditional vs decentralized architecture, wallet connection, Web3.js/Ethers.js libraries, IPFS storage, DApp categories, advantages and disadvantages, and building a simple DApp interaction |
| [6.10.d](./6.10.d-Smart-Contracts.md) | What **smart contracts** are, Solidity basics, contract lifecycle, EVM, gas optimization, common patterns (ERC-20, ERC-721), security considerations, and interacting with contracts from JavaScript |
| [6.10.e](./6.10.e-Cryptocurrencies.md) | What **cryptocurrencies** are, Bitcoin vs Ethereum, tokens vs coins, ERC-20 standard, stablecoins, wallet types, DEXs vs CEXs, DeFi basics, tokenomics, and the regulatory landscape |

### Extra practice & revision

| File | Purpose |
|------|---------|
| [6.10-Exercise-Questions](./6.10-Exercise-Questions.md) | 50+ practice questions across all 5 subtopics (conceptual, comparison, and design) |
| [6.10-Interview-Questions](./6.10-Interview-Questions.md) | 11 model answers for common interview prompts (Beginner / Intermediate / Advanced) |
| [6.10-Quick-Revision](./6.10-Quick-Revision.md) | Compact cheat sheet (print-friendly) |

Each extra file begins with **How to use this material (instructions)** — follow that workflow first.

---

## The Web Evolution

```
┌─────────────────────────────────────────────────────────────────────────┐
│                    THE EVOLUTION OF THE WEB                              │
│                                                                         │
│   WEB1 (1990-2004)          WEB2 (2004-2020)         WEB3 (2020+)      │
│   ─────────────            ─────────────             ─────────────      │
│   Read-Only                Read-Write                Read-Write-Own     │
│                                                                         │
│   ┌──────────┐             ┌──────────┐              ┌──────────┐      │
│   │  Static  │             │ Platform │              │Blockchain│      │
│   │  Pages   │             │ Servers  │              │ Nodes    │      │
│   │ (HTML)   │             │(AWS,GCP) │              │(Ethereum)│      │
│   └────┬─────┘             └────┬─────┘              └────┬─────┘      │
│        │                        │                         │             │
│        ▼                        ▼                         ▼             │
│   ┌──────────┐             ┌──────────┐              ┌──────────┐      │
│   │  Users   │             │  Users   │              │  Users   │      │
│   │  READ    │             │READ/WRITE│              │READ/WRITE│      │
│   │  content │             │ content  │              │+OWN data │      │
│   └──────────┘             └────┬─────┘              └────┬─────┘      │
│                                 │                         │             │
│   Companies own           Companies own              Users own          │
│   everything              platforms + data            their data         │
│                                                      + digital assets   │
│                                 │                         │             │
│   Examples:                     │                         │             │
│   - Yahoo Directory        ┌────┴────┐              ┌────┴────┐        │
│   - GeoCities              │Facebook │              │Uniswap  │        │
│   - Early Amazon           │YouTube  │              │Aave     │        │
│   - Static blogs           │Twitter  │              │OpenSea  │        │
│                            │Uber     │              │ENS      │        │
│                            └─────────┘              └─────────┘        │
│                                                                         │
│   KEY SHIFT:                                                            │
│   Servers → Platforms → Protocols                                       │
│   Trust companies → Trust code → Trust math (cryptography)              │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## One-line Cheat Sheet

> **Web3 = Blockchain + Smart Contracts + Tokens + Wallets = decentralized applications where users own their data and digital assets without trusting intermediaries**

---

## Prerequisites

- Basic understanding of **web development** (HTML, CSS, JavaScript) — Episode 1
- Familiarity with **client-server architecture** and **REST APIs** — Episode 3
- Understanding of **databases** (helps contrast centralized vs decentralized storage)
- No blockchain or cryptography background required — we explain everything from scratch

---

*Start with -> [6.10.a — Understanding Web3](./6.10.a-Understanding-Web3.md)*
