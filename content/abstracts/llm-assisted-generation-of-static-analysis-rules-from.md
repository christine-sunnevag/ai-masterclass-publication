---
title: LLM-Assisted Generation of Static Analysis Rules from Natural Language
authors:
  - Sondre Moa Risnes
supervisor: Leonardo Montecchi
keywords:
  - Static Analysis
  - LLM
  - Rule generation
source: form
---

Custom coding conventions can be easy to describe but time-consuming to implement in a static-analysis tool. Developers need to understand how the tool represents code, express the convention in its rule language, and test that the rule handles exceptions correctly. A large language model (LLM) could draft a rule from a natural-language description. Even a draft that runs successfully can match the wrong code. This paper examines how previous studies generate rules and queries, evaluate their behavior against reference rules or test examples, and use analyzer feedback to revise them. An open question for the subsequent master’s thesis is how much developer time and computation it takes to turn a generated draft into a reliable, reusable rule.
