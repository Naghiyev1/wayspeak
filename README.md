# WaySpeak

A clean travel translator and offline phrasebook that does not depend on Google.

## What it does

- Clean source → target translation interface
- Source and target language selectors
- Swap languages
- Copy input/output
- Show translation in large full-screen mode
- Save useful phrases
- Recent translations
- Conversation cards
- China travel phrasebook
- Quick presets for English/Spanish ↔ Chinese
- Engine options:
  - Browser Translator API, when available
  - LibreTranslate endpoint, if you provide one
  - Phrasebook-only offline mode
- Dark mode
- PWA support
- Runs on GitHub Pages
- No backend required by default
- No login
- No paid services

## Important translation note

Live translation requires browser translation support or a reachable LibreTranslate-compatible endpoint. Phrasebook mode works offline because the phrases are included in the app.

## Deploy

Create a public GitHub repo called `wayspeak`, upload all files to the root, then enable GitHub Pages from the `main` branch `/root`.

