import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

import profileImage from '../assets/profile-pic.png'
import { Reveal, SectionHeader } from '../components'
import useActiveSection from '../hooks/useActiveSection'

const languages = ['Python', 'Java', 'C++', 'JavaScript', 'PHP', 'Dart', 'HTML', 'CSS']

const About = ({ setActiveSection }) => {
  useActiveSection('about', setActiveSection)

  // Subtle parallax on the photo.
  const imageRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: imageRef, offset: ['start end', 'end start'] })
  const imgY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])

  return (
    <section id="about" className="about-section">
      <div className="container">
        <SectionHeader index="01" label="About" title="About Me" />

        <div className="about-grid">
          <div className="about-content">
            <div className="about-text">
              <Reveal>
                <p>
                  I'm a Computer Science student with a passion for building digital solutions that make an impact.
                  My journey in tech began with simple Java applications and has evolved into full-stack development
                  across multiple platforms.
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <p>
                  Currently, I'm expanding my expertise into <strong>machine learning</strong> and <strong>cloud architecture</strong>,
                  while continuing to refine my skills in mobile and web development. I believe in continuous learning
                  and pushing the boundaries of what's possible with code.
                </p>
              </Reveal>
            </div>

            <Reveal delay={0.2} className="tech-stack">
              <h3>Languages I Use</h3>
              <div className="tech-tags">
                {languages.map((language, i) => (
                  <motion.span
                    key={language}
                    className="tech-tag"
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.05, duration: 0.5 }}
                    whileHover={{ y: -3 }}
                  >
                    {language}
                  </motion.span>
                ))}
              </div>
            </Reveal>
          </div>

          <motion.div
            className="about-image"
            ref={imageRef}
            initial={{ clipPath: 'inset(100% 0% 0% 0%)' }}
            whileInView={{ clipPath: 'inset(0% 0% 0% 0%)' }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
          >
            <motion.img
              src={profileImage}
              alt="Bob Ongoy"
              className="about-photo"
              loading="lazy"
              style={{ y: imgY, scale: 1.18 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
