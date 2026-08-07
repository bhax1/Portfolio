import { useCallback, useEffect, useState } from 'react'

const STORAGE_KEY = 'portfolio-theme'

function systemTheme() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function storedTheme() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    return saved === 'dark' || saved === 'light' ? saved : null
  } catch {
    return null
  }
}

/**
 * Theme state that starts from the user's saved choice, falls back to the OS
 * preference, and keeps following the OS until an explicit choice is made.
 * The initial value matches what the inline script in index.html already
 * applied, so there is no flash on first paint.
 */
export function useTheme() {
  const [theme, setTheme] = useState(() => storedTheme() ?? systemTheme())

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    document.documentElement.style.colorScheme = theme
  }, [theme])

  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)')
    const onChange = (event) => {
      if (!storedTheme()) setTheme(event.matches ? 'dark' : 'light')
    }
    media.addEventListener('change', onChange)
    return () => media.removeEventListener('change', onChange)
  }, [])

  const toggleTheme = useCallback(() => {
    setTheme((current) => {
      const next = current === 'dark' ? 'light' : 'dark'
      try {
        localStorage.setItem(STORAGE_KEY, next)
      } catch {
        /* private mode — the theme still applies for this visit */
      }
      return next
    })
  }, [])

  return { theme, toggleTheme }
}
