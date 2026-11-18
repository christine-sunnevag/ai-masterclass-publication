---
title: >-
  Evolutionary Optimisation of Heterogeneous Data Mixtures for
  Action-Conditioned World Models in Robotic Control
authors:
  - Mikkel B. Eggen
supervisor: Keith Downing
keywords:
  - World Models
  - Evolutionary Algorithms
  - Control
source: form
---

The performance of action-conditioned world models in robotic control is strongly influenced by the data used during training. However, determining how to effectively combine heterogeneous data sources, such as real-world demonstrations, simulated interactions, and human manipulation data, remains a challenging problem. This paper investigates whether evolutionary algorithms can be used to discover effective data mixtures for training world models, with the goal of improving their predictive capabilities and downstream control performance. Specifically, it explores how data composition influences model performance across different robotic manipulation tasks, and whether optimal data mixtures depend on the specific downstream task. An evolutionary optimisation approach, potentially based on NSGA-II, is proposed to optimise the selection and sampling proportions of different data sources. Its performance will be compared against established alternatives, including random search, Bayesian optimisation, uniform weighting, and distributionally robust optimisation. In addition, the study investigates the complementary value of multimodal data, including visual, proprioceptive, tactile, and motion information, as well as the influence of simulation fidelity on the usefulness of simulated data. To address the computational cost of evolutionary optimisation, a multi-fidelity evaluation strategy is proposed to identify promising data mixtures before committing to full-scale training. In short, this research aims to establish whether evolutionary optimisation can provide an effective and adaptable approach to data composition for action-conditioned world models in robotic control.
