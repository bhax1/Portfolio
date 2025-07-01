import { motion } from 'framer-motion'
import { useEffect } from 'react'

const Contact = ({ setActiveSection }) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection('contact')
          }
        })
      },
      { threshold: 0.5 }
    )
    
    const contact = document.querySelector('#contact')
    if (contact) observer.observe(contact)
    
    return () => {
      if (contact) observer.unobserve(contact)
    }
  }, [setActiveSection])

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Get In Touch</h2>
        </div>
        
        <div className="contact-container">
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="contact-heading">Let's build something amazing together!</h3>
            <p className="contact-text">
              I'm currently seeking internship opportunities for Summer 2024. 
              Whether you have a project idea or just want to connect, I'd love to hear from you.
            </p>
            
            <div className="contact-methods">
              <div className="contact-method">
                <div className="method-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="method-details">
                  <h4>Email Me</h4>
                  <a href="mailto:b.ongoy.534716@umindanao.edu.ph">b.ongoy.534716@umindanao.edu.ph</a>
                </div>
              </div>
              
              <div className="contact-method">
                <div className="method-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="method-details">
                  <h4>Location</h4>
                  <p>Davao City, Philippines</p>
                </div>
              </div>
            </div>
            
            <div className="social-links">
              <a href="https://github.com/bhax1" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/bobandreongoy/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://www.facebook.com/bobandre.joseongoy" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            className="contact-form"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <form action="https://formsubmit.co/b.ongoy.534716@umindanao.edu.ph" method="POST">
              <input type="hidden" name="_subject" value="New message from portfolio!" />
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
              
              <button type="submit" className="btn btn-primary btn-block">
                Send Message <i className="fas fa-paper-plane"></i>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact