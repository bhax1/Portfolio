import { motion } from 'framer-motion'
import { useEffect } from 'react'

import profileImage from '../assets/profile-pic.png'

const About = ({ setActiveSection }) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection('about')
          }
        })
      },
      { threshold: 0.5 }
    )
    
    const about = document.querySelector('#about')
    if (about) observer.observe(about)
    
    return () => {
      if (about) observer.unobserve(about)
    }
  }, [setActiveSection])

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
        </div>
        
        <div className="about-grid">
          <motion.div 
            className="about-content"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="about-text">
              <p>
                I'm a Computer Science student with a passion for building digital solutions that make an impact. 
                My journey in tech began with simple Java applications and has evolved into full-stack development 
                across multiple platforms.
              </p>
              <p>
                Currently, I'm expanding my expertise into <strong>machine learning</strong> and <strong>cloud architecture</strong>, 
                while continuing to refine my skills in mobile and web development. I believe in continuous learning 
                and pushing the boundaries of what's possible with code.
              </p>
            </div>
            
            <div className="tech-stack">
              <h3>Languages I Use</h3>
              <div className="tech-tags">
                {['Python', 'Java', 'C++', 'JavaScript', 'PHP', 'Dart', 'HTML', 'CSS'].map((language) => (
                  <motion.span 
                    key={language}
                    className="tech-tag"
                    whileHover={{ scale: 1.05, y: -2 }}
                  >
                    {language}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="about-image"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="image-wrapper">
              <img
                src={profileImage}
                alt="About me"
                className="about-photo"
                loading="lazy"
              />
              <div className="image-highlight"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About