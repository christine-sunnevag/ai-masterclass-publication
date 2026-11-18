---
title: >-
  Conformal Lower Bounds for Offshore Wind Forecasts under Correlated Sensor
  Outages
authors:
  - Adrian Haabpiht Solberg
supervisor: 'Massimiliano Ruocco (NTNU), Equinor'
keywords:
  - Conformal prediction
  - Missing data
  - Wind speed forecasting
source: form
---

When offshore wind farms power oil and gas platforms, operators use a lower bound of the wind forecast to decide when to start backup gas turbines, and this bound must stay reliable when the sensors feeding the forecast fail. At Hywind Tampen, the world’s largest floating wind farm, outages last hours to days, often hit several sites at once and cluster in calm weather, whereas conformal prediction, a standard way to calibrate such bounds, has been extended to missing data mainly using synthetic masks that remove values independently. This thesis investigates how conformal prediction can keep lower bounds reliable and sharp during such real, correlated outages. Initial results on operational data from Equinor show that bounds that are well calibrated on average can lose coverage during outages, most clearly when the target turbine is down, and that standard conformal calibration does not close this gap. We are therefore developing a wind-aware calibrator that adjusts the lower bound using past periods made to resemble the current outage, by removing the same sensors from them and favouring periods with similar wind conditions and upwind sensor loss. We will measure each step’s effect, compare real outages with synthetic masks, and test whether the remaining mismatch can indicate in advance when the bound should not be trusted.
