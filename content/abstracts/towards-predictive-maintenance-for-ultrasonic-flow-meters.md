---
title: >-
  Towards Predictive Maintenance for Ultrasonic Flow Meters: Process-Robust
  Health Indicators and Forecasting for Condition-Based Monitoring
authors:
  - Aditi Ravi Deshpande
supervisor: Zhirong Yang
keywords:
  - Predictive Maintenance
  - Metering
  - Condition-Based Monitoring
  - Ultrasonic flow meters
source: form
---

Ultrasonic flow meters (USMs) are widely used in oil and gas metering because of their high accuracy, absence of pressure loss and non-intrusive design. Like any instrument, they degrade gradually, and even small measurement errors translate into large financial uncertainty. Current condition-based monitoring (CBM) systems compare built-in diagnostics, such as speed of sound (VOS), gain and signal-to-noise ratio (SNR), against fixed limits and return a binary pass/fail verdict. Because these diagnostics also vary with pressure and gas composition, fixed limits miss slow degradation.

This preliminary proof-of-concept study proposes a data-driven alternative based on health indicators that are robust to process conditions: the deviation of each acoustic path from the other paths in the same meter, and the discrepancy between measured VOS and VOS calculated from gas chromatography (GC) composition. Linear ARX and XGBoost models forecast these indicators 1, 5 and 15 minutes ahead, and are compared with persistence, rolling-mean and constant-mean baselines. The forecast is intended as a model of normal behaviour, so that the residual between the measured indicator and its forecast can serve as an anomaly signal. The approach is tested on one month of minute-resolution data from two gas export meters in series, with GC data. Both models reduced the error by 26–36% relative to persistence for the path deviations, but by only 0.5–10% relative to the best baseline, a constant mean, which indicates that these indicators are stable and close to noise around a constant. For the GC discrepancy, which has short-term structure, the models improved on the best baseline by 14–16% at 1 minute and 7–11% at 5 minutes, with no improvement at 15 minutes. Using the residuals to detect degradation has not yet been evaluated and remains to be tested on data with known faults. The work delivers a prototype data pipeline and a foundation for a master’s thesis on early detection of USM degradation.
