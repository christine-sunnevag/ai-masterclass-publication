---
title: XAI Methods for Detecting Missing Persons in SAR
authors:
  - Une Marie Stimo
  - Christine Sunnevåg
supervisor: >-
  Odd Erik Gundersen (NTNU), Gro Elisabeth Sørum Oleivsgard (NTNU),
  the Norwegian Armed Forces
keywords:
  - Explainable AI
  - Object Detection
  - Search and Rescue
source: form
---

Rescue helicopters play a central role in Norwegian search and rescue (SAR) operations, where a system operator monitors thermal camera footage to locate missing persons. An object detector could support the operator in this task. However, detecting persons in thermal images from helicopters is challenging, as they often appear small and can easily be mistaken for rocks or other objects with a similar heat signature. Improving such detectors requires understanding why they find or miss a person. Explainable AI (XAI) can provide such explanations, but it is unclear which XAI methods are suited to transformer-based detectors and thermal images. This paper assesses nine XAI methods from three families, perturbation-, gradient- and attention-based, against seven criteria derived from our problem, including applicability to transformer-based detectors, explanation of false negatives and small objects, and evidence of faithfulness. No method meets all criteria, and support for explaining false negatives is particularly limited. We select D-CRISP and ODAM as the main methods, deformable attention maps as an exploratory method, and D-RISE for explaining false negatives. In our master’s thesis, these methods will be applied to a transformer-based detector on thermal images recorded during flights and provided by the Norwegian Armed Forces.
