import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

import { SectionHeader } from '../components'
import useActiveSection from '../hooks/useActiveSection'
import { skills as tabs } from '../data'

const Skills = ({ setActiveSection }) => {
  const [activeTab, setActiveTab] = useState('languages')

  useActiveSection('skills', setActiveSection)

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <SectionHeader index="02" label="Skills" title="Skills & Expertise" />

        <div className="skills-tabs">
          <div className="tab-buttons" role="tablist">
            {Object.keys(tabs).map((tab) => (
              <button
                key={tab}
                role="tab"
                aria-selected={activeTab === tab}
                className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {activeTab === tab && (
                  <motion.span
                    layoutId="tab-underline"
                    className="tab-underline"
                    transition={{ type: 'spring', stiffness: 400, damping: 34 }}
                  />
                )}
                <span>{tab.charAt(0).toUpperCase() + tab.slice(1)}</span>
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              className="skills-grid"
              key={activeTab}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, transition: { duration: 0.15 } }}
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.04 } } }}
            >
              {tabs[activeTab].map((skill) => (
                <motion.div
                  className="skill-card"
                  key={skill.name}
                  variants={{
                    hidden: { opacity: 0, y: 16, scale: 0.96 },
                    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } }
                  }}
                  whileHover={{ y: -4 }}
                >
                  <div className="skill-icon">
                    {skill.icon.startsWith('devicon-') ? (
                      <i className={skill.icon}></i>
                    ) : (
                      <span>{skill.icon}</span>
                    )}
                  </div>
                  <h3>{skill.name}</h3>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

export default Skills
