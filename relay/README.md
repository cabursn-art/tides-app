# Relay for Slack Finder

NOAA's buoy (NDBC) and marine-text servers don't send CORS headers, so a browser page can't read them directly. This Worker forwards three kinds of file with the headers added:

- `/buoy/46012` → NDBC realtime observations
- `/spec/46012` → NDBC spectral wave summary
- `/nws/mtr` → NWS coastal waters forecast text for the Monterey office

## Deploy (free, ~2 minutes)

1. Sign in at https://dash.cloudflare.com (create an account if needed).
2. Workers & Pages → Create → Create Worker → name it `slack-finder-relay` → Deploy.
3. Click Edit code, replace everything with the contents of `worker.js`, then Deploy.
4. Your relay URL is shown on the Worker page, e.g. `https://slack-finder-relay.<you>.workers.dev`.
5. In the app: Settings → "Relay URL" → paste it → Save.

Test it by opening `https://slack-finder-relay.<you>.workers.dev/buoy/46012` in a browser; you should see the NDBC text table.
