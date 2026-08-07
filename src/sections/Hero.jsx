import Icon from '../components/Icon'
import Reveal from '../components/Reveal'
import { profile, socials, resumeUrl } from '../data'

const Hero = () => (
  <section id="home" className="hero">
    <div className="container hero__inner">
      {profile.status?.available && (
        <Reveal as="p" className="status-pill">
          <span className="status-pill__dot" aria-hidden="true" />
          {profile.status.label}
        </Reveal>
      )}

      <Reveal as="h1" delay={0.05} className="hero__name">
        {profile.name}
      </Reveal>

      <Reveal as="p" delay={0.1} className="hero__role">
        {profile.role}
      </Reveal>

      <Reveal as="p" delay={0.15} className="hero__summary">
        {profile.summary}
      </Reveal>

      <Reveal delay={0.2} className="hero__actions">
        <a href="#projects" className="button button--primary">
          View projects
          <Icon name="arrowRight" size={16} />
        </a>
        <a href={resumeUrl} className="button button--ghost" download>
          <Icon name="download" size={16} />
          Download resume
        </a>
      </Reveal>

      <Reveal delay={0.25} className="hero__meta">
        <span className="hero__location">
          <Icon name="location" size={15} />
          {profile.location}
        </span>

        <span className="hero__divider" aria-hidden="true" />

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
                <Icon name={social.icon} size={18} />
              </a>
            </li>
          ))}
        </ul>
      </Reveal>
    </div>
  </section>
)

export default Hero
