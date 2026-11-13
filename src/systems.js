// Every design system the site can wear. Same token contract, different values.
// To add a system, add an object here. To change the site's look, edit site.config.js.
export const THEMES = [
  {
    id: 'sunrise',
    // Intro photo for the home page. Swap in this system's own shot after the photoshoot.
    intro: { photo: 'SffeKsuKsBqX5cZA1PTpsRbJe0.png', alt: 'Amber Heinbockel, smiling, holding a laptop' },
    name: 'Sunrise',
    tagline: 'Black, white and cream with green, orchid and teal, a soft aurora and a serif with opinions. The original.',
    status: 'v0.1.0',
    fonts: { display: '"Prata", Georgia, serif', body: '"DM Sans", system-ui, sans-serif' },
    shape: { rCard: '20px', rCtl: '12px', rBtn: '999px', rImg: '14px', rProd: '20px', displayWeight: '400', displayLs: '-0.01em', displayLh: '1.12', displayScale: '1.1' },
    // Colours come from the brand guide: black, white, cream #fbf8ef, green #71d45c, orchid #e69ee0, teal #b1d9d7.
    light: {
      bg: '#ffffff', surface: '#fbf8ef', surface2: '#f3eedf', fg: '#000000', muted: '#000000a6', border: '#0000001f',
      primary: '#71d45c', onPrimary: '#ffffff', labelColor: '#000000', btn2Bg: '#ffffff', btn2Border: '#00000026',
      accent: '#e69ee0', accentSoft: '#e69ee040', accentText: '#000000',
      t1Bg: '#b1d9d7', t1Fg: '#000000', t2Bg: '#e69ee0', t2Fg: '#000000', t3Bg: '#71d45c', t3Fg: '#000000',
      art1: '#fbf8ef', art2: '#b1d9d7', art3: '#e69ee0',
      heroBg: 'linear-gradient(180deg, #b1d9d7 0%, #e69ee080 55%, #ffffff 100%)',
    },
    dark: {
      bg: '#000000', surface: '#111111', surface2: '#1f1f1f', fg: '#ffffff', muted: '#ffffffa6', border: '#ffffff26',
      primary: '#71d45c', onPrimary: '#ffffff', labelColor: '#71d45c', btn2Bg: '#ffffff0d', btn2Border: '#ffffff33',
      accent: '#e69ee0', accentSoft: '#e69ee033', accentText: '#e69ee0',
      t1Bg: '#b1d9d7', t1Fg: '#000000', t2Bg: '#e69ee0', t2Fg: '#000000', t3Bg: '#71d45c', t3Fg: '#000000',
      art1: '#1f1f1f', art2: '#b1d9d7', art3: '#e69ee0',
      heroBg: 'linear-gradient(180deg, #b1d9d740 0%, #e69ee026 55%, #000000 100%)',
    },
  },
  {
    id: 'sierra',
    // Intro photo for the home page. Swap in this system's own shot after the photoshoot.
    intro: { photo: 'SffeKsuKsBqX5cZA1PTpsRbJe0.png', alt: 'Amber Heinbockel, smiling, holding a laptop' },
    name: 'Sierra',
    tagline: 'Sage neutrals, one loud lime and tight grotesque type. Friendly without turning cute.',
    status: 'Preview',
    fonts: { display: '"Wix Madefor Display", system-ui, sans-serif', body: '"Wix Madefor Display", system-ui, sans-serif' },
    shape: { rCard: '28px', rCtl: '16px', rBtn: '999px', rImg: '0px', rProd: '28px', displayWeight: '500', displayLs: '-0.05em', displayLh: '1.1', displayScale: '1.1', bodyLs: '-0.02em', cardBorder: 'transparent', heroAlign: 'left', heroJustify: 'start' },
    light: {
      bg: '#ffffff', surface: '#f4f6f2', surface2: '#e6eae1', fg: '#0b0f0c', muted: '#3e4a40', border: '#c9d1c3',
      primary: '#0b0f0c', onPrimary: '#ffffff', btn2Bg: '#e6eae1', btn2Border: 'transparent',
      accent: '#2f9e4f', accentSoft: '#d7ff5e66', accentText: '#17692f',
      t1Bg: '#e9ffb0', t1Fg: '#34460a', t2Bg: '#c8f5ec', t2Fg: '#0e4a40', t3Bg: '#ffe1d4', t3Fg: '#7a3214',
      art1: '#e9ffb0', art2: '#c8f5ec', art3: '#ffe1d4', heroBg: '#ffffff', navBg: '#f4f6f2',
    },
    dark: {
      bg: '#0b0f0c', surface: '#1a201b', surface2: '#242b25', fg: '#ffffff', muted: '#c9d1c3', border: '#3e4a40',
      primary: '#d7ff5e', onPrimary: '#0b0f0c', btn2Bg: '#242b25', btn2Border: 'transparent',
      accent: '#d7ff5e', accentSoft: '#d7ff5e33', accentText: '#d7ff5e',
      t1Bg: '#34460a', t1Fg: '#e9ffb0', t2Bg: '#0e4a40', t2Fg: '#c8f5ec', t3Bg: '#5a2a16', t3Fg: '#ffe1d4',
      art1: '#d7ff5e', art2: '#74e6d4', art3: '#ffc2a8', heroBg: '#0b0f0c', navBg: '#1a201b',
    },
  },
  {
    id: 'unicorns',
    // Intro photo for the home page. Swap in this system's own shot after the photoshoot.
    intro: { photo: 'SffeKsuKsBqX5cZA1PTpsRbJe0.png', alt: 'Amber Heinbockel, smiling, holding a laptop' },
    name: 'Unicorns',
    tagline: 'Bubblegum pink, butter cream and aubergine in a puffy, rounded face, with sticker shadows. Loud on purpose.',
    status: 'Preview',
    fonts: { display: '"DynaPuff", "Fredoka", system-ui, sans-serif', body: '"Fredoka", system-ui, sans-serif' },
    shape: { rCard: '32px', rCtl: '13px', rBtn: '8px', rImg: '0px', rProd: '32px', displayWeight: '600', displayLs: '-0.01em', displayLh: '1.08', displayScale: '1', bodySize: '16px', cardBorder: 'transparent', labelCase: 'lowercase', labelLs: '0.01em' },
    light: {
      bg: '#ff9ee4', surface: '#f2edc7', surface2: '#ffffff8c', fg: '#2b1619', muted: '#2b1619bf', border: '#2b161940',
      primary: '#2b1619', onPrimary: '#ffb5f0', btn2Bg: '#a8bfff', btn2Border: 'transparent', btnShadow: '3px 3px 0 #bd4f9e',
      accent: '#bd4f9e', accentSoft: '#bd4f9e33', accentText: '#6f1459',
      t1Bg: '#a8bfff', t1Fg: '#1c2a66', t2Bg: '#d1de92', t2Fg: '#3a4210', t3Bg: '#2b1619', t3Fg: '#ff9ee4',
      art1: '#a8bfff', art2: '#d1de92', art3: '#fefae7', heroBg: '#ff9ee4',
    },
    dark: {
      bg: '#2b1619', surface: '#3d2327', surface2: '#ffffff1f', fg: '#ff9ee4', muted: '#ffb5f0bf', border: '#ff9ee440',
      primary: '#ff9ee4', onPrimary: '#2b1619', btn2Bg: 'transparent', btn2Border: '#ff9ee4', btnShadow: '3px 3px 0 #f2edc7',
      accent: '#f2edc7', accentSoft: '#f2edc733', accentText: '#f2edc7',
      t1Bg: '#a8bfff', t1Fg: '#1c2a66', t2Bg: '#d1de92', t2Fg: '#3a4210', t3Bg: '#f2edc7', t3Fg: '#2b1619',
      art1: '#a8bfff', art2: '#d1de92', art3: '#f2edc7', heroBg: '#2b1619',
    },
  },
  {
    id: 'ember',
    // Intro photo for the home page. Swap in this system's own shot after the photoshoot.
    intro: { photo: 'SffeKsuKsBqX5cZA1PTpsRbJe0.png', alt: 'Amber Heinbockel, smiling, holding a laptop' },
    name: 'Ember',
    tagline: 'Near-black, oversized type and almost no chrome. One ember-orange accent does the talking.',
    status: 'Preview',
    darkFirst: true,
    fonts: { display: '"Inter Tight", system-ui, sans-serif', body: '"Inter Tight", system-ui, sans-serif' },
    shape: { rCard: '0px', rCtl: '2px', rBtn: '999px', rImg: '0px', rProd: '0px', displayWeight: '500', displayLs: '-0.035em', displayLh: '1', displayScale: '1.3', cardBorder: 'transparent', labelCase: 'uppercase', labelLs: '0.03em' },
    light: {
      bg: '#0f0e0e', surface: '#191716', surface2: '#272423', fg: '#ffffff', muted: '#ffffff8c', border: '#ffffff2e',
      primary: '#ffffff', onPrimary: '#0f0e0e', btn2Bg: 'transparent', btn2Border: '#ffffff66',
      accent: '#ff5a2e', accentSoft: '#ff5a2e33', accentText: '#ff7a52',
      t1Bg: '#ffffff1f', t1Fg: '#ffffff', t2Bg: '#ffd98e29', t2Fg: '#ffd98e', t3Bg: '#ff5a2e33', t3Fg: '#ff9d80',
      art1: '#e9dfd2', art2: '#d6c7b1', art3: '#c2b5a4', heroBg: '#0f0e0e',
    },
    dark: {
      bg: '#000000', surface: '#0f0e0e', surface2: '#1c1a19', fg: '#ffffff', muted: '#ffffff8c', border: '#ffffff2e',
      primary: '#ffffff', onPrimary: '#000000', btn2Bg: 'transparent', btn2Border: '#ffffff66',
      accent: '#ff5a2e', accentSoft: '#ff5a2e33', accentText: '#ff7a52',
      t1Bg: '#ffffff1f', t1Fg: '#ffffff', t2Bg: '#ffd98e29', t2Fg: '#ffd98e', t3Bg: '#ff5a2e33', t3Fg: '#ff9d80',
      art1: '#e9dfd2', art2: '#d6c7b1', art3: '#c2b5a4', heroBg: '#000000',
    },
  },
];

const kebab = (k) => k.replace(/[A-Z]/g, (m) => '-' + m.toLowerCase());
const decl = (o) => Object.entries(o).map(([k, v]) => `--ds-${kebab(k)}:${v}`).join(';');

/* One CSS block per system, plus one per system for dark mode.
   <html data-system="ember" data-mode="dark"> selects them, exactly like a light/dark switch. */
// Some tokens are optional, and only some systems set them. Every system still declares all of them,
// so a system previewed inside another never inherits the outer one's extras.
const union = (pick) => [...new Set(THEMES.flatMap((t) => Object.keys(pick(t))))];
const full = (keys, o) => Object.fromEntries(keys.map((k) => [k, o[k] ?? 'initial']));

export function systemsCss() {
  const shapeKeys = union((t) => t.shape), colourKeys = union((t) => ({ ...t.light, ...t.dark }));
  return THEMES.map((t) => {
    const sel = `[data-system="${t.id}"]`;
    const scheme = (m) => `color-scheme:${t.darkFirst || m === 'dark' ? 'dark' : 'light'}`;
    return `${sel}{--ds-font-display:${t.fonts.display};--ds-font-body:${t.fonts.body};${decl(full(shapeKeys, t.shape))};${decl(full(colourKeys, t.light))};${scheme('light')}}\n${sel}[data-mode="dark"],[data-mode="dark"] ${sel}{${decl(full(colourKeys, t.dark))};${scheme('dark')}}`;
  }).join('\n');
}
export const tokenCount = (t) => 2 + Object.keys(t.shape).length + Object.keys(t.light).length;
