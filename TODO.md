# Portfolio — future work

Nothing here starts until Ahmad says so.

## 1. Project content (Ahmad supplies the info)
- Fill the `[Fill in: ...]` placeholders in `projects.html`
  - RAG Knowledge Assistant — problem, LLM/embedding model, example query
  - Automated Data Processing Workflow — problem, one concrete public detail
  - Custom Probabilistic RTLS Model — the actual approach and what it improved
- Write real problem / solution / implementation text for every project
- Add one metric to each "Production" project (volume, hours saved, accuracy, latency)

## 2. Links
- Add GitHub repo link to each public project
- Add live demo link where one exists

## 3. Screenshots & videos
- Files go in `assets/media/`
- Markup pattern is already commented into the WhatsApp automation card in `projects.html`
- CSS is already done (`.proj-media` in `css/style.css`)
- Specs: PNG max 1600px / under 500 KB · MP4 H.264, 30-45s, muted, under 10 MB
- Blur client-identifying data in n8n workflow screenshots

## 4. Images (decisions still open)
- `assets/media/og-cover.png` (1200x630) — the link-preview image for LinkedIn/WhatsApp.
  Meta tags already point at this path; the file does not exist yet.
  Option A: generated from the site's own design, no photo needed.
  Option B: same but with Ahmad's headshot.
- `favicon.ico` + `favicon-32.png` at repo root — the browser tab icon.
  Proposal: reuse the green nav dot. Alternative: an "AM" monogram.

## 5. Smaller gaps
- `<meta name="description">` on about / experience / projects / skills (only index.html has one)
- A contact section or "hire me" call to action
