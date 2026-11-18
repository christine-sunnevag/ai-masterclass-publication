---
title: Building blocks for Functional Flow Matching
authors:
  - Jenny Lindgaard
supervisor: Helge Langseth
keywords:
  - Generative modeling
  - Flow Matching
  - Gaussian Processes
source: form
---

Generative models are commonly used to generate new data points that resemble observations from an unknown probability distribution. However, many types of data are naturally represented as functions rather than finite-dimensional vectors. This raises an interesting question: how can a generative model be extended from generating individual data points to generating entire functions? Functional Flow Matching provides one approach by combining Flow Matching with Gaussian Processes. Flow Matching learns a time-dependent vector field that transports samples from a simple source distribution toward a target distribution. It constructs conditional probability paths whose velocities are known analytically.

These velocities provide training targets for a neural network, allowing the vector field to be learned without explicitly evaluating the probability densities. Gaussian Processes define probability distributions over functions through a mean and covariance function. This provides a natural way to represent random functions. By combining these ideas, Functional Flow Matching allows entire functions to be generated.
