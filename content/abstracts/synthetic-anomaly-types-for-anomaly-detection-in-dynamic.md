---
title: Synthetic Anomaly Types for Anomaly Detection in Dynamic Graphs
authors:
  - Johanne Dahl Norland
  - Siri Wikeland
supervisor: Kjetil Nørvåg and Ahmet Tüzen
keywords:
  - Anomaly Detection
  - Dynamic Graphs
  - Synthetic Anomalies
source: form
---

Dynamic graphs are graph structures that represent systems in which interactions (edges) between entities (nodes) evolve over time, such as financial transaction networks, social networks, and computer networks. Anomalous interactions in these graphs, such as fraudulent transactions or cyber intrusions, are rare and seldom labelled. Edge-level anomaly detectors are usually trained in a self-supervised way: observed edges are treated as normal and pseudo-anomalous edges are generated as negatives. The most common approach is random negative sampling, which works by only replacing the destination node. This approach only produces structural anomalies, i.e. edges between unlikely pairs of nodes. This limits the ability of models trained this way to detect temporal and contextual anomalies, which are plausible edges occurring at an unusual time or with unusual features.

Previous work has explored alternative negative sampling methods, such as historical or typed negatives, but it remains unclear how the type of pseudo-anomaly used in training affects the detection of real, organic anomalies across model families.

In this work, we aim to compare multiple existing negative sampling strategies for two architecturally different temporal graph models (TGN and TCL), with EdgeBank as a nonlearned baseline. The models will be trained with pseudo-anomalies and evaluated on organic anomaly labels in three public datasets: Wikipedia and Reddit (banned users), and MOOC (student dropouts). We will analyse whether any gains depend on how closely the synthetic types resemble the organic anomalies. The result will be a report of which training signals help which models, and of where better pseudo-anomalies are needed. These insights can help researchers and practitioners choose training signals when labelled anomalies are unavailable, as is common in fraud and cyber intrusion detection.
