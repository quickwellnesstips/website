# Posts

Drop one folder per blog post:

```
posts/
  _template.html         ← starter template (see usage notes in site/README.md)
  why-youre-tired/        ← first real post
    index.html
    og.png
  5-morning-habits/      ← second post
    index.html
    og.png
  ...
```

Each post is one folder with `index.html` + an optional `og.png`
(1200×630 social share card). Posts are linked from the home
page (`../../index.html`) and discovered by the site by folder
name.

The IG carousel that drives traffic to each post lives at
`~/Documents/HQ/Instagram-Carousel/drafts/<slug>/`. Same
slug = same topic.
