# Publishing Guide

This repository is a GitHub Pages blog. Non-coders can publish by editing Markdown files in GitHub's web editor.

## One-time GitHub Pages setup

1. Open the repository on GitHub.
2. Go to **Settings** → **Pages**.
3. Set **Source** to **Deploy from a branch**.
4. Select branch `main` and folder `/root`.
5. Save. GitHub will publish the site after the first build.

## Add a post

1. Open `_drafts/blog-template.md`.
2. Copy the contents.
3. Create a new file in `_posts/`.
4. Name it like `2026-06-25-india-pm25-update.md`.
5. Paste the template and edit the fields.
6. Commit the file.

## Add images and files

Upload files to `assets/uploads/`.

Use this for a normal image:

```markdown
![Short description of the chart](/assets/uploads/chart-name.png)
```

Use this for a PDF, CSV, spreadsheet, ZIP, or other file:

```liquid
{% include file-link.html
  href="/assets/uploads/results.csv"
  type="CSV"
  title="Download results"
  description="Cleaned data behind the chart."
%}
```

## Front matter fields

Every post starts with fields between `---` lines.

```yaml
---
title: "Post title"
date: 2026-06-25
author: "Author Name"
summary: "One-sentence summary."
category: analysis
tags:
  - PM2.5
  - India
image: /assets/images/aqli-particulate-field.png
image_alt: "Abstract particulate field"
featured: false
---
```

Keep `featured: true` on only one post if you want a clean homepage.
