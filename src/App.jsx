import { useCallback, useEffect, useMemo, useState } from 'react'

import { CommandPalette, Navbar, ScrollProgress } from './components'
import { Hero, About, Projects, Skills, Experience, Achievements, Contact, Footer } from './sections'
import { useActiveSection } from './hooks/useActiveSection'
import { useTheme } from './hooks/useTheme'
import { navItems, projects, skillGroups, education, experience, achievements } from './data'
import './App.css'

/** The order sections are rendered in below — used to number their eyebrows. */
const SECTION_ORDER = ['about', 'projects', 'skills', 'experience', 'achievements', 'contact']

function App() {
  const { theme, toggleTheme } = useTheme()
  const [paletteOpen, setPaletteOpen] = useState(false)

  const closePalette = useCallback(() => setPaletteOpen(false), [])

  // Cmd+K / Ctrl+K from anywhere, and "/" as a shorthand when not already typing.
  useEffect(() => {
    const onKeyDown = (event) => {
      const key = event.key.toLowerCase()
      const inField = ['INPUT', 'TEXTAREA'].includes(event.target.tagName) || event.target.isContentEditable

      if (key === 'k' && (event.metaKey || event.ctrlKey)) {
        event.preventDefault()
        setPaletteOpen((open) => !open)
      } else if (key === '/' && !inField && !event.metaKey && !event.ctrlKey) {
        event.preventDefault()
        setPaletteOpen(true)
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  // A section only exists if its data file has something in it, so emptying an
  // array in src/data hides both the section and its navigation link.
  const present = useMemo(
    () => ({
      about: true,
      projects: projects.length > 0,
      skills: skillGroups.length > 0,
      experience: education.length > 0 || experience.length > 0,
      achievements: achievements.length > 0,
      contact: true,
    }),
    []
  )

  const visibleNavItems = useMemo(
    () => navItems.filter((item) => present[item.id]),
    [present]
  )

  const activeSection = useActiveSection(visibleNavItems.map((item) => item.id))

  // Sequential numbers for the section eyebrows, counted over the sections that
  // are actually rendered so hiding one never leaves a gap in the sequence.
  const order = useMemo(() => {
    let n = 0
    return Object.fromEntries(
      SECTION_ORDER.map((id) => [id, present[id] ? ++n : null])
    )
  }, [present])

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>

      <ScrollProgress />
      <Navbar
        items={visibleNavItems}
        activeSection={activeSection}
        theme={theme}
        toggleTheme={toggleTheme}
        onOpenPalette={() => setPaletteOpen(true)}
      />

      <CommandPalette
        open={paletteOpen}
        onClose={closePalette}
        navItems={visibleNavItems}
        theme={theme}
        toggleTheme={toggleTheme}
      />

      <main id="main">
        <Hero />
        {present.about && <About number={order.about} />}
        {present.projects && <Projects number={order.projects} />}
        {present.skills && <Skills number={order.skills} />}
        {present.experience && <Experience number={order.experience} />}
        {present.achievements && <Achievements number={order.achievements} />}
        {present.contact && <Contact number={order.contact} />}
      </main>

      <Footer />
    </>
  )
}

export default App
