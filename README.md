# Portfolio

Personal portfolio site — React + Vite, deployed to GitHub Pages at
<https://bhax1.github.io/Portfolio/>.

## Updating the content

**All content lives in [`src/data/`](src/data/).** You do not need to touch a
component to change what the site says — see
[`src/data/README.md`](src/data/README.md) for the full table.

| Change | File |
| --- | --- |
| Name, role, bio, email, status, socials, nav | `src/data/profile.js` |
| Projects | `src/data/projects.js` |
| Skills | `src/data/skills.js` |
| Education & experience | `src/data/experience.js` |
| Achievements & certifications | `src/data/achievements.js` |
| Resume PDF | replace `src/assets/files/Resume.pdf` |
| Profile photo | replace `src/assets/profile-pic.png` |
| Project screenshots | drop into `src/assets/projects/`, reference by filename |

Emptying any of those arrays removes the matching section **and** its
navigation link. Section numbering and the alternating background recompute
themselves, so nothing is left inconsistent.

## Commands

```bash
npm install
npm run dev      # dev server with hot reload
npm run build    # production build → dist/
npm run preview  # serve the production build locally
npm run lint     # eslint
npm run deploy   # build and publish to GitHub Pages
```

## Structure

```
src/
├── data/          all editable content  ← start here
├── sections/      one component per page section
├── components/    Navbar, Section shell, Icon set, Reveal, ScrollProgress
├── hooks/         useTheme, useActiveSection
├── index.css      design tokens, reset, primitives (buttons, tags)
└── App.css        layout and section styles
```

## Notes

- **Theming.** Light/dark is driven by CSS custom properties in `src/index.css`.
  The whole palette keys off `--accent`; change that one token to re-brand.
  The theme follows the OS preference until the visitor picks one, then the
  choice is remembered. An inline script in `index.html` applies it before
  first paint so there is no flash.
- **Icons** are inline SVG in `src/components/Icon.jsx`. There are no icon-font
  CDNs to load.
- **Motion** is handled by framer-motion and is disabled automatically for
  visitors with `prefers-reduced-motion` set.
