# 4.7 --- Function Calling / Tool Calling

> **Big Picture:** LLMs generate text --- they can't execute code, query databases, or call APIs on their own. **Function calling** (also called **tool calling**) bridges this gap by letting the AI **decide which function to invoke** and **what arguments to pass**, while your deterministic code **handles the actual execution**. The model becomes a reasoning engine that routes user intent to the right function --- like choosing between `improveBio()`, `generateOpeners()`, and `moderateText()` based on what the user needs.

---

## Overview

| Sub-topic | What You'll Learn |
|-----------|-------------------|
| [4.7.a](./4.7.a-What-Is-Tool-Calling.md) | What **tool/function calling** is, why it matters, how it bridges AI decisions to deterministic code execution, and how it differs from just asking for JSON |
| [4.7.b](./4.7.b-When-to-Use-Tool-Calling.md) | **When** to use tool calling (database queries, API calls, calculations), when **not** to use it (pure text generation), and a decision framework for tool calling vs prompt engineering |
| [4.7.c](./4.7.c-Deterministic-Tool-Invocation.md) | The **tool calling flow**: define tools, send to API, model returns `tool_calls`, execute function, return result, model generates final response. OpenAI `tools` parameter, JSON schemas, parallel tool calls, full code examples |
| [4.7.d](./4.7.d-Hybrid-Logic.md) | **Combining AI reasoning with deterministic code** --- AI decides WHAT to do, code does the HOW. The router pattern. Building a system where AI chooses between `improveBio()`, `generateOpeners()`, `moderateText()` based on user intent |
| [4.7.e](./4.7.e-Building-an-AI-Tool-Router.md) | **Complete working example**: multi-function tool router with 3+ tools, AI-driven selection, execution, error handling, validation, logging, and production patterns |

### Extra practice & revision

| File | Purpose |
|------|---------|
| [4.7-Exercise-Questions](./4.7-Exercise-Questions.md) | 45+ practice questions + hands-on tasks across 4.7.a-e |
| [4.7-Interview-Questions](./4.7-Interview-Questions.md) | Model answers for common interview prompts (Beginner / Intermediate / Advanced) |
| [4.7-Quick-Revision](./4.7-Quick-Revision.md) | Compact cheat sheet (print-friendly) |

Each extra file begins with **How to use this material (instructions)** --- follow that workflow first.

---

## Why Function Calling Matters for AI Engineering

```
+---------------------------------------------------------------------------+
|           THE PROBLEM: LLMs CAN ONLY GENERATE TEXT                         |
|                                                                            |
|  User: "Improve my dating bio"                                             |
|        |                                                                   |
|        v                                                                   |
|  +-------------+                                                           |
|  |  LLM Model  |  Can reason about WHAT to do                             |
|  |             |  But CANNOT execute code, call APIs, or query databases   |
|  +------+------+                                                           |
|         |                                                                  |
|         v                                                                  |
|  Without tool calling:                                                     |
|    LLM returns: "Here's an improved bio: ..."                              |
|    (pure text -- no structure, no function executed, no validation)         |
|                                                                            |
|  With tool calling:                                                        |
|    LLM returns: { "function": "improveBio", "args": { "bio": "..." } }    |
|    Your code: executes improveBio() with validated args                    |
|    LLM gets result back -> crafts a natural response                       |
|                                                                            |
|  THE KEY INSIGHT:                                                          |
|    AI decides WHAT function to call (reasoning)                            |
|    Your code decides HOW to execute it (deterministic)                     |
|    This separation is the foundation of reliable AI systems.               |
+---------------------------------------------------------------------------+
```

```
+---------------------------------------------------------------------------+
|           THE TOOL CALLING FLOW                                            |
|                                                                            |
|  1. DEFINE       2. SEND          3. MODEL          4. EXECUTE             |
|  tools with      tools + user     returns           the function           |
|  JSON schemas    message to API   tool_calls        in YOUR code           |
|                                                                            |
|  improveBio()     +----------+    { name:            result =              |
|  generateOpeners  |   LLM    | -> "improveBio",  -> improveBio(           |
|  moderateText()   |   API    |    args: {...} }      args)                 |
|                   +----------+                                             |
|                                                                            |
|  5. RETURN         6. MODEL                                                |
|  result to         generates                                               |
|  the model         final response                                          |
|                                                                            |
|  { result:         "I've improved     +----> User sees                     |
|    "New bio..." }   your bio! ..."            natural response             |
+---------------------------------------------------------------------------+
```

---

## One-line Cheat Sheet

> **Define tools as JSON schemas -> LLM decides which to call -> your code executes the function -> LLM formats the result for the user**

---

## Prerequisites

- Completion of [4.5 --- Generating JSON Responses from LLMs](../4.5-Generating-JSON-Responses-from-LLMs/README.md) (understanding how to get structured data from LLMs)
- Familiarity with **LLM API calls** ([4.2](../4.2-Calling-LLM-APIs-Properly/README.md))
- Understanding of **prompt engineering** ([4.3](../4.3-Prompt-Engineering-Fundamentals/README.md))
- Working knowledge of **JavaScript** (Episode 1)
- Node.js installed (v18+) and `openai` SDK

---

*Start with -> [4.7.a --- What Is Tool Calling](./4.7.a-What-Is-Tool-Calling.md)*
