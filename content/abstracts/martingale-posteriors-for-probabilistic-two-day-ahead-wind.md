---
title: >-
  Martingale Posteriors for Probabilistic Two-Day-Ahead Wind Power Forecasting
  in Norway
authors:
  - Rami Chumber
supervisor: SINTEF and Statnett
keywords:
  - Probabilistic Forecasting
  - Wind Power
  - Uncertainty Quantification
  - Martingale Posterior Distributions
  - Ensemble Post-Processing
  - Bayesian Inference
source: form
---

Transmission system operators such as Statnett need wind power forecasts two days ahead, and the decisions these forecasts support depend as much on their uncertainty as on their expected value. The recent WindAI competition showed that gradient-boosted trees with careful feature engineering give accurate point forecasts on Norwegian bidding-zone data, but it ranked submissions by root mean squared error alone, and the uncertainty estimates teams supplied were neither standardised nor systematically evaluated.

This paper reviews the literature needed to close that gap: the calibration–sharpness paradigm and proper scoring rules for probabilistic forecasts, statistical post-processing of ensemble weather predictions, and Bayesian approaches to uncertainty quantification. It then introduces martingale posterior distributions (Fong, Holmes and Walker, 2023), a recent framework that obtains Bayesian uncertainty from the predictive distribution of unobserved future data rather than from a prior, and their extension to time series by Moya and Walker (2025). We propose a study that adapts this framework to post-processing of the 15-member MEPS ensemble weather forecasts, and benchmarks it against climatology, persistence, ensemble model output statistics, Bayesian model averaging and a Bayesian neural network on the WindAI data, using the continuous ranked probability score, calibration and interval coverage. The main open methodological problem we identify is the treatment of exogenous weather inputs in the predictive resampling step.
