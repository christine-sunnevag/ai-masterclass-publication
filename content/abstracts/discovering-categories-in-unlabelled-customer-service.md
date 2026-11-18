---
title: >-
  Discovering Categories in Unlabelled Customer Service Summaries with Large
  Language Models
authors:
  - Eirik Solberg
supervisor: Benjamin Kille / SpareBank 1 SMN
keywords:
  - topic modeling
  - large language models
  - hierarchical categorization
source: form
---

A bank employee wants to know why an increased number of customers called about blocked cards abroad last year. SpareBank 1 SMN has more than 500,000 summaries of customer calls that could help answer this question, but it is too costly to go through all of them. The bank has therefore developed a system that retrieves a relevant subset of calls based on categories. The problem is how to create these categories when nobody has labelled the data. Some of their early attempts showed that with ten broad topics, the relevant calls get buried together with thousands of other calls. Another attempt produced around 18,000 categories, far too many to be useful. What the bank needs lies somewhere in between: a small set of main categories, each split into more fine-grained subcategories. Large language models (LLMs) can be used to both discover and name the categories, but it is unclear how such a hierarchy should be built, and how costly it would be compared to classic topic models.

This paper presents the goal, research questions and state of the art for a master's project on this problem. Preliminary experiments on a public dataset suggest that LLMs struggle less with sorting texts into categories than with finding the categories in the first place. We therefore focus on how the categories are found, and outline a plan to compare top-down and bottom-up hierarchies against classic topic models on quality and cost. Somewhere between ten categories and 18,000 lies the right answer. This project is about finding it.
