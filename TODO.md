# Portfolio — future work

Nothing here starts until Ahmad says so.

## 1. Videos (one per project)
Ahmad will supply a short screen recording per project. Drop it in the project's
folder under `assets/media/<project-slug>/` and add:

```html
<figure class="proj-media">
  <video src="assets/media/<slug>/demo.mp4" poster="assets/media/<slug>/01.jpg"
         controls muted playsinline preload="none"></video>
  <figcaption>Short caption.</figcaption>
</figure>
```

Specs: MP4 (H.264), 30–45s, muted, under 10 MB.

## 2. Missing screenshots
Two projects have their image markup written but commented out, waiting on files:

- `assets/media/fire-detection/01.jpg` — the sensor input form
- `assets/media/fire-detection/02.jpg` — the seven model predictions
- `assets/media/jordanian-currency/01.jpg` — the upload screen
- `assets/media/jordanian-currency/02.jpg` — the detection result with bounding boxes

Save the Streamlit screenshots under those exact paths, then uncomment the block
in `projects.html`.

## 3. Screenshots pulled for privacy
Two gym assistant screenshots (the Telegram chat and the members sheet) contained
phone numbers, so they were left out. If the numbers are fake or get blurred,
they can go back into `assets/media/gym-voice-assistant/`.

## 4. Metrics
The production WhatsApp platform card has no numbers in it. One figure — messages
handled, events served, delivery rate — would make it land much harder.

## 5. Images still undecided
- `assets/media/og-cover.png` (1200x630) — the link-preview image for LinkedIn/WhatsApp.
  Meta tags already point at this path; the file does not exist yet.
  Option A: generated from the site's own design, no photo needed.
  Option B: same but with Ahmad's headshot.
- `favicon.ico` + `favicon-32.png` at repo root — the browser tab icon.
  Proposal: reuse the green nav dot. Alternative: an "AM" monogram.

## 6. Smaller gaps
- A contact section or "hire me" call to action
- Workflow JSON exports live outside the repo at `D:\Ahmad_Maraqa_Portfolio\_workflow_source_backup`
  and are blocked by `.gitignore`. Keep it that way.
