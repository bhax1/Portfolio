import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

import Icon from './Icon'
import { filterCommands } from '../lib/fuzzy'
import { slugify } from '../lib/slugify'
import { profile, socials, projects, resumeUrl } from '../data'

const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

function scrollToId(id) {
  const target = document.getElementById(id)
  if (!target) return
  target.scrollIntoView({
    behavior: prefersReducedMotion() ? 'auto' : 'smooth',
    block: id.startsWith('project-') ? 'center' : 'start',
  })
}

/**
 * Builds the command index from the data files, so a project added in
 * src/data/projects.js is searchable here with no extra wiring.
 */
function buildCommands({ navItems, theme, toggleTheme, setStatus }) {
  const commands = []

  navItems.forEach((item) => {
    commands.push({
      id: `nav-${item.id}`,
      label: item.label,
      group: 'Go to',
      icon: 'arrowRight',
      keywords: 'section jump scroll',
      run: () => scrollToId(item.id),
    })
  })

  projects.forEach((project) => {
    commands.push({
      id: `project-${slugify(project.title)}`,
      label: project.title,
      group: 'Projects',
      icon: 'external',
      hint: (project.tech ?? []).slice(0, 3).join(' · '),
      keywords: (project.tech ?? []).join(' '),
      run: () => scrollToId(`project-${slugify(project.title)}`),
    })
  })

  commands.push(
    {
      id: 'action-resume-page',
      label: 'Open resume',
      group: 'Actions',
      icon: 'external',
      keywords: 'cv print pdf',
      run: () => {
        window.location.href = `${import.meta.env.BASE_URL}resume.html`
      },
    },
    {
      id: 'action-resume-download',
      label: 'Download resume PDF',
      group: 'Actions',
      icon: 'download',
      keywords: 'cv file save',
      run: () => {
        const link = document.createElement('a')
        link.href = resumeUrl
        link.download = ''
        link.click()
      },
    },
    {
      id: 'action-copy-email',
      label: 'Copy email address',
      group: 'Actions',
      icon: 'mail',
      hint: profile.email,
      keywords: 'contact clipboard',
      // Keeps the palette open so the confirmation is visible.
      keepOpen: true,
      run: async () => {
        try {
          await navigator.clipboard.writeText(profile.email)
          setStatus('Email address copied')
        } catch {
          setStatus('Could not copy — your browser blocked clipboard access')
        }
      },
    },
    {
      id: 'action-theme',
      label: theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme',
      group: 'Actions',
      icon: theme === 'dark' ? 'sun' : 'moon',
      keywords: 'dark light appearance mode contrast',
      run: toggleTheme,
    }
  )

  socials.forEach((social) => {
    commands.push({
      id: `social-${slugify(social.label)}`,
      label: social.label,
      group: 'Links',
      icon: social.icon,
      keywords: 'profile social open',
      run: () => {
        if (social.href.startsWith('http')) window.open(social.href, '_blank', 'noopener,noreferrer')
        else window.location.href = social.href
      },
    })
  })

  return commands
}

const CommandPalette = ({ open, onClose, navItems, theme, toggleTheme }) => {
  const [query, setQuery] = useState('')
  const [activeIndex, setActiveIndex] = useState(0)
  const [status, setStatus] = useState('')

  const inputRef = useRef(null)
  const listRef = useRef(null)

  const commands = useMemo(
    () => buildCommands({ navItems, theme, toggleTheme, setStatus }),
    [navItems, theme, toggleTheme]
  )

  const results = useMemo(() => filterCommands(commands, query), [commands, query])

  // Reset per-opening state.
  useEffect(() => {
    if (!open) return
    setQuery('')
    setActiveIndex(0)
    setStatus('')
    // Wait a frame so the dialog is painted before focus moves into it.
    const frame = requestAnimationFrame(() => inputRef.current?.focus())
    return () => cancelAnimationFrame(frame)
  }, [open])

  useEffect(() => setActiveIndex(0), [query])

  // Lock the page behind the dialog.
  useEffect(() => {
    if (!open) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previous
    }
  }, [open])

  // Keep the highlighted row in view when navigating by keyboard.
  useEffect(() => {
    if (!open) return
    const active = listRef.current?.querySelector('[data-active="true"]')
    active?.scrollIntoView({ block: 'nearest' })
  }, [activeIndex, open])

  const runCommand = useCallback(
    (command) => {
      if (!command) return

      if (command.keepOpen) {
        command.run()
        return
      }

      onClose()
      // Closing releases the body scroll lock on effect cleanup. Running the
      // command before that lands would cancel any scrolling it tries to do,
      // so wait for the unlock to be committed and painted.
      requestAnimationFrame(() => requestAnimationFrame(() => command.run()))
    },
    [onClose]
  )

  const onKeyDown = (event) => {
    if (event.key === 'ArrowDown') {
      event.preventDefault()
      setActiveIndex((index) => (results.length ? (index + 1) % results.length : 0))
    } else if (event.key === 'ArrowUp') {
      event.preventDefault()
      setActiveIndex((index) => (results.length ? (index - 1 + results.length) % results.length : 0))
    } else if (event.key === 'Home') {
      event.preventDefault()
      setActiveIndex(0)
    } else if (event.key === 'End') {
      event.preventDefault()
      setActiveIndex(Math.max(results.length - 1, 0))
    } else if (event.key === 'Enter') {
      event.preventDefault()
      runCommand(results[activeIndex])
    } else if (event.key === 'Escape') {
      event.preventDefault()
      onClose()
    } else if (event.key === 'Tab') {
      // The dialog holds a single focusable control; keep focus inside it.
      event.preventDefault()
    }
  }

  if (!open) return null

  // Group headings are rendered inline, so track when the group changes.
  let lastGroup = null

  return (
    <div className="palette" role="presentation" onMouseDown={onClose}>
      <div
        className="palette__panel"
        role="dialog"
        aria-modal="true"
        aria-label="Command palette"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="palette__search">
          <Icon name="search" size={18} className="palette__search-icon" />
          <input
            ref={inputRef}
            type="text"
            className="palette__input"
            placeholder="Search sections, projects and actions…"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            onKeyDown={onKeyDown}
            role="combobox"
            aria-expanded="true"
            aria-controls="palette-list"
            aria-activedescendant={results[activeIndex]?.id}
            aria-autocomplete="list"
            autoComplete="off"
            spellCheck="false"
          />
          <button type="button" className="palette__close" onClick={onClose} aria-label="Close">
            <kbd>Esc</kbd>
          </button>
        </div>

        <div className="palette__results" ref={listRef}>
          {results.length === 0 ? (
            <p className="palette__empty">No matches for “{query}”</p>
          ) : (
            <ul id="palette-list" role="listbox" aria-label="Results">
              {results.map((command, index) => {
                const showGroup = command.group !== lastGroup
                lastGroup = command.group

                return (
                  <li key={command.id}>
                    {showGroup && <p className="palette__group">{command.group}</p>}
                    <button
                      type="button"
                      id={command.id}
                      role="option"
                      aria-selected={index === activeIndex}
                      data-active={index === activeIndex}
                      className="palette__item"
                      onMouseMove={() => setActiveIndex(index)}
                      onClick={() => runCommand(command)}
                      tabIndex={-1}
                    >
                      <Icon name={command.icon} size={16} />
                      <span className="palette__label">{command.label}</span>
                      {command.hint && <span className="palette__hint">{command.hint}</span>}
                    </button>
                  </li>
                )
              })}
            </ul>
          )}
        </div>

        <div className="palette__footer">
          <span className="palette__legend">
            <kbd>↑</kbd>
            <kbd>↓</kbd> navigate
          </span>
          <span className="palette__legend">
            <kbd>↵</kbd> select
          </span>
          <span className="palette__legend">
            <kbd>Esc</kbd> close
          </span>
        </div>

        <p className="visually-hidden" role="status" aria-live="polite">
          {status || `${results.length} result${results.length === 1 ? '' : 's'}`}
        </p>
      </div>
    </div>
  )
}

export default CommandPalette
