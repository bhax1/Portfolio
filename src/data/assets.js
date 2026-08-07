/**
 * ASSET RESOLVER
 * --------------
 * You should not need to edit this file.
 *
 * It automatically picks up every image in `src/assets/projects/`, so adding a
 * project screenshot is a two-step job:
 *   1. Drop the file into src/assets/projects/
 *   2. Reference it by filename in src/data/projects.js  →  image: 'my-app.png'
 */

const projectImages = import.meta.glob('../assets/projects/*.{png,jpg,jpeg,webp,svg,gif}', {
  eager: true,
  import: 'default',
})

/** Every screenshot filename currently available, e.g. ['otomoto.png', …]. */
export const availableProjectImages = Object.keys(projectImages)
  .map((path) => path.split('/').pop())
  .sort()

/** Resolve a filename like 'otakulink.png' to its bundled URL. */
export function projectImage(filename) {
  if (!filename) return null

  const url = projectImages[`../assets/projects/${filename}`]
  if (url) return url

  // A typo in projects.js would otherwise just show a card with no picture, so
  // say what went wrong (and what is available) while developing.
  if (import.meta.env.DEV) {
    console.warn(
      `[portfolio] No image named "${filename}" in src/assets/projects/.\n` +
        `Available: ${availableProjectImages.join(', ') || '(none yet)'}`
    )
  }
  return null
}

/** Your resume. Replace the PDF at src/assets/files/Resume.pdf to update it. */
export { default as resumeUrl } from '../assets/files/Resume.pdf'

/** Your photo. Replace the file at src/assets/profile-pic.png to update it. */
export { default as profilePhoto } from '../assets/profile-pic.png'
