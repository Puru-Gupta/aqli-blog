---
layout: page
title: Publish
permalink: /publish/
summary: A plain-English workflow for adding posts, figures, and downloadable files through GitHub Pages.
---

## Publish a new post

1. Open `_drafts/blog-template.md` in GitHub.
2. Copy the whole file.
3. Create a new file in `_posts/` named `YYYY-MM-DD-short-title.md`.
4. Paste the template.
5. Fill the top fields: `title`, `date`, `author`, `summary`, `category`, `tags`, and `image`.
6. Write the post below the second `---`.
7. Select **Commit changes**. GitHub Pages will rebuild the site.

## Add a plot, image, PDF, or spreadsheet

Upload the file to `assets/uploads/`. Then reference it in the post:

```markdown
![Chart showing annual PM2.5 exposure](/assets/uploads/my-plot.png)
```

For a captioned figure:

```liquid
{% raw %}{% include figure.html
  src="/assets/uploads/my-plot.png"
  alt="Chart showing annual PM2.5 exposure"
  caption="Annual PM2.5 exposure, 1998-2023."
%}{% endraw %}
```

For a downloadable file:

```liquid
{% raw %}{% include file-link.html
  href="/assets/uploads/results.csv"
  type="CSV"
  title="Download the district results"
  description="Cleaned table used in this analysis."
%}{% endraw %}
```

## Small editing rules

- Keep the `---` lines at the top of every post.
- Use short filenames with lowercase letters, numbers, and hyphens.
- Avoid spaces in uploaded file names. Use `india-pm25-2023.png`, not `India PM2.5 2023.png`.
- Put one clear takeaway near the top of each post.
- Add `featured: true` to only one post at a time when you want it on the homepage.
