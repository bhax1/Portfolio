/** 'Spam Detector' → 'spam-detector'. Used for per-project anchor ids. */
export function slugify(value) {
  return String(value)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}
