---
title: >-
  A Pipeline for Object Extraction, Simulation, and Image-to-Image Translation
  of Sonar Recordings
authors:
  - Andreas Gjersøe
  - Frikk Ormestad Larsen
supervisor: Gavin William Taylor & Kongsberg
keywords:
  - Sonar
  - Synthetic data
  - Object Detection
  - Physics-based Simulator
  - Sim-to-Real
  - Image-to-Image Translation
source: form
---

Machine learning techniques for underwater sonar object detection are heavily constrained by the scarcity of annotated datasets, driven by confidential operational data and tedious manual labeling. While physics-based simulators provide an alternative for generating labeled datasets, their theoretical modeling results in a significant domain gap between synthetic renders and real operational recordings. To address this challenge, we propose an end-to-end pipeline that couples object extraction, programmatic simulation, and paired Image-to-Image (I2I) translation. The framework extracts objects of interest from the unannotated recordings, recreates the scenes in a simulator, and trains an I2I translation network to map synthetic renders onto their real-world counterparts. By utilizing paired pixel-to-pixel supervision, the pipeline synthesizes realistic operational imagery while integrating the simulator's spatial target annotations. This preparatory project establishes the system architecture and integration constraints, laying the groundwork for benchmarking unsupervised extraction models and sim-to-real translation architectures.
