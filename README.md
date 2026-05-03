# WaySpeak v1.5.2

Stability and speech repair build.

## What changed

- Full JavaScript validation pass
- Language dropdown initialization checked
- Translation flow checked
- Persian speech handling improved
- Arabic speech handling improved
- App now checks installed browser/device voices
- App shows a voice status message
- Speak button uses the best available matching voice when possible
- If Persian/Arabic voice is missing, the app tells you instead of failing silently
- Arabic/Persian live translations still hide fake romanization
- Arabic/Persian phrasebook still shows curated romanization
- Cache updated to v1.5.2

## Important speech note

Persian speech depends on whether the browser/device has a Persian voice installed. The code now requests `fa-IR`, but if your browser has no Persian voice, it may be silent or fail. This is a device/browser limitation, not a translation issue.

On iPhone/macOS, available voices depend on installed system voices. On Chrome/Android/Windows, available voices vary by browser and OS language packs.
