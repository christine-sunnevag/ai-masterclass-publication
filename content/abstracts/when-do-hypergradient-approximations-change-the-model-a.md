---
title: >-
  When Do Hypergradient Approximations Change the Model? A Controlled Study in
  Bi-Level MBRL
authors:
  - Mathias Hop Ness
supervisor: Akhil S. Anand
keywords:
  - Model-based reinforcement learning
  - Objective mismatch
  - Bi-level optimisation
  - Implicit differentiation
  - Policy sensitivity
source: form
---

Model-based reinforcement learning fits its model to predict the next state, the policy, however, is judged by its return in the real environment. Bi-level model learning adresses this objective mismatch, tuning the model by implicitly differentiating the converged policy's real return. Scaling this approach to deep world models requires approximating every term of the hypergradient at once, so a failure cannot be traced back to its cause. We study two approximations, one at a time against an exact reference on a misspecified linear-quardatic regulator: stopping the inner policy before stationary convergence, and replacing the inverse inner Hessian with the identity. Inner stationarity is a condition for implicit differentiation, that cannot be guaranteed in practice. We provide evidence that this condition can be relaxed substantially and still recover the exact result, suggesting the hypergradient points in the right direction before the policy has converged. Replacing the inverse Hessian with the identity however, changes the direction of the hypergradient. The loop converges to a different model, worse than system identification, unless its weight is tuned against the real return. For scaling bi-level model learning up, this suggests that the inner loop can be relaxed within limits, but the identity is not a free substitute for the inverse.
