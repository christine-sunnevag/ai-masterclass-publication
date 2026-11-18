---
title: >-
  Blind Parameter Estimation of Cascaded Guitar Audio Effects: A Review and
  Methodological Framework
authors:
  - Vivien DODIN
supervisor: Björn Gambäck
keywords:
  - Audio Effect Estimation
  - Guitar Signal Processing
  - Blind System Inversion
  - Music Information Retrieval
source: form
---

Audio effects are frequently used in music production due to the interesting way they can change and modify audio sounds. Guitar effects, a subset of audio effects focusing on guitar signals, are commonly used by guitarists to shape the tone of their instruments. However, recreating a specific guitar tone from an existing recording remains a difficult task, as multiple effects are typically chained together and the unprocessed dry signal is unknown. In this article, we define the problem of blind parameter estimation for a cascaded guitar effect chain composed of distortion, chorus, delay, and reverb directly from a processed audio signal. The research being at an early stage, we review and compare three different approaches from the literature: direct parameter regression using Convolutional Neural Networks, blind dry signal recovery combined with an evolutionary search algorithm, and auto-encoder architectures using Differentiable Digital Signal Processing (DDSP). Finally, we discuss the current challenges of multi-effect estimation, such as the choice of a relevant loss function regarding subjective listening tests and the modeling of the different effects.
