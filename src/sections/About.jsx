import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

import { Reveal, SectionHeader } from '../components'
import useActiveSection from '../hooks/useActiveSection'
import { profile, about } from '../data'

const { languages } = about

// Renders **bold** segments of a string as <strong>.
const renderRich = (text) =>
  text.split(/\*\*(.+?)\*\*/g).map((part, i) => (i % 2 ? <strong key={i}>{part}</strong> : part))

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
              {about.paragraphs.map((paragraph, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <p>{renderRich(paragraph)}</p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.2} className="tech-stack">
              <h3>{about.languagesTitle}</h3>
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
              src={profile.photo}
              alt={profile.name}
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
