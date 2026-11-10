import { useEffect } from 'react'

// Marks `id` as the active section when it crosses the middle of the viewport.
const useActiveSection = (id, setActiveSection) => {
  useEffect(() => {
    const el = document.getElementById(id)
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setActiveSection(id),
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [id, setActiveSection])
}

export default useActiveSection
