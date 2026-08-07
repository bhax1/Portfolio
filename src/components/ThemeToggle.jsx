import Icon from './Icon'

const ThemeToggle = ({ theme, toggleTheme, className = '' }) => (
  <button
    type="button"
    className={`icon-button ${className}`.trim()}
    onClick={toggleTheme}
    aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
    title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
  >
    <Icon name={theme === 'dark' ? 'sun' : 'moon'} size={18} />
  </button>
)

export default ThemeToggle
