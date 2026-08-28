# QuickWellnessTips — Site

The `quickwellnesstips.com` landing page. Static HTML, no build step,
no framework. Drop on any host or open the file directly in a browser.

## File structure

```
site/
  index.html              — landing page (home)
  sample.html             — sample-chapter page (?slug=<book>)
  disclosure.html         — affiliate disclosure policy
  buy-now.json            — Beacons URL + price for the offer card
  featured-products.json  — TikTok Shop affiliate card data
  posts.js                — (legacy) blog grid renderer
  shop.js                 — (legacy) shop grid renderer
  bundle/                 — book covers, QWT logo, product images
```

## Local preview

```bash
cd site/
python3 -m http.server 8080
# Open http://localhost:8080
```

Or just double-click `index.html` in Finder.

## Pages

- **`index.html`** — Library showcase (10-book grid + offer card) → featured products + disclosure
- **`sample.html?slug=<book>`** — One of 10 sample chapters. Try `?slug=money-without-the-drama` or any book slug
- **`disclosure.html`** — FTC + Amazon Associates affiliate disclosure

## Book slugs (for `sample.html?slug=...`)

```
reset-your-body
build-your-discipline
calm-your-mind
steady-your-day
heal-naturally
sleep-like-you-mean-it
eat-without-thinking-about-it
money-without-the-drama
talk-so-people-listen
build-real-confidence
```

## Edit flow

- Price, Beacons URL, offer copy → edit `buy-now.json`
- Product cards (TikTok Shop / Amazon) → edit `featured-products.json`
- Cover images → drop JPEGs into `bundle/<slug>-cover.jpeg` (140px wide, 2:3 aspect works best)
- Sample-chapter copy → edit the `SAMPLES` object inside `<script>` tag at the bottom of `sample.html`

## Deploy to GitHub Pages

1. Push this directory to `quickwellnesstips/website` (already wired)
2. Settings → Pages → Source: "Deploy from a branch" → `main` / `(root)` (already on)
3. Custom domain: `quickwellnesstips.com` (when ready)
4. Enforce HTTPS

## Design system

- **Background:** pure white (`#ffffff`)
- **Accent:** teal (`#24A3BE`) — from the QWT logo
- **Type:** Inter (body) + Fraunces (italic accents)
- **No device-specific format claims.** One PDF download. Yours forever.
