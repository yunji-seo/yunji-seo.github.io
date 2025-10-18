---
layout: page
title: A Proposal for New Late-Night Bus Routes in Seoul Based on Taxi O/D and Service Shadow Area Analysis
description: Fall 2022
img: assets/img/proj/2-1.png
importance: 1
category: mobility
related_publications: false
giscus_comments: true
---

### __Overview__

In the wake of the COVID-19 pandemic, Seoul faced a significant public transportation challenge: a surge in late-night travel demand coupled with a reduced supply of buses and taxis, leading to a "taxi crisis". This project aimed to address this gap by proposing new, data-driven late-night "Owl Bus" routes. By conducting a comprehensive suitability analysis using diverse geospatial and transportation data, the project identified key underserved "shadow areas". The final output provides specific, actionable route proposals designed to enhance late-night mobility and alleviate transportation bottlenecks for the citizens of Seoul.
<br>

### __Process__

__Data Collection & Processing__: A wide range of datasets was utilized to model late-night transportation demand. Key data included late-night taxi origin-destination (O/D) data, residential and floating population data, traffic volumes, and existing bus route information. This raw data was systematically cleaned and processed using Excel and R Studio to prepare it for spatial analysis.

__Geospatial Analysis in QGIS__: A multi-layered suitability analysis was performed in QGIS to identify areas with the most urgent need for new bus services.

__Layer Creation__: Various data layers were developed, including population density maps, traffic flow hotspots, and late-night bus service frequency at each existing stop.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/proj/2-2-1.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/proj/2-2-2.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/proj/2-2-3.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Baseline Demand & Supply Analysis: [Fig. 1] Seoul Late-Night Bus Service Coverage [Fig. 2] Residential Population Density by Census Output Area in Seoul (persons/km²) [Fig. 3] Floating Population Density by Census Output Area in Seoul (persons/km²)
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/proj/2-3-1.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/proj/2-3-2.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/proj/2-3-3.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Mobility Pattern Analysis: [Fig. 4] Late-Night Traffic Volume in Seoul (Excluding Expressways) [Fig. 5] Sum of Public Transportation O/D (Origin-Destination) by Administrative Dong in Seoul [Fig. 9] Daily Average Late-Night Taxi Pick-ups & Drop-offs by Administrative Dong in Seoul
</div>

__Weighted Overlay Analysis__: A weighted overlay was performed to calculate a final "suitability score" for every location in Seoul. Higher weights were assigned to critical factors such as proximity to existing bus stops and late-night taxi demand to pinpoint areas with high demand but low accessibility. Green spaces were excluded from the analysis to focus on residential and commercial areas.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/proj/2-4-1.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/proj/2-4-2.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    GIS Layers Data Processing: [Fig. 11] Rasterization Results [Fig. 12] Reclassification Results
</div>

__Route Proposal__: Based on the final suitability map, which highlighted the most underserved areas, new bus routes were strategically designed. The proposed routes were planned to connect high-demand zones, pass through service shadow areas, and link to major late-night hubs like Gangnam and Hongdae.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/proj/2-5.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    [Fig. 21] Proposed Additional Late-Night Bus Routes in Seoul (As of Dec. 2022)
</div>
<br>

### __Results__

__Final Proposal__: Delivered a comprehensive master plan for a multi-purpose cultural complex designed to foster creativity and community engagement. The proposal projected a 50% increase in the utilization of the target site and surrounding areas.

__Key Deliverable__: Produced a high-quality presentation panel that visually and textually articulated the entire project, from initial analysis to the final design solution and its expected benefits.

__Recognition__: The project was recognized for its in-depth analysis and practical, student-centered design approach, receiving positive feedback from professors and peers for its creativity and professional execution.

<div class="caption">
    <a href="{{ '/assets/pdf/proj/2-1.pdf' | relative_url }}" target="_blank">View the Final Report</a>
</div>
<div class="caption">
    <a href="{{ '/assets/pdf/proj/2-2.pdf' | relative_url }}" target="_blank">View the Final Presentation</a>
</div>