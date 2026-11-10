import { motion } from 'framer-motion'

import { SectionHeader, Magnetic } from '../components'
import useActiveSection from '../hooks/useActiveSection'

import { projects, getSocial } from '../data'

const github = getSocial('github')

// A button only shows when its link is a real URL (empty / '#' / missing = hidden).
const hasLink = (url) => Boolean(url) && url !== '#'

const Projects = ({ setActiveSection }) => {
  useActiveSection('projects', setActiveSection)

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <SectionHeader index="03" label="Work" title="Projects" />

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              className="project-card"
              initial={{ opacity: 0, y: 48 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: (index % 2) * 0.12, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, margin: '-8% 0px' }}
            >
              <div className="project-image-container">
                <motion.div
                  className="project-image-reveal"
                  initial={{ clipPath: 'inset(0 0 100% 0)' }}
                  whileInView={{ clipPath: 'inset(0 0 0% 0)' }}
                  viewport={{ once: true, margin: '-8% 0px' }}
                  transition={{ duration: 1.1, delay: 0.15, ease: [0.76, 0, 0.24, 1] }}
                >
                  {project.image && (
                    <img
                      src={project.image}
                      alt={`${project.title} preview`}
                      className="project-thumbnail"
                      loading="lazy"
                    />
                  )}
                </motion.div>
                <span className="project-number">{String(index + 1).padStart(2, '0')}</span>
              </div>

              <div className="card-top">
                <h3 className="card-title">{project.title}</h3>
                {(hasLink(project.code) || hasLink(project.demo)) && (
                  <div className="external-links">
                    {hasLink(project.code) && (
                      <a href={project.code} className="link-icon" aria-label={`${project.title} source code`} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github"></i>
                      </a>
                    )}
                    {hasLink(project.demo) && (
                      <a href={project.demo} className="link-icon" aria-label={`${project.title} live demo`} target="_blank" rel="noopener noreferrer">
                        <i className="fas fa-arrow-up-right-from-square"></i>
                      </a>
                    )}
                  </div>
                )}
              </div>
              <p className="card-description">{project.description}</p>
              <ul className="card-tech">
                {[...new Set(project.tech)].map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>

        <div className="view-more">
          <Magnetic>
            <a href={github.url} className="btn btn-outline" target="_blank" rel="noopener noreferrer">
              <span>View More on GitHub</span>
            </a>
          </Magnetic>
        </div>
      </div>
    </section>
  )
}

export default Projects
