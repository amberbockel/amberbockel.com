# amberbockel.com

Amber Heinbockel's site, built with Astro as a static site.

## Change the design system

Open `src/site.config.js`:

```js
export default {
  system: 'sunrise',        // 'sunrise' | 'sierra' | 'unicorns' | 'ember'
  showSystemSwitch: true,   // let visitors switch systems from the header
};
```

Changing `system` re-skins the whole site: colour, type and shape. It works like the light/dark switch:
one attribute on `<html>` (`data-system`, next to `data-mode`) selects a set of tokens.

A system is made of two things:

- **Tokens** in `src/systems.js`: colour, type and shape.
- **One signature gesture** in `src/styles/site.css`, under "Per-system art direction".

## Where things live

- `src/pages/`: one page each for Home, About, Work, Mentor, Art and Design systems, plus the blog.
- `src/content.json` and `src/extra.json`: page copy, stats, tabs, testimonials and logos.
- `src/posts.json`: essays imported from Substack.
- `src/layouts/Layout.astro`: header, footer, the system and mode switches, and page motion.
- `src/styles/`: `components.css` (buttons, cards, badges) and `site.css` (layout and motion).
- `public/images` and `public/blog`: site images and essay images.

## Run it

```bash
npm install
```

```bash
npm run dev
```

## Blog

`npm run posts` pulls the latest essays from the Substack feed into `src/posts.json` and downloads their
images. `python3 scripts/optimize-images.py` then shrinks the images (needs Pillow).

`blog.canonical` in `src/site.config.js` decides which copy search engines credit: `'substack'` (default)
or `'site'`.

## Deploy

Every push to `main` builds and deploys with GitHub Pages (`.github/workflows/deploy.yml`). The same
workflow runs once a day to pick up new essays.

The site is on a staging address for now. To move it to amberbockel.com, change three things together:
`site` in `astro.config.mjs`, the domain in `public/CNAME`, and `public/robots.txt`, which blocks search
engines while on staging.

## Not done yet

- The Lab page from the old site is not ported.
- The Design Leadership tab on About reuses the home page copy.
- Three animated GIFs in essays are 2 to 8 MB each and should become video.
