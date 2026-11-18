---
title: >-
  Where Is the Pitch? Evaluating Pitch Registration on Eliteserien Video Without
  Training
authors:
  - Hanna Katle Fjon
supervisor: Frank Lindseth
keywords:
  - Computer Vision
  - Sports Analytics
  - Homography
  - Foundation Models
source: form
---

Before a computer can tell where a player is standing on a football pitch, it has to know where the pitch itself is in the image. Getting there means matching points in each video frame to a model of the pitch, which gives a mapping called a homography. Everything else depends on it: player positions, distances run and tactical analysis.

This project looks at how well existing models can do this on broadcast video from Rosenborg´s Eliteserien matches without any training on that data. It compares a model built for this one task, PnLCalib, with a new foundation model for football, SoccerMaster, which handles many tasks at once. Both models are run on the same frames and measured against annotated pitch points. The project looks at both accuracy and how stable the result is from one frame to the next. It also checks how reliable the available ground truth is, and when and why the models fail. Early results on two clips suggest that both models find the pitch in nearly every frame, and that SoccerMaster has fewer large errors.
