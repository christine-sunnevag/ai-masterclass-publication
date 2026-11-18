---
title: >-
  Wrapping Forecasting Networks in the DeepONet Structure: Preliminary Results
  Across Spatial Data Regimes
authors:
  - Sebastian Munthe
supervisor: Massimiliano Ruocco / Michail Spitieris
keywords:
  - Deep Operator Networks
  - Operator learning
  - Forecasting
source: form
---

Time-series modelling has long been an important area of research, being important for topics like climate modelling. With increasing amount of compute and data, machine learning, and especially deep learning, has become important for the next generation of forecasting models. Deep Operator Networks (DeepONets) were originally introduced as approximators for non-linear operators, and were used to solve difficult Partial Differential Equations (PDEs). This showed their potential to capture difficult non-linear correlations, and they have since been trained on time-series data for tasks like end-state-prediction, but little work has been done on isolating the effect of the DeepONet branch-trunk structure from the network inside them. In this article I test if the DeepONet structure itself improves forecasting by putting two forecasting networks (An encoder-decoder LSTM and a transformer) up against their DeepONet-wrapped counterparts (the S-DeepONet and the S-NOT) on two datasets. The DeepONets structure creates an inductive bias towards problems with two independent inputs. The branch sees only the input function, while the trunk sees only the query point. I test this effect by choosing one dataset with spatial inputs (USHCN), where the query point is a combination of location and time, and one non-spatial dataset (Weather) where the query point is only time. The preliminary experiments show no gain from just wrapping the networks in the DeepONet structure. This shows that the DeepONet structure itself is not a magic pill for improvement, even on a dataset that the DeepONet has an inductive bias towards.
