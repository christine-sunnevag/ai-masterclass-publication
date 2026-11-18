---
title: >-
  A Transparent Structural-Semantic Representation of Text for Reasoning and
  Retrieval
authors:
  - Ramtin Samavat
supervisor: Dhruv Gupta
keywords:
  - Information Retrieval
  - Text Representation
  - Space-Filling Curves
source: form
---

Retrieving relevant documents is a fundamental problem in information retrieval. Keyword search becomes limited when the query terms are not present in relevant documents, a limitation known as the vocabulary mismatch problem. Semantic search based on transformer-based neural networks addresses this limitation, but these models may struggle to preserve explicit textual structure and offer limited transparency regarding their internal reasoning processes, acting as black boxes. When the internal processes are not directly observable, they are more challenging to improve, and changing the behavior may require additional training.

This thesis explores an alternative approach for transparent and manipulable reasoning over text to retrieve relevant documents. The main research question is: How can structural and semantic information be combined into a transparent text representation that supports reasoning and retrieval of relevant documents? The structural foundation of this work is built on the textual representation introduced by Miller and Myers, where spans of text are represented as points in a two-dimensional space. This preserves the structure of the text and allows structural relationships to be described explicitly. Semantic annotations are added to these points, resulting in a multidimensional structural-semantic representation. The Morton curve, a type of space-filling curve, is investigated for mapping this representation into a one-dimensional representation, which is then used to reason over text.

The representation should support reasoning when the answer to a query is not stated in one location. Consider the query “universities in Norway” and a document about NTNU. The document does not contain the query terms, but it states that NTNU is located in Trondheim. By combining the facts that NTNU is a university and that Trondheim is a city located in Norway, the document should be identified as relevant to the query. The core properties are transparency, losslessness, and manipulability. The expected outcome is the representation itself, together with an assessment of how well it satisfies these properties and supports the retrieval of relevant documents. The thesis does not aim to outperform existing approaches, but offers a different perspective on the problem of retrieval.
