---
title: Towards Player-Centric Action Spotting on Single-Camera Football Footage
authors:
  - Ådne Aspheim
supervisor: Frank Lindseth
keywords:
  - Computer Vision
  - Sports Analytics
  - Action Spotting
  - Field Registration
  - Transfer Learning
source: form
---

Elite clubs know who passed to whom, and where, after every match. Smaller clubs often have one wide-angle camera and a lot of manual work. Player-centric action spotting, which detects when an on-ball action happens and which player performs it, could close that gap automatically. Almost all research on it, however, uses edited broadcast video.

This project continues three 2026 NTNU master's theses made with Rosenborg Ballklub (RBK) on field registration, player tracking and action spotting. I reproduced the inherited action-spotting pipeline and audited its data. The predecessors' results rest on three conditions a realistic system cannot simply reuse: weights pretrained on the large public FOOTPASS dataset, player positions measured in image pixels rather than on the pitch, and boxes reviewed by hand rather than produced by a tracker.

The thesis therefore asks three questions. Which fine-tuning strategy transfers best from public data to a few hundred RBK examples? Do pitch positions from a homography improve detection when the camera pans and zooms? How much does performance drop with automatic tracking? The poster presents the findings so far, a hypothesis for each question and the plan to test them, a step towards answering every coach's question after the final whistle: what actually happened out there?
