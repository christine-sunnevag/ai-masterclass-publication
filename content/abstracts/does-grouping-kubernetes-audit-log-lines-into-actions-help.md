---
title: >-
  Does Grouping Kubernetes Audit Log Lines into Actions Help Machine Learning
  Detect Attacks?
authors:
  - Ibrahim Timraz
supervisor: 'Jingyue Li, VEND'
keywords:
  - Kubernetes
  - Machine Learning
  - Cybersecurity
  - Anomaly Detection
  - Audit Logs
source: form
---

Kubernetes is widely used to run applications and services, including critical systems in banking and other industries. As these systems become more common, detecting security threats becomes increasingly important. But what happens when an attacker gains access using valid credentials? Traditional security tools may struggle to identify suspicious behaviour because the requests appear legitimate.

This project investigates whether machine learning can improve attack detection by grouping Kubernetes audit log entries into meaningful actions instead of analysing each log line separately. A single action in Kubernetes can generate many log entries, making it difficult to distinguish between normal system activity and potential attacks.

The study will develop a method for grouping related log entries and compare machine learning models trained on individual log lines with models trained on grouped actions. Experiments will be conducted in a controlled Kubernetes environment using simulated attacks and normal activity. The main goal is to investigate whether grouping improves attack detection while reducing false alarms. The results will also be compared with existing rule-based security tools.

By exploring a different way of analysing Kubernetes logs, the project aims to contribute to more reliable and effective security monitoring in cloud environments.
