---
title: >-
  Exploring feature space transformations for Artifical Immune Systems on
  ordinal fine-grained text classification tasks
authors:
  - Kristoffer Osen
  - Tiina Jennina Heiskanen
supervisor: Pauline Catriona Haddow
keywords:
  - immune systems
  - text classification
  - feature space transformation
source: form
---

Many judgments about text are a matter of degree: how false a political claim is, or how negative a review is. Artificial immune systems (AIS) are inspired by the immune system, and can be used as classifiers in which evolved detectors recognize the data points that lie close to them. Since an AIS classifies by comparing distances, its results depend on how texts are placed in the feature space. Supervised metric learning transforms the feature space so that texts from the same class end up close together, and in ordinal metric learning, neighboring classes, such as “true” and “mostly true”, end up closer than more distant classes. This should suit AIS well, since their detectors then work in a space where closeness means a similar class. In the literature reviewed, transforming the feature space like this is new for AIS on text. The planned work investigates the effect of such feature spaces transformations on AIS for ordinal fine-grained text classification.
