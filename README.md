# Ahmad Maraqa — Portfolio

Static multi-page portfolio site (no build step — plain HTML/CSS/JS), ready for GitHub Pages.

## Structure

```
├── index.html          Home
├── about.html           About
├── experience.html       Experience timeline
├── projects.html         Categorized, expandable project case studies
├── skills.html           Skills grid
├── css/style.css         All styles (design tokens at top)
├── js/main.js            Nav toggle, project expand/collapse, category filter
└── assets/               Resume PDF + project screenshots/videos go here
```

## Before you publish — fill these in

Search the project files for these markers and replace them with your real details:

- `[Fill in: ...]` — placeholder text in `projects.html` where specifics
  (metrics, exact approach, client-safe details) need to be added.
- `📸 / 🎥 media-slot` divs — replace with real `<img>` / `<video>` tags once you
  have screenshots or short screen recordings of each project.
- Portfolio URL — once live, update it in:
  - `github_profile_README.md` ("Portfolio: add your GitHub Pages URL here")
  - Your LinkedIn Featured section
  - The CV, if you'd like the link to go live instead of "link to be added"

## Deploy to GitHub Pages

### 1. Create the repository
On GitHub: **New repository** → name it whatever you like (e.g. `portfolio`) →
**Public** (GitHub Pages requires a public repo on the free plan — see note below).

### 2. Push this folder
```bash
cd portfolio
git init
git add .
git commit -m "Initial portfolio site"
git branch -M main
git remote add origin https://github.com/AhmadMaraqa20/portfolio.git
git push -u origin main
```

### 3. Enable Pages
Repo → **Settings** → **Pages** → under "Build and deployment":
- Source: **Deploy from a branch**
- Branch: **main**, folder **/ (root)**
- Save

Your site goes live at:
```
https://ahmadmaraqa20.github.io/portfolio/
```

(Takes 1–2 minutes to build after each push.)

### Alternative: make it your primary GitHub Pages site
If you name the repo exactly `AhmadMaraqa20.github.io`, it publishes at the shorter
`https://ahmadmaraqa20.github.io/` with no `/portfolio/` path. Same steps otherwise.

## About repo privacy

GitHub Pages on the **free plan only publishes from public repositories** — a private
repo needs GitHub Pro. Since the whole point of this site is to be seen by recruiters,
a public repo for just the portfolio code is usually fine (there's no proprietary logic
in a static site). If you want the source hidden anyway:
- Upgrade to GitHub Pro ($4/mo), which allows Pages from private repos, **or**
- Keep this code in a private repo and use a GitHub Actions workflow to build/deploy
  only the static output to a separate public repo — ask if you want this set up.

## Local preview
Just open `index.html` in a browser — no server needed. (A local server like
`python3 -m http.server` avoids occasional file:// restrictions in some browsers.)
