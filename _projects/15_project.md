---
layout: page
title: "Mobility Data Mining: Trajectory Segmentation and Trip Purpose Inference"
description: Spring 2024
img: assets/img/proj/15-1.jpeg
importance: 6
category: mobility
related_publications: false
giscus_comments: true
---

_This project was completed as part of "Mobility Data Mining" course at Yonsei University._

<div class="caption">
    <a href="{{ '/assets/jupyter/proj/15-1.ipynb' | relative_url }}" target="_blank">
        View the Analysis Notebook (.ipynb)
    </a>
</div>

### __Overview__

Raw mobility data, such as GPS logs from vehicle navigation systems, consists of mere coordinate points without semantic meaning. The goal of this project was to transform this raw data into structured **"Trip Data"** and infer the **"Trip Purpose"** (e.g., Commuting, Returning Home, Shopping). The process involved algorithm-based trajectory segmentation, geocoding for feature engineering, and applying a Decision Tree classifier trained on Household Travel Survey data.
<br>

### __Phase 1: Trajectory Segmentation__

The first step was to convert a stream of GPS points into distinct trips (Episodes).

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/proj/15-1.jpg" title="Segmentation Algorithm" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    [Fig. 1] Trajectory Segmentation Algorithm Flowchart
</div>

**Algorithm Logic:**
* **Data Cleaning:** Removing outliers (invalid coordinates/timestamps) from the raw `Navi_data.csv`.
* **Trip Identification:** A new trip is defined if:
    1.  The date changes.
    2.  The time gap between consecutive points exceeds **10 minutes (0.1667 hours)**, indicating a stop/dwell event.
* **Result:** Extracted **12,993 trips** from 210 vehicles, structuring them with Origin (O), Destination (D), and Duration.
<br>

### __Phase 2: Feature Engineering & Geocoding__

To train a machine learning model, I enriched the trip data with spatial and temporal features.

**1. Geocoding (Spatial Join)**
* Mapped GPS coordinates (Longitude/Latitude) to administrative districts (**Hangjeong-dong**) using `Geopandas` and shapefiles.
* **Derived Features:** `D_Seoul` / `A_Seoul` (Origin/Dest in Seoul), District Codes (Gu-level binary variables like `A_Gangnam`, `A_Seocho`).

**2. Temporal Analysis**
* Analyzed the correlation between trip time and purpose.
* **Heatmap Insight:**
    * **07:00–09:00:** Peak for "Work/Education" departures.
    * **16:00–21:00:** Peak for "Returning Home" arrivals.
    * Created binary variables `DA_time_7to9` and `DA_time_16to21` to capture these patterns.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/proj/15-2.png" title="Time-Purpose Heatmap" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    [Fig. 2] Heatmap analysis showing the correlation between time of day and trip purpose.
</div>
<br>

### __Phase 3: Semantic Annotation (Machine Learning)__

I trained a **Decision Tree Classifier** using the **Household Travel Survey Data** (labeled) to predict the purpose of the unlabelled Navigation Data.

**Model Setup**
* **Training Data:** 33,873 labeled trips from the survey.
* **Target Classes:** 1: Work, 2: Education, 3: Business, 4: Shopping/Leisure, 5: Home, 6: Others.
* **Input Features:** Trip Duration, Start/End Hour, Seoul Origin/Dest, Specific District Flags (Gangnam, Seocho, etc.).

**Model Performance**
* **Optimization:** Tuned `max_depth` to prevent overfitting. Optimal depth found at **11**.
* **F1 Score (Weighted):** **0.743** (Test Set).
* The confusion matrix showed high accuracy for "Returning Home" and "Work" trips, which have distinct temporal/spatial patterns.
<br>

### __Results__

Applying the trained model to the unlabelled Navigation Data yielded the following Trip Purpose distribution:

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/proj/15-3.png" title="Prediction Results" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    [Fig. 3] Final Predicted Trip Purpose Share for the Navigation Data.
</div>

* **Returning Home:** 32.8% (Highest share, expected as all trips eventually return).
* **Work:** 22.2% (Consistent with commuting patterns).
* **Business/Leisure:** Significant portions, reflecting the diverse usage of personal vehicles.

This project demonstrated how raw sensor data can be enriched and classified to provide valuable insights into urban mobility patterns without explicit user surveys.