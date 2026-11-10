import { AnimatePresence, motion } from 'framer-motion'

const Sun = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="4.5" />
    <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
  </svg>
)

const Moon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
  </svg>
)

const ThemeToggle = ({ theme, toggleTheme }) => (
  <motion.button
    className="theme-toggle"
    onClick={toggleTheme}
    aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    whileHover={{ scale: 1.08 }}
    whileTap={{ scale: 0.92 }}
  >
    <AnimatePresence mode="wait" initial={false}>
      <motion.span
        key={theme}
        className="theme-icon"
        initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
        animate={{ rotate: 0, opacity: 1, scale: 1 }}
        exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
        transition={{ duration: 0.25 }}
      >
        {theme === 'dark' ? <Sun /> : <Moon />}
      </motion.span>
    </AnimatePresence>
  </motion.button>
)

export default ThemeToggle
