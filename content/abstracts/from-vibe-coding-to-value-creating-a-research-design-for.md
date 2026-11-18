---
title: >-
  From Vibe Coding to Value Creating: A Research Design for Multi-Agent Review
  of AI-Generated MVPs
authors:
  - Jonas Lavik
supervisor: Anh Nguyen Duc
keywords:
  - Vibe coding
  - LLM-based code review
  - Software quality
source: form
---

Generative AI lets people with domain knowledge but little programming experience build working software by describing it in natural language, a practice known as vibe coding. Two things are no longer guaranteed when they do: that the code is reliable, secure and maintainable, and that the product does what it was built to do. Code review and static analysis would normally catch the first, but both assume someone technical reads the result, and a vibe coder usually has no such person. This paper presents the research design of a master’s thesis that investigates how far a review performed by multiple AI agents can establish whether an AI-generated minimum viable product (MVP) is technically sound and aligned with its stated purpose. I break the goal into one literature question and three empirical ones. The empirical questions share a measurement setup: precision and recall against an expert-labelled corpus, agreement with expert judgement of intent, and a comparison between a multi-agent reviewer and a single agent given the same rules. There are no evaluation results yet. What I can report are observations from preparing the instrument. The main one is that hosted-model deprecation and silent fallback behaviour make LLM-based review results irreproducible unless every run records which analyser actually produced it.
