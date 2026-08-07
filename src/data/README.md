# Editing your portfolio

Every piece of content on the site lives in this folder. You never need to
touch a component to change what the page says.

| I want to change… | Edit this file |
| --- | --- |
| Name, role, bio, email, location, status pill | `profile.js` |
| Social links in the header, hero and footer | `profile.js` → `socials` |
| Which sections appear in the navigation | `profile.js` → `navItems` |
| Projects | `projects.js` |
| Skill groups and tags | `skills.js` |
| Education and experience timelines | `experience.js` |
| Certifications, awards, achievements | `achievements.js` |

## Common tasks

### Projects

Everything happens in `projects.js`.

- **Add** — copy any existing block, paste it, edit the fields. Only `title` is
  required; leave anything else out and the card just drops that part.
- **Update** — edit the block in place.
- **Remove** — delete the block, or comment it out with `//`.
- **Reorder** — move blocks up or down. The page follows the array order.

For the screenshot, drop the file into `src/assets/projects/` and reference it
by **filename only**: `image: 'my-app.png'`. There is no import to add — the
file is picked up automatically. Misspell it and `npm run dev` prints a warning
listing the filenames that do exist.

Leave `demo` or `code` empty and that link disappears. Set `featured: true` and
the card goes full-width with the screenshot beside the text.

**Add an achievement.** `achievements.js` ships empty and the section hides
itself until you add the first entry. The file contains a copy-paste template.

**Swap your resume.** Replace `src/assets/files/Resume.pdf`. The filename must
stay the same.

**Swap your photo.** Replace `src/assets/profile-pic.png`. The filename must
stay the same.

**Add a skill group.** Append an object to `skillGroups` in `skills.js`. The
layout reflows on its own — there is no fixed number of groups.

**Hide a section.** Empty its array (`projects`, `skillGroups`, `education`,
`experience`, `achievements`). The section and its nav link both disappear.

## What updates itself

You do not have to register content anywhere twice:

- **The command palette** (`⌘K`) indexes sections, projects, socials and actions
  straight from these files. Add a project and it becomes searchable.
- **The resume page** (`/resume.html`) is generated from these same files, so it
  can never fall out of date with the site.
- **`profile.phone` and `profile.website`** appear on the resume only. Leave
  them as empty strings to keep them off it.

## Running it

```bash
npm install
npm run dev      # local preview at http://localhost:5173
npm run build    # production build into dist/
npm run deploy   # build and publish to GitHub Pages
```
