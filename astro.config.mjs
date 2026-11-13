import { defineConfig } from 'astro/config';

export default defineConfig({
  // Staging address. Change to https://amberbockel.com at cutover, with public/CNAME and public/robots.txt.
  site: 'https://staging.amberbockel.com',
  build: { format: 'directory' },
});
