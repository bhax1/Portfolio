import Icon from '../components/Icon'
import Reveal from '../components/Reveal'
import Section from '../components/Section'
import { profile, socials } from '../data'

const Contact = ({ number }) => (
  <Section
    id="contact"
    number={number}
    eyebrow="Contact"
    title="Get in touch"
    description="Open to internships, freelance work and collaboration. The fastest way to reach me is email."
  >
    <div className="contact">
      <Reveal className="contact__details">
        <a className="contact__row" href={`mailto:${profile.email}`}>
          <Icon name="mail" size={18} />
          <span>
            <span className="contact__label">Email</span>
            <span className="contact__value">{profile.email}</span>
          </span>
        </a>

        <p className="contact__row">
          <Icon name="location" size={18} />
          <span>
            <span className="contact__label">Location</span>
            <span className="contact__value">{profile.location}</span>
          </span>
        </p>

        <ul className="social-list contact__socials">
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

      <Reveal delay={0.1} className="contact__form-wrap">
        <form className="contact-form" action={`https://formsubmit.co/${profile.email}`} method="POST">
          <input type="hidden" name="_subject" value="New message from your portfolio" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />

          <div className="field">
            <label htmlFor="contact-name">Name</label>
            <input id="contact-name" name="name" type="text" autoComplete="name" required />
          </div>

          <div className="field">
            <label htmlFor="contact-email">Email</label>
            <input id="contact-email" name="email" type="email" autoComplete="email" required />
          </div>

          <div className="field">
            <label htmlFor="contact-message">Message</label>
            <textarea id="contact-message" name="message" rows="5" required />
          </div>

          <button type="submit" className="button button--primary button--block">
            <Icon name="send" size={16} />
            Send message
          </button>
        </form>
      </Reveal>
    </div>
  </Section>
)

export default Contact
