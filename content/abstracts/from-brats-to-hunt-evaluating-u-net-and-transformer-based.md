---
title: >-
  From BraTS to HUNT: Evaluating U-Net and Transformer-Based Approaches for
  Brain MRI Segmentation
authors:
  - Katrine Mikalsen
  - Jenny Mueller
supervisor: Boban Vesin
keywords:
  - Segmentation
  - MRI
  - CNN
  - U-Net
  - Transformers
  - BraTs
  - Brain
source: form
---

Automated brain MRI segmentation has the potential to improve the efficiency and consistency of medical image analysis. Deep learning methods, particularly convolutional neural networks (CNNs), U-Net and Transformer-based architectures, have demonstrated promising capabilities in medical image segmentation. This paper examines these approaches in relation to the Brain Tumor Segmentation (BraTS) benchmark and their potential applicability to MRI data from the Trøndelag Health Study (HUNT). Existing research demonstrates that segmentation performance varies between target regions and is influenced by annotation quality and dataset characteristics. Although U-Net provides a practical architecture for biomedical image segmentation, Transformer-based approaches offer additional capabilities for capturing long-range spatial relationships. However, differences in the dataset between BraTS and HUNT limit the direct transferability of benchmark results. Based on the architectural comparison, U-Net is identified as a reasonable starting point for further investigation, with the final model selection depending on the available data, annotations and computational resources.
