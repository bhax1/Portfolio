import { useState, useEffect } from 'react'
import { MotionConfig } from 'framer-motion'
import { Hero, About, Skills, Projects, Journey, Contact, Footer } from './sections'
import { Navbar, ThemeToggle, ScrollIndicator, CursorFx } from './components'
import './App.css'

const getInitialTheme = () => {
  try {
    return localStorage.getItem('theme') || 'light'
  } catch {
    return 'light'
  }
}

function App() {
  const [theme, setTheme] = useState(getInitialTheme)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    try {
      localStorage.setItem('theme', theme)
    } catch {
      /* storage unavailable */
    }
  }, [theme])

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))

  return (
    <MotionConfig reducedMotion="user">
      <div className="app-container">
        <CursorFx />
        <Navbar activeSection={activeSection} />
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        <ScrollIndicator />

        <main>
          <Hero setActiveSection={setActiveSection} />
          <About setActiveSection={setActiveSection} />
          <Skills setActiveSection={setActiveSection} />
          <Projects setActiveSection={setActiveSection} />
          <Journey setActiveSection={setActiveSection} />
          <Contact setActiveSection={setActiveSection} />
        </main>

        <Footer />
      </div>
    </MotionConfig>
  )
}

export default App
