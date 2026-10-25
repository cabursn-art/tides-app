// Slack Finder relay — forwards a few NOAA text files to the browser with CORS headers.
// Deploy as a Cloudflare Worker (free tier). Only the paths below are allowed.
const ALLOW = {
  buoy: id => /^\d{5}$/.test(id) && `https://www.ndbc.noaa.gov/data/realtime2/${id}.txt`,
  spec: id => /^\d{5}$/.test(id) && `https://www.ndbc.noaa.gov/data/realtime2/${id}.spec`,
  nws:  id => /^[a-z]{3}$/.test(id) && `https://tgftp.nws.noaa.gov/data/raw/fz/fzus56.k${id}.cwf.${id}.txt`,
};
export default {
  async fetch(req) {
    const u = new URL(req.url);
    const [, kind, id] = u.pathname.split('/');
    const target = ALLOW[kind] && ALLOW[kind](id || '');
    if (!target) return new Response('not found', { status: 404 });
    const r = await fetch(target, { cf: { cacheTtl: 600, cacheEverything: true }, headers: { 'User-Agent': 'slack-finder-relay' } });
    const body = await r.text();
    return new Response(body, {
      status: r.status,
      headers: {
        'content-type': 'text/plain; charset=utf-8',
        'access-control-allow-origin': '*',
        'cache-control': 'public, max-age=600',
      },
    });
  },
};
