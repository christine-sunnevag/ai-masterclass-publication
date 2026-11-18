---
title: >-
  CORL vs. SRL: Combinatorial Optimization with Reinforcement Learning for the
  Dynamic Assortment Problem
authors:
  - Martin Renslo Høva
  - Runar Saur Modahl
supervisor: 'Helge Langseth. Co-supervisors: Akhil Anand and Sebastien Gros'
keywords:
  - Reinforcement Learning
  - Mixed Integer Linear Programming
  - Branch-and-Bound
  - Sequential Combinatorial Optimization
  - Dynamic Assortment Optimization
  - Structured Reinforcement Learning
source: form
---

Sequential combinatorial decision problems are difficult for standard reinforcement learning (RL), since the number of possible actions grows exponentially with the problem size. Combinatorial optimization reinforcement learning (CORL) addresses this by representing the policy as a parameterized mixed integer linear program (MILP) which is solved with branch-and-bound (BnB) and trained with RL, though this approach has until now only been tested on synthetic problems. We refactor an existing CORL implementation into a modular codebase, and apply it to the dynamic assortment problem (DAP), which was used to evaluate structured reinforcement learning (SRL). We formulate the MILP policy for the DAP and compare it with SRL and with greedy and expert baselines. We find that CORL closes 68.3% of the gap between greedy and expert policies, compared to 63.0% for SRL, although the difference is not statistically significant. The main drawback is training time: since every action needs a BnB solve and the tree size varies widely, CORL training varies greatly between runs and may take hours, while SRL consistently trains in minutes.
