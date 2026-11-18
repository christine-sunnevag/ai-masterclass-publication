---
title: 'Adaptive Engagement in mHealth: A Contextual Bandit Approach for MIA Health'
authors:
  - Daniel Kristoffersen
supervisor: Frank Lindseth
keywords:
  - Contextual Bandits
  - Personalization
  - Digital Health
source: form
---

Digital health apps can only support people's health if users stay engaged, yet many reduce their use or stop altogether over time. Decisions about what to show users and when are often governed by fixed rules that treat everyone alike, ignoring that users differ in their needs and preferences, and that too many prompts can lead to fatigue and opt-outs.

This paper presents the planned design of a standalone decision service for the MIA Health app, a digital health app built around a digital twin. The service will use contextual bandits to learn, from each user's own responses, what to deliver and when. It will cover three decisions:

unlocking articles, in-app suggestions and notifications, with article unlocking as the main pilot domain. Actions will be chosen with Thompson sampling, with beliefs about each action represented by Bayesian logistic regression, and the reward will be defined to capture engagement while accounting for delayed outcomes and notification fatigue. To help users with little data, the service will share information across global, profile and individual levels. The paper reviews related work on notifications, contextual bandits for recommendation and mobile health, and identifies the gap that this project addresses. We plan to evaluate the approach against the current rule-based system and simpler baselines, using simulation based on MIA data and a live pilot for article unlocking.
