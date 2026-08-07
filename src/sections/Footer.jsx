import Icon from '../components/Icon'
import { profile, socials } from '../data'

const Footer = () => (
  <footer className="footer">
    <div className="container footer__inner">
      <p className="footer__copy">
        © {new Date().getFullYear()} {profile.name}
      </p>

      <ul className="social-list">
        {socials.map((social) => (
          <li key={social.label}>
            <a
              href={social.href}
              className="icon-button"
              aria-label={social.label}
              title={social.label}
              target={social.href.startsWith('http') ? '_blank' : undefined}
              rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            >
              <Icon name={social.icon} size={17} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  </footer>
)

export default Footer
