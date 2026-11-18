---
title: >-
  Prototype Modification in Prototype-Based Neural Networks: A Review and
  Empirical Study
authors:
  - Elin Haugum
supervisor: Kerstin Bach
keywords:
  - Case-based Reasoning
  - XAI
  - Prototype-Based
source: form
---

Post-hoc explainability methods aim to explain model predictions after training, but their explanations may not fully reflect the model’s underlying decision-making process. In decision-making, humans often draw on previous experiences and comparisons to understand situations and make judgements. Prototype-based neural networks build on a similar principle, incorporating the explanation into the model by learning representative patterns during training and using them as part of the model’s own reasoning.

However, the way these networks represent and integrate prototypes varies. Prototypes may be constrained to real training examples or learned as unconstrained representations in the model’s latent space; the set of retained prototypes may be modified, for example by pruning or adding new prototypes; and prototypes may represent only supporting evidence or opposing evidence as well.

In this work, we first review existing prototype-based neural network architectures to identify how prototypes are represented, integrated and used, and where gaps remain in the research. We then investigate empirically for selected architectures how modifying the set of prototypes affects the faithfulness and interpretability of prototype-based explanations. Finally, we examine how modifying the set of prototypes with prototypes constrained to real examples and unconstrained learned prototypes affects the explanations.

Faithfulness is measured through ablation and sensitivity analyses, measuring how predictions change when the set of prototypes is modified, while interpretability is assessed through latent space geometry and coherence. By using such computational measures, we avoid requiring large-scale human alignment studies.
