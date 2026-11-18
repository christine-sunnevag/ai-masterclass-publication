---
title: >-
  Investigating Memorization in a Two-Stage Mask-to-MRI Diffusion Pipeline for
  Medical Image Synthesis with xAI
authors:
  - Mattias Lund Dahlin
supervisor: Endre Grøvik
keywords:
  - Medical image synthesis
  - memorization
  - xAI
source: form
---

Synthetic medical images promise data sharing without sharing patient data, which is attractive for brain metastases where annotated data is limited. Diffusion models can, however, memorize their training data. Studies of this risk have focused on single models and whole images, while two-stage pipelines, which first generate a lesion mask and then an image conditioned on it, have received little attention. A synthetic mask may itself identify a patient, and may act as a key that makes the image model reproduce training data, as captions have been shown to do in text-to-image models. This paper presents a two-phase project investigating memorization in a mask-to-MRI diffusion pipeline. Phase 1 builds a memorization toolkit, with whole-mask and lesion-level copy detectors calibrated on held-out patients and validated with planted copies, and audits the mask generator. Phase 2 retrains the pipeline to test to what extent a training mask acts as a key into the image model, and whether memorization propagates through the pipeline. Explainable AI is applied at three levels, each tested against known ground truth. Match reports link copied masks to their source patient and lesions, condition-sensitivity maps show where the image model relies on the mask, and training-data attribution traces samples back to the training slices that influenced them.
