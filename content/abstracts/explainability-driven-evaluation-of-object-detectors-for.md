---
title: Explainability-Driven Evaluation of Object Detectors for Person Detection
authors:
  - Kaia Bogetvedt Johannessen
supervisor: Odd Erik Gundersen / Forsvaret
keywords:
  - Explainable Artificial Intelligence
  - Object Detection
  - You Only Look Once (YOLO)
  - DEtection TRansformer (DETR)
  - Search and Rescue
  - Helicopter
  - Thermal imaging
source: form
---

Search and rescue (SAR) helicopter crews search for people in distress for many hours at a time, and artificial intelligence (AI) could support them by detecting persons in thermal imagery, improving search efficiency and reducing the workload on the crew. To use such systems productively, operators must be able to trust the predictions, which requires evaluation that goes beyond detection accuracy. This project, conducted in collaboration with Forsvaret, investigates how explainable artificial intelligence (XAI) can be used to evaluate object detectors developed for SAR helicopter operations and to guide their further development. The thermal dataset and an object detection models used in the project are developed by Forsvaret. The paper presents the groundwork for the master's thesis. First, it reviews the literature on XAI and object detection. XAI methods are organized into four categories: attribution-based, activation-based, perturbation-based and transformer-based. The review covers two types of detectors: convolutional one-stage detectors of the You Only Look Once (YOLO) type and the DEtection TRansformer (DETR) with its later variants. XAI methods differ in which architectures they apply to: model-agnostic perturbation methods can explain both detector-types, whereas gradient-based and attention-based methods are largely tied to convolutional and transformer architectures, respectively. Second, the paper describes how XAI methods will be evaluated. Because no single metric captures explanation quality, the project utilizes the ODExAI framework, which assesses explanations along three dimensions: faithfulness, localization and complexity. Faithfulness is measured with deletion, insertion and over-all scores, localization with the pointing game and its energy-based variant, and complexity with the sparsity of the saliency map. The reviewed literature indicates that XAI for object detection is at an early stage and lacks standardized evaluation. This groundwork will guide the choice of detectors, XAI methods and metrics for the thesis.
