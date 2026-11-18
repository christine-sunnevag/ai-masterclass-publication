---
title: >-
  Liquid Content: Adapting News Articles to Local Audiences with Multi-Agent LLM
  Systems
authors:
  - Noah Coudert
supervisor: >-
  Benjamin Kille (NTNU/NorwAI) and Arnt Christian Wolden (Adresseavisen/Polaris
  Media)
keywords:
  - Large Language Models
  - Multi-Agent Systems
  - Retrieval-Augmented Generation
  - News Personalisation
  - Factual Faithfulness
  - Norwegian NLP
source: form
---

While generative artificial intelligence and recommendation systems have transformed news production and distribution, the underlying text of a news article remains static across diverse audiences. Regional publishers operating networks of local newspapers frequently cover overarching events from a central desk, yet require distinct local framing, stylistic conventions, and contextual background to engage specific geographic communities. This paper introduces a framework for *liquid content*: dynamically adapting central news articles to the editorial profile of local newspapers using Retrieval-Augmented Generation (RAG) and Large Language Model (LLM) Multi-Agent Systems (MAS), while strictly preserving factual integrity. Conducted in collaboration with the Norwegian media group Adresseavisen / Polaris Media, this study addresses the inherent ``alignment tax'' between stylistic local adaptation and factual hallucination. We propose a sequential, role-separated Drafter--Critic--Reviser pipeline built on Norwegian foundation models (NorLLM) that retrieves both historical contextual passages and stylistic exemplars from local newspaper archives. To evaluate adaptation quality without parallel training corpora, we establish an unpaired evaluation framework combining a discriminative source-newspaper classifier for locality with a two-tier faithfulness metric that distinguishes grounded local additions from unsupported hallucinations. Finally, we synthesise structural gaps in the literature and formulate falsifiable hypotheses to benchmark our multi-agent architecture against fine-tuned (LoRA) and single-agent RAG baselines, alongside historical reader engagement metadata.
