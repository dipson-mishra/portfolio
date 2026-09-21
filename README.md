# Dipson Mishra Portfolio

A responsive, single-page portfolio for a data science and machine-learning student. It is built with plain HTML, CSS, and JavaScript—no framework or build step required.

## Highlights

- Responsive sections for experience, projects, skills, and contact details
- Persistent dark and light themes, controlled from the navigation bar
- Accessible theme button labels and keyboard focus styles
- Scroll-reveal and entrance animations that respect reduced-motion preferences
- Smooth in-page navigation and a pointer-responsive hero decoration

## Technology

- HTML5
- CSS3 custom properties, responsive layouts, transitions, and animations
- Vanilla JavaScript for theme persistence and page interactions
- Google Fonts: Inter and Space Grotesk

## Run locally

Open `index.html` directly in a browser, or run any static file server from this directory.

## Publish with GitHub Pages

1. Push this folder to a GitHub repository.
2. In the repository, open **Settings → Pages** and select **Deploy from a branch**.
3. Select the branch that contains these files (normally `main`) and the `/ (root)` folder, then save.

GitHub Pages serves the portfolio at the site root and the FlyRank case study at
`/flyrank.html`. The portfolio's FlyRank project card links to that page, and the
case study links back to `index.html`. Both use relative paths, so they work for
both project sites (`username.github.io/repository-name`) and user sites.

## Project files

- `index.html` — page structure and content
- `portfolio.css` — visual design, responsive styles, and theme tokens
- `portfolio.js` — theme toggle and interactive effects
- `flyrank.html` — standalone FlyRank content-refresh case study, linked from the portfolio

