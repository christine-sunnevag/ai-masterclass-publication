---
title: >-
  Not every alarm is a mistake: Adaptive conformal inference for anomaly
  detection
authors:
  - Selma Karagøz
supervisor: 'Kerstin Bach, Betül Bayrak'
keywords:
  - Adaptive conformal inference
  - anomaly detection
  - autoencoders
  - conformal prediction
  - wind turbines
source: form
---

Alarm thresholds in industrial anomaly detection must stay reliable when normal behaviour drifts. Adaptive conformal inference (ACI) updates a conformal threshold online to keep the alarm rate near a target level, but it counts every alarm as an error, including alarms on real faults, so its threshold rises during the very faults it should detect. This paper quantifies the recall lost through this mechanism. On Wind Farm A of the CARE to Compare dataset, we compare a fixed conformal threshold, ACI and a label-aware ACI that skips updates on true faults, applied to the reconstruction errors of three autoencoders. The fixed threshold exceeds the target false alarm rate of 0.02 on the test periods, with rates of up to 0.040. ACI keeps the false alarm rate at 0.017, but loses 76–82% of the recall that the label-aware ACI reaches at the same false alarm rate, consistently across all three detectors. To recover this recall without labels, we propose a rule that holds ACI’s updates during an alarm episode and decides from its length and score level whether it was a fault, a false alarm or drift. Evaluating this rule is left for future work.
