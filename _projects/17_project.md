---
layout: page
title: "Enhancing Elderly Mobility: DRT Suitability Analysis using IPA Matrix"
description: Fall 2024
img: assets/img/proj/17-1.jpeg
importance: 7
category: mobility
related_publications: false
giscus_comments: true
---

_This project was completed as part of "Urban Engineering Capstone Design" course at Yonsei University._

### __Overview__

As Northern Gyeonggi Province enters a super-aged society, the mobility of the elderly has become a critical issue. High rates of license surrender among seniors and limited public transit in rural areas necessitate alternative transport solutions. This study develops an **"Elderly Accessibility Index"** and utilizes **Importance-Performance Analysis (IPA)** to identify areas most in need of transit improvements. Based on this analysis, we propose a tailored **DRT (Demand-Responsive Transport)** route for **Dongducheon City**, the region identified as having the highest priority.
<br>

### __Problem Statement__

* **Super-Aged Society:** Northern Gyeonggi is rapidly aging, with a significant increase in the elderly population (65+).
* **Mobility Gap:** The elderly are increasingly surrendering their driver's licenses due to safety concerns, yet public transit infrastructure in many parts of Gyeonggi is insufficient to meet their needs.
* **Need for New Solutions:** Traditional fixed-route buses are inefficient for low-density areas. A flexible, demand-responsive system is required to guarantee the "Right to Move" for seniors.
<br>

### __Methodology__

**1. Developing the Accessibility Index**
We defined two key metrics to measure accessibility to essential services (hospitals, markets, etc.) for the elderly:
* **Transit Efficiency ($Tt/Ta$):** A ratio comparing Public Transit Time ($Tt$) to Car Travel Time ($Ta$). A higher ratio indicates poor public transit efficiency compared to private cars.
* **Walking Accessibility ($Tw$):** The average time required to reach the nearest transit stop or destination on foot.

**2. IPA Matrix Analysis**
We applied the **Importance-Performance Analysis (IPA)** framework to categorize 10 cities/counties in Northern Gyeonggi based on these metrics.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/proj/17-2.jpg" title="IPA Matrix Analysis" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    [Fig. 1] IPA Matrix Analysis results categorizing regions into 4 quadrants based on transit efficiency and walking accessibility.
</div>

* **Quadrant 1 (Concentrate Here):** High importance (poor transit efficiency) and low performance. **Dongducheon City** fell into this quadrant, indicating an urgent need for intervention.
<br>

### __Analysis Results__

**1. Accessibility Assessment**
Using GIS and OD (Origin-Destination) data, we calculated the accessibility indices for each administrative district (dong/eup/myeon).

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/proj/17-3.jpg" title="Accessibility Map" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    [Fig. 2] Spatial analysis of elderly population density and transit accessibility in Northern Gyeonggi.
</div>

**2. Selection of Target Area**
**Dongducheon City** was selected as the primary target for DRT introduction because it suffers from a significant gap between car and public transit travel times for elderly residents, coupled with high elderly density.
<br>

### __Proposed Solution: DRT Route Design__

We designed a specific DRT route for Dongducheon City to connect elderly residential clusters with key services (medical facilities, markets).

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/proj/17-4.jpg" title="Proposed DRT Route" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    [Fig. 3] Proposed DRT service area for Dongducheon City.
</div>

* **Service Area:** The route covers areas with high elderly density but low transit accessibility, specifically targeting the "gap" areas identified in the analysis.
* **Operational Strategy:** The DRT will operate on a flexible schedule, prioritizing stops at major hospitals and traditional markets, which are frequent destinations for the elderly.
<br>

### __Conclusion__

This project demonstrates a data-driven approach to improving elderly mobility. By quantitatively assessing accessibility and using the IPA matrix, we objectively identified the region most in need of support. The proposed DRT solution for Dongducheon serves as a model for other aging cities, suggesting that targeted, flexible transport systems can significantly enhance the quality of life for the elderly.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/proj/17-2.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    <a href="{{ '/assets/pdf/proj/17-1.pdf' | relative_url }}" target="_blank">
        View the Final Panel
    </a>
</div>