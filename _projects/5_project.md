---
layout: page
title: Proposal for New Campus Shuttle Routes Based on O/D Analysis: A Case Study of Yonsei University
description: Spring 2023
img: assets/img/proj/5-1.png
importance: 2
category: mobility
related_publications: false
giscus_comments: true
---

_This project was completed as part of "Smart Urban Transit" course at Yonsei University._

### __Overview__

This project aimed to design an improved shuttle bus network for the Sinchon university district, an area shared by multiple campuses and major student facilities. Using the TOVA transit simulation tool,  I analyzed travel demand patterns, surveyed students’ mobility needs, and evaluated new route options through network modeling. The goal was to propose efficient shuttle routes that better connect key academic buildings, nearby subway stations, and residential clusters, reducing walking distances and improving access for morning and evening peak trips.
<br>

### __Background & Objective__

The Lab #3 Term Project required students to use existing Sinchon shuttle bus data to either modify current routes or design entirely new ones. The assignment emphasized understanding how transit network changes influence frequency, commercial speed, operating time, vehicle requirements and overall performance.

To build on this, I expanded the project by conducting a detailed user survey focused on shuttle satisfaction, route gaps and preferred stops. The second file (Sinchon Shuttle Bus Proposal) became the main basis for the final route design.
<br>

### __Process__

__1. Survey Analysis: Understanding User Demand__

The survey collected responses on:
- Most frequent origins/destinations
- Satisfaction with current stop spacing
- Peak-time needs
- Reasons for not using the shuttle
- Desired improvements
<br>

Key findings (pages 4–10):
- Strong demand for Sinchon Station and Jeongmun Gate.
- High evening demand near Yonsei medical, education and science buildings.
- Peak hour shortages, especially for trips toward Cheongsongdae, College of Medicine, and dormitory zones.
- Students requested:
    - more direct routes,
    - morning-only express service,
    - new stops for clusters of academic buildings,- improved access to Muak-haksa (dormitory) and steep-slope areas.
<br>

__2. O/D (Origin–Destination) Data Analysis__

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/proj/5-2.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    [Fig. 1] AM and PM O/D Matrices Used for Route Analysis
</div>

Using AM and PM O/D matrices provided in TOVA (page 12):
- AM demand concentrates at Jeongmun and Sinchon Station as starting points for classes.
- PM demand shifts toward dormitories, libraries and science/engineering buildings.
- Several clusters showed underserved short-distance but high-frequency trips, ideal for a shuttle route.
<br>

__3. Network Modeling in TOVA__

Following the Lab #3 instructions (pages 4–10):
- I created new route files based on user-identified stop clusters.
- Default operating speed was set to 30 km/h, with adjustments for slope sections.
- Each scenario required recalculating:
    - headways
    - commercial speed
    - operating time
    - vehicle cycle time
    - NTU (number of transit units required)
- The model allowed me to compare the base scenario with new route proposals using VKT (Vehicle-Kilometers Traveled) and B/C ratios.
<br>

### __Proposed Routes__

#### __Route 1: Sinchon Station → Jeongmun → Muak-haksa Line (All-Day Service)__

_(Pages 19–26)_

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/proj/5-3.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    [Fig. 2] Proposed All-Day Service Route
</div>

This route connects the main mobility gateways—Sinchon Station and Jeongmun Gate—to key academic buildings and the dormitory.

__Rationale:__
- Survey respondents reported long walking distances from Sinchon Station to steep campus locations.
- O/D data showed concentrated demand from subway → core academic zones during AM peak.
- The dormitory area is underserved yet requires consistent shuttle access.

#### __Route 2: Gyeongbokgung Station → Campus (오전 전용 노선)__

_(Pages 27–37)_

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/proj/5-4.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    [Fig. 3] Proposed AM Service Route
</div>

This route responds to strong morning demand from students commuting via Gyeongbokgung Station.

__Key characteristics:__

- Morning-only operation aligned with first-period class start times.
- Connects Gyeongbokgung Station to Jeongmun, Engineering Buildings, and Medical Campus.
- Addresses steep terrain issues near the College of Medicine and Education College.
<br>

__Rationale:__

- O/D data confirmed significant morning inflow from this direction.
- Field observation (images p. 21–26) confirmed limited pedestrian accessibility due to slopes.
- A short, direct route reduces travel time and improves reliability.
<br>

### __Analysis & Findings__

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/proj/5-5-1.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/proj/5-5-2.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Scenario Comparison Tables: [Fig. 4] Seoul Base Scenario Evaluation [Fig. 5] Evaluation of New Route Scenario
</div>

__1. Demand Coverage__

Both proposed routes increased stop coverage across high-demand zones, especially steep or distant locations.

__2. Efficiency__

Simulation results showed:
- moderate increases in total VKT,
- but reduced average walking times for students,
- and more balanced vehicle loads across morning and afternoon periods.

__3. Operational Feasibility__
- Each route required 1–2 vehicles depending on headway design.
- Operating speed remained within the default 30 km/h expectation.
- No additional zone centroids were needed, complying with TOVA restrictions (page 4).
<br>

### __Results__

__Final Output__

I delivered two fully developed shuttle route proposals with:
- route maps,
- stop justification,
- O/D-based demand analysis,
- operational modeling results from TOVA,
- and field-verified stop feasibility.

__Impact__

The redesigned routes:
- shorten walking distances for major student clusters,
- strengthen transit accessibility to steep-slope academic buildings,
- provide a direct subway-to-campus connection,
- and reduce congestion at Jeongmun during peak hours.

__Project Significance__

This project combined student mobility research, transit network simulation, and field verification to create data-driven shuttle improvements for the Sinchon district. It demonstrates how small-scale transit planning can meaningfully influence daily student mobility and accessibility.

<div class="caption">
    <a href="{{ '/assets/pdf/proj/5-1.pdf' | relative_url }}" target="_blank">View the Final Presentation</a>
</div>