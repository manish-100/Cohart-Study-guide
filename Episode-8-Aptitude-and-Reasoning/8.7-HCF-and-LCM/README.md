# 8.7 HCF and LCM

## Overview

**HCF (Highest Common Factor)** and **LCM (Least Common Multiple)** are two of the most fundamental concepts in number theory and arithmetic. HCF (also called GCD -- Greatest Common Divisor) is the largest number that divides two or more numbers exactly, while LCM is the smallest number that is exactly divisible by two or more numbers.

These concepts appear everywhere -- from simplifying fractions to solving problems on scheduling, circular tracks, bells ringing together, tiling, and resource distribution. They are tested heavily in competitive exams (SSC, Banking, CAT, GATE, placement tests) both as direct questions and as building blocks inside larger problems.

This section covers definitions, multiple methods for computing HCF and LCM, their properties, the relationship between them, and a wide variety of applications -- all with worked examples and deep practice material.

---

## Subtopics

| # | Subtopic | File |
|---|----------|------|
| a | Concepts and Formulas | [8.7.a-Concepts-and-Formulas.md](8.7.a-Concepts-and-Formulas.md) |
| b | Tips, Tricks, and Shortcuts | [8.7.b-Tips-Tricks-and-Shortcuts.md](8.7.b-Tips-Tricks-and-Shortcuts.md) |
| c | Solved Examples (20+) | [8.7.c-Solved-Examples.md](8.7.c-Solved-Examples.md) |
| - | Practice MCQs (40+) | [8.7-Practice-MCQs.md](8.7-Practice-MCQs.md) |
| - | Quick Revision / Cheat Sheet | [8.7-Quick-Revision.md](8.7-Quick-Revision.md) |

---

## Practice Tracker

| Difficulty | Total Questions | Attempted | Correct | Accuracy |
|------------|:--------------:|:---------:|:-------:|:--------:|
| Easy       | 15 | _ | _ | _ |
| Medium     | 15 | _ | _ | _ |
| Hard       | 12 | _ | _ | _ |
| **Total**  | **42** | _ | _ | _ |

---

## One-Line Formula Cheat Sheet

```
HCF (Prime Factorization)       = Product of LOWEST powers of COMMON prime factors
LCM (Prime Factorization)       = Product of HIGHEST powers of ALL prime factors
HCF x LCM                       = Product of the two numbers  (for two numbers only)
HCF of fractions                 = HCF of numerators / LCM of denominators
LCM of fractions                 = LCM of numerators / HCF of denominators
HCF always divides LCM
HCF(a, b) <= min(a, b)
LCM(a, b) >= max(a, b)
LCM(a, b) = (a x b) / HCF(a, b)
```

---

## Prerequisites

Before starting this section, make sure you are comfortable with:

- **8.6 Number System** -- prime numbers, factors, multiples, divisibility rules
- **Prime factorization** -- breaking a number into its prime factors
- **Division algorithm** -- dividend = divisor x quotient + remainder
- **Basic fractions** -- numerator, denominator, simplification

---

## How to Use This Section

1. **Read** [Concepts and Formulas](8.7.a-Concepts-and-Formulas.md) first to build a strong foundation on definitions, methods, and properties.
2. **Study** [Tips, Tricks, and Shortcuts](8.7.b-Tips-Tricks-and-Shortcuts.md) to learn how to solve problems faster under exam pressure.
3. **Work through** [Solved Examples](8.7.c-Solved-Examples.md) -- attempt each problem before reading the solution.
4. **Test yourself** with [Practice MCQs](8.7-Practice-MCQs.md) under timed conditions.
5. **Revise** using the [Quick Revision](8.7-Quick-Revision.md) sheet before exams.

---

## Key Connections to Other Topics

| Topic | How HCF/LCM Is Used |
|-------|---------------------|
| 8.6 Number System | Factors, multiples, primes -- the building blocks of HCF/LCM |
| 8.5 Ratio and Proportion | Simplifying ratios requires HCF; combining ratios may require LCM |
| 8.9 Work and Time | LCM used to assume total work when multiple workers have different rates |
| 8.10 Pipes and Cisterns | LCM of filling/emptying times to compute combined rates |
| 8.11 Speed, Distance, and Time | Circular track problems (when will runners meet again?) use LCM |
| 8.1 Percentage | Simplifying percentage fractions often involves HCF |
| 8.3/8.4 Interest | Finding common periods for comparison uses LCM |
