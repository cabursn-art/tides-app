# Slack Finder

A one-file fishing-conditions planner for Pillar Point Harbor and nearby spots (Fort Ross, Golden Gate ship channel, Duxbury Reef, Monterey).

- Tide curve from NOAA CO-OPS predictions, with estimated slack times (lag model fitted to NOAA's Point Lobos current station; the Golden Gate spot uses NOAA's real current predictions).
- Wind and swell (height, period, direction) from Open-Meteo, hourly, 10 days out.
- "Optimal conditions" windows: current under 0.7 kt, wind under 9 mph, swell fishable (period ≥ 2× height, height ≤ 6 ft). All thresholds and model coefficients are editable in Settings and saved on the phone.
- Calendar view with tide range, moon phase, and swell/wind pills; tap a day for detail.

Hosted with GitHub Pages. Open the site on a phone and use Share → Add to Home Screen.
