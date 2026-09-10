# sargoto.com

Astro static blog, deployed to Cloudflare Workers static assets.
Author: Brant Gehrke (Sargoto).

## Rules
- Fully static. Do NOT install @astrojs/cloudflare or any SSR adapter.
- Build: `npm run build` → ./dist. Config: wrangler.jsonc only.
- Never touch DNS, MX, or nameserver settings. Not in scope, ever.
- Never commit secrets. Deploy auth is wrangler OAuth, outside the repo.
- Blog collection is `rants` ("The Brant Rants"), URLs at /rants/<slug>.
- Set `site: 'https://sargoto.com'` in astro.config.mjs; keep RSS,
  sitemap, and OG tags working on every change.
- Small, single-purpose commits with clear messages.
