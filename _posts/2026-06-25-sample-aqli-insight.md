---
title: "How to turn an AQLI chart into a publishable blog post"
date: 2026-06-25
author: "AQLI Editorial Team"
summary: "A sample post showing how text, charts, captions, and downloadable files fit together in this GitHub Pages template."
category: guide
tags:
  - publishing
  - charts
  - GitHub Pages
image: /assets/images/aqli-particulate-field.png
image_alt: "Abstract particulate field in AQLI colors"
featured: true
---

This sample post shows the simplest structure for an AQLI-style update: a clear finding, one chart, and one supporting file. Editors can duplicate `_drafts/blog-template.md`, replace this content, and publish without changing the site code.

## Key finding

A strong blog post should put the main result near the top. For example: "Residents in the most polluted districts would gain the largest life expectancy benefits from sustained reductions in fine particulate pollution."

{% include figure.html
  src="/assets/images/aqli-particulate-field.png"
  alt="Abstract particulate dots arranged over a map-like grid"
  caption="Example figure placement. Replace this with a PNG, JPG, or SVG chart uploaded to assets/uploads."
%}

## What readers need next

- A short explanation of why the finding matters.
- A chart or map that supports the finding.
- A download link for the data, appendix, or formatted report.
- A method note with the source and any important limitation.

## Attach a file

{% include file-link.html
  href="/assets/uploads/example-results.csv"
  type="CSV"
  title="Example results table"
  description="Small placeholder file showing how downloads appear inside a post."
%}

## Method note

Keep method notes concise. Link out to a longer PDF or spreadsheet when the details are useful but too heavy for the main story.
