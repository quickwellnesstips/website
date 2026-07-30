# Quick Wellness Tips — Site

The `quickwellnesstips.com` landing page + blog starter. Static HTML,
no build step, no framework. Drop on any host.

## File structure

```
site/
  index.html          — landing page (home)
  styles.css          — all styles (single file, ~8KB)
  posts/              — blog posts (one HTML per post; full content)
  assets/             — images, OG cards, favicon
  .nojekyll           — tells GitHub Pages to skip Jekyll processing
```

## Local preview

```bash
cd site/
python3 -m http.server 8080
# Open http://localhost:8080
```

## Deploy to GitHub Pages

1. Push this directory to a GitHub repo (Ray is setting this up)
2. Settings → Pages → Source: "Deploy from a branch" → `main` / `(root)`
3. Custom domain: `quickwellnesstips.com` (when ready)
4. Enforce HTTPS

Total time: ~3 minutes. No build, no bundler, no node_modules.

## What's where

| File | What it is |
|---|---|
| `index.html` | The landing page. Hero → 4 posts → hero product (sage-green card) → 4 affiliate products → About → footer. |
| `styles.css` | All styles. Apple-clean, white background, single sage-green accent. No framework. |
| `posts/` | One folder per post, with `index.html` + any post-specific images. |
| `assets/` | Logos, OG cards, hero images. Start empty; add as you go. |
| `.nojekyll` | Tells GitHub Pages to serve files as-is, not run them through Jekyll. |

## Design system (locked)

- **Background:** pure white (`#ffffff`)
- **Text:** `#1a1d22` for headlines, `#5a6068` for subtext
- **Single accent:** sage green (`#3b6b4d`) — the only color
  used for CTAs, link underlines, and the hero product card
- **Typography:** Inter 400-800 (single family)
- **Layout:** single column, 720px content max-width
- **No emoji, no gradients, no callout boxes**

## Adding a new post

1. Pick a topic — the same topic as the next IG carousel
2. Write a markdown draft in `../drafts/<slug>.md`
3. Drop the final HTML in `posts/<slug>/index.html` (use
   `posts/_template.html` as the starting point — see below)
4. Add the post card to `index.html` (copy the existing
   `<li class="post-card">` block, edit title + excerpt + link)
5. Generate the OG image at 1200×630 → drop in
   `posts/<slug>/og.png`
6. Push to GitHub → live in ~2 minutes

## What's pending (Ray's call)

- [ ] **GitHub repo URL** — Ray is setting this up; will share when ready
- [ ] **Custom domain** — `quickwellnesstips.com` (Ray to register)
- [ ] **Etsy listing ID** for the protocol PDF — currently `XXXXX`
  placeholder in the CTA buttons
- [ ] **Affiliate links** — currently `#affiliate-electrolytes` etc.
  placeholders; replace with real Amazon/Thrive links
- [ ] **Email opt-in** — no form yet; spec lives in
  `../notes/email-list.md` (not yet written)
- [ ] **Hero digital product** — the actual 7-Day Protocol PDF
  doesn't exist yet. See `../products/` for the spec.

## Open follow-ups (queue for after launch)

1. IG handle confirmed (currently `quickwellnesstips` placeholder)
2. First 4 blog posts in `posts/`
3. First 4 IG carousels in `../Instagram-Carousel/drafts/`
4. Hero PDF designed (Etsy-Store vault can help)
5. Email welcome sequence (5-day Sprint)
6. Analytics (Plausible > Google Analytics for the wellness
   trust requirement)
