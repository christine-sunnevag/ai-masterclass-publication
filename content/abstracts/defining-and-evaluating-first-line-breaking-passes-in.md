---
title: Defining and evaluating first-line-breaking passes in Annotated Football video
authors:
  - Marcus Larsen-Frivoll
supervisor: 'Frank Lindseth, Gabriel Kiss'
keywords:
  - Football analytics
  - manual annotation
  - computer vision
source: form
---

Rosenborg Ballklubb identified passes that bypass the opponent’s first line of press as a key performance indicator for its video analysis platform. We evaluated the spatial definition of this event for completed ground passes and tested how its decisions changed when detector and tracker estimates replaced the annotated positions of the active pressers.

We extended the Rosenborg Ballklubb platform with a dashboard for reviewing each pass from the CVAT annotations. One annotator selected the defenders involved in the initial press and used the video to judge whether each pass bypassed them. Across four reviewed sequences, 59 candidates yielded 40 definite judgements after 19 exclusions. The reference contained 12 breaks and 28 non-breaks. The rule for a first-line-breaking pass required the ball to start behind or level with every selected presser and finish beyond them along the direction of attack. The paired runs shared the release and reception frames, pass endpoints, press membership and pitch mappings. The first used CVAT presser positions, while the second used estimates from the existing RBK detector and ByteTrack. Predicted boxes were matched to the selected pressers using box overlap and tracking identity at release and reception of the ball. The rule abstained when geometry or reliable player match was missing.

Both runs detected one of the 12 manually labelled breaks and issued one false positive alert. Precision was 50.0 percent, recall was 8.3 percent and F1 was 14.3 percent. Five manual breaks received negative decisions and six received no decision. The rule returned a decision on 21 of 40 passes with annotations and 20 of 40 passes with model estimates. Coverage on active press cases was 48.6 and 45.9 percent respectively. Missing pitch calibration accounted for 15 abstentions in each run and missing pass endpoints accounted for four. One correct non-break became an abstention in the model run because a presser could not be matched reliably to a track. Verification of video alignment, pitch calibrations and pass endpoints on more video footage would help distinguish the input errors from disagreements with the rule.

A second reviewer could independently assess both press membership and passing outcomes.
