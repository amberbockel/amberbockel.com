// The two settings that decide how the site looks.
export default {
  // Which design system the site wears: 'sunrise' | 'sierra' | 'unicorns' | 'ember'
  system: 'sunrise',
  // Show visitors a control to try the other systems. Turn off to keep the choice yours.
  showSystemSwitch: true,
  // The password-protected site with confidential work. Linked from the Work page only.
  privateWork: {
    url: 'https://amberbockel.pages.dev/',
    email: 'amberbockel+website@gmail.com',
  },
  blog: {
    substack: 'https://amberbockel.substack.com',
    // Which copy of an essay search engines should credit: 'substack' or 'site'.
    canonical: 'substack',
  },
};
