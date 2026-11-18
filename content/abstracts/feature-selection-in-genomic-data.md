---
title: Feature selection in genomic data
authors:
  - Karine Johanne Robøle Austgulen
supervisor: 'Helge Langseth, co-supervisor: Antonios Danelakis'
keywords:
  - feature selection
  - genetics
  - migraine
source: form
---

Migraine is assumed to be a polygenic disorder, and current genetic studies such as genome-wide association studies are unable to detect and identify all genetic loci associated with the disease. They miss out on more complex feature-target relations, such as interactions, and therefore it is of interest to investigate which methods can pick up on these more complex relations and identify the features involved. The work in this paper explores the existing types of feature selection and selection strategies and completes an experiment on a collection of methods that covers the three types of selection strategies, filter, wrapper and embedded. The experiment is conducted to identify which type of feature selection methods would be of most interest to consider in future work with a high-dimensional genetic dataset. Two datasets were synthesised for use in the experiments where the features of importance are known. One dataset with a standard linear feature-target relation and one that models a pairwise pure interaction relation. The feature selection methods are evaluated on feature retrieval using F1 and Jaccard score against the known truth and downstream accuracy with a random forest classifier using each method's chosen features, and the runtime. The results shows that the wrapper and embedded methods with k-nearest neighbours and random forest as base models outperforms the remaining methods on F1, Jaccard and downstream accuracy scores. Further, the experiment results shows that the embedded random forest method has a runtime of 1.4% compared to the wrapper k-nearest neighbours method, which indicates a scalability problem with the wrapper for use with the higher dimensionality dataset that is to be used in further work with 8000 features and 43000 observations. Based on these results the most promising type of feature selection method to take into consideration in future work is methods with an embedded selection strategy and a base model that can model complex relations, such as the embedded random forest method demonstrates in the experiment. This due to their ability to pick up on the interactions type feature-target relation and the lower runtime complexity compared to the methods with wrapper type selection strategy.
