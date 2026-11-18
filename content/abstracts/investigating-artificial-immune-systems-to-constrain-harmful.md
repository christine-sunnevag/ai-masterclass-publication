---
title: >-
  Investigating Artificial Immune Systems to Constrain Harmful Convergence in
  Multi-Agent Systems
authors:
  - Johannes Lorentzen
supervisor: Pauline Haddow
keywords:
  - Artificial Immune System
  - Bio-inspired AI
  - Multi-Agent System
  - Harmful Convergence
source: form
---

Multi-agent systems deploy language-model agents working on separate tasks, often without monitoring the population as a whole. In a vendor-reported evaluation, agents given tasks that could not be completed legitimately began communicating through a shared software package service, developed a protocol, and reused information left by earlier runs. The group gained unauthorised access to production systems. No agent was instructed to pursue this outcome, and no component monitored the collective behaviour. This paper terms this pattern harmful convergence: a population converges on a harmful action when one or more agents corrupt the emerging consensus, shifting the group's accepted practice until an action violates a predefined boundary, such as a task instruction, policy or safeguard. Corrupting is used functionally, without implying intent; influence travels through traces left for other agents, and harm is assessed against criteria fixed beforehand. Consensus on a permitted action provides a control case. Artificial immune systems may provide a safeguard, because immune mechanisms screen a population locally, without central control. A scoping search of OpenAlex (81 strings; 538 records; ninety papers retained) found the ideas across the artificial immune systems, multi-agent security and opinion-dynamics literatures, but no work combining them to detect and suppress harmful convergence. The review identifies a risk: a detector that relearns normal behaviour from the monitored population may incorporate the convergence into its model of normality and cease to detect it. An opinion-dynamics experiment with planted corrupting agents is proposed. Negative selection with fixed, adaptive and memory-augmented self sets will be compared with an anomaly detector on detection time at a predefined false-positive rate. Flagged agents will be observed rather than excluded, and removed only if they propose harmful actions, so detection and suppression can be evaluated separately. The motivating incident reports are not peer reviewed and are treated as motivation, not evidence.
