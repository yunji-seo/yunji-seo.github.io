---
layout: page
title: "Autonomous DRT Shuttle Service: A Mobility Solution for Commuting Yonsei Students"
description: Fall 2023
img: assets/img/proj/14-1.png
importance: 5
category: mobility
related_publications: false
giscus_comments: true
---

_This project was completed as part of "Mobility Analysis and Planning" course at Yonsei University._

<div class="caption">
    <a href="{{ '/assets/pdf/proj/14-1.pdf' | relative_url }}" target="_blank">View the Final Presentation</a>
</div>

### __Overview__

Students living in off-campus districts (Yeonhui-dong, Sinchon, etc.) often face difficulties commuting due to steep terrain and gaps in public transit coverage. Existing school shuttles only operate within the campus and start late (10 AM), failing to meet morning commute needs. This project designs a **Campus-Linked Autonomous DRT Service** and evaluates its feasibility using a Mode Choice Model (Logit Model).
<br>

### __Problem Diagnosis__

Through direct field trips and route analysis, we identified three key pain points:
1.  **Steep Terrain:** Key academic buildings (e.g., Daewoo Hall) are located on high hills, making walking physically demanding.
2.  **Inefficient Transit:** Short linear distances often require long detours or transfers when using existing buses.
3.  **Service Gap:** The current campus shuttle does not serve off-campus living areas and operates only during limited hours.
<br>

### __Solution: Autonomous DRT Shuttle__

We proposed a "Yonsei Urban" service—an autonomous, demand-responsive shuttle connecting major student residential clusters directly to campus buildings.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/proj/14-2.jpg" title="Route Plan" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/proj/14-3.jpg" title="Operation Flow" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    [Fig. 1] (Left) Proposed 4 zonal routes covering Yeonhui, Sinchon, and Ewha areas. (Right) App-based calling system flow.
</div>

* **Operation:** A hybrid DRT model where students book rides via an app. The bus autonomously routes to designated virtual stops based on real-time demand.
* **Routing:** Four strategic zones (Yellow, Green, Orange, Pink) were designed to cover 70% of student housing areas identified in our survey.
* **Cost Efficiency:** Utilizing autonomous driving technology to reduce labor costs, allowing for a student-friendly fare (500-1500 KRW).

<br>

### __Feasibility Analysis (SP Survey & Modeling)__

To validate the proposal, we conducted a **Stated Preference (SP) Survey** with 123 students and built a **Multinomial Logit Model**.

**1. Survey Design**
* **Alternatives:** Walking vs. Public Transit vs. Proposed DRT.
* **Variables:** Access/Egress Time, In-Vehicle Time (IVT), Cost, and Latent Variables (Safety perception of autonomous driving).

**2. Model Estimation Results**

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/proj/14-5.jpg" title="Logit Model Analysis Result" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    [Fig. 2] Final Logit Model Results showing coefficients for Mode Choice (Walking vs. Public Transit vs. DRT).
</div>

**3. Key Findings from Logit Analysis**
* **College Factor:** The negative coefficients for `College3` (Business) and `College5` (Engineering) indicate that students in these accessible buildings are less likely to choose DRT. Conversely, demand is higher for students in less accessible colleges (Liberal Arts, Social Sciences).
* **Location Sensitivity:** `Area4` (Further residential zones) shows a significant positive coefficient (1.29), proving that students living further away have a much stronger preference for DRT over walking.
* **Shuttle Needs:** The variable `Shuttle_needs` strongly correlates with DRT choice, confirming that the current lack of transport is a major driver for this service.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/proj/14-4.jpg" title="Analysis Result" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    [Fig. 2] Willingness-to-Pay (WTP) Analysis derived from the model.
</div>

**4. Value of Time (WTP)**
* The analysis revealed that students value travel time savings in existing public transit slightly higher than in the DRT, possibly due to the unfamiliarity or perceived latency of the new service.

### __Conclusion__
This project demonstrated that a localized DRT system could effectively solve the "hillside commute" problem for Yonsei students. The statistical model provided concrete evidence that demand is spatially clustered, suggesting that route optimization based on residential zones (Area 4) and college locations is key to viability.