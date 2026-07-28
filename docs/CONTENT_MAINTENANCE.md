# Content Maintenance Guide

This site is an Astro static portfolio. Maki provides content and images; the AI
agent should make the code/content changes.

## Key Folders

- `src/site-content/works/`: one Markdown file per work.
- `src/site-content/projects/`: one Markdown file per project.
- `src/site-content/settings/`: profile, nav, stats, contact links, proofs, and featured work slugs.
- `public/assets/`: images, QR codes, PDFs, screenshots, and covers.
- `src/data/site.ts`: data bridge used by pages and components.
- `src/data/content.ts`: helper that loads Markdown and JSON content.

Do not put portfolio content back into `src/data/site.ts`. It should stay a
small bridge that reads `src/site-content`.

## Common Updates

### Add A Work

1. Add the cover or proof image to `public/assets/covers/` or another suitable
   folder under `public/assets/`.
2. Copy an existing file in `src/site-content/works/`.
3. Rename it with the next order number and a stable slug, for example:
   `15-new-work-slug.md`.
4. Update the JSON frontmatter:
   - `title`
   - `category`
   - `platform`
   - `date`
   - `cover`
   - `metrics`
   - `url`
   - `status`
   - `summary`
   - `slug`
   - `order`
5. Put the reflection/body text below the second `---`.

Use an existing category from `src/site-content/settings/work-categories.json`
unless the user asks for a new category.

### Feature A Work On The Home Page

Edit `src/site-content/settings/featured-work-slugs.json`.

Use work `slug` values, not titles. This avoids breaking the home page when a
title changes.

### Add Or Update A Project

Edit or add a Markdown file in `src/site-content/projects/`.

The reflection text lives below the frontmatter. Keep `slug` stable once
published because project detail links use it as an anchor.

### Update Profile, Stats, Links, Or Proofs

Use the JSON files in `src/site-content/settings/`:

- `profile.json`
- `stats.json`
- `links.json`
- `proofs.json`
- `nav-items.json`
- `work-categories.json`

Contact images and QR codes should live in `public/assets/contact/`.
Proof screenshots should live in `public/assets/proofs/`.

## Validation

After edits, run:

```bash
npm run build
```

The build should finish with no errors. If content text looks garbled, inspect
file encoding before editing further; the site contains Chinese text and should
be kept as UTF-8.

## Deployment Context

The current deployment target may be Vercel, but the intended long-term setup is
static hosting on Tencent Cloud COS + CDN with automated deployment from GitHub.
Keep the site compatible with static output.

