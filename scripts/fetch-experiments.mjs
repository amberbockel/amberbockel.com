// Pulls the latest builds from the agent experiments site into src/experiments.json.
// Run with `npm run experiments`. The result is committed, so the site builds without the network.
import { writeFileSync } from 'node:fs';

const BASE = 'https://amberbockel.github.io/agent-experiments/';
const res = await fetch(BASE + 'manifest.json', { headers: { 'user-agent': 'Mozilla/5.0 (compatible; site-build)' } });
if (!res.ok) throw new Error(`Manifest request failed: ${res.status}`);
const apps = (await res.json()).apps
  .filter((a) => a.title && a.path && a.date)
  .sort((a, b) => b.date.localeCompare(a.date));

const out = {
  url: BASE,
  count: apps.length,
  latest: apps.slice(0, 3).map((a) => ({ title: a.title, text: a.oneLiner || '', category: a.category || '', date: a.date, url: BASE + a.path })),
};
writeFileSync(new URL('../src/experiments.json', import.meta.url), JSON.stringify(out, null, 1) + '\n');
console.log(`Saved ${out.count} experiments. Latest: ${out.latest[0]?.date} "${out.latest[0]?.title}"`);
