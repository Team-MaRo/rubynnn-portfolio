# Sponte — Portfolio integration notes

Two deliverables to drop into your portfolio:

## 1. `Case Study.html`
A self-contained long-form case study page. Hero, 8 sections, embeds live React mockups (no static screenshots — high fidelity, scales to any viewport).

**To host on your portfolio site:**
- If your site lets you embed external HTML — host the project folder as-is and link to `Case Study.html`. The mockups need the sibling `.jsx` files to render.
- If you need a single file — bundle it. The page references the `screens*.jsx`, `*-frame.jsx`, `browser-window.jsx` and `search-bar.js` files in the project root.

**To export images instead:**
Open `Case Study.html` in a browser, full-screen each section, screenshot at 2x. Suggested hero export: 1600×900. Body images: 1200 wide.

## 2. `Sponte.html`
The live prototype. Link it from the case study with "Open the canvas →". Users can pan, focus a section, toggle dark mode, swap variants.

## Writeup voice
The case study is written in Sponte's own warm-narrative tone — first-person designer, plainspoken, no recruiter-speak. Edit the copy directly in `Case Study.html` to match your voice. Key spots:
- `<h1 class="title">` — the headline
- `.lede` — one-sentence pitch
- `.meta-row` — role / surfaces / scope / live link (change to your name + year)
- Section blocks — each `<section class="block">` is one act of the case study

## Suggested screenshot exports
If your portfolio platform wants static images, capture these from the live prototype:
1. `home-lit` on iOS (hero)
2. `home-unlit` on Android
3. The lantern sheet (`sheet` with `showSheet=true`)
4. Three time-picker variants side-by-side
5. iPad home (`HomeWeb`)
6. Web app home with sidebar
7. Live Activity on lock screen
8. Watch glance
9. Widgets home screen
10. Marketing landing page

## Credits to update
Search `Case Study.html` for "Solo · concept, design, prototype" and replace with your name/role/year if you want it credited.
