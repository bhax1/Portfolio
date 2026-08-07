import { useEffect, useState } from 'react'

/**
 * Tracks which section is currently under the middle of the viewport.
 *
 * One observer for the whole page, replacing the per-section observers the
 * old build duplicated in every section component.
 */
export function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0] ?? '')
  const key = ids.join('|')

  useEffect(() => {
    const sectionIds = key ? key.split('|') : []
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    if (elements.length === 0) return

    const visible = new Map()

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) visible.set(entry.target.id, entry.boundingClientRect.top)
          else visible.delete(entry.target.id)
        })

        if (visible.size === 0) return

        // Whichever qualifying section sits highest on screen wins.
        const [topMost] = [...visible.entries()].sort((a, b) => a[1] - b[1])
        setActive(topMost[0])
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    )

    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [key])

  return active
}
