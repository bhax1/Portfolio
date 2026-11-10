import { useRef } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'

import { SectionHeader } from '../components'
import useActiveSection from '../hooks/useActiveSection'

const education = [
  {
    period: 'Aug 2022 - Present',
    title: 'Bachelor of Science in Computer Science',
    institution: 'University of Mindanao (Matina)',
    details: [
      'Specializing in software development and cloud technologies',
      'Coursework includes Data Structures, Algorithms, Database Systems',
      'Focus on Web, Desktop, and Mobile Development'
    ]
  }
]

const experience = [
  {
    period: 'Oct 2024 - Present',
    title: 'Member - University Internal Organizations',
    institution: 'UMSDC | DataOwls',
    details: [
      'Participated in technical workshops and coding training',
      'Collaborative projects developing problem-solving and teamwork skills',
      'Seminars on emerging technologies and career development'
    ]
  }
]

const TimelineItem = ({ item, index }) => (
  <motion.div
    className="timeline-item"
    initial={{ opacity: 0, y: 32 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-10% 0px' }}
    transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
  >
    <motion.span
      className="timeline-dot"
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
      transition={{ type: 'spring', stiffness: 400, damping: 14, delay: 0.2 }}
    />
    <div className="timeline-period">{item.period}</div>
    <div className="timeline-content">
      <h4>{item.title}</h4>
      <h5>{item.institution}</h5>
      <ul>
        {item.details.map((detail, i) => (
          <li key={i}>{detail}</li>
        ))}
      </ul>
    </div>
  </motion.div>
)

const Journey = ({ setActiveSection }) => {
  useActiveSection('journey', setActiveSection)

  // The vertical line draws itself as the section scrolls past.
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 70%', 'end 60%'] })
  const scaleY = useSpring(scrollYProgress, { stiffness: 90, damping: 28 })

  return (
    <section id="journey" className="journey-section">
      <div className="container">
        <SectionHeader index="04" label="Journey" title="My Journey" />

        <div className="journey-timeline" ref={ref}>
          <div className="timeline-track">
            <motion.div className="timeline-progress" style={{ scaleY }} />
          </div>

          <div className="timeline-group">
            <h3 className="timeline-heading">
              <i className="fas fa-graduation-cap"></i> Education
            </h3>
            {education.map((item, i) => (
              <TimelineItem key={item.title} item={item} index={i} />
            ))}
          </div>

          <div className="timeline-group">
            <h3 className="timeline-heading">
              <i className="fa-brands fa-connectdevelop"></i> Affiliation
            </h3>
            {experience.map((item, i) => (
              <TimelineItem key={item.title} item={item} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Journey
