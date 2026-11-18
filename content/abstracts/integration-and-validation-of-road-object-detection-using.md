---
title: Integration and Validation of Road Object Detection Using Computer Vision
authors:
  - Vebjørn Elvekrok
supervisor: Frank Lindseth and Gabriel Kiss
keywords:
  - Computer Vision
  - YOLO
  - Road Monitoring
source: form
---

In Norway each year, the dramatic temperature changes between seasons and extreme winters pose a multitude of challenges for its vast road network. This includes the need for snow poles to account for poor visibility during winter operations. Today, the process of collecting road data is a highly manual one, and relies on expensive and specialized equipment. This thesis explores how real-time computer vision deployed on a consumer mobile device can provide more accessible and efficient condition monitoring.

Building on previous work, the existing detection pipeline was deployed and tested end-to-end from real-time detection on a mobile device to data inspection on a separate monitoring backend.

A new model with more diverse training data from multiple environments was also trained, resulting in a huge jump in detection recall. This was shown by developing a test bench evaluating detection of the same object across frames instead of testing on single frames only.

The evaluations showed that an end-to-end automatic monitoring pipeline for road objects is possible; however, work on accurate object localization still remains for the product to be viable as a production-ready solution.
