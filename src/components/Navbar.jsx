import { useEffect, useMemo, useState } from 'react'

import Icon from './Icon'
import ThemeToggle from './ThemeToggle'
import { profile, resumeUrl } from '../data'

const resumePage = `${import.meta.env.BASE_URL}resume.html`

const Navbar = ({ items, activeSection, theme, toggleTheme, onOpenPalette }) => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  // Show the shortcut in the notation the visitor's keyboard actually uses.
  const shortcut = useMemo(() => {
    if (typeof navigator === 'undefined') return 'Ctrl K'
    return /mac|iphone|ipad/i.test(navigator.platform || navigator.userAgent) ? '⌘ K' : 'Ctrl K'
  }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close the mobile menu on Escape and stop the page behind it from scrolling.
  useEffect(() => {
    if (!menuOpen) return

    const onKeyDown = (event) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [menuOpen])

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`.trim()}>
      <div className="container header__inner">
        <a href="#home" className="brand" onClick={() => setMenuOpen(false)}>
          <span className="brand__mark">{profile.initials}</span>
          <span className="brand__name">{profile.name}</span>
        </a>

        <nav className="nav" aria-label="Sections">
          {items.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`nav__link ${activeSection === item.id ? 'is-active' : ''}`.trim()}
              aria-current={activeSection === item.id ? 'true' : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header__actions">
          <button
            type="button"
            className="palette-trigger"
            onClick={onOpenPalette}
            aria-label="Open command palette"
          >
            <Icon name="search" size={16} />
            <span className="palette-trigger__text">Search</span>
            <kbd className="palette-trigger__kbd">{shortcut}</kbd>
          </button>

          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />

          <a href={resumePage} className="button button--ghost header__resume">
            Resume
          </a>
          <button
            type="button"
            className="icon-button header__menu-button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            <Icon name={menuOpen ? 'close' : 'menu'} size={20} />
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`mobile-menu ${menuOpen ? 'is-open' : ''}`.trim()}
        hidden={!menuOpen}
      >
        <nav className="mobile-menu__nav" aria-label="Sections">
          {items.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`mobile-menu__link ${activeSection === item.id ? 'is-active' : ''}`.trim()}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a href={resumePage} className="mobile-menu__link" onClick={() => setMenuOpen(false)}>
            Resume
          </a>
          <a href={resumeUrl} className="mobile-menu__link" download onClick={() => setMenuOpen(false)}>
            Download resume PDF
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
