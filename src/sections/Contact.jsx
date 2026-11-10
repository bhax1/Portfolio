import { Reveal, SectionHeader, Magnetic } from '../components'
import useActiveSection from '../hooks/useActiveSection'
import { profile, socials, contact } from '../data'

const Contact = ({ setActiveSection }) => {
  useActiveSection('contact', setActiveSection)

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <SectionHeader index="05" label="Contact" title="Get In Touch" />
        
        <div className="contact-container">
          <Reveal className="contact-info">
            <h3 className="contact-heading">{contact.heading}</h3>
            <p className="contact-text">{contact.text}</p>
            
            <div className="contact-methods">
              <div className="contact-method">
                <div className="method-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="method-details">
                  <h4>Email Me</h4>
                  <a href={`mailto:${profile.email}`}>{profile.email}</a>
                </div>
              </div>
              
              <div className="contact-method">
                <div className="method-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="method-details">
                  <h4>Location</h4>
                  <p>{profile.location}</p>
                </div>
              </div>
            </div>
            
            <div className="social-links">
              {socials.map((social) => (
                <a key={social.key} href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                  <i className={social.icon}></i>
                </a>
              ))}
            </div>
          </Reveal>
          
          <Reveal className="contact-form" delay={0.15}>
            <form action={`https://formsubmit.co/${contact.formRecipient}`} method="POST">
              <input type="hidden" name="_subject" value={contact.formSubject} />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_next" value="#" />
              
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" name="subject" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="5" required></textarea>
              </div>
              
              <Magnetic strength={0.15}>
                <button type="submit" className="btn btn-primary btn-block">
                  <span>Send Message <i className="fas fa-paper-plane"></i></span>
                </button>
              </Magnetic>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default Contact