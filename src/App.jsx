import { useState, useEffect } from 'react'
import { Hero, About, Skills, Projects, Journey, Contact, Footer } from './sections'
import { Navbar, ThemeToggle, ScrollIndicator} from './components'
import BackgroundParticles from './components/BackgroundParticles'
import './App.css'

function App() {
  const [theme, setTheme] = useState('dark')
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <div className="app-container">
      <BackgroundParticles theme={theme} />
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
  )
}

export default App