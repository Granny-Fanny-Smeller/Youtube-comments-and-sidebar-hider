# YouTube Comments & Recommendations Toggle — Microsoft Edge Extension (Manifest V3)

A toolbar on/off switch that hides YouTube comments, the left and watch-page sidebars, home recommendation grids and shelves, and end-screen recommendation cards.

## Install in Microsoft Edge

1. Unzip `youtube-clean-switch.zip`.
2. Open `edge://extensions`.
3. Turn on **Developer mode**.
4. Select **Load unpacked** and choose the folder containing `manifest.json`.
5. Open or reload a `https://www.youtube.com` tab, then click the extension icon and switch **Hide distractions** on.

Version 1.1.0 supports both `youtube.com` and `www.youtube.com`. The switch starts off. Its setting is saved locally in this Edge profile and applies to YouTube tabs, including after reloads. Switch it off to restore the hidden sections. The extension does not send browsing data anywhere.

## Files

- `manifest.json` — Manifest V3 configuration and YouTube content-script scope.
- `popup.html` — Extension popup and accessible on/off switch.
- `popup.css` — Popup styling.
- `popup.js` — Switch behavior and status display.
- `content.js` — Applies the saved switch setting to YouTube pages.
- `youtube-clean.css` — Rules that hide comments, sidebars, and recommendation areas.
